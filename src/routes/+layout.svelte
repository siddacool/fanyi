<script lang="ts">
  import GlobalStyles from '$lib/components/GlobalStyles';
  import ThemeSetter from '$lib/components/ThemeSetter';

  let { children } = $props();
</script>

<GlobalStyles />
<ThemeSetter />
<main>
  <div class="box">
    {@render children?.()}
  </div>
</main>

<style lang="scss">
  main {
  }

  .box {
  }
</style>
