<script>
    import NavBar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<div class="container mx-auto">
    <header>
        <NavBar />
    </header>

    <div class="flex min-w-full py-32 md:py-48 justify-center items-center">
        <div class="w-5/6 md:w-2/5">
            <div class="flex justify-center items-center">
                <p class="text-4xl font-bold text-center font-kosugi">
                    <span class="text-gray-800">Hi, I'm</span>
                    <span class="text-rose-600">Youne</span>
                </p>
            </div>

            <div class="flex justify-center items-center my-4">
                <p class="text-2xl text-center font-kosugi">
                    <span class="text-gray-800">Stylized as </span> 
                    <span class="text-rose-600">y-ne</span>
                    <span class="text-gray-800">or </span>
                    <span class="text-rose-600 font-mplusr">Y姉</span>
                    <span class="text-gray-800">. An individual who goes by the nickname '</span>
                    <span class="text-rose-600">Technician</span>
                    <span class="text-gray-800">'</span>
                </p>
                
            </div>
        </div>
    </div>

    <footer class="mb-2">
        <Footer />
    </footer>
</div>

<style lang="postcss">
    
</style>