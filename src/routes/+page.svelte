<script>
  import Feedback from "../components/feedback.svelte";
  import Thankyou from "../components/thankyou.svelte";
  import { submitStatus } from "../data/submitted";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- displays site properly based on user's device -->
  <title>Frontend Mentor | Interactive rating component</title>
</svelte:head>
<main
  class="flex items-center justify-center min-h-screen  bg-veryDarkBlue font-overpass"
>
  <div
    class="mx-4 md:mx-0 max-w-sm bg-gradient-radial p-8 rounded-3xl h-[405px]"
  >
    {#if $submitStatus}
      <Thankyou />
    {:else}
      <Feedback />
    {/if}
  </div>
</main>
