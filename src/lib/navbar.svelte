<script>
    let menuHidden = true;
</script>

<nav class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          md:px-0
          px-4
          text-lg text-gray-700
          bg-white
        ">
      <div>
        <a href="/">
            <img src="/saint-normal.png" alt="Saint" width="50" height="50">
        </a>
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click={() => (menuHidden = !menuHidden)}>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>

      {#if menuHidden}

      <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0">
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400" href="/">Service</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400" href="/">Project</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400" href="/">About</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400 text-rose-500" href="/">Contact</a>
          </li>
        </ul>
      </div>
      {:else}
      <div class="w-full md:flex md:items-center md:w-auto" id="menu">
        <ul class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0">
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400" href="/">Service</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400" href="/">Project</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400" href="/">About</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-rose-400 text-rose-500" href="/">Contact</a>
          </li>
        </ul>
      </div>
      {/if}
    </nav>

<style lang="postcss">

</style>