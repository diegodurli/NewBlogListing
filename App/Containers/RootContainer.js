import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
// import './Config/PushConfig'

// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

        // <StatusBar barStyle='light-content' />
  render () {
    return (
      <View style={styles.applicationView}>
        <NavigationRouter />
      </View>
    )
  }
}

const mapStateToDispatch = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapStateToDispatch)(RootContainer)
