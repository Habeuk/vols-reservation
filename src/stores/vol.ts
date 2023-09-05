import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { flyClass, flyType, listPlaces } from './store-configs'

export const useVolStore = defineStore('vol', () => {
  const valueToComplete = ref('')
  const placeList = ref(listPlaces)
  const journeyType = ref(flyType[0])
  const dateDepart = ref(new Date())
  const dateRetour = ref<Date | undefined>()
  const myflyClass = ref(flyClass[0])
  const provenance = ref({
    label: 'Lome, Togo',
    index: 0
  })
  const passagers = ref({
    adults: 2,
    childs: 0,
    baby: 0
  })
  const destination = ref({
    label: 'DSS',
    index: 0
  })
  //getters
  const getSuggestion = (event: Event) => {
    console.log(event)
    valueToComplete.value = valueToComplete.value.trim()
    if (!valueToComplete.value) {
      return []
    }
    return placeList.value.map((place) => place.includes(valueToComplete.value))
  }
  return {
    journeyType,
    dateDepart,
    dateRetour,
    myflyClass,
    provenance,
    passagers,
    destination,
    valueToComplete,
    getSuggestion
  }
})
