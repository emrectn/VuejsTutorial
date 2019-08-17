Vue.component('contactInformation', {
  data () {
    return {
      title: 'Miss',
      titleOptions: ['Miss', 'Mister'],
      name: '',
      email: '',
      password: '',
      errors: []
    }
  },
	template: '#contactInformation',
})

Vue.component('paymentForm', {
  /* props: ['resim', 'baslik', 'metin'], */
  /* Type kontorolu yapmak istenirse props tanımlama */
  methods: {
    removeElement () {
      /* Parenttaki bir fonksiyonu çağırmak için emit fonksiyonu kullanılır. */
      this.$emit('remove-element', this.id)
    }
  },
	template: '#paymentForm',
})

Vue.component('paymentInformation', {
  /* props: ['resim', 'baslik', 'metin'], */
  /* Type kontorolu yapmak istenirse props tanımlama */
  data () {
    return {
      cardType: 'Visa',
      cardOptions: ['Visa', 'Mastercard'],
      cardNo: '',
      expiryDate: ''
    }
  },
	template: '#paymentInformation',
})

new Vue({
	el: '#app',
  data () {
    return {
      cardType: 'Visa',
      cardOptions: ['Visa', 'Mastercard'],
      cardNo: '',
      expiryDate: ''
    }
  },
})
