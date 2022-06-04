import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import aboutUs5 from '../../shared/static/images/aboutus5.png'


const About = (): JSX.Element => {
  const theme = useTheme();
  console.log(theme.palette)
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          Despre
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Despre clubul nostru
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          xs={12}
          md={6}
        >
          <Typography color={'text.secondary'}>
            Cartea noastra de vizita este reprezentata de  Zoltan Nagy Sensei 5 dan, cu o experienta de peste 35 de ani in antrenamentele de karate-do , din care peste 25 de ani ca instructor si  antrenor , precum si cele peste 500 de medalii nationale si internationale castigate de sportivii clubului nostru, in cei peste 20 de ani de activitate.
            <br />
            <br />
            Programul de antrenament este stucturat in functie de varsta si nivelul de pregatire; grupa de performanta umareste programul competitional anual, iar perioada inter-competitionala cuprinde antrenamente cu specific de autoaparare.
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Typography color={'text.secondary'}>
            Daca vrei sa fi sanatos fizic si psihic, daca vrei sa scapi de timiditate si sa-ti faci prieteni noi, daca vrei sa fi mai puternic si sa ai incredere in tine, daca vrei sa ajungi campion, atunci vino sa te antrenezi impreuna cu noi!
            <br />
            <br />
            Clubul Sportiv FUDOKAN KARATE  TIMISOARA, a fost fondat in OCTOMBRIE 1998 ,si este un club sportiv cu personalitate juridica de drept privat, este independent fata de orice  formatiune politica si nu are scop lucrativ.
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sx={{
            '& .lazy-load-image-background.lazy-load-image-loaded': {
              width: '100%',
              height: '100%',
            },
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            maxHeight={{ xs: 300, sm: 400, md: 520 }}
            borderRadius={2}
            src={aboutUs5}
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
  );
};

export default About;
