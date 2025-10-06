<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FormControl from './FormControl.svelte';
  import TextInput from '../TextInput';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: FormControl,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{ for: 'picker-1' }}>
  <TextInput name="picker-1" />
</Story>

<Story name="Label" args={{ label: 'Date Picker', for: 'picker-2' }}>
  <TextInput name="picker-2" />
</Story>

<Story name="ErrorMessage" args={{ errorMessage: 'This is error message', for: 'picker-3' }}>
  <TextInput name="picker-3" />
</Story>
