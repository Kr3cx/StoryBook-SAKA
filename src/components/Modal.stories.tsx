import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div className="min-h-80 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
        <Story />
      </div>
    ),
  ],
  args: {
    size: 'medium',
    type: 'simple',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h3 className="text-lg font-semibold mb-4">Default Modal</h3>
            <p>This is the default modal content.</p>
          </div>
        </Modal>
      </>
    );
  },
};

export const ModalWithImportContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h3 className="text-lg font-semibold mb-4">Import Content Modal</h3>
            <p>This modal is used to import content.</p>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    size: 'large',
    type: "rounded",
  },
};

export const ModalWithDeleteContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Delete Content Modal</h3>
            <p>Are you sure you want to delete this content?</p>
            <div className="mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">
                Confirm Delete
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    size: 'small',
    type: 'simple',
  },
};
