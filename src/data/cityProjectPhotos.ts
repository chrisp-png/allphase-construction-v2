/**
 * City Project Photos Manifest (PR-73, updated PR-87)
 *
 * Maps each city slug to an array of REAL project photos from
 * public/projects/. These are pulled into the city pages by the
 * CityProjectGallery component.
 *
 * Source: webp project photos in public/projects/, filename-tagged
 * with city. 21 cities currently have project photos matched.
 *
 * Auto-generated from public/projects/ — re-run scripts when new
 * city-tagged photos land. Max 2 photos per city by design (gallery
 * component renders 1 centered or 2 side-by-side).
 */

export interface CityProjectPhoto {
  file: string;     // basename in public/projects/
  alt: string;      // descriptive alt text
}

export const CITY_PROJECT_PHOTOS: Record<string, CityProjectPhoto[]> = {
  "lake-worth-beach": [
      {
          "file": "lake-worth-beach-shingle-roofing-project-all-phase-usa.webp",
          "alt": "Lake Worth Beach Shingle Roofing Project — All Phase Construction USA"
      },
      {
          "file": "lake-worth-beach-tamko-titan-shingle-roofing-contractor-all-phase-usa.webp",
          "alt": "Lake Worth Beach TAMKO Titan Shingle Roofing — All Phase Construction USA"
      }
  ],
  "boca-raton": [
      {
          "file": "all-phase-usa-metal-roof-replacement-boca-raton.webp",
          "alt": "All Phase Usa Metal Roof Replacement Boca Raton — All Phase Construction USA"
      },
      {
          "file": "boca-raton-flat-roof-in-progress-all-phase-usa.webp",
          "alt": "Boca Raton Flat Roof In Progress — All Phase Construction USA"
      }
  ],
  "boynton-beach": [
      {
          "file": "boynton-beach-shingle-roof-in-progress-all-phase-usa.webp",
          "alt": "Boynton Beach Shingle Roof In Progress — All Phase Construction USA"
      },
      {
          "file": "completed-boynton-beach-shingle-and-flat-roof-boynton-beach-fl-all-phas-usa.webp",
          "alt": "Completed Boynton Beach Shingle And Flat Roof Boynton Beach Fl All Phas Usa — All Phase Construction USA"
      }
  ],
  "coral-springs": [
      {
          "file": "coral-springs-barrel-tile-roof-replacement-all-phase-usa.webp",
          "alt": "Coral Springs Barrel Tile Roof Replacement — All Phase Construction USA"
      },
      {
          "file": "coral-springs-fl-tile-roof-replacement-all-phase-usa.webp",
          "alt": "Coral Springs Fl Tile Roof Replacement — All Phase Construction USA"
      }
  ],
  "davie": [
      {
          "file": "attic-inspection-in-davie-fl-found-leaks-not-detected-from-the-roof-all-phase-usa.webp",
          "alt": "Attic Inspection In Davie Fl Found Leaks Not Detected From The Roof — All Phase Construction USA"
      },
      {
          "file": "davie-attic-inspection-found-leak-all-phase-usa.webp",
          "alt": "Davie Attic Inspection Found Leak — All Phase Construction USA"
      }
  ],
  "deerfield-beach": [
      {
          "file": "deerfield-beach-hvhz-standing-seam-metal-roof-all-phase-usa.webp",
          "alt": "Deerfield Beach Hvhz Standing Seam Metal Roof — All Phase Construction USA"
      },
      {
          "file": "deerfield-beach-metal-roof-replacement-all-phase-usa.webp",
          "alt": "Deerfield Beach Metal Roof Replacement — All Phase Construction USA"
      }
  ],
  "delray-beach": [
      {
          "file": "clay-tile-roof-replacement-delray-beach-fl-all-phase-usa.webp",
          "alt": "Clay Tile Roof Replacement Delray Beach Fl — All Phase Construction USA"
      },
      {
          "file": "delray-beach-roof-in-progress-all-phase-usa.webp",
          "alt": "Delray Beach Roof In Progress — All Phase Construction USA"
      }
  ],
  "fort-lauderdale": [
      {
          "file": "fort-lauderdale-metal-roof-in-progress-all-phase-usa.webp",
          "alt": "Fort Lauderdale Metal Roof In Progress — All Phase Construction USA"
      },
      {
          "file": "fort-lauderdale-metal-roof-replacement-all-phase-usa.webp",
          "alt": "Fort Lauderdale Metal Roof Replacement — All Phase Construction USA"
      }
  ],
  "jupiter": [
      {
          "file": "jupiter-two-story-shingle-roof-inspection.webp",
          "alt": "Jupiter Two Story Shingle Roof Inspection — All Phase Construction USA"
      },
      {
          "file": "shingle-roof-inspection-in-jupiter-fl-all-phase-usa.webp",
          "alt": "Shingle Roof Inspection In Jupiter Fl — All Phase Construction USA"
      }
  ],
  "lighthouse-point": [
      {
          "file": "broken-roof-tile-repair-lighthouse-point-all-phase-usa.webp",
          "alt": "Broken Roof Tile Repair Lighthouse Point — All Phase Construction USA"
      },
      {
          "file": "lighthouse-point-chimney-flashing-inspection-all-phase-usa.webp",
          "alt": "Lighthouse Point Chimney Flashing Inspection — All Phase Construction USA"
      }
  ],
  "margate": [
      {
          "file": "margate-flat-roof-coating-in-progress.webp",
          "alt": "Margate Flat Roof Coating In Progress — All Phase Construction USA"
      },
      {
          "file": "margate-flat-roof-restoration-completed-by-all-phase-usa.webp",
          "alt": "Margate Flat Roof Restoration Completed By — All Phase Construction USA"
      }
  ],
  "miramar": [
      {
          "file": "miramar-standing-seam-metal-roof-in-progress-all-phase-usa.webp",
          "alt": "Miramar Standing Seam Metal Roof In Progress — All Phase Construction USA"
      }
  ],
  "north-lauderdale": [
      {
          "file": "north-lauderdale-asphalt-shingle-roof-replacement-all-phase-usa.webp",
          "alt": "North Lauderdale Asphalt Shingle Roof Replacement — All Phase Construction USA"
      },
      {
          "file": "north-lauderdale-shingle-roof-replacement-all-phase-usa.webp",
          "alt": "North Lauderdale Shingle Roof Replacement — All Phase Construction USA"
      }
  ],
  "oakland-park": [
      {
          "file": "oakland-park-flat-roof-in-progress-all-phase-usa.webp",
          "alt": "Oakland Park Flat Roof In Progress — All Phase Construction USA"
      },
      {
          "file": "oakland-park-flat-roof-all-phase-usa.webp",
          "alt": "Oakland Park Flat Roof — All Phase Construction USA"
      }
  ],
  "palm-beach": [
      {
          "file": "palm-beach-fl-tile-roof-replacement-all-phase-usa.webp",
          "alt": "Palm Beach Fl Tile Roof Replacement — All Phase Construction USA"
      },
      {
          "file": "palm-beach-flat-roof-replacement-all-phase-usa.webp",
          "alt": "Palm Beach Flat Roof Replacement — All Phase Construction USA"
      }
  ],
  "pembroke-pines": [
      {
          "file": "tile-roof-replacement-pembroke-pines-all-phase-usa.webp",
          "alt": "Tile Roof Replacement Pembroke Pines — All Phase Construction USA"
      },
      {
          "file": "new-roof-coming-soon-pembroke-pines-all-phase-usa.webp",
          "alt": "New Roof Coming Soon Pembroke Pines — All Phase Construction USA"
      }
  ],
  "pompano-beach": [
      {
          "file": "pompano-beach-shingle-roof-replacement-all-phase-usa.webp",
          "alt": "Pompano Beach Shingle Roof Replacement — All Phase Construction USA"
      },
      {
          "file": "pompano-beach-tile-roof-replacement-all-phase-usa.webp",
          "alt": "Pompano Beach Tile Roof Replacement — All Phase Construction USA"
      }
  ],
  "southwest-ranches": [
      {
          "file": "southwest-ranches-standing-seam-metal-replacement-installation-all-phase-usa.webp",
          "alt": "Southwest Ranches Standing Seam Metal Replacement Installation — All Phase Construction USA"
      },
      {
          "file": "southwest-ranches-flat-roof-replacement-all-phase-usa.webp",
          "alt": "Southwest Ranches Flat Roof Replacement — All Phase Construction USA"
      }
  ],
  "sunrise": [
      {
          "file": "shingle-roof-and-flat-roof-replacement-inspection-sunrise-fl-all-phase-usa.webp",
          "alt": "Shingle Roof And Flat Roof Replacement Inspection Sunrise Fl — All Phase Construction USA"
      },
      {
          "file": "sunrise-fl-shingle-roof-replacement-all-phase-usa.webp",
          "alt": "Sunrise Fl Shingle Roof Replacement — All Phase Construction USA"
      }
  ],
  "tamarac": [
      {
          "file": "tamarac-roof-inspection-in-progress-all-phase-usa.webp",
          "alt": "Tamarac Roof Inspection In Progress — All Phase Construction USA"
      },
      {
          "file": "tamarac-roof-restore-in-progress-all-phase-usa.webp",
          "alt": "Tamarac Roof Restore In Progress — All Phase Construction USA"
      }
  ],
  "wellington": [
      {
          "file": "tile-roof-repair-in-progress-wellington-all-phase-usa.webp",
          "alt": "Tile Roof Repair In Progress Wellington — All Phase Construction USA"
      },
      {
          "file": "wellington-tile-repair-in-progress-all-phase-usa.webp",
          "alt": "Wellington Tile Repair In Progress — All Phase Construction USA"
      }
  ],
  "west-palm-beach": [
      {
          "file": "flat-roof-replacement-in-progress-in-west-palm-beach-fl-by-all-phase-usa.webp",
          "alt": "Flat Roof Replacement In Progress In West Palm Beach Fl By — All Phase Construction USA"
      },
      {
          "file": "tiles-reinstalled-after-flat-roof-replacement-west-palm-beach-fl-all-phase-usa.webp",
          "alt": "Tiles Reinstalled After Flat Roof Replacement West Palm Beach Fl — All Phase Construction USA"
      }
  ]
};
