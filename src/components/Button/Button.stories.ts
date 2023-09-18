import type { Meta, StoryObj } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
// @ts-ignore
import results from '../../../jest-test-results.json';

import  Button  from './Button';

const meta = {
  title: 'UI Library/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [withTests({ results })]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button 1',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button 2',
  },
};
