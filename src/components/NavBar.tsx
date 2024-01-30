import { AccountCircle, Https } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 10 }} position="sticky" zIndex="1000">
        <AppBar
          sx={{
            bgcolor: "green",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Parrot™
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{ flexGrow: 1, ml: 1 }}
            >
              A social media platform for parrots
            </Typography>
            <Button color="inherit" variant="text" size="medium">
              <AccountCircle sx={{ mr: 1 }} />
              Sign in
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
