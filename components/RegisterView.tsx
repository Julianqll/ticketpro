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
  } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRef, useState } from 'react';
import { InputTooltip } from './PasswordInputs';
  
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


    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);
  
    const handleChange = (val: string) => {
      window.clearTimeout(timeoutRef.current);
      setValue(val);
      setData([]);
  
      if (val.trim().length === 0 || val.includes('@')) {
        setLoading(false);
      } else {
        setLoading(true);
        timeoutRef.current = window.setTimeout(() => {
          setLoading(false);
          setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
        }, 1000);
      }
    };
    
    return (
      <div className={classes.wrapper}>

        <Paper className={classes.form} radius={0} p={30}>
            
        <Text weight={700} size={30} sx={{ lineHeight: 1, color: 'black' }} ta="center" mt={100} mb={30}>
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
            placeholder="John Doe"
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
        <TextInput
            label="Apellidos"
            placeholder="Doe"
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
          />
        <TextInput
            label="Dirección"
            placeholder="Dirección de prueba"
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
          value={value}
          data={data}
          mt="md"
          onChange={handleChange}
          rightSection={loading ? <Loader size="1rem" /> : null}
          label="Correo"
          required
          placeholder="Tu correo"
        />
        <TextInput
            label="Teléfono"
            placeholder="your@email.com"
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
          <InputTooltip></InputTooltip>
        </Flex>


        </Flex>

          <Button fullWidth mt="xl" size="md">
            Registrarse
          </Button>
  
          <Text ta="center" mt="md">
            Ya tienes una cuenta{' '}
            <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Ingresa aquí
            </Anchor>
          </Text>
        </Paper>

      </div>
    );
  }