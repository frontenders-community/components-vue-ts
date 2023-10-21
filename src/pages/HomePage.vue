<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Challenge #17 - UI Kit (Vue + TS)</h2>
      <h3 class="subtitle">
        La challenge per eccellenza: creare componenti di UI riutilizzabili e customizzabili.
        Puoi scegliere il framework che preferisci: Vue, Svelte, React, Angular o qualsiasi altro.
        Per un pizzico di pepe in più, puoi provare ad utilizzare Typescript.
        Per le icone puoi utilizzare una libreria a piacere: noi abbiamo scelto FontAwesome.
      </h3>

      <div class="block">
        <strong>Tecnologie</strong><br />
        In questa repository trovi tutti i componenti sviluppati in Vue 3 + TypeScript.
        Nelle coding session della community li svilupperemo invece in React + TypeScript.
        Se non conosci un framework ma vuoi comunque metterti alla prova, puoi lavorare con
        HTML / CSS per definire delle classi, come se stessi creando una libreria CSS.
      </div>

      <div class="block">
        <strong>Componenti:</strong>
        <ul>
          <li><router-link to="/button-page">FButton</router-link></li>
          <li><router-link to="/textfield-page">FTextField</router-link></li>
          <li><router-link to="/stepper-page">FStepper</router-link></li>
        </ul>

        <strong>WIP:</strong>
        <ul>
          <li>Card</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 1.8rem;
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 300;
}

.block {
  margin: 2rem 0;
  font-size: 1.4rem;
  font-weight: 300;
}

ul {
  list-style: none;
  margin-bottom: 24px;
}

ul li {
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: #d3d3d3;
  padding: 12px 24px;
  margin: 12px 0;
  border-radius: 3px;
  cursor: pointer;
}

ul li a {
  text-decoration: none;
  color: inherit;
}

ul li:not(:first-child) {
  margin: 0 1rem;
}</style>