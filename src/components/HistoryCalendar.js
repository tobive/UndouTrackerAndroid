import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { strings } from '../../locales/i18n';

class HistoryCalendar extends PureComponent {
  constructor(props) {
    super(props);
    const items = this.getItems();
    this.state = { items };
  }

  getItems() {
    const items = {};
    if (this.props.listSessions === undefined) return {};
    this.props.listSessions.forEach((sess, idx) => {
      if (!items[sess.date]) {
        items[sess.date] = [];
      }
      items[sess.date].push(sess);
    });
    return items;
  }

  getMarkedDates() {
    const md = {};
    const distinctDates = [];
    if (this.props.listDates === undefined) return {};
    this.props.listDates.forEach(item => {
      if (distinctDates.indexOf(item) === -1) {
        distinctDates.push(item);
      }
    });
    distinctDates.forEach(item => {
      md[item] = { color: 'tomato' };
    });
    return md;
  }

  rowHasChanged(r1, r2) {
    return r1.workoutName !== r2.workoutName;
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 15; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];         
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 200);
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  renderItem(item) {
    return (
      <View style={styles.item}>
        <Text style={styles.workoutName}>{item.workoutName}</Text>
        {item.exData.map((ex, idx) => {
          return (
            <View key={idx}>
              <Text style={styles.exerciseName}>{'\n'}{ex.exerciseName}</Text>
              {
                Object.keys(ex.counters).map((ctr, i) => {
                  return <Text key={i}>{`${ctr}: ${ex.counters[ctr]}`}</Text>;
                })
              }
            </View>
          );
        })}
        <Text>{'\n'}{strings('progress.history.session_end')}: {item.fullDate.split(' ')[1]}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>{strings('progress.history.empty_date')}</Text>
      </View>
    );
  }

  render() {
    return (
        <View style={styles.container}>
            <Agenda
	      // isDefaultViewCalendar property is not from default module 
              isDefaultViewCalendar={1}
              items={this.state.items}
              loadItemsForMonth={this.loadItems.bind(this)}
              renderItem={this.renderItem.bind(this)}
              renderEmptyDate={this.renderEmptyDate.bind(this)}
              rowHasChanged={this.rowHasChanged.bind(this)}
              markedDates={this.getMarkedDates()}
              markingType={'period'}
              theme={{ 
                calendarBackground: '#37474F', 
                agendaDayTextColor: 'grey',
                agendaTodayColor: '#37474F',
                agendaKnobColor: 'grey',
                dayTextColor: '#E8E869',
                monthTextColor: '#E8E869',
              }}
              // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    height: 600, 
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    // height: 600,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  workoutName: {
    fontWeight: 'bold',
  },
  exerciseName: { 
    fontStyle: 'italic', 
  },
});

export default HistoryCalendar;
