<script lang="ts">
  import CompatibilityCheck from '$lib/components/CompatibilityCheck/CompatibilityCheck.svelte';
  import GlobalStyles from '$lib/components/GlobalStyles';
  import ThemeSetter from '$lib/components/ThemeSetter';
  import { useCompatibilityCheckStore } from '$lib/stores/compatibility-check.svelte';

  let { children } = $props();

  const isOk = $derived(
    useCompatibilityCheckStore.isSpeechRecognition &&
      useCompatibilityCheckStore.isSpeechSynthesis &&
      useCompatibilityCheckStore.isTranslatorAPI,
  );
</script>

<GlobalStyles />
<ThemeSetter />

<main>
  {#if isOk}
    {@render children?.()}
  {:else}
    <div>
      <p>Failed to load</p>
    </div>
  {/if}

  <CompatibilityCheck mode="hidden" />
</main>

<style lang="scss">
  main {
  }
</style>
