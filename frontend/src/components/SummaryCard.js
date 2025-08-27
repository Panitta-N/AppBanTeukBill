import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Vector from '../../assets/icons/Vector.png';

const SummaryCard = ({ balance }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.balanceText}>{balance.toLocaleString()} บาท</Text>

      <View style={styles.rowCenter}>
        <TouchableOpacity>
          <Image source={Vector} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title2}>จดบันทึกล่าสุดเมื่อ 09:13 น.</Text>
      </View>
    </View>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2D9EE',
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  balanceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A2C39',
    textAlign: 'center',
    marginBottom: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  title2: {
    color: '#737373',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
