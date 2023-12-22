<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const router = useRouter()
</script>

<template>
  <p>
    {{ `Hi: ${props.name}` }}
  </p>
  <br>
  <div>
    <button @click="router.back()">
      BACK
    </button>
  </div>
</template>
