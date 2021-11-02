import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          {/* By updating 'QuoteDetail.js' to use the 'useRouteMatch()' hook, we can change this path to something else, for example 'path='/quote/:quoteId'', without having to also make changes to the <Route> components in 'QuoteDetail.js' */}
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

// '<Route path='*'>' MUST come last, as it will be executed if the entered URL doesn't match any of the previous <Route> paths

export default App;
