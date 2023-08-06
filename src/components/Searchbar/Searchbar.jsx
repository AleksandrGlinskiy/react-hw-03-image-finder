import { Component } from 'react';
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value.toLowerCase()});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);

    if (this.state.value.trim() === '') {
      alert('Empty input, please enter search word');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchButton}>
              <span className={css.SearchLabel}>Search</span>
            </button>

            <input
              className={css.SearchInput}
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
    );
  }
}

Searchbar.propTypes ={
  onSubmit:PropTypes.func.isRequired,
}