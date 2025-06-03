import {ReactNode} from "react";

export interface LinkProps  {
    children?: ReactNode;
    to: string;
    params?: {[key: string]: string};
}
