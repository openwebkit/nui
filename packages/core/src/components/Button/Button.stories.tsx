import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import { iconExamples } from "./ButtonStoryHelpers";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "danger",
        "gray",
        "black",
        "white",
        "success",
        "info",
        "warning",
      ],
    },
    borderType: {
      control: { type: "select" },
      options: ["circle", "rounded", "square"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractivePlayground: Story = {
  name: "Interactive Playground",
  args: {
    children: "Interactive Button",
    variant: "solid",
    size: "md",
    color: "primary",
    borderType: "rounded",
    disabled: false,
    fullWidth: false,
    loading: false,
  },
};

// UTILITY STORIES
export const SizeComparison: Story = {
  name: "Size Comparison",
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">Button Size Comparison</h3>
        <div className="flex items-end gap-4">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Button size={size}>Button</Button>
              <span className="text-sm text-gray-600">{size}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const BorderTypeComparison: Story = {
  name: "Border Type Comparison",
  render: () => {
    const borderTypes = ["circle", "rounded", "square"] as const;

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">Border Type Comparison</h3>
        <div className="flex items-center gap-4">
          {borderTypes.map((borderType) => (
            <div key={borderType} className="flex flex-col items-center gap-2">
              <Button borderType={borderType}>Button</Button>
              <span className="text-sm text-gray-600 capitalize">
                {borderType}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const WithIcons: Story = {
  name: "With Icons",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Buttons with Icons</h3>
      <div className="flex items-center gap-4 flex-wrap">
        <Button leadingComp={iconExamples.mail}>Send Email</Button>
        <Button trailingComp={iconExamples.externalLink}>Open Link</Button>
        <Button
          leadingComp={iconExamples.save}
          trailingComp={iconExamples.check}
        >
          Save Changes
        </Button>
        <Button leadingComp={iconExamples.user} disabled>
          Disabled with Icon
        </Button>
        <Button leadingComp={iconExamples.clock} loading>
          Loading with Icon
        </Button>
      </div>
    </div>
  ),
};

export const FullWidthExamples: Story = {
  name: "Full Width Examples",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Full Width Buttons</h3>
      <div className="max-w-md flex flex-col gap-3">
        <Button fullWidth>Full Width Primary</Button>
        <Button fullWidth variant="outline" color="secondary">
          Full Width Outline
        </Button>
        <Button fullWidth variant="text" color="danger">
          Full Width Text
        </Button>
      </div>
    </div>
  ),
};
