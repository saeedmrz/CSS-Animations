import { createMachine, interpret } from "xstate";

const stateElement = document.querySelector(".state");
const switchButton = document.querySelector(".state__switch");

// Creating State Machine
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

// Changes state data attribute of .state
darkModeService.onTransition((state) => {
  stateElement.dataset.state = state.toStrings().join(" ");
});

darkModeService.start();

switchButton.addEventListener("click", () => {
  darkModeService.send("SWITCH");
});
