This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## About the App

This news aggregator application allows users to view the latest news from various sources in one place. It is built using Next.js and leverages server-side rendering for fast performance and SEO benefits. The app also includes features such as:

- User authentication
- Personalized news feeds
- Search functionality
- Responsive design

## Project Structure

The project structure is as follows:

```
/news-aggregator
  ├── src
  │   ├── api
  │   ├── const
  │   ├── lib
  │   ├── types
  │   ├── components
  │   │   ├── ArticleCard
  │   │   ├── ArticleModal
  │   │   ├── Header
  │   │   ├── NewsFeed
  │   │   ├── SearchAndFilter
  │   │   └── ui
  │   ├── app
  │   │   ├── api
  │   │   │   └── news
  │   │   │   │   ├── axiosInstance
  │   │   │   │   ├── route
  │   │   │   │   ├── service
  │   │   │   │   └── type
  │   │   ├── layout
  │   │   └── page
  ├── .gitignore
  ├── package.json
  └── README.md
```

- **.env.local**: Environment variables for local development.
- **docker-compose.yml**: Docker configuration file.
- **next.config.js**: Next.js configuration file.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project documentation.

## Running the Project with Docker

To build and run the project within a Docker container, follow these steps:

1. **Build the Docker image:**

    ```sh
    docker-compose build
    ```

2. **Run the Docker container:**

    ```sh
    docker-compose up
    ```

3. The application should now be running and accessible at `http://localhost:3000`.

4. **Stopping the Docker container:**

    To stop the running container, press `Ctrl+C` in the terminal where `docker-compose up` is running, or run:

    ```sh
    docker-compose down
    ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

```
API_KEY=your_api_key
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Running Tests

To run tests, use the following command:

```sh
npm run test
# or
yarn test
# or
pnpm test
```

This will execute all unit and integration tests located in the `/tests` directory.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
