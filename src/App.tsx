import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Loading from "./components/loading/Loading";
import { useEffect, useState } from "react";
import { Theme, User } from "./types";

const baseUrl = "https://api.github.com/users/";

async function getUser(
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  name: FormDataEntryValue
) {
  try {
    const response = await fetch(baseUrl + name);
    const data: User = await response.json();
    setUser(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      createDialog();
    }, 1000);
  }
}

function createDialog() {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <p>Something went wrong, reload the page please...<p>
  `;
  document.body.prepend(dialog);
  dialog.showModal();
}

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [name, setName] = useState<FormDataEntryValue>("twogog");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser(setUser, setLoading, name);
  }, [name]);

  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      {!loading ? (
        <Main theme={theme} setName={setName} {...(user as User)} />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
