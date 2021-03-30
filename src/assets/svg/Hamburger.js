import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={13}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path stroke="#000" d="M0 .5h19M0 6.5h19M0 12.5h19" />
    </Svg>
  )
}

export default SvgComponent
