import React, { useState, useEffect, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import particlesConfig from '../config/particles.config'
import '../landing/landing.scss'

const LandingPage = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => (particlesConfig),
        [],
    );

    return (
        <div>
            <Particles
                className='tsparticles'
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    );


}

export default LandingPage