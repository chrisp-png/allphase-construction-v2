/**
 * Enhanced Schema Markup Utilities for SEO and AI/LLM Understanding
 *
 * These utilities generate structured data in JSON-LD format to help:
 * - Google and search engines better understand our content
 * - AI/LLMs accurately represent our services and expertise
 * - Rich results in search (FAQ snippets, breadcrumbs, ratings)
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
}

export interface ServiceDetails {
  name: string;
  description: string;
  serviceType?: string;
  areaServed: string[];
  url: string;
  provider?: {
    '@type': string;
    name: string;
    '@id'?: string;
  };
}

/**
 * Generate FAQPage schema for better visibility in search results
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(service: ServiceDetails): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'serviceType': service.serviceType || service.name,
    'provider': service.provider || {
      '@type': 'RoofingContractor',
      '@id': 'https://allphaseconstructionfl.com/#roofing-contractor',
      'name': 'All Phase Construction USA'
    },
    'url': service.url,
    'areaServed': service.areaServed.map(area => ({
      '@type': 'City',
      'name': area,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': 'Florida',
        'containedInPlace': {
          '@type': 'Country',
          'name': 'US'
        }
      }
    })),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': service.name,
      'itemListElement': [{
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.name
        }
      }]
    }
  };
}

/**
 * Generate BreadcrumbList schema for navigation context
 */
export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
}

/**
 * Generate enhanced Organization schema with full credentials
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#roofing-contractor',
    'name': 'All Phase Construction USA',
    'alternateName': 'All Phase Roofing',
    'description': 'Licensed roofing contractor serving Broward County and Palm Beach County, Florida. Dual-licensed (CCC1331464 & CGC1526236) with 22+ years experience and 2,500+ roofs installed.',
    'url': 'https://allphaseconstructionfl.com',
    'logo': 'https://allphaseconstructionfl.com/allphase-logo-white.svg',
    'telephone': '+1-754-227-5605',
    'email': 'info@allphaseconstructionfl.com',
    'priceRange': '$$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '590 Goolsby Blvd',
      'addressLocality': 'Deerfield Beach',
      'addressRegion': 'FL',
      'postalCode': '33442',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '26.3186',
      'longitude': '-80.1147'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Broward County',
        'containedInPlace': {
          '@type': 'AdministrativeArea',
          'name': 'Florida',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'US'
          }
        }
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Palm Beach County',
        'containedInPlace': {
          '@type': 'AdministrativeArea',
          'name': 'Florida',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'US'
          }
        }
      }
    ],
    // aggregateRating removed — managed solely by NuclearMetadata.tsx global schema
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'License',
        'name': 'Florida State Certified Roofing Contractor (CCC1331464)',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Florida Department of Business and Professional Regulation'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'License',
        'name': 'Florida Certified General Contractor (CGC1526236)',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Florida Department of Business and Professional Regulation'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': 'Certification',
        'name': 'HVHZ (High Velocity Hurricane Zone) Certified',
        'recognizedBy': {
          '@type': 'Organization',
          'name': 'Florida Building Commission'
        }
      }
    ],
    'sameAs': [
      'https://www.facebook.com/allphaseconstructionusa',
      'https://www.instagram.com/allphaseconstructionusa',
      'https://www.linkedin.com/company/allphaseconstructionusa',
      'https://www.youtube.com/@allphaseconstructionusa'
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '07:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '08:00',
        'closes': '16:00'
      }
    ]
  };
}

/**
 * Generate LocalBusiness schema for location pages
 */
export function generateLocalBusinessSchema(city: string, county: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `https://allphaseconstructionfl.com/#roofing-contractor-${city.toLowerCase().replace(/\s+/g, '-')}`,
    'name': `All Phase Construction USA - ${city} Roofing`,
    'parentOrganization': {
      '@id': 'https://allphaseconstructionfl.com/#roofing-contractor'
    },
    'areaServed': {
      '@type': 'City',
      'name': city,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': county
      }
    },
    'telephone': '+1-754-227-5605',
    'url': `https://allphaseconstructionfl.com/${city.toLowerCase().replace(/\s+/g, '-')}`,
    'priceRange': '$$$$'
  };
}

/**
 * Helper to inject schema into page head
 */
  // Prevent duplicate FAQPage schemas - prerender already handles these
  const schemaType = (schema as any)['@type'];
  if (schemaType === 'FAQPage') {
        const existing = document.querySelectorAll('script[type="application/ld+json"]');
        for (const el of existing) {
                try {
                          const parsed = JSON.parse(el.textContent || '');
                          if (parsed['@type'] === 'FAQPage' || (Array.isArray(parsed) && parsed.some((s: any) => s['@type'] === 'FAQPage'))) {
                                      return; // FAQPage already exists from prerender, skip injection
                          }
                        / /  }P rceavtecnht  (deu)p l{i c/a*t ei gFnAoQrPea gpea rssceh eemrarso r-s  p*r/e r}e
          n d e r  }a
    l r e}a
d y  choannsdtl essc rtihpets e=
    d occounmsetn ts.cchreemaatTeyEplee m=e n(ts(c'hsecmrai pats' )a;n
y ) [s'c@rtiyppte.'t]y;p
e   =i f' a(pspclhiecmaatTiyopne/ l=d=+=j s'oFnA'Q;P
  a g es'c)r i{p
  t . t e xcto n=s tJ SeOxNi.ssttirnign g=i fdyo(csucmheenmta.)q;u
e r ydSoecluemcetnotr.Ahlela(d'.sacprpiepntd[Cthyipled=("sacprpilpitc)a;tion/ld+json"]');
    for (const el of existing) {
            try {
                      const parsed = JSON.parse(el.textContent || '');
                      if (parsed['@type'] === 'FAQPage' || (Array.isArray(parsed) && parsed.some((s: any) => s['@type'] === 'FAQPage'))) {
                                  return; // FAQPage already exists from prerender, skip injection
                      }
            } catch (e) { /* ignore parse errors */ }
    }
}
  const script = document.c
  document.head.appendChild(script);
reateElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);}

/**
 * Helper to inject multiple schemas at once
   const scripts: HTMLScriptElement[] = [];

       // Check which schema types already exist from prerender
         const existingTypes = new Set<string>();
           document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
               try {
                     const parsed = JSON.parse(el.textContent || '');
                           if (parsed['@type']) existingTypes.add(parsed['@type']);
                                 if (Array.isArray(parsed)) parsed.forEach((s: any) => { if (s['@type']) existingTypes.add(s['@ty p ec'o]n)s;t  }s)c;r
                                 i p t s :}  HcTaMtLcShc r(iep)t E{l e/m*e nitg[n]o r=e  [*]/; 
                                 } 

                                     } )/;/
                                       C h
                                       e c ks cwhheimcahs .sfcohreEmaac ht(yspcehse maal r=e>a d{y
                                         e x i scto nfsrto ms cphreemraeTnydpeer 
                                         =   (csocnhsetm ae xaiss tainnyg)T[y'p@etsy p=e 'n]e;w
                                           S e t </s/t rSiknigp> (i)f; 
                                           t h idso csucmheenmta. qtuyeprey Saellreecatdoyr Aelxli(s'tssc rfirpotm[ tpyrpeer=e"nadpeprl
                                           i c a t iiofn /(lsdc+hjesmoanT"y]p'e) .&f&o reExaicsht(ienlg T=y>p e{s
                                           . h a s (tsrcyh e{m
                                           a T y p e ) )c ornesttu rpna;r
                                           s e d   =
                                             J S O Nc.opnasrts es(cerli.ptte x=t Cdoonctuemnetn t|.|c r'e'a)t;e
                                             E l e m e n ti(f' s(cprairpste'd)[;'
                                             @ t y p es'c]r)i petx.itsytpien g=T y'paepsp.laidcda(tpiaorns/eldd[+'j@stoynp'e;'
                                             ] ) ; 
                                               s c r i p ti.ft e(xAtr r=a yJ.SiOsNA.rsrtaryi(npgairfsye(ds)c)h epmaar)s;e
                                               d . f o rdEoaccuhm(e(nst:. haenayd). a=p>p e{n diCfh i(lsd[('s@ctryippet')];)
                                                 e x i sstcirnigpTtysp.epsu.sahd(ds(csr[i'p@tt)y;p
                                                 e ' ]}));; });
                                                     } catch (e) { /* ignore */ }
});

  schemas.forEach(schema => {
        const schemaType = (schema as any)['@type'];
        // Skip if this schema type already exists from prerender
        if (schemaType && existingTypes.has(schemaType)) return;

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
        scripts.push(script);
  });
    scripts.push(script);
  });

  // Return cleanup function
  return () => {
    scripts.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
  };
}
