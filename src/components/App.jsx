import { Component } from "react"
import { getImages } from "services/api";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    searchText: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchText !== this.state.searchText) {
      getImages()
      .then(res => res.json())
      .then((data)=> console.log(data));
    }
  }

  handleSearchbar =(searchText) => {
    this.setState({searchText})
  }

  render() {
    return (
      <>
        <Searchbar handleSearchbar={this.handleSearchbar}/>
      </>
    );
  }
  
  
};
