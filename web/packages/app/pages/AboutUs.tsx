import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import Main from '../layouts/Main';
import Container from '../components/Container';

import AboutHero from '../components/AboutHero';
import About from '../components/About';
import AboutValues from '../components/AboutValues';

const AboutUs = (): JSX.Element => {
  return (
    <Main>
      <Box>
        <AboutHero />
        <Container>
          <AboutValues />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container>
          <About />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
        </Box>
      </Box>
    </Main>
  );
};

export default AboutUs;
