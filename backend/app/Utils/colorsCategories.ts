const colorsCategories = [
    'primary',
    'dark',
    'success',
    'warning',
    'danger',
    'info'
] as const
  
type ColorsCategories = typeof colorsCategories[number]
  
export { colorsCategories, ColorsCategories }