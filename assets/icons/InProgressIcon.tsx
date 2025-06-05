import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const InProgressIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 7 1-1M10 3h4"
    />
    <Circle
      cx={12}
      cy={13}
      r={7}
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13v-3"
    />
  </Svg>
);
export default InProgressIcon;
