import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from './Container';

import aboutUs1 from '../../shared/static/images/aboutus1.png'
import aboutUs2 from '../../shared/static/images/aboutus2.png'
import aboutUs3 from '../../shared/static/images/aboutus3.png'
import aboutUs4 from '../../shared/static/images/aboutus4.png'


const AboutHero = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#ffffff',
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container>
        <Box>
          <Box
            marginBottom={{ xs: 0, sm: 4 }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography
              variant="h3"
              gutterBottom
              align={'center'}
              sx={{
                fontWeight: 900,
              }}
            >
              Despre noi
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              align={'center'}
              sx={{ marginBottom: 2 }}
            >
              Obiectivul nostru principal este promovarea pe scara larga a artei martiale KARATE-DO prin numeroase actiuni  – stagii de pregatire, participari la competitiile nationale si internationale , demonstratii ,etc.
              <br />
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-end'}
              xs={4}
              sx={{
                '& .lazy-load-image-loaded': {
                  width: '80%',
                  height: '80%',
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                src={aboutUs1}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-end'}
              xs={8}
              sx={{
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                  width: 1,
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                src={aboutUs2}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              xs={8}
              sx={{
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                  width: 1,
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                src={aboutUs3}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              xs={4}
              sx={{
                '& .lazy-load-image-loaded': {
                  width: '80%',
                  height: '80%',
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                src={aboutUs4}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHero;
