import React from "react";

import '../css/layout/toggleDarkMode.css';

export default function ToggleDarkMode() {


    const setDarkMode = () => {
        document.querySelector('body').setAttribute("data-theme", 'dark');
        localStorage.setItem('selectedTheme', 'dark')
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute("data-theme", 'light');
        localStorage.setItem('selectedTheme', 'light')
    };

    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme === 'dark') {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className="toggleDarkModeCompo">
            <input
                type="checkbox"
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'} />
        </div>
    )
}