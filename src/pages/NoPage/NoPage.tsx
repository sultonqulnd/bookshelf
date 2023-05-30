import { Box, Container, Typography } from '@mui/material';

const NoPage = () => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: '40px', minHeight: '100vh' }}>
      <Box>
        <Typography
          variant='h3'
          sx={{ marginBottom: '20px', textAlign: 'center' }}
        >
          Oops!
        </Typography>
        <Typography
          variant='h4'
          sx={{ marginBottom: '20px', textAlign: 'center' }}
        >
          404 - Page not found!
        </Typography>
      </Box>
    </Container>
  );
};

export default NoPage;
