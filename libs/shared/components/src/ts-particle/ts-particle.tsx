import { useCallback } from 'react';
import { ParticleProps } from '..';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

export const TsParticle = ({
  backgroundColor = '#121214',
  particlesColor = '#00b37e',
}: ParticleProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container;
    },
    [],
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: backgroundColor,
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          color: {
            value: particlesColor,
          },
          number: {
            value: 150,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 },
            direction: 'top',
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          size: {
            value: { min: 1.5, max: 2.5 },
          },
        },
      }}
    />
  );
};
