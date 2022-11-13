/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";

import articol2 from "@karrate/shared/static/images/articol2.png";

const mock = [
    {
    image: articol2,
    title: 'Rezultatele Campionatului JKA Romania',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: {
      name: 'Zoltan Nagy',
    },
    date: '04 Aug',
    link: "/articole/1"
  },
  {
    image: articol2,
    title:
      'JKA ROMANIA SEMINAR 26 FEBRUARIE 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: {
      name: 'Zoltan Nagy',
    },
    date: '04 Aug',
    link: "/articole/2"
  },
  {
    image: articol2,
    title:
      'Semimnarul Online cu Shiina Sensei&Naka Sensei',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: {
      name: 'Zoltan Nagy',
    },
    date: '04 Aug',
    link: "/articole/3"
  },
];

const SidebarArticle = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box component={Card} variant={'outlined'} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Alte articole
      </Typography>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 120,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography fontWeight={700}>{item.title}</Typography>
                <Box marginY={1 / 4}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.author.name} - {item.date}
                  </Typography>
                </Box>
                <Link href={item.link} style={{textDecoration: 'none'}}>
                    <Button size={'small'} color={'error'}>Citeste mai mult</Button>
                </Link>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarArticle;
