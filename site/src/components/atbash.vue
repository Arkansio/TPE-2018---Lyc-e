<template lang="pug">
    div(class="container")
        h1 Le cryptage AtBash
        h4 Que fait-il ?
        p L'Atbash est un chiffrement par substitution simple pour l'alphabet hébreu. Cette méthode de chiffrement substitue א (la première lettre) à ת (la dernière), ב (la deuxième) à ש (l'avant-dernière), et ainsi de suite, inversant l'alphabet.
        p Ici il est adapté pour l'alphabet Latin.
        h4 Code
        pre
          code(class="python") {{ text }}
        h4 Execution
        h5 Entrée
        h5 Sortie
</template>

<script>
import txt from '../assets/atbash.txt'

export default {
  name: 'atbash',
  data () {
    return {
      text: txt
    }
  },
  mounted: function () {
    // eslint-disable-next-line
    hljs.initHighlightingOnLoad()
  }
}
</script>

<style>
</style>
