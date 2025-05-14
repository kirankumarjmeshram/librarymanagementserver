import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../api";
import MyBookCard from "../components/MyBookCard";

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);

  const fetchMyBooks = async () => {
    const res = await api.get("/mybooks");
    setMyBooks(res.data);
  };

  useEffect(() => {
    fetchMyBooks();
  }, []);

  return (
    <Container className="mt-4">
      <h2>My Books</h2>
      <Row>
        {myBooks.map((mybook) => (
          <Col key={mybook._id} sm={6} md={4}>
            <MyBookCard mybook={mybook} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyBooks;
