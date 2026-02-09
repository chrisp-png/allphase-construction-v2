import CityMoneyPage from './CityMoneyPage';

export default function WestPalmBeachMoneyPage() {
  return (
    <CityMoneyPage
      city={{
        name: 'West Palm Beach',
        slug: 'west-palm-beach',
        county: 'Palm Beach County',
        description: 'Professional roofing services in West Palm Beach, Florida',
        latitude: 26.7153,
        longitude: -80.0534
      }}
    />
  );
}
