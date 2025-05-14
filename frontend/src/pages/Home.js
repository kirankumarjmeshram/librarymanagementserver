import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../api";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await api.get("/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container className="mt-4">
      <h2>All Books</h2>
      <Row>
        {books.map((book) => (
          <Col key={book._id} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
