import React, { Component } from 'react'

export default class Watch extends Component {
    constructor(){
        super();
        this.state = {}
      }

    componentWillMount(){
        setInterval(()=>{
          const time = new Date();
          const H = time.getHours();
          const M = time.getMinutes();
          const S = time.getSeconds();
          const now = H + ' : '+ M+ ' ,'+ S
          this.setState({time:now})
        },1000)
    }

    render() {
        return (
            <h1>{this.state.time}</h1>
        )
    }
}
