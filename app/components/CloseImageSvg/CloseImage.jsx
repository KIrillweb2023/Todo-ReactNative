import Svg, { Rect } from "react-native-svg"

function CloseImage(props) {
  return (
    <Svg
      width={37}
      height={37}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
      {...props}
    >
      <Rect
        x={9.30762}
        y={26.9853}
        width={25}
        height={2}
        rx={1}
        transform="rotate(-45 9.308 26.985)"
        fill="#000"
      />
      <Rect
        x={26.2782}
        y={28.3995}
        width={25}
        height={2}
        rx={1}
        transform="rotate(-135 26.278 28.4)"
        fill="#000"
      />
    </Svg>
  )
}

export default CloseImage
