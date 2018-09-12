import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    console.log(state.article);
    return {article:state.article}
};

const ConnectedList = ({ article })=>(
    <ul className="list-group list-group-flush">
    {article.map((el) => (
      <li key={el.id}>
        {el.article}
      </li>
    ))}
  </ul>
);

const Articles = connect(mapStateToProps)(ConnectedList);

export default Articles;