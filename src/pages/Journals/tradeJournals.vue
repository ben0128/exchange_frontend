<template>
  <div class="jounal-box">
    <base-article
      v-model:show="show"
      :id="journal.id"
      :title="journal.title"
      :content="journal.content"
      :updatedAt="journal.updatedAt"
      @update:show="closeArticle"
    ></base-article>
    <div class="card">
      <div class="card-header">
        <!-- 標題置中 -->
        <h3 class="card-title">Trade Journals</h3>
        <div class="card-tools">
          <a
            href="/user/tradingJournals/newJournal"
            class="btn btn-primary ml-3"
            >Add New Journal</a
          >
          <button
            type="button"
            class="btn btn-tool"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="card-body table-responsive p-0" style="height: 300px">
        <table class="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>No.</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="journal in journals" :key="journal.id">
              <td>{{ journal.no }}</td>
              <td>{{ journal.createdAt }}</td>
              <td>{{ journal.updatedAt }}</td>
              <td>{{ journal.title }}</td>
              <td>{{ journal.content.substring(0, 10) }}</td>
              <td>
                <button class="btn btn-primary" @click="getJournal(journal.id)">
                  <span>Read</span>
                </button>
              </td>
              <td>
                <button class="btn btn-danger" @click="deleteJournal(journal.id)">
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const show = ref(false);
const journals = ref([]);
let journal = ref({});

function closeArticle(bool) {
  show.value = bool;
  store.commit("journal/getOneJournal", {
    title: "",
    content: "",
    id: "",
    updatedAt: "",
  });
}

async function getAllJournals() {
  await store.dispatch("journal/getAllJournals");
  journals.value = store.getters["journal/getAllJournals"];
}

async function getJournal(id) {
  if (id === undefined) return;
  const res = await store.dispatch("journal/getJournal", { id });
  if (res.success) {
    journal.value = store.getters["journal/getJournal"];
    // console.log(journal.value);
    show.value = true;
  }
}

async function deleteJournal(id) {
  if (id === undefined) return;
  const res = await store.dispatch("journal/deleteJournal", id );
  if (res.success) {
    await getAllJournals();
  } else {
    alert("刪除失敗");
  }
}

onMounted(() => {
  getAllJournals();
});
</script>

<style scoped>
.table td,
.table th,
h3 {
  color: black;
}
</style>
