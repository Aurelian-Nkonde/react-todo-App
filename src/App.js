import React, {Component} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Content from "./components/Content"
import "./index.css"

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            developers: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteDeveloper = this.deleteDeveloper.bind(this)
    }

    handleSubmit = (developer) => {
        this.setState({developers: 
        [...this.state.developers, developer]})
    }
    

    deleteDeveloper = (ids) => {
        const {developers} = this.state
        this.setState({
            developers: developers.filter((developer, i) => {
                return i !== ids
            })
        })
    }

    render(){
        const {developers} = this.state
        const logo = "Devs_crud"

        return(
            <div>
                <Header logo={logo}/>
                <div className="container mx-auto">
                    <Form handleSubmit={this.handleSubmit}/> 
                    <Content developers={developers} deleteDeveloper={this.deleteDeveloper}/>
                </div>
            </div>
        )
    }
}

export default App