import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { ReactSVG } from 'react-svg';
import { appStore } from '../../state/app';
import ShareSocialLinks from '../../components/ShareSocialLinks';
import Buy from '../../components/Buy';
import NoNfts from '../../components/NoNfts/NoNfts';
import background from '../../assets/images/link-drop-background.svg';
import ShareableLink from './ShareableLink';
import ShareableInput from './ShareableInput';
import ShareableCircle from './ShareableCircle';
import SaveBtn from './SaveBtn/SaveBtn';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const LinkDrop = () => {
  const history = useHistory();

  const { state, update } = useContext(appStore);
  const { app, account } = state;

  const [linkDropArray, setLinkDropArray] = useState([...app.linkDropArray]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { handleCopy } = useCopyToClipboard();

  useEffect(() => {
    if (app.linkDropArray.length) {
      setLinkDropArray([...app.linkDropArray]);
    }
  }, [app.linkDropArray.length]);

  useEffect(() => {
    if (!localStorage.undefined_wallet_auth_key) {
      history.push('/');
    }
  });

  const handleBlur = (e) => {
    const text = e.target.value;
    const dataIndex = +e.target.dataset.index;

    // update text for input
    const updatedLinkDropArray = linkDropArray.map((item, index) =>
      dataIndex === index ? { ...item, text } : item,
    );

    // update in state
    setLinkDropArray(updatedLinkDropArray);

    // update text in global state
    update('app.linkDropArray', [...updatedLinkDropArray]);

    // update in local storage for user
    localStorage.setItem(
      `linkDropArray:${account.accountId}`,
      JSON.stringify([...updatedLinkDropArray]),
    );
  };

  const handleCircleClick = (index) => setActiveIndex(index);

  // copy to clipboard when share social links (instagram/wechat/descord)

  const handleShareSocialLinks = () => {
    const activeText = linkDropArray[activeIndex]?.text;
    const activeLink = linkDropArray[activeIndex]?.link;

    const copyText = `${activeText}  ${activeLink}`;
    handleCopy(copyText);
  };

  return linkDropArray.length ? (
    <div className="link-drop">
      <div className="link-drop__data-wrapper" id="share-nft">
        <ReactSVG src={background} className="link-drop__background" />

        <div className="link-drop__data">
          <header className="link-drop__header">
            <span className="link-drop__header-purpure">Share</span> a mystery{' '}
            <span className="link-drop__header-purpure">NFT</span> with your
            friend
          </header>

          <div className="link-drop__center">
            <div>
              <ul className="link-drop__list">
                {linkDropArray.map((item, index) => (
                  <li className="link-drop__item" key={item.id}>
                    <ShareableCircle
                      activeLinkForShare={activeIndex}
                      onClick={handleCircleClick}
                      index={index}
                    />
                    <div className="link-drop__inputs">
                      <ShareableLink link={item.link} />
                      <ShareableInput
                        text={item.text}
                        index={index}
                        onBlur={handleBlur}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="link-drop__save">
                <SaveBtn linkDropArray={linkDropArray} />
              </div>

              <ShareSocialLinks
                color="blue"
                className="link-drop__share-links"
                text={linkDropArray[activeIndex]?.text}
                link={linkDropArray[activeIndex]?.link}
                onClick={handleShareSocialLinks}
              />
            </div>
            <picture>
              <source srcSet="./images/misfits-big-2x.webp 2x, ./images/misfits-big.webp 1x" />
              <img
                className="link-drop__img"
                src="/images/misfits-big.png"
                alt="big misfits"
              />
            </picture>
          </div>
        </div>
      </div>

      <Buy soldOut={app.soldOut} />
    </div>
  ) : (
    <NoNfts soldOut={app.soldOut} />
  );
};

export default LinkDrop;
