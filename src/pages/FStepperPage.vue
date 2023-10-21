<script setup lang="ts">
import { reactive, ref } from "vue";
import FStepper, { FStepperTab } from "../components/FStepper.vue";
import { Color } from "../types";

const tabs = reactive<FStepperTab[]>([
  {
    title: "Step 1",
    iconSuccess: "fa-regular fa-thumbs-up",
    isValid: true,
  },
  {
    title: "Step 2",
    isValid: true,
  },
  {
    title: "Step 3",
    isValid: true,
  },
]);

const step = ref(1);
const loading = ref(false);

const complete = () => {
  loading.value = true;
  console.log("complete");
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2>Stepper</h2>
      </div>
      <div class="box">
        <FStepper :tabs="tabs" v-model:step="step" :loading="loading" :finalize="complete" :main-color="Color.Info">
          <template #1>
            <h2>First step</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              similique officiis, sequi quis debitis culpa voluptates cupiditate
              inventore nihil consectetur eaque modi ipsa a. Officiis fuga iusto
              pariatur iste nobis?
            </p>
          </template>
          <template #2>
            <h2>Second step</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              similique officiis, sequi quis debitis culpa voluptates cupiditate
              inventore nihil consectetur eaque modi ipsa a. Officiis fuga iusto
              pariatur iste nobis?
            </p>
          </template>
          <template #3>
            <h2>Third step</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              similique officiis, sequi quis debitis culpa voluptates cupiditate
              inventore nihil consectetur eaque modi ipsa a. Officiis fuga iusto
              pariatur iste nobis?
            </p>
          </template>
        </FStepper>
      </div>
    </div>
  </section>
</template>