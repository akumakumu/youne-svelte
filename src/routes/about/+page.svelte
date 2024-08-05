<script>
    import NavBar from '$lib/navbar.svelte';
</script>

<div class="container mx-auto">
    <header>
        <NavBar />
    </header>

    <div class="w-full py-2">
        <div class="flex flex-row items-start px-4 lg:px-32">
            <div class="md:w-1/5 w-2/5">
                <img src="/plainy34.jpg" alt="plainy" width="180" class="drop-shadow-xl">
            </div>

            <div class="md:w-4/5 w-3/5 md:p-4 px-4">
                <p class="text-3xl font-kosugi">
                    <span class="text-rose-600">./</span>
                    <span class="text-gray-800">Nightingale</span>
                </p>

                <p class="text-lg font-kosugi text-justify">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam quisquam voluptas, porro impedit quidem magni dolor distinctio officiis non et vero similique harum. Cum similique possimus veritatis fugiat perspiciatis.</span>
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">

</style>