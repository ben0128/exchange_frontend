<template>
  <div class="input-group mb-3">
    <input
      :type="props.inputType"
      class="form-control"
      :placeholder="`${props.placeText}`"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="input-group-append">
      <div class="input-group-text">
        <span :class="`fas fa-${props.icon}`"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  icon: {
    type: String,
  },
  inputType: {
    type: String,
    required: true,
  },
  placeText: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
</script>
