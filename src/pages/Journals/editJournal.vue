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
      <button class="btn btn-danger ml-3">Delete</button>
      <a href="/user/tradingJournals/allJournals" class="btn btn-primary ml-3"
        >Cancel</a
      >
    </div>
    <quill-editor
      ref="QuillEditor"
      v-model:content="content"
      v-bind:options="options"
      contentType="html"
    />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";

import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      content: "",
      options: {},
      title: "",
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
      // 呼叫actions
      const res = await this.$store.dispatch("journal/addJournal", {
        title: this.title,
        content: this.content,
      });
      console.log(res);
      if (res.success) {
        this.$router.push("/user/tradingJournals/allJournals");
      } else {
        alert("新增失敗");
      }
    },
  },
};
</script>

<style scoped>
/* editor fill the height */
.ql-container {
  height: 30rem;
}

.title {
  margin: 5rem auto 1rem auto;
  display: flex;
}
</style>
