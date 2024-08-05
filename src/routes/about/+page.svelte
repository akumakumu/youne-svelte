<script>
    import NavBar from '$lib/navbar.svelte';
</script>

<div class="container mx-auto">
    <header>
        <NavBar />
    </header>

    <div class="w-full py-2">
        <div class="flex flex-row md:items-start items-center    px-4 lg:px-32">
            <div class="flex md:w-1/5 w-1/5">
                <div>
                    <img src="/plainy34.jpg" alt="plainy" width="180" class="drop-shadow-xl">
                </div>
            </div>

            <div class="md:w-4/5 w-4/5 md:p-4 px-4">
                <p class="md:text-3xl text-2xl font-bold font-kosugi pb-2">
                    <span class="text-rose-600">./</span>
                    <span class="text-gray-800">Youne Baldea</span>
                </p>

                <p class="md:text-lg text-sm font-kosugi text-justify">
                    <span>Sorry if it little bit boring and bland, but i like this style. Anyway, I am usually known as kuu. I've been doing electronic repair full-time since 2016. In my free time, I like to tinker with Linux-related stuff, networking, or embedded systems in general. As for programming in my hobby projects, I mainly focus on writing firmware and services, given their close relation to electronics. Recently, I've been expanding my knowledge by delving into the field of artificial intelligence.</span>
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">

</style>