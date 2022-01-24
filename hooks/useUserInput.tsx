import { useState } from 'react';

export function useUserInput(initialVal: any) {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return {
    value,
    handleChange,
  };
}
