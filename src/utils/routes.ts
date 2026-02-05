export interface RouteDefinition {
  path: string;
  name: string;
  indexable?: boolean;
}

export interface RouteGroup {
  title: string;
  routes: RouteDefinition[];
}

export const siteRoutes: RouteGroup[] = [
  {
    title: 'Home',
    routes: [
      { path: '/', name: 'Home' },
    ],
  },
  {
    title: 'Roofing Services',
    routes: [
      { path: '/residential-roofing', name: 'Residential Roofing' },
      { path: '/roof-replacement-process', name: 'Roof Replacement Process' },
      { path: '/commercial-roofing', name: 'Commercial Roofing' },
      { path: '/tile-roofing', name: 'Tile Roofing' },
      { path: '/metal-roofing', name: 'Metal Roofing' },
      { path: '/shingle-roofing', name: 'Shingle Roofing' },
      { path: '/flat-roofing', name: 'Flat Roofing' },
      { path: '/single-ply-roofing', name: 'Single-Ply Roofing' },
      { path: '/roof-repair', name: 'Roof Repair' },
      { path: '/roof-inspection', name: 'Roof Inspection' },
    ],
  },
  {
    title: 'Roof Inspections',
    routes: [
      { path: '/tile-roof-inspection-broward-county', name: 'Tile Roof Inspection - Broward County' },
      { path: '/tile-roof-inspection-palm-beach-county', name: 'Tile Roof Inspection - Palm Beach County' },
      { path: '/metal-roof-inspection-broward-county', name: 'Metal Roof Inspection - Broward County' },
      { path: '/metal-roof-inspection-palm-beach-county', name: 'Metal Roof Inspection - Palm Beach County' },
      { path: '/flat-roof-inspection-broward-county', name: 'Flat Roof Inspection - Broward County' },
      { path: '/flat-roof-inspection-palm-beach-county', name: 'Flat Roof Inspection - Palm Beach County' },
      { path: '/flat-roof-moisture-infrared-inspection', name: 'Flat Roof Moisture Infrared Inspection' },
      { path: '/insurance-roof-inspection', name: 'Insurance Roof Inspection' },
    ],
  },
  {
    title: 'Locations',
    routes: [
      { path: '/our-location', name: 'Our Location' },
      { path: '/service-areas', name: 'Service Areas' },
      { path: '/roofing-contractor-palm-beach-county-fl', name: 'Palm Beach County' },
      { path: '/roofing-contractor-broward-county-fl', name: 'Broward County' },
      { path: '/locations/deerfield-beach', name: 'Deerfield Beach - Primary Hub' },
      { path: '/locations/deerfield-beach/how-to-hire-a-roofing-contractor', name: 'How to Hire a Roofing Contractor in South Florida' },
    ],
  },
  {
    title: 'Palm Beach County Cities',
    routes: [
      { path: '/locations/deerfield-beach/service-area/boca-raton/', name: 'Boca Raton' },
      { path: '/locations/deerfield-beach/service-area/boynton-beach', name: 'Boynton Beach' },
      { path: '/locations/deerfield-beach/service-area/delray-beach', name: 'Delray Beach' },
      { path: '/locations/deerfield-beach/service-area/gulf-stream', name: 'Gulf Stream' },
      { path: '/locations/greenacres', name: 'Greenacres' },
      { path: '/locations/deerfield-beach/service-area/haverhill', name: 'Haverhill' },
      { path: '/locations/deerfield-beach/service-area/highland-beach', name: 'Highland Beach' },
      { path: '/locations/deerfield-beach/service-area/hypoluxo', name: 'Hypoluxo' },
      { path: '/locations/deerfield-beach/service-area/jupiter', name: 'Jupiter' },
      { path: '/locations/deerfield-beach/service-area/lake-worth-beach', name: 'Lake Worth Beach' },
      { path: '/locations/deerfield-beach/service-area/lantana', name: 'Lantana' },
      { path: '/locations/deerfield-beach/service-area/loxahatchee-groves', name: 'Loxahatchee Groves' },
      { path: '/locations/deerfield-beach/service-area/ocean-ridge', name: 'Ocean Ridge' },
      { path: '/locations/deerfield-beach/service-area/north-palm-beach', name: 'North Palm Beach' },
      { path: '/locations/deerfield-beach/service-area/palm-beach', name: 'Palm Beach' },
      { path: '/locations/deerfield-beach/service-area/palm-beach-gardens', name: 'Palm Beach Gardens' },
      { path: '/locations/deerfield-beach/service-area/palm-beach-shores', name: 'Palm Beach Shores' },
      { path: '/locations/deerfield-beach/service-area/royal-palm-beach', name: 'Royal Palm Beach' },
      { path: '/locations/deerfield-beach/service-area/wellington', name: 'Wellington' },
      { path: '/locations/deerfield-beach/service-area/west-palm-beach', name: 'West Palm Beach' },
    ],
  },
  {
    title: 'Broward County Cities',
    routes: [
      { path: '/locations/deerfield-beach/service-area/coconut-creek', name: 'Coconut Creek' },
      { path: '/locations/deerfield-beach/service-area/cooper-city', name: 'Cooper City' },
      { path: '/locations/deerfield-beach/service-area/coral-springs', name: 'Coral Springs' },
      { path: '/locations/deerfield-beach/service-area/davie', name: 'Davie' },
      { path: '/locations/deerfield-beach/service-area/fort-lauderdale', name: 'Fort Lauderdale' },
      { path: '/locations/deerfield-beach/service-area/hallandale-beach', name: 'Hallandale Beach' },
      { path: '/locations/deerfield-beach/service-area/hollywood', name: 'Hollywood' },
      { path: '/locations/deerfield-beach/service-area/lauderdale-by-the-sea', name: 'Lauderdale-by-the-Sea' },
      { path: '/locations/deerfield-beach/service-area/lauderhill', name: 'Lauderhill' },
      { path: '/locations/deerfield-beach/service-area/lauderdale-ranches', name: 'Lauderdale Ranches' },
      { path: '/locations/deerfield-beach/service-area/lighthouse-point', name: 'Lighthouse Point' },
      { path: '/locations/deerfield-beach/service-area/margate', name: 'Margate' },
      { path: '/locations/deerfield-beach/service-area/miramar', name: 'Miramar' },
      { path: '/locations/deerfield-beach/service-area/north-lauderdale', name: 'North Lauderdale' },
      { path: '/locations/deerfield-beach/service-area/oakland-park', name: 'Oakland Park' },
      { path: '/locations/deerfield-beach/service-area/parkland', name: 'Parkland' },
      { path: '/locations/deerfield-beach/service-area/pembroke-park', name: 'Pembroke Park' },
      { path: '/locations/deerfield-beach/service-area/pembroke-pines', name: 'Pembroke Pines' },
      { path: '/locations/deerfield-beach/service-area/plantation', name: 'Plantation' },
      { path: '/locations/deerfield-beach/service-area/pompano-beach', name: 'Pompano Beach' },
      { path: '/locations/deerfield-beach/service-area/sunrise', name: 'Sunrise' },
      { path: '/locations/deerfield-beach/service-area/tamarac', name: 'Tamarac' },
      { path: '/locations/deerfield-beach/service-area/weston', name: 'Weston' },
      { path: '/locations/deerfield-beach/service-area/wilton-manors', name: 'Wilton Manors' },
    ],
  },
  {
    title: 'Learning Center',
    routes: [
      { path: '/easy-payments', name: 'Financing Options' },
      { path: '/blog', name: 'Education Hub (Blog)' },
    ],
  },
  {
    title: 'About & Contact',
    routes: [
      { path: '/about-us', name: 'About Us' },
      { path: '/projects', name: 'Projects' },
      { path: '/reviews', name: 'Reviews' },
      { path: '/contact', name: 'Contact' },
    ],
  },
];

export function getAllIndexableRoutes(): RouteDefinition[] {
  return siteRoutes
    .flatMap((group) => group.routes)
    .filter((route) => route.indexable !== false);
}
