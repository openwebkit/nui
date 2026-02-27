import {
  X,
  Menu,
  Settings,
  Search,
  Heart,
  Star,
  Share2,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  Info,
} from "lucide-react";
import { IconButton } from "./IconButton";
import { MainColor } from "@/types";
import { IButtonProps } from "../Button/useButton";

// Helper component to show all comprehensive states for a color and variant
export const IconButtonColorComprehensiveStates = ({
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
        <IconButton variant={variant} color={color} aria-label="Normal">
          <Settings size={16} />
        </IconButton>
        <IconButton
          variant={variant}
          color={color}
          disabled
          aria-label="Disabled"
        >
          <Settings size={16} />
        </IconButton>
        <IconButton
          variant={variant}
          color={color}
          loading
          aria-label="Loading"
        >
          <Settings size={16} />
        </IconButton>
      </div>
    </div>

    {/* Different Icons */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Common Icons</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <IconButton variant={variant} color={color} aria-label="Close">
          <X size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Menu">
          <Menu size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Search">
          <Search size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Heart">
          <Heart size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Star">
          <Star size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Share">
          <Share2 size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Edit">
          <Edit size={16} />
        </IconButton>
        <IconButton variant={variant} color={color} aria-label="Delete">
          <Trash2 size={16} />
        </IconButton>
      </div>
    </div>

    {/* Different Sizes with proper icon sizing */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Sizes</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            size="xs"
            aria-label="Extra small"
          >
            <Settings size={12} />
          </IconButton>
          <span className="text-xs text-gray-500">xs (12px icon)</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            size="sm"
            aria-label="Small"
          >
            <Settings size={14} />
          </IconButton>
          <span className="text-xs text-gray-500">sm (14px icon)</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            size="md"
            aria-label="Medium"
          >
            <Settings size={16} />
          </IconButton>
          <span className="text-xs text-gray-500">md (16px icon)</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            size="lg"
            aria-label="Large"
          >
            <Settings size={20} />
          </IconButton>
          <span className="text-xs text-gray-500">lg (20px icon)</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            size="xl"
            aria-label="Extra large"
          >
            <Settings size={24} />
          </IconButton>
          <span className="text-xs text-gray-500">xl (24px icon)</span>
        </div>
      </div>
    </div>

    {/* Border Types */}
    <div className="flex flex-col gap-2">
      <h5 className="text-sm font-medium text-gray-600">Border Types</h5>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            borderType="rounded"
            aria-label="Rounded"
          >
            <Settings size={16} />
          </IconButton>
          <span className="text-xs text-gray-500">rounded</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            borderType="circle"
            aria-label="Circle"
          >
            <Settings size={16} />
          </IconButton>
          <span className="text-xs text-gray-500">circle</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <IconButton
            variant={variant}
            color={color}
            borderType="square"
            aria-label="Square"
          >
            <Settings size={16} />
          </IconButton>
          <span className="text-xs text-gray-500">square</span>
        </div>
      </div>
    </div>
  </div>
);

// Icon examples for stories with proper sizing
export const iconExamples = {
  xs: {
    close: <X size={12} />,
    menu: <Menu size={12} />,
    settings: <Settings size={12} />,
    search: <Search size={12} />,
    heart: <Heart size={12} />,
    star: <Star size={12} />,
    share: <Share2 size={12} />,
    download: <Download size={12} />,
    upload: <Upload size={12} />,
    edit: <Edit size={12} />,
    trash: <Trash2 size={12} />,
    plus: <Plus size={12} />,
    minus: <Minus size={12} />,
    chevronLeft: <ChevronLeft size={12} />,
    chevronRight: <ChevronRight size={12} />,
    check: <Check size={12} />,
    alert: <AlertCircle size={12} />,
    info: <Info size={12} />,
  },
  sm: {
    close: <X size={14} />,
    menu: <Menu size={14} />,
    settings: <Settings size={14} />,
    search: <Search size={14} />,
    heart: <Heart size={14} />,
    star: <Star size={14} />,
    share: <Share2 size={14} />,
    download: <Download size={14} />,
    upload: <Upload size={14} />,
    edit: <Edit size={14} />,
    trash: <Trash2 size={14} />,
    plus: <Plus size={14} />,
    minus: <Minus size={14} />,
    chevronLeft: <ChevronLeft size={14} />,
    chevronRight: <ChevronRight size={14} />,
    check: <Check size={14} />,
    alert: <AlertCircle size={14} />,
    info: <Info size={14} />,
  },
  md: {
    close: <X size={16} />,
    menu: <Menu size={16} />,
    settings: <Settings size={16} />,
    search: <Search size={16} />,
    heart: <Heart size={16} />,
    star: <Star size={16} />,
    share: <Share2 size={16} />,
    download: <Download size={16} />,
    upload: <Upload size={16} />,
    edit: <Edit size={16} />,
    trash: <Trash2 size={16} />,
    plus: <Plus size={16} />,
    minus: <Minus size={16} />,
    chevronLeft: <ChevronLeft size={16} />,
    chevronRight: <ChevronRight size={16} />,
    check: <Check size={16} />,
    alert: <AlertCircle size={16} />,
    info: <Info size={16} />,
  },
  lg: {
    close: <X size={20} />,
    menu: <Menu size={20} />,
    settings: <Settings size={20} />,
    search: <Search size={20} />,
    heart: <Heart size={20} />,
    star: <Star size={20} />,
    share: <Share2 size={20} />,
    download: <Download size={20} />,
    upload: <Upload size={20} />,
    edit: <Edit size={20} />,
    trash: <Trash2 size={20} />,
    plus: <Plus size={20} />,
    minus: <Minus size={20} />,
    chevronLeft: <ChevronLeft size={20} />,
    chevronRight: <ChevronRight size={20} />,
    check: <Check size={20} />,
    alert: <AlertCircle size={20} />,
    info: <Info size={20} />,
  },
  xl: {
    close: <X size={24} />,
    menu: <Menu size={24} />,
    settings: <Settings size={24} />,
    search: <Search size={24} />,
    heart: <Heart size={24} />,
    star: <Star size={24} />,
    share: <Share2 size={24} />,
    download: <Download size={24} />,
    upload: <Upload size={24} />,
    edit: <Edit size={24} />,
    trash: <Trash2 size={24} />,
    plus: <Plus size={24} />,
    minus: <Minus size={24} />,
    chevronLeft: <ChevronLeft size={24} />,
    chevronRight: <ChevronRight size={24} />,
    check: <Check size={24} />,
    alert: <AlertCircle size={24} />,
    info: <Info size={24} />,
  },
};
