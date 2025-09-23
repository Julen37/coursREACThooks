import React, { Component } from 'react'

class ClassCount extends Component {

    componentDidMount() { //creation 
        // console.log('Je suis un CDM');
        document.title = `Vous avez cliqué ${this.state.count} fois` // titre sur l'onglet
    }

    componentDidUpdate(prevProps, prevState) { // va s'activer seulement si il y a un changement / update
      // console.log('Je suis un CDU')
      if(this.state.count !== prevState.count) { // sert a ce que ca ne se repete pas des qu'on ajoute une lettre dans l'input alors qu'on incremente pas le count
        console.log('mise a jour du titre')
        document.title = `Vous avez cliqué ${this.state.count} fois`
      }
    }

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count : this.state.count + 1})}>clik</button>
        <br />
        <input type="text" value={this.state.name} onChange={e => {this.setState({
          name: e.target.value
        })}} 
        />
      </div>
    )
  }
}

export default ClassCount
