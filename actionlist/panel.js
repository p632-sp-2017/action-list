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
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingRight: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#7B1500',
    fontWeight: 'bold',
  },
  buttonImage: {
    marginTop: 10,
    width: 20,
    height: 20,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.icons = {
      /* eslint-disable global-require */
      /* rule disabled since image loading need not be global */
      up: require('./img/up-icon.png'),
      down: require('./img/down-icon.png'),
    };

    this.state = {
      title: props.title,
      expanded: false,
    };
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const icon = this.state.expanded ? this.icons.up : this.icons.down;
    return (
      <View style={styles.container} >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {this.state.title}
          </Text>
          <TouchableHighlight
            onPress={this.toggle}
            underlayColor="#e9e9e9"
          >
            <Image
              style={styles.buttonImage}
              source={icon}
            />
          </TouchableHighlight>
        </View>
        { this.state.expanded ?
          <View style={styles.body}>
            {this.props.children}
          </View> : null
        }
      </View>
    );
  }
}

Panel.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.arrayOf(Object).isRequired,
};
