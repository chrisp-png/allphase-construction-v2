import CityMoneyPage from './CityMoneyPage';

export default function BoyntonBeachMoneyPage() {
  return (
    <CityMoneyPage
      city={{
        name: 'Boynton Beach',
        slug: 'boynton-beach',
        county: 'Palm Beach County',
        description: 'Professional roofing services in Boynton Beach, Florida',
        latitude: 26.5253,
        longitude: -80.0664
      }}
    />
  );
}
