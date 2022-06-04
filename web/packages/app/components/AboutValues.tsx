import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Corectitudine',
    subtitle: "Pentru samurai, corectitudinea morală însemna talentul unui om de a decide în mod raţional care este cea mai justă şi mai dreaptă cale de urmat."
  },
  {
    title: 'Loialitate',
    subtitle: 'Istoria Japoniei e plină de poveștile unor samurai care au rămas loiali stăpânilor lor chiar și în moarte.'
  },
  {
    title: 'Curaj',
    subtitle: 'In carieră, curajul este esențial. Nu înseamnă să te arunci cu capul înainte, orbește, ci să iei decizii inteligente, chiar dacă asta îți va aduce prejudicii.'
  },
  {
    title: 'Onoare',
    subtitle: "Aceasta este calitatea esențială. Nimeni nu poate pretinde că este budōka (războinic în sensul nobil al termenului) dacă nu are o conduită onorabilă. Din simțul onoarei derivă toate celelalte virtuți. Solicită respect pentru codul moral și urmărirea unui ideal pentru a avea întotdeauna un comportament demn și respectabil. Ne condiționează atitudinea și modul de a fi față de ceilalți."
  },
  {
    title: 'Bunătatea și bunăvoința ',
    subtitle: 'Bunătatea și bunăvoința sunt semne ale curajului care denotă o înaltă umanitate. Ne încurajează să ne ajutăm reciproc, să fim atenți la aproapele și la mediul înconjurător, să fim respectuoși față de viață.'
  },
  {
    title: 'Respect',
    subtitle: 'Dreptatea creează respect pentru ceilalți și pentru ceilalți. Politețea este expresia acestui respect datorat celorlalți, indiferent de calitățile, slăbiciunile sau poziția lor socială. Să știi cum să tratezi oamenii și lucrurile cu respect și să respecti sacrul este prima datorie a unui budōka , deoarece ajută la evitarea multor certuri și conflicte.'
  }
];

const AboutValues = (): JSX.Element => {
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
          Valori
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Valorile karateului
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography variant={'h6'} fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutValues;
