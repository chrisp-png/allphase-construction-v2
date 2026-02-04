/**
 * Geographic coordinates for service area cities
 * Used for LocalBusiness schema and "near me" search optimization
 */

export interface CityCoordinates {
  latitude: string;
  longitude: string;
  county: string;
}

export const CITY_COORDINATES: Record<string, CityCoordinates> = {
  // Broward County
  'Boca Raton': {
    latitude: '26.3683',
    longitude: '-80.1289',
    county: 'Palm Beach'
  },
  'Pompano Beach': {
    latitude: '26.2379',
    longitude: '-80.1248',
    county: 'Broward'
  },
  'Fort Lauderdale': {
    latitude: '26.1224',
    longitude: '-80.1373',
    county: 'Broward'
  },
  'Coral Springs': {
    latitude: '26.2706',
    longitude: '-80.2706',
    county: 'Broward'
  },
  'Deerfield Beach': {
    latitude: '26.3184',
    longitude: '-80.0998',
    county: 'Broward'
  },
  'Parkland': {
    latitude: '26.3101',
    longitude: '-80.2373',
    county: 'Broward'
  },
  'Coconut Creek': {
    latitude: '26.2517',
    longitude: '-80.1790',
    county: 'Broward'
  },
  'Margate': {
    latitude: '26.2445',
    longitude: '-80.2064',
    county: 'Broward'
  },
  'Hollywood': {
    latitude: '26.0112',
    longitude: '-80.1495',
    county: 'Broward'
  },
  'Davie': {
    latitude: '26.0765',
    longitude: '-80.2520',
    county: 'Broward'
  },
  'Plantation': {
    latitude: '26.1276',
    longitude: '-80.2331',
    county: 'Broward'
  },
  'Sunrise': {
    latitude: '26.1669',
    longitude: '-80.2999',
    county: 'Broward'
  },
  'Miramar': {
    latitude: '25.9873',
    longitude: '-80.3356',
    county: 'Broward'
  },
  'Pembroke Pines': {
    latitude: '26.0070',
    longitude: '-80.2962',
    county: 'Broward'
  },
  'Weston': {
    latitude: '26.1003',
    longitude: '-80.3997',
    county: 'Broward'
  },

  // Palm Beach County
  'Boynton Beach': {
    latitude: '26.5253',
    longitude: '-80.0664',
    county: 'Palm Beach'
  },
  'Delray Beach': {
    latitude: '26.4615',
    longitude: '-80.0728',
    county: 'Palm Beach'
  },
  'Wellington': {
    latitude: '26.6617',
    longitude: '-80.2683',
    county: 'Palm Beach'
  },
  'West Palm Beach': {
    latitude: '26.7153',
    longitude: '-80.0534',
    county: 'Palm Beach'
  },
  'Palm Beach Gardens': {
    latitude: '26.8234',
    longitude: '-80.1387',
    county: 'Palm Beach'
  },
  'Jupiter': {
    latitude: '26.9342',
    longitude: '-80.0942',
    county: 'Palm Beach'
  },
  'Lake Worth Beach': {
    latitude: '26.6156',
    longitude: '-80.0517',
    county: 'Palm Beach'
  },
  'Royal Palm Beach': {
    latitude: '26.7084',
    longitude: '-80.2303',
    county: 'Palm Beach'
  },
  'Greenacres': {
    latitude: '26.6276',
    longitude: '-80.1353',
    county: 'Palm Beach'
  },
  'Lantana': {
    latitude: '26.5868',
    longitude: '-80.0520',
    county: 'Palm Beach'
  },
  'Palm Beach': {
    latitude: '26.7056',
    longitude: '-80.0364',
    county: 'Palm Beach'
  },
  'Palm Beach Shores': {
    latitude: '26.7762',
    longitude: '-80.0364',
    county: 'Palm Beach'
  },
  'North Palm Beach': {
    latitude: '26.8187',
    longitude: '-80.0589',
    county: 'Palm Beach'
  },
  'Hypoluxo': {
    latitude: '26.5668',
    longitude: '-80.0542',
    county: 'Palm Beach'
  }
};

/**
 * Get city coordinates by name
 */
export function getCityCoordinates(cityName: string): CityCoordinates | undefined {
  return CITY_COORDINATES[cityName];
}

/**
 * Get all cities in a specific county
 */
export function getCitiesByCounty(county: 'Broward' | 'Palm Beach'): string[] {
  return Object.entries(CITY_COORDINATES)
    .filter(([_, coords]) => coords.county === county)
    .map(([cityName, _]) => cityName);
}
