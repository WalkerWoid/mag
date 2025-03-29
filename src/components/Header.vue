<script lang="ts">
import {defineComponent} from "vue";
import {storeToRefs} from "pinia";
import {useShopStore} from "@/stores/shopStore.ts";

export default defineComponent({
  setup() {
    const {cartCount, cartResultSum} = storeToRefs(useShopStore())

    return {cartCount, cartResultSum}
  }
})
</script>

<template>
  <header>
    <form class="form__search">
      <label>
        <input type="search" placeholder="Поиск" name="search-items">
      </label>
    </form>

    <router-link to="/cart" class="cart" activeClass="cart-active" exactActiveClass="cart-active">
      <span class="cart__img"><img src="@/assets/images/cart-icon.svg" alt="cart-icon"></span>
      <p class="cart__text cart--text">Ваша корзина</p>
      <p class="cart__text cart--count">{{cartCount}} товара</p>
      <p class="cart__text cart--price">{{cartResultSum}} &#8381;</p>
    </router-link>

    <div class="breadcrumbs">
      <router-link to="/" class="breadcrumb__link">Главная</router-link>
      <router-link to="/cart" class="breadcrumb__link">Корзина</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  padding: 18px 0;
  gap: 36px;
  align-items: center;
  flex-wrap: wrap;
}
.form__search {
  flex: 1 1 auto;
}

.cart {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 0 10px;
}
.cart__img {
  grid-row: span 3;
  align-self: center;
  display: flex;
}
.cart__text {
  margin-top: -2px;
  margin-bottom: -2px;
}
.cart--text {
  font-size: 14px;
}
.cart--count {
  font-size: 12px;
  color: var(--gray-color);
}
.cart--price {
  font-size: 12px;
}

.breadcrumbs {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
}
.breadcrumb__link {
  font-size: 14px;
  position: relative;
}
.breadcrumb__link:not(:last-of-type):after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-left: 4px solid rgba(31, 36, 50, .8);
  border-bottom: 4px solid transparent;
  top: 50%;
  transform: translateY(calc(-50% - 1px));
  left: calc(100% + 10px)
}
.router-link-active {
  color: var(--gray-color)
}
</style>