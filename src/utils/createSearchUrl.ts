import qs from 'querystring'

export interface CreateSearchUrlProps {
  brands?: string[]
  page?: number
  unlocked?: boolean
}

export default function createSearchUrl({
  brands = [],
  page = 1,
  unlocked = true,
}: CreateSearchUrlProps) {
  // Featured Brands
  const p89 = brands.length > 0 ? ['p_89:'.concat(brands.join('|'))] : []

  const rhs = [
    'n:2811119011', // Cell Phones & Accessories
    unlocked
      ? 'n:2407749011' // Unlocked Cell Phones
      : 'n:2407748011', // Carrier Cell Phones
    ...p89,
    'p_72:1248882011', // 1 Star & Up
  ]

  const queries = {
    i: 'electronics-intl-ship',
    bbn: '16225009011',
    rh: rhs.join(','),
    page,
  }

  return `https://www.amazon.com/s?${qs.encode(queries)}`
}
