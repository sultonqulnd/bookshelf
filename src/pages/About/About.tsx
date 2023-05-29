import { Box, Container, Typography } from '@mui/material';
import './About.scss';

const About = () => {
  return (
    <Container maxWidth='lg' className='about'>
      <Box>
        <Typography variant='h4' sx={{ marginBottom: '20px' }}>
          About us
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          ipsa nemo architecto necessitatibus sequi natus ratione? Minus omnis
          corporis illum possimus numquam necessitatibus doloremque impedit
          enim, unde culpa optio quidem cumque, error libero? Quia, itaque
          quisquam. Tempore, perspiciatis dolorum. Totam, ut sed? Sit molestias
          unde pariatur maxime consectetur cumque! Accusantium quisquam quo
          neque a esse error nam officia nemo illo voluptates. Veritatis
          voluptatem sit illum et sed cumque quam obcaecati laboriosam
          distinctio corrupti nostrum, quae vero necessitatibus rerum quo hic
          totam adipisci beatae ab dolorum autem architecto ex nisi. Quaerat
          eligendi asperiores ea placeat soluta, facere eos quos perspiciatis
          eveniet.
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          ipsa nemo architecto necessitatibus sequi natus ratione? Minus omnis
          corporis illum possimus numquam necessitatibus doloremque impedit
          enim, unde culpa optio quidem cumque, error libero? Quia, itaque
          quisquam. Tempore, perspiciatis dolorum. Totam, ut sed? Sit molestias
          unde pariatur maxime consectetur cumque! Accusantium quisquam quo
          neque a esse error nam officia nemo illo voluptates. Veritatis
          voluptatem sit illum et sed cumque quam obcaecati laboriosam
          distinctio corrupti nostrum, quae vero necessitatibus rerum quo hic
          totam adipisci beatae ab dolorum autem architecto ex nisi. Quaerat
          eligendi asperiores ea placeat soluta, facere eos quos perspiciatis
          eveniet.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
