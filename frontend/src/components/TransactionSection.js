import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


const transactionsByDate = [
  {
    date: 'Sun, 26/10',
    income: 1000,
    expense: 555,
    items: [
      {
        title: 'รายจ่าย',
        amount: -500,
        note: '',
        bank: 'K Bank',
        icon: require('../../assets/icons/Expenses.png'),
        color: '#E53935',
      },
      {
        title: 'เงินเดือน',
        amount: 1000,
        note: '',
        bank: 'SCB',
        icon: require('../../assets/icons/Income.png'),
        color: '#43A047',
      },
    ],
  },
  {
    date: 'Sat, 25/10',
    income: 1000,
    expense: 555,
    items: [
      {
        title: 'ย้ายเงิน',
        amount: 560,
        note: 'KBank --> SCB',
        icon: require('../../assets/icons/Transfer.png'),
        color: '#1976D2',
      },
    ],
  },
  {
    date: 'Fri, 24/10',
    income: 1000,
    expense: 555,
    items: [],
  },
];

const TransactionSection = () => {
  const [expandedMap, setExpandedMap] = useState({}); 

  const toggleExpand = (index) => {
    setExpandedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {transactionsByDate.map((day, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity style={styles.header} onPress={() => toggleExpand(index)}>
              <Text style={styles.dateText}>
                {expandedMap[index] ? '▼' : '▶'} {day.date}
              </Text>
              <Text style={styles.summaryText}>
                Income: {day.income} Expense: {day.expense}
              </Text>
            </TouchableOpacity>

            {expandedMap[index] && (
              <View style={styles.detailBox}>
                {day.items.length === 0 ? (
                  <Text style={styles.noItem}>ไม่มีรายการ</Text>
                ) : (
                  day.items.map((item, i) => (
                    <View key={i} style={styles.item}>
                      <Image source={item.icon} style={styles.itemIcon} />
                      <View style={styles.itemContent}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemNote}>Note : {item.note || item.bank}</Text>
                      </View>
                      <Text style={[styles.amount, { color: item.color }]}>
                        {item.amount > 0 ? `$ +${item.amount}` : `$ -${Math.abs(item.amount)}`}
                      </Text>
                    </View>
                  ))
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TransactionSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EFEFEF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 12,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#444',
  },
  summaryText: {
    fontSize: 12,
    color: '#666',
  },
  detailBox: {
    padding: 12,
  },
  noItem: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  itemIcon: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  itemNote: {
    fontSize: 12,
    color: '#777',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  scrollContainer: {
    maxHeight: 500,
    paddingBottom: 20,
  },
});
