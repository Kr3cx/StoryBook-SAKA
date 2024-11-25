import { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    type: 'notification',
    message: 'Success Message',
    subMessage: 'Give short additional message here. Maximum 2 line.',
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: 'medium',
    type: 'notification',
    message: 'Failed Message',
    subMessage: 'Give short additional message here. Maximum 2 line.',
  },
};

export const Notification: Story = {
  args: {
    variant: 'warning',
    size: 'medium',
    type: 'information',
    message: 'Notification',
    subMessage: 'Hello, world! This is a toast message.',
    time: '11 mins ago',
  },
};
