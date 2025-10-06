import { browser } from '$app/environment';
import { checkSpeechSynthesis } from '../compatibility-check.svelte';

/**
 * Gets a list of available speech synthesis voices.
 * @returns {SpeechSynthesisVoice[]} Array of available voices (empty if not supported)
 */
export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!browser) {
    return [];
  }

  if (!checkSpeechSynthesis()) return [];
  // Ensure voices are loaded
  const voices = window.speechSynthesis.getVoices();
  return voices;
}

function createVoiceListStore() {
  let voices: SpeechSynthesisVoice[] = $state(getAvailableVoices());

  return {
    get voices() {
      return voices;
    },
  };
}

export const useVoiceListStore = createVoiceListStore();
