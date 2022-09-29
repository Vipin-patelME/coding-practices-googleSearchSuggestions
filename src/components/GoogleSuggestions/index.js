// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  onUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  selectedSuggestion = value => {
    this.setState({userInput: value})
  }

  filteredSuggestions = suggestionsList => {
    const {userInput} = this.state
    const filteredItems = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )
    return filteredItems
  }

  render() {
    const {userInput} = this.state
    const {suggestionsList} = this.props
    const filterSuggestion = this.filteredSuggestions(suggestionsList)
    return (
      <div className="main-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-input-cont">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="search-input"
              onChange={this.onUserInput}
              placeholder="google search"
              value={userInput}
            />
          </div>
          <ul className="suggestion-list-cont">
            {filterSuggestion.map(eachSuggestions => (
              <SuggestionItem
                eachSuggestions={eachSuggestions}
                key={eachSuggestions.id}
                selectedSuggestion={this.selectedSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
