import { useEffect } from 'react';

const useFetchData = (url, dispatch, actionCreator) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();
        dispatch(actionCreator(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url, dispatch, actionCreator]);
};

export default useFetchData;
