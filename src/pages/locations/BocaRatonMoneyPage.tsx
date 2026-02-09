import CityMoneyPage from './CityMoneyPage';

export default function BocaRatonMoneyPage() {
  return (
    <CityMoneyPage
      city={{
        name: 'Boca Raton',
        slug: 'boca-raton',
        county: 'Palm Beach County',
        description: 'Professional roofing services in Boca Raton, Florida',
        latitude: 26.3683,
        longitude: -80.1289
      }}
    />
  );
}
