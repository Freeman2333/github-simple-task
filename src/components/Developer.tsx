import React from 'react';
import { Box, Link, Stack, Typography, Avatar, Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import repoIcon from './../assets/repo-icon.png';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { IDeveloper } from '../types';

const Developer: React.FC<IDeveloper> = ({
  idx,
  avatar,
  username,
  url: authorUrl,
  name,
  popularRepository,
}) => {
  return (
    <Box
      p={2}
      borderTop={'1px solid rgba(0, 0, 0, 0.12)'}
      display={'flex'}
      justifyContent={'space-between'}
      gap="15px"
    >
      <Stack direction="row" gap="15px" flexBasis="30%">
        <Typography variant="body2">{idx + 1}</Typography>
        <Link href={authorUrl}>
          <Avatar alt={username} src={avatar} sx={{ width: 48, height: 48 }} />
        </Link>
        <Box textAlign="left">
          <Link href={authorUrl} underline="hover">
            <Typography variant="h5">{name}</Typography>
          </Link>
          <Link href={authorUrl} underline="hover" color="inherit">
            <Typography variant=" body2">{username}</Typography>
          </Link>
        </Box>
      </Stack>
      <Stack gap="4px" flexBasis="30%">
        <Stack direction="row" alignItems="center" gap="4px">
          <LocalFireDepartmentIcon sx={{ width: '16px', color: pink[500] }} />
          <Typography variant="caption">POPULAR REPO</Typography>
        </Stack>
        <Link href={popularRepository.url} underline="none">
          <Stack direction="row" alignItems="center" gap="4px">
            <img
              src={repoIcon}
              alt={popularRepository.repositoryName}
              style={{ width: 15, height: 15 }}
            />
            <Typography variant="subtitle">
              {popularRepository.repositoryName}
            </Typography>
          </Stack>
          <Typography variant="subtitle">
            {popularRepository.description}
          </Typography>
        </Link>
      </Stack>
      <Button variant="github">Follow</Button>
    </Box>
  );
};
export default Developer;
