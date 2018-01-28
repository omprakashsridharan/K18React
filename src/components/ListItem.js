import React from 'react'

const ListItem = (props) => {
    return(
        <div className="card" onClick={() => {props.onItemSelected(props.item)}}>
            {props.item.name}
        </div>
    );
}
export default ListItem;