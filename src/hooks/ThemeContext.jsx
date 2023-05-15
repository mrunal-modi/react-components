import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error(
            `useTheme() can only be used inside of <ThemeProvider />, please declare it at a higher level.`,
        );
    }
    const { theme, setTheme } = themeContext;
    return useMemo(() => {
        return {
            ...theme,
            setTheme
        }
    }, [
        theme,
        setTheme
    ])
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        BASE_COLOR: "",
        TEXT_COLOR: "",
        ACCENT_COLOR: "",
        PRIMARY_COLOR: "",
        SECONDARY_COLOR: "",
        PRIMARY_TEXT_COLOR: "",
        HIGHLIGHT_BG_COLOR: "",
        HIGHLIGHT_TEXT_COLOR: "",
    });

    useEffect(() => {
        const root = document.documentElement;
        Object.keys(theme).map((el, i) => {
            let name = el.toLowerCase().split("_").map(substr => substr.charAt(0)
                .toUpperCase() +
                substr.slice(1))
                .join("");
            name = name.charAt(0).toLowerCase() + name.slice(1);
            root.style.setProperty(`--${name}`, theme[el]);
        })
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                setTheme,
                theme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}