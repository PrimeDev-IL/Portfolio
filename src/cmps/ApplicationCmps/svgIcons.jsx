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

export const heroSectionIcons = {
    phoneIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor" />
        </svg>
    ),
    whatsappIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
        </svg>
    ),
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

export const sharedIcons = {
    star: (
        <svg className="star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    ),
    reactLogo: (
        <svg className="react-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
        </svg>
    ),
    cortexXsoar: (
        <svg className="cortex-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" stroke="#6366F1" strokeWidth="1.6" fill="none" />
            <path d="M13 8l-3 4h3l-2 4" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    infinity: (
        <svg className="infinity-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M7 8C5 8 4 10 4 12C4 14 5 16 7 16C9 16 11 14 12 12C13 10 15 8 17 8C19 8 20 10 20 12C20 14 19 16 17 16C15 16 13 14 12 12C11 10 9 8 7 8"
                stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    )
}

export const servicesIcons = {
    soarIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
            stroke="white" stroke-width="1.6" fill="none" />
        <path d="M13 8l-3 4h3l-2 4"
            stroke="white" stroke-width="1.6" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>),
    webDevIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" stroke-width="1.6" />
        <line x1="3" y1="8" x2="21" y2="8" stroke="white" stroke-width="1.6" />
        <path d="M10 12L7 15L10 18" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 12L17 15L14 18" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>),
    devOpsIcon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 8
       C5 8 4 10 4 12
       C4 14 5 16 7 16
       C9 16 11 14 12 12
       C13 10 15 8 17 8
       C19 8 20 10 20 12
       C20 14 19 16 17 16
       C15 16 13 14 12 12
       C11 10 9 8 7 8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>)
}

export const ContactIcons = {
    mail: (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8L10.89 13.26C11.53 13.67 12.47 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>),
    linkedIn: (<svg width="20" height="20" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" fill="white">
        <path d="M5.2 8C4.3 8 3.6 7.3 3.6 6.4C3.6 5.5 4.3 4.8 5.2 4.8C6.1 4.8 6.8 5.5 6.8 6.4C6.8 7.3 6.1 8 5.2 8ZM4 9.5H6.4V18H4V9.5Z" />
        <path d="M9.3 9.5H11.7V10.6H11.8C12.2 9.8 13 9.2 14.3 9.2C17 9.2 17.5 11 17.5 13.3V18H15.1V14C15.1 13 15.1 11.6 13.7 11.6C12.2 11.6 12 12.7 12 13.8V18H9.3V9.5Z" />
    </svg>)
}

export const processIcons = {
    search: (
        <svg className="step-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="15" stroke="white" strokeWidth="3" fill="none" />
            <line x1="40" y1="40" x2="52" y2="52" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    pencil: (
        <svg className="step-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 48 L40 24 L52 36 L28 60 L12 64 L16 48 Z" stroke="white" strokeWidth="3" strokeLinejoin="round" fill="none" />
            <line x1="36" y1="28" x2="48" y2="40" stroke="white" strokeWidth="3" />
        </svg>
    ),
    gear: (
        <svg className="step-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                fill="white" />
        </svg>
    ),
    clipboard: (
        <svg className="step-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="18" y="12" width="28" height="40" rx="3" stroke="white" strokeWidth="3" fill="none" />
            <path d="M26 28 L30 32 L38 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="24" y1="38" x2="40" y2="38" stroke="white" strokeWidth="2" />
            <line x1="24" y1="44" x2="36" y2="44" stroke="white" strokeWidth="2" />
        </svg>
    ),
    chat: (
        <svg className="step-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="16" width="40" height="28" rx="4" stroke="white" strokeWidth="3" fill="none" />
            <circle cx="24" cy="30" r="2" fill="white" />
            <circle cx="32" cy="30" r="2" fill="white" />
            <circle cx="40" cy="30" r="2" fill="white" />
            <path d="M26 44 L32 52 L32 44" stroke="white" strokeWidth="3" strokeLinejoin="round" fill="none" />
        </svg>
    ),
    upload: (
        <svg className="step-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2"
                fill="white" />
        </svg>
    )
}