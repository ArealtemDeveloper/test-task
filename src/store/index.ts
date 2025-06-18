import { createStore } from 'vuex';

import { todoModule } from './modules/todos';

export default createStore({
  modules: {
    todos: todoModule,
  },
});
