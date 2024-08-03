import * as React from "react"
const CursorLogo = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={128}
        height={128}
        fill="none"
        {...props}
    >
        <circle cx={64} cy={64} r={64} fill="#fff" />
        <circle cx={64} cy={64} r={40} fill="black" />

        <path
            fill="#fff"
            d="m49.847 63.715 10.548-.301a3.396 3.396 0 0 0 3.297-3.294l.306-10.273.305 10.273a3.396 3.396 0 0 0 3.298 3.294l10.548.3-10.548.302a3.396 3.396 0 0 0-3.298 3.293l-.305 10.273-.305-10.272a3.396 3.396 0 0 0-3.298-3.294l-10.548-.301Z"
        />

    </svg>
)
export default CursorLogo
