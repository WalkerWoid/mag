<script lang="ts">
import {defineComponent, onUpdated, toRaw} from "vue";

import CartItem from "@/components/CartItem.vue";
import type {ItemInterface} from "@/interfaces/ItemInterface.ts";
import type {CartItemInterface} from "@/interfaces/ItemInterface.ts";


import {storeToRefs} from "pinia";
import {useShopStore} from "@/stores/shopStore.js";

export default defineComponent({
  components: {CartItem},
  setup() {
    const {items, cartItems} = storeToRefs(useShopStore())

    const addItem = (item: ItemInterface) => {
      const foundedItem: CartItemInterface | undefined = cartItems.value.find(cartItem => cartItem.article === item.article)

      if (!foundedItem) {
        const newItem: CartItemInterface = structuredClone(toRaw(Object.assign({count: 1}, toRaw(item))))

        cartItems.value.push(newItem)
      } else {
        foundedItem.count += 1
      }
    }

    onUpdated(() => {
      console.log(items.value);
    })

    return {items, addItem}
  }
})
</script>

<template>
  <div class="cart__container">
      <h1>Главная</h1>
  </div>

  <ul class="items__container items--main">
    <CartItem v-for="item in items" :item="item" :key="item.article" @click="addItem(item)" class="item--main" />
  </ul>
</template>

<style>
.item--main {
  cursor: pointer;
}
</style>