import React, { useState } from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import ContactItem from "../components/ContactItem";

const HomeScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  // Add new contact
  const addContact = (newContact) => {
    setContacts((prev) => [...prev, { id: Date.now(), ...newContact }]);
  };

  // Update existing contact
  const updateContact = (id, updatedContact) => {
    const updatedList = contacts.map((contact) =>
      contact.id === id ? { ...contact, ...updatedContact } : contact
    );
    setContacts(updatedList);
  };

  // Delete contact with confirmation
  const deleteContact = (id) => {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete this contact?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setContacts(contacts.filter((contact) => contact.id !== id));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate("Edit", { addContact })}
      />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onEdit={() =>
              navigation.navigate("Edit", { contact: item, updateContact })
            }
            onDelete={() => deleteContact(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
