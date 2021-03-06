import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      width={24}
      height={24}
      preserveAspectRatio="xMinYMin"
      className="prefix__icon__icon"
      {...props}>
      <Path d="M2.08 2l6.482 8.101A2 2 0 019 11.351V18l2-1.5v-5.15a2 2 0 01.438-1.249L17.92 2H2.081zm0-2h15.84a2 2 0 011.561 3.25L13 11.35v5.15a2 2 0 01-.8 1.6l-2 1.5A2 2 0 017 18v-6.65L.519 3.25A2 2 0 012.08 0z" {...props}/>
    </Svg>
  );
}

export default SvgComponent;
