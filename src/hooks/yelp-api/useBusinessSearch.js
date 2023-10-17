import { useState, useEffect} from "react"
import * as api from './api'


export  function useBusinessSearch(term,location) {
    const [businesses,setBusinesses] = useState([]); /* 數據list */
    const [amountResults,setAmountResults] = useState(); /* 數據量 */
    const [apiSearchParams,setapiSearchParams] = useState({term, location});

    useEffect(()=>{ 
        setBusinesses([]);
        const fetchData = async  ()=>{
            try{
                const rawData = await api.get('/businesses/search'/* ${path} */, apiSearchParams/* ${query} */);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch(e){
                console.error(e);
                }
            };  

            fetchData();    
  
    },[apiSearchParams]);/* ? */
    return [businesses,amountResults,apiSearchParams,setapiSearchParams];
}
