import Chance from 'chance';

const chance = new Chance();

const productImages = [
  'https://a.lmcdn.ru/product/R/T/RTLADF170801_23308270_2_v2_2x.jpg',
  'https://a.lmcdn.ru/img600x866/M/P/MP002XU00NFI_19187924_2_v1.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLADL995801_24943724_1_v1_2x.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLADW155101_25400225_2_v1.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLADW932601_25309594_1_v1.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLADF393401_24227979_1_v2_2x.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLADT866101_24731880_1_v1_2x.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLACZ285501_21126384_1_v1.jpg',
  'https://a.lmcdn.ru/img600x866/R/T/RTLADG475701_23701835_1_v1.jpg',
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * productImages.length);
  return productImages[randomIndex];
};

const generateProducts = (num = 15) => {
  const colors = ['Красный', 'Синий', 'Зеленый', 'Желтый', 'Черный'];
  const categories = ['Рубашки', 'Брюки', 'Обувь', 'Шляпы', 'Аксессуары'];

  return Array.from({ length: num }, (_, index) => ({
    id: chance.guid(),
    name: chance.word(),
    description: chance.sentence({ words: 5 }),
    color: chance.pickone(colors),
    category: chance.pickone(categories),
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl: getRandomImage(),
  }));
};

export default generateProducts;