import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const DetailedMoviePage = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('../components/Movie/MovieCast'));
const MovieReview = lazy(() => import('../components/Movie/MovieReview'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<HomePage />} />
        <Route path to="movies" element={<MoviePage />} />
        <Route path to="movies/:id" element={<DetailedMoviePage />}>
          <Route path to="cast" element={<MovieCast />} />
          <Route path to="reviews" element={<MovieReview />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
