import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box textAlign="center" position="fixed" bottom="0" width="100vw" bgcolor="white">
        <Divider variant="middle" />
        <Typography variant="caption" component="div" sx={{ mt: 1, mb: 1 }}>
          © 2024 Parrot. Made with 💙 by André Victor
        </Typography>
      </Box>
    </>
  );
}
