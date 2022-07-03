import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' |'date' | 'weather' | 'visibility'>

// mejor usar omitir y no crear interfaces sino type
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

// no utilizar esto porque hay que utilizar el minimo numero de tipos posibles
// export interface NonSensitiveInfoDiaryEntry {
//   id: number
//   date: string
//   weather: Weather
//   visibility: Visibility
// }

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

// why use here interface instead of type, interface is designed to be extendible, applying extends to the type
// you can use the same number for 2 interfaces, but no for type
// interface SpecialDiaryEntry2 extends DiaryEntry {
//     flightNumber: number
// }
