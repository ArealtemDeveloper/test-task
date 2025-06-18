import { TODOS } from '@/constants/todos';
import { simulateAsync } from '@/utils/simulateFetch';

import { CATEGORIES } from '@/constants/todos';

import { ITask, ICategoryItem } from '@/types';

interface ITodoState {
  todos: ITask[];
  currentTab: ICategoryItem['value'];
}

interface ITodoGetters {
  getLastTodoId(state: ITodoState): number;
  getFilteredTodos(state: ITodoState): ITask[] | undefined;
}

interface ITodoActions {
  fetchTodos({ commit }: { commit: (mutation: string, payload: ITask[]) => void }): Promise<void>;
  addTodo(
    { commit }: { commit: (mutation: string, payload: ITask) => void },
    payload: ITask,
  ): Promise<void>;
  changeTodoCompleted(
    {
      commit,
    }: {
      commit: (
        mutation: string,
        payload: { id: ITask['id']; completed: ITask['completed'] },
      ) => void;
    },
    payload: ITask,
  ): Promise<void>;
  deleteTodo(
    { commit }: { commit: (mutation: string, payload: { id: ITask['id'] }) => void },
    payload: ITask,
  ): Promise<void>;
  changeCategory(
    { commit }: { commit: (mutation: string, payload: ICategoryItem['value']) => void },
    payload: string,
  ): void;
}

interface ITodoMutations {
  SET_TODOS(state: ITodoState, payload: ITask[]): void;
  ADD_TODO(state: ITodoState, payload: ITask): void;
  CHANGE_TODO(state: ITodoState, payload: ITask): void;
  DELETE_TODO(state: ITodoState, payload: ITask): void;
  CHANGE_TODO_CATEGORY(state: ITodoState, payload: ICategoryItem['value']): void;
}

export const todoModule = {
  state: (): ITodoState => ({
    todos: TODOS,
    currentTab: CATEGORIES.all.value,
  }),

  getters: {
    getLastTodoId(state) {
      return state.todos.at(-1)?.id || 1;
    },

    getFilteredTodos(state) {
      const filterMap = {
        [CATEGORIES.all.value]: () => state.todos,
        [CATEGORIES.completed.value]: () => state.todos.filter((item: ITask) => item.completed),
        [CATEGORIES.inProgress.value]: () => state.todos.filter((item: ITask) => !item.completed),
      };

      return filterMap[state.currentTab] ? filterMap[state.currentTab]() : state.todos;
    },
  } as ITodoGetters,

  actions: {
    async fetchTodos({ commit }) {
      try {
        const res = await simulateAsync<ITask[]>(TODOS);

        if (res.length) {
          commit('SET_TODOS', res);
        }
      } catch (err: unknown) {
        console.warn('Error:', err);
      }
    },

    async addTodo({ commit }, payload) {
      try {
        await simulateAsync<ITask>(payload);

        commit('ADD_TODO', payload);
      } catch (error: unknown) {
        console.warn('Error:', error);
      }
    },

    async changeTodoCompleted({ commit }, payload) {
      try {
        await simulateAsync<ITask>(payload);

        commit('CHANGE_TODO', payload);
      } catch (error: unknown) {
        console.warn('Error:', error);
      }
    },

    async deleteTodo({ commit }, payload: { id: ITask['id'] }) {
      try {
        await simulateAsync<{ id: ITask['id'] }>(payload);

        commit('DELETE_TODO', payload);
      } catch (err: unknown) {
        console.warn('Error:', err);
      }
    },

    changeCategory({ commit }, payload: ICategoryItem['value']) {
      commit('CHANGE_TODO_CATEGORY', payload);
    },
  } as ITodoActions,

  mutations: {
    SET_TODOS(state, payload) {
      state.todos = payload;
    },

    ADD_TODO(state, payload) {
      state.todos = [...state.todos, payload];
    },

    CHANGE_TODO(state, payload) {
      const todo = state.todos.find((item: ITask) => item.id === payload.id);

      if (todo) {
        todo.completed = payload.completed;
      }
    },

    DELETE_TODO(state, payload) {
      state.todos = state.todos.filter((item: ITask) => item.id !== payload.id);
    },

    CHANGE_TODO_CATEGORY(state, payload) {
      state.currentTab = payload;
    },
  } as ITodoMutations,
};
