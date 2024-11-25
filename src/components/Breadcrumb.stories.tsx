import { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    customSeparator: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    datas: ['Home', 'Caption', 'Caption', 'Caption'],
    variant: "medium",
  },
};

export const Small: Story = {
  args: {
    datas: ['Home', 'Caption', 'Caption', 'Caption'],
    variant: 'small',
  },
};

export const Large: Story = {
  args: {
    datas: ['Home', 'Caption', 'Caption', 'Caption'],
    variant: 'large',
  },
};

export const CustomSeparator: Story = {
  args: {
    datas: ['Home', 'Caption', 'Caption', 'Caption'],
    variant: 'medium',
    customSeparator: <span className="text-red-700">→</span>,
  },
};
