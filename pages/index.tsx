import type { NextPage } from "next";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container
      disableGutters
      sx={{
        width: "100%",
        minHeight: "100vh",
        maxWidth: "unset!important",
        padding: "3rem",
      }}
    >
      haha
    </Container>
  );
};

export default Home;
