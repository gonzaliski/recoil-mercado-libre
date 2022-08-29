import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { itemResultState, itemQueryState, queryState, resultsState } from "./atoms";
// mi custom hook
export function useSearchResults() {
    const params = useParams();
    const setQueryState = useSetRecoilState(queryState)
    console.log(params);
    
    // escucho cambios en los params con useEffect
    useEffect(() => {
        console.log("el router me dice que query cambió");
        // ### TU CÓDIGO
        // guardar el valor de la query en el átomo: queryState
        setQueryState(params.query)
    }, [params]);
    
    // finalmente me engancho a los cambios de resultState
    const results = useRecoilValue(resultsState);
    return results;
  }
export function useItemResult() {
    const params = useParams();
    const setItemQuery = useSetRecoilState(itemQueryState)
    console.log(params);
    
    // escucho cambios en los params con useEffect
    useEffect(() => {
        console.log("el router me dice que query cambió");
        // ### TU CÓDIGO
        // guardar el valor de la query en el átomo: queryState
        setItemQuery(params.id)
    }, [params]);
    
    // finalmente me engancho a los cambios de resultState
    const result = useRecoilValue(itemResultState);
    return result;
  }
