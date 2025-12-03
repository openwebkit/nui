import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import { ColorComprehensiveStates } from "./ButtonStoryHelpers";

const meta = {
  title: "Components/Button/Outline",
  component: Button,

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="outline"
      color="primary"
      colorName="Primary"
    />
  ),
};

export const Secondary: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="outline"
      color="secondary"
      colorName="Secondary"
    />
  ),
};

export const Danger: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="outline"
      color="danger"
      colorName="Danger"
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="outline"
      color="success"
      colorName="Success"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="outline"
      color="warning"
      colorName="Warning"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <ColorComprehensiveStates variant="outline" color="info" colorName="Info" />
  ),
};

export const Gray: Story = {
  render: () => (
    <ColorComprehensiveStates variant="outline" color="gray" colorName="Gray" />
  ),
};

export const Black: Story = {
  render: () => (
    <ColorComprehensiveStates
      variant="outline"
      color="black"
      colorName="Black"
    />
  ),
};

export const White: Story = {
  render: () => (
    <div className="p-4 bg-gray-800 rounded">
      <ColorComprehensiveStates
        variant="outline"
        color="white"
        colorName="White"
      />
    </div>
  ),
};
