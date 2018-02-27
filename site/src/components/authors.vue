<template lang="pug">
    div(class="container")
        h1 Le cryptage AtBash
        h4 Que fait-il ?
        p Atbash est une methode de chiffrement datant de -500 av J-C. Elle inverse simplement l'alphabet comme un miroir : A deviens Z, B devient Y..
        h4 Code
        pre(v-highlightjs="text")
          code(class="python")
        h4 Execution
        h5 Encodage
        label(for="icon_prefix") Texte à encoder
        input(id="icon_prefix" type="text" class="validate"  v-model='toEncode')
        label(for="icon_prefix") Sortie
        output
          code {{ resultEncode }}
        h5 Décodage
        label(for="icon_prefix") Texte à décoder
        input(id="icon_prefix" type="text" class="validate"  v-model='toDecode')
        label(for="icon_prefix") Sortie
        output
          code {{ resultDecode }}
</template>

<script>
import txt from '../assets/atbash.txt'

export default {
  name: 'atbash'
}
</script>

<style>
.container {
  margin-bottom: 200px;
}
</style>
