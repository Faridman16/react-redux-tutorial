import React from 'react';
import {connect} from 'react-redux';
import {Form,FormGroup, Label,Input,Button} from 'reactstrap';
import {addToDo} from '../actions/toDoAction';

class AddToDo extends React.Component{
    constructor(){
        super()
        this.state = {
            toDo:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const objToDo = {
            id:'',
            item:this.state.toDo,
            complete:'',
        }
        this.setState({toDo:''})
        this.props.addToDo(objToDo);
    }

    render(){
        return(
            <Form inline className='d-flex justify-content-center mb-4' onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="toDo" id="toDo" placeholder="Add To Do!!" onChange={this.handleChange} value={this.state.toDo}/>
                </FormGroup>
                <Button color='primary'>Add</Button>
            </Form>      
        )
    }
}

export default connect(null,{addToDo})(AddToDo);






