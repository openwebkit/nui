import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl", "40px", 20];

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">Avatar Sizes with Images</h3>
        <div className="flex items-end gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar
                size={size}
                label="John Doe"
                image="https://i.pravatar.cc/150?img=5"
              />
              <span className="text-sm text-gray-600">{size}</span>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar size={size} label="John Doe" />
              <span className="text-sm text-gray-600">{size}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div className="flex flex-col gap-8 p-6">
        <h3 className="text-xl font-bold">Avatar States</h3>

        {/* Without Image */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Without Image (Initial)
          </h4>
          <div className="flex items-end gap-6">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar size={size} label="John Doe" />
                <span className="text-sm text-gray-600">{size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* With Image */}
        <div>
          <h4 className="text-lg font-semibold mb-4">With Image</h4>
          <div className="flex items-end gap-6">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar
                  size={size}
                  label="Jane Smith"
                  image="https://i.pravatar.cc/150?img=5"
                />
                <span className="text-sm text-gray-600">{size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loading State */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Loading State</h4>
          <div className="flex items-end gap-6">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar size={size} label="Loading User" isLoading />
                <span className="text-sm text-gray-600">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
