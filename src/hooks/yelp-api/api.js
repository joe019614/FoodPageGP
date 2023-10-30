import { API_BASE_URL,BEARER_TOKEN } from "./config";
import queryString from "query-string";

/* https://api.yelp.com/v3 */
/* https://api.yelp.com/v3/businesses/search?location=HONG KONG&term=ramen&sort_by=review_count */

export  function get(path,queryParams){

    const query = queryString.stringify(queryParams); 
    return fetch(`${API_BASE_URL}${path}?${query}`,{
        headers:{
            Authorization:`Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,  
                
            
            
        },
    })

}
// ${path}=/businesses/search 
// ${query}=apiSearchParams 