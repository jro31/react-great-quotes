import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// 'useLocation' gives us a location object which has information about the currently loaded url

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  const history = useHistory();
  const location = useLocation();
  // 'console.log(location)' returns, for example '{pathname: '/quotes', search: '?sort=asc', hash: '', state: undefined, key: 'q2vwer'}'

  const queryParams = new URLSearchParams(location.search); // 'URLSearchParams' is a default javascript function that we can use in the browser (it's not React specific)

  const isSortingAscending = queryParams.get('sort') === 'asc';
  // 'queryParams.get('sort')' will return the value assigned to 'sort' in the URL
  // So if the URL is 'my-domain.com/quotes?sort=asc', then 'queryParams.get('sort')' will return 'asc'

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    // 'console.log(location.pathname)' returns '/quotes
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
