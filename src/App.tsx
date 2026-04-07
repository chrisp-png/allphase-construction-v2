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
const WellingtonPage = lazy(() => import('./pages/WellingtonPage'));
const EasyPaymentsPage = lazy(() => import('./pages/EasyPaymentsPage'));
const PricingGuidePage = lazy(() => import('./pages/PricingGuidePage'));
const LearningCenterPage = lazy(() => import('./pages/LearningCenterPage'));
const RoofingServicesPage = lazy(() => import('./pages/RoofingServicesPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));
const HowToHireRoofingContractorPage = lazy(() => import('./pages/HowToHireRoofingContractorPage'));
const LicensedRoofingContractorPage = lazy(() => import('./pages/LicensedRoofingContractorPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const OurLocationPage = lazy(() => import('./pages/OurLocationPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ServiceAreasHubPage = lazy(() => import('./pages/locations/ServiceAreasHubPage'));
const BestRoofersDeerfieldBeachPage = lazy(() => import('./pages/BestRoofersDeerfieldBeachPage'));
const BestRoofersFortLauderdalePage = lazy(() => import('./pages/BestRoofersFortLauderdalePage'));
const BestRoofersWestPalmBeachPage = lazy(() => import('./pages/BestRoofersWestPalmBeachPage'));
const BestRoofersBocaRatonPage = lazy(() => import('./pages/BestRoofersBocaRatonPage'));
const BestRoofersWellingtonPage = lazy(() => import('./pages/BestRoofersWellingtonPage'));
const BestRooferCoralSpringsPage = lazy(() => import('./pages/BestRooferCoralSpringsPage'));
const BestRoofersPompanoBeachPage = lazy(() => import('./pages/BestRoofersPompanoBeachPage'));
const BestRoofersHollywoodPage = lazy(() => import('./pages/BestRoofersHollywoodPage'));
const BestRoofersSunrisePage = lazy(() => import('./pages/BestRoofersSunrisePage'));
const BestRoofersPlantationPage = lazy(() => import('./pages/BestRoofersPlantationPage'));
const BestRoofersDaviePage = lazy(() => import('./pages/BestRoofersDaviePage'));
const BestRoofersMiramarPage = lazy(() => import('./pages/BestRoofersMiramarPage'));
const BestRoofersPembrokePinesPage = lazy(() => import('./pages/BestRoofersPembrokePinesPage'));
const BestRoofersDelrayBeachPage = lazy(() => import('./pages/BestRoofersDelrayBeachPage'));
const BestRoofersBoyntonBeachPage = lazy(() => import('./pages/BestRoofersBoyntonBeachPage'));
const BestRoofersJupiterPage = lazy(() => import('./pages/BestRoofersJupiterPage'));
const BestRoofersPalmBeachGardensPage = lazy(() => import('./pages/BestRoofersPalmBeachGardensPage'));
const BestRoofersRoyalPalmBeachPage = lazy(() => import('./pages/BestRoofersRoyalPalmBeachPage'));
const BestRoofersGreenacresPage = lazy(() => import('./pages/BestRoofersGreenacresPage'));
const BestRoofersLakeWorthBeachPage = lazy(() => import('./pages/BestRoofersLakeWorthBeachPage'));
const SouthFloridaRoofingReviewsPage = lazy(() => import('./pages/SouthFloridaRoofingReviewsPage'));
const BrowardCountyRoofReplacementGuidePage = lazy(() => import('./pages/BrowardCountyRoofReplacementGuidePage'));
const RoofReplacementCostFloridaPage = lazy(() => import('./pages/RoofReplacementCostFloridaPage'));
const FloridaRoofInsuranceClaimsGuidePage = lazy(() => import('./pages/FloridaRoofInsuranceClaimsGuidePage'));
const BocaRatonRoofReplacementGuidePage = lazy(() => import('./pages/BocaRatonRoofReplacementGuidePage'));
const PalmBeachCountyRoofReplacementGuidePage = lazy(() => import('./pages/PalmBeachCountyRoofReplacementGuidePage'));
const RoofReplacementCostDeerfieldBeachPage = lazy(() => import('./pages/RoofReplacementCostDeerfieldBeachPage'));
const BocaRatonRoofReplacementTimelinePage = lazy(() => import('./pages/BocaRatonRoofReplacementTimelinePage'));
const CoralSpringsRoofPermitGuidePage = lazy(() => import('./pages/CoralSpringsRoofPermitGuidePage'));
const PompanoBeachRoofInspectionPage = lazy(() => import('./pages/PompanoBeachRoofInspectionPage'));
const DelrayBeachRoofOverlayVsTearOffPage = lazy(() => import('./pages/DelrayBeachRoofOverlayVsTearOffPage'));
// Pillar 2: Roofing Materials & Systems
const MetalRoofingCostFortLauderdalePage = lazy(() => import('./pages/MetalRoofingCostFortLauderdalePage'));
const TileRoofReplacementWellingtonPage = lazy(() => import('./pages/TileRoofReplacementWellingtonPage'));
const StandingSeamMetalRoofJupiterPage = lazy(() => import('./pages/StandingSeamMetalRoofJupiterPage'));
const FlatRoofTpoVsPvcWestPalmBeachPage = lazy(() => import('./pages/FlatRoofTpoVsPvcWestPalmBeachPage'));
const SwitchFromShinglesToMetalPlantationPage = lazy(() => import('./pages/SwitchFromShinglesToMetalPlantationPage'));
const HurricaneRoofDamageInspectionHollywoodPage = lazy(() => import('./pages/HurricaneRoofDamageInspectionHollywoodPage'));
const WindDamageInsuranceClaimBoyntonBeachPage = lazy(() => import('./pages/WindDamageInsuranceClaimBoyntonBeachPage'));
const EmergencyRoofTarpPembrokePinesPage = lazy(() => import('./pages/EmergencyRoofTarpPembrokePinesPage'));
const HailDamageRoofParklandPage = lazy(() => import('./pages/HailDamageRoofParklandPage'));
const StormDamageRepairOrReplaceDaviePage = lazy(() => import('./pages/StormDamageRepairOrReplaceDaviePage'));
const AnnualRoofInspectionSunrisePage = lazy(() => import('./pages/AnnualRoofInspectionSunrisePage'));
const WindMitigationInspectionPalmBeachGardensPage = lazy(() => import('./pages/WindMitigationInspectionPalmBeachGardensPage'));
const RoofMaintenanceTipsMiramarPage = lazy(() => import('./pages/RoofMaintenanceTipsMiramarPage'));
const FourPointInspectionRoofLakeWorthBeachPage = lazy(() => import('./pages/FourPointInspectionRoofLakeWorthBeachPage'));
const RoofLeakDetectionWestonPage = lazy(() => import('./pages/RoofLeakDetectionWestonPage'));
const PreListingRoofCertificationCoconutCreekPage = lazy(() => import('./pages/PreListingRoofCertificationCoconutCreekPage'));
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
        ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ
        LAYOUT LOCK: Header and Footer are PERMANENTLY hard-coded here
        ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ

        DO NOT REMOVE OR CONDITIONALLY RENDER Header/Footer.

        This ensures the branded React app with Header, Logo, and Footer
        loads for EVERY page, preventing "business card" ghost pages.

        All routes below will ALWAYS have the full branded layout.
        ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ
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
            <Route path="/south-florida-roofing-reviews" element={<SouthFloridaRoofingReviewsPage />} />
            <Route path="/broward-county-roof-replacement-guide" element={<BrowardCountyRoofReplacementGuidePage />} />
            <Route path="/roof-replacement-cost-florida" element={<RoofReplacementCostFloridaPage />} />
            <Route path="/florida-roof-insurance-claims-guide" element={<FloridaRoofInsuranceClaimsGuidePage />} />
            <Route path="/boca-raton-roof-replacement-guide" element={<BocaRatonRoofReplacementGuidePage />} />
            <Route path="/palm-beach-county-roof-replacement-guide" element={<PalmBeachCountyRoofReplacementGuidePage />} />
            <Route path="/roof-replacement-cost-deerfield-beach" element={<RoofReplacementCostDeerfieldBeachPage />} />
            <Route path="/boca-raton-roof-replacement-timeline" element={<BocaRatonRoofReplacementTimelinePage />} />
            <Route path="/coral-springs-roof-permit-guide" element={<CoralSpringsRoofPermitGuidePage />} />
            <Route path="/pompano-beach-roof-inspection" element={<PompanoBeachRoofInspectionPage />} />
            <Route path="/delray-beach-roof-overlay-vs-tear-off" element={<DelrayBeachRoofOverlayVsTearOffPage />} />
            <Route path="/metal-roofing-cost-fort-lauderdale" element={<MetalRoofingCostFortLauderdalePage />} />
            <Route path="/tile-roof-replacement-wellington" element={<TileRoofReplacementWellingtonPage />} />
            <Route path="/standing-seam-metal-roof-jupiter" element={<StandingSeamMetalRoofJupiterPage />} />
            <Route path="/flat-roof-tpo-vs-pvc-west-palm-beach" element={<FlatRoofTpoVsPvcWestPalmBeachPage />} />
            <Route path="/switch-from-shingles-to-metal-plantation" element={<SwitchFromShinglesToMetalPlantationPage />} />
            <Route path="/hurricane-roof-damage-inspection-hollywood" element={<HurricaneRoofDamageInspectionHollywoodPage />} />
            <Route path="/wind-damage-insurance-claim-boynton-beach" element={<WindDamageInsuranceClaimBoyntonBeachPage />} />
            <Route path="/emergency-roof-tarp-pembroke-pines" element={<EmergencyRoofTarpPembrokePinesPage />} />
            <Route path="/hail-damage-roof-parkland" element={<HailDamageRoofParklandPage />} />
            <Route path="/storm-damage-repair-or-replace-davie" element={<StormDamageRepairOrReplaceDaviePage />} />
            <Route path="/annual-roof-inspection-sunrise" element={<AnnualRoofInspectionSunrisePage />} />
            <Route path="/wind-mitigation-inspection-palm-beach-gardens" element={<WindMitigationInspectionPalmBeachGardensPage />} />
            <Route path="/roof-maintenance-tips-miramar" element={<RoofMaintenanceTipsMiramarPage />} />
            <Route path="/four-point-inspection-roof-lake-worth-beach" element={<FourPointInspectionRoofLakeWorthBeachPage />} />
            <Route path="/roof-leak-detection-weston" element={<RoofLeakDetectionWestonPage />} />
            <Route path="/pre-listing-roof-certification-coconut-creek" element={<PreListingRoofCertificationCoconutCreekPage />} />
            <Route path="/licensed-roofing-contractor" element={<LicensedRoofingContractorPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/our-location" element={<OurLocationPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/locations" element={<Navigate to="/locations/deerfield-beach/" replace />} />
            <Route path="/locations/deerfield-beach" element={<DeerfieldBeachCityPage />} />
            <Route path="/locations/deerfield-beach/best-roofers-deerfield-beach" element={<BestRoofersDeerfieldBeachPage />} />
            <Route path="/locations/boca-raton" element={<BocaRatonMoneyPage />} />
            <Route path="/locations/boca-raton/best-roofers-boca-raton" element={<BestRoofersBocaRatonPage />} />
            <Route path="/locations/fort-lauderdale" element={<FortLauderdaleMoneyPage />} />
            <Route path="/locations/fort-lauderdale/best-roofers-fort-lauderdale" element={<BestRoofersFortLauderdalePage />} />
            <Route path="/locations/coral-springs" element={<CoralSpringsMoneyPage />} />
            <Route path="/locations/coral-springs/best-roofers-coral-springs" element={<BestRooferCoralSpringsPage />} />
            <Route path="/locations/plantation" element={<PlantationMoneyPage />} />
            <Route path="/locations/sunrise" element={<SunriseMoneyPage />} />
            <Route path="/locations/tamarac" element={<TamaracMoneyPage />} />
            <Route path="/locations/delray-beach" element={<DelrayBeachMoneyPage />} />
            <Route path="/locations/boynton-beach" element={<BoyntonBeachMoneyPage />} />
            <Route path="/locations/wellington" element={<WellingtonPage />} />
            <Route path="/locations/wellington/best-roofers-wellington" element={<BestRoofersWellingtonPage />} />
            <Route path="/locations/west-palm-beach" element={<WestPalmBeachMoneyPage />} />
            <Route path="/locations/west-palm-beach/best-roofers-west-palm-beach" element={<BestRoofersWestPalmBeachPage />} />
            <Route path="/locations/coconut-creek" element={<CoconutCreekMoneyPage />} />
            {/* 14 new best-roofers city pages — data-driven React component */}
            <Route path="/locations/pompano-beach/best-roofers-pompano-beach" element={<BestRoofersPompanoBeachPage />} />
            <Route path="/locations/hollywood/best-roofers-hollywood" element={<BestRoofersHollywoodPage />} />
            <Route path="/locations/sunrise/best-roofers-sunrise" element={<BestRoofersSunrisePage />} />
            <Route path="/locations/plantation/best-roofers-plantation" element={<BestRoofersPlantationPage />} />
            <Route path="/locations/davie/best-roofers-davie" element={<BestRoofersDaviePage />} />
            <Route path="/locations/miramar/best-roofers-miramar" element={<BestRoofersMiramarPage />} />
            <Route path="/locations/pembroke-pines/best-roofers-pembroke-pines" element={<BestRoofersPembrokePinesPage />} />
            <Route path="/locations/delray-beach/best-roofers-delray-beach" element={<BestRoofersDelrayBeachPage />} />
            <Route path="/locations/boynton-beach/best-roofers-boynton-beach" element={<BestRoofersBoyntonBeachPage />} />
            <Route path="/locations/jupiter/best-roofers-jupiter" element={<BestRoofersJupiterPage />} />
            <Route path="/locations/palm-beach-gardens/best-roofers-palm-beach-gardens" element={<BestRoofersPalmBeachGardensPage />} />
            <Route path="/locations/royal-palm-beach/best-roofers-royal-palm-beach" element={<BestRoofersRoyalPalmBeachPage />} />
            <Route path="/locations/greenacres/best-roofers-greenacres" element={<BestRoofersGreenacresPage />} />
            <Route path="/locations/lake-worth-beach/best-roofers-lake-worth-beach" element={<BestRoofersLakeWorthBeachPage />} />
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
