import Search from "./Search";
import SocialPage from "./SocialPage";
import { ThemeProps, Name, User } from "../../types";

function Main({ theme, setName, ...user }: ThemeProps & Name & User) {
  const { message } = user;
  return (
    <main>
      <Search theme={theme} setName={setName} />
      {message ? null : <SocialPage theme={theme} {...user} />}
    </main>
  );
}

export default Main;
