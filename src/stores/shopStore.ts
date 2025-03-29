import {ref, watch} from 'vue'
import { defineStore } from 'pinia'

import type {ItemInterface} from "@/interfaces/ItemInterface.ts";
import type {CartItemInterface} from "@/interfaces/ItemInterface.ts";
import type {Ref} from "vue";

interface ShopStoreInterface {
  items: Ref<ItemInterface[]>
  cartItems: Ref<CartItemInterface[]>
  cartCount: Ref<number>
  cartResultSum: Ref<string>
  getItems(): void
  getCartItems(): void
}

export const useShopStore = defineStore('shopStore', () => {
  const items = ref<ItemInterface[]>([])
  const cartItems = ref<CartItemInterface[]>([])
  const cartCount = ref<number>(0)
  const cartResultSum = ref<string>('0')


  const getResultSum = (): number => {
    return cartItems.value.reduce((accum, item) => +accum + +item.count * item.price, 0)
  }
  watch(() => cartItems.value.length, (newLength) => {
    cartCount.value = newLength
  }, {immediate: true})
  watch(() => cartItems.value, (newItems) => {
    cartResultSum.value = getResultSum().toLocaleString('ru-RU')
  }, {deep: true, immediate: true})

  async function getItems() {
    try {
      const rawItems = await fetch('/items.json')

      if (rawItems) {
        items.value = await rawItems.json()
      }
    } catch (error) {
      console.log('При получении товаров произошла ошибка', error)
    }
  }
  async function getCartItems() {
    try {
      const rawItems = await fetch('/cartItems.json')

      if (rawItems) {
        cartItems.value = await rawItems.json()
      }
    } catch (error) {
      console.log('При получении товаров произошла ошибка', error)
    }
  }

  return {
    items,
    cartItems,
    cartCount,
    cartResultSum,
    getItems,
    getCartItems,
  } as ShopStoreInterface
})
