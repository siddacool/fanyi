<script lang="ts">
  import { Column, Grid } from '@flightlesslabs/grid';
  import DisplayAlert from './DisplayAlert.svelte';
  import Card from '$lib/ui-lib/Card/Card.svelte';

  interface CheckDisplayProps {
    isSpeechRecognition?: boolean;
    isSpeechSynthesis?: boolean;
    isTranslatorAPI?: boolean;
  }

  const {
    isSpeechRecognition = false,
    isSpeechSynthesis = false,
    isTranslatorAPI = false,
  }: CheckDisplayProps = $props();
</script>

<Card class="CheckDisplay">
  <Grid spacing={2}>
    <Column>
      <DisplayAlert isOk={isSpeechRecognition}>Speech Recognition</DisplayAlert>
    </Column>

    <Column>
      <DisplayAlert isOk={isSpeechSynthesis}>Speech Synthesis</DisplayAlert>
    </Column>

    <Column>
      <DisplayAlert isOk={isTranslatorAPI}>Translator API</DisplayAlert>
    </Column>
  </Grid>
</Card>
