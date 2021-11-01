import { useRef, useState, Fragment } from 'react';
import { Prompt } from 'react-router-dom';
// 'Prompt' will watch if we navigate away
// Then, if a certain condition is met, it will show a warning before it allows us to leave

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false); // We can't set this within 'submitFormHandler' because the state would be updated too late
    // We would trigger the navigation action before the 'isEntering' state got updated
    // However, the 'onClick' on the button gets triggered before we handle the form submission
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={location => `Do you want to redirect to ${location.pathname}`}
      />
      {/* 'Prompt' requires two props */}
      {/* 'when' should be true/false, defining if the warning should be shown when the user changes the URL or not */}
      {/* 'message' should be a function that returns a string, of the text that we show to the user when they try to leave */}
      {/* It is a function, because we get the 'location' object as a parameter, which holds some information about the page the user is trying to go to (although we're not using the location here) */}
      {/* It wasn't too easy to figure-out the content of 'location', but the 'location' object keys are 'pathname', 'search' , 'hash', 'state' and 'key' */}
      {/* The only one that looked useful to me was 'pathname'. This could be used as something like 'message={location => `Do you want to redirect to the ${location.pathname} page?`}' */}
      <Card>
        <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
