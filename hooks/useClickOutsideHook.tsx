import { useEffect } from 'react';
import { ClickOutside } from 'alltypes/ClickOutsideTypes';

const useClickOutsideHook = ({ ref, callback }: ClickOutside) => {
  const handleClick = (ev: any) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutsideHook;
