


const initialState={
    data:"",
    error:""
};

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case("FETCH_DATA_START"):
        // console.log("from the reducer")
            return state;
        case("FETCH_DATA_SUCCESS"):
            return({
                data:action.payload
            })
        case("FETCH_DATA_FAILURE"):
            return ({
                ...state,
                error:action.payload
            })
        default:
            return state;
    }
}
