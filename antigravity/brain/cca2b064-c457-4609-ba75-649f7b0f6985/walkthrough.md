# Portfolio Website Walkthrough

I have successfully built and polished a premium, highly interactive, and responsive portfolio website for **Aswin Binu** in the directory: [portfolio](file:///C:/Users/aswin/.gemini/antigravity/scratch/portfolio).

This portfolio highlights your dual expertise in **performance marketing** (Meta Ads, lead generation, data analysis) and **computer science** (development, databases, analytics, AI-workflows).

---

## File Structure

The project has been built using clean, modular code:
- **[index.html](file:///C:/Users/aswin/.gemini/antigravity/scratch/portfolio/index.html)**: Semantic HTML5 document containing all sections, optimized for accessibility and SEO.
- **[styles.css](file:///C:/Users/aswin/.gemini/antigravity/scratch/portfolio/styles.css)**: Custom variables for dark/light themes, typography (Outfit & Inter), flex/grid layouts, dynamic micro-animations, glassmorphism, glowing accents, and responsiveness.
- **[script.js](file:///C:/Users/aswin/.gemini/antigravity/scratch/portfolio/script.js)**: Logic for theme-toggling, mobile menu, scroll spying, IntersectionObserver reveal animations, tab filtering for projects, search/filtering for certifications, gallery lightbox, and contact form handling with toast notifications.
- **Local Assets**:
  - `Profile.jpeg`: Your headshot (copied from your files).
  - `Resume.pdf`: Your resume (copied from your files, linked in the header/hero with a download capability).
  - `talent_perfume_creative.png`: Premium AI-generated perfume mockup for your gallery.
  - `jinus_academy_ad.png`: Premium AI-generated educational course mockup for your gallery.
  - `meta_ads_dashboard.png`: Premium AI-generated marketing analytics dashboard screenshot for your gallery.
  - `dental_clinic_ad.jpg`: Dentacare Dental Clinic Summer Checkup Campaign Ad.
  - `mango_pickle_ad.jpg`: Oh My Pickle Kannimaanga Achar Campaign Ad.
  - `fitness_club_ad.jpg`: DAS Fitness Club Health Awareness Promotion Poster.
  - `jinus_academy_malayalam_ad.jpg`: Jinu's Academy Malayalam News-Style Ad Banner.
  - `niks_salon_ad.jpg`: NIKS Salon Summer Glow D-Tan & Facial Ad Banner.
  - `jinus_academy_logo.png`: Jinu's Academy official branding logo for case study.
  - `talent_perfume_logo.png`: Talent Perfume official minimalist brand logo for case study.
  - `talent_perfume_legend_amber.jpg`: Talent Perfume - Legend Amber ad creative.
  - `talent_perfume_legend_green.jpg`: Talent Perfume - Legend Green ad creative.
  - `talent_perfume_combo_offer.jpg`: Talent Perfume Combo Offer ad creative.
  - `talent_perfume_premium_combo.jpg`: Talent Perfume Premium Combo Offer ad creative.
  - `talent_perfume_packaging.jpg`: Talent Perfume Premium Packaging ad creative.
  - `talent_perfume_caramel_pop.jpg`: Talent Perfume - Caramel Pop info-graphic ad creative.
  - `talent_perfume_ultra_ad.jpg`: Talent Perfume - Ultra Eau De Parfum ad creative.
  - `talent_perfume_legend_ad.jpg`: Talent Perfume - Legend Eau De Parfum ad creative.
  - `talent_perfume_malayalam_spray.jpg`: Talent Perfume - Malayalam hand spray ad creative.
  - `talent_perfume_kalabham_ad.jpg`: Talent Perfume - Kalabham traditional sandalwood Malayalam ad creative.
  - `talent_perfume_ultra_blue.jpg`: Talent Perfume - Ultra Malayalam ad campaign (Blue version).
  - `talent_perfume_ultra_red.jpg`: Talent Perfume - Ultra Malayalam ad campaign (Red version).
  - `talent_perfume_seduction.jpg`: Talent Perfume - Seduction Malayalam ad campaign.
  - `talent_perfume_men_collection.jpg`: Talent Perfume - Men Collection clones menu graphic.
  - `meta_ads_manager_dashboard.jpg`: Real Meta Ads Manager dashboard screenshot for Talent Perfumes.
  - `jinus_learning_book_performance.jpg`: Real Meta Ads dashboard snippet for Jinu's Easy Learning Book.

---

## Premium Features & Interactivity

### 1. Header & Scroll-Spy Navigation
- **Glassmorphic Navigation Bar**: Blurs the content behind it as you scroll.
- **Scroll-Spy**: Tracks your position on the page and automatically highlights the current active nav link.
- **Interactive Theme Switcher**: Animates when clicked, allowing visitors to switch seamlessly between Light and Dark mode. Theme selection is saved in `localStorage` so it persists on subsequent visits.
- **Responsive Mobile Toggle**: Hamburger menu that transforms into a close button ("X") on mobile views.

### 2. Hero & Quick Stats
- Custom layout presenting your photo inside a glass card with interactive animations.
- Quick statistical indicators highlighting your certifications, M.Sc Computer Science degree, AI marketing skills, and Meta Ads experience.

### 3. Integrated "About Me" & Skills
- Highlights your educational background (M.Sc & B.Sc in Computer Science) and presents a visual explanation of how programming skills enrich your performance marketing decisions.
- A grouped grid of your technical skills with visual hover transformations.

### 4. Interactive Projects & Case Studies Filter
- A tabbed controller letting visitors filter between **All Work**, **Marketing Campaigns (Case Studies)**, and **Tech & AI Projects**.
- Cards scale, fade, and rearrange dynamically with hardware-accelerated CSS transitions.

### 5. Advanced Certifications Filter & Search
- Since you have 15 prestigious certifications, listing them all as a static list is overwhelming.
- Added a **combining search and category system**:
  - Filter tabs for: **All**, **AI & GenAI**, **Data & Cloud**, and **Marketing**.
  - **Live Search Bar**: Filters certificates in real time based on certification title or issuer.
  - Shows a custom "No results found" placeholder if searches yield no matches.

### 6. Lightbox Gallery
- Interactive overlays on your portfolio images.
- Clicking any image opens a **Lightbox popup modal** displaying the asset in full size with overlay details and caption text. Pressing `Escape` or clicking outside the image closes it.

### 7. Modern Contact Form & Toast Notifications
- Inputs styled with floating labels that move up and shrink when active or focused.
- Form submits via JavaScript to prevent page reloading, validates fields, and triggers a custom slide-in **success toast notification**.

---

## How to Run & View Locally

1. Recommend setting the project folder as your active workspace:
   `C:\Users\aswin\.gemini\antigravity\scratch\portfolio`
2. Open **[index.html](file:///C:/Users/aswin/.gemini/antigravity/scratch/portfolio/index.html)** in any web browser to view, interact, and test.
