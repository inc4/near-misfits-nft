import shortid from 'shortid';
import normies from '../../assets/images/rarity-common.svg';
import zombies from '../../assets/images/rarity-uncommon.svg';
import skeletons from '../../assets/images/rarity-rare.svg';
import glitch from '../../assets/images/rarity-super-rare.svg';

const rarityData = {
  misfits: [
    {
      id: shortid.generate(),
      svgRarityIcon: normies,
      alt: 'normies icon',
      src: './images/rarity-normies.png',
      srcSet:
        './images/rarity-normies-2x.webp 2x, ./images/rarity-normies.webp 1x',
    },
    {
      id: shortid.generate(),
      svgRarityIcon: zombies,
      alt: 'zombies icon',
      src: './images/rarity-zombies.png',
      srcSet:
        './images/rarity-zombies-2x.webp 2x, ./images/rarity-zombies.webp 1x',
    },
    {
      id: shortid.generate(),
      svgRarityIcon: skeletons,
      alt: 'skeletons icon',
      src: './images/rarity-skeletons.png',
      srcSet:
        './images/rarity-skeletons-2x.webp 2x, ./images/rarity-skeletons.webp 1x',
    },
    {
      id: shortid.generate(),
      svgRarityIcon: glitch,
      alt: 'glitch icon',
      src: './images/rarity-glitch.png',
      srcSet:
        './images/rarity-glitch-2x.webp 2x, ./images/rarity-glitch.webp 1x',
    },
  ],
};

export default rarityData;
