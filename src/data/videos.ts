/**
 * Video Catalog (PR-92)
 *
 * Confirmed YouTube videos from the All Phase channel, used for
 * embed + schema across the site. URLs verified via YouTube oEmbed
 * API on 2026-06-26.
 */
import type { VideoMeta } from '../utils/videoObjectSchema';

export const VIDEOS: Record<string, VideoMeta> = {
  HENRY_TESTIMONIAL_METAL: {
    videoId: 'IrXnyKtU4YQ',
    title: 'Customer Review: Dark Bronze Metal Roof | All Phase Construction USA',
    description:
      'Henry shares his experience with All Phase Construction USA after his dark bronze standing-seam metal roof installation in South Florida — from neighbor recommendations to clear communication throughout the project.',
    uploadDate: '2026-08-22T12:00:00-04:00',
    duration: 'PT1M30S',
    city: 'Deerfield Beach',
  },
  METAL_ENERGY_EFFICIENCY: {
    videoId: 'AIob7xN5v8Y',
    title: 'Do Metal Roofs Really Lower Your Energy Bill in Florida? | All Phase USA',
    description:
      'How a metal roof reduces cooling costs in the South Florida heat — reflectivity, ventilation, and what it means for your electric bill.',
    uploadDate: '2026-08-22T12:00:00-04:00',
    duration: 'PT29S',
    city: 'Deerfield Beach',
  },
  CHRIS_POROSKY_STORY: {
    videoId: 'dZVkhyNRXnk',
    title: 'All Phase Construction | Chris Porosky Story',
    description:
      'Chris Porosky, founder of All Phase Construction USA, on building a dual-licensed roofing & general contracting business in Deerfield Beach, FL since 2006.',
    uploadDate: '2021-05-20T12:00:00-05:00',
    duration: 'PT7M31S',
    city: 'Deerfield Beach',
  },
  METAL_ROOFING_ACCESSORIES: {
    videoId: 'UWws6kVwvdA',
    title: 'We Make Our Metal Roofing Accessories',
    description:
      'Behind-the-scenes look at how All Phase Construction USA fabricates its own metal roofing accessories in-house, ensuring HVHZ-compliant fit and finish on every Florida metal roof.',
    uploadDate: '2021-06-03T12:00:00-05:00',
    duration: 'PT6M52S',
    city: 'Deerfield Beach',
  },
  METAL_ROOF_RESTORATION: {
    videoId: 'Rx73k2FgrrY',
    title: 'Metal Roof Restoration — Coral Gables Mansion',
    description:
      'Restoration of a metal roof on a Coral Gables, FL mansion by All Phase Construction USA. Premium estate-quality work, dual-licensed crew.',
    uploadDate: '2017-02-02T12:00:00-05:00',
    duration: 'PT4M29S',
    city: 'Coral Gables',
  },
  HOT_MOPPED_ROOF: {
    videoId: '_YS9p0oPHlI',
    title: 'Hot Mopped Roof in Progress',
    description:
      'Hot-mopped built-up roofing system installation in progress. Traditional flat-roof construction technique demonstrated by All Phase Construction USA.',
    uploadDate: '2017-01-26T12:00:00-05:00',
    duration: 'PT1M33S',
  },
  CONKLIN_FABRIC_COATING: {
    videoId: 'AQyPYpUi-3U',
    title: 'Conklin Fabric Re-enforced Coating System',
    description:
      'Conklin fabric-reinforced commercial roof coating system explained — extending the service life of an existing commercial roof without a full tear-off. Capital expense vs. maintenance expense impact for building owners.',
    uploadDate: '2017-12-20T12:00:00-05:00',
    duration: 'PT3M12S',
  },
  CORE_SAMPLE: {
    videoId: 'nW41nD1Xxqg',
    title: 'Roof Core Sample Inspection',
    description:
      'Why core sampling matters during a roof inspection — All Phase Construction USA demonstrates how a roof core reveals what is happening inside the system before a repair or replacement decision.',
    uploadDate: '2017-03-15T12:00:00-05:00',
    duration: 'PT1M15S',
  },
  OFFICE_TOUR: {
    videoId: 'TYkIgwcV3iU',
    title: 'All Phase Construction USA Office Tour',
    description:
      'A walk through the All Phase Construction USA headquarters in Deerfield Beach, FL. Meet the team, see the operation, and learn how a 20+ year roofing business runs day-to-day.',
    uploadDate: '2023-01-19T12:00:00-05:00',
    duration: 'PT20M22S',
    city: 'Deerfield Beach',
  },
  JANINE_LUTZ_TESTIMONIAL: {
    videoId: 'JJ_tRYicfv0',
    title: 'Janine Lutz — Happy All Phase Customer Testimonial',
    description:
      'Customer testimonial from Janine Lutz on her experience with All Phase Construction USA. Real homeowner, real review, real roof.',
    uploadDate: '2022-12-06T12:00:00-05:00',
    duration: 'PT1M14S',
  },
};
