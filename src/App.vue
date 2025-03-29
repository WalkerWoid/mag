<script lang="ts">
import {defineComponent, onMounted} from "vue";
import Header from "@/components/Header.vue";
import {useShopStore} from "@/stores/shopStore.ts";


export default defineComponent({
  components: {Header},

  setup() {
    onMounted(() => {
      useShopStore().getItems()
      useShopStore().getCartItems()
    })
  }
})
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
