import { Plugin } from "vuex";
import { RootState } from "@/app/app.store";

export const logger: Plugin<RootState> = store => {
  store.subscribe((mutation, store) => {
    console.log('logger: ', mutation, store)
  })
}