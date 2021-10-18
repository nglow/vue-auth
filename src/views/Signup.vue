<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>
    <input v-model="data.name" class="form-control" placeholder="Name" required>
    <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>
    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
  </form>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup () {
    const data = reactive({
      name: '',
      email: '',
      password: ''
    })

    const router = useRouter()

    const submit = async () => {
      console.log(data)
      await fetch('http://localhost:8080/api/users/sign_up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      await router.push('/sign_in')
    }
    return {
      data,
      submit
    }
  }
}
</script>
