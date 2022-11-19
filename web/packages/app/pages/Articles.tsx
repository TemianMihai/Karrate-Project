import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Main from '../layouts/Main';
import Container from '../components/Container';
import ArticlesCards from '../components/ArticlesCards';
import ArticlesHero from "../components/ArticlesHero";

const Articles = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box>
        <Box
          position={'relative'}
          sx={{
            backgroundColor: "#ffffff",
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <ArticlesHero />
        </Box>
        <Box marginTop={4}>
            <Box
            >
              <Typography fontWeight={700} variant={'h3'} align={'center'} color={'error'}>
                Vedeti detalii si rezultatele
                <br />
                clubului nostru
              </Typography>
            </Box>
        </Box>
        <Container>
          <ArticlesCards />
        </Container>
      </Box>
    </Main>
  );
};

export default Articles;
