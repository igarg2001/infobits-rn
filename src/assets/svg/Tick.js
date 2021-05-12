import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={10}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.486 9.73a.997.997 0 01-.707-.292L.537 5.195A1 1 0 111.95 3.78l3.535 3.535L11.85.952a1 1 0 011.415 1.414L6.193 9.438a.997.997 0 01-.707.292z"
        fill="#339CDE"
      />
    </Svg>
  )
}

export default SvgComponent
