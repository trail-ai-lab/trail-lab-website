# TRAIL Web

Teachers with Responsible AI for Learning.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) (Or other package manager of your choice)
- [Git](https://git-scm.com/) (Optional, but recommended)

## Technologies Used

- [Next.js](https://nextjs.org/) — The React framework for production
- [shadcn/ui](https://ui.shadcn.com/) — Beautiful design components for modern web applications
- [Tailwind CSS](https://tailwindcss.com/) — A utility-first CSS framework for rapid UI development
- [TypeScript](https://www.typescriptlang.org/) — A typed superset of JavaScript that compiles to plain JavaScript

## Usage

### Development

To work on the project locally, ensure you have Node.js installed on your machine.

- Install dependencies:

```bash
npm install  # or `pnpm install` if you prefer pnpm
```

- Start the development server:

```bash
npm run dev  # or `pnpm run dev` if you prefer pnpm
```

- Open your browser and visit [`http://localhost:3000`](http://localhost:3000) to view the website locally.

### Production

To build the project for production deployment, run:

```bash
npm run build  # or `pnpm run build` if you prefer pnpm
```

The optimized production-ready assets will be generated in the `.next` directory. You can then host these files on a web server to make the website accessible online.

## Deployment

### Deploy to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

#### Prerequisites for Vercel Deployment

1. A [Vercel account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/cli) installed globally (optional but recommended)

#### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):

    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel**:

    ```bash
    vercel login
    ```

3. **Deploy from your project directory**:

    ```bash
    vercel
    ```

    Follow the prompts:
    - Set up and deploy your project? **Yes**
    - Which scope should contain your project? Choose your account/team
    - Link to existing project? **No** (for first deployment)
    - What's your project's name? Enter a name (e.g., `trail-lab-website`)
    - In which directory is your code located? **./** (current directory)
    - Want to modify the detected settings? **No** (Next.js settings are auto-detected)

4. **Deploy to production**:
    ```bash
    vercel --prod
    ```

#### Method 2: Deploy via Vercel Dashboard

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Import your project on Vercel**:
    - Go to [vercel.com/new](https://vercel.com/new)
    - Import your Git repository
    - Vercel will automatically detect it's a Next.js project

3. **Configure environment variables** (if needed):
    - In your Vercel dashboard, go to your project settings
    - Add environment variables under the "Environment Variables" section

4. **Deploy**: Vercel will automatically build and deploy your project

#### Environment Variables

If your project uses environment variables, make sure to set them in Vercel:

1. **Via Vercel CLI**:

    ```bash
    vercel env add VARIABLE_NAME production
    ```

2. **Via Vercel Dashboard**:
    - Go to your project settings
    - Navigate to "Environment Variables"
    - Add your variables for Production, Preview, and Development environments

#### Important Notes

- The project is configured to work with Vercel's serverless functions
- Static assets are automatically optimized and served via Vercel's CDN
- The build process includes TypeScript compilation and linting
- All routes are automatically handled by Next.js App Router

#### Troubleshooting Deployment Issues

If you encounter build failures:

1. **Check build logs** in Vercel dashboard or via CLI:

    ```bash
    vercel logs [deployment-url]
    ```

2. **Ensure all dependencies are listed** in `package.json`

3. **Verify environment variables** are properly set

4. **Test the build locally** before deploying:
    ```bash
    npm run build
    npm run start
    ```

For more detailed information, visit the [Vercel Documentation](https://vercel.com/docs).

## License

This project is licensed under the [MIT License](LICENSE).

---
