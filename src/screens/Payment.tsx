import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useCartContext } from '../contexts/CartContext';

const Payment = () => {
  const { cart } = useCartContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2);
  };

  const handlePayment = () => {
    // Aqui você pode adicionar lógica para processar o pagamento
    Alert.alert('Pagamento', 'Pagamento realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumo do Pedido</Text>
      {cart.map((item) => (
        <View key={item.product.id} style={styles.item}>
          <Text style={styles.itemText}>
            {item.product.title} x {item.quantity}
          </Text>
          <Text style={styles.itemText}>
            ${(item.quantity * item.product.price).toFixed(2)}
          </Text>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EAEAEA',
    marginBottom: 20,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  itemText: {
    fontSize: 16,
    color: '#EAEAEA',
  },
  totalContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EAEAEA',
    textAlign: 'center',
  },
  paymentButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
