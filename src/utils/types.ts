export interface exploreDataProps {
  img: string;
  location: string;
  distance: string;
}

export interface cardsDataProps {
  img: string;
  title: string;
}

export interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface HomeProps {
  exploreData: exploreDataProps[];
  cardsData: cardsDataProps[];
}
