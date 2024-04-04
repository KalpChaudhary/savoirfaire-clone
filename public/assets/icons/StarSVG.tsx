import * as React from "react"



const StarSVG = ({ ...props }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill={props.color ? props.color : "#fcff"}
        viewBox="0 0 24 24"
        {...props}
        style={{
            willChange: "width, height",
        }}
    >
        <path
            stroke={props.color ? props.color : "#fcff"}
            
            strokeWidth={0.408}
            d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
        />
    </svg>
)
export default StarSVG


