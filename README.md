# José García Villalón - Professional Website

> A modern, production-ready personal website showcasing expertise in Perception & AI Engineering

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://josgarvil.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blue)](https://web.dev/responsive-web-design-basics/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1-green)](https://www.w3.org/WAI/WCAG21/quickref/)

## 🚀 Live Website

**Visit:** [https://josgarvil.github.io](https://josgarvil.github.io)

## 📋 Overview

This is a professional personal website for José García Villalón, a Perception & AI Engineer at CATEC. The website showcases professional experience, projects, publications, and provides a platform for professional networking and collaboration opportunities.

### ✨ Key Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Ready**: Complete meta tags, structured data, and social sharing
- **Accessible**: WCAG 2.1 compliant with keyboard navigation support
- **Interactive**: Smooth scrolling, animated counters, and form handling
- **Professional Sections**: Hero, About, Experience, Projects, Publications, Contact

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties and grid/flexbox layouts
- **JavaScript (ES6+)**: Vanilla JS with modern features and performance optimizations

### Libraries & Frameworks
- **AOS (Animate On Scroll)**: Smooth scroll animations
- **Font Awesome**: Professional icon library
- **Academicons**: Academic and research icons
- **Inter & JetBrains Mono**: Modern typography

### Development Tools
- **GitHub Pages**: Hosting and deployment
- **Git**: Version control
- **Modern Browser APIs**: Intersection Observer, Smooth Scrolling

## 📁 Project Structure

```
josgarvil.github.io/
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── .gitignore            # Git ignore rules
├── assets/
│   ├── css/
│   │   └── main.css      # Main stylesheet
│   ├── js/
│   │   └── main.js       # Main JavaScript file
│   └── img/              # Images and media files
│       ├── profile-hero.jpg
│       ├── about.png
│       ├── publications-*.png
│       └── favicon files
└── docs/                 # Additional documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#7c3aed` (Purple)
- **Accent**: `#f59e0b` (Amber)
- **Success**: `#10b981` (Emerald)
- **Text**: `#111827` (Gray-900)
- **Background**: `#ffffff` (White)

### Typography
- **Primary Font**: Inter (Modern sans-serif)
- **Monospace**: JetBrains Mono (Code and technical content)
- **Font Sizes**: Responsive scale from 0.75rem to 3.75rem

### Spacing System
- **Base Unit**: 0.25rem (4px)
- **Scale**: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
- **Responsive**: Adjusts based on screen size

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for development)
- Text editor (VS Code recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/josgarvil/josgarvil.github.io.git
   cd josgarvil.github.io
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start developing**
   - Edit HTML in `index.html`
   - Modify styles in `assets/css/main.css`
   - Update JavaScript in `assets/js/main.js`
   - Add images to `assets/img/`

### Deployment

The website is automatically deployed via GitHub Pages:

1. **Push changes to main branch**
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

2. **GitHub Pages will automatically deploy**
   - Changes are live within 1-2 minutes
   - Visit https://josgarvil.github.io to see updates

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive alternative text for images

## 🔧 Customization

### Adding New Sections

1. **HTML Structure**
   ```html
   <section id="new-section" class="section">
     <div class="container">
       <div class="section-header" data-aos="fade-up">
         <h2>Section Title</h2>
         <p>Section description</p>
       </div>
       <!-- Section content -->
     </div>
   </section>
   ```

2. **Navigation Link**
   ```html
   <a href="#new-section" class="nav-link">New Section</a>
   ```

3. **CSS Styling**
   ```css
   .new-section {
     /* Custom styles */
   }
   ```

### Updating Content

- **Personal Info**: Edit the hero section in `index.html`
- **Experience**: Update the experience timeline
- **Projects**: Modify project cards with new information
- **Publications**: Add new research and publications
- **Contact**: Update contact information and social links

### Styling Changes

- **Colors**: Modify CSS custom properties in `:root`
- **Fonts**: Update font imports and font-family declarations
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Customize AOS settings and CSS transitions

## 📊 Performance Optimizations

- **Optimized Images**: Compressed and properly sized images
- **Minified Assets**: Compressed CSS and JavaScript
- **Lazy Loading**: Images load as they enter viewport
- **Preloading**: Critical resources preloaded
- **Caching**: Proper cache headers for static assets
- **CDN**: External libraries loaded from CDN

## 🔍 SEO Features

- **Meta Tags**: Complete title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing metadata
- **Structured Data**: JSON-LD schema for search engines
- **Sitemap**: XML sitemap for search engine crawling
- **Semantic HTML**: Proper document structure

## 🧪 Testing

### Manual Testing Checklist

- [ ] All navigation links work correctly
- [ ] Responsive design on mobile, tablet, desktop
- [ ] Contact form submission (visual feedback)
- [ ] Smooth scrolling animations
- [ ] Loading screen functionality
- [ ] Back to top button
- [ ] Social media links
- [ ] External project links

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators visible
- [ ] Alt text for all images

### Performance Testing

- [ ] Page load speed < 3 seconds
- [ ] Images optimized and compressed
- [ ] No console errors
- [ ] Smooth animations (60fps)

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/improvement
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**José García Villalón**
- **Email**: [jgarcia@catec.aero](mailto:jgarcia@catec.aero)
- **LinkedIn**: [jose-garcia-villalon](https://www.linkedin.com/in/jose-garcia-villalon/)
- **GitHub**: [josgarvil](https://github.com/josgarvil)
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=6t8pEZMAAAAJ&hl=es)
- **Website**: [josgarvil.github.io](https://josgarvil.github.io)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio websites and professional developer sites
- **Icons**: Font Awesome and Academicons communities
- **Fonts**: Google Fonts (Inter) and JetBrains (JetBrains Mono)
- **Animation Library**: AOS (Animate On Scroll)
- **Hosting**: GitHub Pages

---

**Built with ❤️ by José García Villalón**

*Last updated: January 2024*
