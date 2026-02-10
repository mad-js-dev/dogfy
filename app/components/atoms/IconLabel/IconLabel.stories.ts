import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import IconLabel from './IconLabel.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'atoms/IconLabel',
  component: IconLabel,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    trailingIcon: { control: 'text' },
    separator: { control: 'boolean' },
    trailingSeparator: { control: 'boolean' },
  },
  args: {
    label: 'IconLabel',
    separator: false,
    trailingSeparator: false,
  },
} satisfies Meta<typeof IconLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'My label',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'IconLabel',
    icon: 'home',
  },
}

export const WithLeadingImage: Story = {
  args: {
    label: 'My label',
    icon: 'https://picsum.photos/seed/avatar1/24/24.jpg',
  },
}

export const WithTrailingImage: Story = {
  args: {
    label: 'IconLabel',
    trailingIcon: 'https://picsum.photos/seed/avatar2/24/24.jpg',
  },
}

export const WithBothImages: Story = {
  args: {
    label: 'IconLabel',
    icon: 'https://picsum.photos/seed/avatar3/24/24.jpg',
    trailingIcon: 'https://picsum.photos/seed/avatar4/24/24.jpg',
  },
}

export const MixedIconAndImage: Story = {
  args: {
    label: 'IconLabel',
    icon: 'home',
    trailingIcon: 'https://picsum.photos/seed/avatar5/24/24.jpg',
  },
}

export const WithLocalImage: Story = {
  args: {
    label: 'IconLabel',
    icon: './assets/logo.svg',
  },
}

export const OnlyIcon: Story = {
  args: {
    icon: 'home',
  },
}

export const WithLeadingSeparator: Story = {
  args: {
    label: 'IconLabel',
    icon: 'home',
    separator: true,
  },
}

export const WithTrailingSeparator: Story = {
  args: {
    label: 'IconLabel',
    trailingIcon: 'home',
    trailingSeparator: true,
  },
}

export const WithImageAndSeparators: Story = {
  args: {
    label: 'Image with Separators',
    icon: 'https://picsum.photos/seed/icon6/24/24.jpg',
    trailingIcon: 'https://picsum.photos/seed/icon7/24/24.jpg',
    separator: true,
    trailingSeparator: true,
  },
}

export const WithBothSeparators: Story = {
  args: {
    label: 'IconLabel',
    icon: 'home',
    trailingIcon: 'user',
    separator: true,
    trailingSeparator: true,
  },
}
