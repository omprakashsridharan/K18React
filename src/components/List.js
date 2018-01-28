import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    if(!props.lists){
        return <div>Loading</div>
    }
    const Data = props.lists.map((item) => {
        return  <ListItem onItemSelected={(selectedItem) => {props.onItemSelected(selectedItem)}} item={item} />
    })
    return (
        <div className="col l4 s12">
            {Data}
        </div>
    )
}
export default List;