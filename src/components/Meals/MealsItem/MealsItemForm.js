import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealsItemForm.module.css';

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const ammountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = ammountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form action="submit" className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={ammountInputRef}
        label="Amount"
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealsItemForm;
