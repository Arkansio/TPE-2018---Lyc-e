<template lang="pug">
    nav
      div(class="nav-wrapper")
        a(href="#" class="brand-logo center") CRYPT-TPE
        a(href="#" data-activates="mobile-demo" class="button-collapse")
            i(class="material-icons") menu
        ul(id="nav-mobile" class="right hide-on-med-and-down")
            li
                router-link(:to="{ name: 'atbash'}") AtBash
            li
                router-link(:to="{ name: 'scytale'}") Scytale
            li
                router-link(:to="{ name: 'cesar'}") Code césar
            li
                router-link(:to="{ name: 'author'}") Auteurs
        ul(class="side-nav" id="mobile-demo")
            li
                router-link(:to="{ name: 'atbash'}") AtBash
            li
                router-link(:to="{ name: 'scytale'}") Scytale
            li
                router-link(:to="{ name: 'cesar'}") Code césar
            li
                router-link(:to="{ name: 'cesar'}") Auteurs

</template>

<script>
export default {
  name: 'navbar',
  mounted: function () {
    // eslint-disable-next-line
    $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true,
      draggable: true
    })
  }
}
</script>

<style>
</style>
