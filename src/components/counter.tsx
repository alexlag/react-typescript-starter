import * as React from 'react'

interface IProps {
}

interface IState {
  count: number
}

export class Counter extends React.Component<IProps, IState> {
  public state: IState = {
    count: 0
  }

  private interval: any

  public componentDidMount () {
    this.interval = setInterval(this.incrementCounter, 1000)
  }

  public componentWillUnmount () {
    clearInterval(this.interval)
  }

  public render () {
    return (
      <>Counter: {this.state.count}</>
    )
  }

  private incrementCounter = () => {
    this.setState({ count: this.state.count + 1 })
  }
}

export default Counter
