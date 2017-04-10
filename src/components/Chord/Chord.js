import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {injectSheet} from '../../decorators/style'
import classNames from 'classnames'
import R from 'ramda'
import {styles} from './Chord.style'

export class ChordPure extends Component {
  static propTypes = {
    name: PropTypes.string,
    shape: PropTypes.array,
    barre: PropTypes.array,
    classes: PropTypes.object,
  }

  static defaultProps = {
    shape: [],
    fingers: [],
    barre: [],
    barreFingers: [],
  }

  render() {
    const shape = R.compose(
      R.map(i => {
        if (i === 'x') {
          return i
        } else if (this.props.base > 1) {
          return R.add(R.negate(this.props.base - 1), i)
        }

        return i
      }),
     R.reverse
    )(this.props.shape)
    const fingers = R.reverse(this.props.fingers)
    const barre = R.reverse(this.props.barre)
    const barreFingers = R.reverse(this.props.barreFingers)

    return <div>
      <div className={this.props.classes.name}>
        <h3>{this.props.name}</h3>
      </div>
      <div className={this.props.classes.shape}>
        {
          R.map(
            (row) => <div
              key={row}
              className={classNames({
                [this.props.classes.row]: true,
              })}
            >
              {
                row === 1 ? <div className={this.props.classes.base}>{this.props.base}</div> : null
              }
              {
                R.map(
                  (col) => <div
                    key={col}
                    className={classNames({
                      [this.props.classes.col]: true,
                      [this.props.classes.colFirstRow]: row === 0,
                      [this.props.classes.firstFret]: (this.props.base === undefined || this.props.base === 1) && row === 0,
                      [this.props.classes.colFirst]: col === 0,
                    })}
                  >
                  {
                    (shape[col] === row || barre[col] === row) ?
                      <span
                        className={classNames({
                          [this.props.classes.caption]: true,
                          [this.props.classes.captionFirstRow]: row === 0,
                          [this.props.classes.captionBarre]: barre[col] === row,
                          [this.props.classes.captionBarreFirst]: barre[col] === row && R.isNil(barre[col - 1]),
                          [this.props.classes.captionBarreLast]: barre[col] === row && R.isNil(barre[col + 1]),
                        })}
                      >
                        {
                          row === 0 ? null : (barre[col] === row ? barreFingers[col] : fingers[col])
                        }
                      </span> : null
                  }

                  {
                    row === 0 && shape[col] === 'x' ?
                      <span className={this.props.classes.x}><span className={this.props.classes.xFallback}>x</span></span> :
                      null
                  }
                  </div>
                )(R.range(0, 6))
              }
            </div>
          )(R.range(0, 6))
        }
      </div>
    </div>
  }
}

export const Chord = injectSheet(styles)(ChordPure)
