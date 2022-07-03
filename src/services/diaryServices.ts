import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'
// working with the data from .json

// an Array const created that has DiaryEntry structure and take data from diaryData, we need to asign the type of entry to the array to define in typescript and not tobe an exception => as Array<DiaryEntry>, this last thing is neccesary when you use a fetch from api to define the type or for example to work with .json, where you need to define options for some specific properties
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// reading the data from the .json file
export const getEntries = (): DiaryEntry[] => diaries

// se peude poner estructura como en este o como en el de abajo son lo mismo pero no ahce falta asignar als variables si no lo vamos a usar la
// Si pones que te devuelva entry si no encuentra esta igualdad devolvera undefined, por lo tanto no puede asignarlo
// lo que va despeus de : es lo que se le puede asignar en este caso tb un undefined no solo esta estructura y antes del : loq ue se puede utilizar tipandolo apra la funcion
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(entry => entry.id === id)
  if (entry !== undefined) {
    // const nonSensitiveEntry: NonSensitiveInfoDiaryEntry = {
    //   id: entry.id,
    //   date: entry.date,
    //   weather: entry.weather,
    //   visibility: entry.visibility
    // }
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

// writing the data to the .json
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(entry => entry.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

// no permite aceder
// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
// diariesWithoutSensitiveInfo[0].comment
