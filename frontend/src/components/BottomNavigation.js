import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import HomeIcon from '../../assets/icons/Homeicon.png';
import ChartIcon from '../../assets/icons/charticon.png'
import ProfileIcon from '../../assets/icons/profile.png';



const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('home')}>
        <View style={[ styles.circle, activeTab === 'home' && styles.activeCircle]}>
          <Image source={HomeIcon} style={styles.icon} />
        </View>
        {activeTab === 'home' && <Text style={styles.label}>หน้าหลัก</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('chart')}>
        <View style={[styles.circle, activeTab === 'chart' && styles.activeCircle]}>
          <Image source={ChartIcon} style={styles.icon} />
        </View>
        {activeTab === 'chart' && <Text style={styles.label}>เเสดงกราฟ</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('profile')}>
        <View style={[styles.circle, activeTab === 'profile' && styles.activeCircle]}>
          <Image source={ProfileIcon} style={styles.icon} />
        </View>
        {activeTab === 'profile' && <Text style={styles.label}>บัญชี</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    width: '100%',
    backgroundColor: '#EE82AB',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    width: 70,
  },
  circle: {
    backgroundColor: '#EE82AB',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: 0 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    marginTop: -10,
  },
  activeCircle: {
    transform: [{ translateY: -20 }],
     backgroundColor: '#F2D9EE',
  },
  label: {
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: -10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    justifyContent: 'center'
  },
});
