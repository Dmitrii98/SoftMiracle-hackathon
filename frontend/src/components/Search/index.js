import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import styles from './styles';

const Search = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <SearchBar
      placeholder='Type Here...'
      onChangeText={updateSearch}
      value={search}
      inputContainerStyle={styles.search}
    />
  );
};

export default Search;

