import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { getEmployeeData } from '../services/api';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import ManagerCard from '../components/ManagerCard';

const SingleCardView = ({ navigation }) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const employeeData = await getEmployeeData();
        setEmployeeData(employeeData);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchEmployeeData();
  }, []);

  const managerData = employeeData?.reduce((acc, employee) => {
    !acc[employee.parentId]
      ? (acc[employee.parentId] = [employee])
      : acc[employee.parentId].push(employee);
    return acc;
  }, {});

  const renderManagerCard = ({ item }) => (
    <ManagerCard managerId={item.key} employees={item.data} />
  );

  const managerDataArray = Object.entries(managerData).map(([key, data]) => ({
    key,
    data,
  }));

  // Divider
  const myItemSeparator = () => {
    return (
      <View
        style={{ height: 1, backgroundColor: '#9e9e9e', marginHorizontal: 10 }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Feather name='list' size={30} color='black' />
          <Text>List View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardWrapper}>
        <FlatList
          data={managerDataArray}
          keyExtractor={(item) => item.key.toString()}
          renderItem={renderManagerCard}
          ItemSeparatorComponent={myItemSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  cardWrapper: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    margin: 10,
  },
});

export default SingleCardView;
