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
        // this.$axios.defaults.baseURL = ''
        this.$axios.get('/api/userPosts')
            .then((res) => {this.name = res.data.name; this.quote = res.data.quote})
            .catch((res) => {this.name = res})
        // this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
        //     .then((res) => this.name = res.data.id)
        //     .catch((res) => this.name = res)
    }
}
</script>
