# 📱 Instagram Interface Native

An Instagram-inspired interface built with React Native and Expo, demonstrating a modern implementation of post feeds, stories, and social interactions.

## ✨ Features

- 🎨 Modern Instagram-inspired interface
- 📸 Image post feed
- 📖 Horizontal scrolling stories
- ❤️ Interaction actions (like, comment, share, save)
- 🎯 Navigation with Expo Router
- 🌙 Native dark theme
- 📱 Support for iOS, Android, and Web

## 🛠️ Technologies

- **React Native** - Framework for mobile development
- **Expo** - Platform for React Native development
- **Expo Router** - File-based routing
- **TypeScript** - Static typing
- **Lucide React Native** - Modern icons
- **Expo Image** - Optimized image component

## 📋 Prerequisites

Before you begin, you need to have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (package manager)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, but recommended)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/VictorBuarque/instagram-interface-native.git
cd instagram-interface-native
```

2. Install dependencies:
```bash
pnpm install
```

## 🎮 How to Run

### Development

Start the development server:
```bash
pnpm start
```

Or use specific commands:

```bash
# Android
pnpm android

# iOS
pnpm ios

# Web
pnpm web
```

### Build

To create a production build, follow the [Expo documentation](https://docs.expo.dev/build/introduction/).

## 📁 Project Structure

```
instagram-interface-native/
├── app/                    # Routes and screens (Expo Router)
│   └── (tabs)/            # Tab navigation
│       ├── index.tsx      # Main screen (Home)
│       └── explore.tsx    # Explore screen
├── assets/                # Static resources
│   └── images/           # Project images
├── components/            # Reusable components
│   ├── themed-view.tsx   # Themed view component
│   └── ui/               # UI components
├── constants/             # Constants and data
│   └── insta-data.ts     # Mock data (feed and stories)
└── hooks/                 # Custom hooks
```

## 🎨 Main Components

### Home Screen
- Header with logo and actions
- Horizontal scrolling stories
- Vertical post feed
- Interaction actions (like, comment, share, save)

### Stories
- Horizontal scroll
- Add story icon on the first item
- Circular images with borders
- Usernames below images

### Feed
- Square format images (1:1 aspect ratio)
- Interaction actions
- Post information (user, title, description)

## 📝 Available Scripts

```bash
pnpm start          # Start development server
pnpm android        # Start on Android
pnpm ios            # Start on iOS
pnpm web            # Start on browser
pnpm lint           # Run linter
```

## 🔧 Configuration

The project uses TypeScript and ESLint to ensure code quality. Configuration files are located at:
- `tsconfig.json` - TypeScript
- `.eslintrc.js` - ESLint (if exists)

## 📱 Supported Platforms

- ✅ iOS
- ✅ Android
- ✅ Web

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private.

## 👤 Author

**Victor Buarque**

- GitHub: [@VictorBuarque](https://github.com/VictorBuarque)
- Email: vcgabriel38@gmail.com

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing platform
- [React Native](https://reactnative.dev/) for the framework
- [Lucide](https://lucide.dev/) for the icons

---

⭐ If this project was useful to you, consider giving it a star on the repository!
