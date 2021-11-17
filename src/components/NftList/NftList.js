import React, { useContext } from 'react';
import NftItem from '../NftItem';
import { appStore } from '../../state/app';

const NftList = () => {
  const { state, update } = useContext(appStore);
  const { app } = state;

  const handleClick = (revealMisfits) => {
    const newRevealMisfits = { ...app.revealMisfits, ...revealMisfits };

    update('app', { revealMisfits: newRevealMisfits });
    localStorage.setItem('revealMisfits', JSON.stringify(newRevealMisfits));
  };

  return (
    <div className="nfts-list">
      {app.misfitsArray.map((item) => (
        <NftItem
          key={item.token_id}
          item={item.metadata}
          isReveal={app.revealMisfits[item.token_id]}
          urlIpfs={app.urlIpfs}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default NftList;
