import { Component } from "react"
class ExClassComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
        };
        this.myFunction=this.myFunction.bind(this);
    }
    

    myFunction(e){
        this.setState({ counter : this.state.counter + 1})
    }

    render(){
        return(
            <div className="container">
                    <h1>Hello this Class Component</h1>

                    <h2>Counter : {this.state.counter}</h2>

                    <button className="btn btn-primary" onClick={this.myFunction}>Click Here</button>
            </div>
        )
    }
}


export default ExClassComponent;