import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
  } from '@mantine/core';
import { useEffect, useState } from 'react';
import UsuarioBC from '../BC/usuarioBC';
import { useLazyQuery } from '@apollo/react-hooks';
import { SIGNIN_USER } from '../procedures/usuarioProcedures';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { useRouter } from 'next/router';

  
  const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: '100vh', // Establece la altura mínima en el 100% de la altura visible
        width: '100%', // Establece el ancho en el 100% de la pantalla
        backgroundSize: 'cover',
        backgroundImage: 'url(https://th.bing.com/th/id/R.75ccb2fd3bb23fcf8a90725c59a9f509?rik=BmT1jS74q8GNWQ&pid=ImgRaw&r=0)',
      },
      
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: '100vh',
        maxWidth: rem(500),
      paddingTop: rem(80),

  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },


  }));

  const STORAGE_KEY = "session";
  
  export function AuthenticationImage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);


    const { classes } = useStyles();
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [loginUser, { data, loading, error }] = useLazyQuery(SIGNIN_USER);
    

    let sessionValue;

    if (typeof window !== "undefined") {
      sessionValue = localStorage.getItem(STORAGE_KEY);
    }
  
    useEffect(() => {
      if (sessionValue){
        router.push('/');
      }else {
        setIsLoading(false);
      }
  }, []);

    useEffect(() => {
      if (data){
        if (data.usuario.length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data.usuario[0]));
          router.push('/buy');
        }
        else{
          notifications.show({
            id: 'load-data',
            color: 'red',
            title: 'No se pudo iniciar sesión',
  
            message: 
            <>
              Hubo un error al inciar sesión. Intente de nuevo
            </>
            ,
            icon: <IconX size="1rem" />,
            autoClose: false
          });
        }
      }
  }, [data]);

    const handleLogin = async () => {
      await UsuarioBC.login(loginUser, valueEmail, valuePassword);
    };

    if (isLoading) {
      return <div>Cargando..</div>
    }
    return (
      <div className={classes.wrapper}>

        <Paper className={classes.form} radius={0} p={30}>
            
        <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={200} mb={50}>
                TICKETPRO
        </Text>
  
          <TextInput 
            label="Correo" 
            value={valueEmail}
            onChange={(event) => setValueEmail(event.currentTarget.value)}
            placeholder="Tu correo" 
            size="md" />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Tu contraseña" 
            value={valuePassword}
            onChange={(event) => setValuePassword(event.currentTarget.value)}
            mt="md" 
            size="md" />
          <Button fullWidth mt="xl" size="md" onClick={handleLogin} disabled={loading ? true : undefined }>
            Ingresar
          </Button>
  
          <Text ta="center" mt="md">
            ¿No tienes una cuenta?{' '}
            <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Regístrate
            </Anchor>
          </Text>
        </Paper>

      </div>
    );
  }