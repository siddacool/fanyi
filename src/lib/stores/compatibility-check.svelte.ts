import { browser } from '$app/environment';

/**
 * Checks if the Speech Synthesis API is supported.
 * @returns {boolean} True if supported, false otherwise.
 */
export function checkSpeechSynthesis(): boolean {
  if (!browser) {
    return false;
  }

  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    console.warn('Speech Synthesis API is not supported.');
    return false;
  }

  return true;
}

/**
 * Checks if the Speech Recognition API is supported.
 * @returns {boolean} True if supported, false otherwise.
 */
export function checkSpeechRecognition(): boolean {
  if (!browser) {
    return false;
  }

  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn('Speech Recognition API is not supported.');
    return false;
  }
  return true;
}

/**
 * Checks if the experimental Translator API is supported.
 * @returns {boolean} True if supported, false otherwise.
 */
export function checkTranslatorAPI(): boolean {
  if (!browser) {
    return false;
  }

  if (!('Translator' in window)) {
    console.warn('Experimental Translator API is not supported.');
    return false;
  }
  return true;
}

function createCompatibilityCheckStore() {
  let isSpeechSynthesis: boolean = $state(checkSpeechSynthesis());
  let isSpeechRecognition: boolean = $state(checkSpeechRecognition());
  let isTranslatorAPI: boolean = $state(checkTranslatorAPI());

  return {
    get isSpeechSynthesis() {
      return isSpeechSynthesis;
    },
    get isSpeechRecognition() {
      return isSpeechRecognition;
    },
    get isTranslatorAPI() {
      return isTranslatorAPI;
    },
  };
}

export const useCompatibilityCheckStore = createCompatibilityCheckStore();
