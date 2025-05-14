import React from 'react';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';

const MyBookCard = ({ mybook, refresh }) => {
  const handleStatusChange = async (e) => {
    try {
      await axios.patch(
        `http://localhost:5005/api/mybooks/${mybook.bookId._id}/status`,
        { status: e.target.value },
        { withCredentials: true }
      );
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleRatingChange = async (e) => {
    try {
      await axios.patch(
        `http://localhost:5005/api/mybooks/${mybook.bookId._id}/rating`,
        { rating: parseInt(e.target.value) },
        { withCredentials: true }
      );
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={mybook.bookId.coverImage} alt={mybook.bookId.title} />
      <Card.Body>
        <Card.Title>{mybook.bookId.title}</Card.Title>
        <Card.Text>by {mybook.bookId.author}</Card.Text>
        <Form.Group controlId="statusSelect">
          <Form.Label>Status</Form.Label>
          <Form.Select value={mybook.status} onChange={handleStatusChange}>
            <option>Want to Read</option>
            <option>Currently Reading</option>
            <option>Read</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="ratingSelect" className="mt-2">
          <Form.Label>Rating</Form.Label>
          <Form.Select value={mybook.rating || ''} onChange={handleRatingChange}>
            <option value="">Rate</option>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default MyBookCard;