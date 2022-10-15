import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class KeycodeInput extends Component {
  static propTypes = {
    length: PropTypes.number,
    tintColor: PropTypes.string,
    barStyle: PropTypes.any,
    inputStyle: PropTypes.any,
    textStyle: PropTypes.any,
    textColor: PropTypes.string,
    onChange: PropTypes.func,
    onComplete: PropTypes.func,
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.string,
    regex: PropTypes.any,
    uppercase: PropTypes.bool,
    alphaNumeric: PropTypes.bool,
    numeric: PropTypes.bool,
    value: PropTypes.string,
    style: PropTypes.any,
    inputRef: PropTypes.func,
    inputProps: PropTypes.any,
  }

  static defaultProps = {
    tintColor: '#007AFF',
    barStyle: {},
    inputStyle: {},
    textStyle: {},
    inputProps: {},
    textColor: '#000',
    length: 4,
    autoFocus: true,
    numeric: false,
    alphaNumeric: true,
    uppercase: true,
    defaultValue: '',
    value: ''
  }

  input = null

  constructor (props) {
    super(props)

    this.state = {
      value: props.defaultValue
    }
  }

  async UNSAFE_componentWillReceiveProps (nextProps) {
    if ('value' in nextProps && nextProps.value !== this.state.value) {
      await this._setValue(nextProps.value)
    }

    if (this.state.value.length < this.props.length) {
      this.props.autoFocus && this.input.focus()
    } else {
      this.input.blur()
    }
  }

  _setValue (value) {
    if (this.props.uppercase) {
      value = value.toUpperCase()
    }
    if (this.props.alphaNumeric) {
      value = value.replace('/[^a-z0-9]/i', '')
    }

    this.setState({value})
  }

  async _changeText (value) {
    await this._setValue(value)

    if (this.props.onChange) {
      await this.props.onChange(this.state.value)
    }

    if (this.state.value.length < this.props.length) {
      return
    }

    if (this.input) {
      this.input.blur()
    }

    if (this.props.onComplete) {
      setTimeout(() => {
        this.props.onComplete(this.state.value)
      }, 250)
    }
  }

  _renderBoxes () {
    let elements = []
    let i = 0
    let vals = this.state.value.split('')
    while (i < this.props.length) {
      let active = i === this.state.value.length
      let barStyles = [
        styles.bar,
        this.props.barStyle,
        active ? [styles.barActive, {backgroundColor: this.props.tintColor}] : [],
      ]

      elements.push(
        <TouchableOpacity onPress={() => this.input.focus()} style={styles.box} key={i}>
          <Text style={[styles.text, { color: this.props.textColor }, this.props.textStyle]}>{vals[i] || ''}</Text>
          <View style={barStyles}/>
        </TouchableOpacity>
      )

      i++
    }

    return elements
  }

  render () {
    let keyboardType = this.props.numeric ? 'numeric' : (Platform.OS === 'ios' ? 'ascii-capable' : 'default')

    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          ref={(component) => {
            this.input = component
            if (this.props.inputRef) {
              this.props.inputRef(component)
            }
          }}
          style={[styles.input, this.props.inputStyle]}
          autoFocus={this.props.autoFocus}
          autoCorrect={false}
          autoCapitalize='characters'
          value={this.state.value}
          blurOnSubmit={false}
          keyboardType={keyboardType}
          maxLength={this.props.length}
          disableFullscreenUI
          clearButtonMode='never'
          spellCheck={false}
          returnKeyType='go'
          underlineColorAndroid='transparent'
          onChangeText={(text) => this._changeText(text)}
          caretHidden
          {...this.props.inputProps}
        />
        {this._renderBoxes()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 0,
    height: 0,
    opacity: 0,
    position: 'absolute'
  },
  box: {
    width: 50,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    paddingBottom: 10
  },
  bar: {
    backgroundColor: 'black',
    height: 1,
    width: 70
  },
  barActive: {
    height: 2,
    marginTop: -0.5
  },
  text: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 36,
    height: 36,
    textAlign: 'center',
    width: 32,
    marginBottom: 8
  }
})