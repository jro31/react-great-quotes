import { useHistory } from 'react-router';
// 'useHistory' is named as such because it allows us to edit the browser history (the history of pages that we've visited')

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
	const history = useHistory(); // Returns a history object

	const addQuoteHandler = quoteData => {
		console.log(quoteData);

		history.push('/quotes');
		// 'history.push' pushes a new page onto our stack of pages, so essentially adds a new page to our history
		// 'history.replace' replaces the current page, much like a redirect
		// The difference is that with 'push' we can go 'back' (with the back button) to the current page. With 'replace', we can't.
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
