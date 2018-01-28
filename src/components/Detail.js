import React from 'react'

const Detail = (props) => {

    if(!props.detail){
        return (<div>Loading</div>)
    }
    return(
        <div className="col l4 card">
            {props.detail.id}
            <br />
            {props.detail.name}
        </div>
    )
}

export default Detail; 