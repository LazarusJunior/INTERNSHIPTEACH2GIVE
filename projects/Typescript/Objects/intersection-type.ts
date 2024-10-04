type BaseEntity = {
  id: string;
  createdAt: Date;
};

type User1 = BaseEntity & {
  name: string;
  email: string;
};

type Product = BaseEntity & {
  name: string;
  price: number;
};
