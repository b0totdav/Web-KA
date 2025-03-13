import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useBotStore = defineStore('bot', () => {
  const products = ref([])
  const cart = ref({})  //Elég tárolni a termék id és mennyiség párosát, key-value
  const toast = useToast()
  const total = ref(0)

  const loadAll = () => {
    fetch("http://localhost:3000/bolt")
      .then(resp => resp.json())
      .then(data => products.value = data)
  }

  const addToCart = (id) => {
    //let o = {'id' : id, 'q' : 1}    
    if (products.value.find((p) => p.id == id).store === 0) {
      toast.error("Ebből nincs több raktáron.")
      return
    }
    cart.value[id] = cart.value[id] ? cart.value[id] + 1 : 1
    toast("Kosárhoz adva")
    products.value.find((p) => p.id == id).store--
  }

  const saveProduct = (p) => {
    console.log(p)
    //let id = Math.round(Math.random() * 1000000000)
    products.value.push(p)
    axios.post("http://localhost:3000/bolt", p)
      .then(resp => {
        console.log(resp.statusText)
        toast("Sikeres mentés");
      })
      .catch(() => toast.error("Hiba"))
  }

  const emptyCart = () => {
    for (const key in cart.value) {
      products.value.find((p) => p.id == key).store += cart.value[key]
    }
    cart.value = {}
    toast.error("Kosár ürítve!")
  }

  const countTotal = () => {
    let t = 0
    for (const key in cart.value) {
      t += parseFloat(products.value.find(p => p.id === key).price) * cart.value[key]
    }
    return t
  }
  //#region deleteProduct
  const deleteProduct = (id) => {
    //Kosárból töröljük a terméket
    console.log(cart.value)
    products.value.find((p) => p.id == id).store += cart.value[id]
    delete cart.value[id]

    toast.success("Termék kosárból törölve!")
  }
  //#endregion deleteProduct

  const modifyQuantity = (id, direction) => {
    if (direction === '+') {
      addToCart(id)
    }
    else {
      cart.value[id] -= 1
      products.value.find((p) => p.id == id).store++
      if (cart.value[id] === 0) {
        deleteProduct(id)
      } else {
        toast.warning("Mennyiség módosítva!")
      }
    }
  }

  return { products, cart, loadAll, addToCart, saveProduct, emptyCart, countTotal, deleteProduct, modifyQuantity }
})
