<template>
  <div id="q-app">
     <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
