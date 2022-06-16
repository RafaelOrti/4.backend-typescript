// defining the possible values for the type of the item
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'snowy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// why use here interface instead of type, interface is designed to be extendible, applying extends to the type
// you can use the same number for 2 interfaces, but no for type
// interface SpecialDiaryEntry2 extends DiaryEntry {
//     flightNumber: number
// }
