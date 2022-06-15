/* eslint-disable @typescript-eslint/no-explicit-any */
// YourComponent.stories.js|jsx

import { Button } from './Button';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args:any) => <Button {...args} />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
