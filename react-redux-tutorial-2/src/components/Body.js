import React from 'react';

class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            hits:null,
        }
    }

    
    onSearch = (e)=>{
        e.preventDefault();
        
        if(this.input.value===''){return}
        
        const chacedLocal = localStorage.getItem(this.input.value);
        if(chacedLocal){
            this.setState({hits:JSON.parse(chacedLocal)})
            return;
        }

        fetch('https://hn.algolia.com/api/v1/search?query='+ this.input.value)
        .then(res=>(res.json()))
        .then(data=>{
            localStorage.setItem(this.input.value, JSON.stringify(data.hits));
            this.setState({hits:data.hits});
        }
        )
    }

    render(){
        return(
            <div>
                <h1>Search Hacker News with Local Storage</h1>
                <p>
                There shouldn't be a second network request,
                when you search for something twice.
                </p>
        
                <form onSubmit={this.onSearch}>
                    <input type="text" ref={node => this.input = node} />
                    <button type="submit">Search</button>
                </form>

                {
                    this.state.hits &&
                    this.state.hits.map(item => <div key={item.objectID}>{item.title}</div>)
                }
          </div>
        );
    }
}

export default Body;