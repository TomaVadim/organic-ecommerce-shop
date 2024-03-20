interface Option {
  id: number;
  name: string;
}

export interface SelectWithOptions {
  id: number;
  name: string;
  options: Option[];
}
