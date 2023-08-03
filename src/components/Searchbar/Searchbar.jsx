import { Component } from "react";



export class Searchbar extends Component {
  state = {
    value: '',
  }

  handleChange =({target}) => {
    this.setState({value : target.value})

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearchbar(this.state.value)

    
  }

  render() {
    return (
      <>
      <header className="searchbar">
      <form className="form" onSubmit={this.handleSubmit}>
      <button type="submit" className="button">
      <span className="button-label">Search</span>
      </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.value}
    />
  </form>
</header>
</>
    )
  }
}