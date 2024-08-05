<script>
    import NavBar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<div class="container mx-auto">
    <header>
        <NavBar />
    </header>

    <div class="flex min-w-full py-32 md:py-48 justify-center items-center">
        <div class="w-5/6 md:w-3/5">
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
                    <span class="text-rose-600 font-mplusr">yね</span>
                    <span class="text-gray-800">. a</span>
                    <span class="text-rose-600">System Engineer</span>
                    <span class="text-gray-800">that excels at both</span>
                    <span class="text-rose-600">Hardware</span>
                    <span class="text-gray-800">and</span>
                    <span class="text-rose-600">Software</span>
                    <span class="text-gray-800">.</span>
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