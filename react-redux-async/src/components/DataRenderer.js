import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../redux/actions';

const DataRenderer=(props)=> {
    
    const handleClick=(e)=>{
        // console.log("from handleClick component")
        props.fetchData();
        console.log(props)
    };
    return (
        <div>
            <button onClick={handleClick}>Retrieve some data</button>
            <h1>will be some data</h1>
                {props.data}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps,{ fetchData })(DataRenderer);