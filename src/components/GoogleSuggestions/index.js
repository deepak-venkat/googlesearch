import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    const {suggestionsList} = props
    this.state = {inputVal: '', suggestionsList}
  }

  onChangeVal = event => {
    const inputVal = event.target.value
    const {suggestionsList} = this.state
    const filteredList = suggestionsList.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(inputVal.toLowerCase()),
    )
    this.setState({inputVal, suggestionsList: filteredList})
  }

  onClickArrow = uniqueId => {
    const {suggestionsList} = this.state
    const clickedItem = suggestionsList.find(eachObj => eachObj.id === uniqueId)
    this.setState({inputVal: clickedItem.suggestion})
  }

  render() {
    const {inputVal, suggestionsList} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="logo"
          alt="google logo"
        />
        <div className="search-card">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              value={inputVal}
              onChange={this.onChangeVal}
            />
          </div>
          <ul className="suggestions-list">
            {suggestionsList.map(eachObj => (
              <SuggestionItem
                eachObj={eachObj}
                key={eachObj.id}
                onClickArrow={this.onClickArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
