import { OrderDTO } from "../models/order";
import * as cartRepository from "../localstorage/cart-repository"

export function saveCart(Cart: OrderDTO) {
  cartRepository.save(Cart);
}
