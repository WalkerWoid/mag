<script lang="ts">
import {defineComponent} from "vue";
import {storeToRefs} from "pinia";
import {useShopStore} from "@/stores/shopStore.ts";

export default defineComponent({
  setup() {
    const {cartCount, cartResultSum, cartItems} = storeToRefs(useShopStore())

    const sendData = () => {
      const data: string = JSON.stringify(cartItems.value)
      console.log(data)
    }

    return {cartCount, cartResultSum, sendData}
  }
})
</script>

<template>
  <div class="result__container">
    <div class="result--upper">
      <h2 class="result__title">Итого</h2>
      <p class="result__text">Сумма заказа <span>{{cartResultSum}} &#8381;</span></p>
      <p class="result__text">Количество <span>{{cartCount}} шт</span></p>
    </div>

    <div class="result--bottom">
      <p class="result__text result__text--big">Стоимость товаров <span>{{cartResultSum}} &#8381;</span></p>
      <button type="button" class="result__button" @click="sendData">Оплатить</button>
    </div>
  </div>
</template>

<style scoped>
.result__container {
  border-radius: 5px;
  background-color: var(--action-color);
  padding: 45px 30px 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  max-width: 425px;
  width: 100%;
  min-height: 405px;
}
.result--upper {
  display: flex;
  flex-direction: column;
  gap: 17px;
}
.result__title {
  margin-bottom: 14px;
  font-size: 24px;
}
.result__text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
}
.result__text span {
  font-weight: 400;
}


.result--bottom {
  padding-top: 10px;
  border-top: 1px solid rgba(174, 176, 182, 1);
}
.result__text--big {
  font-weight: 400;
  font-size: 18px;
}
.result__text--big span {
  font-weight: 700;
  font-size: 26px;
}
.result__button {
  margin-top: 30px;
  background-color: var(--second-color);
  color: white;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
  padding: 14px;
  font-size: 18px;
}
</style>
