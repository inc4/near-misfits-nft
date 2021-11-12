import shortid from 'shortid';
import normies from '../../assets/images/rarity-common.svg';
import zombies from '../../assets/images/rarity-uncommon.svg';
import skeletons from '../../assets/images/rarity-rare.svg';
import nearkats from '../../assets/images/rarity-very-rare.svg';
import glitch from '../../assets/images/rarity-super-rare.svg';

import svgGlitch from '../../assets/images/rarity-glitch.svg';
import svgNormies from '../../assets/images/rarity-normies.svg';
import svgSkeleton from '../../assets/images/rarity-skeleton.svg';
import svgZombie from '../../assets/images/rarity-zombie.svg';

const rarityData = {
  rates: [
    {
      id: shortid.generate(),
      svgIcon: normies,
      count: '1,600',
      text: 'Normies',
    },
    {
      id: shortid.generate(),
      svgIcon: zombies,
      count: '150',
      text: 'Zombies',
    },
    {
      id: shortid.generate(),
      svgIcon: skeletons,
      count: '101',
      text: 'Skeletons',
    },
    {
      id: shortid.generate(),
      svgIcon: nearkats,
      count: '50',
      text: 'Nearkats',
    },
    {
      id: shortid.generate(),
      svgIcon: glitch,
      count: '22',
      text: 'Glitch',
    },
  ],
  kats: [
    {
      id: shortid.generate(),
      svgRarityIcon: normies,
      svgMainIcon: svgNormies,
    },
    {
      id: shortid.generate(),
      svgRarityIcon: zombies,
      svgMainIcon: svgZombie,
    },
    {
      id: shortid.generate(),
      svgRarityIcon: skeletons,
      svgMainIcon: svgSkeleton,
    },
    {
      id: shortid.generate(),
      svgRarityIcon: glitch,
      svgMainIcon: svgGlitch,
    },
  ],
};

export default rarityData;
