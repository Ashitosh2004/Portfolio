# 🎨 Elegant Portfolio Hub

A modern, elegant portfolio website showcasing professional experience, projects, skills, and achievements with beautiful animations and responsive design.

![Portfolio Preview](public/profile.jpeg)

## ✨ Features

- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Scroll-Based Navigation** - Smart navigation that highlights active sections as you scroll
- **Smooth Animations** - Powered by Framer Motion for delightful user interactions
- **Project Showcase** - Display up to 7 projects with live demos and GitHub links
- **Skills Display** - Comprehensive tech stack organized by categories
- **Certificates Section** - Highlight achievements and certifications
- **Contact Form** - Integrated contact section with social links

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 🛠️ Technologies Used

### Core
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling

### UI & Animations
- **shadcn/ui** - Beautiful, accessible components
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

### Routing & State
- **React Router** - Client-side routing
- **React Hooks** - State management

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/Ashitosh2004/elegant-portfolio-hub.git

# Navigate to project directory
cd elegant-portfolio-hub-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run test suite |

## 📁 Project Structure

```
elegant-portfolio-hub-main/
├── public/              # Static assets
│   └── profile.jpeg    # Profile photo
├── src/
│   ├── components/     # React components
│   │   ├── sections/  # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Certificates.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/        # Reusable UI components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── MobileNav.tsx
│   │   └── Footer.tsx
│   ├── pages/         # Route pages
│   │   ├── Index.tsx
│   │   └── Projects.tsx
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utilities
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/sections/HeroSection.tsx`)
- Keep the generic tagline or customize it

**About Section** (`src/components/sections/About.tsx`)
- Update name, bio, and stats
- Replace profile photo in `public/profile.jpeg`

### 2. Projects

Edit `src/components/sections/FeaturedProjects.tsx`:

```typescript
{
  id: "1",
  title: "Your Project Name",
  description: "Project description",
  category: "Web App" | "Mobile App" | "IoT",
  tags: ["React", "TypeScript", ...],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://your-project.com",
}
```

### 3. Skills

Update `src/components/sections/Skills.tsx` with your tech stack organized by categories.

### 4. Education & Certificates

- **Education**: `src/components/sections/Education.tsx`
- **Certificates**: `src/components/sections/Certificates.tsx`

### 5. Contact Information

Update social links in `src/components/sections/Contact.tsx`:
- GitHub
- LinkedIn
- Email

### 6. Theme Colors

Customize in `src/index.css` - modify CSS variables for light and dark themes.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy the dist/ folder to Vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages

Use GitHub Actions to automatically build and deploy on push.

## 🎯 Key Features Explained

### Smart Navigation
- **Desktop**: Fixed top navigation with scroll-based highlighting
- **Mobile**: Bottom navigation bar with active section tracking
- Uses IntersectionObserver API for accurate section detection

### Theme Toggle
- Persistent theme preference using localStorage
- Smooth transitions between light and dark modes
- Custom theme hook for easy integration

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Optimized layouts for all screen sizes

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Ashitosh Krishna Ingale**

Computer Science Engineering Student | Web Developer | IoT Enthusiast

- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [ashitosh-ingale](https://www.linkedin.com/in/ashitosh-ingale-6702a82a3/)
- 🐙 GitHub: [@Ashitosh2004](https://github.com/Ashitosh2004)
- 📧 Email: ashitoshingale8@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you found this helpful, please give it a star!
