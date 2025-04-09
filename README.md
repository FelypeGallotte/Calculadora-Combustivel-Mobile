# ⛽ Calculadora Combustível Mobile

Este é um aplicativo mobile simples feito com **React Native** e **Expo**, que ajuda a decidir se vale mais a pena abastecer com **álcool** ou **gasolina**, com base no preço de cada um.

## ✨ Funcionalidades

- Inserir o valor do álcool e da gasolina por litro
- Calcular automaticamente a melhor opção de abastecimento
- Interface simples, objetiva e responsiva
- Compatível com dispositivos móveis via **Expo Go**

---

## 📲 Como executar o projeto

### Pré-requisitos:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Celular com **Expo Go** instalado (disponível na App Store e Google Play)

### Instalação:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/Calculadora-Combustivel-Mobile.git
2. Instale as dependências:

    ```bash
    npm install
    ```

3. Executando no celular:

    Inicie o projeto com o Expo:

    ```bash
    npx expo start
    ```

    Um QR Code será exibido no terminal ou no navegador.

    Abra o app **Expo Go** no seu celular e escaneie o QR Code para visualizar o app.

    ---

    ## 🧑‍💻 Como usar o aplicativo

    1. Ao abrir o aplicativo, insira o **valor do álcool por litro** no primeiro campo.

    2. Insira o **valor da gasolina por litro** no segundo campo.

    3. Toque no botão **"Calcular"**.

    O app exibirá uma mensagem dizendo **qual combustível é mais vantajoso** abastecer com base na razão entre os preços:

    ```text
    álcool ÷ gasolina
    ```

    - Se o resultado for **menor que 0.7**, será exibida a mensagem:  
    **"É mais vantajoso abastecer com Álcool."**

    - Caso contrário, será exibida a mensagem:  
    **"É mais vantajoso abastecer com Gasolina."**
 
