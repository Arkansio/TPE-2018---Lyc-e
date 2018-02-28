<template lang="pug">
    div(class="container")
        h1 Le cryptage Scytale
        h4 Que fait-il ?
        p La scytale est une méthode de chiffrement par transposition qui consiste à écrire le mot à coder dans un tableau en écrivant dans chaque ligne le nombre de caractère qui équivaut à la clé. Le message codé sera donné  en réecrivant le message colonne par colonne.
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
import encodageTxt from '../assets/scytaleEncode.txt'
import decodageTxt from '../assets/scytaleDecode.txt'

export default {
  name: 'scytale',
  data () {
    return {
      encodageTxt: encodageTxt,
      stepEncodage: 3,
      stepDecodage: 3,
      decodageTxt: decodageTxt,
      toEncode: 'coucoucommenttuvas',
      toDecode: 'CCCMTVOOOETAUUMNUS'
    }
  },
  methods: {
    encrypt: function (msg, key) {
      msg = msg.toUpperCase()
      var crypted = []
      while (crypted.length < key) {
        // eslint-disable-next-line
        crypted.push("")
      }
      for (var i = 0; i < key; i++) {
        var pointer = i
        while (pointer < msg.length) {
          crypted[i] += msg[pointer]
          pointer += key
        }
      }
      return crypted.join('')
    },
    decrypt: function (msg, key) {
      msg = msg.toUpperCase()
      var nbCol = parseInt(Math.ceil(msg.length / key))
      var nbRow = key
      var nbEmpty = nbCol * nbRow - msg.length
      var decrypted = []
      while (decrypted.length < nbCol) {
        // eslint-disable-next-line
        decrypted.push("")
      }
      var col = 0
      var row = 0
      for (var i = 0; i < msg.length; i++) {
        decrypted[col] += msg.charAt(i)
        col += 1
        if ((col === nbCol) || (col === nbCol - 1 && row >= nbRow - nbEmpty)) {
          col = 0
          row += 1
        }
      }
      return decrypted.join('')
    }
  },
  computed: {
    resultEncode: function () {
      return this.encrypt(this.toEncode, parseInt(this.stepEncodage))
    },
    resultDecode: function () {
      if (parseInt(this.stepDecodage) > 0 && parseInt(this.stepDecodage) < this.toDecode.length / 2) {
        return this.decrypt(this.toDecode, parseInt(this.stepDecodage))
      } else {
        return 'Veuillez inscrire un nombre valide entre 1 et ' + (this.toDecode.length / 2)
      }
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
