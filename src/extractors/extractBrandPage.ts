export default function extractBrand() {
  const $brand = document.querySelector('a#bylineInfo') as HTMLElement
  return $brand !== null ? $brand.innerText : undefined
}
