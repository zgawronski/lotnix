import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.style';

import AirPortSelection from '../components/templates/AirportSelection/AirportSelection';

const Root: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path="/" element={<AirPortSelection />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
