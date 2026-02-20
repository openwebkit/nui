import React, { useState } from "react";

interface CheckboxInputProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label = "",
  checked,
  onChange,
  disabled = false,
  id,
  className = "",
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = typeof checked === "boolean";
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e.target.checked);
  };

  return (
    <label
      className={`flex items-start cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        className="form-checkbox mt-1 h-4 w-4 text-blue-600 transition duration-150 ease-in-out border-gray-300 rounded focus:ring focus:ring-blue-200"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      {label && <span className="ml-2 select-none text-sm">{label}</span>}
    </label>
  );
};

export default CheckboxInput;
