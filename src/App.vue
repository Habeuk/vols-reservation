<script setup lang="ts">
import { useVolStore } from './stores/vol';
import SelectButton from 'primevue/selectbutton'
import AutoComplete from 'primevue/autocomplete'
import Calendar from 'primevue/calendar'
import OverlayPanel from 'primevue/overlaypanel';
import { flyType } from './stores/store-configs';


const store = useVolStore()
const submitForm = () => {
  console.log("submit")
}
</script>

<template>
  <div class="main-app-container">
    <div class="app-header">
      <SelectButton class="journey-type-section pb-2 mx-auto" v-model="store.journeyType" :options="flyType"
        optionLabel="label" unselectable />
    </div>
    <div class="main-app-form">
      <form @submit="submitForm">
        <AutoComplete v-model="store.provenance" :suggestions="store.getSuggestion" />
      </form>
    </div>

  </div>
</template>

<style scoped></style>
