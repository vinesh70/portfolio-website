# Content Inventory — Vinesh Ryapak Portfolio
*Source of truth for the redesign. Any change to wording, links, or images must be flagged.*

---

## Page Meta

| Field | Value |
|-------|-------|
| `<title>` | Vinesh Ryapak \| Software Engineer & AI Enthusiast |
| `<meta description>` | Vinesh Ryapak — Software Engineer at Deloitte USI, Full-Stack Developer & AI Enthusiast based in Mumbai, India. |
| `og:title` | Vinesh Ryapak \| Software Engineer & AI Enthusiast |
| `og:description` | Software Engineer at Deloitte USI · Full-Stack Developer · AI Enthusiast · Mumbai, India. |
| Favicon (SVG) | images/favicon.svg |
| Favicon (PNG fallback) | images/favicon1.png |

---

## Navigation

| Label | Anchor |
|-------|--------|
| Home | `#home-section` |
| About | `#about-section` |
| Resume | `#resume-section` |
| Projects | `#project-section` |
| Contact | `#contact-section` |

Brand link: `index.html` → "Vinesh Ryapak"

---

## 1. Hero Section (`#home-section` implied, `hero-wrap`)

| Element | Content |
|---------|---------|
| Subheading badge | "Hey! I am" |
| H1 | **Vinesh Ryapak** |
| Rotating prefix | "I like" |
| Typed-rotate phrases (12 total) | "Coding.", "Software Development.", "Data Science.", "Machine Learning.", "Full Stack Development.", "Problem Solving.", "Building AI Agents.", "Dancing.", "doing Deep Research.", "Late Night Coding.", "Exploring Tech.", "Building Cool Stuff." |
| Rotate period | 2000 ms |
| Scroll-down indicator | Three animated spans (decorative) |

---

## 2. About Section (`#about-section`)

| Field | Value |
|-------|-------|
| Section heading | About Me |
| Subtext | "Here's a little about me" |
| Profile photo | images/vinesh_passport.jpg |
| Photo alt | "Vinesh Ryapak" |
| Name | Vinesh Ryapak |
| Email | vineshryapak1234@gmail.com |
| Phone | +91 7021448700 |
| Country | India |
| City | Mumbai |
| CTA button | "Download Resume" (triggers `downloadResume()` via html2pdf.js) |

---

## 3. Resume Section (`#resume-section`)

### Tab Nav
| Tab label | Anchor |
|-----------|--------|
| Education | `#page-1` |
| Experience | `#page-2` |
| Skills | `#page-3` |

### Education (`#page-1`)

| # | Institution | Qualification | Subject | Dates |
|---|-------------|--------------|---------|-------|
| 1 | Vidyalankar Instiute of Technology *(sic — typo in HTML)* | Bachelor of Engineering | Information Technology | 2021–2025 |
| 2 | S.I.E.S College of Arts, Commerce & Science | Jr. College | 11th & 12th | 2019–2021 |
| 3 | K.M.S English Medium School | School | Science | 2019 Passout |

> **Flag:** "Vidyalankar Instiute" is misspelled (missing 't'). Do not fix without confirmation.

### Experience (`#page-2`)

| # | Title | Organisation | Date | Bullet points |
|---|-------|-------------|------|---------------|
| 1 | Software Engineer 1 | @ Deloitte USI — CDAO Analytics | Sep 2025 – Present *(Analyst Trainee → SE1 · Jun 2026)* | (1) Build and maintain enterprise data preparation pipelines, transforming raw datasets into clean, structured formats for analytics and reporting. (2) Collaborate with cross-functional CDAO teams to ensure data quality, consistency, and timely delivery aligned with business requirements. (3) Promoted from Analyst Trainee to Software Engineer 1 within 9 months based on delivery performance. |
| 2 | Data Science Intern | @ Cognitio Knowledge Tech Pvt Ltd | December 2023 – July 2024 | (1) Managed data preprocessing, algorithm testing, and backend development. (2) Implemented Flask app for patient-driven chest X-ray report generation. (3) Ensured building of an seamless ML model integration. |
| 3 | Participant | @ Nirmal Hackathon | 2nd May 2024 | (1) Led a 24-hour sprint for "Automatic Radiology Report Generation". (2) Integrated WebDev and ML; enhanced technical skills and teamwork through project refinement and feedback. |
| 4 | Volunteer | @ N.S.S (National Service Scheme) | Jun 2022 – May 2024 | (1) Participated in diverse community service initiatives focusing on welfare, education, healthcare, conservation. (2) Engaged in a 7-day camp in Mulgoan Village, facilitating workshops, street plays, and cultural events. |

### Skills (`#page-3`)

**Row 1:** JavaScript, NodeJS, React, HTML, CSS, Bootstrap  
**Row 2:** C++, C, Mongo DB, FireBase, Java, Python  
**Row 3:** LangChain, LangGraph, Strands AI, RAG, AWS  

All skills are displayed as logo images from `images/skills/`.

| Skill | File |
|-------|------|
| JavaScript | skills/javascript.png |
| NodeJS | skills/node.png |
| React | skills/react.png |
| HTML | skills/html.png |
| CSS | skills/css.png |
| Bootstrap | skills/bootstrap.png |
| C++ | skills/cplusplus.png |
| C | skills/c.png |
| Mongo DB | skills/mongo.png |
| FireBase | skills/firebase.png |
| Java | skills/java.png |
| Python | skills/python.png |
| LangChain | skills/langchain.svg |
| LangGraph | skills/langgraph.svg |
| Strands AI | skills/strands.svg |
| RAG | skills/rag.svg |
| AWS | skills/aws.svg |

---

## 4. Certifications Section (`#certifications-section`)

### Section header
- Eyebrow: "CREDENTIALS"
- H2: "Certifications"

### Cards

| # | Issuer | Name | Code | Credly URL |
|---|--------|------|------|------------|
| 1 | Amazon Web Services | AWS Certified Cloud Practitioner | CLF-C02 | https://www.credly.com/badges/8f0f9536-0a10-463a-ad37-a1cf8c028efd/public_url |
| 2 | Anthropic | Claude AI Developer Foundations | Developer Certification | https://www.credly.com/badges/2ac1748d-568f-4a10-97b2-d3dfae0bef84/public_url |
| 3 | Google Cloud | Professional Cloud Architect | Enterprise Deployment | https://www.credly.com/badges/025ddef9-cab1-4e78-a52b-2262e19116f0/public_url |

All cards show "Verified Credential" indicator.  
All logos are inline SVG (no external images).

---

## 5. Projects Section (`#project-section`)

| # | Name | Tech tags | Description | Live link |
|---|------|-----------|-------------|-----------|
| 1 | CineMatch | NLP • PorterStemmer • Streamlit | "CineMatch is an innovative movie recommendation system designed to enhance your viewing experience by suggesting movies tailored to your preferences. Leveraging advanced Natural Language Processing (NLP) techniques, CineMatch analyzes movie plots, genres, keywords, and cast details to provide personalized recommendations." | https://cinematch-your-personalized-movie-guide-vinesh-70.streamlit.app/ |
| 2 | EmpManage Pro | React • Mongodb • Express | "Developed EmpManage Pro, an Employee Management System using React, Express, and MongoDB with full CRUD functionality and React-Toastify notifications. Deployed on Firebase, Render, and MongoDB Atlas." | https://ems-app-vinesh-90.web.app/ |
| 3 | Diabetes Prediction System | HTML • CSS • Flask • ML | "Achieved stellar accuracies in diabetes prediction: Logistic Regression, SVM, and Linear Regression at 100%, with KNN at 75%. Developed a Flask app using Logistic Regression with preprocessing including one-hot encoding and MinMaxScaler." | https://vinesh100.pythonanywhere.com/ |
| 4 | CryptoVista | React • Axios | "Developed CryptoVista, a responsive React application for real-time oxyptocurrency tracking using CoinGecko API. Implemented filtering functionality and integrated responsive design to optimal user experience across devices" | https://crypto-vista-vinesh-90.web.app/ |
| 5 | FireAuthConnect | React • Firebase | "AuthGuard is a React and Firebase-based authentication system featuring Signup, Login, Home, About, Forgot Password, Change Password, and a Nodemailer-powered Contact Us form. Deployed on Firebase, it ensures secure and seamless user management." | https://auth-app-24-9c772.web.app/ |
| 6 | Mailguard Spam Detection | MNB Classifier • Streamlit | "MailGuard is an intelligent spam detection tool that classifies emails as spam or ham using a Multinomial Naive Bayes model. Built with Streamlit, it leverages natural language processing techniques for text cleaning and feature extraction." | https://mailguard-intelligent-spam-detection-vinesh70.streamlit.app/ |

> **Flag (content):** "oxyptocurrency" in CryptoVista description is a typo for "cryptocurrency". Do not fix without confirmation.

---

## 6. Contact Section (`#contact-section`)

### Left column
- Eyebrow: "GET IN TOUCH"
- H2: "Contact Me"

| Card | Label | Value | Link |
|------|-------|-------|------|
| Phone | PHONE | +91 7021448700 | tel:+917021448700 |
| Email | EMAIL | vineshryapak1234@gmail.com | mailto:vineshryapak1234@gmail.com |
| LinkedIn | LINKEDIN | vinesh-ryapak-73693a227 | https://www.linkedin.com/in/vinesh-ryapak-73693a227/ |

### Form
- **Action:** POST to `https://formsubmit.co/vineshryapak1234@gmail.com`
- **Hidden fields:**
  - `_subject`: "New message from your portfolio"
  - `_honey`: honeypot (hidden, tabindex=-1, autocomplete=off)
- **Visible fields:**

| Field id | Label | Name attr | Type | Placeholder | Required |
|----------|-------|-----------|------|-------------|---------|
| contact-name | YOUR NAME | name | text | "Your name" | yes |
| contact-email | EMAIL ADDRESS | email | email | "hello@example.com" | yes |
| contact-message | MESSAGE | message | textarea | "Tell me about your project..." | yes |

- **Submit button:** "Send Message →"

---

## 7. Footer (`ftco-footer`)

### "About" column
- Heading: "About"
- Text: "I like working with new tools and technologies"
- Social links label: "Social Links"

| Platform | URL |
|----------|-----|
| GitHub | https://github.com/vinesh70 |
| Stack Overflow | https://stackoverflow.com/users/23440328/vinesh-ryapak |
| Instagram | https://www.instagram.com/vinesh_ig?igsh=MTdtYXAzZzVwejFiYg== |

### "Links" column
- Heading: "Links"
- Items: Home, About, Resume, Projects, Contact (all in-page anchors)

### "Have a Question?" column
- Heading: "Have a Question?"
- Phone: +91 7021448700
- Email: vineshryapak1234@gmail.com

### Bottom bar
- Copyright line with dynamic year via `document.write(new Date().getFullYear())`
- Three `icon-heart` icons (decorative)

---

## 8. Resume PDF Block (`#pdf-resume-wrap` / `#pdf-resume`)

Hidden div rendered off-screen and captured by html2pdf.js.

### Sidebar
- Monogram: VR
- Name: Vinesh Ryapak
- Title: Software Engineer I · AI & Full-Stack
- Email: vineshryapak1234@gmail.com
- Phone: +91 9820 596 491 *(different from site — +91 7021448700)*
- Location: Mumbai, India
- GitHub: github.com/vinesh70
- LinkedIn: linkedin.com/in/vinesh-ryapak

**Skills:**
- Languages: Python · JavaScript · TypeScript · Java
- Frontend: React.js · Next.js · HTML/CSS · Bootstrap
- AI & ML: LangChain · LangGraph · Strands AI · RAG · scikit-learn · NLP
- Cloud & DB: AWS · MongoDB · Firebase · SQL · Git

**Certifications (sidebar):** AWS CLF-C02, Claude AI Developer Foundations, GCP Professional Cloud Architect

**Education (sidebar):**
- 2021–2025: Vidyalankar Inst. of Technology — B.E. — Information Technology
- 2019–2021: Thakur College of Sci. & Commerce — HSC — Science · 93.2%
- 2019: Our Lady of Remedy High School — SSC · 94.4%

> **Flag (phone mismatch):** PDF sidebar has "+91 9820 596 491", site About section shows "+91 7021448700". Confirm which is correct.
> **Flag (PDF schools differ from resume tab):** PDF has Thakur College & Our Lady of Remedy; visible resume tab shows S.I.E.S College & K.M.S English Medium School.

### Main column
- Name: Vinesh Ryapak
- Title: Software Engineer 1 · AI & Full-Stack Developer

**Work Experience:**
1. Software Engineer 1 — Deloitte USI · CDAO Analytics | Sep 2025–Present
   - Engineer scalable ETL pipelines on the CDAO Analytics team, transforming raw enterprise datasets into analytics-ready formats for BI and reporting dashboards.
   - Build AI agent workflows using LangChain, LangGraph, Strands AI, and RAG pipelines to automate research and information retrieval for internal tooling.
2. Data Science Intern — Cognitio Analytics Pvt. Ltd. | Dec 2023–Jul 2024
3. Hackathon Winner — Nirmal (National Level) — NLP Spam Detection · Top 10 Nationally | May 2024

**Projects (PDF):** CineMatch, EmpManage Pro, Diabetes Prediction, CryptoVista

---

## Behaviours That Must Keep Working

| Behaviour | Mechanism |
|-----------|-----------|
| Download Resume | `downloadResume()` → shows `#pdf-resume-wrap`, captures `#pdf-resume` with html2pdf.js, downloads as `Vinesh_Ryapak_Resume.pdf` |
| Contact form submission | POST to formsubmit.co with `_honey` honeypot field intact |
| Rotating typed text in hero | `TxtRotate` class in `main.js`, reads `data-rotate` attribute |
| Resume tab navigation | `#navi` sidebar, smooth-scroll to `#page-1`, `#page-2`, `#page-3` |
| In-page nav | Five anchor links in `<nav>` |

---

## Items Flagged (do not change without confirmation)

1. **Fiverr link** `https://fiverr.com/ahsankhan26` — present in a *commented-out* block (`<!-- ftco-hireme -->`). Already disabled; no action needed unless you want it removed from source.
2. **Duplicate jQuery:** `js/jquery.min.js` (loaded by HTML) + `js/jquery-3.2.1.min.js` (unused).
3. **Unused files:** `contact.php`, `PHPMailer/` directory.
4. **Phone mismatch:** About section = +91 7021448700; PDF resume sidebar = +91 9820 596 491.
5. **School mismatch:** Visible resume tab vs PDF resume sidebar list different institutions.
6. **Typo in HTML:** "Vidyalankar Instiute" (missing 't').
7. **Typo in Projects:** "oxyptocurrency" in CryptoVista description.
8. **Plain-text contact info:** Phone and email are scrapable. Optional obfuscation available on request.
9. **Email is personal Gmail:** vineshryapak1234@gmail.com — handled separately per your note.
