<script>
  import { updateRating, selectedValue } from "../data/selectVal";
  import { updateval, submitStatus } from "../data/submitted";
</script>

<div class="flex flex-col justify-between text-white gap-8 ">
  <div
    class="rounded-full bg-lightBlue flex items-center justify-center w-12 h-12"
  >
    <img src="../images/icon-star.svg" alt="" class="w-4 h-4" />
  </div>
  <div class="">
    <h2 class="text-2xl font-bold mb-2">How did we do?</h2>
    <p class="text-lightGrey text-sm leading-relaxed">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
  </div>

  <div class="flex flex-row justify-between text-lightGrey">
    <button class="rateButton" on:click="{updateRating}">1</button>
    <button class="rateButton" on:click="{updateRating}">2</button>
    <button class="rateButton" on:click="{updateRating}">3</button>
    <button class="rateButton" on:click="{updateRating}">4</button>
    <button class="rateButton" on:click="{updateRating}">5</button>
  </div>
  <button
    class="text-[14px] bg-orange uppercase rounded-3xl p-2 text-center hover:text-orange hover:bg-white duration-300 flex items-center justify-center hover:font-bold"
    on:click="{updateval}">submit</button
  >
</div>
