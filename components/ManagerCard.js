import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tinycolor from 'tinycolor2';

const getContrastColor = (backgroundColor) => {
  const textColor = tinycolor.mostReadable(backgroundColor, ['black', 'white']);
  return textColor.toHexString();
};

const ManagerCard = ({ managerId, employees }) => {
  const textColor = getContrastColor(employees[0].backgroundColor);

  return (
    <View style={styles.container}>
      <View style={styles.managerCard}>
        <Text style={styles.managerText}>Manager :{managerId}</Text>
      </View>
      <View style={styles.employeeCard}>
        {employees.map((employee) => (
          <Text
            key={employee.id}
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: 20,
                backgroundColor: employee.backgroundColor,
                padding: 10,
                borderRadius: 8,
              },
            ]}
          >
            {employee.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 20,
  },
  managerCard: {
    flex: 1,
  },
  managerText: {
    fontSize: 20,
    padding: 10,
  },
  employeeCard: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ManagerCard;
