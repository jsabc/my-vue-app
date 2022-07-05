<template>
  <div class="w-[95%] mx-auto">
    <h2 class="py-5">
      <span>Todos</span>
    </h2>

    <div class="text-slate-400" v-if="!todos.length">No todos yet.</div>
    <div class="text-orange-400" v-else>There are {{ todosLength }} todos.</div>

    <ul>
      <li
        v-for="todo in todos"
        :key="todo.text"
      >
        <!-- eslint-disable-next-line -->
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)"/>
        <span :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input
          class="w-60 p-2.5 border-2 rounded-md"
          @keyup.enter="addTodo"
          placeholder="What needs to be done?"
        />
      </li>
    </ul>

  </div>
</template>

<script>
// eslint-disable-next-line
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'TodosView',

  computed: {
    todos() {
      return this.$store.state
        .todos.list;
    },

    todosLength() {
      return this.$store
        .getters['todos/todosLength'];
    },

    ...mapGetters({
      doneTodos: 'todos/doneTodos',
    }),
  },

  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value);
      e.target.value = '';
    },

    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
};
</script>
