// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  userInput = event => {
    this.setState({userInput: event.target.value})
  }

  selectedSuggestion = id => {
    const suggestions = this.props
    const selectedSuggestion = suggestions.filter(
      everySuggestion => everySuggestion.id === id,
    )
    console.log(selectedSuggestion)
  }

  filteredSuggestions = suggestionsList => {
    const {userInput} = this.state
    const filteredItems = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.includes(userInput),
    )
    return filteredItems
  }

  render() {
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
              alt="search logo"
              className="search-logo"
            />
            <input
              type="search"
              className="search-input"
              onChange={this.userInput}
              placeholder="gooogle search"
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
