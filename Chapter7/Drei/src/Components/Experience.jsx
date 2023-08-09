import { Ball, Box, Floor } from ".";



const Experience = () => {

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Ball />
      <Box />
      <Floor />
    </>
  );
}

export default Experience;
