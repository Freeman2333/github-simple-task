import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';

const Header = () => {
  const [activeRoute, setActiveRoute] = useState('Repositories');
  return (
    <>
      <Box
        p={3}
        bgcolor={'#f5f8fa'}
        justifyContent={'space-between'}
        display="flex"
      >
        <ButtonGroup variant="outlined">
          <Button
            style={{
              backgroundColor: activeRoute === 'Repositories' && '#1976d2',
              color: activeRoute === 'Repositories' && 'white',
            }}
            onClick={() => setActiveRoute('Repositories')}
          >
            <Link
              to="/"
              style={{
                color: activeRoute === 'Repositories' && 'white',
              }}
            >
              Repositories
            </Link>
          </Button>
          <Button
            style={{
              backgroundColor: activeRoute === 'Developers' && '#1976d2',
              color: activeRoute === 'Developers' && 'white',
            }}
            onClick={() => setActiveRoute('Developers')}
          >
            <Link
              to="/developers"
              style={{
                color: activeRoute === 'Developers' && 'white',
              }}
            >
              Developers
            </Link>
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Header;
