export default function Lights() {
    return (
      <>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1}
          castShadow
        />
      </>
    );
  }