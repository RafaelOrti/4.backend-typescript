import { DiaryEntry } from '../types'
import diaryData from './diaries.json'
//working with the data from .json

//an Array const created that has DiaryEntry structure and take data from diaryData, we need to asign the type of entry to the array to define in typescript and not tobe an exception => as Array<DiaryEntry>, this last thing is neccesary when you use a fetch from api to define the type or for example to work with .json, where you need to define options for some specific properties
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

//reading the data from the .json
export const getEntries = () => diaries

//writing the data to the .json
export const addEntry = () => null