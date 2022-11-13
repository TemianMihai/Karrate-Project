import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from '../layouts/Main';
import Container from '../components/Container';
import Spaces from '../components/Spaces';
import Advantages from '../components/Advantages';
import Application from '../components/Application';
import Hero from '../components/Hero';
import EventsCards from '../components/EventsCards';
import MapHero from '../components/MapHero';
import Reviews from '../components/Reviews';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Coworking = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Hero />
      <Box bgcolor={theme.palette.grey["100"]}>
          <Container>
            <Box marginBottom={4}>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'medium',
                  }}
                  gutterBottom
                  color={'error'}
                  align={'center'}
                >
                  Evenimente
                </Typography>
                <Typography
                  variant="h4"
                  align={'center'}
                  data-aos={'fade-up'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Evenimentele clubului nostru
                </Typography>
                <Typography
                  variant="h6"
                  align={'center'}
                  color={'text.secondary'}
                  data-aos={'fade-up'}
                >
                  Evenimentele noastre sunt dedicate practicantilor de karate
                  <br />
                  care doresc sa se antreneze cu un grup mare si profesionist de sportivi.
                </Typography>
            </Box>
            <EventsCards />
            <Grid item xs={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                justifyContent={'center'}
                marginTop={2}
              >
                <Link href="/evenimente" style={{textDecoration: 'none'}}>
                 <Button
                  variant="contained"
                  color="error"
                  size="large"
                  fullWidth={isMd ? false : true}
                  >
                  Inscrie-te la evenimente
                 </Button>
                </Link>
              </Box>
            </Grid>
          </Container>
      </Box>
      <Container>
        <Advantages />
      </Container>
      <Box bgcolor={theme.palette.grey["100"]}>
        <MapHero />
      </Box>
      <Container>
        <Reviews />
      </Container>
      <Box bgcolor={theme.palette.grey["100"]}>
        <Container>
          <Application />
        </Container>
      </Box>
      <Container>
        <Spaces />
      </Container>
    </Main>
  );
};

export default Coworking;
