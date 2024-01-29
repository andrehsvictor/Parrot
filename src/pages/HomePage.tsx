import { Menu, Person } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Parrot
            </Typography>
            <Button color="inherit" variant="text" size="small">
              Sign in
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
