# Omah Lay - Personal Brand Website

A modern, stylish personal website for Omah Lay (Brian Iseme) - Host, Event Planner, Influencer, and Marketer.

## Features

✨ **Modern Design** - Luxury nightlife aesthetic with black, gold, and dark purple color scheme
📱 **Fully Responsive** - Mobile-friendly design that works on all devices
🎨 **Smooth Animations** - Fade-in effects, hover animations, and smooth scrolling
⚡ **Interactive Elements** - Hamburger menu, form handling, and dynamic counters
🌐 **Professional Layout** - Clean sections for hero, about, gallery, music, socials, and contact

## Sections Included

1. **Navigation Bar** - Fixed navbar with smooth scrolling links and mobile menu
2. **Hero Section** - Eye-catching intro with tagline and call-to-action button
3. **About Section** - Bio and stats showcasing experience
4. **Gallery Section** - Grid layout for event photos and posters
5. **Music Section** - Music cards with download options
6. **Social Media** - Links to Instagram, TikTok, Facebook, and Twitter
7. **Contact/Booking** - Contact information and inquiry form
8. **Footer** - Copyright and credits

## Files

- `index.html` - Main HTML structure
- `style.css` - Complete styling with responsive design
- `script.js` - Interactive features and animations
- `README.md` - This file

## How to Use

### 1. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     npm run dev
     ```
   - Then navigate to `http://localhost:3000`
   - When deployed on Vercel, the free preview URL can be `https://superhost-omahlay.vercel.app` if you name the project `superhost-omahlay`

### 2. **Customize Contact Information**
   Edit the contact section in `index.html`:
   ```html
   <p>+254 700 000 000</p>  <!-- Change phone number -->
   <p>info@omahlay.com</p>   <!-- Change email -->
   <p>Nairobi, Kenya</p>     <!-- Change location -->
   ```

### 3. **Update Social Media Links**
   Find the social section and update the URLs:
   ```html
   <a href="https://instagram.com/your-handle" target="_blank">
   <a href="https://tiktok.com/@your-handle" target="_blank">
   <!-- etc. -->
   ```

### 4. **Upload Photos and Wallpapers**
   - Place your wallpaper and event photo files into `assets/photos/`.
   - Add entries to `content.json` in the `gallery` array, for example:
     ```json
     {
       "title": "Premium Wallpaper 1",
       "file": "assets/photos/wallpaper-1.jpg"
     }
     ```
   - To preview new content before updating the file, open the site with `?admin=true`:
     ```bash
     http://localhost:8000/index.html?admin=true
     ```
   - The admin panel helps generate JSON snippets for new uploads.

### 5. **Add Your Music Tracks**
   - Place your music files into `assets/music/`.
   - Add entries to `content.json` in the `music` array, for example:
     ```json
     {
       "title": "Super Host Anthem",
       "artist": "Omah Lay",
       "file": "assets/music/super-host-anthem.mp3"
     }
     ```
   - Use the admin panel to generate music JSON snippets and copy them into `content.json`.

### 6. **Update About Section**
   Modify the bio and stats to match your actual information:
   ```html
   <p>Hi, I'm <span class="highlight">Brian Iseme</span>...</p>
   <!-- Update stats numbers -->
   <h3>100+</h3>  <!-- Your actual number -->
   ```

## Customization Tips

### Colors
All colors are defined as CSS variables. Edit them in `style.css`:
```css
:root {
    --primary-dark: #0a0a0a;
    --secondary-dark: #1a1a2e;
    --accent-purple: #6f1d77;
    --accent-gold: #d4af37;
    --text-light: #f5f5f5;
    --text-muted: #b0b0b0;
}
```

### Fonts
The site uses "Segoe UI" by default. To change fonts, modify in `style.css`:
```css
body {
    font-family: 'Your Font', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Animations
Animation duration and effects can be tweaked in `script.js` and `style.css`:
- Fade-in animation: `fadeInUp` in CSS
- Counter speed: `duration: 1500` in JavaScript
- Scroll parallax effect: adjustable in `script.js`

## Image Resources

### Free Image Sites
- **Unsplash**: https://unsplash.com (nightlife, events, parties)
- **Pexels**: https://pexels.com (similar categories)
- **Pixabay**: https://pixabay.com
- **Unsplash Collections**: Search for "nightlife", "event", "party", "DJ", "club"

### Recommended Image Sizes
- **Hero Background**: 1920x1080px (or larger)
- **Gallery Items**: 400x300px or square (400x400px)
- **Music Icons**: Can use Font Awesome icons (already included)

## Deploying Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your three files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `yourname.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop your folder
3. Your site will be live instantly

### Option 3: Your Own Domain
- Use a hosting service like Bluehost, GoDaddy, or Namecheap
- Upload the files via FTP
- Point your domain to the host

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use compressed, web-optimized images
2. **Lazy Loading**: For many images, consider adding lazy loading
3. **Caching**: Enable browser caching on your server
4. **Minification**: Minify CSS and JavaScript for production

## Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure URLs are accessible
- Use absolute URLs (https://...) for external images

**Hamburger menu not working?**
- Check that JavaScript is enabled
- Verify `script.js` is linked correctly in HTML

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Del)
- Check that `style.css` is in the same directory
- Verify CSS file is linked in HTML

## Future Enhancements

- Add a blog section
- Integrate email service (Mailchimp, SendGrid)
- Add video testimonials
- Create a booking calendar
- Add dark/light mode toggle
- Integrate Spotify playlist
- Add event calendar

## License

This website template is created for personal branding use. Feel free to customize and deploy.

## Support

For issues or questions, check:
1. All file paths are correct
2. Internet connection (for CDN resources)
3. Browser console for errors (F12)
4. File encoding is UTF-8

---

**Created for:** Omah Lay (Brian Iseme)
**Theme:** Luxury Nightlife & Entertainment
**Version:** 1.0
**Last Updated:** 2024
