export const appHeaderIcons = {
    appLogo: (
        <svg width="260" height="70" viewBox="0 0 260 70" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#FFD700" />
                    <stop offset="50%" stop-color="#FFC700" />
                    <stop offset="100%" stop-color="#FFB800" />
                </linearGradient>
            </defs>

            <rect x="0" y="10" width="50" height="50" rx="12" fill="url(#goldGradient)" />

            <text
                x="25"
                y="35"
                text-anchor="middle"
                dominant-baseline="central"
                font-family="Montserrat, Poppins, sans-serif"
                font-weight="700"
                font-size="22"
                fill="#FFFFFF"
            >&lt;/&gt;</text>

            <text
                x="54"
                y="46"
                font-family="Montserrat, Poppins, sans-serif"
                font-weight="700"
                font-size="32"
            >
                <tspan fill="url(#goldGradient)">Prime</tspan>
                <tspan fill="#FFFFFF" dx="0">Dev</tspan>
            </text>
        </svg>
    )
}