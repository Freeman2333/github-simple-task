export interface IRepo {
  id: string;
  full_name: string;
  html_url: string;
  language: string;
  watchers_count: string;
  forks_count: string;
  forks_url: string;
  owner: string;
}

export interface IDeveloper {
  id: number;
  idx: number;
  avatar: string;
  username: string;
  url: string;
  name: string;
  popularRepository: {
    repositoryName: string;
    url: string;
  };
}
