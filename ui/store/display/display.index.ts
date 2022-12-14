// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import {
  DisplayState,
  MainDisplayOptions,
} from "~/store/display/display.types";

export const useDisplay = defineStore("display", {
  state: (): DisplayState => ({
    main: [MainDisplayOptions.POOEVENTS, MainDisplayOptions.POTEVENTS],
  }),

  actions: {},
  getters: {},
});
