interface ProductCategory {
  categoryId: number;
  categoryName: string;
  description: string;
  details: any;
}

export type PartialProductCategory = Partial<ProductCategory>;

interface Product {
  productId: number;
  productName: string;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  category: PartialProductCategory;
  expanded: boolean;
  inEdit: boolean | string;
  locked: boolean;
}

export type PartialProduct = Partial<Product>;

interface ColumnInterface {
  title: string;
  field: string;
  show: boolean;
  filter: "boolean" | "numeric" | "text" | "date";
  minWidth: number;
  minGridWidth: number;
  locked: boolean;
  width: string | number;
}

export type PartialColumnInterface = Partial<ColumnInterface>;

export interface OrderShipAddress {
  street: string;
  city: string;
  region: string;
  postalCode: number;
  country: string;
}

export interface OrderDetails {
  productId: number;
  unitPrice: number;
  quantity: number;
  discount: number;
}

interface Order {
  orderID: number;
  customerID: string;
  employeeID: number;
  orderDate?: Date;
  requiredDate: Date;
  shippedDate?: Date;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: OrderShipAddress;
  details: OrderDetails[];
}

export type PartialOrder = Partial<Order>;

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  title: string;
}
