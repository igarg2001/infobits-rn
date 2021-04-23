import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2.5 -2.5 24 24"
      width={24}
      height={24}
      preserveAspectRatio="xMinYMin"
      className="prefix__icon__icon"
      {...props}>
      <Path d="M8 14A6 6 0 108 2a6 6 0 000 12zm6.32-1.094l3.58 3.58a1 1 0 11-1.415 1.413l-3.58-3.58a8 8 0 111.414-1.414z" />
    </Svg>
  );
}

export default SvgComponent;
