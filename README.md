# Sunday Awine — Academic Portfolio

A polished, mobile-friendly, **six-page academic website** built with plain HTML, CSS, and JavaScript. No paid hosting, npm dependencies, or build step is needed.

## Pages

- `index.html` — home with featured research, publications, and milestones
- `about.html` — background, education, research interests, academic service
- `publications.html` — searchable-by-category publication archive
- `research.html` — categorized research projects
- `achievements.html` — continuously expandable achievement timeline
- `contact.html` — professional profiles and CV

## Publish to GitHub Pages

1. Log in to [github.com](https://github.com) and note your **exact GitHub username**.
2. Create a **public** repository named **`YOUR-USERNAME.github.io`**, replacing `YOUR-USERNAME` with your username (lowercase).
3. Upload **the files and folders INSIDE this folder**, not the folder itself. At the root of your repository you should see `index.html`, `about.html`, `css/`, `js/`, and `assets/`.
4. Commit the files to your repository's **`main`** branch.
5. Open **Settings → Pages → Build and deployment**; choose **Deploy from a branch**, select **`main`** and **`/(root)`**, and save.
6. Once GitHub Pages finishes publishing, visit `https://YOUR-USERNAME.github.io`.

### Use a terminal instead of the browser

If you clone an empty Pages repository and place these files at its root:

```bash
git add .
git commit -m "Launch academic portfolio"
git push origin main
```

## Update your achievements (one file!)

Open **`js/content.js`** on GitHub, click the **pencil/Edit** icon, and add an item inside the `achievements` array. Keep the commas between objects:

```js
{
  year: 2027,
  date: "2027",
  category: "Publication",
  title: "My new paper accepted at [conference]",
  description: "Short, factual summary of the achievement.",
  link: "https://example.com/official-paper-link",
  featured: true
},
```

After saving (committing) the change, the **Achievements** page updates automatically. Items with `featured: true` can also appear on the homepage; the first four featured items are shown there, so put your most recent ones at the top of the array.

For a new paper, add a record in `publications`. For a new research project, add one in `projects`. All records in these arrays automatically appear on their matching page. If you want it highlighted on the home page, use `featured: true` for publications and projects.

### Add your professional links

In the `person` section at the top of `js/content.js`, set:

```js
email: "your-professional-email@domain.com",
github: "https://github.com/YOUR-USERNAME",
linkedin: "https://www.linkedin.com/in/YOUR-PROFILE/",
scholar: "https://scholar.google.com/citations?user=YOUR-ID",
orcid: "https://orcid.org/YOUR-ID",
cv: "assets/Sunday_Awine_CV.pdf",
profileImage: "assets/profile.jpg"
```

Upload your real CV as `assets/Sunday_Awine_CV.pdf` and your photo as `assets/profile.jpg` before setting those paths. Blank fields are hidden rather than linking to non-existent pages. When hosted at a standard `YOUR-USERNAME.github.io` address, the website can infer your GitHub profile if no GitHub link has been set.

**Important:** Use a professional public email if you want an email link. Do not add private identifiers, home addresses, or secrets.

## Add your exact publication titles

The initial publication records use accurate **venue-level placeholders** because the exact titles, author lists, and official DOIs were not available for every paper. Replace the generic `title` values with your **verified full paper titles**, adjust status/author role, and add a DOI or publisher link where available. Do not claim a paper is published when it is only accepted.

## Preview locally

Double-click `index.html` to open the website (it uses local JS files and needs no build step), or launch a simple server to test all pages:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Style customization

Change global colors, typefaces, spacing, and responsive layouts in `css/style.css`. The site currently uses a warm ivory / deep forest green palette, geometric research illustration, subtle motion, and high-contrast typography. Fonts are loaded from Google Fonts online, with system fallbacks available offline.

## Included features

- Six linked HTML pages, mobile navigation, and a custom 404 page
- Reusable card layouts with category filters
- Research illustration and responsive page design
- Keyboard-friendly navigation, descriptive labels, and reduced-motion support
- SEO page titles and descriptions
- No tracking, paid services, dependencies, or build steps

## Review before making public

The initial information was compiled from previously shared achievements. **Verify every claim, official venue spelling, authorship, and publication status before sharing it publicly.** Add exact papers and project repositories as they become available. GitHub Pages sites are public, so only publish information you are comfortable sharing.
