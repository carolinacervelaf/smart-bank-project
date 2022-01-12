import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme"

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  };

  return (
    <>
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTheme tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
