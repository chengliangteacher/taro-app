import { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './app.scss'

class App extends Component {

    componentDidMount() {
        console.log(1111, process.env.TARO_ENV)
    }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    render() {
        // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
        return this.props.children
    }
}

export default App
