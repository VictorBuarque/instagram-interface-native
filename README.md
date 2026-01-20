# 📱 Instagram Interface Native

Uma interface inspirada no Instagram construída com React Native e Expo, demonstrando uma implementação moderna de feed de posts, stories e interações sociais.

## ✨ Features

- 🎨 Interface moderna inspirada no Instagram
- 📸 Feed de posts com imagens
- 📖 Stories horizontais com scroll
- ❤️ Ações de interação (curtir, comentar, compartilhar, salvar)
- 🎯 Navegação com Expo Router
- 🌙 Tema escuro nativo
- 📱 Suporte para iOS, Android e Web

## 🛠️ Tecnologias

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **Expo Router** - Roteamento baseado em arquivos
- **TypeScript** - Tipagem estática
- **Lucide React Native** - Ícones modernos
- **Expo Image** - Componente de imagem otimizado

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/VictorBuarque/instagram-interface-native.git
cd instagram-interface-native
```

2. Instale as dependências:
```bash
pnpm install
```

## 🎮 Como Executar

### Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
pnpm start
```

Ou use os comandos específicos:

```bash
# Android
pnpm android

# iOS
pnpm ios

# Web
pnpm web
```

### Build

Para criar uma build de produção, siga a [documentação do Expo](https://docs.expo.dev/build/introduction/).

## 📁 Estrutura do Projeto

```
instagram-interface-native/
├── app/                    # Rotas e telas (Expo Router)
│   └── (tabs)/            # Navegação por tabs
│       ├── index.tsx      # Tela principal (Home)
│       └── explore.tsx    # Tela de exploração
├── assets/                # Recursos estáticos
│   └── images/           # Imagens do projeto
├── components/            # Componentes reutilizáveis
│   ├── themed-view.tsx   # Componente de view com tema
│   └── ui/               # Componentes de UI
├── constants/             # Constantes e dados
│   └── insta-data.ts     # Dados mockados (feed e stories)
└── hooks/                 # Custom hooks
```

## 🎨 Componentes Principais

### Home Screen
- Header com logo e ações
- Scroll horizontal de stories
- Feed vertical de posts
- Ações de interação (curtir, comentar, compartilhar, salvar)

### Stories
- Scroll horizontal
- Ícone de adicionar story no primeiro item
- Imagens circulares com bordas
- Nomes de usuário abaixo das imagens

### Feed
- Imagens em formato quadrado (aspect ratio 1:1)
- Ações de interação
- Informações do post (usuário, título, descrição)

## 📝 Scripts Disponíveis

```bash
pnpm start          # Inicia o servidor de desenvolvimento
pnpm android        # Inicia no Android
pnpm ios            # Inicia no iOS
pnpm web            # Inicia no navegador
pnpm lint           # Executa o linter
```

## 🔧 Configuração

O projeto usa TypeScript e ESLint para garantir qualidade de código. As configurações estão em:
- `tsconfig.json` - TypeScript
- `.eslintrc.js` - ESLint (se existir)

## 📱 Plataformas Suportadas

- ✅ iOS
- ✅ Android
- ✅ Web

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é privado.

## 👤 Autor

**Victor Buarque**

- GitHub: [@VictorBuarque](https://github.com/VictorBuarque)
- Email: vcgabriel38@gmail.com

## 🙏 Agradecimentos

- [Expo](https://expo.dev/) pela plataforma incrível
- [React Native](https://reactnative.dev/) pela framework
- [Lucide](https://lucide.dev/) pelos ícones

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
