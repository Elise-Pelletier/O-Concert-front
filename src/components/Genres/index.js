import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

import CategoryCard from 'src/components/CategoryCard';

import { fetchGenres } from '../../actions/genres';
// import styles
import './genres.scss';

const Genres = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genres.genresList);
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  // empty array with useEffect : only runs once
  return (
    <Row>
      {genresList.map((item) => (
        <CategoryCard key={item.id} {...item} filterType="genre" />
      ))}
    </Row>

  );
};
export default Genres;
