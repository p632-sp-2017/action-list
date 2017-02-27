import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';

var upArrow = require('./img/up-icon.png');
var downArrow = require('./img/down-icon.png');

export default class Panel extends Component{
	constructor(props){
		super(props);
		this.icons = {
			'up'    : upArrow,
      'down'  : downArrow
		};
		
    this.state = {
			title       : props.title,
      expanded    : true,
      animation   : new Animated.Value()
		};
	}
	
  toggle(){
		let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
    finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
			expanded : !this.state.expanded  
		});
        
    this.state.animation.setValue(initialValue);
    Animated.spring(
			this.state.animation,
      {
				toValue: finalValue
			}
		).start();
	}
    
  _setMaxHeight(event){
		this.setState({
			maxHeight   : event.nativeEvent.layout.height
		});
	}

  _setMinHeight(event){
		this.setState({
			minHeight   : event.nativeEvent.layout.height
		});
	}
    
  render(){
		let icon = this.icons['down'];
		
    if(this.state.expanded){
			icon = this.icons['up'];
		}
        
		return (
			<Animated.View style={[styles.container,{height: this.state.animation}]}>
				<View style={styles.container} >
					<View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
						<Text style={styles.title}>{this.state.title}</Text>
						<TouchableHighlight style={styles.button} onPress={this.toggle.bind(this)} underlayColor="#efecdc">
							<Image style={styles.buttonImage} source={icon} ></Image>
						</TouchableHighlight>
					</View>
					<View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
						{this.props.children}
					</View>
				</View>
			</Animated.View>
		);
	}
}

var styles = StyleSheet.create({
	container   : {
		backgroundColor: '#efecdc',
    margin: 7,
    overflow:'hidden'
	},
  titleContainer : {
		flexDirection: 'row'
	},
  title       : {
		flex    : 1,
    padding : 10,
    color   :'#663300',
    fontWeight:'bold'
	},
  button      : {
  },
  buttonImage : {
    marginTop: 10,
		width   : 20,
    height  : 20
	},
  body        : {
		padding     : 10,
    paddingTop  : 0
	}
});