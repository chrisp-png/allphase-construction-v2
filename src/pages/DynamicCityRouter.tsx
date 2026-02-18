import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import cities from '../data/cities.json';
import NotFoundPage from './NotFoundPage';

const BocaRatonMoneyPage = lazy(() => import('./locations/BocaRatonMoneyPage'));
const BoyntonBeachMoneyPage = lazy(() => import('./locations/BoyntonBeachMoneyPage'));
const CoconutCreekMoneyPage = lazy(() => import('./locations/CoconutCreekMoneyPage'));
const CoralSpringsMoneyPage = lazy(() => import('./locations/CoralSpringsMoneyPage'));
const DeerfieldBeachCityPage = lazy(() => import('./locations/DeerfieldBeachCityPage'));
const DelrayBeachMoneyPage = lazy(() => import('./locations/DelrayBeachMoneyPage'));
const FortLauderdaleMoneyPage = lazy(() => import('./locations/FortLauderdaleMoneyPage'));
const PompanoBeachMoneyPage = lazy(() => import('./locations/PompanoBeachMoneyPage'));
const WellingtonMoneyPage = lazy(() => import('./locations/WellingtonMoneyPage'));
const WestPalmBeachMoneyPage = lazy(() => import('./locations/WestPalmBeachMoneyPage'));

const BocaRatonRoofRepairPage = lazy(() => import('./BocaRatonRoofRepairPage'));
const BoyntonBeachRoofRepairPage = lazy(() => import('./BoyntonBeachRoofRepairPage'));
const BrowardCountyRoofRepairPage = lazy(() => import('./BrowardCountyRoofRepairPage'));
const CoconutCreekRoofRepairPage = lazy(() => import('./CoconutCreekRoofRepairPage'));
const CooperCityRoofRepairPage = lazy(() => import('./CooperCityRoofRepairPage'));
const CoralSpringsRoofRepairPage = lazy(() => import('./CoralSpringsRoofRepairPage'));
const DaniaBeachRoofRepairPage = lazy(() => import('./DaniaBeachRoofRepairPage'));
const DavieRoofRepairPage = lazy(() => import('./DavieRoofRepairPage'));
const DeerfieldBeachRoofRepairPage = lazy(() => import('./DeerfieldBeachRoofRepairPage'));
const DelrayBeachRoofRepairPage = lazy(() => import('./DelrayBeachRoofRepairPage'));
const GreenacresRoofRepairPage = lazy(() => import('./GreenacresRoofRepairPage'));
const HallandaleBeachRoofRepairPage = lazy(() => import('./HallandaleBeachRoofRepairPage'));
const HaverillRoofRepairPage = lazy(() => import('./HaverillRoofRepairPage'));
const HighlandBeachRoofRepairPage = lazy(() => import('./HighlandBeachRoofRepairPage'));
const HollywoodRoofRepairPage = lazy(() => import('./HollywoodRoofRepairPage'));
const HypoluxoRoofRepairPage = lazy(() => import('./HypoluxoRoofRepairPage'));
const LakeParkRoofRepairPage = lazy(() => import('./LakeParkRoofRepairPage'));
const LakeWorthBeachRoofRepairPage = lazy(() => import('./LakeWorthBeachRoofRepairPage'));
const LantanaRoofRepairPage = lazy(() => import('./LantanaRoofRepairPage'));
const LighthousePointRoofRepairPage = lazy(() => import('./LighthousePointRoofRepairPage'));
const PalmBeachRoofRepairPage = lazy(() => import('./PalmBeachRoofRepairPage'));
const PalmBeachCountyRoofRepairPage = lazy(() => import('./PalmBeachCountyRoofRepairPage'));
const ParklandRoofRepairPage = lazy(() => import('./ParklandRoofRepairPage'));
const PompanoBeachRoofRepairPage = lazy(() => import('./PompanoBeachRoofRepairPage'));
const SunriseRoofRepairPage = lazy(() => import('./SunriseRoofRepairPage'));
const WellingtonRoofRepairPage = lazy(() => import('./WellingtonRoofRepairPage'));
const WestPalmBeachRoofRepairPage = lazy(() => import('./WestPalmBeachRoofRepairPage'));
const WiltonManorsRoofRepairPage = lazy(() => import('./WiltonManorsRoofRepairPage'));

const RoofInspectionPage = lazy(() => import('./RoofInspectionPage'));

const GenericLocationTemplate = lazy(() => import('./templates/GenericLocationTemplate'));
const GenericRoofRepairTemplate = lazy(() => import('./templates/GenericRoofRepairTemplate'));
const GenericRoofInspectionTemplate = lazy(() => import('./templates/GenericRoofInspectionTemplate'));

const citySlugs = new Set(cities.map(c => c.slug.toLowerCase().trim()));

const locationPageMap: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  'boca-raton': BocaRatonMoneyPage,
  'boynton-beach': BoyntonBeachMoneyPage,
  'coconut-creek': CoconutCreekMoneyPage,
  'coral-springs': CoralSpringsMoneyPage,
  'deerfield-beach': DeerfieldBeachCityPage,
  'delray-beach': DelrayBeachMoneyPage,
  'fort-lauderdale': FortLauderdaleMoneyPage,
  'pompano-beach': PompanoBeachMoneyPage,
  'wellington': WellingtonMoneyPage,
  'west-palm-beach': WestPalmBeachMoneyPage,
};

const roofRepairPageMap: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  'boca-raton': BocaRatonRoofRepairPage,
  'boynton-beach': BoyntonBeachRoofRepairPage,
  'broward-county': BrowardCountyRoofRepairPage,
  'coconut-creek': CoconutCreekRoofRepairPage,
  'cooper-city': CooperCityRoofRepairPage,
  'coral-springs': CoralSpringsRoofRepairPage,
  'dania-beach': DaniaBeachRoofRepairPage,
  'davie': DavieRoofRepairPage,
  'deerfield-beach': DeerfieldBeachRoofRepairPage,
  'delray-beach': DelrayBeachRoofRepairPage,
  'greenacres': GreenacresRoofRepairPage,
  'hallandale-beach': HallandaleBeachRoofRepairPage,
  'haverhill': HaverillRoofRepairPage,
  'highland-beach': HighlandBeachRoofRepairPage,
  'hollywood': HollywoodRoofRepairPage,
  'hypoluxo': HypoluxoRoofRepairPage,
  'lake-park': LakeParkRoofRepairPage,
  'lake-worth': LakeWorthBeachRoofRepairPage,
  'lantana': LantanaRoofRepairPage,
  'lighthouse-point': LighthousePointRoofRepairPage,
  'palm-beach': PalmBeachRoofRepairPage,
  'palm-beach-county': PalmBeachCountyRoofRepairPage,
  'parkland': ParklandRoofRepairPage,
  'pompano-beach': PompanoBeachRoofRepairPage,
  'sunrise': SunriseRoofRepairPage,
  'wellington': WellingtonRoofRepairPage,
  'west-palm-beach': WestPalmBeachRoofRepairPage,
  'wilton-manors': WiltonManorsRoofRepairPage,
};

const PageLoadingFallback = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #ef4444',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 1rem'
      }}></div>
      <p>Loading...</p>
    </div>
  </div>
);

export function DynamicLocationPage() {
  const { city } = useParams<{ city: string }>();
  const normalizedCity = city?.toLowerCase().trim() || '';

  if (!citySlugs.has(normalizedCity)) {
    return <NotFoundPage />;
  }

  const PageComponent = locationPageMap[normalizedCity] || GenericLocationTemplate;

  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <PageComponent />
    </Suspense>
  );
}

export function DynamicRoofRepairPage() {
  const { city } = useParams<{ city: string }>();
  const normalizedCity = city?.toLowerCase().trim() || '';

  if (!citySlugs.has(normalizedCity)) {
    return <NotFoundPage />;
  }

  const PageComponent = roofRepairPageMap[normalizedCity] || GenericRoofRepairTemplate;

  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <PageComponent />
    </Suspense>
  );
}

export function DynamicRoofInspectionPage() {
  const { city } = useParams<{ city: string }>();
  const normalizedCity = city?.toLowerCase().trim() || '';

  if (!citySlugs.has(normalizedCity)) {
    return <NotFoundPage />;
  }

  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <GenericRoofInspectionTemplate />
    </Suspense>
  );
}
