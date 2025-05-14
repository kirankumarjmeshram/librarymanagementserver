import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const BookCard = ({ book }) => {
  const { user } = useContext(AuthContext);

  const handleAddToMyBooks = async () => {
    if (!user) {
      alert('Please login to add books to your list');
      return;
    }

    try {
      await axios.post(`http://localhost:5005/api/mybooks/${book._id}`, {}, { withCredentials: true });
      alert('Book added to your list!');
    } catch (err) {
      alert('Error adding book to your list');
    }
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.coverImage} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>by {book.author}</Card.Text>
        <Button variant="primary" onClick={handleAddToMyBooks}>
          Want to Read
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;