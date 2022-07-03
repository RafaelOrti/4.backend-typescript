// defining the possible values for the type of the item
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'snowy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

// los enum crean un objeto que es constante que puedes utilizar en runtime, te da un objeto que puedes utilizar mas facilmente

// si utilizas enum no se puede utilizar types.d.ts se utiliza types.ts pero vale la pena separar porque para elsresto sique sirve
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Snowy = 'snowy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
  Bad = 'bad'
}
