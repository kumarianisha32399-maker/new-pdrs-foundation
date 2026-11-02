# NEW PDRS Foundation

# Premium Dynamic Portfolio Website – NEW PDRS FOUNDATION

Develop a premium, modern, realistic, fully responsive and dynamic portfolio website for **NEW PDRS FOUNDATION**, an education-focused foundation registered in Maharashtra, India.

The website must look like a professionally designed website for a genuine educational foundation, not a generic AI-generated template.

## 1. Technology Requirements (Strictly Follow)

- React.js
- Vite
- Tailwind CSS
- JavaScript (No TypeScript)
- React Hooks
- React Context API where needed
- LocalStorage for demo data persistence

**Important Restrictions:**
- Do not use Next.js.
- Do not use any backend technology.
- Do not use any database.
- Do not use Supabase or Firebase.
- Do not use external UI component libraries.
- Do not use unnecessary third-party libraries.
- Use mock data for all website content.
- Use browser LocalStorage to maintain admin changes across page refreshes.

Keep the project simple, clean, modular and easy to deploy.

## 2. Company Information

Use the following verified company details throughout the website.

**Business Name:** NEW PDRS FOUNDATION

**Business Activity:** Education

**Company Status:** Active

**Company Class:** Private

**CIN:** U85307MR2026NPL479427

**Date of Incorporation:** 06 August 2026

**ROC:** ROC Mumbai II

**Registered Address:**
Shop No. 6, Reshma Enclave, Nala, Vasai, Thane, Maharashtra – 401203, India.

**State:** Maharashtra

**District:** Thane

**City:** Vasai

**Country:** India

**Pincode:** 401203

Phone: Not provided

Email: Not provided

Website: To be configured.

Do not invent phone numbers, email addresses, awards, government affiliations, registrations, partnerships or achievements.

Where information is unavailable, hide the field or display an appropriate editable placeholder in the admin panel.

## 3. Design Direction and Color Palette

Create a premium educational foundation visual identity.

Use the following colors:

- Primary Navy Blue: #12345A
- Secondary Blue: #1D5B91
- Teal: #159C9A
- Warm Gold: #D8AC55
- Background: #F7F9FC
- White: #FFFFFF
- Main Text: #202C3B
- Muted Text: #697586

Design Style:
- Premium institutional appearance.
- Modern educational foundation branding.
- Clean typography and generous whitespace.
- Elegant cards with subtle shadows.
- Professional image compositions.
- Smooth hover effects.
- Subtle entrance animations.
- Consistent spacing and alignment.
- Premium buttons and section dividers.

Avoid excessive gradients, unnecessary animations, oversized rounded cards and artificial-looking graphics.

The website should communicate education, opportunity, learning, community development and social responsibility.

## 4. Website Structure – Separate Pages

Create separate functional pages with proper navigation.

### Page 1: Home

Create an impressive homepage with:

**Top Information Bar**
- Foundation name.
- Location: Vasai, Maharashtra.
- Contact information when configured by admin.

**Navigation Bar**
- Foundation logo.
- Home
- About Us
- Our Programs
- Our Initiatives
- Gallery
- Events
- Contact Us
- Donate / Support Us CTA

Make the navbar sticky and fully responsive.

**Hero Section**

Create a premium full-width hero banner with a large, authentic educational photograph.

Use images showing:
- Students learning in a classroom.
- Teachers guiding students.
- Educational activities.
- Community learning environments.

Headline:

"Building Brighter Futures Through Education"

Description:

"At NEW PDRS FOUNDATION, we believe education creates opportunities, empowers individuals and builds stronger communities."

Buttons:
- Discover Our Mission
- Explore Our Programs

Use a beautiful image overlay with navy blue accents.

**Additional Homepage Sections**
1. Welcome to NEW PDRS FOUNDATION.
2. Our Vision and Mission.
3. Education and Learning Initiatives.
4. Our Key Focus Areas.
5. Why Education Matters.
6. Our Impact – use clearly labelled illustrative demo statistics only.
7. Featured Activities and Gallery.
8. Latest News and Events.
9. Support Our Mission.
10. Contact CTA.
11. Professional footer.

### Page 2: About Us

Include:
- Foundation Overview.
- Who We Are.
- Our Story.
- Our Vision.
- Our Mission.
- Our Values.
- Our Objectives.
- Our Commitment to Education.

Create a professional two-column layout with relevant educational photography.

Do not present unverified history or accomplishments as established facts. All editable organization descriptions should be manageable through the admin panel.

### Page 3: Our Programs

Create dynamic program listing cards.

Include editable sample program categories such as:
- Educational Awareness.
- Learning Support.
- Student Development.
- Digital Learning Awareness.
- Community Education.
- Skill Development.

Each program card should include:
- Program image.
- Program title.
- Short description.
- Detailed information.
- Learn More button.

Create individual program detail pages.

All programs must be editable through the admin panel.

Clearly treat sample programs as illustrative demo content.

### Page 4: Our Initiatives

Create a dedicated page showcasing educational and community initiatives.

Include:
- Education Awareness Initiatives.
- Community Learning Activities.
- Student Empowerment.
- Digital Education Awareness.
- Educational Development.

Use professional photography and editorial-style layouts.

All initiative information must be dynamically manageable from the admin panel.

### Page 5: Gallery

Create a premium image gallery.

Features:
- Grid layout.
- Multiple distinct educational photographs.
- Classroom activities.
- Student learning.
- Community activities.
- Educational events.
- Image category filters.
- Image preview modal.
- Responsive gallery layout.

Admin must be able to add, edit, delete and categorize gallery images.

Use real, relevant, high-quality images rather than repeating the same image throughout the website.

### Page 6: Events & News

Create a dynamic events and news page.

Include:
- Upcoming Events.
- Recent Activities.
- Foundation News.
- Educational Awareness Events.
- Event Details.

Each event should contain:
- Event title.
- Date.
- Featured image.
- Description.
- Event category.
- Read More.

Admin must manage all events and news.

### Page 7: Contact Us

Create a professional contact page.

Include:
- Contact information.
- Registered office address.
- Contact form.
- Name.
- Email.
- Phone.
- Subject.
- Message.

Display the registered address:

Shop No. 6, Reshma Enclave, Nala, Vasai, Thane, Maharashtra – 401203, India.

Add a location/map section with an appropriately labelled address placeholder.

Form submissions should be stored in LocalStorage and visible in the admin dashboard.

Do not display fabricated contact information.

### Page 8: Support / Donate

Create a professional support page.

Include:
- Support Our Mission.
- Why Support Education?
- Ways to Contribute.
- Volunteer With Us.
- Contact for Support.

Do not implement real payment processing or claim that donations are tax-deductible.

Any sample donation options should be clearly presented as demonstration content until officially configured.

## 5. Admin Panel – Most Important Requirement

Build a complete, functional admin dashboard.

Create an admin login page at:

/admin/login

Demo credentials:

Username: admin

Password: Admin@123

Use mock authentication for this frontend-only demo.

After successful login, redirect to:

/admin/dashboard

### Admin Dashboard

Display:
- Total Programs.
- Total Initiatives.
- Total Gallery Images.
- Total Events.
- Total News Articles.
- Total Contact Messages.

Use dynamic counts based on LocalStorage data.

### Admin Modules

**1. Website Settings**
- Foundation name.
- Logo upload.
- Favicon.
- Contact details.
- Registered address.
- Social media links.
- Website description.
- SEO title and description.

**2. Homepage Management**
- Hero heading.
- Hero description.
- Hero background image.
- Hero buttons.
- About section.
- Vision and mission.
- Featured programs.
- Homepage sections visibility.

**3. About Us Management**
- Organization overview.
- Our Story.
- Mission.
- Vision.
- Objectives.
- Values.
- Images.

**4. Programs Management**
- Add program.
- Edit program.
- Delete program.
- Upload program image.
- Add description.
- Manage categories.
- Publish/unpublish.

**5. Initiatives Management**
- Add initiatives.
- Edit initiatives.
- Delete initiatives.
- Upload images.
- Manage descriptions.

**6. Gallery Management**
- Upload images.
- Add captions.
- Manage categories.
- Edit and delete images.
- Set featured images.

**7. Events Management**
- Create events.
- Edit events.
- Delete events.
- Manage dates.
- Upload event banners.
- Publish/unpublish.

**8. News Management**
- Add news.
- Edit news.
- Delete news.
- Manage featured images.
- Manage publication status.

**9. Contact Messages**
- View inquiries.
- Read full messages.
- Mark as read/unread.
- Delete messages.

**10. Testimonials Management**
- Add testimonials.
- Edit testimonials.
- Delete testimonials.
- Enable/disable display.

Use clearly identified sample testimonials until genuine testimonials are supplied.

**11. SEO Management**
- Page title.
- Meta description.
- Keywords.
- Open Graph image.
- SEO-friendly page content.

### Admin UI Requirements

- Professional sidebar navigation.
- Dashboard overview.
- Responsive admin layout.
- Search and filters.
- Add/Edit forms.
- Confirmation before deletion.
- Success and error notifications.
- Image preview before saving.
- Logout functionality.
- Protected admin routes within the demo application.

All CRUD operations must work using React state and LocalStorage.

Important: This is a frontend-only demonstration. Clearly distinguish mock authentication from production-grade security.

## 6. Image Requirements

Images are extremely important for this foundation website.

Use multiple distinct, high-quality, realistic images relevant to education and social development.

Required image categories:
1. Hero: Students learning in a bright classroom.
2. About Us: Teacher interacting with students.
3. Programs: Educational learning activities.
4. Initiatives: Community education activities.
5. Gallery: Different classroom and learning photographs.
6. Events: Educational seminars and activities.
7. Support: Students and educational resources.

Image guidelines:
- Use relevant, professional photographs.
- Use different images across sections.
- Do not repeat the same image everywhere.
- Maintain consistent image proportions.
- Use proper object-fit and responsive image handling.
- Add meaningful alt text.
- Provide fallback images if an image fails to load.
- Avoid broken image links.
- Use optimized image sizes.

## 7. Footer Design

Create a premium multi-column footer.

Column 1:
NEW PDRS FOUNDATION logo and short description.

Column 2:
- Home
- About Us
- Our Programs
- Our Initiatives

Column 3:
- Gallery
- Events
- News
- Contact Us

Column 4:
Registered Office Address and available contact information.

Also include:
- Social media links when configured.
- Copyright information.
- Privacy Policy.
- Terms & Conditions.

**Important: Add an Admin Login redirect link in the footer.**

Admin Login should navigate to /admin/login.

Display this exact development credit:

"Designed and development by SOSynch Ai Tech"

## 8. Functional Requirements

Make the entire website dynamic.

- Every navigation link must open its correct separate page.
- All buttons must have working actions.
- All forms must validate inputs.
- All admin CRUD operations must work.
- LocalStorage must preserve changes after refresh.
- Homepage content must reflect admin changes.
- Uploaded image previews must work.
- Search and filters must work.
- Responsive mobile navigation must work.
- Admin logout must work.
- Contact form submissions must appear in the admin panel.
- Empty states must look professional.
- Add proper loading and success feedback where appropriate.

## 9. Responsive Design

Ensure complete responsiveness on:
- Desktop.
- Laptop.
- Tablet.
- Mobile.

Special attention:
- Mobile navigation.
- Responsive hero section.
- Gallery grids.
- Program cards.
- Admin dashboard tables.
- Contact forms.

## 10. Deployment and Publishing Readiness

Prepare the project for deployment on Vercel or Netlify.

Requirements:
- Correct Vite configuration.
- Proper package.json scripts.
- Working production build.
- Correct routing and SPA fallback configuration.
- No broken internal links.
- No missing images.
- No console errors.
- No build errors.
- Verify all pages directly through their URLs.
- Verify the admin login and dashboard.
- Verify LocalStorage persistence.
- Verify mobile responsiveness.

Before completing:
1. Run npm install.
2. Run npm run build.
3. Fix all build errors.
4. Test the production preview.
5. Test every navigation route.
6. Test all admin CRUD operations.
7. Verify all image assets.
8. Provide clear Vercel/Netlify publishing instructions.
9. Explain how to configure and verify the final live website URL.

## 11. Final Quality Expectations

The final website must look like a genuine, premium educational foundation's official website.

Do not create a basic template or a generic AI-looking landing page.

Focus on:
- Professional institutional branding.
- Strong visual storytelling.
- Authentic educational imagery.
- Clean layouts.
- Meaningful content.
- Smooth interactions.
- Functional admin dashboard.
- Separate pages.
- Consistent design system.

Build the complete website, not just the homepage.

**Final instruction:** Prioritize a premium public-facing website and a fully functional mock admin management system. Keep all content editable, all demo data local, and the project ready for deployment.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fb904518-e2f3-4542-8176-9b955814b676).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
