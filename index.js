Vue.component("item-card", {
    data: function () {
      return {
          videos: this.videos2
      };
    },
    props: {
        videos2: Array,
    },
    template: `
        <div class="container">
            <div class="item" v-for="v in videos2">
                <div class="item__header">
                    <img v-bind:src="v.imagen" alt="">
                </div>
                <div class="item__content">
                    <h5>{{v.titulo}}</h5>
                    <span>{{v.visualizaciones}} visualizaciones</span>
                    <p>{{v.descripcion}}</p>
                    <button>Ver Detalle</button>
                </div>
            </div>
        </div>
      `,
  });

const app = new Vue({
    el: "#app",
    data: {
        videos: []
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData() {
            fetch("http://localhost:3000/videos")
            .then(res => {
                console.log(res);
                return res.json();
            }).then(data => {
                console.log(data);
                this.videos = data;    
            });
        },
    },
});