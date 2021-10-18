<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/sign_in" class="nav-link">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sign_up" class="nav-link">Register</router-link>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <router-link to="/sign_in" class="nav-link" @click="logout">Sign Out</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Nav',
  setup () {
    const store = useStore()
    const auth = computed(() => store.state.authenticated)
    const logout = async () => {
      await console.log('Sign Out!')
      // await fetch('http://localhost:8080/api/users/sign_out', {
      // //   method: 'POST',
      // //   headers: { 'Content-Type': 'application/json' },
      // //   credentials: 'include'
      // })
    }
    return {
      auth,
      logout
    }
  }
}
</script>
