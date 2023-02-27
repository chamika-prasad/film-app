import Particles from 'react-tsparticles'
import { useCallback } from "react";
import ParticlesConfig from './config/particles-config'
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);
  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
        />

  )
}

export default ParticlesBackground
