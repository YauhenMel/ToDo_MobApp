import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  filled?: boolean;
  onPress: () => void;
}
