import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import { ColorComprehensiveStates } from "./ButtonStoryHelpers";

const meta = {
  title: "Components/Button/Text",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="text"
      color="primary"
      colorName="Primary"
    />
  ),
};

export const Secondary: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="text"
      color="secondary"
      colorName="Secondary"
    />
  ),
};

export const Danger: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="text"
      color="danger"
      colorName="Danger"
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="text"
      color="success"
      colorName="Success"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="text"
      color="warning"
      colorName="Warning"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <ColorComprehensiveStates variant="text" color="info" colorName="Info" />
  ),
};

export const Gray: Story = {
  render: () => (
    <ColorComprehensiveStates variant="text" color="gray" colorName="Gray" />
  ),
};

export const Black: Story = {
  render: () => (
    <ColorComprehensiveStates variant="text" color="black" colorName="Black" />
  ),
};

export const White: Story = {
  render: () => (
    <div className="p-4 bg-gray-800 rounded">
      <ColorComprehensiveStates
        variant="text"
        color="white"
        colorName="White"
      />
    </div>
  ),
};
