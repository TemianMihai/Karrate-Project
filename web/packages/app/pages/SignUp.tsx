import React from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSnackbar } from 'notistack'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '../components/Container'
import FormSignUp from '../components/FormSignUp';
import Main from '../layouts/Main';

import jkaKarate from '../../shared/static/images/jkaKarate.png'

import LoginPage from "./LoginPage";

/**
 * Schema
 */
const schema = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().email().required(),
})

const SignUp: React.FC = () => {
  // const history = useHistory()
  // const { enqueueSnackbar } = useSnackbar()
  //
  // const [login, { error, loading }] = useMutation(LOGIN)
  //
  // const { register, formState, handleSubmit } = useForm<LoginInput>({
  //   mode: 'all',
  //   resolver: yupResolver(schema),
  // })
  //
  // const onSubmit = async (form: LoginInput): Promise<void> => {
  //   if (formState.isValid) {
  //     const variables = {
  //       input: {
  //         email: form.email,
  //         password: form.password,
  //       },
  //     }
  //
  //     try {
  //       const { data } = await login({ variables })
  //       setToken(data?.login?.accessToken)
  //       history.push('/home')
  //     } catch (error) {
  //       enqueueSnackbar(error.message, { variant: 'error' })
  //     }
  //   }
  // }

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
          <Grid container spacing={12}>
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <FormSignUp />
            </Grid>
            {isMd ? (
               <Grid item container justifyContent={'center'} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={'img'}
                    src={
                      jkaKarate
                    }
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </Main>
  );
}

export default SignUp

