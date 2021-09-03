import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            fontWeight: ["hover", "focus"],
            fontFamily: {},
        },
    },
    variants: {},
    plugins: [],
});
