import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { IconButtonColorComprehensiveStates } from "./IconButtonStoryHelpers";

const meta = {
  title: "Components/IconButton/Solid",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="primary"
      colorName="Primary"
    />
  ),
};

export const Secondary: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="secondary"
      colorName="Secondary"
    />
  ),
};

export const Danger: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="danger"
      colorName="Danger"
    />
  ),
};

export const Success: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="success"
      colorName="Success"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="warning"
      colorName="Warning"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="info"
      colorName="Info"
    />
  ),
};

export const Gray: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="gray"
      colorName="Gray"
    />
  ),
};

export const Black: Story = {
  render: () => (
    <IconButtonColorComprehensiveStates
      variant="solid"
      color="black"
      colorName="Black"
    />
  ),
};

export const White: Story = {
  render: () => (
    <div className="p-4 bg-gray-100 rounded">
      <IconButtonColorComprehensiveStates
        variant="solid"
        color="white"
        colorName="White"
      />
    </div>
  ),
};
