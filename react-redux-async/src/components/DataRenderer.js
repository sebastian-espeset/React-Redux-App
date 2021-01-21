import React from 'react';
import {connect} from 'react-redux';

const DataRenderer=(props)=> {

    return (
        <div>
            <button>Retrieve some data</button>
            <h1>will be some data</h1>
            <p>{props.test}</p>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps,{})(DataRenderer);