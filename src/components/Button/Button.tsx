import './Button.css';

export interface ButtonProps {
  /**
   * Variante visuelle du bouton
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  /**
   * Taille du bouton
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Bouton désactivé
   */
  disabled?: boolean;
  /**
   * État de chargement
   */
  loading?: boolean;
  /**
   * Contenu du bouton
   */
  children: React.ReactNode;
  /**
   * Gestionnaire de clic
   */
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${loading ? 'btn--loading' : ''}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <span className="btn__spinner">⏳</span> : null}
      <span className={loading ? 'btn__text--loading' : ''}>{children}</span>
    </button>
  );
}
