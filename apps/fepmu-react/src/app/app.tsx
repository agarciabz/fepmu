// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThreeHousesContainer } from '@fepmu/ui/react/features/three-houses';

import { Route, Redirect } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Route path="/" exact>
        <Redirect to="/three-houses" />
      </Route>
      <Route path="/three-houses" component={ThreeHousesContainer} />
      {/* END: routes */}
    </ChakraProvider>
  );
}

export default App;