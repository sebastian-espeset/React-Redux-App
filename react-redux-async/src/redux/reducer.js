


const initialState={
    data:"",
    isLoading:"",
    error:""
};

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case("FETCH_DATA_START"):
            return({
                ...state,
                isLoading:"Loading the data..."
            });
        case("FETCH_DATA_SUCCESS"):
            console.log(state.data.title)
            return({
                data:action.payload,
                isLoading:""
            })
        case("FETCH_DATA_FAILURE"):
            return ({
                ...state,
                isLoading:"",
                error:"oops ya broke me"
            })
        default:
            return state;
    }
}
