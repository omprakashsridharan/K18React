import React,{Component} from 'react'
import axios from 'axios';
import List from './List'
import Detail from './Detail'

    class Workshops extends Component{
    constructor(props){
        super(props);
        this.state={ categories: [],
            selectedCategory:'',
            selectedWorkshop:''
        }

        axios.get('https://cms.kurukshetra.org.in/workshops.json')
            .then((res) => {
                this.setState({
                    categories:res.data.workshops,
                    selectedCategory:res.data.workshops[0],
                    selectedWorkshop:res.data.workshops[0].workshops[0]
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
                    onItemSelected={(selectedItem) => {this.setState({selectedCategory:selectedItem, selectedWorkshop:selectedItem.workshops[0]})} }
                    lists={this.state.categories}/>
                
                <List 
                    onItemSelected={(selectedItem) => {this.setState({selectedWorkshop:selectedItem})} }
                    lists={this.state.selectedCategory.workshops} />
                
                <Detail detail={this.state.selectedWorkshop} /> 
            </div>
        )
    }
}
export default Workshops