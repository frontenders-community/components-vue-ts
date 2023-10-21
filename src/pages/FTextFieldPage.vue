<script setup lang="ts">
import { ref } from "vue";
import FTextField from "../components/FTextField.vue";

const inputValue = ref("");
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2>TextField</h2>
      </div>
      <div class="box">
        <h3>Sizes</h3>
        <div class="show-components">
          <FTextField id="small-size-textfield" label="Small" size="small" />
          <FTextField id="normal-size-textfield" label="Normal" size="normal" />
          <FTextField id="medium-size-textfield" label="Medium" size="medium" />
          <FTextField id="large-size-textfield" label="Large" size="large" />
        </div>
      </div>

      <div class="box">
        <h3>Attributes</h3>
        <!-- Required -->
        <div class="show-components">
          <FTextField id="required-attr-textfield" label="Required" required />
          <FTextField id="disabled-attr-textfield" label="Disabled" disabled />
          <FTextField id="readonly-attr-textfield" label="Readonly" readonly />
          <FTextField id="password-attr-textfield" label="Password" type="password" />
          <FTextField id="searchfield-attr-textfield" label="Searchfield" type="search" />
          <FTextField id="searchfield-attr-textfield" label="Helper Text" helperText="Some helper text" />
        </div>
      </div>

      <div class="box">
        <h3>Color states</h3>
        <!-- Required -->
        <div class="show-components">
          <FTextField id="normal-state-textfield" label="Normal" />
          <FTextField id="primary-state-textfield" label="Primary" state="primary" />
          <FTextField id="link-state-textfield" label="Link" state="link" />
          <FTextField id="info-state-textfield" label="Info" state="info" />
          <FTextField id="success-state-textfield" label="Success" state="success" />
          <FTextField id="warning-state-textfield" label="warning" state="warning" />
          <FTextField id="danger-state-textfield" label="Danger" state="danger" />
        </div>
      </div>

      <div class="box">
        <h3>Borders</h3>
        <!-- Required -->
        <div class="show-components">
          <FTextField id="normal-border-textfield" label="Normal" />
          <FTextField id="squared-border-textfield" label="Squared" border="squared" />
          <FTextField id="rounded-border-textfield" label="Rounded" border="rounded" />
        </div>
      </div>

      <div class="box">
        <h3>Icons</h3>
        <!-- Required -->
        <div class="show-components">
          <FTextField id="icon-left-textfield" label="Left Icon" icon-left="fa-regular fa-envelope" />
          <FTextField id="icon-right-textfield" label="Right Icon" icon-right="fa-regular fa-eye" />
          <FTextField id="icon-both-textfield" label="Left and Right Icon" icon-left="fa-regular fa-envelope"
            icon-right="fa-solid fa-check" />
        </div>
        <div class="show-components">
          <FTextField id="icon-primary-textfield" label="Primary Icon" state="primary"
            icon-left="fa-regular fa-envelope" />
          <FTextField id="icon-info-textfield" label="Info Icon" state="info" icon-left="fa-regular fa-envelope" />
          <FTextField id="icon-fanger-textfield" label="Danger Icon" state="danger" icon-left="fa-regular fa-envelope" />
        </div>
        <div class="show-components">
          <FTextField id="icon-small-textfield" label="Small Icon" size="small" icon-left="fa-regular fa-envelope" />
          <FTextField id="icon-medium-textfield" label="Medium Icon" size="medium" icon-left="fa-regular fa-envelope" />
          <FTextField id="icon-large-textfield" label="Large Icon" size="large" icon-left="fa-regular fa-envelope" />
        </div>
      </div>

      <div class="box">
        <h3>Input value</h3>
        <!-- Required -->
        <div class="show-components">
          <FTextField id="value-textfield" label="Reactive value" v-model="inputValue" />
        </div>
        <p>{{ inputValue }}</p>
      </div>

      <div class="box">
        <h3>Floating label</h3>
        <!-- Required -->
        <div class="show-components">
          <FTextField id="floating-textfield" label="Floating" floating />
        </div>
      </div>
    </div>
  </section>
</template>