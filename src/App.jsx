import ColorBends from './ColorBends';

export default function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#100e14',
        overflow: 'hidden',
      }}
    >
      <ColorBends
        colors={['#5567f7']}
        rotation={90}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.15}
      />
    </div>
  );
}
