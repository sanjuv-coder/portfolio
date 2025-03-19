# Modern Java Developer Portfolio

A sleek, minimalist portfolio website designed for Java developers, featuring a dark-themed UI with light mode toggle. Built with pure HTML, CSS, and JavaScript for optimal performance and simplicity.

![Portfolio Preview](assets/images/portfolio-preview.png)

## ✨ Features

- **Dark Mode First Design** - Elegant black-themed interface with light mode option
- **Responsive Layout** - Perfectly adapts to any device or screen size
- **Interactive UI Elements** - Subtle animations and transitions for enhanced user experience
- **Project Showcase** - Highlight your best Java projects with visual cards
- **Experience Timeline** - Visually represent your professional journey
- **Skills Matrix** - Display your technical expertise in an organized format
- **Contact Form** - Allow potential employers or clients to reach out easily
- **Zero Dependencies** - Built with vanilla HTML, CSS, and JavaScript - no frameworks required

## 🖥️ Preview

Visit the [live demo](#) to see the portfolio in action.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables and flexbox/grid layouts
- **JavaScript** - Interactive features and smooth animations
- **LocalStorage API** - Persist user theme preference

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML document
├── css/
│   └── styles.css          # All styles and theme variables
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── images/             # Project images and profile photo
│   └── icons/              # UI icons and favicons
└── README.md               # Project documentation
```

## 🎨 Design System

### Colors

```css
/* Dark Theme (Default) */
--background: #000000;      /* Main background */
--foreground: #ffffff;      /* Primary text */
--accent: #7c3aed;          /* Accent color (purple) */
--secondary: #1a1a1a;       /* Secondary background */
--muted: #666666;           /* Muted text */
--card-bg: #1a1a1a;         /* Card background */

/* Light Theme */
--background-light: #ffffff;
--foreground-light: #000000;
--accent-light: #6d28d9;
--secondary-light: #f5f5f5;
--muted-light: #737373;
--card-bg-light: #ffffff;
```

### Typography

- **Primary Font**: 'Inter', sans-serif
- **Heading Font**: 'Cal Sans', 'Inter', sans-serif
- **Base Size**: 16px (1rem)
- **Scale**: 1.25 (major third)

### Components

- **Cards** - Elevated containers with subtle hover effects
- **Buttons** - Primary (accent color) and secondary (subtle) variants
- **Timeline** - Vertical timeline with alternating content
- **Form Inputs** - Minimalist inputs with focus states
- **Navigation** - Fixed header with smooth scroll links

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/java-developer-portfolio.git
   ```

2. **Open in your browser**
   ```bash
   cd java-developer-portfolio
   # Open index.html in your preferred browser
   ```

3. **Customize the content**
   - Update personal information in `index.html`
   - Add your projects to the projects section
   - Modify the experience timeline
   - Update skills and expertise
   - Add your contact information

## 📝 Customization Guide

### Changing Personal Information

Edit the hero section in `index.html`:

```html
<section id="hero">
  <h1>Your Name</h1>
  <p>Java Developer specializing in...</p>
</section>
```

### Adding Projects

Add project cards to the projects grid:

```html
<div class="project-card">
  <img src="assets/images/project-thumbnail.jpg" alt="Project Name">
  <h3>Project Name</h3>
  <p>Brief description of the project and technologies used.</p>
  <div class="project-links">
    <a href="#" class="btn-secondary">View Demo</a>
    <a href="#" class="btn-secondary">Source Code</a>
  </div>
</div>
```

### Updating Experience

Add items to the timeline:

```html
<div class="timeline-item">
  <div class="timeline-date">2020 - Present</div>
  <div class="timeline-content">
    <h3>Senior Java Developer</h3>
    <h4>Company Name</h4>
    <p>Description of responsibilities and achievements...</p>
  </div>
</div>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Design inspired by [Vercel's V0](https://v0.dev)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by [Your Name](https://github.com/yourusername) 