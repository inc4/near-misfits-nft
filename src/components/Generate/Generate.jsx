import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">
            <FormattedMessage
              id="generate.title"
              defaultMessage="Why generate one?"
            />
          </h2>
          <p className="generate__text">
            <FormattedMessage
              id="generate.textTop"
              defaultMessage="Aside from participating in coolest, most amazing, and first of its kind NFT Avatar project on the NEAR ecosystem to date and getting a jaw dropping profile picture you can show off all over the interwebz - when you buy a NEAR Misfit you are helping us evolve and build the future of Misfits."
            />
          </p>
          <p className="generate__text">
            <FormattedMessage
              id="generate.textCenter"
              defaultMessage="We can’t reveal much yet, but the future is full of excitement and opportunities for Misfits!"
            />
          </p>
          <p className="generate__text-big">
            <FormattedMessage
              id="generate.titleBottom"
              defaultMessage="Alright, how much?"
            />
          </p>
          <p className="generate__text">
            <FormattedMessage
              id="generate.textBottom"
              defaultMessage="NEAR Misfits are priced at a flat rate of"
            />{' '}
            {formatPrice(oneNFT)} NEAR.
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}

          <picture>
            <source srcSet="./images/generate-background-2x.webp 2x, ./images/generate-background.webp 1x" />
            <img
              className={`generate__img ${
                soldOut ? 'generate__img-sold-out' : ''
              }`}
              src="./images/generate-background.png"
              alt="generate misfits"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Generate;
