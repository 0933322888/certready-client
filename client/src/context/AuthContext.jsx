import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: true,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return { 
        ...state, 
        user: action.payload.user, 
        token: action.payload.token, 
        loading: false 
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, user: null, token: null, loading: false };
    case 'SET_USER':
      return { ...state, user: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'UPDATE_PURCHASES':
      return { 
        ...state, 
        user: { ...state.user, purchases: action.payload },
        loading: false 
      };
    default:
      return state;
  }
}

function purchaseId(entry) {
  if (!entry) return null;
  if (typeof entry === 'string') return entry;
  if (entry._id) return entry._id.toString();
  return entry.toString?.() ?? null;
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const refreshUser = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({ type: 'SET_LOADING', payload: false });
      return null;
    }
    try {
      const res = await api.get('/auth/me');
      dispatch({ type: 'SET_USER', payload: res.data });
      return res.data;
    } catch {
      dispatch({ type: 'LOGOUT' });
      return null;
    }
  }, []);

  // On mount: fetch current user if token exists
  useEffect(() => {
    if (state.token) {
      refreshUser();
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    // Ensure purchases are fully populated (slug) even if login payload changes
    await refreshUser();
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await api.post('/auth/register', { name, email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    await refreshUser();
    return res.data;
  };

  const loginWithGoogle = async (credential) => {
    const res = await api.post('/auth/google', { credential });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    await refreshUser();
    return res.data;
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  // Helper: check if user owns a course
  const hasPurchased = (courseId) => {
    if (!state.user || !state.user.purchases || !courseId) return false;
    const id = courseId.toString();
    return state.user.purchases.some((purchase) => purchaseId(purchase) === id);
  };

  // Helper: check if user owns a course by slug
  const hasPurchasedBySlug = (courseSlug) => {
    if (!state.user || !state.user.purchases || !courseSlug) return false;
    return state.user.purchases.some(
      (purchase) => purchase && purchase.slug === courseSlug
    );
  };

  return (
    <AuthContext.Provider value={{ 
      ...state, 
      login, 
      register, 
      loginWithGoogle, 
      logout, 
      refreshUser,
      hasPurchased,
      hasPurchasedBySlug,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
