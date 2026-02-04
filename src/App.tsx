import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import StickyMobileCTA from './components/StickyMobileCTA';
import ExitIntentPopup from './components/ExitIntentPopup';
import ScrollToTop from './components/ScrollToTop';
import CanonicalManager from './components/CanonicalManager';
import LowercaseRedirect from './components/LowercaseRedirect';
import AssessmentModal from './components/AssessmentModal';
import { AssessmentModalProvider, useAssessmentModal } from './context/AssessmentModalContext';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const ResidentialRoofingPage = lazy(() => import('./pages/ResidentialRoofingPage'));
const CommercialRoofingPage = lazy(() => import('./pages/CommercialRoofingPage'));
const RoofReplacementProcessPage = lazy(() => import('./pages/RoofReplacementProcessPage'));
const TileRoofingPage = lazy(() => import('./pages/TileRoofingPage'));
const MetalRoofingPage = lazy(() => import('./pages/MetalRoofingPage'));
const ShingleRoofingPage = lazy(() => import('./pages/ShingleRoofingPage'));
const FlatRoofingPage = lazy(() => import('./pages/FlatRoofingPage'));
const SinglePlyRoofingPage = lazy(() => import('./pages/SinglePlyRoofingPage'));
const RoofRepairPage = lazy(() => import('./pages/RoofRepairPage'));
const RoofRepairHubPage = lazy(() => import('./pages/RoofRepairHubPage'));
const BocaRatonRoofRepairPage = lazy(() => import('./pages/BocaRatonRoofRepairPage'));
const BoyntonBeachRoofRepairPage = lazy(() => import('./pages/BoyntonBeachRoofRepairPage'));
const BrowardCountyRoofRepairPage = lazy(() => import('./pages/BrowardCountyRoofRepairPage'));
const CoralSpringsRoofRepairPage = lazy(() => import('./pages/CoralSpringsRoofRepairPage'));
const CoconutCreekRoofRepairPage = lazy(() => import('./pages/CoconutCreekRoofRepairPage'));
const CooperCityRoofRepairPage = lazy(() => import('./pages/CooperCityRoofRepairPage'));
const DaniaBeachRoofRepairPage = lazy(() => import('./pages/DaniaBeachRoofRepairPage'));
const DavieRoofRepairPage = lazy(() => import('./pages/DavieRoofRepairPage'));
const DeerfieldBeachRoofRepairPage = lazy(() => import('./pages/DeerfieldBeachRoofRepairPage'));
const DelrayBeachRoofRepairPage = lazy(() => import('./pages/DelrayBeachRoofRepairPage'));
const GreenacresRoofRepairPage = lazy(() => import('./pages/GreenacresRoofRepairPage'));
const GreenacresPage = lazy(() => import('./pages/GreenacresPage'));
const HallandaleBeachRoofRepairPage = lazy(() => import('./pages/HallandaleBeachRoofRepairPage'));
const HaverillRoofRepairPage = lazy(() => import('./pages/HaverillRoofRepairPage'));
const HighlandBeachRoofRepairPage = lazy(() => import('./pages/HighlandBeachRoofRepairPage'));
const HollywoodRoofRepairPage = lazy(() => import('./pages/HollywoodRoofRepairPage'));
const HypoluxoRoofRepairPage = lazy(() => import('./pages/HypoluxoRoofRepairPage'));
const LakeParkRoofRepairPage = lazy(() => import('./pages/LakeParkRoofRepairPage'));
const LakeWorthBeachRoofRepairPage = lazy(() => import('./pages/LakeWorthBeachRoofRepairPage'));
const LantanaRoofRepairPage = lazy(() => import('./pages/LantanaRoofRepairPage'));
const LighthousePointRoofRepairPage = lazy(() => import('./pages/LighthousePointRoofRepairPage'));
const PalmBeachRoofRepairPage = lazy(() => import('./pages/PalmBeachRoofRepairPage'));
const PalmBeachCountyUnincorporatedRoofRepairPage = lazy(() => import('./pages/PalmBeachCountyUnincorporatedRoofRepairPage'));
const PalmBeachCountyRoofRepairPage = lazy(() => import('./pages/PalmBeachCountyRoofRepairPage'));
const ParklandRoofRepairPage = lazy(() => import('./pages/ParklandRoofRepairPage'));
const PompanoBeachRoofRepairPage = lazy(() => import('./pages/PompanoBeachRoofRepairPage'));
const SunriseRoofRepairPage = lazy(() => import('./pages/SunriseRoofRepairPage'));
const WellingtonRoofRepairPage = lazy(() => import('./pages/WellingtonRoofRepairPage'));
const WestPalmBeachRoofRepairPage = lazy(() => import('./pages/WestPalmBeachRoofRepairPage'));
const WiltonManorsRoofRepairPage = lazy(() => import('./pages/WiltonManorsRoofRepairPage'));
const RoofInspectionPage = lazy(() => import('./pages/RoofInspectionPage'));
const RoofMaintenanceProgramsPage = lazy(() => import('./pages/RoofMaintenanceProgramsPage'));
const TileRoofInspectionBrowardCountyPage = lazy(() => import('./pages/TileRoofInspectionBrowardCountyPage'));
const TileRoofInspectionPalmBeachCountyPage = lazy(() => import('./pages/TileRoofInspectionPalmBeachCountyPage'));
const MetalRoofInspectionBrowardCountyPage = lazy(() => import('./pages/MetalRoofInspectionBrowardCountyPage'));
const MetalRoofInspectionPalmBeachCountyPage = lazy(() => import('./pages/MetalRoofInspectionPalmBeachCountyPage'));
const FlatRoofInspectionBrowardCountyPage = lazy(() => import('./pages/FlatRoofInspectionBrowardCountyPage'));
const FlatRoofInspectionPalmBeachCountyPage = lazy(() => import('./pages/FlatRoofInspectionPalmBeachCountyPage'));
const FlatRoofMoistureInfraredInspectionPage = lazy(() => import('./pages/FlatRoofMoistureInfraredInspectionPage'));
const InsuranceRoofInspectionPage = lazy(() => import('./pages/InsuranceRoofInspectionPage'));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'));
const ServiceAreasIndexPage = lazy(() => import('./pages/ServiceAreasIndexPage'));
const ServiceAreaCityPage = lazy(() => import('./pages/ServiceAreaCityPage'));
const BocaRatonPage = lazy(() => import('./pages/BocaRatonPage'));
const WellingtonPage = lazy(() => import('./pages/WellingtonPage'));
const DeerfieldBeachPage = lazy(() => import('./pages/DeerfieldBeachPage'));
const FortLauderdalePage = lazy(() => import('./pages/FortLauderdalePage'));
const CoralSpringsPage = lazy(() => import('./pages/CoralSpringsPage'));
const DelrayBeachPage = lazy(() => import('./pages/DelrayBeachPage'));
const BoyntonBeachPage = lazy(() => import('./pages/BoyntonBeachPage'));
const LakeWorthBeachPage = lazy(() => import('./pages/LakeWorthBeachPage'));
const PompanoBeachPage = lazy(() => import('./pages/PompanoBeachPage'));
const PompanoBeachCalculatorPage = lazy(() => import('./pages/PompanoBeachCalculatorPage'));
const CoconutCreekPage = lazy(() => import('./pages/CoconutCreekPage'));
const CooperCityPage = lazy(() => import('./pages/CooperCityPage'));
const DaviePage = lazy(() => import('./pages/DaviePage'));
const DaniaBeachPage = lazy(() => import('./pages/DaniaBeachPage'));
const HallandaleBeachPage = lazy(() => import('./pages/HallandaleBeachPage'));
const HillsboroBeachPage = lazy(() => import('./pages/HillsboroBeachPage'));
const HollywoodPage = lazy(() => import('./pages/HollywoodPage'));
const LauderdaleByTheSeaPage = lazy(() => import('./pages/LauderdaleByTheSeaPage'));
const LauderdaleLakesPage = lazy(() => import('./pages/LauderdaleLakesPage'));
const LauderhillPage = lazy(() => import('./pages/LauderhillPage'));
const LauderdaleRanchesPage = lazy(() => import('./pages/LauderdaleRanchesPage'));
const LighthousePointPage = lazy(() => import('./pages/LighthousePointPage'));
const MargatePage = lazy(() => import('./pages/MargatePage'));
const MargateCalculatorPage = lazy(() => import('./pages/MargateCalculatorPage'));
const MiramarPage = lazy(() => import('./pages/MiramarPage'));
const MiramarCalculatorPage = lazy(() => import('./pages/MiramarCalculatorPage'));
const NorthLauderdalePage = lazy(() => import('./pages/NorthLauderdalePage'));
const NorthLauderdaleCalculatorPage = lazy(() => import('./pages/NorthLauderdaleCalculatorPage'));
const OaklandParkPage = lazy(() => import('./pages/OaklandParkPage'));
const ParklandPage = lazy(() => import('./pages/ParklandPage'));
const ParklandCalculatorPage = lazy(() => import('./pages/ParklandCalculatorPage'));
const PlantationPage = lazy(() => import('./pages/PlantationPage'));
const PlantationCalculatorPage = lazy(() => import('./pages/PlantationCalculatorPage'));
const SunrisePage = lazy(() => import('./pages/SunrisePage'));
const SunriseCalculatorPage = lazy(() => import('./pages/SunriseCalculatorPage'));
const TamaracPage = lazy(() => import('./pages/TamaracPage'));
const TamaracCalculatorPage = lazy(() => import('./pages/TamaracCalculatorPage'));
const WestonPage = lazy(() => import('./pages/WestonPage'));
const WestonCalculatorPage = lazy(() => import('./pages/WestonCalculatorPage'));
const SouthwestRanchesPage = lazy(() => import('./pages/SouthwestRanchesPage'));
const SouthwestRanchesCalculatorPage = lazy(() => import('./pages/SouthwestRanchesCalculatorPage'));
const HaverillPage = lazy(() => import('./pages/HaverillPage'));
const HaverillCalculatorPage = lazy(() => import('./pages/HaverillCalculatorPage'));
const HypoluxoPage = lazy(() => import('./pages/HypoluxoPage'));
const HypoluxoCalculatorPage = lazy(() => import('./pages/HypoluxoCalculatorPage'));
const HighlandBeachPage = lazy(() => import('./pages/HighlandBeachPage'));
const HighlandBeachCalculatorPage = lazy(() => import('./pages/HighlandBeachCalculatorPage'));
const HillsboroBeachCalculatorPage = lazy(() => import('./pages/HillsboroBeachCalculatorPage'));
const JupiterPage = lazy(() => import('./pages/JupiterPage'));
const JupiterInletColonyPage = lazy(() => import('./pages/JupiterInletColonyPage'));
const JupiterInletColonyCalculatorPage = lazy(() => import('./pages/JupiterInletColonyCalculatorPage'));
const LantanaPage = lazy(() => import('./pages/LantanaPage'));
const LantanaCalculatorPage = lazy(() => import('./pages/LantanaCalculatorPage'));
const LauderdaleLakesCalculatorPage = lazy(() => import('./pages/LauderdaleLakesCalculatorPage'));
const LauderdaleRanchesCalculatorPage = lazy(() => import('./pages/LauderdaleRanchesCalculatorPage'));
const LauderdaleByTheSeaCalculatorPage = lazy(() => import('./pages/LauderdaleByTheSeaCalculatorPage'));
const LauderhillCalculatorPage = lazy(() => import('./pages/LauderhillCalculatorPage'));
const LighthousePointCalculatorPage = lazy(() => import('./pages/LighthousePointCalculatorPage'));
const LoxahatcheeGrovesPage = lazy(() => import('./pages/LoxahatcheeGrovesPage'));
const LoxahatcheeGrovesCalculatorPage = lazy(() => import('./pages/LoxahatcheeGrovesCalculatorPage'));
const NorthPalmBeachPage = lazy(() => import('./pages/NorthPalmBeachPage'));
const NorthPalmBeachCalculatorPage = lazy(() => import('./pages/NorthPalmBeachCalculatorPage'));
const OceanRidgePage = lazy(() => import('./pages/OceanRidgePage'));
const OceanRidgeCalculatorPage = lazy(() => import('./pages/OceanRidgeCalculatorPage'));
const PalmBeachPage = lazy(() => import('./pages/PalmBeachPage'));
const PalmBeachCalculatorPage = lazy(() => import('./pages/PalmBeachCalculatorPage'));
const PalmBeachGardensPage = lazy(() => import('./pages/PalmBeachGardensPage'));
const PalmBeachGardensCalculatorPage = lazy(() => import('./pages/PalmBeachGardensCalculatorPage'));
const PalmBeachShoresPage = lazy(() => import('./pages/PalmBeachShoresPage'));
const PalmBeachShoresCalculatorPage = lazy(() => import('./pages/PalmBeachShoresCalculatorPage'));
const PembrokeParkPage = lazy(() => import('./pages/PembrokeParkPage'));
const PembrokeParkCalculatorPage = lazy(() => import('./pages/PembrokeParkCalculatorPage'));
const PembrokePinesPage = lazy(() => import('./pages/PembrokePinesPage'));
const PembrokePinesCalculatorPage = lazy(() => import('./pages/PembrokePinesCalculatorPage'));
const RoyalPalmBeachPage = lazy(() => import('./pages/RoyalPalmBeachPage'));
const RoyalPalmBeachCalculatorPage = lazy(() => import('./pages/RoyalPalmBeachCalculatorPage'));
const SeaRanchLakesPage = lazy(() => import('./pages/SeaRanchLakesPage'));
const SeaRanchLakesCalculatorPage = lazy(() => import('./pages/SeaRanchLakesCalculatorPage'));
const WestlakePage = lazy(() => import('./pages/WestlakePage'));
const WestlakeCalculatorPage = lazy(() => import('./pages/WestlakeCalculatorPage'));
const WestPalmBeachPage = lazy(() => import('./pages/WestPalmBeachPage'));
const WiltonManorsPage = lazy(() => import('./pages/WiltonManorsPage'));
const WiltonManorsCalculatorPage = lazy(() => import('./pages/WiltonManorsCalculatorPage'));
const GreenacresCalculatorPage = lazy(() => import('./pages/GreenacresCalculatorPage'));
const CoconutCreekCalculatorPage = lazy(() => import('./pages/CoconutCreekCalculatorPage'));
const CooperCityCalculatorPage = lazy(() => import('./pages/CooperCityCalculatorPage'));
const CoralSpringsCalculatorPage = lazy(() => import('./pages/CoralSpringsCalculatorPage'));
const DaniaBeachCalculatorPage = lazy(() => import('./pages/DaniaBeachCalculatorPage'));
const DavieCalculatorPage = lazy(() => import('./pages/DavieCalculatorPage'));
const DeerfieldBeachCalculatorPage = lazy(() => import('./pages/DeerfieldBeachCalculatorPage'));
const DelrayBeachCalculatorPage = lazy(() => import('./pages/DelrayBeachCalculatorPage'));
const FortLauderdaleCalculatorPage = lazy(() => import('./pages/FortLauderdaleCalculatorPage'));
const HallandaleBeachCalculatorPage = lazy(() => import('./pages/HallandaleBeachCalculatorPage'));
const HollywoodCalculatorPage = lazy(() => import('./pages/HollywoodCalculatorPage'));
const LakeWorthBeachCalculatorPage = lazy(() => import('./pages/LakeWorthBeachCalculatorPage'));
const WellingtonCalculatorPage = lazy(() => import('./pages/WellingtonCalculatorPage'));
const BocaRatonCalculatorPage = lazy(() => import('./pages/BocaRatonCalculatorPage'));
const BoyntonBeachCalculatorPage = lazy(() => import('./pages/BoyntonBeachCalculatorPage'));
const EasyPaymentsPage = lazy(() => import('./pages/EasyPaymentsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));
const HowToHireRoofingContractorPage = lazy(() => import('./pages/HowToHireRoofingContractorPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const OurLocationPage = lazy(() => import('./pages/OurLocationPage'));
const BrowardCountyPage = lazy(() => import('./pages/BrowardCountyPage'));
const PalmBeachCountyPage = lazy(() => import('./pages/PalmBeachCountyPage'));
const GulfStreamPage = lazy(() => import('./pages/GulfStreamPage'));
const BocaRatonTopRooferPage = lazy(() => import('./pages/BocaRatonTopRooferPage'));
const BoyntonBeachTopRooferPage = lazy(() => import('./pages/BoyntonBeachTopRooferPage'));
const CoconutCreekTopRooferPage = lazy(() => import('./pages/CoconutCreekTopRooferPage'));
const CoralSpringsTopRooferPage = lazy(() => import('./pages/CoralSpringsTopRooferPage'));
const DeerfieldBeachTopRooferPage = lazy(() => import('./pages/DeerfieldBeachTopRooferPage'));
const DeerfieldBeachPalmBeachTopRooferPage = lazy(() => import('./pages/DeerfieldBeachPalmBeachTopRooferPage'));
const FortLauderdaleTopRooferPage = lazy(() => import('./pages/FortLauderdaleTopRooferPage'));
const WestPalmBeachTopRooferPage = lazy(() => import('./pages/WestPalmBeachTopRooferPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ServiceAreaDynamicPage = lazy(() => import('./pages/ServiceAreaDynamicPage'));
const LocationsIndexPage = lazy(() => import('./pages/locations/LocationsIndexPage'));
const ServiceAreasHubPage = lazy(() => import('./pages/locations/ServiceAreasHubPage'));
const ServiceAreaPage = lazy(() => import('./pages/locations/ServiceAreaPage'));
const LocationCalculatorPage = lazy(() => import('./pages/locations/LocationCalculatorPage'));
const TopRooferPage = lazy(() => import('./pages/locations/TopRooferPage'));
const DeerfieldBeachCityPage = lazy(() => import('./pages/locations/DeerfieldBeachCityPage'));
const SitemapAuditPage = lazy(() => import('./pages/qa/SitemapAuditPage'));

// Loading fallback that is SEO-friendly
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

function AppContent() {
  const { isOpen, closeModal } = useAssessmentModal();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <LowercaseRedirect />
      <CanonicalManager />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roof-cost-calculator" element={<CalculatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/residential-roofing" element={<ResidentialRoofingPage />} />
            <Route path="/commercial-roofing" element={<CommercialRoofingPage />} />
            <Route path="/roof-replacement-process" element={<RoofReplacementProcessPage />} />
            <Route path="/tile-roofing" element={<TileRoofingPage />} />
            <Route path="/metal-roofing" element={<MetalRoofingPage />} />
            <Route path="/shingle-roofing" element={<ShingleRoofingPage />} />
            <Route path="/flat-roofing" element={<FlatRoofingPage />} />
            <Route path="/single-ply-roofing" element={<SinglePlyRoofingPage />} />
            <Route path="/roof-repair" element={<RoofRepairPage />} />
            <Route path="/roofing-services/roof-repair" element={<RoofRepairHubPage />} />
            <Route path="/roofing-services/roof-repair/boca-raton" element={<BocaRatonRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/boynton-beach" element={<BoyntonBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/broward-county" element={<BrowardCountyRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/coral-springs" element={<CoralSpringsRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/coconut-creek" element={<CoconutCreekRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/cooper-city" element={<CooperCityRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/dania-beach" element={<DaniaBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/davie" element={<DavieRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/deerfield-beach" element={<DeerfieldBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/delray-beach" element={<DelrayBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/greenacres" element={<GreenacresRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/hallandale-beach" element={<HallandaleBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/haverhill" element={<HaverillRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/highland-beach" element={<HighlandBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/hollywood" element={<HollywoodRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/hypoluxo" element={<HypoluxoRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/lake-park" element={<LakeParkRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/lake-worth-beach" element={<LakeWorthBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/lantana" element={<LantanaRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/lighthouse-point" element={<LighthousePointRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/palm-beach" element={<PalmBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/palm-beach-county-unincorporated" element={<PalmBeachCountyUnincorporatedRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/palm-beach-county" element={<PalmBeachCountyRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/parkland" element={<ParklandRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/pompano-beach" element={<PompanoBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/sunrise" element={<SunriseRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/wellington" element={<WellingtonRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/west-palm-beach" element={<WestPalmBeachRoofRepairPage />} />
            <Route path="/roofing-services/roof-repair/wilton-manors" element={<WiltonManorsRoofRepairPage />} />
            <Route path="/roof-inspection" element={<RoofInspectionPage />} />
            <Route path="/roof-maintenance-programs" element={<RoofMaintenanceProgramsPage />} />
            <Route path="/tile-roof-inspection-broward-county" element={<TileRoofInspectionBrowardCountyPage />} />
            <Route path="/tile-roof-inspection-palm-beach-county" element={<TileRoofInspectionPalmBeachCountyPage />} />
            <Route path="/metal-roof-inspection-broward-county" element={<MetalRoofInspectionBrowardCountyPage />} />
            <Route path="/metal-roof-inspection-palm-beach-county" element={<MetalRoofInspectionPalmBeachCountyPage />} />
            <Route path="/flat-roof-inspection-broward-county" element={<FlatRoofInspectionBrowardCountyPage />} />
            <Route path="/flat-roof-inspection-palm-beach-county" element={<FlatRoofInspectionPalmBeachCountyPage />} />
            <Route path="/flat-roof-moisture-infrared-inspection" element={<FlatRoofMoistureInfraredInspectionPage />} />
            <Route path="/insurance-roof-inspection" element={<InsuranceRoofInspectionPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/service-areas-index" element={<ServiceAreasIndexPage />} />
            <Route path="/service-areas/:citySlug" element={<ServiceAreaCityPage />} />
            <Route path="/boca-raton-old" element={<BocaRatonPage />} />
            <Route path="/wellington-old" element={<WellingtonPage />} />
            <Route path="/deerfield-beach-old" element={<DeerfieldBeachPage />} />
            <Route path="/fort-lauderdale-old" element={<FortLauderdalePage />} />
            <Route path="/coral-springs-old" element={<CoralSpringsPage />} />
            <Route path="/delray-beach-old" element={<DelrayBeachPage />} />
            <Route path="/boynton-beach-old" element={<BoyntonBeachPage />} />
            <Route path="/lake-worth-beach-old" element={<LakeWorthBeachPage />} />
            <Route path="/pompano-beach-old" element={<PompanoBeachPage />} />
            <Route path="/pompano-beach/roof-cost-estimate" element={<PompanoBeachCalculatorPage />} />
            <Route path="/coconut-creek-old" element={<CoconutCreekPage />} />
            <Route path="/cooper-city-old" element={<CooperCityPage />} />
            <Route path="/davie-old" element={<DaviePage />} />
            <Route path="/dania-beach-old" element={<DaniaBeachPage />} />
            <Route path="/hallandale-beach-old" element={<HallandaleBeachPage />} />
            <Route path="/hillsboro-beach-old" element={<HillsboroBeachPage />} />
            <Route path="/hollywood-old" element={<HollywoodPage />} />
            <Route path="/lauderdale-by-the-sea-old" element={<LauderdaleByTheSeaPage />} />
            <Route path="/lauderdale-lakes-old" element={<LauderdaleLakesPage />} />
            <Route path="/lauderhill-old" element={<LauderhillPage />} />
            <Route path="/lauderdale-ranches-old" element={<LauderdaleRanchesPage />} />
            <Route path="/lighthouse-point-old" element={<LighthousePointPage />} />
            <Route path="/margate-old" element={<MargatePage />} />
            <Route path="/margate/roof-cost-estimate" element={<MargateCalculatorPage />} />
            <Route path="/miramar-old" element={<MiramarPage />} />
            <Route path="/miramar/roof-cost-estimate" element={<MiramarCalculatorPage />} />
            <Route path="/north-lauderdale-old" element={<NorthLauderdalePage />} />
            <Route path="/north-lauderdale/roof-cost-estimate" element={<NorthLauderdaleCalculatorPage />} />
            <Route path="/oakland-park-old" element={<OaklandParkPage />} />
            <Route path="/parkland-old" element={<ParklandPage />} />
            <Route path="/parkland/roof-cost-estimate" element={<ParklandCalculatorPage />} />
            <Route path="/plantation-old" element={<PlantationPage />} />
            <Route path="/plantation/roof-cost-estimate" element={<PlantationCalculatorPage />} />
            <Route path="/sunrise-old" element={<SunrisePage />} />
            <Route path="/sunrise/roof-cost-estimate" element={<SunriseCalculatorPage />} />
            <Route path="/tamarac-old" element={<TamaracPage />} />
            <Route path="/tamarac/roof-cost-estimate" element={<TamaracCalculatorPage />} />
            <Route path="/weston-old" element={<WestonPage />} />
            <Route path="/weston/roof-cost-estimate" element={<WestonCalculatorPage />} />
            <Route path="/southwest-ranches-old" element={<SouthwestRanchesPage />} />
            <Route path="/southwest-ranches/roof-cost-estimate" element={<SouthwestRanchesCalculatorPage />} />
            <Route path="/haverhill-old" element={<HaverillPage />} />
            <Route path="/haverhill/roof-cost-estimate" element={<HaverillCalculatorPage />} />
            <Route path="/hypoluxo-old" element={<HypoluxoPage />} />
            <Route path="/hypoluxo/roof-cost-estimate" element={<HypoluxoCalculatorPage />} />
            <Route path="/highland-beach-old" element={<HighlandBeachPage />} />
            <Route path="/highland-beach/roof-cost-estimate" element={<HighlandBeachCalculatorPage />} />
            <Route path="/hillsboro-beach/roof-cost-estimate" element={<HillsboroBeachCalculatorPage />} />
            <Route path="/jupiter-old" element={<JupiterPage />} />
            <Route path="/jupiter-inlet-colony-old" element={<JupiterInletColonyPage />} />
            <Route path="/jupiter-inlet-colony/roof-cost-estimate" element={<JupiterInletColonyCalculatorPage />} />
            <Route path="/lantana-old" element={<LantanaPage />} />
            <Route path="/lantana/roof-cost-estimate" element={<LantanaCalculatorPage />} />
            <Route path="/lauderdale-lakes/roof-cost-estimate" element={<LauderdaleLakesCalculatorPage />} />
            <Route path="/lauderdale-ranches/roof-cost-estimate" element={<LauderdaleRanchesCalculatorPage />} />
            <Route path="/lauderdale-by-the-sea/roof-cost-estimate" element={<LauderdaleByTheSeaCalculatorPage />} />
            <Route path="/lauderhill/roof-cost-estimate" element={<LauderhillCalculatorPage />} />
            <Route path="/lighthouse-point/roof-cost-estimate" element={<LighthousePointCalculatorPage />} />
            <Route path="/loxahatchee-groves-old" element={<LoxahatcheeGrovesPage />} />
            <Route path="/loxahatchee-groves/roof-cost-estimate" element={<LoxahatcheeGrovesCalculatorPage />} />
            <Route path="/north-palm-beach-old" element={<NorthPalmBeachPage />} />
            <Route path="/north-palm-beach/roof-cost-estimate" element={<NorthPalmBeachCalculatorPage />} />
            <Route path="/ocean-ridge-old" element={<OceanRidgePage />} />
            <Route path="/ocean-ridge/roof-cost-estimate" element={<OceanRidgeCalculatorPage />} />
            <Route path="/palm-beach-old" element={<PalmBeachPage />} />
            <Route path="/palm-beach/roof-cost-estimate" element={<PalmBeachCalculatorPage />} />
            <Route path="/palm-beach-gardens-old" element={<PalmBeachGardensPage />} />
            <Route path="/palm-beach-gardens/roof-cost-estimate" element={<PalmBeachGardensCalculatorPage />} />
            <Route path="/palm-beach-shores-old" element={<PalmBeachShoresPage />} />
            <Route path="/palm-beach-shores/roof-cost-estimate" element={<PalmBeachShoresCalculatorPage />} />
            <Route path="/pembroke-park-old" element={<PembrokeParkPage />} />
            <Route path="/pembroke-park/roof-cost-estimate" element={<PembrokeParkCalculatorPage />} />
            <Route path="/pembroke-pines-old" element={<PembrokePinesPage />} />
            <Route path="/pembroke-pines/roof-cost-estimate" element={<PembrokePinesCalculatorPage />} />
            <Route path="/royal-palm-beach-old" element={<RoyalPalmBeachPage />} />
            <Route path="/royal-palm-beach/roof-cost-estimate" element={<RoyalPalmBeachCalculatorPage />} />
            <Route path="/sea-ranch-lakes-old" element={<SeaRanchLakesPage />} />
            <Route path="/sea-ranch-lakes/roof-cost-estimate" element={<SeaRanchLakesCalculatorPage />} />
            <Route path="/westlake-old" element={<WestlakePage />} />
            <Route path="/westlake/roof-cost-estimate" element={<WestlakeCalculatorPage />} />
            <Route path="/west-palm-beach-old" element={<WestPalmBeachPage />} />
            <Route path="/wilton-manors-old" element={<WiltonManorsPage />} />
            <Route path="/wilton-manors/roof-cost-estimate" element={<WiltonManorsCalculatorPage />} />
            <Route path="/greenacres-old" element={<GreenacresPage />} />
            <Route path="/greenacres/roof-cost-estimate" element={<GreenacresCalculatorPage />} />
            <Route path="/coconut-creek/roof-cost-estimate" element={<CoconutCreekCalculatorPage />} />
            <Route path="/cooper-city/roof-cost-estimate" element={<CooperCityCalculatorPage />} />
            <Route path="/coral-springs/roof-cost-estimate" element={<CoralSpringsCalculatorPage />} />
            <Route path="/dania-beach/roof-cost-estimate" element={<DaniaBeachCalculatorPage />} />
            <Route path="/davie/roof-cost-estimate" element={<DavieCalculatorPage />} />
            <Route path="/deerfield-beach/roof-cost-estimate" element={<DeerfieldBeachCalculatorPage />} />
            <Route path="/delray-beach/roof-cost-estimate" element={<DelrayBeachCalculatorPage />} />
            <Route path="/fort-lauderdale/roof-cost-estimate" element={<FortLauderdaleCalculatorPage />} />
            <Route path="/hallandale-beach/roof-cost-estimate" element={<HallandaleBeachCalculatorPage />} />
            <Route path="/hollywood/roof-cost-estimate" element={<HollywoodCalculatorPage />} />
            <Route path="/lake-worth-beach/roof-cost-estimate" element={<LakeWorthBeachCalculatorPage />} />
            <Route path="/wellington/roof-cost-estimate" element={<WellingtonCalculatorPage />} />
            <Route path="/boca-raton/roof-cost-estimate" element={<BocaRatonCalculatorPage />} />
            <Route path="/boynton-beach/roof-cost-estimate" element={<BoyntonBeachCalculatorPage />} />
            <Route path="/easy-payments" element={<EasyPaymentsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/how-to-hire-roofing-contractor" element={<HowToHireRoofingContractorPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/our-location" element={<OurLocationPage />} />
            <Route path="/broward-county-old" element={<BrowardCountyPage />} />
            <Route path="/palm-beach-county-old" element={<PalmBeachCountyPage />} />
            <Route path="/gulf-stream-old" element={<GulfStreamPage />} />
            <Route path="/roofing-contractor-boca-raton-fl-old" element={<BocaRatonTopRooferPage />} />
            <Route path="/roofing-contractor-boynton-beach-fl-old" element={<BoyntonBeachTopRooferPage />} />
            <Route path="/roofing-contractor-coconut-creek-fl-old" element={<CoconutCreekTopRooferPage />} />
            <Route path="/roofing-contractor-coral-springs-fl-old" element={<CoralSpringsTopRooferPage />} />
            <Route path="/roofing-contractor-deerfield-beach-fl-old" element={<DeerfieldBeachTopRooferPage />} />
            <Route path="/roofing-contractor-deerfield-beach-palm-beach-fl-old" element={<DeerfieldBeachPalmBeachTopRooferPage />} />
            <Route path="/roofing-contractor-fort-lauderdale-fl-old" element={<FortLauderdaleTopRooferPage />} />
            <Route path="/roofing-contractor-west-palm-beach-fl-old" element={<WestPalmBeachTopRooferPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/service-areas/:citySlug/service-area/:subCitySlug" element={<ServiceAreaDynamicPage />} />
            <Route path="/locations" element={<LocationsIndexPage />} />
            <Route path="/locations/deerfield-beach/service-area" element={<ServiceAreasHubPage />} />
            <Route path="/locations/deerfield-beach" element={<DeerfieldBeachCityPage />} />
            <Route path="/locations/deerfield-beach/service-area/:citySlug" element={<ServiceAreaPage />} />
            <Route path="/locations/deerfield-beach/service-area/:citySlug/roof-cost-calculator" element={<LocationCalculatorPage />} />
            <Route path="/locations/deerfield-beach/service-area/:citySlug/top-5-roofer" element={<TopRooferPage />} />
            <Route path="/qa/sitemap-audit" element={<SitemapAuditPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <AccessibilityWidget />
      <StickyMobileCTA />
      <ExitIntentPopup />
      <AssessmentModal isOpen={isOpen} onClose={closeModal} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AssessmentModalProvider>
        <AppContent />
      </AssessmentModalProvider>
    </Router>
  );
}

export default App;
