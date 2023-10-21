<script setup lang="ts">
import FCard from "../components/FCard.vue";

const actions = [
  {
    label: "Cancel",
    func: () => console.log("Cancel"),
  },
  {
    label: "Save",
    func: () => console.log("Save"),
  }
]
</script>


<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2>Card Component</h2>
      </div>
      <div class="box">
        <h3>Card image + title + subtitle</h3>
        <FCard
          title="Claudio Bisio"
          subtitle="Un simpatico umorista"
          image="https://www.areazelig.it/contents/events/img_314.jpg"
        />
      </div>
      <div class="box">
        <h3>Card Actions</h3>
        <FCard
          title="Item"
          subtitle="Item detail (action on console)"
          :has-actions="true"
          :actions="actions"
        >
        </FCard>
      </div>
      <div class="box">
        <h3>Collapsable</h3>
        <FCard
          headerTitle="Mostra artista"
          title="Claudio Bisio"
          subtitle="Un simpatico umorista"
          image="https://www.areazelig.it/contents/events/img_314.jpg"
          :collapsable="true"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.box h3 {
  margin-bottom: 20px;
}
</style>