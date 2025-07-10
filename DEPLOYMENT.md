# Deployment Guide for Vercel

## 📋 Prerequisites

1. **GitHub Account**: You need a GitHub account to host your code
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (free tier available)
3. **Git installed**: Make sure Git is installed on your computer

## 🚀 Step-by-Step Deployment

### Step 1: Initialize Git and Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete psychologist portfolio website"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it something like "psychologist-portfolio"
   - Make it public or private (your choice)
   - Don't initialize with README (we already have one)

3. **Connect your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/psychologist-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import your project**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

3. **Configure deployment**:
   - Vercel will automatically detect that it's a Next.js project
   - No additional configuration needed!
   - Click "Deploy"

4. **Wait for deployment**:
   - Vercel will build and deploy your site
   - This usually takes 2-3 minutes

### Step 3: Access Your Live Website

Once deployed, Vercel will provide you with:
- A unique URL (like `https://psychologist-portfolio-username.vercel.app`)
- You can also connect a custom domain later

## 🛠️ Customization Before Deployment

Before deploying, you might want to customize:

1. **Replace placeholder content**:
   - Update doctor name, credentials, and contact info
   - Add real testimonials (with permission)
   - Update services and pricing
   - Add your professional photo

2. **Update contact information**:
   - Edit `/src/app/contact/page.tsx`
   - Update phone number, email, and address
   - Configure the contact form to send emails

3. **SEO optimization**:
   - Update meta descriptions in each page
   - Add your location and specialties
   - Consider adding structured data for Google

## 🔄 Updating Your Website

After deployment, any changes you push to GitHub will automatically trigger a new deployment:

```bash
git add .
git commit -m "Update services and testimonials"
git push origin main
```

## 📊 Analytics & Monitoring

Vercel provides built-in analytics:
- Visit your project dashboard on Vercel
- Click on "Analytics" to see visitor data
- Monitor performance and user behavior

## 🎯 Next Steps

1. **Custom Domain**: Connect your own domain (e.g., drsarahmitchell.com)
2. **Contact Form**: Set up form submission to receive emails
3. **Analytics**: Add Google Analytics for detailed insights
4. **Blog**: Consider adding a blog section for SEO
5. **Booking System**: Integrate with scheduling software

## 🔧 Troubleshooting

If you encounter issues:
- Check the Vercel deployment logs
- Ensure all files are committed to GitHub
- Verify that the build passes locally with `npm run build`

## 📞 Support

If you need help with deployment or customization, feel free to reach out!
