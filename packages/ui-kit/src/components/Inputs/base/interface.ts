export interface IBaseTextInputProps {
  name: string;
  setValue?: (name: string, value: string) => void;
  validateFn?: (value: string) => boolean;
  validateRegex?: RegExp;
  readOnly?: boolean;
}
