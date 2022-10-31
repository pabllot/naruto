import demonslayer from '../assets/demonslayer.svg'
import bleach from '../assets/bleach.svg'
import hunter from '../assets/hunter.svg'
import greenArrow from '../assets/greenarrow.svg'
import redarrow from '../assets/redarrow.svg'
import goku from '../assets/goku.svg'
import naruto from '../assets/naruto.svg'
import onepiece from '../assets/onepiece.svg'

export const FirstGroup = [
    {name: 'Naruto', points: 2170, id: 1, img: naruto },
    {name: 'One Piece', points: 1370, id: 3, img: onepiece },
    {name: 'Dragon Ball', points: 1502, id: 2, img: goku }
];

 export const SecondGroup = [
    {name: 'Demon Slayer', points: 1038, id: 4, img: demonslayer, arrow: greenArrow },
    {name: 'Bleach', points: 920, id: 5, img: bleach, arrow: greenArrow},
    {name: 'Hunter X Hunter', points: 848, id: 6, img: hunter, arrow: redarrow } 
];

export const alternative = [
    {name: 'Naruto', points: 1210 },
    {name: 'One Piece', points: 870 },
    {name: 'Goku', points: 602 },
    {name: 'Demon Slayer', points: 1007 },
    {name: 'Bleach', points: 1390 },
    {name: 'Hunter X Hunter', points: 379 }
]