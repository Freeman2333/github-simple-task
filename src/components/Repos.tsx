import React, { useEffect, useState } from 'react';
import Repo from './Repo.tsx';
import { IRepo } from './../types';

const Repos: React.FC = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  useEffect(() => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((res) => setRepos(res));
  }, []);
  return (
    <>
      {repos.map((repo) => (
        <Repo key={repo.id} {...repo} />
      ))}
    </>
  );
};

export default Repos;
