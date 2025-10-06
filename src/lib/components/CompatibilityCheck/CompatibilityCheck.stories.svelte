<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CompatibilityCheck from './CompatibilityCheck.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CompatibilityCheck,
    tags: ['autodocs'],
  });
</script>

<!-- CompatibilityCheck with default style -->
<Story name="Default" />

<!-- Check console to see result -->
<Story name="hidden" args={{ mode: 'hidden' }} />
