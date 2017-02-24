import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {

  },
  buttonImage: {
    width: 30,
    height: 25,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

export default class Panel extends Component {
  static toggle() {}
  constructor(props) {
    super(props);
    this.icons = {
      /* eslint-disable global-require */
      /* rule disabled since image loading need not be global */
      up: require('./img/arrow_up.png'),
      down: require('./img/arrow_down.png'),
    };

    this.state = {
      title: props.title,
      children: props.children,
      expanded: true,
    };
  }
  render() {
    let icon = this.icons.down;
    if (this.state.expanded) {
      icon = this.icons.up;
    }

    return (
      <View style={styles.container} >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle}
            underlayColor="#f1f1f1"
          >
            <Image>
              style={styles.buttonImage}
              source={icon}
            </Image>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

Panel.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};
