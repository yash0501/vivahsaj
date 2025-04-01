export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  slug: string;
  imageUrl?: string;
}

export interface BudgetCategory {
  id: number;
  name: string;
  percentage: number;
  budget: number;
  actual: number;
}

export interface BudgetData {
  totalBudget: number;
  categories: BudgetCategory[];
}
