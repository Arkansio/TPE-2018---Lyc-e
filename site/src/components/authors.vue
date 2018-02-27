<template lang="pug">
    div(class="container")
        h1(class="center") L'équipe
        div(class="row")
            div(class="col xl3 l6")
                center
                    img(src="../assets/arman.png" class="teamPic")
                    div(class="name") Arman
                    div(class="description") Membre du groupe
            div(class="col xl3 l6")
                center
                    img(src="../assets/seb.png" class="teamPic")
                    div(class="name") Sébastien
                    div(class="description") Membre du groupe
            div(class="col xl3 l6")
                center
                    img(src="../assets/mzk.png" class="teamPic")
                    div(class="name") Marzouk
                    div(class="description") Membre du groupe
            div(class="col xl3 l6")
                center
                    img(src="../assets/marco.jpg" class="teamPic")
                    div(class="name") Marco
                    div(class="description") Développeur chez Arkanse, il a contribué au développement du site
</template>

<script>
export default {
  name: 'authors'
}
</script>

<style>
.container {
  margin-bottom: 200px;
}
.teamPic {
    border-radius: 100%;
    width: 200px;
    height: 200px;
}
.row {
    margin-top: 50px;
}
.name {
    font-size: 2em
}
.description {
    font-size: 1.2em
}
</style>
