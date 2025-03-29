<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";
import type {CartItemInterface} from "@/interfaces/ItemInterface.ts";


export default defineComponent({
  emits: {
      'deleteItem': (itemArticle: string) => true
  },
  props: {
    item: {
      type: Object as PropType<CartItemInterface>,
      required: true
    }
  },
  setup(props, {emit}) {
    const addItem = () => {
      props.item.count += 1
    }
    const decreaseItem = () => {
      if (props.item.count -1 === 0) {
        emit('deleteItem', props.item.article)
      } else {
        props.item.count -= 1
      }
    }

    return {addItem, decreaseItem}
  },
})
</script>

<template>
  <li class="item">
    <picture class="item__img">
      <img :src="item.pic" alt="item-image">
    </picture>

    <div class="item__info">
      <h3 class="item__title">{{item.title}}</h3>
      <p class="item__description">{{item.description}}</p>
      <p class="item__article">Артикул: {{item.article}}</p>
    </div>

    <p class="item__actions" v-if="item.count">
      <span class="action action--decrease" @click="decreaseItem">-</span>
      <span class="action item__count">{{item.count}}</span>
      <span class="action action--increase" @click="addItem">+</span>
    </p>

    <p class="item__price">{{item.price.toLocaleString('ru-RU')}} &#8381;</p>

    <span class="item__delete" @click="$emit('deleteItem', item.article)" v-if="item.count">
      <img src="@/assets/images/cross.svg" alt="close-icon">
    </span>
  </li>
</template>

<style>
.item {
  border-bottom: 1px solid var(--bd-color);
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 25px 20px 15px;
  position: relative;
}
.item:last-of-type {
  border-bottom: none;
}

.item__img {
  width: 100px;
  height: 100px;
}
.item__img img {
  object-fit: cover;
}

.item__info {
  flex: 0 1 263px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.item__title {
  font-size: 16px;
}
.item__description {
  font-size: 12px;
  text-wrap: balance;
  line-height: 150%;
}
.item__article {
  font-size: 14px;
  color: var(--gray-color);
}

.item__actions {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.action {
  font-size: 14px;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  background-color: var(--action-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.action--decrease, .action--increase {
  cursor: pointer;
}

.item__price {
  font-weight: 500;
  font-size: 18px;
  padding-right: 38px;
  margin-left: auto;
}

.item__delete {
  position: absolute;
  right: 6px;
  top: 27px;
  cursor: pointer;
}
</style>