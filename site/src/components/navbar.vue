<template lang="pug">
    nav
      div(class="nav-wrapper")
        a(href="#" class="brand-logo") CRYPT-TPE
        a(href="#" data-activates="mobile-demo" class="button-collapse")
            i(class="material-icons") menu
        ul(id="nav-mobile" class="right hide-on-med-and-down")
          li
            a(href="sass.html") AtBash
          li
            a(href="sass.html") Scytale
          li
            a(href="sass.html") Code césar
          li
            a(href="sass.html") AUTEURS
        ul(class="side-nav" id="mobile-demo")
            li
                a(href="sass.html") Sass
            li
                a(href="badges.html") Components
            li
                a(href="collapsible.html") Javascript
            li
                a(href="mobile.html") Mobile

</template>

<script>
export default {
  name: 'navbar',
  mounted: function () {
    // eslint-disable-next-line
    $('.button-collapse').sideNav()
  }
}
</script>

<style>
</style>
