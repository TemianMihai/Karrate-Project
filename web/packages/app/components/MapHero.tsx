import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from '../components/Container';

const mock = [
  {
    title: 15,
    subtitle:
      '15 + sali de antrenament in toata Romania.',
    suffix: '+',
  },
  {
    title: 30,
    subtitle:
      '30 + Sensei dornici de predat karate.',
    suffix: '+',
  },
  {
    title: 250,
    subtitle: '250 + elevi in toate salile noastre.',
    suffix: '+',
  },
];

const MapHero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = (): JSX.Element => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    const setViewPortVisibility = (isVisible: any) => {
      if (viewPortEntered) {
        return;
      }

      setViewPortEntered(isVisible);
    };

    return (
      <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'error'}
        >
          Dojo
        </Typography>
        <Box marginBottom={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
            Diferite sali de antrenament in mai multe orase din Romania
          </Typography>
          <Typography color="text.secondary">
            Clubul nostru ofera mai multe ddojo-uri pline de elevi pasionati de karate indrumati de Sensei acreditati.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Typography variant="h3" gutterBottom>
                <Box fontWeight={600}>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Box>
              </Typography>
              <Typography color="text.secondary" component="p">
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const RightSide = (): JSX.Element => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?q=Friends%20Arena,%20Scoala%20Gen.%202,Strada%20Mure%C5%9F%206-8,%20Strada%20Lacului%201,%20Timi%C8%99oara%20300418&t=&z=15&ie=UTF8&iwloc=&output=embed"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default MapHero;
