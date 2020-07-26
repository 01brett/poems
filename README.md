## About

This app is an art project. The historical tweets of former Twitter spam bot [@horse_ebooks](https://twitter.com/horse_ebooks) provide the fodder for creating your own postmodern poetry. Once you've dialed in a suitably nonsensical collection of stanzas, you can save the poem to the database for easy sharing and retreival.

## Getting Started

### Install dependencies:

```bash
npm i
```

### Link up an Unbounded NoSQL db:

Create a free [Unbounded](https://unbounded.cloud) account to save poems. You'll need to create an `.env.local` file with the following keys from your account.

`UNB_EMAIL` is the email for your Unbounded account

`UNB_PW` is the API key for your Unbounded account

`UNB_DB` is the name of your db (your choice)

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
