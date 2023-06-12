This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Debugging Errors

### A way for me to keep track of errors so I don't go fucking insane with this ticky-tack bullshit.

**Can't import module fs**:
  * Means modules were not imported correctly due to:
    * Incorrect path
    * Attempt to import server-side types into client-side (i.e. types from getPosts.js imported into notes.tsx)
    * https://stackoverflow.com/questions/70899450/nodejs-next-cannot-import-object-from-module-module-not-found-cant-resolve

**Clickable link area outside of text**:
  * Heading tag inside anchor tag
  * https://stackoverflow.com/questions/68015331/why-is-my-link-clickable-outside-the-linked-text
  * None of the above points were the issues. The issue was instead b/c of bad CSS styling in the `nav_header` style in Home.module.css. There was a field: `bottom: 10px`, which was taking up the entire left side and rendering the links on the left side unclickable. I used 'Inspect' to highlight the layout of each component on the page to find the problem.

## TODO
* Include a time-to-read section on each post
* Image header on each post (add image as a component and put it in MDX file -- HTML doesn't work with MDX, only JSX)
* Include tags (and search by tags once you have enough posts)
* Test and make sure it appears ok on mobile
* Deploy using Vercel (after writing a post or two and making sure it looks good)
