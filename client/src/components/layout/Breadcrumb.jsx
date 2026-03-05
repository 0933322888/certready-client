import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Renders SEO-friendly breadcrumb navigation.
 * @param {Array<{ name: string, url: string }>} items - Breadcrumb items (last item is current page, not linked)
 * @param {string} [ariaLabel] - Optional aria-label for the nav (defaults to common.ariaLabelBreadcrumb)
 */
export default function Breadcrumb({ items, ariaLabel }) {
  const { t } = useTranslation();
  if (!items || !items.length) return null;

  return (
    <nav className="text-sm text-text-muted mb-8" aria-label={ariaLabel || t('common.ariaLabelBreadcrumb')}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index}>
            {index > 0 && <span className="mx-2">/</span>}
            {isLast ? (
              <span className="text-text-primary">{item.name}</span>
            ) : (
              <Link to={item.url} className="hover:text-accent transition-colors">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
