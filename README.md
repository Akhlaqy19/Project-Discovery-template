# Project Discovery

A modern web application for vulnerability scanning and security assessment, built with React and Tailwind CSS. This project provides a comprehensive platform for security professionals to monitor, analyze, and manage security vulnerabilities in real-time.

## 🌟 Key Features

### Security Features
- **Real-time Vulnerability Scanning**
  - Continuous monitoring of security vulnerabilities
  - Automated detection and analysis
  - Real-time alerts and notifications
  - Detailed vulnerability reports

- **Attack Surface Monitoring**
  - Comprehensive attack surface analysis
  - Service discovery and mapping
  - Port scanning and service identification
  - Risk assessment and prioritization

- **Security Assessment**
  - Vulnerability scoring and classification
  - Risk-based prioritization
  - Remediation recommendations
  - Compliance checking

### UI/UX Features
- **Interactive Components**
  - Dynamic glow effects following mouse movement
  - Smooth animations and transitions
  - Responsive design for all devices
  - Customizable interface

- **Data Visualization**
  - Interactive charts and graphs
  - Real-time data updates
  - Customizable dashboards
  - Export capabilities

- **Modern Design**
  - Glassmorphism effects
  - Dark mode support
  - Responsive layouts
  - Accessibility features

## 🛠️ Tech Stack

### Frontend
- **Core**
  - React.js 18
  - Tailwind CSS
  - Framer Motion
  - Axios

- **Styling**
  - Custom CSS variables
  - Tailwind utilities
  - CSS animations
  - Glassmorphism effects

### Development Tools
- **Build & Development**
  - Vite
  - ESLint
  - Prettier
  - JSON Server

### Data Management
- **API & Data**
  - JSON Server (Development)
  - RESTful API endpoints
  - Dynamic data fetching
  - Error handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-discovery.git
cd project-discovery
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Start the JSON Server (in a separate terminal):
```bash
npm run server
# or
yarn server
```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
project-discovery/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── Solution/
│   │   │   ├── PurposeSection/
│   │   │   └── ...
│   │   ├── db.json/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.css
└── package.json
```

## 🔧 API Integration

### Data Sources
The project supports two methods for data management:

1. **JSON Server (Default)**
   - Uses `db.json` for API simulation
   - RESTful endpoints for data management
   - Real-time data updates
   - Easy to modify and extend

2. **Static Data (Alternative)**
   - Uses `data.js` for static data
   - No server required
   - Faster development setup
   - Easy to switch between methods

### API Endpoints
When using JSON Server, the following endpoints are available:

- `/navLinksData` - Navigation menu items
- `/issueInfo` - Vulnerability information
- `/attackServicesInfo` - Attack service details
- `/vulnerabilityInfo` - Vulnerability management
- `/communityPoweredInfo` - Community contributions
- `/newsletterSubscribers` - Newsletter subscriptions
- `/footerListInfo` - Footer navigation
- `/sliderLogosInfo` - Partner logos
- `/featuresInfo` - Feature highlights
- `/integrationBoxesInfo` - Integration options
- `/communityComments` - User testimonials

## 🎨 UI Components

### Glow Effect System
- Interactive glow effects following mouse movement
- Customizable glow size and color
- Smooth transitions and animations
- Responsive to user interaction

### Data Management
- Real-time data fetching
- Dynamic data updates
- Error handling and loading states
- Optimized performance

### UI Components
- Modular component architecture
- Reusable UI elements
- Consistent styling system
- Responsive design patterns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add appropriate documentation
- Include tests for new features
- Update README if necessary

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React](https://reactjs.org/) - UI library
- [JSON Server](https://github.com/typicode/json-server) - API simulation
- [Vite](https://vitejs.dev/) - Build tool

## Updates

Stay tuned for updates and new features. Follow us on:
- GitHub: https://github.com/Akhlaqy19
