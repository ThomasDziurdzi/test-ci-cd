import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      description: 'Couleur du badge',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Taille du badge',
    },
    pill: {
      control: 'boolean',
      description: 'Badge complètement arrondi',
    },
    icon: {
      control: 'text',
      description: 'Emoji ou icône à afficher',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Story 1 : Info (par défaut)
export const Info: Story = {
  args: {
    text: 'Information',
    variant: 'info',
  },
};

// Story 2 : Success
export const Success: Story = {
  args: {
    text: 'Validé',
    variant: 'success',
  },
};

// Story 3 : Warning
export const Warning: Story = {
  args: {
    text: 'Attention',
    variant: 'warning',
  },
};

// Story 4 : Danger
export const Danger: Story = {
  args: {
    text: 'Erreur',
    variant: 'danger',
  },
};

// Story 5 : Small size
export const Small: Story = {
  args: {
    text: 'Petit badge',
    size: 'small',
    variant: 'info',
  },
};

// Story 6 : Pill style
export const Pill: Story = {
  args: {
    text: 'Badge arrondi',
    variant: 'success',
    pill: true,
  },
};

// Story 7 : Avec icône
export const WithIcon: Story = {
  args: {
    text: 'Nouveau',
    variant: 'info',
    icon: '🎉',
  },
};

// Story 8 : Success avec icône check
export const SuccessWithCheck: Story = {
  args: {
    text: 'Terminé',
    variant: 'success',
    icon: '✓',
  },
};

// Story 9 : Warning avec icône
export const WarningWithIcon: Story = {
  args: {
    text: 'En attente',
    variant: 'warning',
    icon: '⏳',
  },
};

// Story 10 : Danger avec icône
export const DangerWithIcon: Story = {
  args: {
    text: 'Critique',
    variant: 'danger',
    icon: '⚠️',
  },
};

// Story 11 : Cas d'usage réel - Statuts
export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge text="Brouillon" variant="info" icon="📝" />
      <Badge text="En cours" variant="warning" icon="⏳" />
      <Badge text="Terminé" variant="success" icon="✓" />
      <Badge text="Annulé" variant="danger" icon="✗" />
    </div>
  ),
};

// Story 12 : Playground
export const Playground: Story = {
  args: {
    text: 'Badge personnalisé',
    variant: 'info',
    size: 'medium',
    pill: false,
    icon: '',
  },
};
