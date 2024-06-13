import produce from "immer";
import { ActionType } from "../actionTypesEnum";
import { Action } from "../actions";

// why is BundlesState might be undefined sometimes? -> vids 229 & 230
interface BundlesState {
  [id: string]: {
    isBundling: boolean;
    code: string;
    error: string;
  } | undefined;
}

const initialState: BundlesState = {};

const bundlesReducer = produce(
  (
    state: BundlesState = initialState, 
    action: Action
  ): BundlesState => {
    console.log("\nbundlesReducer.ts | action.payload ->", action.payload, "\n");

    switch (action.type) {
      case ActionType.START_BUNDLING: {
        const id = action.payload;

        const currentBundledOutput = id;

        // vid 227
        state[currentBundledOutput] = {
          isBundling: true,
          code: "",
          error: ""
        };

        return state;
      }
      case ActionType.COMPLETE_BUNDLING: {
        const {id} = action.payload;

        const {code, error} = action.payload.output;
        
        const currentBundledOutput = id;

        // vid 227
        state[currentBundledOutput] = {
          isBundling: false,
          code,
          error
        };

        return state;
      }
      default:
        return state;
    }
  },
  initialState
);

export default bundlesReducer;