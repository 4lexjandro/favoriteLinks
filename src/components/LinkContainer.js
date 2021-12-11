import React from 'react'
import Table from './Table';
import Form from './Form';


class LinkContainer extends React.Component
{
  constructor(props)
  {
    super(props)
    /* state object for storing favLinks */
    this.state =
    {Links:[]}
  }

  handleRemove = (index) =>
  {
    const AddedLink = this.state.Links.filter((handle, Remove) => Remove !== index);
    this.setState
    (
      {Links: AddedLink}
    )
  }

  handleSubmit = (favLink) =>
  {
    this.setState
    ({Links:[...this.state.Links, favLink]})
  }

  render()
  {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData = {this.state.Links} RemoveTheLink = {this.handleRemove} />
        <h3>Add New</h3>
        <Form addTheNewLink = {this.handleSubmit} />
      </div>
    )
  }
}

export default LinkContainer
