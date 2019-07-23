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
        this.name = 'george'
        this.quote = 'I ate a banana'
        console.log(this.$axios.defaults.baseURL)
        this.$axios.get('/api/userPosts')
            .then((res) => {this.name = res.data.name; this.quote = res.data.quote})
            .catch((res) => console.log(res))
    }
}
</script>
