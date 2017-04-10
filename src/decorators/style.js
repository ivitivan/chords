import {create as createJss} from 'jss'
import {create as createInjectSheet} from 'react-jss'
import JSSNested from 'jss-nested'
import JSSCamelCase from 'jss-camel-case'

const jss = createJss()

jss.use(JSSNested())
jss.use(JSSCamelCase())

export const injectSheet = createInjectSheet(jss)
