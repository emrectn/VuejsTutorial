Vue.filter('filterName', function (value) {
  return //Global filter tanımlama
})

/* Global mixin tanımlama, bu method tüm component ve instancelar için otomatik çağrılır. */
Vue.mixin({
  created () {
    console.log('Bu hook butun instance ve componentler için çağrılacaktır.');
  }
})


Vue.component('appTitle', {
  template: '<h3>Baslik</h3>'
})

const dimensionMixin = {
  methods: {
    getWindowHeight() {
      return window.innerHeight;
    },
    getWindowWidth() {
      return window.innerWidth;
    }
  }
}

const vm = new Vue({
	el: '#app',
  data: {
  	today: new Date()
  },

  /* Data'mızın değerini değiştirmeden sadece onu farklı şekilde ekrana yansıtmak için kullanılırlar.
  Lokal filter tanımlama*/

  filters: {
    internationalFormat (value) {
      return  `${value.getFullYear()} - ${value.getMonth() + 1} - ${value.getDate()}`
    },
    yearMonth (value, reverse=false) {
      let dateArr = value.toString().split('-').slice(0, 2)
      if (reverse) dateArr = dateArr.reverse()
      return dateArr.join('-')
    }
  },

  /* Kullanmak istediğin mixinlerin listesi yazılır. */
  mixins: [dimensionMixin],

  methods: {
    getWindowHeight() {
      return 'Bu method override edildi.'
    }
  }
})

//console.log(vm.$data);  // Vm elementinin data objesine erişmek için
//console.log(vm.$el);    // Vm elementinin html içerisinde oluşturduğu dom elementi
//console.log(vm.a);      // Vm elemen

/* Mixins fonksiyonları kullanılır. Aynı ad ile fonksiyon tanımlanırsa override edilir */

//console.log(vm.getWindowHeight());
//console.log(vm.getWindowWidth());

/* let, const, var için döküman https://medium.com/@busramemis/js-var-const-ve-let-ce26bc9818f7 */