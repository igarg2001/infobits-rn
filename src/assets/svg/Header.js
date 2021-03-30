import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={375}
      height={314}
      viewBox="0 0 411 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M139.805 193.216c172.215-29.225 215.416 45.578 297.532 31.643L392.144-41.448l-466.926 19c4.935 29.083-39.262 157.953-38.411 162.971 1.065 6.273 80.783 81.919 252.998 52.693z"
        fill="#339CDE"
      />
      <Path
        d="M126.708 175.446C298.01 168.474 331.319 227.324 413 224L402.217-7.288l-514.549-10.35c1.087 26.707 2.519 101.563 2.706 106.171.235 5.76 65.031 93.885 236.334 86.913z"
        fill="#56BCFC"
        fillOpacity={0.75}
      />
    </Svg>
  )
}

export default SvgComponent
