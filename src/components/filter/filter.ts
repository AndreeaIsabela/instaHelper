import { defineComponent, ref } from 'vue'

const Filter = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default Filter
