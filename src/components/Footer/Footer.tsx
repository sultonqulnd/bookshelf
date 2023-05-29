import { Container } from '@mui/material';
import { facebook, twitter, instagram, linkedin } from '../../assets';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='lg' className='footer_container'>
        <div className='footer_text'>BookShelf</div>
        <div className='footer_icons'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='Facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <img src={twitter} alt='Twitter' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='Instagram' />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            <img src={linkedin} alt='Linkedin' />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
