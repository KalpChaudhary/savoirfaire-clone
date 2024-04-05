import * as React from "react"

const StarSVG = ({ ...props }: any) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill={props.color ? props.color : "#fcff"}
        viewBox="2561.45 1316.4 4115 4115"

        {...props}
        style={{
            willChange: "width, height",
        }}
    >
        <path strokeWidth={0.408} d="M 6676.82 3374.1 c -2064.82 -8.1 -2065.82 -8.1 -2057.68 -2057.7 c -7.14 2049.6 -7.14 2049.6 -2057.69 2057.7 c 2050.55 -8.1 2050.55 -8.1 2057.69 2057.6 c -7.14 -2065.7 -7.14 -2065.7 2057.68 -2057.6" />
    </svg>
)
export default StarSVG

