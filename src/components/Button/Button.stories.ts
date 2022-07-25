import { Meta, StoryFn } from "@storybook/vue3";
import Button from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["Light", "Dark"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["Large", "Small"],
      },
    },
    isDisabled: {
      control: {
        type: "select",
        options: [true, false],
      },
    },
  },
} as Meta<typeof Button>;

const template = `
<Button v-bind="args">
  {{ args.content }}
</Button>
`;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template,
});

export const Dark = Template.bind({});
Dark.args = { content: "Dark Button", variant: "Dark" };

export const Light = Template.bind({});
Light.args = { content: "Light Button", variant: "Light" };
