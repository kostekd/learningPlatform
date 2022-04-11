import React, {useState} from "react";

const useInput = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid : Boolean = enteredValue.trim() === "" && isTouched;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setEnteredValue(value);
      };

      const onBlurHandler = () => {
        setIsTouched(true);
      };

      const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
      };

      return{
          value: enteredValue,
          isValid: isValid,
          onChangeHandler,
          onBlurHandler,
          reset
      };
}

export default useInput;