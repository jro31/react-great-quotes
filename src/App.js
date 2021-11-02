import React, { Suspense } from 'react';
// The 'Suspense' component needs to be wrapped around the code where we use 'React.lazy'
// It requires the 'fallback' prop, which defines what should be shown while the lazy-loaded component is being fetched
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
// We use 'React.lazy' to load some code, only when or if it is needed
// (this 'NewQuote' variable will only be set when '<NewQuote />' is called below. If it is not called, then 'NewQuote' will never be set)
// With a regular import statement, the component will be loaded whether it's needed or not, so will slow-down the initial loading of your application
// Note that THIS WILL NOT WORK without also using the 'Suspense' component, because it will take 'some' time to fetch this lazy-loaded component from the server
// As such, the browser needs to know what to display in the mean time
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

// '<Route path='*'>' MUST come last, as it will be executed if the entered URL doesn't match any of the previous <Route> paths

export default App;
