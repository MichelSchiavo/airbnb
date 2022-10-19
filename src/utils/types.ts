export interface HomeProps {
  exploreData: ExploreDataProps[];
  cardsData: CardsDataProps[];
}

export interface HeaderProps {
  placeholder?: string;
}

export interface ExploreDataProps {
  img: string;
  location: string;
  distance: string;
}

export interface CardsDataProps {
  img: string;
  title: string;
}

export interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface SearchProps {
  searchResults: InfoCardProps[];
}

export interface InfoCardProps {
  description: string;
  img: string;
  lat: number;
  location: string;
  long: number;
  price: string;
  star: number;
  title: string;
  total: string;
}
