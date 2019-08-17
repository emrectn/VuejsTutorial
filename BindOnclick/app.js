new Vue({
    el: '#bahsisci',
    data: {
        hesap: 0,
        hesapyuzdesi: [0, 25, 50, 75],
        secilen: '',
        sonuc: '',
    },
    methods: {
        bahsisHesapla (event) {
            if (this.secilen === 0 || this.hesap === 0) {
                this.sonuc = null;
                return
            }
            this.sonuc = this.hesap * this.secilen / 100;
        }
    }    
});

new Vue({
    el: '#hesapmakinesi',
    data: {
        num1: '',
        num2: '',
        sonuc: '',
        islemler: ['+', '-', '*', '/'],
        secilenIslem: '+',
    },

    methods: {
        onChange (event) {
            console.log("Change");
            switch (this.secilenIslem) {
                case "+":
                    this.sonuc = this.num1 + this.num2;
                    break;
                case "-":
                    this.sonuc = this.num1 - this.num2;
                    break;
                case "*":
                    this.sonuc = this.num1 * this.num2;
                    break;
                case "/":
                    (this.sonuc = this.num1 / this.num2).toFixed(2);
                    break;
                default:
                    console.log("Böyle bir işlem yok");
            }
        }
    }
});

new Vue({
    el: '#app',
    data: {
        html: '<a href="https://www.emrecetin.net">Emrecetin.net</a>',
        liste: ['Emre', 'Ozlem', 'Cetin','Cetin'],
        tmp: 'Yukarı birşeyler yaz bakalım',
        activeClass: 'is-active',
        alicaklarim: [],
        isActive: true,
        sayac: 0,
        text: '',
        divContainer: {
            text1: 'Burada bir text1 var'
        }
    },
    
    methods: {
        rastgeleListe () {
            this.liste = this.liste.sort(() => Math.random() - 0.5)
        },

        onClick (event) {
            console.log(event);
            this.sayac += 1;
        },

        addNewPropertie (event) {
            Vue.set(this.divContainer, 'text2', 'Yeni bir text2 eklendi.');
        },

        changeText (event) {
            this.tmp = "Baska bir değer";
            console.log(this.$el.textContent);
            this.$nextTick(() => {
                console.log(this.$el.textContent);
            })
        }
    },

    computed: {
        classDecider: () => {
            return 'green-color is-bold'
        }
    },

});
