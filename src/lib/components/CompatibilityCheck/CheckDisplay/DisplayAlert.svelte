<script lang="ts">
  import Chip from '$lib/ui-lib/Chip/Chip.svelte';
  import type { Snippet } from 'svelte';

  interface DisplayAlertProps {
    children?: Snippet;
    isOk?: boolean;
  }

  const { children, isOk = false }: DisplayAlertProps = $props();
</script>

<div class="DisplayAlert">
  {@render children?.()}:

  {#if isOk}
    <Chip color="safe">Enabled</Chip>
  {:else}
    <Chip color="danger">Not Available</Chip>
  {/if}
</div>

<style lang="scss">
  .DisplayAlert {
    display: flex;
    align-items: center;

    :global(.Chip) {
      margin-right: 8px;
    }
  }
</style>
