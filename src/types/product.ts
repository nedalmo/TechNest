export type ProductType = {
  id: number;
  title: string;
  max:number,
  cat_prefix: string;
  img:  string [];
  price: number;
  discount:number |0,
isliked?:boolean,
inCart? :number,
  quntity?:number | 0 ,
  latest?:boolean,
  isOfferYouLike?:boolean,
  bestSelling?:boolean,
  specifications?: {title:string,value:string}[],
  productInformation?: {title:string,value:string}[]
  findUser?:boolean,
};