<template>
    <v-card class="elevation-20 black">
            <v-carousel :cycle="false">
                <v-carousel-item
                    v-for="(game, i) in games"
                    :src="game.artwork"
                    :key="i"
                >
                <v-card class="cardForTitle">
                <v-card-text  class="text-xs-center">
                    <div>
                        <h1 class="headline mb-0">{{game.name}}</h1>
                        {{game.description}}
                    </div>
                </v-card-text>
                </v-card>
                </v-carousel-item>
            </v-carousel>
    </v-card>
</template>

<style scoped>
    .cardForTitle
    {
        background-color: rgba(0, 0, 0, 0.7)
    }

</style>

<script>
export default {
    data() {
        return {
            games: [
                { name: 'Robot Tale', artwork: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', 
                description: 
                'Follow the journey of a robot who explores an unfamiliar world'},
                { name: 'Robot Tale', artwork: '/game-art/test.png'},
                { name: 'Robot Tale', artwork: '/game-art/test.png'}

            ],
        }
    }
}
</script>