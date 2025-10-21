import type { ReactNode } from 'react';
import './Card.css';

export interface CardProps {
  /**
   * Titre de la carte
   */
  title: string;
  /**
   * Description de la carte
   */
  description?: string;
  /**
   * URL de l'image
   */
  imageUrl?: string;
  /**
   * Texte alternatif de l'image
   */
  imageAlt?: string;
  /**
   * Badge à afficher (ex: "New", "Sale")
   */
  badge?: string;
  /**
   * Contenu du footer
   */
  footer?: ReactNode;
  /**
   * Action au clic
   */
  onClick?: () => void;
  /**
   * Variante de la carte
   */
  variant?: 'default' | 'elevated' | 'outlined';
}

export function Card({
  title,
  description,
  imageUrl,
  imageAlt,
  badge,
  footer,
  onClick,
  variant = 'default',
}: CardProps) {
  return (
    <div
      className={`card card--${variant} ${onClick ? 'card--clickable' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {badge && <span className="card__badge">{badge}</span>}

      {imageUrl && (
        <div className="card__image-container">
          <img src={imageUrl} alt={imageAlt || title} className="card__image" />
        </div>
      )}

      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}
