export type products = {
  id: number;
  titles: string;
  price: number;
  discription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
