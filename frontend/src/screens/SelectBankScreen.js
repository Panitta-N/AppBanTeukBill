import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';

const BANKS = [
  { id: 'kbank', name: 'กสิกรไทย', icon: require('../../assets/icons/KBank.jpeg') },
  { id: 'scb', name: 'ไทยพาณิชย์', icon: require('../../assets/icons/SCBBank.png') },
  { id: 'ktb', name: 'กรุงไทย', icon: require('../../assets/icons/KTB.png') },
  { id: 'bbl', name: 'กรุงเทพ', icon: require('../../assets/icons/BBL.png') },
  { id: 'bay', name: 'กรุงศรีอยุธยา', icon: require('../../assets/icons/BAY.jpeg') },
  { id: 'gsb', name: 'ออมสิน', icon: require('../../assets/icons/GSB.png') },
  { id: 'ttb', name: 'ทหารไทยธนชาต', icon: require('../../assets/icons/TTB.png') },
  { id: 'uob', name: 'ยูโอบี', icon: require('../../assets/icons/UOB.png') },
  { id: 'ghb', name: 'เกียรตินาคินภัทร', icon: require('../../assets/icons/GHB.png') },
  { id: 'tisco', name: 'ทิสโก้', icon: require('../../assets/icons/TISCO.jpeg') }
];

const SelectBankScreen = () => {
  const [selectedBanks, setSelectedBanks] = useState(['kbank', 'scb']); 

  const toggleBank = (id) => {
    setSelectedBanks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedBanks.includes(item.id);
    return (
      <TouchableOpacity style={styles.bankRow} onPress={() => toggleBank(item.id)}>
        <View style={styles.rowLeft}>
          <Image source={item.icon} style={styles.bankIcon} />
          <Text style={styles.bankName}>{item.name}</Text>
        </View>
        <View>
          {isSelected ? (
            <View style={styles.checkCircle}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
          ) : (
            <Text style={styles.plusIcon}>＋</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.whitebox}>
        <Text style={styles.title}>เลือกรายการจากธนาคาร...</Text>
        <FlatList
          data={BANKS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

export default SelectBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D9EE',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 20
  },
  listContent: { paddingBottom: 20 },
  bankRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  bankIcon: { width: 36, height: 36, resizeMode: 'contain', marginRight: 12 },
  bankName: { fontSize: 16, color: '#333' },
  plusIcon: { fontSize: 24, color: '#888' },
  checkCircle: {
    backgroundColor: '#F7D9F0',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkMark: { color: '#944C9C', fontWeight: 'bold' },
  whitebox: {
    flexGrow: 1,
    minHeight: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    elevation: 2,
    marginTop: 200
  }
});
