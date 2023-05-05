import { ReactComponent as CompanyLogo } from "../../assets/images/icon-company.svg";
import { ReactComponent as TwitterLogo } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as LocationLogo } from "../../assets/images/icon-location.svg";
import { ReactComponent as BlogLogo } from "../../assets/images/icon-website.svg";

import { ThemeProps, User } from "../../types";
import styles from "./SocialPage.module.css";

function SocialPage({ theme, ...user }: ThemeProps & User) {
  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    followers,
    following,
    html_url,
    location,
    login,
    name,
    public_repos,
    twitter_username
  } = user;
  const joinDay = new Date(created_at).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const fontColor = (value: string) => ({
    color: `${value ? "var(--color)" : "var(--font-gray-dark)"}`,
  });

  return (
    <div
      className={styles.main_container}
      style={{ background: `var(--main-bg-${theme}` }}
    >
      <div className={styles.image_container}>
        <img className={styles.avatar} src={avatar_url} alt="avatar" />
      </div>
      
      <div className={styles.description}>
        <h1>{name ? name : login}</h1>
        <a href={html_url} target="_blank">
          @{login}
        </a>
        <span>Joined {joinDay}</span>
      </div>
      
      <p className={styles.bio} style={fontColor(bio)}>
        {bio ? bio : "This profile has no bio"}
      </p>

      <div
        className={styles.statistic}
        style={{ background: `var(--body-bg-${theme})` }}
      >
        <div>
          <span>Repos</span>
          <span className={styles.number}>{public_repos}</span>
        </div>
        <div>
          <span>Following</span>
          <span className={styles.number}>{followers}</span>
        </div>
        <div>
          <span>Followers</span>
          <span className={styles.number}>{following}</span>
        </div>
      </div>
      
      <ul className={styles.contacts}>
        <li>
          <LocationLogo />
          <span style={fontColor(location)}>
            {location ? location : "Not available"}
          </span>
        </li>
        <li>
          <TwitterLogo />
          <a
            style={fontColor(twitter_username)}
            href={`https://twitter.com/${
              twitter_username ? twitter_username : ""
            } `}
            target="_blank"
          >
            {twitter_username ? twitter_username : "Not available"}
          </a>
        </li>
        <li>
          <BlogLogo />
          <a
            href={blog}
            target="_blank"
            style={{
              color: `${blog ? "var(--color)" : "var(--font-gray-dark)"}`,
            }}
          >
            {blog ? blog : "Not available"}
          </a>
        </li>
        <li>
          <CompanyLogo />
          <span style={fontColor(company)}>
            {company ? company : "Not available"}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SocialPage;
