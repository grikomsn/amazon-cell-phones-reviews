import { Configuration } from './src/types'

export default {
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
  pageWorkers: 8,
} as Configuration
