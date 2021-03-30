import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={13}
      height={15}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.045 14S.14 5.42 6.464 5.42c6.322 0 5.42 8.58 5.42 8.58"
        stroke="#000"
      />
      <Circle cx={6.464} cy={2.71} r={2.21} stroke="#000" />
    </Svg>
  )
}

export default SvgComponent
