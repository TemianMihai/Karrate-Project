import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from "@mui/material/Link";
import { useTheme } from '@mui/material/styles';

import articol1 from '../../shared/static/images/articol1.png'
import articol2 from '../../shared/static/images/articol2.png'
import articol3 from '../../shared/static/images/articol3.png'


const mock = [
  {
    media: [
      articol1
    ],
    title: '2022 Campionatul JKA Romania&Cupa Memorial Ovidiu Cociorva',
    subtitle: 'Scris de Zoltan Nagy Sensei',
    link: "/articole/1"
  },
  {
    media: [
      articol2
    ],
    title: 'JKA ROMANIA SEMINAR 26 FEBRUARIE 2022',
    subtitle: 'Scris de Zoltan Nagy Sensei',
    link: "/articole/2"
  },
  {
    media: [
      articol3
    ],
    title: '29-30 Ianuarie 2022-Online Seminar Shiina Sensei&Naka Sensei',
    subtitle: 'Scris de Zoltan Nagy Sensei',
    link: "/articole/3"
  },
];

const Spaces = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box>
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
          Articole
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
          Articole despre clubul nostru
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
         Karate nu este un joc de puncte, categorii de greutate sau demonstrații ostentative. Este o artă marțială și un mod de viață, care pregătește un practicant să fie pașnic, dar în cazul în care conflictul este inevitabil, adevăratul karate dictează ca poti aduce un adversar la pamant cu o singură lovitură.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={'a'}
              href={item.link}
              style={{textDecoration: 'none'}}
              display={'block'}
              width={1}
              height={1}
              sx={{
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  title={item.title}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                    '& .slick-slide img': {
                      objectFit: 'cover',
                    },
                    '& .slick-prev, & .slick-next': {
                      zIndex: 2,
                      top: 0,
                      bottom: '100%',
                      left: '100%',
                      right: 0,
                      transform: 'translate(-100%, 50%)',
                      marginLeft: theme.spacing(-2),
                      width: 32,
                      height: 32,
                      '&:before': {
                        fontSize: theme.spacing(3),
                      },
                    },
                    '& .slick-prev': {
                      marginLeft: theme.spacing(-6),
                    },
                    '& .lazy-load-image-background.lazy-load-image-loaded': {
                      display: 'flex !important',
                    },
                  }}
                >
                  <Slider {...sliderOpts}>
                    {item.media.map((img) => (
                      <Box
                        key={img}
                        component={LazyLoadImage}
                        effect="blur"
                        src={img}
                        height={{ xs: 240, sm: 340, md: 280 }}
                      />
                    ))}
                  </Slider>
                  <Box
                    component={'svg'}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                    sx={{
                      width: '100%',
                      bottom: 0,
                      position: 'absolute',
                    }}
                  >
                    <path
                      fill={theme.palette.background.default}
                      d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    ></path>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                    align={'left'}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    align={'left'}
                    variant={'subtitle2'}
                    color="text.secondary"
                  >
                    {item.subtitle}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Link href={item.link} style={{textDecoration: 'none'}}>
                    <Button color="error">Citeste</Button>
                  </Link>
                </CardActions>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Spaces;
