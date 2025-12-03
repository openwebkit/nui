import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { iconExamples } from "./IconButtonStoryHelpers";
import { Settings, Heart, Download, Trash2, Plus, Menu, X } from "lucide-react";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
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
    loading: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractivePlayground: Story = {
  name: "Interactive Playground",
  args: {
    children: <Settings size={16} />,
    variant: "solid",
    size: "md",
    color: "primary",
    borderType: "rounded",
    disabled: false,
    loading: false,
    "aria-label": "Settings",
  },
};

// UTILITY STORIES
export const SizeComparison: Story = {
  name: "Size Comparison",
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    const iconSizes = [12, 14, 16, 20, 24] as const;

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">IconButton Size Comparison</h3>
        <div className="flex items-end gap-4">
          {sizes.map((size, index) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <IconButton size={size} aria-label={`${size} button`}>
                <Settings size={iconSizes[index]} />
              </IconButton>
              <span className="text-sm text-gray-600">{size}</span>
              <span className="text-xs text-gray-500">
                {iconSizes[index]}px icon
              </span>
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
              <IconButton
                borderType={borderType}
                aria-label={`${borderType} button`}
              >
                <Settings size={16} />
              </IconButton>
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

export const CommonIconPatterns: Story = {
  name: "Common Icon Patterns",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Common Icon Button Patterns</h3>

      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            Navigation & Actions
          </h4>
          <div className="flex items-center gap-2">
            <IconButton aria-label="Close" color="gray">
              {iconExamples.md.close}
            </IconButton>
            <IconButton aria-label="Menu" color="gray">
              {iconExamples.md.menu}
            </IconButton>
            <IconButton aria-label="Search" color="primary">
              {iconExamples.md.search}
            </IconButton>
            <IconButton aria-label="Settings" color="gray">
              {iconExamples.md.settings}
            </IconButton>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            Social Actions
          </h4>
          <div className="flex items-center gap-2">
            <IconButton aria-label="Like" color="danger" variant="outline">
              {iconExamples.md.heart}
            </IconButton>
            <IconButton aria-label="Favorite" color="warning" variant="outline">
              {iconExamples.md.star}
            </IconButton>
            <IconButton aria-label="Share" color="info" variant="outline">
              {iconExamples.md.share}
            </IconButton>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            File Actions
          </h4>
          <div className="flex items-center gap-2">
            <IconButton aria-label="Download" color="success">
              {iconExamples.md.download}
            </IconButton>
            <IconButton aria-label="Upload" color="info">
              {iconExamples.md.upload}
            </IconButton>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            CRUD Actions
          </h4>
          <div className="flex items-center gap-2">
            <IconButton aria-label="Add" color="success" borderType="circle">
              {iconExamples.md.plus}
            </IconButton>
            <IconButton aria-label="Edit" color="primary" variant="outline">
              {iconExamples.md.edit}
            </IconButton>
            <IconButton aria-label="Delete" color="danger" variant="outline">
              {iconExamples.md.trash}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const IconSizeGuidelines: Story = {
  name: "Icon Size Guidelines",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Icon Size Guidelines</h3>
      <p className="text-sm text-gray-600 max-w-2xl">
        For optimal visual balance, use the recommended icon sizes for each
        button size. These guidelines ensure icons are neither too large nor too
        small relative to the button container.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-32 text-sm font-medium">xs (20px)</div>
          <IconButton size="xs" aria-label="Example">
            <Settings size={12} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            size=&#123;12&#125;
          </code>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 text-sm font-medium">sm (24px)</div>
          <IconButton size="sm" aria-label="Example">
            <Settings size={14} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            size=&#123;14&#125;
          </code>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 text-sm font-medium">md (32px)</div>
          <IconButton size="md" aria-label="Example">
            <Settings size={16} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            size=&#123;16&#125;
          </code>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 text-sm font-medium">lg (40px)</div>
          <IconButton size="lg" aria-label="Example">
            <Settings size={20} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            size=&#123;20&#125;
          </code>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 text-sm font-medium">xl (48px)</div>
          <IconButton size="xl" aria-label="Example">
            <Settings size={24} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            size=&#123;24&#125;
          </code>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityExamples: Story = {
  name: "Accessibility Examples",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Accessibility Best Practices</h3>
      <p className="text-sm text-gray-600 max-w-2xl">
        Icon buttons should always include an aria-label to provide context for
        screen readers. Here are examples of properly labeled icon buttons.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <IconButton aria-label="Close dialog">
            <X size={16} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            aria-label="Close dialog"
          </code>
        </div>

        <div className="flex items-center gap-4">
          <IconButton aria-label="Open menu">
            <Menu size={16} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            aria-label="Open menu"
          </code>
        </div>

        <div className="flex items-center gap-4">
          <IconButton aria-label="Add to favorites" color="warning">
            <Heart size={16} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            aria-label="Add to favorites"
          </code>
        </div>

        <div className="flex items-center gap-4">
          <IconButton aria-label="Download file" color="success">
            <Download size={16} />
          </IconButton>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">
            aria-label="Download file"
          </code>
        </div>
      </div>
    </div>
  ),
};

export const WithLoadingState: Story = {
  name: "Loading State",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Icon Buttons with Loading State</h3>
      <div className="flex items-center gap-4 flex-wrap">
        <IconButton loading aria-label="Loading">
          <Settings size={16} />
        </IconButton>
        <IconButton loading color="secondary" aria-label="Loading">
          <Download size={16} />
        </IconButton>
        <IconButton
          loading
          color="danger"
          variant="outline"
          aria-label="Loading"
        >
          <Trash2 size={16} />
        </IconButton>
        <IconButton loading color="success" variant="text" aria-label="Loading">
          <Plus size={16} />
        </IconButton>
      </div>
    </div>
  ),
};

export const DisabledState: Story = {
  name: "Disabled State",
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-xl font-bold">Disabled Icon Buttons</h3>
      <div className="flex items-center gap-4 flex-wrap">
        <IconButton disabled aria-label="Disabled">
          <Settings size={16} />
        </IconButton>
        <IconButton disabled color="secondary" aria-label="Disabled">
          <Download size={16} />
        </IconButton>
        <IconButton
          disabled
          color="danger"
          variant="outline"
          aria-label="Disabled"
        >
          <Trash2 size={16} />
        </IconButton>
        <IconButton
          disabled
          color="success"
          variant="text"
          aria-label="Disabled"
        >
          <Plus size={16} />
        </IconButton>
      </div>
    </div>
  ),
};
