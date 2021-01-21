import axios from 'axios';

export const fetchData=()=>{
    return(dispatch=>{
        dispatch({type:"FETCH_DATA_START"});
            axios.get("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49 ")//add a url here
                .then((res)=>{
                    // console.log(res.data)
                    dispatch({type:"FETCH_DATA_SUCCESS",payload:res.data})
                })
                .catch((err)=>{
                    dispatch({type:"FETCH_DATA_FAILURE",payload:err})
                })
    })
}