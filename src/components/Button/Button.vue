<template>
  <button type="button" :class="classValues" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { useCssModule, defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    variant: {
      type: String, // Dark, Light
      default: "Light",
    },
    size: {
      type: String, // Large, Small
      default: "Large",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const variant = props.variant?.toLowerCase();
    const size = props.size?.toLowerCase();

    const style = useCssModule();
    const arr = Object.keys(style).sort();

    const classes = {};
    const mainClassKey = arr[0];
    classes[mainClassKey] = style[mainClassKey]; // set main class .button
    arr.forEach((key) => {
      if (key.includes(variant) || (size && key.includes(size))) {
        classes[key] = style[key];
      }
    });

    const classValues = Object.values(classes);
    return { classValues };
  },
});
</script>

<style lang="scss" module>
@import "./Button.scss";
</style>
