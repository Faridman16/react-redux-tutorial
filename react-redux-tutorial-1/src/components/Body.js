import React from 'react';
import Articles from './Articles';
import Form from './AddArticleForm';

class Body extends React.Component{
    render(){
        return(
            <div>
                <h3>Articles</h3>
                <Articles />
                <Form />
            </div>
        );
    }
}

export default Body;