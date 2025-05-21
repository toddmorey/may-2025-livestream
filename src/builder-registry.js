import { Builder } from "@builder.io/react";
import { designTokens } from './design-tokens';

import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.register("editor.settings", {
  designTokens: designTokens,
});