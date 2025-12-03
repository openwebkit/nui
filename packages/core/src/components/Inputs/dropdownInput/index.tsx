// import useModal from "@/hooks/useModal";
// import Dropdown from "@/ui/dropdown";
// import { ChevronDown } from "lucide-react";
// import { FocusEvent, ReactNode, useCallback, useRef } from "react";
// import { InputWrapper } from "../base";
// import { ITextInputProps } from "../TextInput";

// export interface IDropdownInputProps<Value, Option>
//   extends Omit<ITextInputProps, "value" | "setValue"> {
//   value: Value | null;
//   options: Option[];
//   renderOption: (
//     option: Option,
//     index: number,
//   ) => {
//     element: ReactNode;
//     id: string | number;
//   };
//   placeholder?: string;
//   setValue: (value: Value | null) => void;
//   renderLabel: (value: Value) => ReactNode;
//   convertOptionToValue: (option: Option) => Value | null;
// }

// const DropdownInput = <Value, Option>({
//   name,
//   value: currentValue,
//   size,
//   options,
//   renderOption,
//   placeholder = "Select",
//   setValue,
//   ...props
// }: IDropdownInputProps<Value, Option>) => {
//   const dropdown = useModal();
//   const anchorRef = useRef<HTMLDivElement | null>(null);

//   const handleSetValue = useCallback(
//     (option: Option | null) => {
//       setValue(option ? props.convertOptionToValue(option) : null);
//       dropdown.close();
//     },
//     [setValue, dropdown],
//   );

//   const handleClose = useCallback(() => {
//     dropdown.close();
//     props.onBlur?.({} as FocusEvent<HTMLInputElement>);
//   }, [dropdown, props]);

//   return (
//     <>
//       <div ref={anchorRef}>
//         <InputWrapper
//           variant={props.variant}
//           size={size}
//           label={props.label}
//           disabled={props.disabled}
//           error={props.error}
//           required={props.required}
//           helpText={props.helpText}
//           leadingVisual={props.leadingVisual}
//           cursorPointer
//           onEnterPress={dropdown.toggle}
//           trailingVisual={
//             <ChevronDown
//               size={18}
//               onClick={dropdown.toggle}
//               className={`transition-transform duration-200 ${
//                 dropdown.isOpen ? "rotate-180" : ""
//               }`}
//             />
//           }
//           tabIndex={0}
//           readOnly={props.readOnly}
//         >
//           <div
//             className="w-full overflow-hidden text-ellipsis"
//             onClick={dropdown.toggle}
//           >
//             {currentValue ? (
//               <div>{props.renderLabel(currentValue)}</div>
//             ) : (
//               <div className="text-sm text-gray-400">{placeholder}</div>
//             )}
//           </div>
//         </InputWrapper>
//       </div>
//       <Dropdown
//         onClose={handleClose}
//         anchorElement={anchorRef.current}
//         maxHeight="200px"
//         open={dropdown.isOpen}
//       >
//         <div className="py-1">
//           {options.map((option, index) => {
//             const { element, id } = renderOption(option, index);
//             return (
//               <div
//                 key={id}
//                 className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleSetValue(option)}
//               >
//                 {element}
//               </div>
//             );
//           })}
//           {options.length === 0 && (
//             <div className="px-4 py-2 text-gray-500 text-sm">
//               No options available
//             </div>
//           )}
//         </div>
//       </Dropdown>
//     </>
//   );
// };

// export default DropdownInput;
