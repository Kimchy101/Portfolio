<template>
    <v-flex text-xscenter>
        <p class="mb-0">{{name}}<br>{{quote}}</p>
    </v-flex>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
    data() {
        return {
            name: '',
            quote: ''
        }
    },
    created() {
        this.name = 'loading name'
        this.quote = 'loading quotes'
        this.$axios.get('/userPosts')
            .then((res) => {this.name = res.data.name; this.quote = res.data.quote})
            .catch((res) => {this.name = res})
    }
}
</script>
