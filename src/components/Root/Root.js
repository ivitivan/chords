import React, {Component} from 'react'
import {Chord} from '../Chord'
import chords from '../../data/chords.json'
import R from 'ramda'
import {Search} from '../Search'

export class Root extends Component {
  render() {
    return <div>
      <Search
        data={chords}
        result={(result) => R.map((i) => <Chord {...i}/>, result)}
      />
    </div>
  }
}
