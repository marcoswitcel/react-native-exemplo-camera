# Exemplo de uso da API de Câmera do React Native

Esse repositório contém o código fonte de um App Mobile que faz uso das funcionalidade básicas da API de câmera.
O propósito é documentar o estudo e manter um exemplo de fácil acesso.
O material didático em vídeo estudado pode ser encontrado no YouTube, na playlist [Curso React Native (aprendize) - One Bit Code](https://www.youtube.com/playlist?list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_). É uma série de vídeos sobre desenvolvimento com React Native.
A API da câmera é apresentado e demonstrada nos seguintes vídeos em específico:

- [Trabalhando com Câmera no React Native - Aula 6 - Parte 1 | Curso React Native (aprendiz)](https://www.youtube.com/watch?v=99diO-41iWU&list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_&index=14)
- [Trabalhando com Câmera no React Native - Aula 6 - Parte 2 | Curso React Native (aprendiz)](https://www.youtube.com/watch?v=GpMBkYcGlyg&list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_&index=15)
- [Trabalhando com Câmera no React Native - Aula 6 - Parte 3 | Curso React Native (aprendiz)](https://www.youtube.com/watch?v=-OpdQI_eFEc&list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_&index=16)

## Rodando e testando

Primeiro instale o `Expo`, caso não tenha.
[Documentação detalhada para instalar](https://docs.expo.dev/get-started/installation/), ou digite o sguinte comando no terminal:

```bash
npm install --global expo-cli
```

A partir daí basta clonar este repositório, instalar as dependências do NodeJS e rodar `npm run start`.
Exemplo completo abaixo:

```bash
cd <pasta-deste-repositorio>
npm install
npm run start
```

Para testar, será necessário instalar o [App do Expo na Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US), ou na Apple Store se tiver um Iphone.
A partir do app do expo no seu celular é só scanear o QRCode que aparecerá na janela do terminal onde você rodou `npm run start`.

## Em que template essa estrutura de pastas se baseia

Esse repositório foi criado usando a `expo-cli`

```bash
# criando o projeto com o expo (template blank)
expo init react-native-exemplo-camera
# instalando as dependências necessárias para trabalhar com a câmera
expo install expo-camera expo-contacts expo-sensors
```

## Referências

- Instalação da ferramenta ExpoCli [https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)
- Utilização do `jsconfig.json` e diretiva de compilação `checkJs` [https://code.visualstudio.com/docs/languages/jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)
