import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CardMedia from "@mui/material/CardMedia";

import Main from '../layouts/Main';
import Container from '../components/Container';

import event1 from '@karrate/shared/static/images/event1.png'


const EventPage = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Container>
        <Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
          >
            <Box>
              <Typography fontWeight={700} variant={'h4'} gutterBottom>
                JKA Autumn Camp Romania 2022
              </Typography>
              <Typography variant={'h6'}>Timisoara & Sannicolau Mare, RO · 23-27 noiembrie</Typography>
            </Box>
          </Box>
          <Divider sx={{ marginY: 4 }} />
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={8}>
              <Box marginBottom={3}>
                <Typography variant={'h5'} fontWeight={700} gutterBottom>
                 Aniversare ,,10 ani JKA Romania’’
                </Typography>
                <Typography component={'p'}>
                 Am avut bucuria de a-l avea invitat pe Kunio Kobayashi Sensei la acest Gasshuku extraordinar, la aniversarea a 10-a JKA România.
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant={'h5'} fontWeight={700} gutterBottom>
                 Grupe antrenamente
                </Typography>
                <Typography component={'p'} sx={{marginTop: 2}}>
                  Centuri albe-albastre, 9-6 kyu
                </Typography>
                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                  {[
                    'Luni: 18:00-19:00, Sannicoolau Mare',
                    'Marti: 19:30-20:45, Timisoara',
                    'Pret: 300$',
                  ].map((item, i) => (
                    <Grid item xs={12} key={i}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.grey["100"]}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={item} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Typography component={'p'} sx={{marginTop: 2}}>
                  Centuri negre 1DAN, +18 ani
                </Typography>
                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                  {[
                    'Joi: 17:00-18:30, Timisoara',
                    'Vineri: 12:00-13:00, Timisoara',
                    'Vineri: 18:30-19:30, Timisoara',
                    'Sambata: 10:00-11:30, Timisoara',
                    'Sambata, Fotografii de grup: 11:45-12:00, Timisoara',
                    'Sambata, Examen grad: 14:00-18:00, Timisoara',
                    'Duminica: 11:00-12:00, Timisoara'
                  ].map((item, i) => (
                    <Grid item xs={12} key={i}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.grey["100"]}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={item} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Typography variant={'h5'} fontWeight={700} gutterBottom>
                  Descriere(alte detalii)
                </Typography>
                <Typography component={'p'}>
                  Startul antrenamentelor l-au dat cei peste 70 de copii din grupa de începători 8-6 kyu, care și-au dorit în special să se antreneze cu Kobayashi Sensei 
                  și a fost o mare bucurie pentru ei. Kihon și Heian Shodan, au fost in programul lor. A urmat echipa de 70 de juniori intermediari, 5-1 kyu, care au exersat 
                  combinații de kihon, kata Heian, kihon ippon kumite și jiyu ippon kumite, în cadrul celor 4 antrenamente conduse de Kobayashi Sensei. Antrenamentul celor 
                  peste 70 de centuri negre a fost intens, cu multe informații, kihon, combinații și pregătire pentru kumite, timing, distanță, ritm, predate cu multa 
                  implicare de Kobayashi Sensei. Bineînțeles kata, cu explicații și aplicații, pentru Bassai Dai, Kanku Shu, Meikyo, Empi, Jion și Gojushiho Sho. 
                  A fost un Gasshuku deosebit, unde s-au antrenat împreună cu sportivii și instructorii JKA România, invitații noștri, echipa din Republica Moldova, 
                  condusă de Anton Ignat, prietenii noștri, Dmitry Ossika din Belarus, Dinu Claudiu de la JKA Shokukai Germania, și echipa JKA din Becej-Serbia, 
                  condusă de Attila Komaromi. Mulțumim tuturor pentru efort și participare. Sâmbătă, 26 noiembrie, am avut teste de grad ,,dan’’ și calificări de instructor,
                   arbitru și examinator. Rezultatele au fost bune și am ascultat cu atenție instrucțiunile lui Kobayashi Sensei privind îmbunătățirea calităților tehnice și a 
                   nivelului arbitrilor. Sâmbătă seara ne-am bucurat împreună de Sayonara Party. Mulțumim încă o dată maestrului Kunio Kobayashi pentru efortul deosebit, pentru 
                   implicarea fizică și psihică maximă, și pentru multitudinea de informații oferite, în cadrul acestei aniversări Gasshuku, ,,10 ANI JKA ROMANIA”!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={isMd ? 4 : 2} direction="column">
                <Grid item xs={12} data-aos="fade-up">
                  <Box component={Card} bgcolor={'primary.main'}>
                    <CardMedia
                      title="Titlu"
                      image={event1}
                      sx={{
                        position: 'relative',
                        height: {xs: 500},
                        overflow: 'hidden',
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Box component={Card}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom color="text.primary">
                        Inscrie-te la acest eveniment
                      </Typography>
                      <Button
                        variant="contained"
                        color="error"
                        size="large"
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </Box>
                        }
                      >
                        Continua
                      </Button>
                    </CardContent>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default EventPage;
