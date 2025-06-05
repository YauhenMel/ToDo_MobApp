import Svg, { SvgProps, Path } from 'react-native-svg';

const PlusIcon = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 16 16" {...props}>
    <Path d="M10 1H6v5H1v4h5v5h4v-5h5V6h-5V1Z" />
  </Svg>
);
export default PlusIcon;
