import type { NextPage } from 'next';
import getConfig from 'next/config';
import useTheme from '@mui/material/styles/useTheme';
import Container from '@mui/material/Container';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
console.log({ serverRuntimeConfig, publicRuntimeConfig });

const Home: NextPage = () => {
  const theme = useTheme();

  console.log({ theme });

  return (
    <Container
      disableGutters
      sx={{
        width: '100%',
        minHeight: '100vh',
        maxWidth: 'unset!important',
        padding: '3rem',
      }}
    >
      haha
    </Container>
  );
};

export default Home;
