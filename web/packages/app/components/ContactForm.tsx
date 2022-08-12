/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Va rugam sa introduceti un nume valid')
    .max(50, 'Va rugam sa introduceti un nume valid')
    .required('Va rugam sa introduceti prenumele'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Va rugam sa introduceti un nume valid')
    .max(50, 'Va rugam sa introduceti un nume valid')
    .required('Va rugam sa introduceti numele de familie'),
  email: yup
    .string()
    .trim()
    .email('Va rugam sa introduceti o adresa de email valida')
    .required('Introduceti Email.'),
  message: yup
    .string()
    .trim()
    .required('Introduceti mesajul'),
});

const ContactForm = (): JSX.Element => {
  const theme = useTheme();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography
          variant={'h3'}
          sx={{ fontWeight: 700 }}
          align={'center'}
          gutterBottom
        >
          Contactati-ne
        </Typography>
        <Typography color="error" align={'center'}>
         Ne puteti lasa un mesaj cu privire la orice nelamurire pe care o aveti.
        </Typography>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Prenume"
                variant="outlined"
                color="error"
                size="medium"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Nume"
                variant="outlined"
                color="error"
                size="medium"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="error"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mesaj"
                multiline
                rows={6}
                variant="outlined"
                color="error"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="error"
                size="medium"
                type="submit"

              >
                Trimiteti
              </Button>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Typography color="error">
                Vom reveni cu un raspuns in cel mai scurt timp posibil.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  Apasand "trimiteti" sunteti de acord cu{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  and{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
