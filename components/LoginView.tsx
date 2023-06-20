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
  
  export function AuthenticationImage() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>

        <Paper className={classes.form} radius={0} p={30}>
            
        <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={200} mb={50}>
                TICKETPRO
        </Text>
  
          <TextInput label="Correo" placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Contraseña" placeholder="Tu contraseña" mt="md" size="md" />
          <Checkbox label="Recordar credenciales" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md">
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