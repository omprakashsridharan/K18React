import React,{Component} from 'react'
import axios from 'axios';
import List from './List'
import Detail from './Detail'

class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories:[],
            selectedCategory:'',
            selectedEvent:''
        }

        axios.get('https://cms.kurukshetra.org.in/categories.json')
            .then((res) => {
                this.setState({
                    categories:res.data.categories,
                    selectedCategory:res.data.categories[0],
                    selectedEvent:res.data.categories[0].events[0]
                })
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render(){

        if(!this.state.selectedCategory){
            return (<div>Loading</div>)
        }

        return(
            <div className="row">
                <List 
                    onItemSelected={(selectedItem) => {this.setState({selectedCategory:selectedItem,selectedEvent:selectedItem.events[0]})} }
                    lists={this.state.categories} />
               
                <List 
                    onItemSelected={(selectedItem) => {this.setState({selectedEvent:selectedItem})}} 
                    lists={this.state.selectedCategory.events} />
                
                <Detail detail={this.state.selectedEvent}/>
            </div>
        )
    }
}
export default Events