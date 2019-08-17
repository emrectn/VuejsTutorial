new Vue({
	el: '#app',
  data: {
  	filterTerm: '',
    takimFormasiURL: '',
  	columns: ['Takim', 'Puan', 'Galibiyet', 'Beraberlik', 'Malubiyet'],
  	puanListesi: [
      { takim: 'Galatasaray', p: 75, g: 24, b: 3, m: 7},
      { takim: 'Basaksehir', p: 72, g: 22, m: 6, b: 6},        
      { takim: 'Fenerbahce', p: 72, g: 21, m: 9, b: 4},
      { takim: 'Besiktas', p: 71, g: 21, m: 8, b: 5},
      { takim: 'Trabzonspor', p: 55, g: 15, m: 10, b: 9},
      { takim: 'Göztepe', p: 49, g: 13, m: 10, b: 11},
      { takim: 'Sivasspor', p: 49, g: 14, m: 7, b: 13},
      { takim: 'Kasimpasa', p: 46, g: 13, m: 7, b: 14},
      { takim: 'Malatyaspor', p: 43, g: 11, m: 10, b: 13},
      { takim: 'Akhisarspor', p: 42, g: 11, m: 9, b: 14},
      { takim: 'Alanyaspor', p: 40, g: 11, m: 7, b: 16},
      { takim: 'Bursaspor', p: 39, g: 11, m: 6, b: 17},
      { takim: 'Antalyaspor', p: 38, g: 10, m: 8, b: 16},
      { takim: 'Konyaspor', p: 36, g: 9, m: 9, b: 16},
      { takim: 'Genclerbirligi', p: 33, g: 8, m: 9, b: 17},
      { takim: 'Osmanlispor', p: 33, g: 8, m: 9, b: 17},
      { takim: 'Karabükspor', p: 3, g: 3, m: 28, b: 12}
		]
  },
  watch: {
  	filterTerm (newVal, oldVal) {
    	this.takimFormasiURL = '';
      console.log(newVal, oldVal);
    	let index = this.puanListesi.findIndex(eleman => eleman.takim.toLowerCase().startsWith(newVal.toLowerCase()));
      if (index < 0 || newVal.length < 4) return; 
      axios.get(`https://jsonplaceholder.typicode.com/photos/${index + 1}`)
        .then(res => {
        	this.takimFormasiURL = res.data.url;
        });
    }
  },
  methods: {
  	puanaGoreSirala () {
    	this.listeyiSirala("p");
    },
  	galibiyeteGoreSirala () {
    	this.listeyiSirala("g");
    },
  	beraberligeGoreSirala () {
    	this.listeyiSirala("b");
    },
  	yenilgiyeGoreSirala () {
    	this.listeyiSirala("m");
    },
    listeyiSirala (key) {
    	 this.puanListesi.sort((a,b) => {
      		if (a[key] < b[key]) return 1
          if (a[key] > b[key]) return -1
					if (a.takim < b.takim) return -1
					if (a.takim > b.takim) return 1          
      	}
      );
    } 
  },
  computed: {
  	filtrelenmisSonuclar () {
    	let filter = new RegExp(this.filterTerm, 'i')
      return this.puanListesi.filter(el => el.takim.match(filter))
    }
  }
});