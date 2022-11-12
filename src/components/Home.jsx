import NavBar from "./NavBar";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import RightBar from "./RightBar";
export default function Home(props) {
  return (
    <>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <RightBar />
      </Stack>
    </>
  );
}
