import type { Meta, StoryObj } from "@storybook/react";
import InputLabel from ".";

const meta: Meta<typeof InputLabel> = {
  title: "Components/InputLabel",
  component: InputLabel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email Address",
    htmlFor: "email",
  },
};

export const Required: Story = {
  args: {
    children: "Password",
    htmlFor: "password",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Username",
    htmlFor: "username",
    disabled: true,
  },
};

export const RequiredAndDisabled: Story = {
  args: {
    children: "Full Name",
    htmlFor: "fullname",
    required: true,
    disabled: true,
  },
};
