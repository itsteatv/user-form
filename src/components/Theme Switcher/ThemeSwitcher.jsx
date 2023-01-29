import { useEffect } from "react";
import useLocalStorage from "../LocalStorage/useLocalStorage";
import "./ThemeSwitcher.css";
import { FaMoon, FaSwatchbook, FaSun, FaWindowClose } from "react-icons/fa";

function ThemeSwitcher() {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [colorPicker, setColorPicker] = useLocalStorage(false);
    const [theme, setTheme] = useLocalStorage("userForm-theme", defaultTheme ? "dark" : "light");
    const [hue, setHue] = useLocalStorage("user-form", 240);

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
      }, [theme])
    
      useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue);
      }, [hue])
    

    const handlerThemeSwitch = function () {
        setTheme (theme === "light" ? "dark" : "light")
    }

    const handlerColorPicker = function () {
        setColorPicker(true);   
    }

    const closeColorPicker = function () {
        setColorPicker(false);
    }

    const dragColorPicker = function (event) {
        setHue(event.target.value);
    }

  return (
    <aside className="wrapper"
        style={{backgroundColor: colorPicker ? "hsl(var(--muted) / .6)" : "transparent"}}
    >
        {colorPicker ? 
        <>
        <button aria-label="Close Color Picker" onClick={closeColorPicker} className="close-button"><FaWindowClose/></button>
        <input type="range"
            className="picker"
            min="0"
            max="360"
            value={hue}
            onInput={dragColorPicker}
            aria-label="Change Color Theme Slider"
        ></input>
        </> 
        : <div className="btns">
            <button className="button" aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`} role="toggle"
            onClick={handlerThemeSwitch} >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button className="button" aria-label="color picker feature" onClick={handlerColorPicker}>
                <FaSwatchbook size={20} />
            </button>
        </div>   
    }
    </aside>
    
  )
}

export default ThemeSwitcher