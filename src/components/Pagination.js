import PropTypes from 'prop-types';
// import { LinkContainer } from 'react-router-bootstrap';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              style={{ cursor: 'pointer' }}
              onClick={() => paginate(number)}
              className="page-link"
            >{number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,

};
export default Pagination;
