import React, { useState } from 'react';
import { Text, View, StyleSheet , ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) => {

    const filterResultsByPrice = (price) =>{
        //price : $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        }
        );
    };

    const [term, setTerm] = useState('');
    const [searchAPI, errorMessage, results] = useResults();
    
    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} title = 'Cost effective' navigation={navigation}/>
            <ResultsList results = {filterResultsByPrice('$$')} title = 'Bit pricier' navigation={navigation}/>
            <ResultsList results = {filterResultsByPrice('$$$')} title = 'Bit Spender' navigation={navigation}/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

})

export default SearchScreen;

