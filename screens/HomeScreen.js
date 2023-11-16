import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EmployeeCard from '../components/EmployeeCard';
import { getEmployeeData } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const employeeData = await getEmployeeData();
        setEmployeeData(employeeData);
      } catch (error) {
        console.error('Error fetching employee data :', error);
      }
    };
    fetchEmployeeData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SingleCardView')}
        >
          <MaterialCommunityIcons name='cards' size={30} color='black' />
          <Text>Card View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardWrapper}>
        <FlatList
          data={employeeData}
          renderItem={({ item }) => <EmployeeCard employee={item} />}
          keyExtractor={(employee) => employee.name}
        ></FlatList>
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

export default HomeScreen;
