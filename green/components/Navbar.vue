<template>
    <div class="topnav" id="myTopnav">
        <NuxtLink to="/" class="active">Home</NuxtLink>
        <NuxtLink to="/cars" class="active">Cars</NuxtLink>
        <span class="iconnav" @click="myFunction">
            <nuxt-img src="/bars-solid.svg" alt="menu" width="25px" style="filter: brightness(0) invert(1);" />
        </span>
    </div>
</template>

<script setup>
  function myFunction() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }
</script>