<!-- markdownlint-disable MD033 -->

<div align='center'>

# Amazon Cell Phones Reviews

🐱 _Scrape (un)locked cell phone ratings and reviews on Amazon_ 📱

![cat scraping](https://external-preview.redd.it/DcY7JAfrTsXBbXtXKm8QT5Se9vCJY1msnqsffy8zrWI.gif?width=625&height=327.22513089&s=fc6f16c85bf83319d8d8d2bd1bc69eb79c45479a)

</div>

## Features ✨

- Scrapes basic metadata with ratings and reviews
- Scrape all or specific brands
- Scrape unlocked, locked, or both cell phones
- Use multiple Puppeteer pages as _workers_

Read more on personalizing setting at the [configuration section](#configuration).

## Download Data 📫

You can download pre-scraped datasets at [Kaggle](https://kaggle.com/grikomsn/amazon-cell-phones-reviews).

## Manual Scrape 🔧

### Requirements 📃

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) (optional)

### Packages Used 📦

- [`puppeteer`](https://pptr.dev/) for browser-based scraping
- [`prettier`](https://prettier.io/) for formatting source codes
- [`ts-node`](https://github.com/TypeStrong/ts-node) for running TypeScript scripts

### Steps 👨‍🔬

#### Preparation

- Make sure the dependencies are downloaded by running `npm install` or `yarn`.
- (Optional) Copy `config.default.ts` (this file is ignored with git) to `config.ts` and customize config variables on `config.ts`.

#### Using Visual Studio Code

- Open the project directory in Visual Studio Code.
- Select and execute **Scrape Search Results** in the launch options on the Debug tab (exported to `./data/yyyymmdd-results.csv`).
- Then select and execute **Scrape Item Reviews** (exported to `./data/yyyymmdd-reviews.csv`).

#### Using Command Line

- Run `npm run scrape:items` or `yarn scrape:items` first to scrape initial item results (exported to `./data/yyyymmdd-results.csv`).
- Then run `npm run scrape:reviews` or `yarn scrape:reviews` to scrape item reviews (exported to `./data/yyyymmdd-reviews.csv`).

## Available Scripts 📝

- `scrape:items`

  Scrapes and saves entry results for review scraping.

- `scrape:reviews`

  Scrapes and saves entry reviews based on `scrape:items` data.

- `format`

  Format all `.ts` files.

- `format:data`

  Format `.json` files in `/data`.

## Configuration 🛠

- `brands` - `string[]`

  _Self explanatory._

  Defaults to ten major phone manufacturers, set to `[]` (empty array) to disable brand filtering and select all available brands.

  Note that by selecting all brands will not assign what brand it is, probably will implement this in future versions.

- `brandKeywords` - `{brand: string, keywords: string[]}`

  _Brand alternative names or keywords for brand assignment._

  Since the search page does not explicitly tell what brand it is, after scraping the results it determines from the items' URL and title by comparing `brands` and `brandKeywords` values.

- `categories` - `'unlocked' | 'locked' | 'both'`

  _Also self explanatory._

  Whether scrape unlocked, locked, or both categories. If both, workers will scrape unlocked results first then locked results.

- `numberOfWorkers` - `number`

  _Number of active 'workers' or pages to use for scraping._

  Note that Amazon's server will assume too many requests or workers as an unusual traffic and will return a captcha page instead of the intended result page

### Default Values

```ts
{
  brands: [
    'ASUS',
    'Apple',
    'Google',
    'HUAWEI',
    'Motorola',
    'Nokia',
    'OnePlus',
    'Samsung',
    'Sony',
    'Xiaomi',
  ],
  brandKeywords: [
    { brand: 'Apple', keywords: ['iPhone'] },
    { brand: 'Google', keywords: ['Pixel'] },
    { brand: 'HUAWEI', keywords: ['Honor'] },
    { brand: 'Motorola', keywords: ['Moto'] },
    { brand: 'Samsung', keywords: ['Haven'] },
    { brand: 'Sony', keywords: ['Xperia'] },
  ],
  categories: 'both',
  numberOfWorkers: 8,
}
```

## License 👮‍♂️

[CC0 1.0 Universal](./LICENSE)
