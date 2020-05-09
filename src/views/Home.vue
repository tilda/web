<template>
  <div class="home">
    <ContactCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactCard from '@/components/ContactCard.vue'

export default {
  name: 'Home',
  components: {
    ContactCard
  }
}
</script>
