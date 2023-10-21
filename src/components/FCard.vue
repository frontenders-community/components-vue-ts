<script setup lang="ts">
import { computed, ref } from 'vue';

interface Action {
  label: String;
  func: () => void;
}

const props = defineProps({
  image: { type: String, required: false },
  title: { type: String, required: false },
  subtitle: { type: String, required: false },
  collapsable: { type: Boolean, required: false },
  headerTitle: { type: String, required: false },
  hasActions: { type: Boolean, required: false },
  actions: { type: Array<Action>, required: false },
});

const isCollapsed = ref(true);

const showContent = computed(() => {
  if (props.collapsable && isCollapsed.value) {
    return false;
  }

  return true;
})

const getHeaderIcon = () => {
  if (isCollapsed.value) {
    return `fa-solid fa-arrow-down`;
  } else {
    return `fa-solid fa-arrow-up`;
  }
}
</script>

<template>
  <div class="card">
    <div v-if="collapsable" class="card-header">
      <div class="card-header-title">
        {{ headerTitle }}
      </div>
      <button class="card-header-icon" @click="isCollapsed = !isCollapsed">
        <i :class="getHeaderIcon()"></i>
      </button>
    </div>
    <div v-if="showContent">
      <div v-if="image" class="card-image">
        <img :src="image" :alt="title">
      </div>
      <div class="card-body">
        <p v-if="title" class="title">{{ title }}</p>
        <p v-if="title && subtitle" class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div v-if="hasActions" class="card-footer">
      <button
        v-for="(action, i) in actions"
        :key="i"
        class="card-footer-item"
        @click="action.func"
      >
        {{ action.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  --bg-color: var(--bg-color);
  --content-color: var(--text-color);
  border-radius: .25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  max-width: 100%;
  position: relative;
}
.card-header {
  width: 100%;
  background-color: transparent;
  align-items: stretch;
  box-shadow: 0 0.125em 0.25em rgba(10,10,10,.1);
  display: flex;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.card-header-title {
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-weight: 700;
  color: #363636;
}
.card-header-icon {
  appearance: none;
  background: 0 0;
  border: none;
  font-size: 1em;
  margin: 0;
  padding: 0;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1rem;
}
.card-image {
  display: block;
}
.card-image img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-body {
  background-color: transparent;
  padding: 1.5rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.card-body .title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.125;
  word-break: break-word;
}
.card-body .subtitle {
  margin-top: .25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  word-break: break-word;
}
.card-footer {
  display: flex;
  align-items: stretch;
  background-color: transparent;
  border-top: 1px solid #ededed;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.card-footer-item {
  display: flex;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
  background-color: inherit;
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
}
.card-footer-item:not(:last-child) {
  border-right: 1px solid #ededed;
}
</style>