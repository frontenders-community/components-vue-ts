<script setup lang="ts">
import { computed } from "vue";
import FButton from "./FButton.vue";
import { Color } from "../types";

export interface FStepperTab {
  title: string;
  iconSuccess?: string;
  isValid: boolean;
}

export interface FStepperProps {
  step: number;
  tabs: FStepperTab[];
  finalize?: () => void;
  loading?: boolean;
  backText?: string;
  nextText?: string;
  doneText?: string;
  mainColor?: Color;
  completeColor?: Color;
}

const props = withDefaults(defineProps<FStepperProps>(), {
  step: 1,
  loading: false,
  finalize: function () {
    return {};
  },
  mainColor: Color.Primary,
  completeColor: Color.Success,
  backText: "Back",
  nextText: "Next",
  doneText: "Done",
});

const emit = defineEmits(["update:step"]);

const incrementStep = () => {
  console.log("click");

  const step = props.step + 1;
  emit("update:step", step);
};

const decrementStep = () => {
  const step = props.step - 1;
  emit("update:step", step);
};

const stepperProgress = computed(() => {
  return (100 / (props.tabs.length - 1)) * (props.step - 1) + "%";
});

const getColors = () => {
  const stepColorDef = `var(--${props.mainColor}-color)`;
  const completeColorDef = `var(--${props.completeColor}-color)`;
  return `
    --step-color: ${stepColorDef};
    --complete-color: ${completeColorDef};
  `;
};
</script>

<template>
  <section class="section">
    <div class="stepper" :style="getColors()">
      <div class="header">
        <!-- Progress -->
        <div class="stepper-nav">
          <div class="stepper-progress">
            <div class="stepper-progress-bar" :style="{ width: stepperProgress }"></div>
          </div>
          <div class="stepper-item" v-for="(item, index) in props.tabs" :key="index"
            :class="{ active: index === step - 1, done: index < step - 1 }">
            <div class="stepper-item-counter">
              <div class="icon-box">
                <span v-if="index >= props.step - 1">{{ index + 1 }}</span>
                <i v-else-if="item.iconSuccess" :class="item.iconSuccess" />
                <i v-else class="fa-solid fa-check"></i>
              </div>
              <h4 class="stepper-item-title">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="content-wrapper">
        <template class="stepper-content" v-for="index in props.tabs.length" :key="index">
          <div class="stepper-pane" v-if="props.step === index">
            <slot :name="index"></slot>
          </div>
        </template>
      </div>

      <!-- Navigation -->
      <div class="footer">
        <div class="footer-content">
          <!-- Back button -->
          <FButton @click="decrementStep" :state="mainColor" v-if="props.step !== 1 && !loading" :text="backText"
            outlined />

          <!-- Next button -->
          <FButton @click="incrementStep" :state="mainColor" v-if="props.step !== props.tabs.length"
            :disabled="!props.tabs[props.step - 1].isValid" :text="nextText" outlined>
            {{ nextText }}
          </FButton>

          <!-- Finalize button -->
          <FButton v-else @click="finalize" :disabled="!props.tabs[props.step - 1].isValid" :state="completeColor"
            :loading="loading" :text="doneText">
            {{ doneText }}
          </FButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stepper {
  --transition: all 500ms ease;
  --step-color: var(--primary-color);
  --complete-color: var(--success-color);
  width: 100%;
}

.stepper-nav {
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
}

.stepper-progress {
  position: absolute;
  background-color: var(--step-color);
  height: 2px;
  z-index: 1;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 2px;
}

.stepper-progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 2px;
  width: 0;
  background-color: var(--success-color);
  transition: var(--transition);
  z-index: 2;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c5c5c5;
  transition: var(--transition);
  z-index: 2;
}

.stepper-item-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stepper-item-title {
  position: absolute;
  bottom: 1rem;
  text-align: center;
  max-width: 80px;
  font-weight: 300;
}

.stepper-pane {
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
}

.icon-box {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: var(--step-color);
  filter: brightness(55%);
  color: white;
  font-size: 20px;
}

.stepper-item.done .icon-box {
  background-color: var(--success-color);
  filter: brightness(75%);
}

.stepper-item.active .icon-box {
  filter: brightness(100%);
}

.stepper-item.active .stepper-item-title {
  color: var(--step-color);
  font-weight: 600;
}

.footer-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>