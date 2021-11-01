import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Harry', text: 'Expecto Patronum' },
	{ id: 'q2', author: 'Voldermort', text: 'Avada Kedavra' },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
