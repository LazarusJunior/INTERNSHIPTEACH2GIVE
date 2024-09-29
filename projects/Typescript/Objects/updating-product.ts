interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type UpdateProductInfo = Partial<Omit<Product, 'id'>>;

const updateProduct = (id: number, productInfo: UpdateProductInfo) => {
  // Do something with the productInfo
  console.log(`Updating product ${id} with:`, productInfo);
};

// Test cases
updateProduct(1, { name: "Book" });
updateProduct(1, { price: 12.99 });
updateProduct(1, { description: "A great book" });
updateProduct(1, { name: "Book", price: 12.99 });
updateProduct(1, { name: "Book", description: "A great book" });
