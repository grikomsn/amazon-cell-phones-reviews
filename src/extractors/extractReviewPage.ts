import { Review } from '../types'

export default function extractItemReviewPage() {
  let reviews = [] as Review[]
  const lineBreakRegex = /(\r?\n|\r)+/g

  document.querySelectorAll('.review').forEach(el => {
    const $name: HTMLElement = el.querySelector('.a-profile-name')
    const $rating: HTMLElement = el.querySelector('.review-rating')
    const $date: HTMLElement = el.querySelector('.review-date')
    const $reviewTitle: HTMLElement = el.querySelector('.review-title')
    const $reviewBody: HTMLElement = el.querySelector('.review-text')
    const $votes: HTMLElement = el.querySelector('.cr-vote-text')
    const $brand: HTMLAnchorElement = el.querySelector('.product-by-line>a')

    const extracted =
      $votes !== null ? /^([0-9]+|One)/.exec($votes.innerText)[1] : null

    const withHelpfulVotes = extracted
      ? { helpfulVotes: extracted === 'One' ? 1 : parseInt(extracted) }
      : {}

    const withBrand = $brand !== null ? { brand: $brand.innerText } : {}

    reviews.push({
      name: $name.innerText.trim(),
      rating: parseFloat(/^[0-9.]+/.exec($rating.innerText)[0]),
      date: $date.innerText.trim(),
      verified: el.querySelector("[data-hook='avp-badge']") !== null,
      title: $reviewTitle.innerText.replace(lineBreakRegex, ' ').trim(),
      body: $reviewBody.innerText.replace(lineBreakRegex, ' ').trim(),
      ...withHelpfulVotes,
      ...withBrand,
    })
  })

  return reviews
}
