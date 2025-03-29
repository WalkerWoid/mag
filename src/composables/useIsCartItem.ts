import type {ItemInterface} from "@/interfaces/ItemInterface.ts";
import type {CartItemInterface} from "@/interfaces/ItemInterface.ts";
export const useIsCartItem = (item: ItemInterface | CartItemInterface): item is CartItemInterface => {
    return 'count' in item
}