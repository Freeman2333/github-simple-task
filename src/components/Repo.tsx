import React from 'react';
import { Box, Link, Stack, Typography, Avatar, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import repoIcon from './../assets/repo-icon.png';
import starIcon from './../assets/github-star.jpg';
import forkIcon from './../assets/fork-icon.png';
import { IRepo } from './../types';

const Repo: React.FC<IRepo> = ({
  full_name,
  html_url,
  language,
  watchers_count,
  forks_count,
  forks_url,
  owner,
}) => {
  return (
    <Box
      p={2}
      borderTop={'1px solid rgba(0, 0, 0, 0.12)'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Box>
        <Stack direction="row" alignItems="center" gap={1}>
          <img
            src={repoIcon}
            alt={full_name}
            style={{ width: 15, height: 15 }}
          />
          <Link variant="h6" underline="hover" href={html_url}>
            {full_name}
          </Link>
        </Stack>
        <Typography variant="body2" mb={1}>
          A server software reimplementation for a certain anime game.
        </Typography>
        <Stack direction="row" alignItems="center" gap={1.5}>
          {language && <Typography variant="body2">{language}</Typography>}
          {watchers_count && (
            <Stack direction="row" alignItems="center" gap={0.3}>
              <img
                src={starIcon}
                alt="watchers"
                style={{ width: 15, height: 15 }}
              />
              <Typography variant="body2">{watchers_count}</Typography>
            </Stack>
          )}
          {forks_count && (
            <Link
              href={forks_url}
              underline="none"
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}
            >
              <img src={forkIcon} alt="watchers" style={{ width: 9 }} />
              <Typography variant="body2">{forks_count}</Typography>
            </Link>
          )}
          <Stack direction="row" alignItems="center" gap={0.3}>
            <Typography variant="body2">Built by</Typography>
            <Link href={owner.html_url}>
              <Avatar
                alt={owner.login}
                src={owner.avatar_url}
                sx={{ width: 18, height: 18 }}
              />
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Stack direction="column" justifyContent="space-between">
        <Button variant="github" startIcon={<StarIcon />}>
          Star
        </Button>
        <Stack direction="row" gap={0.3} alignItems="center">
          <StarIcon sx={{ maxWidth: '15px' }} />
          <Typography variant="body2">{watchers_count} stars today</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Repo;
