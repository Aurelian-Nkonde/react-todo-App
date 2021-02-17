import React, {Component} from "react"


class Form extends Component{
    initialState = {
        name: "",
        email: ""
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {name, email} = this.state

        return(
            <div className="p-10">
                <form className="mx-auto max-w-2xl">
                    <input 
                        name="name"
                        id="name"
                        type="text" 
                        value={name} 
                        onChange={this.handleChange}
                        placeholder="type name.."
                        className="w-full p-4 mb-3 mx-auto shadow-lg appearance-none focus:bg-gray-100 focus:outline-none bg-gray-200 focus:border-gray-500"
                    />
                    <input 
                        name="email"
                        id="email"
                        type="email" 
                        value={email} 
                        onChange={this.handleChange}
                        placeholder="type email.."
                        className="w-full p-4 mx-auto shadow-lg appearance-none focus:bg-gray-100 focus:outline-none bg-gray-200 focus:border-gray-500"
                    />
                    <input type="button" value="submit" onClick={this.submitForm} className="bg-red-400 py-1 px-3 text-gray-100 mt-5 hover:bg-red-300"/>
                </form>
        </div>
        )
    }

}

export default Form