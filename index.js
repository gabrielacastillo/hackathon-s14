Vue.component("listar", {
    data: function () {
      return {
          videos: this.videos2
      };
    },
    props: {
        videos2: Array,
    },
    template: `
        <div>
            <p class="title">Lista de videos</p>
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
        </div>
      `,
  });

  Vue.component("agregar", {
    data: function () {
      return {
          video: {}
      };
    },
    props: {
        videos2: Array,
    },
    template: `
        <div>
            <h4 class="title">Agregar Video</h4>
            <hr>
            <div class="inputs">
                <input type="text" placeholder="Titulo" v-model="video.titulo">
                <input type="text" placeholder="url-video" v-model="video.imagen">
            </div>
            <textarea cols="30" rows="10" placeholder="descripcion" v-model="video.descripcion"></textarea>
            <div class="buttons">
                <button @click="$emit('value', video)">Agregar</button>
                <button>Cancelar</button>
            </div>
        </div>
      `,
  });

const app = new Vue({
    el: "#app",
    data: {
        currentPage: "listar",
        videos: []
    },
    created () {
        this.fetchData();
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
        agregar: function() {
            console.log("aa");
            this.currentPage = "agregar";
        },
        addVideo(value) {
            console.log("value", value);
            value.visualizaciones = 23;
            this.videos.push(value);
            this.currentPage = "listar";
        },
    },
});