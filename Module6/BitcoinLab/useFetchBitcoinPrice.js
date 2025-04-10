import { useReducer, useEffect } from 'react';

// Reducer function to manage loading, error, and price states
const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, price: action.payload, error: null };
        case 'FETCH_ERROR':
            return { ...state, loading: false, price: null, error: action.payload };
        default:
            return state;
    }
};

// Custom hook for fetching Bitcoin price
const useFetchBitcoinPrice = (currency) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        loading: false,
        price: null,
        error: null,
    });

    useEffect(() => {
        let isMounted = true; // To handle cleanup and avoid setting state on unmounted components

        const fetchBitcoinPrice = async () => {
            dispatch({ type: 'FETCH_START' });
            try {
                const response = await fetch(
                    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Bitcoin price');
                }
                const data = await response.json();
                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency.toLowerCase()] });
                }
            } catch (err) {
                if (isMounted) {
                    dispatch({ type: 'FETCH_ERROR', payload: err.message });
                }
            }
        };

        fetchBitcoinPrice();

        // Cleanup function
        return () => {
            isMounted = false;
        };
    }, [currency]); // Dependency array ensures the effect runs when `currency` changes

    return state;
};

export default useFetchBitcoinPrice;