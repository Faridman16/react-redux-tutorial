import React from 'react';
import {connect} from 'react-redux'
import {addArticle} from '../actions/articleAction'

const mapDispatchToProps = (dispatch)=>{
    return {
        addArticle:(id,article)=>{
            dispatch(addArticle(id,article))
        }
    }
}

class AddArticleForm extends React.Component {
    constructor(){
        super();
        this.state = {
            id:'',
            title: '',
        }
    }

    handleChange = (el,event)=>{
        console.log(el);
        if(el==='id')this.setState({id:event.target.value});
        if(el==='title')this.setState({title:event.target.value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        var title = this.state.title;
        var id = this.state.id;
        console.log(id+' = '+ title);
        this.props.addArticle(id,title);
        this.setState({id:'', title:''});
    }

    render(){
        return(
            <form>
                <label>Title</label>
                <input type="text" name="id" value={this.state.id} onChange={(e)=>{this.handleChange('id',e)}} autoComplete='off'/>
                <input type="text" name="title" value={this.state.title} onChange={(e)=>{this.handleChange('title',e)}} autoComplete='off'/>
                <button onClick={this.handleSubmit} >Save</button>
            </form>
        )
    }
}

const Form = connect(null,mapDispatchToProps)(AddArticleForm);

export default Form;