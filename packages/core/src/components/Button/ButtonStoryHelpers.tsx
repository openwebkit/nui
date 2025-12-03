import {
  Mail,
  ExternalLink,
  Save,
  Check,
  Clock,
  Download,
  User,
  Settings,
} from "lucide-react";
import Button from "./Button";
import { MainColor } from "@/types";
import { IButtonProps } from "./useButton";

// Helper component to show all comprehensive states for a color and variant
export const ColorComprehensiveStates = ({
  variant = "solid",
  color,
  colorName,
}: {
  variant?: IButtonProps["variant"];
  color: MainColor;
  colorName: string;
}) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-lg font-semibold capitalize text-gray-800">
      {variant} {colorName}
    </h4>

    {/* Basic States */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Basic States</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <Button variant={variant} color={color}>
          Normal
        </Button>
        <Button variant={variant} color={color} disabled>
          Disabled
        </Button>
        <Button variant={variant} color={color} loading>
          Loading
        </Button>
        <Button variant={variant} color={color} loading loadingText="Saving...">
          Custom Loading
        </Button>
      </div>
    </div>

    {/* With Icons */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">With Icons</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          variant={variant}
          color={color}
          leadingComp={<Mail size={16} />}
        >
          Leading Icon
        </Button>
        <Button
          variant={variant}
          color={color}
          trailingComp={<ExternalLink size={16} />}
        >
          Trailing Icon
        </Button>
        <Button
          variant={variant}
          color={color}
          leadingComp={<Save size={16} />}
          trailingComp={<Check size={16} />}
        >
          Both Icons
        </Button>
        <Button
          variant={variant}
          color={color}
          leadingComp={<User size={16} />}
          disabled
        >
          Disabled + Icon
        </Button>
        <Button
          variant={variant}
          color={color}
          leadingComp={<Clock size={16} />}
          loading
        >
          Loading + Icon
        </Button>
      </div>
    </div>

    {/* Different Sizes */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Sizes</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <Button variant={variant} color={color} size="xs">
          Extra small
        </Button>
        <Button variant={variant} color={color} size="sm">
          Small
        </Button>
        <Button variant={variant} color={color} size="md">
          Medium
        </Button>
        <Button variant={variant} color={color} size="lg">
          Large
        </Button>
        <Button variant={variant} color={color} size="xl">
          Extra Large
        </Button>
      </div>
    </div>

    {/* Border Types */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Border Types</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <Button variant={variant} color={color} borderType="rounded">
          Rounded
        </Button>
        <Button variant={variant} color={color} borderType="circle">
          Circle
        </Button>
        <Button variant={variant} color={color} borderType="square">
          Square
        </Button>
      </div>
    </div>

    {/* Full Width */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Full Width</h5>
      <div className="w-80">
        <Button variant={variant} color={color} fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
  </div>
);

// Icon examples for stories
export const iconExamples = {
  mail: <Mail size={16} />,
  externalLink: <ExternalLink size={16} />,
  save: <Save size={16} />,
  check: <Check size={16} />,
  clock: <Clock size={16} />,
  download: <Download size={16} />,
  user: <User size={16} />,
  settings: <Settings size={16} />,
};
