export interface Country {
  name: {
    common: string
    official: string
    nativeName: Record<string, object>
  }
}

export const getCountries = async (searchTerm: string): Promise<Country[] | { status: number }> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}?fields=name`)
  return await response.json()
}
