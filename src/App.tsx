import * as React from 'react';
import { SnackbarProvider } from 'notistack';
import FindPath from './pages/FindPath';

const App = () => (
  <SnackbarProvider maxSnack={3}>
    <FindPath />
  </SnackbarProvider>
);

export default App;
