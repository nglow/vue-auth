<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>

    <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
  </form>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Signin',
  setup () {
    const data = reactive({
      email: '',
      password: ''
    })
    const expiredays = 1
    const router = useRouter()
    const submit = () => {
      console.log(data)
      fetch('http://localhost:8080/api/users/sign_in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data)
      }).then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
          // Save JWT token to cookie
          var todayDate = new Date()
          todayDate.setDate(todayDate.getDate() + expiredays)
          document.cookie = 'jwt_token' + '=' + 'Bearer ' + escape(data.token) + '; path=/; expires=' + todayDate + ';'
          console.log(document.cookie)
          // Save JWT token to local storage
          localStorage.setItem('jwt_token', 'Bearer ' + escape(data.token))
          router.push('/')
        })

      // await router.push('/')
    }
    return {
      data,
      submit
    }
  }
}
</script>
