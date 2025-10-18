

## Project info

## How can I edit this code?

There are several ways of editing your application.


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages (CI/CD)

Every push to `main` runs the **Deploy static site** workflow located in `.github/workflows/deploy.yml`. The workflow:

1. Installs dependencies with `npm ci` and runs `npm run build`.
2. Executes the `postbuild` script (`scripts/generate-language-pages.mjs`) to duplicate `dist/index.html` into
   language-specific folders (`dist/en/index.html`, `dist/nl/index.html`) and create a `dist/404.html` fallback for
   client-side routing.
3. Uploads the entire `dist/` directory as the GitHub Pages artifact and publishes it via `actions/deploy-pages`.

#### One-time GitHub Pages setup

1. Open **Settings → Pages** in your repository.
2. Under **Build and deployment**, set the source to **GitHub Actions** (this enables the workflow above to serve your
   Pages site).
3. If prompted, allow GitHub Actions to deploy to GitHub Pages.

Once configured, deployments will appear under **Actions → Deploy static site** and the published site URL is listed in
the workflow summary (`https://<username>.github.io/<repo>/` for project sites, or `https://<username>.github.io/` for
user/organization sites). You can confirm which files were published by downloading the artifact— it will mirror the
local `dist/` structure that `npm run build` produces.

#### Customizing locales or paths

- Add or remove locale codes in `scripts/generate-language-pages.mjs` to control which language folders are exported.
- If you serve the site from a custom domain, the workflow first looks for a repository variable named `PAGES_CUSTOM_DOMAIN`,
  then for a `public/CNAME` file, and finally falls back to querying your repository's GitHub Pages settings. Any of these
  sources tells the deployment workflow to publish with `VITE_BASE_PATH=/`. When `/` is selected (either for a custom domain
  or a `*.github.io` user/organization site) the workflow now runs `scripts/verify-base-path.mjs` to ensure the generated
  `dist/index.html` references assets from the root and fails the deployment otherwise.
- The Vite base path is automatically set for GitHub Pages during CI, but you can override it locally by defining the
  `VITE_BASE_PATH` environment variable before running `npm run build` (for example, `VITE_BASE_PATH=/my-repo/ npm run
  build`).

