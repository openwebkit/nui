import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { IconButtonColorComprehensiveStates } from "./IconButtonStoryHelpers";

const meta = {
  title: "Components/IconButton/Text",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="primary"
      colorName="Primary"
    />
  ),
};

export const Secondary: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="secondary"
      colorName="Secondary"
    />
  ),
};

export const Danger: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="danger"
      colorName="Danger"
    />
  ),
};

export const Success: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="success"
      colorName="Success"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="warning"
      colorName="Warning"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="info"
      colorName="Info"
    />
  ),
};

export const Gray: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="gray"
      colorName="Gray"
    />
  ),
};

export const Black: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="text"
      color="black"
      colorName="Black"
    />
  ),
};

export const White: Story = {
  render: () => (
    <div className="p-4 bg-gray-800 rounded">
      <IconButtonColorComprehensiveStates
        variant="text"
        color="white"
        colorName="White"
      />
    </div>
  ),
};
