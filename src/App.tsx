import { ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { muiTheme } from "./theme/muiTheme.ts";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
