#!/bin/bash
components_directory=./src/components
mkdir -p $components_directory/$1
echo "import * from './$1'" > $components_directory/$1/index.js
echo "import React, {Component} from 'react'

export class $1 extends Component {
  render() {
    return <div>
    </div>
  }
}" > $components_directory/$1/$1.js
