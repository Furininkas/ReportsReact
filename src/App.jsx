import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
function App() {
  const [data, setData] = useState("No data yet");

  const testApi = async () => {
    try {
      const response = await fetch('/api/test');
      const result = await response.json();
      setData(result.message);
    } catch (err) {
      setData("Error: Backend unreachable");
    }
  };

  return (
    <Box sx={{ 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center',
  minHeight: '50vh' // Centers it vertically in the top half of the screen
}}>
  <h1>Čia greitai viskas veiks</h1>
</Box>
  );
}

export default App;