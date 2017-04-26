import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { dateFilterChange } from '../actions/actionItems';
import { Colors } from '../lib/commons';
import ContentHeader from './contentHeader';

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

const DateRangePicker = ({ title, dateSet, onDateChanged }) => (
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
        minDate="2016-05-01"
        maxDate="2019-06-01"
        customStyles={datePickerStyles}
        onDateChange={date => onDateChanged(title, 'start', date)}
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
        minDate="2016-05-01"
        maxDate="2019-06-01"
        customStyles={datePickerStyles}
        onDateChange={date => onDateChanged(title, 'end', date)}
      />
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onDateChanged: (title, position, date) => dispatch(dateFilterChange({ title, position, date })),
});

DateRangePicker.propTypes = {
  onDateChanged: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  dateSet: React.PropTypes.shape({
    start: React.PropTypes.string,
    end: React.PropTypes.string,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(DateRangePicker);
