import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { filterDate } from '../actions/actionItems';
import { Colors } from '../lib/commons';
import ContentHeader from './contentHeader';
/* eslint-enable no-unused-vars */

const style = StyleSheet.create({
  timeMarkers: {
    flex: 1,
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontSize: 15,
    textAlign: 'left',
  },
});

const datePickerStyles = {
  dateInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 0,
    width: 15,
  },
};

const DateRangePicker = ({ title, type, dateSet, onDateChanged }) => (
  <View>
    <ContentHeader>{title}</ContentHeader>
    <View style={{ flexDirection: 'row' }}>
      <Text style={style.timeMarkers}>From: </Text>
      <DatePicker
        style={{ flex: 1 }}
        mode="date"
        androidMode="spinner"
        placeholder="select date"
        date={dateSet.start}
        showIcon={false}
        format="YYYY-MM-DD"
        customStyles={datePickerStyles}
        onDateChange={date => onDateChanged(type, 'start', date)}
      />
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Text style={style.timeMarkers}>To: </Text>
      <DatePicker
        style={{ flex: 1 }}
        mode="date"
        androidMode="spinner"
        placeholder="select date"
        date={dateSet.end}
        showIcon={false}
        format="YYYY-MM-DD"
        customStyles={datePickerStyles}
        onDateChange={date => onDateChanged(type, 'end', date)}
      />
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onDateChanged: (type, position, date) => dispatch(filterDate({ type, position, date })),
});

DateRangePicker.propTypes = {
  onDateChanged: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  dateSet: React.PropTypes.shape({
    start: React.PropTypes.string,
    end: React.PropTypes.string,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(DateRangePicker);
