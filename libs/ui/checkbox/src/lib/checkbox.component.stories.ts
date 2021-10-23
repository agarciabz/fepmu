import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    },
    color: {
      control: { type: 'color'}
    }
  },
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CheckboxComponent>;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
  template: `
    <pmu-checkbox>Storybook</pmu-checkbox>
  `
});


export const Primary = Template.bind({});
Primary.args = {
  disabled: false
}
