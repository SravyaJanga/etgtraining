import React, {Component} from 'react'
class StateExample extends Component{
    constructor(){
        super()
        this.state={ message:'Welcome Visitor'}
        this.chageMessage = this.changeMessage.bind(this);
    }
    changeMessage(){
        this.setState({ message:'Thank you for Subscribe' })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h2>Welcome to sonata</h2>
                <button onClick={this.chageMessage}>Change</button>
            </div>
        )
    }
}
export default StateExample