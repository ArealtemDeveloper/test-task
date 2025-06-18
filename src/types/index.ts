export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export interface ICategoryItem {
  id: number;
  value: 'all' | 'progress' | 'completed';
  title: string;
}

export interface ICategory {
  all: ICategoryItem;
  inProgress: ICategoryItem;
  completed: ICategoryItem;
}
