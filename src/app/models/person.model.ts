export interface Person {
  cpf: string;
  name: string;
  genre: string;
  address: string;
  age: number;
  neighborhood: string;
  state: string;
}

export interface PeopleResponse {
  data: Person[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}
