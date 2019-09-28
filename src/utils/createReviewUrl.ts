export interface CreateReviewUrlProps {
  asin: string
  page?: number
}

export default function createReviewUrl({
  asin,
  page = 1,
}: CreateReviewUrlProps) {
  if (asin === undefined) {
    throw new Error('asin is not defined')
  }
  return `https://www.amazon.com/product-reviews/${asin}/?pageNumber=${page}`
}
