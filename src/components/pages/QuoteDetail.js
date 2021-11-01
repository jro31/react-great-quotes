import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../comments/Comments';

const QuoteDetail = () => {
	const params = useParams();

	return (
		<Fragment>
			<h1>Quote Detail Page</h1>
			<p>{params.quoteId}</p>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				{/* As this is a route (and not a link) path='/quotes/:quoteId/comments' would also be ok */}
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;