<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: false },
  border: { type: String, required: false },
  state: { type: String, required: false },
  outlined: { type: Boolean, required: false },
  size: { type: String, required: false, default: "normal" },
  disabled: { type: Boolean, required: false },
  loading: { type: Boolean, required: false },
  icon: { type: String, required: false },
  iconPosition: { type: String, required: false },
});

const getClass = () => {
  let classes = ["button"];
  const { border, state, outlined, size, disabled, loading } = props;

  if (border) {
    classes.push(border);
  }

  if (state) {
    classes.push(state);
  }

  if (outlined) {
    classes.push("outlined");
  }

  if (size) {
    classes.push(size);
  }

  if (disabled) {
    classes.push("disabled");
  }

  if (loading) {
    classes.push("loading");
  }

  return classes.join(" ");
}
</script>

<template>
  <button :class="`${getClass()}`" :disabled="disabled">
    <template v-if="icon && iconPosition === 'left'">
      <i class="icon-left" :class="icon"></i>
    </template>
    <template v-if="!loading">
      {{ text }}
    </template>
    <template v-if="icon && !iconPosition">
      <i :class="icon"></i>
    </template>
    <template v-if="icon && iconPosition === 'right'">
      <i class="icon-right" :class="icon"></i>
    </template>
  </button>
</template>

<style>
button.button {
  --bg-color: var(--white-color);
  --content-color: var(--text-color);
  position: relative;
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--content-color);
  border: 1px solid transparent;
  border-radius: .375rem;
  padding: 1.2rem 1.5rem;
  line-height: 1.5;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  box-shadow: none;
  cursor: pointer;
  transition: all .3s;
}

button.outlined {
  background-color: transparent;
  border-color: var(--text-color);
  color: var(--text-color);
}

/* Hover state */
button.button:hover {
  filter: brightness(80%);
}

button.outlined:hover {
  background-color: var(--bg-color);
  color: var(--content-color);
}

button.primary {
  --bg-color: var(--primary-color);
  --content-color: var(--white-color);
}

button.link {
  --bg-color: var(--link-color);
  --content-color: var(--white-color);
}

button.info {
  --bg-color: var(--info-color);
  --content-color: var(--white-color);
}

button.success {
  --bg-color:  var(--success-color);
  --content-color: var(--white-color);
}

button.warning {
  --bg-color:  var(--warning-color);
  --content-color: var(--white-color);
}

button.danger {
  --bg-color:  var(--danger-color);
  --content-color: var(--white-color);
}

i.icon-left {
  margin-right: 8px;
}

i.icon-right {
  margin-left: 8px;
}

button.rounded {
  border-radius: 9999px;
}

button.squared {
  border-radius: 0;
}

button.small {
  font-size: .75rem;
}

button.medium {
  font-size: 1.25rem;
}

button.large {
  font-size: 1.5rem;
}

button.disabled {
  background-color: var(--white-color);
  color: var(--text-light-color);
  border-color: var(--grey-color);
  box-shadow: none;
  cursor: not-allowed;
  opacity: .5;
}

button.loading {
  pointer-events: none;
}

button.loading::after {
  content: "";
  display: block;
  border: 2px solid var(--grey-color);
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  height: 1em;
  width: 1em;
  animation: spin .5s infinite linear;
}

@keyframes spin {
  0% {
    rotate: 0deg;
  }

  100% {
    rotate: 360deg;
  }
}
</style>