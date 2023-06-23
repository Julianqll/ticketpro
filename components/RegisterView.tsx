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
  Flex,
  Autocomplete,
  Loader,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import UsuarioBC from '../BC/usuarioBC';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../procedures/usuarioProcedures';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
  
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
    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,
    
        '&::placeholder': {
          color: theme.colors.gray[5],
        },
      },
    
      inputLabel: {
        color: theme.black,
      },

  }));
  
  export function RegisterImage() {
    const { classes } = useStyles();
    const [visible, { toggle }] = useDisclosure(false);

    const [valueNames, setValueNames] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [valueDNI, setValueDNI] = useState('');
    const [valueStreet, setValueStreet] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueTelephone, setValueTelephone] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [valueRepeatPassword, setValueRepeatPassword] = useState('');

    const timeoutRef = useRef<number>(-1);
    const [loadingOptions, setLoadingOptions] = useState(false);
    const [emailOptions, setEmailOptions] = useState<string[]>([]);
    const [openedRepeatPassword, setOpenedRepeatPassword] = useState(false);
    const [openedPassword, setOpenedPassword] = useState(false);
    const [equalPassword, setequalPassword] = useState(false);
    const [passwordChecker, setPasswordChecker] = useState(true);
    const validPassword = valuePassword.trim().length >= 6;
    const [validDNI, setValidDNI] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [addUser, { data, loading, error }] = useMutation(ADD_USER);

    useEffect(() => {
        if (data) {
          notifications.show({
            id: 'load-data',
            color: 'teal',
            title: 'Registro exitoso',

            message: 
            <>
              Ya puede iniciar sesión {' '}
              <Anchor<'a'> href="/login" weight={700}>
              aquí
              </Anchor>
            </>
            ,
            icon: <IconCheck size="1rem" />,
            autoClose: false
          });
          }
    }, [data]);
  
    //validaciones
    useEffect(() => {
      const passwordsMatch = valuePassword === valueRepeatPassword;
      setequalPassword(passwordsMatch);
    }, [valuePassword, valueRepeatPassword]);

    useEffect(() => {
      let checker = true;
      if (valuePassword.length > 0){
        checker = valuePassword.trim().length >= 6;
      }
      setPasswordChecker(checker);
    }, [valuePassword]);
  
    useEffect(() => {
      const dniRegex = /^\d{8}$/; 
      let dniMatch = true;
      if (valueDNI.length > 0) {
        dniMatch = dniRegex.test(valueDNI);
      }
      setValidDNI(dniMatch);
    }, [valueDNI]);

    useEffect(() => {
      const emailRegex = /^\S+@\S+$/; 
      let emailMatch = true;
      if (valueEmail.length > 0) {
        emailMatch = emailRegex.test(valueEmail);
      }
      setValidEmail(emailMatch);
    }, [valueEmail]);
    


    //funciones adicionales
    const handleEmailOptions = (val: string) => {
      window.clearTimeout(timeoutRef.current);
      setValueEmail(val);
      setEmailOptions([]);
  
      if (val.trim().length === 0 || val.includes('@')) {
        setLoadingOptions(false);
      } else {
        setLoadingOptions(true);
        timeoutRef.current = window.setTimeout(() => {
          setLoadingOptions(false);
          setEmailOptions(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
        }, 1000);
      }
    };

    const handleRegister = async () => {
      const usuarioNuevo = {
        nombre: valueNames,
        apellido: valueLastName,
        contrasena: valuePassword,
        direccion: valueStreet,
        dni: valueDNI,
        email: valueEmail,
        estado: true,
        rolId: 2,
        telefono: valueTelephone,
      }
      try {
        await UsuarioBC.añadirUsuario(addUser, usuarioNuevo);
      } catch (error) {
        notifications.show({
          title: 'Error',
          message: 'Hey there, your code is awesome! 🤥',
        });
      }
    };

    //vista y componentes visuales
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={150} mb={30}>
              TICKETPRO
          </Text>
            <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <TextInput
                  label="Nombres"
                  placeholder="Tus nombres"
                  value={valueNames}
                  onChange={(event) => setValueNames(event.currentTarget.value)}
                  mt="md"
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <TextInput
                  label="Apellidos"
                  placeholder="Tus apellidos"
                  value={valueLastName}
                  onChange={(event) => setValueLastName(event.currentTarget.value)}
                  mt="md"
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
              </Flex>
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
              >
              <TextInput
                  label="DNI"
                  placeholder="Documento de identidad"
                  mt="md"
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                  value={valueDNI}
                  onChange={(event) => setValueDNI(event.currentTarget.value)}
                  error={validDNI ? undefined : "DNI no válido"}
                />
              <TextInput
                  label="Dirección"
                  placeholder="Dirección de prueba"
                  value={valueStreet}
                  onChange={(event) => setValueStreet(event.currentTarget.value)}
                  mt="md"
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
              </Flex>
              <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
              >
              <Autocomplete
                data={emailOptions}
                mt="md"
                value={valueEmail}
                onChange={handleEmailOptions}
                rightSection={loadingOptions ? <Loader size="1rem" /> : null}
                label="Correo"
                required
                placeholder="Tu correo"
              />
              <TextInput
                  label="Teléfono"
                  placeholder="Tu teléfono"
                  value={valueTelephone}
                  onChange={(event) => setValueTelephone(event.currentTarget.value)}
                  mt="md"
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
              </Flex>
              <Flex
              mih={50}
              gap="md"
              justify="center"
              direction="row"
              wrap="wrap"
              >
                <Tooltip
                  label={validPassword ? 'Correcta' : 'Debe incluir más de 6 caracteres'}
                  position="bottom-start"
                  withArrow
                  opened={openedPassword}
                  color={validPassword ? 'teal' : undefined}
                >
                  <PasswordInput
                    label="Contraseña"
                    miw={150}
                    required
                    placeholder="Your password"
                    onFocus={() => setOpenedPassword(true)}
                    onBlur={() => setOpenedPassword(false)}
                    mt="md"
                    value={valuePassword}
                    onChange={(event) => setValuePassword(event.currentTarget.value)}
                    error={passwordChecker ? undefined : "Las contraseñas no es válida"}  

                  />
                </Tooltip>
                <PasswordInput
                  label="Repetir contraseña"
                  miw={150}
                  required
                  placeholder="Your password"
                  onFocus={() => setOpenedRepeatPassword(true)}
                  onBlur={() => setOpenedRepeatPassword(false)}
                  mt="md"
                  value={valueRepeatPassword}
                  onChange={(event) => setValueRepeatPassword(event.currentTarget.value)}
                  error={equalPassword ? undefined : "Las contraseñas no coinciden"}
                />
              </Flex>
            </Flex>
            <Button  fullWidth mt="xl" size="md" onClick={handleRegister} disabled={loading ? true : undefined }>
              Registrarse
            </Button>
          <Text ta="center" mt="md">
            Ya tienes una cuenta{' '}
            <Anchor<'a'> href="/login" weight={700}>
              Ingresa aquí
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }