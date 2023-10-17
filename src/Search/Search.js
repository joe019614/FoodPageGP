import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";
import { useSearchParams } from "react-router-dom";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";
import { useNavigate } from "react-router-dom";
import MuiNavbar from "../MuiNavbar";
import Footer from "../Footer";

export default function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const term = searchParams.get("find_desc");
  const locationParam = searchParams.get("find_loc");
  const [businesses, amountResults, apiSearchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    navigate(
      `/MainPage/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
    );
    performSearch({ term, location });
  }

  return (
    <>
      <MuiNavbar />
      <div style={{ marginTop: "110px" }}>
        <NavBar term={term} location={locationParam} search={search} />

        <SearchResults businesses={businesses} />
      </div>
      <Footer />
    </>
  );
}
