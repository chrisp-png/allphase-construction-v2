import CityMoneyPage from './CityMoneyPage';

export default function CoconutCreekMoneyPage() {
  return (
    <CityMoneyPage
      city={{
        name: 'Coconut Creek',
        slug: 'coconut-creek',
        county: 'Broward County',
        description: 'Professional roofing services in Coconut Creek, Florida',
        latitude: 26.2517,
        longitude: -80.1790
      }}
    />
  );
}
