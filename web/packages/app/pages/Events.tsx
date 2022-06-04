import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from '../layouts/Main';
import Container from '../components/Container';
import ArticlesHeadline from '../components/ArticlesHeadline';
import EventsCards from "../components/EventsCards";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

const Events = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Main>
      <Box>
        <Box
          position={'relative'}
          sx={{
            backgroundColor: "#ffffff",
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container zIndex={3} position={'relative'}>
            <Container marginLeft={'0 !important'}>
              <ArticlesHeadline />
            </Container>
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            width={1}
            marginBottom={-1}
            position={'relative'}
            zIndex={2}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
        <Container>
          <EventsCards />
          <EventsCards />
          <EventsCards />
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              justifyContent={'center'}
              marginTop={2}
            >
              <Button
                variant="contained"
                color="error"
                size="large"
                fullWidth={isMd ? false : true}
              >
                Inscrie-te la evenimente
              </Button>
            </Box>
        </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Events;
