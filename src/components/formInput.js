import {useState} from 'react';

function formInput(initialValue) {
  // Declare a new state variable, which we'll call "count"
  const [value,
    setValue] = useState(initialValue);

  const handleChange = (e) => setValue(e.target.value);

  return {value, onChange: handleChange};
}

export default formInput;
