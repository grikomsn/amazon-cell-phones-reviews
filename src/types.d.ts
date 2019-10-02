export type CarrierCategory = 'unlocked' | 'locked'

export interface BrandKeyword {
  brand: string
  keywords: string[]
}

export interface SearchResult {
  asin: string
  title: string
  url: string
  image: string
  rating: number
  reviewUrl: string
  totalReviews: number
  prices: string[]
  brand?: string
  category?: CarrierCategory
}

export interface SearchResultData {
  meta: {
    currentPage: number
    lastIndex: number
    totalPages: number
    totalResults: number
  }
  results: SearchResult[]
}

export interface Review {
  asin?: string
  brand?: string
  name: string
  rating: number
  date: string
  verified: boolean
  title: string
  body: string
  helpfulVotes?: number
}
