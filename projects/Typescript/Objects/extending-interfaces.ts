interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface NamedEntity {
  name: string;
}

interface User extends BaseEntity, NamedEntity {
  email: string;
}

interface Product extends BaseEntity, NamedEntity {
  price: number;
}

// Example usage
const user: User = {
  id: "123",
  createdAt: new Date(),
  name: "John Doe",
  email: "john@example.com"
};

const product: Product = {
  id: "456",
  createdAt: new Date(),
  name: "Sample Product",
  price: 19.99
};

console.log(user, product);
