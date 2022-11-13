import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from "@mui/material/Link";

import articol1 from '../../shared/static/images/articol1.png'
import articol2 from '../../shared/static/images/articol2.png'
import articol3 from '../../shared/static/images/articol3.png'
import jkaKarate from '../../shared/static/images/jkaKarate.png'

const mock = [
  {
    media: articol1,
    companyLogo: jkaKarate,
    description: 'Rezultatele Campionatului JKA Romania&Cupa Memorial Ovidiu Cociorva 2022',
    link: "/articole/1"
  },
  {
    media: articol2,
    companyLogo: jkaKarate,
    description:
      'JKA ROMANIA SEMINAR 26 FEBRUARIE 2022',
    link: "/articole/2"
  },
  {
    media: articol3,
    companyLogo: jkaKarate,
    description:
      'Semimnarul Online cu Shiina Sensei&Naka Sensei, 29-30 Ianuarie 2022',
    link: "/articole/3"
  },

];

const ArticlesCards = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={item.link}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
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
                borderRadius={2}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Box maxWidth={100} marginY={2}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={item.companyLogo}
                      alt="..."
                      sx={{
                        filter: mode === 'dark' ? 'contrast(0)' : 'none',
                      }}
                    />
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <Link href={item.link} style={{textDecoration: 'none'}}>
                    <Button
                      size="large"
                      color="error"
                      endIcon={
                        <svg
                          width={16}
                          height={16}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      }
                    >
                      Citeste
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticlesCards;
