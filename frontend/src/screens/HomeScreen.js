import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import SummaryCard from '../components/SummaryCard';
import TransactionSection from '../components/TransactionSection';

import PenIcon from '../../assets/icons/pen.png';

const HomeScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const accounts = [
    { name: 'K+', icon: require('../../assets/icons/KBank.jpeg') },
    { name: 'SCB', icon: require('../../assets/icons/SCBBank.png') },
    { name: 'ALL', text: 'ALL' },
    { name: '+', icon: require('../../assets/icons/iconplus.png') },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.calendarButton} onPress={() => console.log('Calendar pressed')}>
        <Image
          source={require('../../assets/icons/Calendar.png')}
          style={styles.calendarIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>เลือกบัญชีที่ต้องการเพิ่ม</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.row}>
          {accounts.map((item, index) => {
            const isSelected = selectedIndex === index;
            const isTextOnly = !!item.text;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.baseButton,
                  isSelected && styles.selectedButton,
                ]}
                onPress={() => setSelectedIndex(index)}
              >
                {item.icon ? (
                  <View
                    style={[
                      styles.iconWrapper,
                      isSelected && styles.selectedIconWrapper,
                    ]}
                  >
                    <Image source={item.icon} style={styles.iconImage} />
                  </View>
                ) : (
                  <Text style={styles.textIcon}>{item.text}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.whitebox}>
          <SummaryCard balance={9210} income={1000} expense={555} />
          <TransactionSection />
          <TouchableOpacity style={styles.botton} onPress={() => navigation.navigate('AddExpenses')}>
            <Image source={PenIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7BAC',
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif-medium',
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'left',
    marginTop: 80,
    marginLeft: 60,
  },
  calendarButton: {
    position: 'absolute',
    top: 70,
    right: 35,
    zIndex: 10,
  },
  calendarIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  baseButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#DADDE5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  selectedButton: {
    backgroundColor: '#FFFF00',
  },
  iconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#DADDE5',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIconWrapper: {
    backgroundColor: '#FFFF00',
  },
  iconImage: {
    width: 45,
    height: 45,
    borderRadius: 23,
    resizeMode: 'cover',
  },
  textIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  whitebox: {
    flexGrow: 1,
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
    marginTop: 40,
  },
  title2: {
    color: '#555',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  botton: {
    backgroundColor: '#FFA41B',
    borderRadius: 30,
    width: 70,
    height: 70,
    position: 'absolute',
    top: 575,
    right: 20,
    elevation: 5, 
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
});
