<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
    <div class="bg-red-700 text-black flex justify-between items-center p-2 px-4 uppercase">
        <div class="flex flex-col text-center font-bold">
            <RouterLink to="/">Culture Pain</RouterLink>
            <p class="text-sm text-white tracking-widest">Terville</p>
        </div>
        
        <div class="flex space-x-4 font-bold">
            <RouterLink to="/menu">Menu</RouterLink>
            <RouterLink to="/">Contacts</RouterLink>
        </div>
    </div>

    <RouterView />
</template>