import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import CityCard from '../components/CityCard';
import loading from '../loader.gif';
import Search from '../components/Search';
const Cities = () => {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchFromData();
  }, []);

  const fetchFromData = async () => {
    const res = await fetch(`http://localhost:5000/cities`);
    const data = await res.json();
    setCityList(data);
    setLoading(false);
  };

  const searchingText = async (text) => {
    const res = await fetch(`http://localhost:5000/cities?q=${text}`);
    const data = await res.json();
    setLoading(false);
    setCityList(data);

    // console.log(data);
  };

  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Go Back
      </Link>
      <Search searchingText={searchingText} />
      {isLoading === true && (
        <div>
          <h1>Loading...</h1>
          <img src={loading} alt='loading'></img>
        </div>
      )}
      <Row>
        {cityList.map((city) => (
          <Col key={city.id} sm={12} md={6} lg={4} xl={3}>
            <CityCard city={city} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;

//   const fetchCities = () => {
//     // * for filtering an array of objects based on multiple props
//     // * https://stackoverflow.com/a/56757215

//     const uniqueCityList = rooms.filter(
//       (v, i, a) =>
//         a.findIndex((t) => t.city === v.city && t.state === v.state) === i
//     );
//     // console.log(uniqueCityList);
//     // setCityList(uniqueCityList);
//   };
