<template>
  <teleport to="body">
    <div v-if="props.show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="props.show">
        <header>
          <h2>{{ props.title }}</h2>
        </header>
        <section>
          <h5>{{ props.content }}</h5>
        </section>
        <menu>
          <base-button @click="editJournal" v-if="props.mode === 'journal'"
            >Edit</base-button
          >
          <base-button @click="tryClose">Close</base-button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});

const emit = defineEmits(["update:show"]);
function tryClose() {
  emit("update:show", false);
}
function editJournal() {}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0 auto;
  text-align: center;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
