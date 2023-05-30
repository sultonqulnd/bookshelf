import { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { BookType } from '../../types';

const Books = () => {
  const statuses = ['New', 'Reading', 'Finished'];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [values, setValues] = useState<BookType>({
    book: {
      id: 0,
      author: '',
      cover: '',
      title: '',
      isbn: '',
      published: 0,
      pages: 0,
    },
    status: 0,
  });

  const [books, setBooks] = useState<BookType[]>([
    {
      book: {
        id: 21,
        isbn: '9781118464465',
        title: 'Raspberry Pi User Guide',
        cover: 'http://url.to.book.cover',
        author: 'Eben Upton',
        published: 2012,
        pages: 221,
      },
      status: 0,
    },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      setBooks(response.data);
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
      setBooks(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (book: React.FormEvent<HTMLDivElement>) => {
    handleClose();
  };

  const createBook = async (book: React.FormEvent<HTMLDivElement>) => {
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

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const editBook = async (id: number) => {
    setSelected(id);
    const selectedBook = books.find((i) => i.book.id === id);
    setValues({ ...values, ...selectedBook });
    setOpen(true);
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
    if (window.confirm('Are you sure you want to delete the book?')) {
      try {
        await axios.delete(`https://no23.lavina.tech/books/${id}`, config);
        getAllBooks();
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <Container maxWidth='lg' sx={{ marginTop: '40px', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Typography variant='h4'>Books</Typography>
        <Button onClick={handleOpen} color='primary' variant='contained'>
          + Add book
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              minHeight: '50%',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <TextField
              fullWidth
              id='isbn'
              label='Isbn'
              variant='standard'
              name='isbn'
              value={values.book.isbn}
              onChange={handleChange}
              sx={{ display: 'block', marginBottom: '10px' }}
            />
            <TextField
              fullWidth
              id='author'
              label='Author'
              variant='standard'
              name='author'
              value={values.book.author}
              onChange={handleChange}
              sx={{ display: 'block', marginBottom: '10px' }}
            />
            <TextField
              fullWidth
              id='title'
              label='Title'
              variant='standard'
              name='title'
              value={values.book.title}
              onChange={handleChange}
              sx={{ display: 'block', marginBottom: '10px' }}
            />
            <TextField
              fullWidth
              id='published'
              label='Published'
              variant='standard'
              name='published'
              value={values.book.published}
              onChange={handleChange}
              sx={{ display: 'block', marginBottom: '10px' }}
            />

            <TextField
              fullWidth
              id='pages'
              label='Pages'
              variant='standard'
              name='pages'
              value={values.book.pages}
              onChange={handleChange}
              sx={{ display: 'block', marginBottom: '30px' }}
            />
            <Box
              sx={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}
            >
              <Button variant='outlined' onClick={() => handleClose()}>
                Cancel
              </Button>
              <Button variant='contained' type='submit'>
                Save
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginBottom: '40px' }}
      >
        {books.length > 0 ? (
          books.map((el, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={el.book.cover}
                    alt='Book image cover'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='body1' component='div'>
                      {el.book.author}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {el.book.title.slice(0, 40)}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {el.book.isbn}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {/* {el?.book?.published} */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Button
                    size='small'
                    variant='outlined'
                    color='primary'
                    onClick={() => editBook(el?.book?.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    color='error'
                    onClick={() => deleteBook(el?.book?.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              width: '100%',
              pt: '40px',
            }}
          >
            <Typography
              variant='h5'
              style={{
                textAlign: 'center',
              }}
            >
              No books yet
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Books;
