import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.4 6.4v-5a1 1 0 00-2 0v5h-5a1 1 0 000 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5z"
        fill="#339CDE"
      />
    </Svg>
  )
}

export default SvgComponent
