export interface Product {
    _id: number;
    title: string;
    createdAt: string;
    sales: number; 
    price: string;
    description: string;
    image: string;
    category?: string;
    productType?: string;
  }
  
  export interface FilterProps {
    onFilterChange: (filters: {
      category: string[];
      productType: string[];
      price: string[];
    }) => void;
    onSortChange: (sortBy: string) => void;
  }
  