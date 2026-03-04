# CertReady

Exam preparation platform for Skilled Trades Ontario certification candidates.

## Stack
- **Frontend:** React 18 + Vite + Tailwind CSS → deployed on Vercel
- **Backend:** Node.js + Express + MongoDB → deployed on Vercel
- **Payments:** Stripe Checkout

## Local Development

1. Clone the repo
2. Copy `.env.example` to `.env` in both `server/` and `client/`
3. Fill in your MongoDB URI, JWT secret, and Stripe keys
4. Run `npm run install:all` from root
5. Run `npm run dev` from root (starts both server on :5000 and client on :5173)

## Google Sign-In (optional)
1. Create a project in [Google Cloud Console](https://console.cloud.google.com/) and enable the **Google+ API** (or **Google Identity Services**)
2. Create OAuth 2.0 credentials (Web application). Add authorized JavaScript origins (e.g. `http://localhost:5173`, your production URL)
3. **Server** `server/.env`: `GOOGLE_CLIENT_ID=<your client id>`
4. **Client** `client/.env`: `VITE_GOOGLE_CLIENT_ID=<same client id>`
5. If these are not set, the app works without Google; only email/password auth is shown.

## Stripe Setup
1. Create a Stripe account at stripe.com
2. Get your test API keys from the Dashboard
3. For webhooks locally: install Stripe CLI, run `stripe listen --forward-to localhost:5000/api/payments/webhook`
4. Copy the webhook signing secret to your `.env`

## Deployment
- Frontend: Connect `/client` to Vercel, set env vars
- Backend: Deploy `/server` to Vercel (e.g. as a serverless function or separate Vercel project), set env vars
- Update `CLIENT_URL` in server env to your frontend URL
- Register Stripe webhook endpoint in Stripe Dashboard

## SEO: Favicon in Google search results
Google often requests `/favicon.ico`. To show your icon in search results, add a `favicon.ico` file in `client/public/` (e.g. 32×32 or 48×48). You can convert `client/public/favicon-48.png` using [favicon.io](https://favicon.io/favicon-converter/) or any ICO generator, then save as `client/public/favicon.ico`.
