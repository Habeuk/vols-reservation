<script setup lang="ts">
import { useVolStore } from './stores/vol';
import { flyType, flyClasses } from './stores/store-configs';
import SelectButton from 'primevue/selectbutton'
import AutoComplete from 'primevue/autocomplete'
import Calendar from 'primevue/calendar'
import OverlayPanel from 'primevue/overlaypanel';
import pButton from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';


const store = useVolStore()

//refs
const op = ref()

const toggle = (event: Event) => {
  op.value.toggle(event)
}
const submitForm = (event: Event) => {
  event.preventDefault();
  console.log("submit")
}
const handleEvent = (event: { query: string }) => {
  store.valueToComplete = event.query
}
const switchPlaces = () => {
  const temp = store.destination;
  store.destination = store.provenance
  store.provenance = temp
}
const upDate = () => {
  if (store.dateRetour && store.dateRetour <= store.dateDepart) {
    store.dateRetour = undefined;
  }
}
</script>

<template>
  <div class="main-app-container">
    <div class="app-header mb-4">
      <SelectButton class="journey-type-section pb-2 mx-auto" v-model="store.journeyType" :options="flyType"
        optionLabel="label" unselectable />
    </div>
    <div class="main-app-form">
      <form @submit="submitForm" class="px-3">
        <div class="form-places-selector position-relative">
          <pButton @click="switchPlaces" rounded text raised severity="primary" class="position-absolute switch-btn p-0">
            <template #icon>
              <svg width="800" height="800" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg"
                class="icon flat-line" transform="rotate(90)">
                <path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"
                  d="m7 17-3-3h16" />
                <path data-name="primary"
                  style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"
                  d="m17 7 3 3H4" />
              </svg>
            </template>
          </pButton>

          <span class="p-input-icon-left input-svg-icon w-100 mb-3">
            <svg class="text-primary" width="32" height="32" viewBox="0 0 38.4 38.4" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#a)" fill="currentColor">
                <path
                  d="M35.178 5.578c-.164 1.062-.576 2.088-1.288 2.892a34.804 34.804 0 0 1-4.632 4.532c-2.63 2.228-5.348 4.354-8.038 6.51-1.81 1.38-3.66 2.708-5.502 4.044-.86.788-1.704 1.79-3.012 1.64-1.826-.488-1.214-2.832-.27-3.888a98.24 98.24 0 0 1 4.49-5.246c3.804-4.204 10.75-12.544 16.716-12.646 1.086.208 1.588 1.086 1.536 2.162ZM32.45 26.606c.02.846-.33 1.49-.978 1.998-2.106 2.138-6.432-6.954-7.454-8.474-.334-.674-.368-1.58.22-2.094 1.15-1.016 2.312-2.02 3.47-3.026.762-.776 1.924-1.586 2.576-.222.994 3.864 1.85 7.828 2.166 11.818ZM9.73 5.168c.076-1.332 1.78-1.81 2.884-1.468 3.44.952 6.87 2.018 10.172 3.366.67.4.792 1.146.248 1.704-1.338 1.364-2.75 2.66-4.058 4.054-.446.474-.692.548-1.23.19a18.352 18.352 0 0 1-1.756-1.3c-1.488-1.502-6.116-4.618-6.262-6.546Zm5.528 27.592c.024-.368.288-.68.608-.964a114.106 114.106 0 0 0 6.426-5.974c.32-.308.67-.586 1.02-.86.824-.71 1.738.324.946 1.058-2.362 2.338-4.76 4.642-7.11 6.992-.508.654-1.886.932-1.89-.254Zm-3.282-20.682c-1.822 2.504-4.246 4.6-6.286 6.954-.396.41-.726.924-1.244 1.186-.654.382-1.508-.4-1.136-1.07.134-.272.352-.512.566-.73 1.886-1.786 3.6-3.738 5.408-5.6.638-.548 2.254-2.35 2.692-.738Zm-.064 15.17c-.69 1.148-1.956 2.008-2.874 2.998-1.02.882-1.852 2.046-3.054 2.684a.644.644 0 0 1-.764-.122c-.476-.47.014-1.106.362-1.478 1.614-1.516 3.242-3.018 4.868-4.522.482-.592 1.45-.542 1.462.442Zm7.174-1.438c-.178 3.368-3.878 1.626-3.358-.956.186-.75 1.02-1.098 1.55-1.592.38-.296.802-.176 1.192-.04.522.302.442 1.934.616 2.588Zm-9.518-7.142c.604-1.6 2.342-1.494 3.612-.754 1.596.872-.302 2.238-.996 3.04a.568.568 0 0 1-.458.128c-1.264-.246-1.846-1.212-2.158-2.414ZM24.466 35.02c-.97.048-1.194-.91-.596-1.474.334-.308.668-.616.994-.932.71-.684 1.414-1.372 2.122-2.056.278-.296.766-.428 1.06-.118.318.288.198.776-.096 1.058l-2.216 2.4c-.328.402-.824.938-1.268 1.12ZM5.71 10.366c-.85.016-1.24-.828-.742-1.4.198-.228.43-.426.654-.63.568-.482 1.092-1.032 1.7-1.46.644-.388 1.382.362.998 1.002-.594.778-1.352 1.432-2.036 2.134-.186.178-.45.278-.576.354Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M3.2 3.4h32v31.636h-32z" />
                </clipPath>
              </defs>
            </svg>
            <AutoComplete v-model="store.provenance" :placeholder="store.placeholders.from" class=" w-100 field-100"
              :suggestions="store.getSuggestion" @complete="handleEvent" forceSelection optionLabel="label" />
          </span>

          <span class="p-input-icon-left input-svg-icon w-100 mb-3">
            <svg class="text-primary svg-rotated" width="32" height="32" viewBox="0 0 38.4 38.4" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#a)" fill="currentColor">
                <path
                  d="M35.178 5.578c-.164 1.062-.576 2.088-1.288 2.892a34.804 34.804 0 0 1-4.632 4.532c-2.63 2.228-5.348 4.354-8.038 6.51-1.81 1.38-3.66 2.708-5.502 4.044-.86.788-1.704 1.79-3.012 1.64-1.826-.488-1.214-2.832-.27-3.888a98.24 98.24 0 0 1 4.49-5.246c3.804-4.204 10.75-12.544 16.716-12.646 1.086.208 1.588 1.086 1.536 2.162ZM32.45 26.606c.02.846-.33 1.49-.978 1.998-2.106 2.138-6.432-6.954-7.454-8.474-.334-.674-.368-1.58.22-2.094 1.15-1.016 2.312-2.02 3.47-3.026.762-.776 1.924-1.586 2.576-.222.994 3.864 1.85 7.828 2.166 11.818ZM9.73 5.168c.076-1.332 1.78-1.81 2.884-1.468 3.44.952 6.87 2.018 10.172 3.366.67.4.792 1.146.248 1.704-1.338 1.364-2.75 2.66-4.058 4.054-.446.474-.692.548-1.23.19a18.352 18.352 0 0 1-1.756-1.3c-1.488-1.502-6.116-4.618-6.262-6.546Zm5.528 27.592c.024-.368.288-.68.608-.964a114.106 114.106 0 0 0 6.426-5.974c.32-.308.67-.586 1.02-.86.824-.71 1.738.324.946 1.058-2.362 2.338-4.76 4.642-7.11 6.992-.508.654-1.886.932-1.89-.254Zm-3.282-20.682c-1.822 2.504-4.246 4.6-6.286 6.954-.396.41-.726.924-1.244 1.186-.654.382-1.508-.4-1.136-1.07.134-.272.352-.512.566-.73 1.886-1.786 3.6-3.738 5.408-5.6.638-.548 2.254-2.35 2.692-.738Zm-.064 15.17c-.69 1.148-1.956 2.008-2.874 2.998-1.02.882-1.852 2.046-3.054 2.684a.644.644 0 0 1-.764-.122c-.476-.47.014-1.106.362-1.478 1.614-1.516 3.242-3.018 4.868-4.522.482-.592 1.45-.542 1.462.442Zm7.174-1.438c-.178 3.368-3.878 1.626-3.358-.956.186-.75 1.02-1.098 1.55-1.592.38-.296.802-.176 1.192-.04.522.302.442 1.934.616 2.588Zm-9.518-7.142c.604-1.6 2.342-1.494 3.612-.754 1.596.872-.302 2.238-.996 3.04a.568.568 0 0 1-.458.128c-1.264-.246-1.846-1.212-2.158-2.414ZM24.466 35.02c-.97.048-1.194-.91-.596-1.474.334-.308.668-.616.994-.932.71-.684 1.414-1.372 2.122-2.056.278-.296.766-.428 1.06-.118.318.288.198.776-.096 1.058l-2.216 2.4c-.328.402-.824.938-1.268 1.12ZM5.71 10.366c-.85.016-1.24-.828-.742-1.4.198-.228.43-.426.654-.63.568-.482 1.092-1.032 1.7-1.46.644-.388 1.382.362.998 1.002-.594.778-1.352 1.432-2.036 2.134-.186.178-.45.278-.576.354Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M3.2 3.4h32v31.636h-32z" />
                </clipPath>
              </defs>
            </svg>
            <AutoComplete :placeholder="store.placeholders.to" v-model="store.destination" class=" w-100 field-100"
              :suggestions="store.getSuggestion" @complete="handleEvent" forceSelection optionLabel="label" />
          </span>


        </div>
        <div class="form-dates-selector row mb-3">
          <Calendar class="date-time-picker w-100"
            :class="{ 'col-6': !store.journeyType.value, 'col-12': store.journeyType.value }" selectionMode="single"
            showIcon v-model="store.dateDepart" :min-date="new Date()" :manual-input="false"
            v-on:update:model-value="upDate" :placeholder="store.placeholders.start">
            <template #dropdownicon>
              <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 4v8h12V8H4Z" />
                <circle cx="6.5" cy="10.5" r="1.5" />
                <circle cx="5.5" cy="4.5" r="1.5" />
                <circle cx="14.5" cy="4.5" r="1.5" />
              </svg>
            </template>
          </Calendar>

          <Calendar v-if="!store.journeyType.value" class="date-time-picker w-100 col-6" selectionMode="single" showIcon
            v-model="store.dateRetour" :min-date="store.dateDepart" :manual-input="false"
            :placeholder="store.placeholders.end">
            <template #dropdownicon>
              <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 4v8h12V8H4Z" />
                <circle cx="6.5" cy="10.5" r="1.5" />
                <circle cx="5.5" cy="4.5" r="1.5" />
                <circle cx="14.5" cy="4.5" r="1.5" />
              </svg>
            </template>
          </Calendar>
        </div>
        <div class="form-passagers-selector mb-3">

          <pButton @click="toggle" outlined class="w-100">
            <template #default>
              <div class="icon-container">
                <svg viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"
                  class="icon flat-color">
                  <path
                    d="M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6Zm-9-8a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
                    style="fill:currentColor" />
                </svg>
              </div>
              <div class="d-block w-100 text-left pl-5">
                <div class="passager-number">
                  {{ store.getpassagersCount }} Passager(s)
                </div>
                <div class="journey-type">
                  {{ store.myflyClass.label }}
                </div>
              </div>
            </template>
          </pButton>

          <OverlayPanel ref="op">
            <div class="d-block form-overlay-panel">
              <div v-for="(passager, index) in store.passagers" :key="index" class="d-flex justify-content-between mb-2">
                <div class="passager-label flex-wrap align-content-center d-flex">{{ passager.label }}</div>
                <InputNumber v-model="store.passagers[index].number" inputId="minmax-buttons" mode="decimal" showButtons
                  :min="passager.min" :max="passager.number + store.getPassagerLeft" />
              </div>

              <div class="form-class-selector">
                <SelectButton v-model="store.myflyClass" :options="flyClasses" optionLabel="label" />
              </div>
            </div>
          </OverlayPanel>
        </div>
        <pButton class="px-5 mx-auto d-block" type="submit" severity="primary" :label="store.placeholders.callToAction"
          raised />
      </form>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.input-svg-icon {
  svg {
    height: 100%;
    width: auto;
    max-height: 25px;
    transform: translateY(-50%) scale(1, 1);
    top: 50%;
    z-index: 1;
    margin: 0;

    &.svg-rotated {
      transform: translateY(-50%) scale(1, 1) rotate(180deg);
    }
  }
}

.icon-container {
  width: 30px
}

.form-overlay-panel {
  min-width: 300px;
}

.switch-btn {
  right: 1rem;
  transform: translateY(-50%) scale(1, 1);
  top: 50%;
  max-width: 25px;
  max-height: 25px;
  background: white;
  z-index: 1;

  svg {
    height: 100%;
    width: 100%;
  }
}
</style>
