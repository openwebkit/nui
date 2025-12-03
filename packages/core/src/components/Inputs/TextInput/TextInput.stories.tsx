import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import TextInput from ".";
import type { ITextInputProps } from ".";
import { Mail, Search, Eye, EyeOff, Lock, Phone, Check, X } from "lucide-react";

const meta = {
  title: "Components/Inputs/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    helpText: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    readOnly: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "tel", "url", "number"],
    },
    name: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<ITextInputProps>;

export default meta;
type Story = StoryObj<ITextInputProps>;

// Type-safe TextInput component wrapper to fix typing issues
const SafeTextInput = (props: any) => <TextInput {...props} />;

// Interactive playground story
export const InteractivePlayground: Story = {
  name: "Interactive Playground",
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div>
        <TextInput
          label="Interactive Input"
          placeholder="Type something..."
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          setValue={(name: string, val: string) => setValue(val)}
          {...args}
          name="interactive-input"
        />
      </div>
    );
  },
}; // Size comparison story

export const SizeComparison: Story = {
  name: "Size Comparison",
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    const [values, setValues] = useState<Record<string, string>>({});

    const handleSetValue = (name: string, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">Input Size Comparison</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 max-w-md">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col gap-2">
                <TextInput
                  name={`size-${size}`}
                  label={`${size.toUpperCase()} Size Input`}
                  placeholder={`Placeholder for ${size} size`}
                  value={values[`size-${size}`] || ""}
                  setValue={handleSetValue}
                  size={size}
                  helpText="Helping Text"
                  error="Error text"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 max-w-md">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col gap-2">
                <TextInput
                  name={`size-${size}`}
                  label={`${size.toUpperCase()} Size Input`}
                  placeholder={`Placeholder for ${size} size`}
                  setValue={handleSetValue}
                  size={size}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Input states story
export const InputStates: Story = {
  name: "Input States",
  render: () => {
    const [values, setValues] = useState<Record<string, string>>({
      normal: "Normal input value",
      disabled: "Disabled input value",
      readonly: "Read-only input value",
      error: "Input with error",
    });

    const handleSetValue = (name: string, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">Input States</h3>
        <div className="flex flex-col gap-4 max-w-md">
          <SafeTextInput
            name="normal"
            label="Normal Input"
            placeholder="Enter text..."
            value={values.normal}
            setValue={handleSetValue}
            helpText="This is a normal input field"
          />

          <SafeTextInput
            name="disabled"
            label="Disabled Input"
            placeholder="Can't type here"
            value={values.disabled}
            setValue={handleSetValue}
            disabled
            helpText="This input is disabled"
          />

          <SafeTextInput
            name="readonly"
            label="Read-only Input"
            placeholder="Read-only placeholder"
            value={values.readonly}
            setValue={handleSetValue}
            readOnly
            helpText="This input is read-only"
          />

          <SafeTextInput
            name="error"
            label="Input with Error"
            placeholder="This has an error"
            value={values.error}
            setValue={handleSetValue}
            error="This field contains invalid data"
            required
          />
        </div>
      </div>
    );
  },
};

export const WithVisuals: Story = {
  name: "With Leading and Trailing Visuals",
  render: () => {
    const [values, setValues] = useState<Record<string, string>>({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSetValue = (name: string, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-xl font-bold">Inputs with Visual Elements</h3>
        <div className="flex flex-col gap-4 max-w-md">
          <SafeTextInput
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            leadingVisual={<Mail size={16} className="text-gray-500" />}
            value={values.email || ""}
            setValue={handleSetValue}
          />

          <SafeTextInput
            name="search"
            label="Search"
            placeholder="Search for anything..."
            leadingVisual={<Search size={16} className="text-gray-500" />}
            trailingVisual={
              <X size={16} className="text-gray-400 cursor-pointer" />
            }
            value={values.search || ""}
            setValue={handleSetValue}
          />

          <SafeTextInput
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            leadingVisual={<Lock size={16} className="text-gray-500" />}
            trailingVisual={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
            value={values.password || ""}
            setValue={handleSetValue}
          />

          <SafeTextInput
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            leadingVisual={<Phone size={16} className="text-gray-500" />}
            trailingVisual={<Check size={16} className="text-green-500" />}
            value={values.phone || ""}
            setValue={handleSetValue}
            helpText="Include country code"
          />
        </div>
      </div>
    );
  },
};
