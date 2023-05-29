import { Box, Container, Typography } from '@mui/material';
import './NoPage.scss';

const NoPage = () => {
  return (
    <Container maxWidth='lg' className='nopage'>
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
