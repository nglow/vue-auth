<template>
  {{ message }}
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'

export default {
  name: 'Home',
  setup: function () {
    // const message = ref('Home Page')
    const token = localStorage.getItem('jwt_token')
    console.log(token)
    const store = useStore()
    const message = ref('You are not signed in!')
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    if (token != null) {
      myHeaders.append('Authorization', token)
    }
    const name = fetch('http://localhost:8080/api/users', {
      headers: myHeaders,
      credentials: 'include'
    }).then(response => response.json())
      .then(json => json.name)
      .then(name => {
        console.log(ref(name))
      })
    return {
      message
    }
    // onMounted(async () => {
    //   try {
    //     const response = await fetch('http://localhost:8080/api/users', {
    //       headers: { 'Content-Type': 'application/json', Authorization: token },
    //       credentials: 'include'
    //     })
    //     // const content = await response.json()
    //     // message.value = `Hi ${content.name}`
    //     // await store.dispatch('setAuth', true)
    //   } catch (e) {
    //     // await store.dispatch('setAuth', false)
    //   }
    // })
    // return {
    //   message
    // }
  }
}
</script>

<style scoped>

</style>
