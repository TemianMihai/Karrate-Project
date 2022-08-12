/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ArticlesHeadline = (): JSX.Element => {
  return (
    <Box>
      <Box>
        <Typography variant="h3" gutterBottom>
         Bine ati venit!
        </Typography>
        <Typography variant="h3" color={'error'} fontWeight={700}>
         Aici puteti gasi diferite article despre clubul nostru.
        </Typography>
      </Box>
    </Box>
  );
};

export default ArticlesHeadline;
