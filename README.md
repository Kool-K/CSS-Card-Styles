# 🎨 Client Decision Gallery: Product Card Collection

> **A responsive, modular collection of 25+ e-commerce product card designs. Built to help freelancers and developers present styling options to clients efficiently.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)

---

## 📖 About The Project

View cards here [Visit](https://kool-k.github.io/CSS-Card-Styles/)
As a freelancer, explaining "design vibes" to a client can be difficult. Do they want **Minimalist**? **Royal**? **Glassmorphism**?

This repository provides a **ready-to-deploy gallery of 25 distinct card styles**. You can upload this to GitHub Pages, send the link to your client, and let them choose the exact elements they like (for example:  
*"I like the border from Card #3, but the button from Card #11"*).

---

## 🌟 Key Features

- **25+ Unique Designs:**  
  Ranging from Amazon-style clean layouts to 3D flips, glassmorphism, and traditional aesthetics.

- **Pure HTML & CSS:**  
  No frameworks (React / Vue / Bootstrap) required. Easy to copy-paste into any project.

- **Fully Responsive:**  
  Optimized for mobile devices (where clients usually check links).

- **Themable:**  
  Built with CSS Variables for instant color scheme swapping.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/your-username/client-card-gallery.git
```

### 2. Add your product image
Place a sample product image in the root folder and name it `image.png`.

> **Tip:** Square or 4:3 aspect ratio images work best.

### 3. Open `index.html`
Open the file in your browser to view the gallery locally.

---

## 🎨 Customization (Theming)

The entire gallery is powered by **CSS Variables**.  
You can adapt the designs to any brand identity by changing just **4 lines of code** in `style.css`.

### Default Theme: *Sangli Creations (Authentic Indian Home Decor)*

```css
:root {
    /* Primary Brand Color (Buttons, Borders) */
    --sangli-maroon: #800020; 
    
    /* Secondary/Accent Color (Highlights, Icons) */
    --temple-gold: #C0B283; 
    
    /* Background Base (Paper/Card color) */
    --heritage-cream: #FDF5E6; 
    
    /* Text Color */
    --charcoal: #333333; 
}
```

### For a different client
Simply replace the hex codes in `:root` with your client’s brand colors.  
All **25+ cards will automatically update** to match the new theme.

---

## 📂 Included Styles

The gallery includes a wide variety of UI patterns:

- **Minimalist:**  
  Clean, whitespace-heavy designs (Option 1, 21)

- **Luxury / Dark Mode:**  
  High contrast for premium products (Option 4, 17, 25)

- **Glassmorphism:**  
  Modern frosted glass overlays (Option 11, 17)

- **Interactive:**  
  3D lifts, reveal animations, and hover effects (Option 7, 14, 23)

- **Traditional:**  
  Border-heavy designs suitable for heritage brands (Option 2, 3)

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup  
- **CSS3** — Flexbox, Grid, Animations, Variables  
- **Font Awesome** — UI icons (cart, arrows, hearts)  
- **Google Fonts** — Playfair Display (headings) & Lato (body)

---

## 🤝 Contributing

Got a cool card design idea?

1. Fork the project  
2. Create your feature branch  
   ```bash
   git checkout -b feature/AmazingCard
   ```
3. Add your card HTML to `index.html` and CSS to `style.css`  
4. Commit your changes  
   ```bash
   git commit -m "Add AmazingCard style"
   ```
5. Push to the branch  
   ```bash
   git push origin feature/AmazingCard
   ```
6. Open a Pull Request 🚀

---

## 👤 Author

**Ketaki Kulkarni**

- Portfolio: [View Portfolio](https://kool-k.github.io/Ketaki_Kulkarni_Portfolio/)
- GitHub: [@Kool-K](https://github.com/Kool-K)

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use these designs for **personal and commercial client work**.

See the `LICENSE` file for details.
