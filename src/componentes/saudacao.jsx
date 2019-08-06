import React, { Component } from 'react'


export default class saudacao extends Component{
 state = {
     tipo : this.props.tipos,
     nome: this.props.nome
 }
 setTipo(e){
     this.setState({tipo: e.target.value})
 }
 setNome(e){
     this.setState({ nome: e.target.value})
 }
        
    
render(){
    const {tipo, nome } = this.state
    return (
        <div>
            <h1>{ tipo}{ nome }</h1>
            <hr />
            <input type = "text" placeholder = "tipo..." value = {tipo}
            onchange={e => this.setTipo(e)}/>
            <input type = "text" placeholder = "nome..." value = {tipo}
            onchange={e => this.setNome(e)}/>
          </div>
    )
}
}