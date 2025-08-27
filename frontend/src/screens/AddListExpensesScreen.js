import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ReturnIcon from '../../assets/icons/returnicon.png';
import AddExpensesIcon from '../../assets/icons/addexpenses.png';

const OPTIONS = [
  { text: 'รายจ่าย', icon: AddExpensesIcon, route: 'AddExpense' },
  { text: 'รายรับ',  icon: AddExpensesIcon, route: 'AddIncome'  },
  { text: 'ย้ายเงิน', icon: AddExpensesIcon, route: 'Transfer'  },
];

export default function AddListExpenses() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPressOption = (i) => {
    setSelectedIndex(i);
    navigation.navigate(OPTIONS[i].route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.calendarButton} onPress={() => console.log('Calendar pressed')}>
        <Image source={require('../../assets/icons/Calendar.png')} style={styles.calendarIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={ReturnIcon} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.whitebox}>
        <View style={styles.row}>
          {OPTIONS.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.chipBase,
                  isSelected ? styles.chipSelected : styles.chipUnselected,
                  isSelected ? styles.chipBig : styles.chipSmall,
                ]}
                onPress={() => onPressOption(index)}
              >
                <Image
                  source={item.icon}
                  style={[
                    styles.icon,
                    isSelected ? styles.iconSelected : styles.iconUnselected,
                  ]}
                />
                <Text
                  style={[
                    styles.chipText,
                    isSelected ? styles.textSelected : styles.textUnselected,
                  ]}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#FF7BAC' 
  },
  backButton: { 
    position: 'absolute', 
    top: 60, 
    left: 20, 
    padding: 8 
  },
  backIcon: { 
    width: 30, 
    height: 30, 
    resizeMode: 'contain' 
  },
  calendarButton: { 
    position: 'absolute', 
    top: 70, 
    right: 35, 
    zIndex: 10 
  },
  calendarIcon: { 
    width: 30, 
    height: 30, 
    resizeMode: 'contain' 
  },

  whitebox: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    elevation: 2,
    marginTop: 250,
    width: '100%',
  },

  row: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    gap: 10, 
    marginTop: 8 
  },

  chipBase: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },

  chipSelected:   { 
    backgroundColor: '#FF7BAC' 
  },
  chipUnselected: { 
    backgroundColor: '#D9D9D9',
  },
  chipBig:   { 
    height: 40, 
    paddingHorizontal: 16 
  },
  chipSmall: { 
    height: 30, 
    paddingHorizontal: 10 
  },
  icon: { 
    width: 20, 
    height: 20, 
    marginRight: 6 
  },
  iconSelected:   { 
    tintColor: '#FFFFFF' 
  },
  iconUnselected: { 
    tintColor: '#666666' 
  },

  chipText: { 
    fontWeight: '600' 
  },
  textSelected:   { 
    color: '#FFFFFF' 
  },
  textUnselected: { 
    color: '#555555' 
  },
});
