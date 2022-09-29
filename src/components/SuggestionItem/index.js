// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestions, selectedSuggestion} = props
  const {suggestion, id} = eachSuggestions

  const onSelected = () => {
    selectedSuggestion(id)
  }

  return (
    <li className="filtered-item-list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="search-logo"
        onClick={onSelected}
      />
    </li>
  )
}
export default SuggestionItem
