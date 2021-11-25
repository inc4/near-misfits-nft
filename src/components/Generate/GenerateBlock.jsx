import React, { memo } from 'react';
import BuyMoreBtn from '../BuyMoreBtn';
import GenerateCountBtn from '../GenerateCountBtn';
import useBuy from '../../hooks/useBuy';
import useMintNft from '../../hooks/useMintNft';

const GenerateBlock = () => {
  const { mintNft } = useMintNft();

  const {
    count,
    state,
    showMessage,
    setShowMessage,
    showCountAnimation,
    formatPrice,
    handleNumberClick,
  } = useBuy();

  const { wallet, price, app } = state;

  const handleClick = () => {
    if (!wallet.signedIn) {
      const successUrl = `${window.location.origin}/#generate-block`;
      wallet.signIn(successUrl);
    } else if (!count) {
      setShowMessage(true);
    } else {
      mintNft(count);
    }
  };

  const moreThenManyCount = app.tokensLeft >= app.manyCount;
  const textForMessage = moreThenManyCount
    ? `select ${app.oneCount} or ${app.manyCount} misfits`
    : `select ${app.oneCount} misfit`;

  return (
    <div id="generate-block" className="generate-block">
      <div className="generate-block__line"></div>
      <div className="generate-block__vertical-line "></div>
      <div className="generate-block__price ">
        <span className="generate-block__near">Ⓝ&nbsp;</span>

        <p className={`generate-block__count  ${showCountAnimation}`}>
          {count === app.manyCount
            ? formatPrice(price.manyNFTS)
            : formatPrice(price.oneNFT)}
        </p>
      </div>
      <BuyMoreBtn
        onClick={handleClick}
        text="Generate"
        className="generate-block__button"
      />
      <GenerateCountBtn
        count={app.oneCount}
        onClick={() => handleNumberClick(app.oneCount)}
        isActive={count === app.oneCount}
      />

      {/* Show this block only for NFT and only if tokens left more or equal manyCount ( 10 in our case ) */}
      {moreThenManyCount && (
        <GenerateCountBtn
          count={app.manyCount}
          onClick={() => handleNumberClick(app.manyCount)}
          isActive={count === app.manyCount}
        />
      )}

      {showMessage && (
        <div
          className="generate-block__message"
          style={{
            transform: `translateX(${moreThenManyCount ? '0' : '30px'})`,
          }}
        >
          {textForMessage}
        </div>
      )}
    </div>
  );
};
export default memo(GenerateBlock);
