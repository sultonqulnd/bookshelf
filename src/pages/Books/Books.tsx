import { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { Box, Container, Typography } from '@mui/material';
import './Books.scss';

type BookType = {
  book: {
    isbn: string;
    title: string;
    cover: string;
    author: string;
    published: number;
    pages: number;
  };
  status: number;
};

const Books = () => {
  const [books, setBooks] = useState([]);

  const key = localStorage.getItem('key');
  const secret = localStorage.getItem('secret');
  const sign = md5(`GET/myself${secret}`);
  const config = {
    headers: {
      Key: key,
      Sign: sign,
    },
  };

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        'https://no23.lavina.tech/books',
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const searchBooks = async (title: string) => {
    try {
      const response = await axios.get(
        `https://no23.lavina.tech/books/${title}`,
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const createBook = async (book: BookType) => {
    try {
      const response = await axios.post(
        'https://no23.lavina.tech/books',
        book,
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const editBook = async (id: number) => {
    const book = {
      status: 1,
    };
    try {
      const response = await axios.patch(
        `https://no23.lavina.tech/books/${id}`,
        book,
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://no23.lavina.tech/books/${id}`,
        config
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <Container maxWidth='lg' className='books'>
      <Typography variant='h4'>Books</Typography>
      <Box></Box>
    </Container>
  );
};

export default Books;
