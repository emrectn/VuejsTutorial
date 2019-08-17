new Vue({
	el: '#app',
  data: {
  	title: 'Vue.js Lifecycle Hooks'
  },
  methods: {
  	destroy () {
    	this.$destroy();
    }
  },
  beforeCreate () {
  	console.log('beforeCreate çağrıldı.');
  },
  created () {
  	console.log('created çağrıldı.');
  },
  beforeMount () {
  	console.log('beforeMount çağrıldı.');
  },
  mounted () {
  	console.log('mounted çağrıldı.');
  },
  beforeUpdate () {
  	console.log('beforeUpdate çağrıldı.');
  },
  updated () {
  	console.log('updated çağrıldı.');
  },
  beforeDestroy () {
  	console.log('beforeDestroy çağrıldı.');
  },
  destroyed () {
  	console.log('destroyed');
  }
})