<template lang="pug">
    div(class="container")
        h1 Le cryptage Scytale
        h4 Que fait-il ?
        p Après avoir enroulé la ceinture sur la scytale, le message était écrit en plaçant une lettre sur chaque circonvolution. Pour le déchiffrer, le destinataire devait posséder un bâton d'un diamètre identique à celui utilisé pour l'encodage. Il lui suffisait alors d'enrouler la scytale autour de ce bâton pour obtenir le message en clair.
        h4 Code
        h5 Encodage
        pre(v-highlightjs="encodageTxt")
          code(class="python")
        h5 Decodage
        pre(v-highlightjs="decodageTxt")
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
import encodageTxt from '../assets/scytaleEncode.txt'
import decodageTxt from '../assets/scytaleDecode.txt'

export default {
  name: 'scytale',
  data () {
    return {
      encodageTxt: encodageTxt,
      decodageTxt: decodageTxt,
      toEncode: 'coucou comment tu vas',
      toDecode: 'xlfxlfxlnnvmggfezh'
    }
  },
  methods: {
    encrypt: function (msg, key) {
      msg = msg.upper()
      var crypted = [''] * key
    }
  },
  computed: {
    resultEncode: function () {
      return this.encrypt(this.toEncode)
    },
    resultDecode: function () {
      return this.encrypt(this.toDecode)
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
