<template>
  <div class="ql-container">
    <div class="col-sm-6 title">
      <input
        type="title"
        class="form-control"
        id="inputTitle"
        placeholder="Please Enter Title"
        v-model="title"
      />
      <button @click="save" class="btn btn-primary ml-3">Save</button>
      <button
        class="btn btn-danger ml-3"
        v-if="isEditing"
        @click="deleteJournal"
      >
        Delete
      </button>
      <a href="/user/tradingJournals/allJournals" class="btn btn-danger ml-3"
        >Cancel</a
      >
    </div>
    <div class="editor-container">
      <quill-editor
        ref="QuillEditor"
        v-model:content="content"
        v-bind:options="options"
        contentType="html"
      />
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";

import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

//使用journalId來取得journal

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      content: "",
      options: {},
      title: "",
      isEditing: false,
    };
  },
  methods: {
    async save() {
      if (!this.title || !this.content) {
        alert("Please enter both title and content.");
        return;
      }
      const content = this.$refs.QuillEditor.getHTML();
      // save content
      this.content = content;
      // 呼叫 actions
      const res = await this.$store.dispatch("journal/addJournal", {
        id: this.$route.params.journalId || "",
        title: this.title,
        content: this.content,
      });
      console.log(res);
      // 跳转回日记列表页面
      this.$router.push("/user/tradingJournals/allJournals");
    },
    async deleteJournal() {
      const id = this.$route.params.journalId;
      if (!id) return;
      const res = await this.$store.dispatch("journal/deleteJournal", id);
      if (res.success) {
        this.$router.push("/user/tradingJournals/allJournals");
      } else {
        alert("Delete failed.");
      }
    },
  },
  created() {
    // 获取路由参数 journalId
    const journalId = this.$route.params.journalId;
    if (journalId) {
      // 如果 journalId 存在，表示处于编辑模式
      this.isEditing = true;
      // 从 state.journal 中获取数据，你需要根据你的 Vuex 结构来获取
      const journal = this.$store.state.journal.journal; // 替换 yourModuleName
      // 使用 journal 中的数据来填充表单
      this.title = journal.title;
      this.content = journal.content;
    }
  },
};
</script>

<style scoped>
/* editor fill the height */
.ql-container {
  height: 30rem;
  margin: 2rem auto 2rem auto;
}

.title {
  margin: 5rem auto 1rem auto;
  display: flex;
}

.editor-container {
  margin: 0 auto;
  height: 100%;
  width: 90%;
}
</style>
