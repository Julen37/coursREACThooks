import { Component } from "react";

class ClassState extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    //version de base sans prendre en compte des state precedent
    // addOne = () => {
    //     this.setState(
    //         {counter: this.state.counter + 1}
    //     )
    // }

    // version en prenant en compte le state precedent
    addOne = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
            }
        )
    }

    render() {
        return (
            <div>
                <p>Class State : {this.state.counter}</p>
                <button onClick={this.addOne}>clik sans hooks dans class</button>
            </div>
        )
    }
}

export default ClassState
