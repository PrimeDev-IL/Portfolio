export const appHeaderIcons = {
    appLogo: (
        <svg
            width="260"
            height="70"
            viewBox="0 0 260 70"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="goldGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFC700" />
                    <stop offset="100%" stopColor="#FFB800" />
                </linearGradient>
            </defs>

            <rect
                x="0"
                y="10"
                width="50"
                height="50"
                rx="12"
                fill="url(#goldGradient)"
            />

            <text
                x="25"
                y="35"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Montserrat, Poppins, sans-serif"
                fontWeight="700"
                fontSize="22"
                fill="#FFFFFF"
            >
                &lt;/&gt;
            </text>

            <text
                x="54"
                y="46"
                fontFamily="Montserrat, Poppins, sans-serif"
                fontWeight="700"
                fontSize="32"
            >
                <tspan fill="url(#goldGradient)">Prime</tspan>
                <tspan fill="#FFFFFF" dx="0">Dev</tspan>
            </text>
        </svg>
    )
}

export const heroSection = {
    heroIllustrator: (
        <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
            <title id="title">Full Stack &amp; DevOps Illustration</title>
            <desc id="desc">Laptop with code, full stack layers and DevOps pipeline.</desc>

            <defs>
                <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#020617" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#0B1120" stopOpacity="0.98" />
                </linearGradient>

                <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
            </defs>

            {/* ground shadow */}
            <ellipse cx="180" cy="235" rx="120" ry="15" fill="#020617" opacity="0.4" />

            {/* BACK CLOUD */}
            <g opacity="0.2">
                <path d="M60 50 C76 34 102 30 120 40 C130 20 162 16 184 28 C202 24 224 28 238 42 C250 52 256 66 254 80 L228 80 C222 88 212 94 200 96 L100 96 C84 92 72 84 66 72 C60 64 58 58 60 50 Z"
                    fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 6" />
            </g>

            {/* DEVOPS LOOP */}
            <g transform="translate(250,50)" opacity="0.3">
                <path d="M-30 32 C-26 20 -16 18 -8 26 C0 34 10 34 18 26 C26 18 36 20 40 32 C36 44 26 46 18 38 C10 30 0 30 -8 38 C-16 46 -26 44 -30 32 Z"
                    fill="none" stroke="url(#devopsGrad)" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* MAIN CARD */}
            <rect x="60" y="70" width="240" height="140" rx="18"
                fill="url(#cardGrad)" stroke="#111827" strokeWidth="1.5" />

            {/* header bar */}
            <rect x="60" y="70" width="240" height="30" rx="18"
                fill="#020617" opacity="0.98" />
            <circle cx="80" cy="85" r="4.5" fill="#F97316" />
            <circle cx="96" cy="85" r="4.5" fill="#22C55E" />
            <circle cx="112" cy="85" r="4.5" fill="#6366F1" />

            {/* STATUS PILL (CI/CD) */}
            <rect x="200" y="78" width="90" height="14" rx="7" fill="#020617" stroke="#111827" strokeWidth="1" />
            <circle cx="210" cy="85" r="3" fill="#22C55E" />
            <text x="218" y="88.5" fontSize="7" fill="#E5E7EB"
                fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                pipelines · passing
            </text>

            {/* LEFT SIDE: FULL STACK LAYERS */}
            <g transform="translate(75,110)">
                {/* FE */}
                <rect x="0" y="0" width="65" height="16" rx="6"
                    fill="#020617" stroke="url(#devopsGrad)" strokeWidth="1.4" />
                <text x="32.5" y="10.5" fontSize="9" textAnchor="middle"
                    fill="#E5E7EB" fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                    Frontend
                </text>

                {/* BE */}
                <rect x="0" y="22" width="65" height="16" rx="6"
                    fill="#020617" stroke="#4F46E5" strokeWidth="1.4" />
                <text x="32.5" y="32.5" fontSize="9" textAnchor="middle"
                    fill="#E5E7EB" fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                    Backend
                </text>

                {/* DB */}
                <rect x="0" y="44" width="65" height="16" rx="6"
                    fill="#020617" stroke="#22C55E" strokeWidth="1.4" />
                <text x="32.5" y="54.5" fontSize="9" textAnchor="middle"
                    fill="#E5E7EB" fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                    Database
                </text>
            </g>

            {/* CENTER: code */}
            <g transform="translate(165,115)">
                {/* code block bg */}
                <rect x="0" y="0" width="90" height="60" rx="8" fill="#020617" stroke="#111827" strokeWidth="1" />

                {/* code lines */}
                <rect x="12" y="12" width="36" height="5" rx="2.5" fill="#6366F1" />
                <rect x="12" y="22" width="50" height="5" rx="2.5" fill="#A855F7" opacity="0.85" />
                <rect x="12" y="32" width="30" height="5" rx="2.5" fill="#6366F1" opacity="0.7" />
                <rect x="12" y="42" width="44" height="5" rx="2.5" fill="#A855F7" opacity="0.75" />

                {/* </> */}
                <text x="64" y="36" fontSize="16" fill="#E5E7EB"
                    fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                    &lt;/&gt;
                </text>
            </g>
        </svg>

    )
}