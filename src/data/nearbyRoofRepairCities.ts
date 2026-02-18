export interface NearbyCityLink {
  slug: string;
  name: string;
}

export const nearbyRoofRepairCities: Record<string, string[]> = {
  'boca-raton': ['deerfield-beach', 'delray-beach', 'coral-springs', 'coconut-creek', 'pompano-beach'],
  'coral-springs': ['parkland', 'coconut-creek', 'tamarac', 'boca-raton', 'deerfield-beach'],
  'deerfield-beach': ['boca-raton', 'pompano-beach', 'coconut-creek', 'coral-springs', 'parkland'],
  'fort-lauderdale': ['pompano-beach', 'plantation', 'hollywood', 'lauderhill', 'deerfield-beach'],
  'pompano-beach': ['deerfield-beach', 'fort-lauderdale', 'coconut-creek', 'tamarac', 'boca-raton'],
  'delray-beach': ['boca-raton', 'boynton-beach', 'lake-worth', 'deerfield-beach', 'coral-springs'],
  'boynton-beach': ['delray-beach', 'lake-worth', 'wellington', 'west-palm-beach', 'boca-raton'],
  'west-palm-beach': ['lake-worth', 'wellington', 'boynton-beach', 'delray-beach', 'boca-raton'],
  'wellington': ['west-palm-beach', 'lake-worth', 'boynton-beach', 'delray-beach', 'boca-raton'],
  'lake-worth': ['west-palm-beach', 'boynton-beach', 'wellington', 'delray-beach', 'boca-raton'],
  'coconut-creek': ['coral-springs', 'deerfield-beach', 'parkland', 'pompano-beach', 'boca-raton'],
  'parkland': ['coral-springs', 'coconut-creek', 'deerfield-beach', 'boca-raton', 'tamarac'],
  'hollywood': ['fort-lauderdale', 'plantation', 'pompano-beach', 'lauderhill', 'deerfield-beach'],
  'plantation': ['fort-lauderdale', 'lauderhill', 'hollywood', 'tamarac', 'coral-springs'],
  'tamarac': ['coral-springs', 'lauderhill', 'plantation', 'coconut-creek', 'pompano-beach'],
  'lauderhill': ['plantation', 'tamarac', 'fort-lauderdale', 'coral-springs', 'hollywood']
};

export function getNearbyCities(citySlug: string, citiesData: any[]): NearbyCityLink[] {
  const nearbySlugs = nearbyRoofRepairCities[citySlug] || [];

  return nearbySlugs
    .map(slug => {
      const cityData = citiesData.find(c => c.slug === slug);
      return cityData ? { slug, name: cityData.city } : null;
    })
    .filter((city): city is NearbyCityLink => city !== null);
}
