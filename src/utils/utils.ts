export const firstLetterUppercase = (item: string) => {
  if(typeof item !== 'string') return ''
  return item.charAt(0).toUpperCase() + item.slice(1)
}