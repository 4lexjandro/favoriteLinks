import React, {Component} from 'react';



class Form extends Component
{

    constructor(props)
    {
        super(props);
        /* set initial state for Name and URL  */
        /* Look into video consisting of mood buttons */
       this.state = {name:'', URL: ''}


    }

    handleChange = event => {

            //TODO - Logic for changing state based on form changes

            if (event.target.id === "Name")
            {
                this.setState({name: event.target.value});
            }
            else
            {
            this.setState({URL: event.target.value});
            }

    }

    onFormSubmit = (event) =>
    {
        // to prevent page reload on form submit
        event.preventDefault();

        /* Logic for calling props to handle submission and setting state changes */
     const TheNewLink = {URL:this.state.URL,name:this.state.name};
      this.props.addTheNewLink(TheNewLink);
     }

    render()
     {
        return(
            <form>
                {//Logic for returning a form element with labels and inputs for link name and URL
                }
                <label for="Name">Name</label>
                <input type="text" id="Name" value={this.state.name} onChange={(event) =>this.handleChange(event)}/>
                <label for="url">URL</label>
                <input type="text" id="url" value={this.state.URL} onChange={(event) =>this.handleChange(event)}/>
                <button type="submit" onClick={this.onFormSubmit}>Submit</button>
            </form>
        )

    }
}

export default Form;
