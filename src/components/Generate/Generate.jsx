import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Why generate one?</h2>
          <p className="generate__text">
            Aside from participating in coolest, most amazing, and first of its
            kind NFT Avatar project on the NEAR ecosystem to date and getting a
            jaw dropping profile picture you can show off all over the interwebz
            - when you buy a NEAR Misfit you are helping us evolve and build the
            future of Misfits.
          </p>
          <p className="generate__text">
            We can’t reveal much yet, but the future is full of excitement and
            opportunities for Misfits!
          </p>
          <p className="generate__text-big">Alright, how much?</p>
          <p className="generate__text">
            NEAR Misfits are priced at a flat rate of {oneNFT} NEAR.
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}
          <div>
            <img
              className="generate__img"
              src="./images/generate-background-3.png"
              alt="generate kats"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
