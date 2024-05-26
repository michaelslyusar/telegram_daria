import placeHolderImage from '../Images/placeholder.png';

export const getData = () => {
  return [
    { title: 'Item1', description: 'Item1 desc',price:10000, image: placeHolderImage,id:1},
    { title: 'Item2', description: 'Item2 desc',price:5000, image: placeHolderImage,id:2},
    { title: 'Item3', description: 'Item3 desc',price:3000, image: placeHolderImage,id:3}
  ];
};
