import React from 'react';
import {connect} from 'react-redux';
import {ListGroup,ListGroupItem} from 'reactstrap';
import {setComplete} from '../actions/toDoAction';
import '../assets/css/index.css'

const mapStateToProps = (state)=>(
    console.log(state.toDo),
    {
    listTodo:state.toDo
})

class ListToDo extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    handleClick = (e)=>{

    }

    render(){
        return(
            <ListGroup>
           {this.props.listTodo.toDo.map(toDo=>(
                <ListGroupItem key={toDo.id} onClick={this.handleClick}><span className={toDo.status}>{toDo.item}</span></ListGroupItem>
            ))}
            </ListGroup>
        )
    }
}

export default connect(mapStateToProps,{setComplete})(ListToDo);