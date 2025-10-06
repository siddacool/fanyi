<script lang="ts">
  import { useCompatibilityCheckStore } from '$lib/stores/compatibility-check.svelte';
  import CheckDisplay from './CheckDisplay';

  interface CompatibilityCheckProps {
    /** Is the result visible to the client: Default visible */
    mode?: 'visible' | 'hidden';
  }

  const { mode = 'visible' }: CompatibilityCheckProps = $props();
  const isOk = $derived(
    useCompatibilityCheckStore.isSpeechRecognition &&
      useCompatibilityCheckStore.isSpeechSynthesis &&
      useCompatibilityCheckStore.isTranslatorAPI,
  );

  $effect(() => {
    console.log(
      `Speech Recognition: ${useCompatibilityCheckStore.isSpeechRecognition ? 'Yes' : 'No'}
Speech Synthesis: ${useCompatibilityCheckStore.isSpeechSynthesis ? 'Yes' : 'No'}
Translator API: ${useCompatibilityCheckStore.isTranslatorAPI ? 'Yes' : 'No'}
      `,
    );
  });
</script>

{#if mode === 'visible' && isOk}
  <CheckDisplay isSpeechRecognition isSpeechSynthesis isTranslatorAPI />
{:else if mode === 'hidden' && isOk}{:else}
  <CheckDisplay
    isSpeechRecognition={useCompatibilityCheckStore.isSpeechRecognition}
    isSpeechSynthesis={useCompatibilityCheckStore.isSpeechSynthesis}
    isTranslatorAPI={useCompatibilityCheckStore.isTranslatorAPI}
  />
{/if}
