<template lang="pug">
    div(class="container")
        h1 Le cryptage César
        h4 Que fait-il ?
        p Le code césar consiste à utiliser un décalage dans l'alphabet. Le décalage doit être compris entre 1 et 26 si le décalage est égal ou supérieur à 26 la phrase reste la même. Si par exemple on choisi un décalage de 2 dans l'alphabet le A devient B , B devient C etc...
        h4 Code
        pre(v-highlightjs="text")
          code(class="python")
        h4 Execution
        h5 Encodage
        label(for="icon_prefix") Texte à encoder
        input(id="icon_prefix" type="text" class="validate"  v-model='toEncode')
        label(for="icon_prefix") Nombre de pas
        input(id="icon_prefix" type="number" class="validate"  v-model='stepEncodage')
        label(for="icon_prefix") Sortie
        output
          code {{ resultEncode }}
        h5 Décodage
        label(for="icon_prefix") Texte à décoder
        input(id="icon_prefix" type="text" class="validate"  v-model='toDecode')
        label(for="icon_prefix") Nombre de pas
        input(id="icon_prefix" type="number" class="validate"  v-model='stepDecodage')
        label(for="icon_prefix") Sortie
        output
          code {{ resultDecode }}
</template>

<script>
import txt from '../assets/cesar.txt'
import { encrypt, decrypt } from 'caesar-shift'

export default {
  name: 'atbash',
  data () {
    return {
      text: txt,
      stepEncodage: 6,
      stepDecodage: 6,
      toEncode: 'coucou comment tu vas',
      toDecode: 'iuaiua iussktz za bgy'
    }
  },
  computed: {
    resultEncode: function () {
      return encrypt(this.stepEncodage, this.toEncode)
    },
    resultDecode: function () {
      return decrypt(this.stepDecodage, this.toDecode)
    }
  }
}
</script>

<style>
output {
  display: block;
  padding: 0.5em;
  background-color: #F0F0F0;
}

.container {
  margin-bottom: 200px;
}
</style>
