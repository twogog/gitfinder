export type Theme = 'dark' | 'light';

export type ThemeProps = {
  theme: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}