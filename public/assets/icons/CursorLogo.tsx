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
        <path
            fill="#000"
            d="m49.847 63.715 10.548-.301a3.396 3.396 0 0 0 3.297-3.294l.306-10.273.305 10.273a3.396 3.396 0 0 0 3.298 3.294l10.548.3-10.548.302a3.396 3.396 0 0 0-3.298 3.293l-.305 10.273-.305-10.272a3.396 3.396 0 0 0-3.298-3.294l-10.548-.301Z"
        />
        <path
            fill="#000"
            d="M43.072 63.717c0 21.5 9.889 29.717 20.875 29.717 10.85 0 21.012-7.886 21.012-29.717C84.96 42.217 74.934 34 63.947 34c-10.712 0-20.875 7.886-20.875 29.717Zm20.875-28.804c5.631 0 16.739 4.15 16.739 28.804 0 24.654-11.108 28.887-16.739 28.887-5.493 0-16.599-4.233-16.599-28.887s10.969-28.804 16.6-28.804Z"
        />
        <path
            fill="#000"
            d="M64 42.468c-21.704 0-30 10.021-30 21.157C34 74.62 41.96 84.92 64 84.92c21.704 0 30-10.161 30-21.296 0-10.857-7.96-21.157-30-21.157Zm29.078 21.157c0 5.706-4.19 16.964-29.078 16.964-24.888 0-29.162-11.258-29.162-16.964C34.838 58.057 39.112 46.8 64 46.8c24.888 0 29.078 11.117 29.078 16.824Z"
        />
    </svg>
)
export default CursorLogo