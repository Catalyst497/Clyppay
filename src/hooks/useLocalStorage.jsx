import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Retrieve the stored value from localStorage or use the initial value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Initialize state with the retrieved value
  const [value, setValue] = useState(initial);

  // Update localStorage when the state changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Remove the item from localStorage and reset the state
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, updateValue, removeValue];
};

export default useLocalStorage;
