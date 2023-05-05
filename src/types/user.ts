export type Name = {
  setName: React.Dispatch<React.SetStateAction<FormDataEntryValue>>;
};

export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  message?: 'Not Found',
};
