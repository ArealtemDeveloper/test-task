import { ITask, ICategory } from '@/types';

export const TODOS: ITask[] = [
  {
    id: 1,
    title: 'Прочитать требования',
    completed: false,
  },
  {
    id: 2,
    title: 'Подготовить проект',
    completed: false,
  },
  {
    id: 3,
    title: 'Выполнить тестовое задание',
    completed: false,
  },
];

export const CATEGORIES: ICategory = {
  all: {
    id: 1,
    value: 'all',
    title: 'Все',
  },

  inProgress: {
    id: 2,
    value: 'progress',
    title: 'Активные',
  },

  completed: {
    id: 3,
    value: 'completed',
    title: 'Выполненные',
  },
};
