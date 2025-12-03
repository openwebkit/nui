import type { Meta, StoryObj } from "@storybook/react-vite";
import ToolTip from "./index";
import Button from "../Button/Button";

const meta: Meta<typeof ToolTip> = {
  title: "Components/Tooltip",
  component: ToolTip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is a helpful tooltip",
    placement: "bottom",
    arrow: true,
    children: <span>Hover me</span>,
  },
};

export const WithArrow: Story = {
  name: "With Arrow",
  args: {
    title: "Tooltip with arrow",
    arrow: true,
    children: <Button>With Arrow</Button>,
  },
};

export const WithoutArrow: Story = {
  name: "Without Arrow",
  args: {
    title: "Tooltip without arrow",
    arrow: false,
    children: <Button variant="outline">No Arrow</Button>,
  },
};

export const LongContent: Story = {
  name: "Long Content",
  args: {
    title:
      "This is a much longer tooltip content that demonstrates how the tooltip handles text wrapping and longer descriptions. It provides detailed information about the element.",
    arrow: true,
    placement: "top",
    children: <Button>Hover for long tooltip</Button>,
  },
};

export const AllPlacements: Story = {
  name: "All Placements",
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <h3 className="text-xl font-bold text-center">Tooltip Placements</h3>
      <div className="grid grid-cols-3 gap-8 place-items-center min-h-[400px]">
        {/* Top row */}
        <ToolTip title="Top Start" placement="top-start" arrow>
          <Button size="sm">Top Start</Button>
        </ToolTip>
        <ToolTip title="Top Center" placement="top" arrow>
          <Button size="sm">Top</Button>
        </ToolTip>
        <ToolTip title="Top End" placement="top-end" arrow>
          <Button size="sm">Top End</Button>
        </ToolTip>

        {/* Middle row */}
        <ToolTip title="Left" placement="left" arrow>
          <Button size="sm">Left</Button>
        </ToolTip>
        <div className="text-center text-gray-500 text-sm">
          Hover over buttons
          <br />
          to see tooltips
        </div>
        <ToolTip title="Right" placement="right" arrow>
          <Button size="sm">Right</Button>
        </ToolTip>

        {/* Bottom row */}
        <ToolTip title="Bottom Start" placement="bottom-start" arrow>
          <Button size="sm">Bottom Start</Button>
        </ToolTip>
        <ToolTip title="Bottom Center" placement="bottom" arrow>
          <Button size="sm">Bottom</Button>
        </ToolTip>
        <ToolTip title="Bottom End" placement="bottom-end" arrow>
          <Button size="sm">Bottom End</Button>
        </ToolTip>
      </div>
    </div>
  ),
};

export const DifferentElements: Story = {
  name: "Different Elements",
  render: () => (
    <div className="flex items-center justify-center gap-6 p-8">
      <ToolTip title="Button tooltip" arrow>
        <Button>Button</Button>
      </ToolTip>

      <ToolTip title="Info icon tooltip" arrow>
        <div className="p-2 bg-blue-100 rounded-full cursor-pointer">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </ToolTip>

      <ToolTip title="Text element tooltip" arrow>
        <span className="px-3 py-2 bg-gray-100 rounded cursor-pointer">
          Hover this text
        </span>
      </ToolTip>

      <ToolTip title="Disabled button tooltip" arrow>
        <span>
          <Button disabled>Disabled Button</Button>
        </span>
      </ToolTip>
    </div>
  ),
};
