import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

const DateIcon = (props: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 24 24" {...props} fill="none">
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={2}
      d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m16 0v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9m16 0H4m4-7v4m8-4v4"
    />
    <Rect width={3} height={3} x={6} y={12} fill={props.fill} rx={0.5} />
    <Rect width={3} height={3} x={10.5} y={12} fill={props.fill} rx={0.5} />
    <Rect width={3} height={3} x={15} y={12} fill={props.fill} rx={0.5} />
  </Svg>
);
export default DateIcon;
