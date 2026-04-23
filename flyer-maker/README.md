# 🎨 Business Flyer Maker

A professional, easy-to-use web application for creating beautiful business promotion flyers in minutes!

## ✨ Features

### **Home Page**
- 🎯 Personalized greeting with **62px font size** displaying "Hello, [Your Name]"
- Easy name entry via modal dialog
- Saved user preferences using browser local storage
- Quick access to flyer editor

### **Flyer Templates** (5 pre-designed + Blank)
1. 🍽️ **Restaurant** - Food promotions with discounts
2. 💅 **Salon** - Beauty services and special offers
3. 🏠 **Real Estate** - Property listings and details
4. 🔧 **Services** - Professional services (plumbing, electrical, HVAC)
5. 🎉 **Promotions** - General business promotions and offers

### **Editing Features**
✅ **Drag-and-Drop Editor** - Move any element freely on the flyer  
✅ **Add Custom Text** - With customizable font sizes and colors  
✅ **Upload Images** - Add logos, photos, and graphics  
✅ **Orientation Modes** - Portrait (8.5" x 11") or Landscape (11" x 8.5")  
✅ **Color Palette** - Red (#FF0000), Light Blue (#ADD8E6), White (#FFFFFF)  
✅ **Font Customization** - Font size slider (12px - 72px) and color picker  
✅ **Element Deletion** - Remove unwanted elements with one click  

### **Export Options**
📄 **Download as PDF** - Print-ready professional format  
📷 **Download as PNG** - Share on social media and emails  

## 📂 File Structure

```
flyer-maker/
├── index.html          # Main HTML interface
├── styles.css          # Complete styling
├── script.js           # All interactive functionality
├── templates.js        # Pre-designed templates
└── README.md          # This file
```

## 🚀 How to Use

### 1. **Getting Started**
- Open `flyer-maker/index.html` in your web browser
- Enter your name in the greeting (optional but recommended!)
- Click **"Start Creating"** to begin

### 2. **Choose a Template**
- Select from 6 pre-made templates or start with a blank flyer
- Each template comes pre-populated with sample content

### 3. **Edit Your Flyer**
- **Add Text**: Type in the text box and click "Add Text"
- **Add Images**: Click "Add Image" and select from your computer
- **Reposition**: Drag and drop any element on the flyer
- **Customize Colors**: 
  - Background: Choose from Red, Light Blue, or White
  - Text: Use the color picker for custom text colors
  - Font Size: Use the slider to adjust text sizes (12px - 72px)
- **Delete Elements**: Hover over any element and click the "×" button

### 4. **Change Orientation**
- Switch between **Portrait** and **Landscape** modes anytime
- Canvas automatically adjusts to your selection

### 5. **Download Your Flyer**
- Click **"Download PDF"** for printing
- Click **"Download PNG"** for digital sharing
- Use **"Reset"** to clear everything and start over

## 🎨 Color Palette

The application uses a professional 3-color palette:

| Color | Hex Code | Use Case |
|-------|----------|----------|
| 🔴 Red | #FF0000 | Headlines, CTAs, Emphasis |
| 🔵 Light Blue | #ADD8E6 | Secondary text, Accents |
| ⚪ White | #FFFFFF | Background, Clean design |

## 💡 Tips for Best Results

1. **Layout**: Leave margins (30px from edges) for proper printing
2. **Hierarchy**: Use larger fonts for headlines, smaller for details
3. **Images**: Use high-quality images for professional appearance
4. **Text**: Keep text concise and impactful
5. **Contrast**: Ensure good color contrast for readability
6. **Size**: Test your flyer in both orientations

## 🔧 Technical Details

- **No Backend Required** - Runs entirely in the browser
- **No Database** - Uses browser local storage for user preferences
- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **Responsive Design** - Works on desktop and tablet devices
- **Export Libraries**: Uses html2pdf.js and html2canvas for downloads

## 📋 Templates Included

### Restaurant Template
- "SPECIAL OFFER" headline with 50% discount
- Customizable meal offers
- Business location and contact information

### Salon Template
- "BEAUTY SALON" branding
- "Grand Opening Special" messaging
- Services list with 40% discount offer
- Professional contact details

### Real Estate Template
- "DREAM HOME WAITING" headline
- Property price prominently displayed
- Key features (BHK, Sq.Ft, Location)
- Agent contact information

### Services Template
- "PROFESSIONAL SERVICES" branding
- Service categories (Plumbing, Electrical, HVAC)
- 25% monthly discount offer
- Key service highlights
- 24/7 contact availability

### Promotions Template
- "LIMITED TIME OFFER" headline
- "UP TO 60% OFF" emphasis
- Time-sensitive messaging
- Free shipping information
- Website/store link

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Opera (Latest)

## 📝 Notes

- User names are saved in browser local storage
- Flyer data is not saved (create it fresh each time or export as PDF/PNG)
- All editing is done in the browser - no data sent to servers
- Works offline after initial load

## 🎯 Future Enhancements

Potential features to add:
- Save/Load flyer designs
- More template options
- Font family selection
- Shape and design elements
- Undo/Redo functionality
- Team collaboration features

---

**Happy Flyer Creating! 🎨**

For support or questions, please contact the development team.
