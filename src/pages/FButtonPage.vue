<script setup lang="ts">
import FButton from "../components/FButton.vue";

</script>


<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2>Button Component</h2>
      </div>
      <div class="box">
        <h3>Sizes</h3>
        <div class="show-components">
          <FButton text="Small" size="small" />
          <FButton text="Normal" />
          <FButton text="Medium" size="medium" />
          <FButton text="Large" size="large" />
        </div>
      </div>

      <div class="box">
        <h3>Borders</h3>
        <div class="show-components">
          <FButton text="Normal" />
          <FButton text="Squared" border="squared" />
          <FButton text="Rounded" border="rounded" />
        </div>
      </div>

      <div class="box">
        <h3>State</h3>
        <div class="show-components">
          <FButton text="Disabled" disabled />
          <FButton text="Loading" loading />
        </div>
      </div>

      <div class="box">
        <h3>Color States</h3>
        <div class="show-components">
          <FButton text="Normal" />
          <FButton text="Primary" state="primary" />
          <FButton text="Link" state="link" />
          <FButton text="Info" state="info" />
          <FButton text="Success" state="success" />
          <FButton text="Warning" state="warning" />
          <FButton text="Danger" state="danger" />
        </div>
      </div>

      <div class="box">
        <h3>Color outline States</h3>
        <div class="show-components">
          <FButton text="Normal" outlined />
          <FButton text="Primary" state="primary" outlined />
          <FButton text="Link" state="link" outlined />
          <FButton text="Info" state="info" outlined />
          <FButton text="Success" state="success" outlined />
          <FButton text="Warning" state="warning" outlined />
          <FButton text="Danger" state="danger" outlined />
        </div>
      </div>

      <div class="box">
        <h3>Icons</h3>
        <div class="show-components">
          <FButton text="Icon Left" icon="fa-solid fa-user" icon-position="left" state="primary" />
          <FButton text="Icon Right" icon="fa-solid fa-location-dot" icon-position="right" state="info" />
          <FButton icon="fa-solid fa-check" state="success" border="rounded" />
        </div>
      </div>
    </div>
  </section>
</template>