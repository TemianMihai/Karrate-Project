import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Main from '../layouts/Main';
import Container from '../components/Container';
import EventsCards from "../components/EventsCards";
import EventsHero from "../components/EventsHero";

const Events = (): JSX.Element => {
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
          <EventsHero />
        </Box>
        <Box marginTop={4}>
          <Box>
            <Typography fontWeight={700} variant={'h3'} align={'center'} color={'error'}>
              Vedeti evenimentele
              <br />
              din urmatoarea perioada
            </Typography>
          </Box>
        </Box>
        <Container>
          <EventsCards />
          <EventsCards />
          <EventsCards />
        </Container>
      </Box>
    </Main>
  );
};

export default Events;
