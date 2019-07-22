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
        this.$axios.$get("/user")
            .then((res) => {this.name = res})
            .catch((res) => console.log(res + ""))

        console.log(this.name)
    }
}
</script>
