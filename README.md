# Refyul - Skip the Fuel Queue Forever

A modern landing page for Refyul, a fuel and cooking gas delivery service in Lagos, Nigeria.

## 📁 Project Structure

```
REFYCL/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── main.js         # JavaScript functionality
├── image/
│   ├── logo.svg        # Refyul logo
│   └── refycl-heroImage.svg  # Hero section phone mockup
└── README.md           # This file
```

## 🎨 Design Features

- **Modern & Clean UI** - Built with Tailwind CSS
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Custom Branding** - Green color scheme matching the brand
- **Interactive Elements** - Smooth animations and hover effects
- **Social Proof** - Progress bar showing waitlist signups
- **Dual Phone Mockups** - Desktop view shows two phone screens

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom + Tailwind CSS)
- JavaScript (Vanilla)
- Inter Font (Google Fonts)

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## 🎯 Key Sections

### Header
- Sticky navigation bar
- Logo and brand name
- "Join the waitlist" CTA button

### Hero Section
- Compelling headline
- Descriptive subheading
- Two CTA buttons (Join waitlist & Learn how it works)
- Phone mockups showing the app interface
- Social proof with signup counter
- Progress bar showing waitlist status
- Special offer banner

### Footer
- Brand logo and name
- Copyright information

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config` (in `index.html`) and `css/styles.css`:
- `--brand-green`: #052e16 (Dark green)
- `--brand-green-light`: #15803d (Light green)
- `--brand-lime`: #a3e635 (Lime accent)
- `--brand-bg`: #f7fee7 (Background)

### Content
Edit text content directly in `index.html`:
- Update headlines in the hero section
- Modify button text and links
- Change social proof numbers

### Images
Replace images in the `image/` folder:
- `logo.svg` - Company logo
- `refycl-heroImage.svg` - Hero section mockup

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Features to Add

- [ ] Backend integration for waitlist signup
- [ ] Email validation
- [ ] Success/error message display
- [ ] Analytics tracking
- [ ] "How it works" section
- [ ] FAQ section
- [ ] Testimonials section
- [ ] Pricing information

## 📄 License

© 2025 Refyul. All rights reserved.

## 👥 Contact

For questions or support, please contact the Refyul team.

---

**Note**: This is a waitlist landing page. The actual app functionality would require backend development and mobile app creation.
