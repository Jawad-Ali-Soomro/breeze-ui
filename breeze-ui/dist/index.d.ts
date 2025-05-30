import {
  ReactNode,
  MouseEventHandler,
  ChangeEventHandler,
  InputHTMLAttributes,
  JSX,
} from "react";

// Button Component
export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  textColor?: string;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  radius?: string;
}

export declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;

// Avatar Component
export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square" | "rounded";
  icon?: ReactNode;
  status?: "online" | "offline" | "busy" | "away" | null;
  className?: string;
}

export declare const Avatar: (props: AvatarProps) => JSX.Element;
export default Avatar;

// Accordion Component
export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
}

export declare const Accordion: (props: AccordionProps) => JSX.Element;
export default Accordion;

// Popup Component
export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title?: string;
  background?: string;
  color?: string;
  padding?: string;
}

export declare const Popup: (props: PopupProps) => JSX.Element;
export default Popup;

export interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
  variant?: "spinner" | "dots" | "bar" | "progress";
}

export declare const Loader: (props: LoaderProps) => JSX.Element;
export default Loader;

// Input Component
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export declare const Input: (props: InputProps) => JSX.Element;
export default Input;

// Checkbox Component
export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEventHandler<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export declare const Checkbox: (props: CheckboxProps) => JSX.Element;
export default Checkbox;

// Sidebar Component
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  logo?: string;
  className?: string;
  radius?: string;
  logoutFn: () => void;
}

export declare const Sidebar: (props: SidebarProps) => JSX.Element;
export default Sidebar;

export interface CardProps {
  title?: string;
  content?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
  variant?: "primary" | "secondary" | "accent";
  shadow?: boolean;
  rounded?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export declare const Card: (props: CardProps) => JSX.Element;
export default Card;
export interface ComboboxOption {
  value: string | number;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  placeholder?: string;
  emptyText?: string;
  style?: React.CSSProperties;
  onSelect?: (value: string | number) => void;
  className?: string;
  children?: React.ReactNode;
}

export declare const Combobox: (props: ComboboxProps) => JSX.Element;

export default Combobox;

export interface RangeProps {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  thumbColor?: string;
  barColor?: string;
  onChange?: (value: number) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare const Range: (props: RangeProps) => JSX.Element;
export default RangeInput;
