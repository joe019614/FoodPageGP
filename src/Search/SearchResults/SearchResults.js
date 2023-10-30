import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import styles from "./SearchResults.module.css"
import Spinner from '../../Spinner/Spinner.js';

export default function SearchResults(props) {
  console.log(props.businesses);
    let searchResults = <Spinner/>;
    /* if (!Array.isArray(props.businesses) || props.businesses.length === 0) {
    return <div>No search results found.</div>;
  } */
    if(props.businesses && props.businesses.length){
         searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    }
    
  return (
    <div className={styles["search-results"]}>
      {searchResults}
    </div>
  );
  
}
