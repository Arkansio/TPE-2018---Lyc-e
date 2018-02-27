<template lang="pug">
    div(class="container")
        h1 Le cryptage César
        h4 Que fait-il ?
        p Le texte chiffré s'obtient en remplaçant chaque lettre du texte clair original par une lettre à distance fixe, toujours du même côté, dans l'ordre de l'alphabet. Pour les dernières lettres (dans le cas d'un décalage à droite), on reprend au début. Par exemple avec un décalage de 3 vers la droite, A est remplacé par D, B devient E, et ainsi jusqu'à W qui devient Z, puis X devient A etc. Il s'agit d'une permutation circulaire de l'alphabet
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
import txt from '../assets/cesar.txt'

export default {
  name: 'atbash',
  data () {
    return {
      text: txt,
      toEncode: 'coucou comment tu vas',
      toDecode: 'xlfxlfxlnnvmggfezh'
    }
  },
  methods: {
    encrypt: function (argument) {
      const key = this.getKey()
      var subject = argument.toLowerCase().replace(/[^a-z0-9]/, '')
      subject = [...subject].map((char) => key[char]).join('')
      for (var x = 5, i = 0; x < subject.length; x = x + 5) {
        subject = subject.slice(0, x + i) + ' ' + subject.slice(x + i)
        i++
      }
      return subject.trim()
    },
    getKey: function () {
      let out = {}
      var forward = 'abcdefghijklmnopqrstuvwxyz0123456789'
      var backward = 'zyxwvutsrqponmlkjihgfedcba0123456789'

      for (var x = 0; x < forward.length; x++) {
        out[forward.charAt(x)] = backward.charAt(x)
      }
      return out
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
