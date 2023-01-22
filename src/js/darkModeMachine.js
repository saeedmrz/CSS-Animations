import { createMachine, interpret } from "xstate";

const stateElement = document.querySelector(".state");
const switchButton = document.querySelector(".state__switch");

const darkModeMachine = createMachine({
  initial: "light",
  states: {
    light: {
      on: {
        SWITCH: {
          target: "dark",
        },
      },
    },
    dark: {
      on: {
        SWITCH: {
          target: "light",
        },
      },
    },
  },
});

const darkModeService = interpret(darkModeMachine);

darkModeService.onTransition((state) => {
  stateElement.dataset.state = state.toStrings().join(" ");
  if (state.changed) {
    console.log(state);
  }
});

darkModeService.start();

switchButton.addEventListener("click", () => {
  darkModeService.send("SWITCH");
});
