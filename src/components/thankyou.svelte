<script>
  import { selectedValue } from "../data/selectVal";
  import { fade } from "svelte/transition";
</script>

<div
  class="flex flex-col justify-center text-white text-center  items-center font-overpass"
  in:fade="{{ duration: 2000 }}"
>
  <img
    src="../images/illustration-thank-you.svg"
    alt=""
    class="w-44 mb-6 animate-bounce"
  />
  <div
    class="rounded-2xl text-orange text-xs bg-lightBlue px-4 py-1  mb-6 font-sans font-bold tracking-wide"
  >
    You selected {$selectedValue} out of 5
  </div>
  <div class="">
    <h2 class="text-2xl font-bold mb-4">Thank you!</h2>
    <p class="text-lightGrey text-sm leading-relaxed">
      We appreciate you taking the time to give a rating. If you ever need more
      support, don't hesitate to get in touch!
    </p>
  </div>
</div>
