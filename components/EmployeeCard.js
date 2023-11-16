import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tinycolor from 'tinycolor2';

const getContrastColor = (backgroundColor) => {
  const textColor = tinycolor.mostReadable(backgroundColor, ['black', 'white']);
  return textColor.toHexString();
};

const EmployeeCard = ({ employee }) => {
  const textColor = getContrastColor(employee.backgroundColor);

  return (
    <View
      style={[
        styles.employeeCard,
        { backgroundColor: employee.backgroundColor },
      ]}
    >
      <Text style={[styles.text, { color: textColor, fontSize: 20 }]}>
        {employee.name}
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Email: {employee.email}
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Phone: {employee.phone}
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        Manager: {employee.parentId}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  employeeCard: {
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    paddingLeft: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default EmployeeCard;
