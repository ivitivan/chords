import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import {injectSheet} from '../../decorators/style'
import {styles} from './Search.style'

export class SearchPure extends Component {
  static propTypes = {
    data: PropTypes.array,
    result: PropTypes.func,
  }

  state = {
    search: '',
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const options = {
      keys: ['name'],
    }
    const fuse = new Fuse(this.props.data, options)
    const result = fuse.search(this.state.search)

    return <div>
      <div className={this.props.classes.inputContainer}>
        <input
          className={this.props.classes.input}
          type='text'
          onChange={this.handleChange}
        />
      </div>
      <div className={this.props.classes.result}>
        {this.props.result(result)}
      </div>
    </div>
  }
}

export const Search = injectSheet(styles)(SearchPure)
