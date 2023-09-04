import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { flyClass, flyType } from './store-configs'

export const useVolStore = defineStore('vol', () => {
  const journeyType = ref(flyType[0])
  const dateDepart  = ref(new Date())
  const dateRetour  = ref<Date|undefined>()
  const myflyClass = ref(flyClass[0])
  const provenance  = ref({
    label: 'Lome, Togo',
    index: 0
  })
  const passagers = ref({
    adults: 2,
    childs: 0,
    baby: 0,
  })
  const destination = ref({
    label: "DSS",
    index: 0,
  })
  return {
    journeyType,
    dateDepart,
    dateRetour,
    myflyClass,
    provenance,
    passagers,
    destination
  }
})
