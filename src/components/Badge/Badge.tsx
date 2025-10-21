import './Badge.css';

export interface BadgeProps {
  /**
   * Texte affiché dans le badge
   */
  text: string;
  /**
   * Variante de couleur du badge
   */
  variant?: 'info' | 'success' | 'warning' | 'danger';
  /**
   * Taille du badge
   */
  size?: 'small' | 'medium';
  /**
   * Badge avec bordure arrondie complète (pill)
   */
  pill?: boolean;
  /**
   * Icône optionnelle avant le texte
   */
  icon?: string;
}

export function Badge({
  text,
  variant = 'info',
  size = 'medium',
  pill = false,
  icon,
}: BadgeProps) {
  return (
    <span
      className={`badge badge--${variant} badge--${size} ${pill ? 'badge--pill' : ''}`}
      role="status"
    >
      {icon && <span className="badge__icon">{icon}</span>}
      {text}
    </span>
  );
}
