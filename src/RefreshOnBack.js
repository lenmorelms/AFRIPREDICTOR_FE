import { useEffect } from 'react';

const RefreshOnBack = () => {
  useEffect(() => {
    const handleBackButton = () => {
      // Load the address in the address bar
      window.history.pushState(null, null, window.location.href);
    };

    window.onpopstate = handleBackButton;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  return null;
};

export default RefreshOnBack;