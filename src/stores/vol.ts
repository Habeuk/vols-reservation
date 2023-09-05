import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { flyClasses, flyType, listPlaces, maxPassager, placeHolders } from './store-configs'

export const useVolStore = defineStore('vol', () => {
  const valueToComplete = ref('')
  const placeList = ref(listPlaces)
  const journeyType = ref(flyType[0])
  const dateDepart = ref(new Date())
  const dateRetour = ref<Date | undefined>()
  const myflyClass = ref(flyClasses[0])
  const provenance = ref<{label: string, id: number}>()
  const destination = ref<{label: string, id: number}>()
  const placeholders = ref(placeHolders)
  const passagers = ref([
    {number: 2, label: "adultes", description: "12+", min: 1},
    {number: 0, label: "enfants", description: "2-11", min: 0},
    {number: 0, label: "adultes", description: "12+", min: 0},
  ])
  
  
  //Actions
  const passagersCount = ()=> {
    let passagerNumber = 0
    passagers.value.forEach((element)=>{
      passagerNumber += element.number
    })
    return passagerNumber;
  }


  //getters
  const getSuggestion = computed(() => {
    valueToComplete.value = valueToComplete.value.trim()
    const newFilters:Array<any> = []
    if (!valueToComplete.value) {
      return newFilters
    }
    return placeList.value.filter((place) => place!=provenance.value && place!= destination.value &&place.label.includes(valueToComplete.value))
  })
  const getpassagersCount = computed(()=>{
    return passagersCount()
  })
  const getPassagerLeft = computed(()=>{
    let passagerNumber = 0;
    passagers.value.forEach((element)=>{
      passagerNumber += element.number
    })
    return maxPassager - passagerNumber;
  })

  return {
    journeyType,
    dateDepart,
    dateRetour,
    myflyClass,
    provenance,
    passagers,
    destination,
    valueToComplete,
    placeList,
    placeholders,
    getPassagerLeft,
    getpassagersCount,
    getSuggestion
  }
})
