import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount () {
    console.log(1111, process.env.TARO_ENV)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  onPageNotFound() {
    console.log("ininin")
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
