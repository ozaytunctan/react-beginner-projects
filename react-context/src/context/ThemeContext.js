import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext({theme: 'light'});

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const values = {
        theme,
        setTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext);

// export default ThemeContext;
export  {useTheme, ThemeProvider};

