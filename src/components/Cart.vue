<script lang="ts">
import {defineComponent} from "vue";
import CartItem from "@/components/CartItem.vue";
import type {CartItemInterface} from "@/interfaces/ItemInterface.ts";

import {storeToRefs} from "pinia";
import {useShopStore} from "@/stores/shopStore.js";

export default defineComponent({
  components: {CartItem},

  setup() {
    const {cartItems, cartCount} = storeToRefs(useShopStore())

    const deleteItem = (itemArticle: string) => {
      const deletedItem: CartItemInterface | undefined = cartItems.value.find(item => item.article === itemArticle)

      if (!deletedItem) return

      const itemIndex = cartItems.value.indexOf(deletedItem)

      cartItems.value.splice(itemIndex, 1)
    }
    const clearCart = () => {
      cartItems.value = []
    }

    return {cartItems, cartCount, deleteItem, clearCart}
  }
})
</script>

<template>
  <div class="cart__container">
    <div class="cart__header">
      <h1>Ваша корзина</h1>
      <span class="cart__count">{{cartCount}} товара</span>
      <button type="button" class="cart__clear" @click="clearCart">Очистить корзину</button>
    </div>

    <ul class="items__container" v-show="cartItems.length !== 0">
      <CartItem v-for="item in cartItems" :item="item" :key="item.article" @delete-item="deleteItem" />
    </ul>
    <p v-show="cartItems.length === 0">Корзинка пуста!</p>
  </div>
</template>

<style scoped>
.cart__container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1 1 auto;
}
.cart__header {
  display: flex;
  align-items: flex-end;
  gap: 22px;
}
.cart__count {
  font-size: 18px;
  color: var(--gray-color);
}
.cart__clear {
  margin-left: auto;
  font-size: 14px;
  color: var(--gray-color);
  position: relative;
}
.cart__clear:after {
  content: '';
  position: absolute;
  top: calc(100% - 6px);
  height: 1px;
  left: 0;
  right: 0;
  background-color: var(--gray-color);
}

.items__container {
  display: flex;
  flex-direction: column;
}
</style>