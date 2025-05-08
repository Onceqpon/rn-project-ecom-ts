import React, { createContext, useContext, useState, ReactNode } from 'react';

// Typ dla kategorii
interface Category {
  categoryId: string;
  title: string;
}

// Typ kontekstu
interface CategoryContextType {
  category: Category | null;
  setCategory: React.Dispatch<React.SetStateAction<Category | null>>;
}

// Tworzymy kontekst
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Hook do używania kontekstu
export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};

// Provider dla kontekstu
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<Category | null>(null); // Domyślnie brak kategorii

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
