<script setup lang="ts">
import { ref } from "vue";
import FButton from "./components/FButton.vue";
import FTextField from "./components/FTextField.vue";

const inputValue = ref("");
</script>

<template>
  <main>
    <section>
      <div class="container">
        <h1>FRONTENDERS UI KIT</h1>
      </div>
    </section>

    <section class="alternate">
      <div class="container">
        <!-- Buttons -->
        <div class="box">
          <h2>BUTTON COMPONENT</h2>
        </div>
        <div class="box">
          <h3>Sizes</h3>
          <div class="flex">
            <FButton text="Small" size="small" />
            <FButton text="Normal" />
            <FButton text="Medium" size="medium" />
            <FButton text="Large" size="large" />
          </div>
        </div>

        <div class="box">
          <h3>Borders</h3>
          <div class="flex">
            <FButton text="Normal" />
            <FButton text="Squared" border="squared" />
            <FButton text="Rounded" border="rounded" />
          </div>
        </div>

        <div class="box">
          <h3>State</h3>
          <div class="flex">
            <FButton text="Disabled" disabled />
            <FButton text="Loading" loading />
          </div>
        </div>

        <div class="box">
          <h3>Color States</h3>
          <div class="flex">
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
          <div class="flex">
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
          <div class="flex">
            <FButton
              text="Icon Left"
              icon="fa-solid fa-user"
              icon-position="left"
              state="primary"
            />
            <FButton
              text="Icon Right"
              icon="fa-solid fa-location-dot"
              icon-position="right"
              state="info"
            />
            <FButton
              icon="fa-solid fa-check"
              state="success"
              border="rounded"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- /Buttons -->

    <!-- Textfield -->
    <section>
      <div class="container">
        <div class="box">
          <h2>TEXTFIELD COMPONENT</h2>
        </div>
        <div class="box">
          <h3>Sizes</h3>
          <div class="flex">
            <FTextField id="small-size-textfield" label="Small" size="small" />
            <FTextField
              id="normal-size-textfield"
              label="Normal"
              size="normal"
            />
            <FTextField
              id="medium-size-textfield"
              label="Medium"
              size="medium"
            />
            <FTextField id="large-size-textfield" label="Large" size="large" />
          </div>
        </div>

        <div class="box">
          <h3>Attributes</h3>
          <!-- Required -->
          <div class="flex align-items-start">
            <FTextField
              id="required-attr-textfield"
              label="Required"
              required
            />
            <FTextField
              id="disabled-attr-textfield"
              label="Disabled"
              disabled
            />
            <FTextField
              id="readonly-attr-textfield"
              label="Readonly"
              readonly
            />
            <FTextField
              id="password-attr-textfield"
              label="Password"
              type="password"
            />
            <FTextField
              id="searchfield-attr-textfield"
              label="Searchfield"
              type="search"
            />
            <FTextField
              id="searchfield-attr-textfield"
              label="Helper Text"
              helperText="Some helper text"
            />
          </div>
        </div>

        <div class="box">
          <h3>Color states</h3>
          <!-- Required -->
          <div class="flex">
            <FTextField id="normal-state-textfield" label="Normal" />
            <FTextField
              id="primary-state-textfield"
              label="Primary"
              state="primary"
            />
            <FTextField id="link-state-textfield" label="Link" state="link" />
            <FTextField id="info-state-textfield" label="Info" state="info" />
            <FTextField
              id="success-state-textfield"
              label="Success"
              state="success"
            />
            <FTextField
              id="warning-state-textfield"
              label="warning"
              state="warning"
            />
            <FTextField
              id="danger-state-textfield"
              label="Danger"
              state="danger"
            />
          </div>
        </div>

        <div class="box">
          <h3>Borders</h3>
          <!-- Required -->
          <div class="flex">
            <FTextField id="normal-border-textfield" label="Normal" />
            <FTextField
              id="squared-border-textfield"
              label="Squared"
              border="squared"
            />
            <FTextField
              id="rounded-border-textfield"
              label="Rounded"
              border="rounded"
            />
          </div>
        </div>

        <div class="box">
          <h3>Icons</h3>
          <!-- Required -->
          <div class="flex">
            <FTextField
              id="icon-left-textfield"
              label="Left Icon"
              icon-left="fa-regular fa-envelope"
            />
            <FTextField
              id="icon-right-textfield"
              label="Right Icon"
              icon-right="fa-regular fa-eye"
            />
            <FTextField
              id="icon-both-textfield"
              label="Left and Right Icon"
              icon-left="fa-regular fa-envelope"
              icon-right="fa-solid fa-check"
            />
          </div>
          <div class="flex">
            <FTextField
              id="icon-primary-textfield"
              label="Primary Icon"
              state="primary"
              icon-left="fa-regular fa-envelope"
            />
            <FTextField
              id="icon-info-textfield"
              label="Info Icon"
              state="info"
              icon-left="fa-regular fa-envelope"
            />
            <FTextField
              id="icon-fanger-textfield"
              label="Danger Icon"
              state="danger"
              icon-left="fa-regular fa-envelope"
            />
          </div>
          <div class="flex">
            <FTextField
              id="icon-small-textfield"
              label="Small Icon"
              size="small"
              icon-left="fa-regular fa-envelope"
            />
            <FTextField
              id="icon-medium-textfield"
              label="Medium Icon"
              size="medium"
              icon-left="fa-regular fa-envelope"
            />
            <FTextField
              id="icon-large-textfield"
              label="Large Icon"
              size="large"
              icon-left="fa-regular fa-envelope"
            />
          </div>
        </div>

        <div class="box">
          <h3>Input value</h3>
          <!-- Required -->
          <div class="flex">
            <FTextField
              id="value-textfield"
              label="Reactive value"
              v-model="inputValue"
            />
          </div>
          <p>{{ inputValue }}</p>
        </div>

        <div class="box">
          <h3>Floating label</h3>
          <!-- Required -->
          <div class="flex">
            <FTextField id="floating-textfield" label="Floating" floating />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.box {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}

section {
  padding: 2rem 0;
}

section.alternate {
  background-color: #dbdbdb;
}

h1,
h2,
h3 {
  text-transform: uppercase;
  margin-bottom: 0.5em;
  text-align: center;
}

h2 {
  margin-top: 1rem;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1rem;
}

.align-items-start {
  align-items: flex-start;
}

.button {
  margin: 6px;
}
</style>
