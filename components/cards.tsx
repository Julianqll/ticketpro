import { createStyles, Text, SimpleGrid, Container, rem, Title } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import { ArticleCardFooter } from './articleCard';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  h1:{
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,

  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/tro021_calugalistado.jpg",
    "category": "música",
    "title": "Fórmula Vol. 3 La Gira",
    "footer": "Ver más",
    "author": {
      "name": "Romeo Santos",
      "description": "08 de diciembre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/tro021_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/eli016_calugalistado.jpg",
    "category": "música",
    "title": "The Sauce - Latam Tour 2023",
    "footer": "Ver más",
    "author": {
      "name": "Eladio Carrion",
      "description": "02 de setiembre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/eli016_calugalistado.jpg"
    }
  },
  {
    "image": "https://cdn.teleticket.com.pe/images/eventos/ics037_calugalistado.jpg",
    "category": "música",
    "title": "Saturno Tour - World Tour 2023",
    "footer": "Ver más",
    "author": {
      "name": "Rauw Alejandro",
      "description": "28 de octubre 2023",
      "image": "https://cdn.teleticket.com.pe/images/eventos/ics037_calugalistado.jpg"
    }
  }
];


export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <ArticleCardFooter {...item} key={item.title} />);
  const { classes, cx } = useStyles();
  return (
    <Container mt={30} mb={30} size="lg">
    <Title className={classes.h1} mb={30}>
        Destacados
    </Title>  
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}