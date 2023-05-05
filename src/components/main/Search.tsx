import styles from "./Search.module.css";
import { ThemeProps, Name } from "../../types";

function Search({ theme, setName }: ThemeProps & Name) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('search');
    if (value) setName(value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
      <input
        className={styles.input}
        style={{background: `var(--main-bg-${theme})`}}
        type="text"
        name='search'
        placeholder="Search Github username..."
      />
      <button className={styles.button}>Search</button>
    </form>
  );
}

export default Search;
