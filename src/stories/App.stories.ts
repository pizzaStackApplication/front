import type { Meta, StoryObj } from '@storybook/react';

import { App } from '../App';

const meta: Meta<typeof App> = {
  title: 'Example/App',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
