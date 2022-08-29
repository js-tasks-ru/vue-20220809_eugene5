import { createApp } from './vendor/vue.esm-browser.js'

// Создайте Vue приложение
createApp({
  data() {
    return { firstNumber: 0, secondNumber: 0, operator: 'sum' }
  },
  computed: {
    result() {
      let result

      switch (this.operator) {
        case 'sum':
          result = this.firstNumber + this.secondNumber
          break
        case 'subtract':
          result = this.firstNumber - this.secondNumber
          break
        case 'multiply':
          result = this.firstNumber + this.secondNumber
          break
        case 'divide':
          result = this.firstNumber / this.secondNumber
          break
      }

      return result
    },
  },
}).mount('#app')
