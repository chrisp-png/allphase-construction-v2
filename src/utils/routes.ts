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
      { path: '/residential-roofing/', name: 'Residential Roofing' },
      { path: '/roof-replacement-process/', name: 'Roof Replacement Process' },
      { path: '/commercial-roofing/', name: 'Commercial Roofing' },
      { path: '/tile-roofing/', name: 'Tile Roofing' },
      { path: '/metal-roofing/', name: 'Metal Roofing' },
      { path: '/shingle-roofing/', name: 'Shingle Roofing' },
      { path: '/flat-roofing/', name: 'Flat Roofing' },
      { path: '/single-ply-roofing/', name: 'Single-Ply Roofing' },
      { path: '/roof-repair/', name: 'Roof Repair' },
      { path: '/roof-inspection/', name: 'Roof Inspection' },
    ],
  },
  {
    title: 'Roof Inspections',
    routes: [
      { path: '/tile-roof-inspection-broward-county/', name: 'Tile Roof Inspection - Broward County' },
      { path: '/tile-roof-inspection-palm-beach-county/', name: 'Tile Roof Inspection - Palm Beach County' },
      { path: '/metal-roof-inspection-broward-county/', name: 'Metal Roof Inspection - Broward County' },
      { path: '/metal-roof-inspection-palm-beach-county/', name: 'Metal Roof Inspection - Palm Beach County' },
      { path: '/flat-roof-inspection-broward-county/', name: 'Flat Roof Inspection - Broward County' },
      { path: '/flat-roof-inspection-palm-beach-county/', name: 'Flat Roof Inspection - Palm Beach County' },
      { path: '/flat-roof-moisture-infrared-inspection/', name: 'Flat Roof Moisture Infrared Inspection' },
      { path: '/insurance-roof-inspection/', name: 'Insurance Roof Inspection' },
    ],
  },
  {
    title: 'Locations',
    routes: [
      { path: '/our-location/', name: 'Our Location' },
      { path: '/locations/', name: 'All Locations' },
      { path: '/locations/palm-beach-county', name: 'Palm Beach County' },
      { path: '/locations/broward-county', name: 'Broward County' },
      { path: '/locations/deerfield-beach/', name: 'Deerfield Beach - Primary Hub' },
      { path: '/locations/deerfield-beach/how-to-hire-a-roofing-contractor/', name: 'How to Hire a Roofing Contractor in South Florida' },
    ],
  },
  {
    title: 'Palm Beach County Cities',
    routes: [
      { path: '/locations/boca-raton/', name: 'Boca Raton' },
      { path: '/locations/boynton-beach/', name: 'Boynton Beach' },
      { path: '/locations/delray-beach/', name: 'Delray Beach' },
      { path: '/locations/gulf-stream/', name: 'Gulf Stream' },
      { path: '/locations/greenacres/', name: 'Greenacres' },
      { path: '/locations/haverhill/', name: 'Haverhill' },
      { path: '/locations/highland-beach/', name: 'Highland Beach' },
      { path: '/locations/hypoluxo/', name: 'Hypoluxo' },
      { path: '/locations/jupiter/', name: 'Jupiter' },
      { path: '/locations/lake-worth-beach/', name: 'Lake Worth Beach' },
      { path: '/locations/lantana/', name: 'Lantana' },
      { path: '/locations/loxahatchee-groves/', name: 'Loxahatchee Groves' },
      { path: '/locations/ocean-ridge/', name: 'Ocean Ridge' },
      { path: '/locations/north-palm-beach/', name: 'North Palm Beach' },
      { path: '/locations/palm-beach/', name: 'Palm Beach' },
      { path: '/locations/palm-beach-gardens/', name: 'Palm Beach Gardens' },
      { path: '/locations/palm-beach-shores/', name: 'Palm Beach Shores' },
      { path: '/locations/royal-palm-beach/', name: 'Royal Palm Beach' },
      { path: '/locations/wellington/', name: 'Wellington' },
      { path: '/locations/west-palm-beach/', name: 'West Palm Beach' },
    ],
  },
  {
    title: 'Broward County Cities',
    routes: [
      { path: '/locations/coconut-creek/', name: 'Coconut Creek' },
      { path: '/locations/cooper-city/', name: 'Cooper City' },
      { path: '/locations/coral-springs/', name: 'Coral Springs' },
      { path: '/locations/davie/', name: 'Davie' },
      { path: '/locations/fort-lauderdale/', name: 'Fort Lauderdale' },
      { path: '/locations/hallandale-beach/', name: 'Hallandale Beach' },
      { path: '/locations/hollywood/', name: 'Hollywood' },
      { path: '/locations/lauderdale-by-the-sea/', name: 'Lauderdale-by-the-Sea' },
      { path: '/locations/lauderhill/', name: 'Lauderhill' },
      { path: '/locations/lauderdale-ranches/', name: 'Lauderdale Ranches' },
      { path: '/locations/lighthouse-point/', name: 'Lighthouse Point' },
      { path: '/locations/margate/', name: 'Margate' },
      { path: '/locations/miramar/', name: 'Miramar' },
      { path: '/locations/north-lauderdale/', name: 'North Lauderdale' },
      { path: '/locations/oakland-park/', name: 'Oakland Park' },
      { path: '/locations/parkland/', name: 'Parkland' },
      { path: '/locations/pembroke-park/', name: 'Pembroke Park' },
      { path: '/locations/pembroke-pines/', name: 'Pembroke Pines' },
      { path: '/locations/plantation/', name: 'Plantation' },
      { path: '/locations/pompano-beach/', name: 'Pompano Beach' },
      { path: '/locations/sunrise/', name: 'Sunrise' },
      { path: '/locations/tamarac/', name: 'Tamarac' },
      { path: '/locations/weston/', name: 'Weston' },
      { path: '/locations/wilton-manors/', name: 'Wilton Manors' },
    ],
  },
  {
    title: 'Learning Center',
    routes: [
      { path: '/easy-payments/', name: 'Financing Options' },
      { path: '/blog/', name: 'Education Hub (Blog)' },
    ],
  },
  {
    title: 'About & Contact',
    routes: [
      { path: '/about-us/', name: 'About Us' },
      { path: '/projects/', name: 'Projects' },
      { path: '/reviews/', name: 'Reviews' },
      { path: '/contact/', name: 'Contact' },
    ],
  },
];

export function getAllIndexableRoutes(): RouteDefinition[] {
  return siteRoutes
    .flatMap((group) => group.routes)
    .filter((route) => route.indexable !== false);
}
