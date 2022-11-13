import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from '../layouts/Main';
import Container from '../components/Container';
import ContentArticle from '../components/ContentArticle';
import HeroArticle from '../components/HeroArticle';
import SidebarArticle from '../components/SidebarArticle';
import SimilarStoriesArticle from '../components/SimilarStoriesArticle';

const Article = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main colorInvert={true}>
      <Box>
        <HeroArticle />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <ContentArticle />
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={4}>
                  <SidebarArticle />
                </Box>
              ) : null}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Article;
