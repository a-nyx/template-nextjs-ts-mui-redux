import type { NextPage } from 'next';
import getConfig from 'next/config';
import useTheme from '@mui/material/styles/useTheme';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector, languageStateActions } from '@store';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
console.log({ serverRuntimeConfig, publicRuntimeConfig });

const Home: NextPage = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language);

  console.log({ theme, language });

  const languageHandler = () => {
    dispatch(
      languageStateActions.replace({
        id: 'tr',
        name: 'Türkçe',
      })
    );
  };

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
      <Button onClick={languageHandler}>Go TR</Button>
    </Container>
  );
};

export default Home;
