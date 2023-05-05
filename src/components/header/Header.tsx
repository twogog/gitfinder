import { useEffect } from "react";
import styles from "./Header.module.css";
import { ThemeProps, Theme } from "../../types";

function Header({ setTheme, theme }: ThemeProps) {
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const checkTheme = (theme: Theme) => (theme === "dark" ? "light" : "dark");
  return (
    <header className={styles.header}>
      <a className={styles.logo}>
        <h2>devfinder</h2>
      </a>
      <span
        onClick={() =>
          setTheme !== undefined
            ? setTheme(checkTheme(theme))
            : console.error("Check your props")
        }
        className={styles.theme}
      >
        {checkTheme(theme)}
      </span>
    </header>
  );
}

export default Header;
