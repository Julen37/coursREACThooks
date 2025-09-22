import React, { Component } from 'react'

class ClassCount extends Component {

    componentDidMount() { //creation 
        // console.log('Je suis un CDM');
        document.title = `Vous avez cliqué ${this.state.count} fois` // titre sur l'onglet
    }

    componentDidUpdate(prevProps, prevState) { // va s'activer seulement si il y a un changement / update
        document.title = `Vous avez cliqué ${this.state.count} fois`
    }

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count : this.state.count + 1})}>clik</button>
      </div>
    )
  }
}

export default ClassCount
