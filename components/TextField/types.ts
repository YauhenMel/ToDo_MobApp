import {FieldError} from "react-hook-form";

export interface TextFieldProps {
    label: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string;
    error?: FieldError;
    isTouched: boolean;
    isSubmitted: boolean;
    multiline?: boolean;
}
