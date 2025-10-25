# VendorConnect

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://vendor-connect-three.vercel.app/)
[![Vercel](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://vercel.com/unni-t-as-projects/vendor-connect)
![Status](https://img.shields.io/badge/status-active-blue)

> **VendorConnect** — Curated Collections, Trusted Vendors.  
> A comprehensive multi-vendor e-commerce platform with AI-powered search, advanced filtering, and modern UI built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Google Genkit AI**.

---

## 🚀 Live Demo
🔗 [https://vendor-connect-three.vercel.app/](https://vendor-connect-three.vercel.app/)

Experience the deployed production version hosted on **Vercel**.

---

## ✨ Features

### 🛍️ **Core E-commerce Features**
- **Product Catalog**: Comprehensive product listings with detailed information
- **Shopping Cart**: Persistent cart with quantity controls and local storage
- **Product Search**: Traditional search with AI-powered recommendations
- **Advanced Filtering**: Filter by category, vendor, price, rating, and availability
- **Product Sorting**: Sort by name, price, rating, and date
- **Product Details**: Detailed product view with vendor information

### 🤖 **AI-Powered Features**
- **AI Product Search**: Google Genkit-powered intelligent product recommendations
- **Vendor-Aware Search**: AI understands vendor specialties and recommends accordingly
- **Smart Filtering**: Context-aware product suggestions

### 🎨 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Built-in theme support with CSS variables
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Component Library**: Complete shadcn/ui component system

### 🏪 **Multi-Vendor Support**
- **Vendor Profiles**: Detailed vendor information with ratings and locations
- **Vendor Showcase**: Dedicated vendor browsing experience
- **Category Management**: Organized product categories with icons
- **Vendor Filtering**: Filter products by specific vendors

### 🔧 **Technical Features**
- **TypeScript**: Full type safety throughout the application
- **Next.js 15**: Latest App Router with server components
- **State Management**: React Context for cart and UI state
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system
- **Image Optimization**: Next.js Image component with proper sizing

---

## 🧰 Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui + Radix UI |
| **AI Integration** | Google Genkit |
| **Form Handling** | React Hook Form + Zod |
| **State Management** | React Context |
| **Icons** | Lucide React |
| **Deployment** | Vercel |
| **Version Control** | Git + GitHub |

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Google AI API key (for AI features)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/unnita1235/VendorConnect.git
cd VendorConnect
```

### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Environment Setup
Create a `.env.local` file in the root directory:

```bash
# Copy the template
cp env.template .env.local
```

Edit `.env.local` and add your Google AI API key:
```env
# Get your API key from: https://aistudio.google.com/app/apikey
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:9002
NEXT_PUBLIC_APP_NAME=VendorConnect
```

### 4️⃣ Run development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at: **http://localhost:9002**

---

## 🏗️ Project Structure

```
VendorConnect/
├── public/
│   └── screenshots/          # Application screenshots
├── src/
│   ├── ai/                   # AI integration (Genkit)
│   │   ├── flows/           # AI workflows
│   │   ├── genkit.ts        # Genkit configuration
│   │   └── dev.ts           # Development setup
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── cart-provider.tsx
│   │   ├── cart-sheet.tsx
│   │   ├── Header.tsx
│   │   ├── product-card.tsx
│   │   ├── product-search.tsx
│   │   ├── product-details-modal.tsx
│   │   ├── category-nav.tsx
│   │   ├── vendor-showcase.tsx
│   │   ├── vendor-search.tsx
│   │   └── product-sort.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── use-cart.ts
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── lib/                 # Utility functions
│   │   ├── products.ts      # Product data and utilities
│   │   ├── placeholder-images.ts
│   │   ├── sort-utils.ts
│   │   └── utils.ts
│   └── types/               # TypeScript type definitions
│       └── index.ts
├── components.json          # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## 🧩 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler |
| `npm run genkit:dev` | Start Genkit AI development server |
| `npm run genkit:watch` | Start Genkit with watch mode |

---

## 🎯 Key Components

### **ProductCard**
Enhanced product cards with:
- Star ratings and review counts
- Stock status indicators
- Category badges
- Hover effects with quick actions
- Add to cart and view details buttons

### **ProductSearch**
Advanced search component with:
- Real-time search functionality
- Multiple filter options (category, vendor, price, rating)
- Collapsible filter panel
- Active filter display
- Search results count

### **CategoryNav**
Category navigation with:
- Visual category icons
- Product count per category
- Interactive category selection
- Responsive grid layout

### **VendorShowcase**
Vendor browsing with:
- Vendor profile cards
- Rating and location information
- Product count per vendor
- Direct vendor filtering

### **ProductDetailsModal**
Detailed product view with:
- High-quality product images
- Comprehensive product information
- Vendor details
- Quantity selection
- Add to cart functionality
- Wishlist feature

---

## 🔧 Configuration

### **Tailwind CSS**
The project uses a custom design system with CSS variables for theming:
- Light and dark mode support
- Custom color palette
- Responsive breakpoints
- Animation utilities

### **shadcn/ui Components**
Complete component library including:
- Form components (Input, Select, Checkbox, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Feedback components (Toast, Alert, etc.)
- Navigation components (Tabs, Accordion, etc.)

### **AI Integration**
Google Genkit setup for AI features:
- Vendor-aware product search
- Intelligent recommendations
- Fallback handling for API failures

---

## 🚀 Deployment

### **Vercel Deployment**
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### **Environment Variables for Production**
```env
GOOGLE_AI_API_KEY=your_production_api_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=VendorConnect
```

---

## 🧪 Testing

The application includes:
- TypeScript type checking
- ESLint code quality checks
- Responsive design testing
- Cross-browser compatibility

---

## 🔮 Future Enhancements

### **Planned Features**
- 🔐 **User Authentication**: Login/signup system
- 💳 **Payment Integration**: Stripe/PayPal checkout
- 📱 **Mobile App**: React Native version
- 🗄️ **Database Integration**: PostgreSQL/MongoDB
- 📊 **Analytics Dashboard**: Vendor and sales analytics
- 💬 **Live Chat**: Customer support integration
- 🌍 **Internationalization**: Multi-language support
- 📧 **Email Notifications**: Order confirmations and updates

### **Technical Improvements**
- 🧪 **Unit Testing**: Jest and React Testing Library
- 🎭 **E2E Testing**: Playwright or Cypress
- ⚡ **Performance Optimization**: Image optimization and caching
- 🔒 **Security Enhancements**: Input validation and sanitization
- 📈 **SEO Optimization**: Meta tags and structured data

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and test thoroughly
4. **Commit your changes**:
   ```bash
   git commit -m "feat: add your feature description"
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use meaningful commit messages
- Ensure responsive design
- Test on multiple browsers
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Unni T A**
- 🔗 [GitHub Profile](https://github.com/unnita1235)
- 🌐 [Live Project](https://vendor-connect-three.vercel.app/)

---

## 🙏 Acknowledgments

- **shadcn/ui** for the amazing component library
- **Vercel** for seamless deployment
- **Google Genkit** for AI capabilities
- **Tailwind CSS** for utility-first styling
- **Next.js** team for the excellent framework

---

## 📞 Support

If you have any questions or need help:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed description
4. **Contact the maintainer** for urgent matters

---

**VendorConnect** – Where quality meets convenience, powered by modern technology and AI intelligence. 🚀
