import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class Movie extends Component {

    componentWillMount() { }

    componentDidMount() {
        console.log(1111, Taro.getApp())
    }

    componentWillUnmount() { }

    componentDidShow() {
    }

    componentDidHide() { }

    render() {
        return (
            <View className='movie'>
                <Text>movie</Text>
            </View>
        )
    }
}
