tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ff0000",
                "primary-variant": "#eb0000",
                "secondary": "#ff8e7d",
                "background": "#050505",
                "surface": "rgba(19, 19, 19, 0.7)",
                "surface-variant": "rgba(38, 38, 38, 0.5)",
                "on-background": "#ffffff",
                "on-surface": "#f2f2f2",
                "outline": "#333333",
                "error": "#ff5449"
            },
            fontFamily: {
                "headline": ["Space Grotesk", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "label": ["Space Grotesk", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px" },
        },
    },
}
