import { useEffect } from 'react';
import { useHistory } from 'react-router';
// 'useHistory' is named as such because it allows us to edit the browser history (the history of pages that we've visited')

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory(); // Returns a history object

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    } // Could also add a check for an error here, but in the name of simplicity, not added
  }, [status, history]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
