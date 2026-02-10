import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import Chip from './Chip.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'molecules/Chips/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' },
    closable: { control: 'boolean' },
    elevated: { control: 'boolean' },
    label: { control: 'text' },
    avatar: { control: 'text' },
    icon: { control: 'text' },
  },
  args: {
    disabled: false,
    selected: false,
    closable: false,
    elevated: false,
    label: 'Chip',
    onClick: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
}

export const Elevated: Story = {
  args: {
    label: 'Elevated Chip',
    elevated: true,
  },
}

export const Selected: Story = {
  args: {
    label: 'Selected Chip',
    selected: true,
  },
}

export const WithAvatar: Story = {
  args: {
    label: 'John Doe',
    avatar: 'John Doe',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Settings',
    icon: 'settings',
  },
}

export const WithImageIcon: Story = {
  args: {
    label: 'Profile',
    icon: 'https://picsum.photos/seed/chip1/18/18.jpg',
  },
}

export const WithMixedIcon: Story = {
  args: {
    label: 'Home',
    icon: 'home',
  },
}

export const Closable: Story = {
  args: {
    label: 'Closable Chip',
    closable: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
}

export const ElevatedWithAvatar: Story = {
  args: {
    label: 'Alice',
    avatar: 'Alice',
    elevated: true,
  },
}

export const SelectedWithIcon: Story = {
  args: {
    label: 'Save',
    icon: 'star',
    selected: true,
  },
}

export const SelectedWithImage: Story = {
  args: {
    label: 'Favorite',
    icon: 'https://picsum.photos/seed/chip2/18/18.jpg',
    selected: true,
  },
}

export const ClosableWithAvatar: Story = {
  args: {
    label: 'Bob',
    avatar: 'Bob',
    closable: true,
  },
}

export const ElevatedSelected: Story = {
  args: {
    label: 'Elevated Selected',
    elevated: true,
    selected: true,
  },
}
