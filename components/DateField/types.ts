import {FieldError} from "react-hook-form";

export interface DateFieldProps {
    label: string;
    onChange: (value: Date) => void;
    onBlur: () => void;
    value: Date;
    error?: FieldError;
    isTouched: boolean;
    isSubmitted: boolean;
    multiline?: boolean;
}
