import * as React from 'react'

import { Counter } from '@src/components'

interface IProps {}

export class App extends React.Component<IProps, {}> {
  public render () {
    return (
      <>
        <h1>React / Redux / Typescript / Webpack2 - App Starter</h1>
        <p>Hot reload with persisted state!</p>
        <Counter />
      </>
    )
  }
}
