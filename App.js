import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoGasolina === 0) {
      setResultado("Por favor, insira valores válidos.");
      return;
    }

    const razao = precoAlcool / precoGasolina;
    setResultado(
      razao < 0.7
        ? "É mais vantajoso abastecer com Álcool."
        : "É mais vantajoso abastecer com Gasolina."
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container_2}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" }}
          style={styles.image}
        />
        <Text style={styles.title}>Qual a melhor opção?</Text>

        <Text style={styles.label}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          value={alcool}
          onChangeText={setAlcool}
          placeholder="Digite o valor do Álcool"
          placeholderTextColor="gray"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          value={gasolina}
          onChangeText={setGasolina}
          placeholder="Digite o valor da Gasolina"
          placeholderTextColor="gray"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultado || " "}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_2: {
    backgroundColor: "#111827",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    minHeight: 500,
    width: '90%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 4,
    marginTop: 12,
    fontSize: 17,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "black",
    borderRadius: 8,
    padding: 18,
    fontSize: 16,
    color: "#fff",
    height: 50,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#facc15",
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  resultContainer: {
    marginTop: 20,
    backgroundColor: "#4b5563",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    minHeight: 50, 
    justifyContent: 'center',
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
