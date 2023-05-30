import axios from 'axios';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    key: '',
    secret: '',
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const user = {
      name: values.name,
      email: values.email,
      key: values.key,
      secret: values.secret,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    try {
      const reponse = await axios.post(
        'https://no23.lavina.tech/signup',
        user,
        config
      );
      console.log(reponse);

      localStorage.setItem('key', user.key);
      localStorage.setItem('secret', user.secret);

      setValues({
        name: '',
        email: '',
        key: '',
        secret: '',
      });
      if (!(!user.key || !user.secret)) {
        <Navigate to='/' replace={true} />;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container
      maxWidth='lg'
      sx={{
        marginTop: '40px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h4' sx={{ marginBottom: '20px' }}>
        Register
      </Typography>
      <Box component='form' onSubmit={handleSubmit} sx={{ width: '30%' }}>
        <TextField
          fullWidth
          id='name'
          label='Name'
          variant='standard'
          name='name'
          value={values.name}
          onChange={handleChange}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          id='email'
          type='email'
          label='Email'
          variant='standard'
          name='email'
          value={values.email}
          onChange={handleChange}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          id='key'
          label='User key'
          variant='standard'
          name='key'
          value={values.key}
          onChange={handleChange}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          id='secret'
          label='User secret'
          variant='standard'
          name='secret'
          value={values.secret}
          onChange={handleChange}
          sx={{ display: 'block', marginBottom: '30px' }}
        />
        <Button fullWidth variant='contained' type='submit'>
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
