// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThreeHousesContainer } from '@fepmu/features/three-houses';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        aria-label="color-mode"
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound={true}
        m="4"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreeHousesContainer />} />
          <Route path="/three-houses" element={<ThreeHousesContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      {/* END: routes */}
    </>
  );
}

export default App;
