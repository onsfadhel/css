import React, { useEffect, useRef } from 'react';
import './Slider.css';
import backgroundImg from '../cssjs/images/backgroundkhedma.png';
import secondbackground from '../cssjs/images/bg2khedma.png';

function Slider() {
  const slideImgRef = useRef(null);
  const images = [backgroundImg, secondbackground];
  const len = images.length;
  let i = 1; // Start from index 1 to skip the initial backgroundImg

  useEffect(() => {
    slideImgRef.current.src = backgroundImg; // Set the initial backgroundImg

    const slider = setInterval(() => {
      if (i > len - 1) {
        i = 0;
      }
      slideImgRef.current.src = images[i];
      i++;
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [images, len]);

  return (
    <div className='banner'>
      <div className='slider'>
        <img ref={slideImgRef} id="slideImg" alt="Slider" />
      </div>
      <div className='overlay'>
        <div className='content'>
                <p>Bienvenue dans</p>
                <h1>Khedma</h1>
                <h3>Vous cherchez des emplois à court, moyen et à long terme?Nous vous met en relation avec les meilleurs offres. </h3>
                <h4>Accédez à une vaste communauté de chercheurs d'emploi.
                    <br/>Trouvez le candidat idéal parmi notre réseau dynamique.
                </h4>
                <div className='btnalign'>
                    <button type='button' style={{ borderRadius:"25px"}}>POSTER</button> &nbsp;&nbsp;&nbsp;
                    <button type='button' style={{ borderRadius:"25px"}} className='btn-2'>CREER UN COMPTE</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Slider;
