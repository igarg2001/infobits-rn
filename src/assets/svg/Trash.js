import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 2V1a1 1 0 011-1h4a1 1 0 011 1v1h4a2 2 0 012 2v1a2 2 0 01-2 2h-.133l-.68 10.2a3 3 0 01-2.993 2.8H5.826a3 3 0 01-2.993-2.796L2.137 7H2a2 2 0 01-2-2V4a2 2 0 012-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 00.998.932h6.368a1 1 0 00.998-.934L13.862 7H4.141zM7 8a1 1 0 011 1v7a1 1 0 11-2 0V9a1 1 0 011-1zm4 0a1 1 0 011 1v7a1 1 0 01-2 0V9a1 1 0 011-1z"
        fill="#339CDE"
      />
    </Svg>
  )
}

export default SvgComponent
