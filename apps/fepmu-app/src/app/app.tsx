// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThreeHousesContainer } from '@fepmu/features/three-houses';

import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreeHousesContainer/>}/>
          <Route path="/three-houses" element={<ThreeHousesContainer/>} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </BrowserRouter>
      {/* END: routes */}
    </ChakraProvider>
  );
}

export default App;
