import { Builder } from "@builder.io/react";
import { designTokens } from './design-tokens';
import Button from "./components/button/Button";

import Counter from "./components/counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "label",
      type: "string",
      defaultValue: "Button",
      label: "Label",
      required: true,
    },
    {
      name: "variant",
      type: "enum",
      options: ["primary", "secondary"],
      defaultValue: "primary",
      label: "Variant",
      required: true,
    },
  ],
});

Builder.register("editor.settings", {
  styleStrictMode: true,
  designTokens: designTokens,
});