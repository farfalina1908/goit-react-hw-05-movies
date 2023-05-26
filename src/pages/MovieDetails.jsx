import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import {
  DetailsContainer,
  BackButton,
  LinkContainer,
  LinkItemCast,
  LinkItemReview,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [id]);

  return (
    <DetailsContainer>
      <BackButton to={goBack}>Go back</BackButton>
      {movie && <MovieCard movie={movie} />}
      <LinkContainer>
        <LinkItemCast to={`/movies/${id}/cast`} state={{ from: location }}>
          Cast
        </LinkItemCast>
        <LinkItemReview to={`/movies/${id}/reviews`} state={{ from: location }}>
          Reviews
        </LinkItemReview>
      </LinkContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DetailsContainer>
  );
};

export default MovieDetails;
