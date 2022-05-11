import React, { useEffect, useState } from 'react';
import Developer from './Developer.tsx';
import { IDeveloper } from '../types';

const Developers: React.FC = () => {
  const [developers, setDevelopers] = useState<IDeveloper[]>([]);
  useEffect(() => {
    fetch('http://localhost:4000/developers')
      .then((res) => res.json())
      .then((res) => setDevelopers(res));
  }, []);
  console.log(developers);
  return (
    <>
      {developers.map((developer, idx) => (
        <Developer idx={idx} key={developer.id} {...developer} />
      ))}
    </>
  );
};

export default Developers;
