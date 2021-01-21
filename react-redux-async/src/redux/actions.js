import axios from 'axios';

export const fetchData=()=>{
    return(dispatch=>{
        dispatch({type:"FETCH_DATA_START"});
        console.log("from the action")
            axios.get("https://api.kanye.rest")//add a url here
                .then((res)=>{
                    console.log(res.data.quote)
                    dispatch({type:"FETCH_DATA_SUCCESS",payload:res.data.quote})
                })
                .catch((err)=>{
                    dispatch({type:"FETCH_DATA_FAILURE",payload:err})
                })
    })
}