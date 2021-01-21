import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../redux/actions';

const DataRenderer=(props)=> {
    useEffect(() => {
        fetchData();
    }, [])
    
    const handleClick=(e)=>{
        props.fetchData();
    };
    //Add buttons to bring up different movies
    return (
        <div>
            <button onClick={handleClick}>Retrieve some data</button>
            <h1>will be some data</h1>
                {props.isLoading}
                {props.error}
                <p>Title: {props.data.title}</p>
                <p>{props.data.description}</p>
                <p>Rotten tomatoes score: {props.data.rt_score}</p>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps,{ fetchData })(DataRenderer);