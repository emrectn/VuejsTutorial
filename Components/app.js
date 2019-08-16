Vue.component('listeElemani', {
  /* props: ['resim', 'baslik', 'metin'], */
  /* Type kontorolu yapmak istenirse props tanımlama */
  props: {
    id: {
      type: Number,
      required: true,
    },
    resim: {
      type: String,
      default: 'https://placeimg.com/350/150/any/5',
    },
    baslik: {
      type: String,
    },
    metin: {
      type: String
    },
    /* Obje veya array default type kullanmak için fonksiyon tanımlanması gereklidir. */
    updateObj: {
      type: Object,
      default: function () {
        return {title: 'Yeni bir Obj Title'}
      }
    },
    updateArr: {
      type: Array,
      default: function () {
        return [1,2,3,4]
      }
    },

  },
  methods: {
    removeElement () {
      /* Parenttaki bir fonksiyonu çağırmak için emit fonksiyonu kullanılır. */
      this.$emit('remove-element', this.id)
    }
  },
	template: `<li>
      <img :src="resim" alt="">
      <div class="content">
        <h2>{{baslik}}</h2>
        <slot name="date"></slot>
        <p>{{metin}}</p>
        <button @click='changeBaslik = "Yeni Baslik"'>Basligi degistir</button>
        <button @click='removeElement'>Listeden Çıkar</button>
        <slot name="entryLink"></slot>
      </div>
    </li>`
})

new Vue({
	el: '#app',
  data: {
  	selected: 'listView'
  },
  components: {
  	'yeniEntry': {
    	template: '#yeniEntry',
      destroyed () {
      	console.log('Yeni Entry Sayfasi destroy edildi.')
      }
    },
  	'listView': {
    	template: '#anasayfa',
      data () {
      	return {
          listeElemanlari: [
            {
              id: 1,
              resim: 'https://placeimg.com/350/150/any/1',
              baslik: 'Bu benim birinci basligim',
              metin: 'Bu da benim birinci yazdigim metin'
            },
            {
              id: 2,
              resim: 'https://placeimg.com/350/150/any/2',
              baslik: 'Bu benim ikinci basligim',
              metin: 'Bu da benim ikinci yazdigim metin'
            },
            {
              id: 3,
              resim: 'https://placeimg.com/350/150/any/3',
              baslik: 'Bu benim ucuncu basligim',
              metin: 'Bu da benim ucuncu yazdigim metin'
            }
          ]
        }
      },
   		methods: {
        removeFromList (id) {
          this.listeElemanlari = this.listeElemanlari.filter(eleman => eleman.id !== id)
        }
      },
    }
  }
})
