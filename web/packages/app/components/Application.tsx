import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

const Application = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Informatii despre club
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          Pentru orice detaliu legat de clubul nostru, vizitati www.jkaromania.com
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
            <Link target="_blank" href="http://www.jkaromania.com" style={{textDecoration: 'none'}}>
              <Button variant="contained" color="error" size="large">
                Vizitati
              </Button>
            </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Application;
