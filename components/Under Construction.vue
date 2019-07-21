<template>
    <v-flex text-xs-center>

    <div>
      <v-icon size="40">build</v-icon>
    </div>
    <p class="mb-0">{{item}} Under Construction <br></p>
    <small class="font-italic">{{subtext}}</small>

    </v-flex>
</template>

<script>
export default {
    data() {
        return {
            subtext: ''
        }
    },
    props: {
        item: ''
    },
    mounted() {
        const subtexts = 
            ['Come back another time?', 
             'We\'re working hard at it',
             'Hopefully, it will been worth the wait',
             'Coming to a website near you!',
             'Tea time in the meantime?',
             'It\'ll probably be finished within your lifetime (no guarantees)'];

        this.subtext = subtexts[Math.floor(Math.random() * subtexts.length)]
    }
}
</script>

