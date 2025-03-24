import React from "react";
import { View, StyleSheet } from "react-native";
import ContactForm from "../components/ContactForm";

const EditScreen = ({ route, navigation }) => {
  const { contact, addContact, updateContact } = route.params;

  return (
    <View style={styles.container}>
      <ContactForm
        contact={contact} // For editing
        onSubmit={(data) => {
          if (contact) {
            updateContact(contact.id, data); // Edit existing contact
          } else {
            addContact(data); // Add new contact
          }
          navigation.goBack();
        }}
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

export default EditScreen;
