<script setup lang="ts">
// replaced dyanmicaly
const router = useRouter()
const name = ref('')

function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <form @submit.prevent="go">
    <input v-model="name" type="text" aria-label="What's your name?" placeholder="What's your name?">
    <button type="submit">
      GO
    </button>
  </form>
  <br>
  <button type="button" @click="router.push('/about')">
    About
  </button>
</template>
