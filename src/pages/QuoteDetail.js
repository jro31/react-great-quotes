import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
// 'useRouteMatch()' is similar to 'useLocation', but contains internally managed data about the currently loaded route

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Harry', text: 'Expecto Patronum' },
  { id: 'q2', author: 'Voldermort', text: 'Avada Kedavra' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  // For the URL 'my-domain.com/quotes/q2/comments', 'console.log(match)' returns '{path: '/quotes/:quoteId', url: '/quotes/q2', isExact: false, params: { quoteId: "q2" }}'

  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* The path here is '/quotes/:quoteId/comments' */}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
