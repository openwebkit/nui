// import useModal from "@/hooks/useModal";
// import Dropdown from "@/ui/dropdown";
// import Spinner from "../../Spinner";
// import noop from "lodash/noop";
// import { ChevronDown, Search } from "lucide-react";
// import { FocusEvent, ReactNode, useCallback, useRef, useState } from "react";
// import { InputWrapper } from "../base";
// import TextInput, { ITextInputProps } from "../TextInput";

// interface ISearchDropdownInputProps<Value, Option>
//   extends Omit<ITextInputProps, "value" | "setValue"> {
//   value: Value;
//   renderOption: (option: Option) => {
//     element: ReactNode;
//     id: string;
//   };
//   placeholder?: string;
//   searchPlaceholder?: string;
//   handleSearch: (query: string) => Promise<Option[]>;
//   setValue: (value: Option | null) => void;
//   convertValueToString: (value: Value) => string;
//   convertOptionToString: (option: Option) => string;
// }

// const SearchDropdownInput = <Value, Option>({
//   name,
//   value: currentValue,
//   size,
//   renderOption,
//   placeholder = "Select",
//   handleSearch,
//   setValue,
//   searchPlaceholder,
//   ...props
// }: ISearchDropdownInputProps<Value, Option>) => {
//   const [search, setSearch] = useState<string>("");
//   const dropdown = useModal();
//   const [options, setOptions] = useState<Option[]>([]);
//   const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
//   const [loading, setLoading] = useState(false);
//   const anchorRef = useRef<HTMLDivElement | null>(null);

//   const handleSearchDebounced = useCallback(
//     (query: string) => {
//       if (debounceTimeout.current) {
//         clearTimeout(debounceTimeout.current);
//       }
//       debounceTimeout.current = setTimeout(() => {
//         const q = query.trim();
//         if (q.length > 0) {
//           handleSearch(q)
//             .then((results) => {
//               setOptions(results);
//             })
//             .finally(() => {
//               setLoading(false);
//             });
//         } else {
//           setOptions([]);
//         }
//       }, 500);
//     },
//     [handleSearch],
//   );

//   const handleSearchChange = useCallback(
//     (_: string, value: string) => {
//       setLoading(true);
//       setSearch((prev) => {
//         if (prev !== value) {
//           handleSearchDebounced(value);
//         }
//         return value;
//       });
//     },
//     [handleSearchDebounced],
//   );

//   const handleSetValue = useCallback(
//     (option: Option | null) => {
//       setSearch("");
//       setOptions([]);
//       setValue(option);
//       setLoading(false);
//       dropdown.close();
//     },
//     [setValue],
//   );

//   const handleClose = useCallback(() => {
//     setOptions([]);
//     setSearch("");
//     debounceTimeout.current && clearTimeout(debounceTimeout.current);
//     setLoading(false);
//     dropdown.close();
//     props.onBlur && props.onBlur({} as FocusEvent<HTMLInputElement>);
//   }, []);

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
//           tabIndex={0}
//           trailingVisual={
//             <ChevronDown
//               size={18}
//               onClick={dropdown.toggle}
//               className={`transition-transform duration-200 ${
//                 dropdown.isOpen ? "rotate-180" : ""
//               }`}
//             />
//           }
//           readOnly={props.readOnly}
//         >
//           <div
//             className="w-full overflow-hidden text-ellipsis"
//             onClick={dropdown.toggle}
//           >
//             {currentValue ? (
//               <div>{props.convertValueToString(currentValue)}</div>
//             ) : (
//               <div className="text-sm text-gray-400">{placeholder}</div>
//             )}
//           </div>
//         </InputWrapper>
//       </div>
//       <Dropdown
//         onClose={loading ? noop : handleClose}
//         anchorElement={anchorRef.current}
//         maxHeight="200px"
//         open={dropdown.isOpen}
//       >
//         <div className="p-2 sticky top-0 bg-white z-10">
//           <TextInput
//             autoFocus={dropdown.isOpen}
//             name={name}
//             size={size}
//             setValue={handleSearchChange}
//             placeholder={searchPlaceholder || "Search..."}
//             leadingVisual={<Search size={18} />}
//             trailingVisual={loading ? <Spinner size={size} /> : null}
//           />
//         </div>
//         {options.length === 0 && !loading && !!search && (
//           <div className="p-4 text-sm text-gray-500">No results found</div>
//         )}
//         {options.map((option) => {
//           const { element, id } = renderOption(option);
//           return (
//             <Dropdown.Option
//               key={id}
//               onClick={() => {
//                 handleSetValue(option);
//               }}
//             >
//               {element}
//             </Dropdown.Option>
//           );
//         })}
//       </Dropdown>
//     </>
//   );
// };

// export default SearchDropdownInput;
