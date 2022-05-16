import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BackgroundImage from './assets/card-media.png';
import {LayerCard} from '../components/LayerCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: LayerCard,
} as ComponentMeta<typeof LayerCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />;

export const Unselected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unselected.args = {
  checked: false,
  label: 'Flood zone 3',
  backgroundImage: BackgroundImage,
};

export const Selected = Template.bind({});
Selected.args = {
  checked: true,
  label: 'Flood zone 3',
  backgroundImage: BackgroundImage,
};
