import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import StickyMobileCTA from './components/StickyMobileCTA';
import ExitIntentPopup from './components/ExitIntentPopup';
import ScrollToTop from './components/ScrollToTop';
import LowercaseRedirect from './components/LowercaseRedirect';
import AssessmentModal from './components/AssessmentModal';
import { AssessmentModalProvider, useAssessmentModal } from './context/AssessmentModalContext';
import NuclearMetadata from './components/NuclearMetadata';
import ErrorBoundary from './components/ErrorBoundary';

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
const RoofReplacementPage = lazy(() => import('./pages/RoofReplacementPage'));
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
const PricingGuidePage = lazy(() => import('./pages/PricingGuidePage'));
const LearningCenterPage = lazy(() => import('./pages/LearningCenterPage'));
const RoofingServicesPage = lazy(() => import('./pages/RoofingServicesPage'));
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
const ServiceAreasHubPage = lazy(() => import('./pages/locations/ServiceAreasHubPage'));
const BestRoofersDeerfieldBeachPage = lazy(() => import('./pages/BestRoofersDeerfieldBeachPage'));
const BestRoofersFortLauderdalePage = lazy(() => import('./pages/BestRoofersFortLauderdalePage'));
const TopRooferPage = lazy(() => import('./pages/locations/TopRooferPage'));
const DeerfieldBeachCityPage = lazy(() => import('./pages/locations/DeerfieldBeachCityPage'));
const BocaRatonMoneyPage = lazy(() => import('./pages/locations/BocaRatonMoneyPage'));
const FortLauderdaleMoneyPage = lazy(() => import('./pages/locations/FortLauderdaleMoneyPage'));
const CoralSpringsMoneyPage = lazy(() => import('./pages/locations/CoralSpringsMoneyPage'));
const PlantationMoneyPage = lazy(() => import('./pages/locations/PlantationMoneyPage'));
const SunriseMoneyPage = lazy(() => import('./pages/locations/SunriseMoneyPage'));
const TamaracMoneyPage = lazy(() => import('./pages/locations/TamaracMoneyPage'));
const DelrayBeachMoneyPage = lazy(() => import('./pages/locations/DelrayBeachMoneyPage'));
const BoyntonBeachMoneyPage = lazy(() => import('./pages/locations/BoyntonBeachMoneyPage'));
const WestPalmBeachMoneyPage = lazy(() => import('./pages/locations/WestPalmBeachMoneyPage'));
const CoconutCreekMoneyPage = lazy(() => import('./pages/locations/CoconutCreekMoneyPage'));
const SitemapAuditPage = lazy(() => import('./pages/qa/SitemapAuditPage'));
const FrequentlyAskedQuestionsPage = lazy(() => import('./pages/FrequentlyAskedQuestionsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import { DynamicLocationPage, DynamicRoofRepairPage, DynamicRoofInspectionPage } from './pages/DynamicCityRouter';

// Loading fallback with dark theme to prevent flash
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-[#09090b]" />
);

function AppContent() {
  const { isOpen, closeModal } = useAssessmentModal();

  return (
    <>
      <NuclearMetadata />
      {/*
        ═══════════════════════════════════════════════════════════════
        LAYOUT LOCK: Header and Footer are PERMANENTLY hard-coded here
        ═══════════════════════════════════════════════════════════════

        DO NOT REMOVE OR CONDITIONALLY RENDER Header/Footer.

        This ensures the branded React app with Header, Logo, and Footer
        loads for EVERY page, preventing "business card" ghost pages.

        All routes below will ALWAYS have the full branded layout.
        ═══════════════════════════════════════════════════════════════
      */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <LowercaseRedirect />
        <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roof-cost-calculator" element={<CalculatorPage />} />
            <Route path="/calculator" element={<Navigate to="/roof-cost-calculator/" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/residential-roofing" element={<ResidentialRoofingPage />} />
            <Route path="/commercial-roofing" element={<CommercialRoofingPage />} />
            <Route path="/roof-replacement-process" element={<RoofReplacementProcessPage />} />
            <Route path="/roof-replacement" element={<RoofReplacementPage />} />
            <Route path="/tile-roofing" element={<TileRoofingPage />} />
            <Route path="/metal-roofing" element={<MetalRoofingPage />} />
            <Route path="/shingle-roofing" element={<ShingleRoofingPage />} />
            <Route path="/flat-roofing" element={<FlatRoofingPage />} />
            <Route path="/single-ply-roofing" element={<SinglePlyRoofingPage />} />
            <Route path="/roof-repair" element={<RoofRepairPage />} />
            <Route path="/roof-repair/boca-raton" element={<BocaRatonRoofRepairPage />} />
            <Route path="/roof-repair/boynton-beach" element={<BoyntonBeachRoofRepairPage />} />
            <Route path="/roof-repair/broward-county" element={<BrowardCountyRoofRepairPage />} />
            <Route path="/roof-repair/coconut-creek" element={<CoconutCreekRoofRepairPage />} />
            <Route path="/roof-repair/cooper-city" element={<CooperCityRoofRepairPage />} />
            <Route path="/roof-repair/coral-springs" element={<CoralSpringsRoofRepairPage />} />
            <Route path="/roof-repair/dania-beach" element={<DaniaBeachRoofRepairPage />} />
            <Route path="/roof-repair/davie" element={<DavieRoofRepairPage />} />
            <Route path="/roof-repair/deerfield-beach" element={<DeerfieldBeachRoofRepairPage />} />
            <Route path="/roof-repair/delray-beach" element={<DelrayBeachRoofRepairPage />} />
            <Route path="/roof-repair/greenacres" element={<GreenacresRoofRepairPage />} />
            <Route path="/roof-repair/hallandale-beach" element={<HallandaleBeachRoofRepairPage />} />
            <Route path="/roof-repair/haverhill" element={<HaverillRoofRepairPage />} />
            <Route path="/roof-repair/highland-beach" element={<HighlandBeachRoofRepairPage />} />
            <Route path="/roof-repair/hollywood" element={<HollywoodRoofRepairPage />} />
            <Route path="/roof-repair/hypoluxo" element={<HypoluxoRoofRepairPage />} />
            <Route path="/roof-repair/lake-park" element={<LakeParkRoofRepairPage />} />
            <Route path="/roof-repair/lake-worth" element={<LakeWorthBeachRoofRepairPage />} />
            <Route path="/roof-repair/lantana" element={<LantanaRoofRepairPage />} />
            <Route path="/roof-repair/lighthouse-point" element={<LighthousePointRoofRepairPage />} />
            <Route path="/roof-repair/palm-beach" element={<PalmBeachRoofRepairPage />} />
            <Route path="/roof-repair/palm-beach-county" element={<PalmBeachCountyRoofRepairPage />} />
            <Route path="/roof-repair/palm-beach-county-unincorporated" element={<PalmBeachCountyUnincorporatedRoofRepairPage />} />
            <Route path="/roof-repair/parkland" element={<ParklandRoofRepairPage />} />
            <Route path="/roof-repair/pompano-beach" element={<PompanoBeachRoofRepairPage />} />
            <Route path="/roof-repair/sunrise" element={<SunriseRoofRepairPage />} />
            <Route path="/roof-repair/wellington" element={<WellingtonRoofRepairPage />} />
            <Route path="/roof-repair/west-palm-beach" element={<WestPalmBeachRoofRepairPage />} />
            <Route path="/roof-repair/wilton-manors" element={<WiltonManorsRoofRepairPage />} />
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
            <Route path="/easy-payments" element={<EasyPaymentsPage />} />
            <Route path="/pricing-guide" element={<PricingGuidePage />} />
            <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestionsPage />} />
            <Route path="/learning-center" element={<LearningCenterPage />} />
            <Route path="/roofing-services" element={<RoofingServicesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/how-to-hire-roofing-contractor" element={<HowToHireRoofingContractorPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/our-location" element={<OurLocationPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/locations" element={<Navigate to="/locations/deerfield-beach/" replace />} />
            <Route path="/locations/deerfield-beach" element={<DeerfieldBeachCityPage />} />
            <Route path="/locations/deerfield-beach/best-roofers-deerfield-beach" element={<BestRoofersDeerfieldBeachPage />} />
            <Route path="/locations/boca-raton" element={<BocaRatonMoneyPage />} />
            <Route path="/locations/fort-lauderdale" element={<FortLauderdaleMoneyPage />} />
            <Route path="/locations/fort-lauderdale/best-roofers-fort-lauderdale" element={<BestRoofersFortLauderdalePage />} />
            <Route path="/locations/coral-springs" element={<CoralSpringsMoneyPage />} />
            <Route path="/locations/plantation" element={<PlantationMoneyPage />} />
            <Route path="/locations/sunrise" element={<SunriseMoneyPage />} />
            <Route path="/locations/tamarac" element={<TamaracMoneyPage />} />
            <Route path="/locations/delray-beach" element={<DelrayBeachMoneyPage />} />
            <Route path="/locations/boynton-beach" element={<BoyntonBeachMoneyPage />} />
            <Route path="/locations/wellington" element={<WellingtonPage />} />
            <Route path="/locations/west-palm-beach" element={<WestPalmBeachMoneyPage />} />
            <Route path="/locations/coconut-creek" element={<CoconutCreekMoneyPage />} />
            <Route path="/locations/service-areas" element={<ServiceAreasHubPage />} />
            <Route path="/locations/:city" element={<DynamicLocationPage />} />
            <Route path="/roof-repair/:city" element={<DynamicRoofRepairPage />} />
            <Route path="/roof-inspection/:city" element={<DynamicRoofInspectionPage />} />
            <Route path="/qa/sitemap-audit" element={<SitemapAuditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <AccessibilityWidget />
      <StickyMobileCTA />
      <ExitIntentPopup />
      <AssessmentModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AssessmentModalProvider>
          <AppContent />
        </AssessmentModalProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
