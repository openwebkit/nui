import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from ".";
import { Color } from "@/types";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SizeVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" />
        <span className="text-sm">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-sm">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-sm">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-sm">xl</span>
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => {
    const colors: Color[] = [
      "primary",
      "primary-foreground",
      "primary-background",
      "primary-hover",
      "secondary",
      "secondary-foreground",
      "secondary-background",
      "secondary-hover",
      "danger",
      "danger-foreground",
      "danger-background",
      "danger-hover",
      "gray",
      "gray-foreground",
      "gray-background",
      "gray-hover",
      "black",
      "white",
      "success",
      "success-foreground",
      "success-background",
      "success-hover",
      "info",
      "info-foreground",
      "info-background",
      "info-hover",
      "warning",
      "warning-foreground",
      "warning-background",
      "warning-hover",
    ];

    return (
      <div className="grid grid-cols-6 gap-4 p-4">
        {colors.map((color) => (
          <div key={color} className="flex flex-col items-center gap-2">
            <Spinner color={color} />
            <span className="text-xs text-center">{color}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const CurrentColor: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-red-500 flex gap-2 items-center">
        <Spinner color="currentcolor" />
        <span className="text-sm">Current Color (Red)</span>
      </div>
      <div className="text-green-500 flex gap-2 items-center">
        <Spinner color="currentcolor" />
        <span className="text-sm">Current Color (Green)</span>
      </div>
      <div className="text-blue-500 flex gap-2 items-center">
        <Spinner color="currentcolor" />
        <span className="text-sm">Current Color (Blue)</span>
      </div>
    </div>
  ),
};
