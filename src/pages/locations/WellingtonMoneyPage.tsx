import CityMoneyPage from './CityMoneyPage';

export default function WellingtonMoneyPage() {
  return (
    <CityMoneyPage
      city={{
        name: 'Wellington',
        slug: 'wellington',
        county: 'Palm Beach County',
        description: 'Professional roofing services in Wellington, Florida',
        latitude: 26.6584,
        longitude: -80.2683
      }}
    />
  );
}
