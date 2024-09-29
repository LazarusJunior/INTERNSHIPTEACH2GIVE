type BaseEntity = {
  id: string;
  createdAt: Date;
};

type User = BaseEntity & {
  name: string;
  email: string;
};

type Product = BaseEntity & {
  name: string;
  price: number;
};
