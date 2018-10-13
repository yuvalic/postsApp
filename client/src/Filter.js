import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Filter extends Component {

  static defaultProps = {
    onChange: () => {},
  }

  static propTypes = {
    onChange: PropTypes.func
  }

  _onFilterChange = () => {
    this.props.onChange(this.filter.value)
  }

  render() {
    return <div className="search-wrapper">
      <i className="fa fa-search"/>
      <input placeholder="Filter" ref={filter => this.filter = filter} onChange={this._onFilterChange} type="search"/>
    </div>
  }
}