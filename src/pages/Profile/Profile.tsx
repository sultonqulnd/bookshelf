import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { UserType } from '../../types';

const Profile = () => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    name: '',
    email: '',
    key: '',
    secret: '',
  });

  const key = localStorage.getItem('key');
  const secret = localStorage.getItem('secret');
  const sign = md5(`GET/myself${secret}`);

  const config = {
    headers: {
      Key: key,
      Sign: sign,
    },
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        'https://no23.lavina.tech/myself',
        config
      );
      setUser(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth='lg' sx={{ marginTop: '40px', minHeight: '100vh' }}>
      <Typography variant='h4' sx={{ marginBottom: '30px' }}>
        Profile
      </Typography>
      <TableContainer component={Paper} sx={{ width: '50%' }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell
                component='th'
                align='center'
                sx={{ fontWeight: 'bold' }}
              >
                Info
              </TableCell>
              <TableCell
                component='th'
                sx={{ fontWeight: 'bold' }}
                align='center'
              >
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell scope='row'>Id</TableCell>
              <TableCell align='right'>{user.id}</TableCell>
            </TableRow>
            <TableRow sx={{ border: 0 }}>
              <TableCell scope='row'>Name</TableCell>
              <TableCell align='right'>{user.name}</TableCell>
            </TableRow>
            <TableRow sx={{ border: 0 }}>
              <TableCell scope='row'>Email</TableCell>
              <TableCell align='right'>{user.email}</TableCell>
            </TableRow>
            <TableRow sx={{ border: 0 }}>
              <TableCell scope='row'>User key</TableCell>
              <TableCell align='right'>{user.key}</TableCell>
            </TableRow>
            <TableRow sx={{ border: 0 }}>
              <TableCell scope='row'>User secret</TableCell>
              <TableCell align='right'>{user.secret}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Profile;
