<script>
import {defineComponent} from "vue";
import Cart from "@/components/Cart.vue";
import Result from "@/components/Result.vue";

export default defineComponent({
  components: {Cart, Result},
})
</script>

<template>
  <div class="cart">
    <Cart />
    <Result />
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  align-items: flex-start;
  gap: 55px;
}
</style>