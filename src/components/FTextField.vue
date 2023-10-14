<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  id: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String, required: false },
  required: { type: Boolean, default: false, required: false },
  disabled: { type: Boolean, default: false, required: false },
  type: { type: String, default: "text", required: false },
  readonly: { type: Boolean, default: false, required: false },
  size: { type: String, required: false },
  state: { type: String, required: false },
  border: { type: String, required: false },
  helperText: { type: String, required: false },
  iconLeft: { type: String, required: false },
  iconRight: { type: String, required: false },
  floating: { type: Boolean, required: false },
});

const emit = defineEmits(["update:modelValue"]);

const isFloated = ref(false);

const getControlClass = () => {
  let classes = ["control"];
  const { size, border, disabled } = props;

  if (size) {
    classes.push(size);
  }

  if (border) {
    classes.push(border);
  }

  if (disabled) {
    classes.push("disabled");
  }

  return classes.join(" ");
};

const getTextfieldClass = () => {
  let classes = ["textfield"];

  const { state, floating } = props;

  if (state) {
    classes.push(state);
  }

  if (floating) {
    classes.push("floating");
  }

  return classes.join(" ");
};

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const handleBlur = (event: Event) => {
  if (!(event.target as HTMLInputElement).value) {
    isFloated.value = false;
  }
};

const handleFocus = () => {
  isFloated.value = true;
};
</script>

<template>
  <div :class="[getTextfieldClass(), isFloated ? 'is-focused' : '']">
    <div :class="getControlClass()">
      <template v-if="iconLeft">
        <i class="icon left" :class="iconLeft"></i>
      </template>
      <input
        :id="id"
        :type="type"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        @blur="handleBlur"
        @focus="handleFocus"
        :value="modelValue"
        @input="updateValue"
      />
      <template v-if="iconRight">
        <i class="icon right" :class="iconRight"></i>
      </template>
    </div>
    <label :for="id">{{ required ? "*" : "" }}{{ label }}</label>
    <div v-if="helperText" class="helper-text">{{ helperText }}</div>
  </div>
</template>

<style scoped>
.textfield {
  --content-color: var(--text-color);
  --border-color: var(--dark-grey-color);
  --bg-color: var(--white-color);
  --font-size: 1rem;
  position: relative;
  padding-top: calc(var(--font-size) + 5px);
}

.control {
  display: flex;
  align-items: center;
  max-width: 100%;
  font-size: var(--font-size);
  height: 2.5em;
  color: var(--content-color);
  border-radius: 0.375rem;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

.textfield.is-focused .control {
  box-shadow: 0 0 0 0.125em var(--border-color);
}

.control input {
  border: 0;
  font-size: var(--font-size);
  background-color: var(--bg-color);
}

input:focus-visible {
  outline: none;
}

label {
  color: var(--content-color);
  font-size: var(--font-size);
  position: absolute;
  top: 0;
  left: 5px;
}

.icon {
  color: var(--border-color);
  font-size: var(--font-size);
}

.icon.left {
  margin-right: 5px;
}

.icon.right {
  margin-left: 10px;
}

.helper-text {
  color: var(--content-color);
  text-align: left;
  font-size: calc(var(--font-size) - 0.3rem);
  margin-left: 5px;
}

/* Color states */
.textfield.primary {
  --content-color: var(--primary-color);
  --border-color: var(--primary-color);
}

.textfield.link {
  --content-color: var(--link-color);
  --border-color: var(--link-color);
}

.textfield.info {
  --content-color: var(--info-color);
  --border-color: var(--info-color);
}

.textfield.success {
  --content-color: var(--success-color);
  --border-color: var(--success-color);
}

.textfield.warning {
  --content-color: var(--warning-color);
  --border-color: var(--warning-color);
}

.textfield.danger {
  --content-color: var(--danger-color);
  --border-color: var(--danger-color);
}

/* Sizes */
.control.small {
  --font-size: 0.8rem;
}

.control.normal {
  --font-size: 1rem;
}

.control.medium {
  --font-size: 1.2rem;
}

.control.large {
  --font-size: 1.4rem;
}

/* Borders */
.squared {
  border-radius: 0;
}

.rounded {
  border-radius: 9999px;
}

/* Attributes */
.control.disabled {
  --bg-color: var(--disabled-color);
}

/* Floating label handling */
.textfield.floating label {
  top: 50%;
  left: 16px;
  color: var(--dark-grey-color);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
}

.textfield.floating.is-focused label {
  transform: translateY(-120%) scale(0.75);
  color: var(--content-color);
}
</style>