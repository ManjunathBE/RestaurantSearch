import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            }
            );
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrog, please try again");
        }

    }

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, errorMessage, results];
};

