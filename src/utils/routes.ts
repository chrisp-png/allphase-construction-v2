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
      { path: '/residential-roofing/roof-replacement-process', name: 'Roof Replacement Process' },
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
      { path: '/locations/deerfield-beach/roof-cost-calculator', name: 'Deerfield Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/how-to-hire-a-roofing-contractor', name: 'How to Hire a Roofing Contractor in South Florida' },
    ],
  },
  {
    title: 'Palm Beach County Cities',
    routes: [
      { path: '/locations/deerfield-beach/service-area/boca-raton', name: 'Boca Raton' },
      { path: '/locations/deerfield-beach/service-area/boca-raton/roof-cost-calculator', name: 'Boca Raton Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/boynton-beach', name: 'Boynton Beach' },
      { path: '/locations/deerfield-beach/service-area/delray-beach', name: 'Delray Beach' },
      { path: '/locations/deerfield-beach/service-area/delray-beach/roof-cost-calculator', name: 'Delray Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/gulf-stream', name: 'Gulf Stream' },
      { path: '/locations/greenacres', name: 'Greenacres' },
      { path: '/locations/deerfield-beach/service-area/greenacres/roof-cost-calculator', name: 'Greenacres Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/haverhill', name: 'Haverhill' },
      { path: '/locations/deerfield-beach/service-area/haverhill/roof-cost-calculator', name: 'Haverhill Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/highland-beach', name: 'Highland Beach' },
      { path: '/locations/deerfield-beach/service-area/hypoluxo', name: 'Hypoluxo' },
      { path: '/locations/deerfield-beach/service-area/jupiter', name: 'Jupiter' },
      { path: '/locations/deerfield-beach/service-area/lake-worth-beach', name: 'Lake Worth Beach' },
      { path: '/locations/deerfield-beach/service-area/lake-worth-beach/roof-cost-calculator', name: 'Lake Worth Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/lantana', name: 'Lantana' },
      { path: '/locations/deerfield-beach/service-area/lantana/roof-cost-calculator', name: 'Lantana Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/loxahatchee-groves', name: 'Loxahatchee Groves' },
      { path: '/locations/deerfield-beach/service-area/loxahatchee-groves/roof-cost-calculator', name: 'Loxahatchee Groves Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/ocean-ridge', name: 'Ocean Ridge' },
      { path: '/locations/deerfield-beach/service-area/ocean-ridge/roof-cost-calculator', name: 'Ocean Ridge Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/north-palm-beach', name: 'North Palm Beach' },
      { path: '/locations/deerfield-beach/service-area/north-palm-beach/roof-cost-calculator', name: 'North Palm Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/palm-beach', name: 'Palm Beach' },
      { path: '/locations/deerfield-beach/service-area/palm-beach/roof-cost-calculator', name: 'Palm Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/palm-beach-gardens', name: 'Palm Beach Gardens' },
      { path: '/locations/deerfield-beach/service-area/palm-beach-gardens/roof-cost-calculator', name: 'Palm Beach Gardens Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/palm-beach-shores', name: 'Palm Beach Shores' },
      { path: '/locations/deerfield-beach/service-area/palm-beach-shores/roof-cost-calculator', name: 'Palm Beach Shores Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/royal-palm-beach', name: 'Royal Palm Beach' },
      { path: '/locations/deerfield-beach/service-area/royal-palm-beach/roof-cost-calculator', name: 'Royal Palm Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/wellington', name: 'Wellington' },
      { path: '/locations/deerfield-beach/service-area/west-palm-beach', name: 'West Palm Beach' },
    ],
  },
  {
    title: 'Broward County Cities',
    routes: [
      { path: '/locations/deerfield-beach/service-area/coconut-creek', name: 'Coconut Creek' },
      { path: '/locations/deerfield-beach/service-area/coconut-creek/roof-cost-calculator', name: 'Coconut Creek Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/cooper-city', name: 'Cooper City' },
      { path: '/locations/deerfield-beach/service-area/coral-springs', name: 'Coral Springs' },
      { path: '/locations/deerfield-beach/service-area/davie', name: 'Davie' },
      { path: '/locations/deerfield-beach/service-area/fort-lauderdale', name: 'Fort Lauderdale' },
      { path: '/locations/deerfield-beach/service-area/fort-lauderdale/roof-cost-calculator', name: 'Fort Lauderdale Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/hallandale-beach', name: 'Hallandale Beach' },
      { path: '/locations/deerfield-beach/service-area/hallandale-beach/roof-cost-calculator', name: 'Hallandale Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/hollywood', name: 'Hollywood' },
      { path: '/locations/deerfield-beach/service-area/lauderdale-by-the-sea', name: 'Lauderdale-by-the-Sea' },
      { path: '/locations/deerfield-beach/service-area/lauderdale-by-the-sea/roof-cost-calculator', name: 'Lauderdale By The Sea Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/lauderhill', name: 'Lauderhill' },
      { path: '/locations/deerfield-beach/service-area/lauderhill/roof-cost-calculator', name: 'Lauderhill Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/lauderdale-ranches', name: 'Lauderdale Ranches' },
      { path: '/locations/deerfield-beach/service-area/lauderdale-ranches/roof-cost-calculator', name: 'Lauderdale Ranches Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/lighthouse-point', name: 'Lighthouse Point' },
      { path: '/locations/deerfield-beach/service-area/lighthouse-point/roof-cost-calculator', name: 'Lighthouse Point Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/margate', name: 'Margate' },
      { path: '/locations/deerfield-beach/service-area/margate/roof-cost-calculator', name: 'Margate Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/miramar', name: 'Miramar' },
      { path: '/locations/deerfield-beach/service-area/miramar/roof-cost-calculator', name: 'Miramar Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/north-lauderdale', name: 'North Lauderdale' },
      { path: '/locations/deerfield-beach/service-area/north-lauderdale/roof-cost-calculator', name: 'North Lauderdale Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/oakland-park', name: 'Oakland Park' },
      { path: '/locations/deerfield-beach/service-area/parkland', name: 'Parkland' },
      { path: '/locations/deerfield-beach/service-area/parkland/roof-cost-calculator', name: 'Parkland Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/pembroke-park', name: 'Pembroke Park' },
      { path: '/locations/deerfield-beach/service-area/pembroke-park/roof-cost-calculator', name: 'Pembroke Park Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/pembroke-pines', name: 'Pembroke Pines' },
      { path: '/locations/deerfield-beach/service-area/pembroke-pines/roof-cost-calculator', name: 'Pembroke Pines Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/plantation', name: 'Plantation' },
      { path: '/locations/deerfield-beach/service-area/plantation/roof-cost-calculator', name: 'Plantation Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/pompano-beach', name: 'Pompano Beach' },
      { path: '/locations/deerfield-beach/service-area/pompano-beach/roof-cost-calculator', name: 'Pompano Beach Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/sunrise', name: 'Sunrise' },
      { path: '/locations/deerfield-beach/service-area/sunrise/roof-cost-calculator', name: 'Sunrise Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/tamarac', name: 'Tamarac' },
      { path: '/locations/deerfield-beach/service-area/tamarac/roof-cost-calculator', name: 'Tamarac Roof Cost Calculator' },
      { path: '/locations/deerfield-beach/service-area/weston', name: 'Weston' },
      { path: '/locations/deerfield-beach/service-area/wilton-manors', name: 'Wilton Manors' },
    ],
  },
  {
    title: 'Learning Center',
    routes: [
      { path: '/roof-cost-calculator', name: 'Roof Cost Calculator' },
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
