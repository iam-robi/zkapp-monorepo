export enum MainDisplayOptions {
  POOEVENTS,
  POTEVENTS,
  NEWPOO,
  NEWPOT,
}
export interface DisplayState {
  main: MainDisplayOptions[];
}
