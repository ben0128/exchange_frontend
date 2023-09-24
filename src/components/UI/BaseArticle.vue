<template>
  <teleport to="body">
    <div v-if="props.show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="props.show">
        <div class="card card-primary card-outline">
          <div class="card-body p-0">
            <div class="mailbox-read-info">
              <h5>{{ props.title }}</h5>
              <h6>
                <span class="mailbox-read-time float-right"
                  >Lastupdated: {{ props.updatedAt }}</span
                >
              </h6>
            </div>
            <div
              class="mailbox-read-message"
              style="overflow: auto; max-height: 400px"
            >
              <p v-html="props.content">
              </p>
            </div>
          </div>
          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="editJournal(props.id)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger float-right"
              @click="tryClose"
            >
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import router from "../../router"

const props = defineProps({
  id: String,
  show: Boolean,
  title: String,
  content: String,
  updatedAt: String,
});

const emit = defineEmits(["update:show"]);
function tryClose() {
  emit("update:show", false);
}

function editJournal(journalId) {
  console.log(journalId);
  router.push(`/user/tradingJournals/edit/${journalId}`);
}
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
