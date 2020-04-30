import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Layout from './containers/layout/Layout';
import MovieReviews from './containers/movieReviews/MovieReviews';
import './app.scss';
import URL_CONSTANTS from './url.constants';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={URL_CONSTANTS.DEFAULT}>
        <Redirect to={URL_CONSTANTS.MOVIE_REVIEWS} />
      </Route>
      <Route
        path={URL_CONSTANTS.MOVIE_REVIEWS}
        render={() => (
          <Layout>
            <MovieReviews />
          </Layout>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
