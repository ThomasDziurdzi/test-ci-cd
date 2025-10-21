import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Titre de la carte',
    description:
      'Ceci est une description de la carte avec du contenu exemple.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Belle image',
    description: 'Une carte avec une magnifique image',
    imageUrl: 'https://picsum.photos/320/200',
    imageAlt: 'Image aléatoire',
  },
};

export const WithBadge: Story = {
  args: {
    title: 'Produit en promotion',
    description: 'Profitez de -50% sur ce produit exceptionnel !',
    imageUrl: 'https://picsum.photos/320/200?random=1',
    badge: 'PROMO',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Carte avec actions',
    description: 'Cette carte contient des boutons dans le footer',
    imageUrl: 'https://picsum.photos/320/200?random=2',
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button size="small" variant="secondary">
          Annuler
        </Button>
        <Button size="small" variant="primary">
          Confirmer
        </Button>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    title: 'Carte élevée',
    description: 'Cette carte a une ombre portée',
    variant: 'elevated',
    imageUrl: 'https://picsum.photos/320/200?random=3',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Carte avec bordure',
    description: 'Cette carte a une bordure colorée',
    variant: 'outlined',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Carte cliquable',
    description: 'Cliquez sur cette carte pour déclencher une action',
    imageUrl: 'https://picsum.photos/320/200?random=4',
    badge: 'NOUVEAU',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Carte avec beaucoup de contenu textuel',
    description:
      'Ceci est une description extrêmement longue pour tester comment la carte gère un contenu qui déborde. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://picsum.photos/320/200?random=5',
  },
};

export const WithBadges: Story = {
  args: {
    title: 'Produit Premium',
    description: 'Un produit exceptionnel avec plusieurs statuts',
    imageUrl: 'https://picsum.photos/320/200?random=6',
    footer: (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Badge text="Nouveau" variant="info" icon="🎉" pill />
        <Badge text="Promotion" variant="danger" icon="🔥" pill />
        <Badge text="Stock limité" variant="warning" icon="⚡" size="small" />
      </div>
    ),
  },
};
