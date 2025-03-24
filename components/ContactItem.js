import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {contact.name} - {contact.phone}
      </Text>
      <Button title="Edit" onPress={onEdit} />
      <Button title="Delete" onPress={onDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default ContactItem;
