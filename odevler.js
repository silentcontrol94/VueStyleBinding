/*  
                                    Ödev-1 
    <div id="exercise">
        <!-- 1) Interpolation yani {{}} Syntax'ını kullanarak <p> elementinin içeriğini Name ve Age verileriyle doldurun-->
         <p>VueJS Muazzam bir Framework - {{ name }} ({{ age }})</p>
         <!-- 2) Yaşınızı 5 ile çarpıp <p> içerisinde yazdırınız -->
         
         <p> {{age*5}} </p>
        
         <!-- 3) Fonksiyon çağırarak 0 ile 1 arasında bir sayı üretip <p> içerisinde yazdırınız (Math.random()) -->
         <p> {{ berke() }} </p>
        
         <!-- 4) Google üzerinden bulacağınız herhangi bir fotoğrafı <img> elementinde gösterme işlemini yapınızı. Bunu yaparken "src" attribute' una bind etmeyi unutmayınız -->
        <p v-html="picture"></p>
         <!-- 5) Name değişkeninin değerinin <input /> içine yazdığınız değer ile anlık olarak değiştirilmesini sağlayınız. ("value" attribute kullanarak) -->
         <div>
             <input type="text" v-on:input="changeName">
         </div>
    </div>
<script>
new Vue({
    el : "#exercise",
    data : {
        name : "Berke Günen ",
        age : "25",
        picture : "<img src='https://im.cnnturk.com/i/cnnturk/75/650x325/59e73a1fae7849274c5c5186.jpg'>"
    },
    methods: {
        berke() {
            return Math.random()
        },
        changeName(event) {
            this.name = event.target.value
        }
    },
})
</script>
 */
/*         Ödev-2
    
    <div id="exercise">
<!-- 1) Butona tıklanıldığında bir alert kutusu çıkartınız -->
<div>
    <button v-on:click="showAlert">Alert Göster</button>
</div>
<!-- 2) "keydown" event'ini dinleyerek value değişkeni içerisinde yazdığınız veriyi saklayın. (ipucu: event.target.value size yazdığınız değeri verebilir.) -->
<div>
    <input type="text" v-on:keydown="showValue">
    <p>{{ value1 }}</p>
</div>
<!-- 3) 2.Uygulamayı düzenleyerek eğer keydown ENTER ise yazdığınız verinin value değerine aktarılmasını sağlayın -->
<div>
    <input type="text" v-on:keydown.enter="showValueEnter">
    <p>{{ value2 }}</p>
</div>
</div>

<script>
new Vue({
el: '#exercise',
data: {
    value1: '',
    value2: ''
      },
methods: {
    showAlert: function(){
        alert();
    },
    showValue: function(event){
        this.value1 = event.target.value;
    },
    showValueEnter: function(){
        this.value2 = event.target.value;
    }
},
});
</script>*/


/*                 Dersler-1

<div id="app">
<button v-on:click="showAlert('Berke')"> Tıkla </button>
<button v-on:click="counter++">Arttır</button>
<button v-on:click="increase(5)">Arttır</button>
<p>Tıklama sayısı şu anda {{ counter }} </p>
<p style="width: 500px; height:500px; background-color: aqua;" v-on:mousemove="updateMove(6,$event)"> Şuan ki koordinatlar : {{ x }} , {{ y }} 
<span v-on:mousemove.stop>Gizli Bölme</span>
</p>
<input type="text" v-on:keyup.enter="alert2">
</div>
<script>
new Vue({
el : "#app",
data: {
counter : 0,
x : 0,
y : 0
},
methods: {
showAlert: function(name) {
    alert(name);
},
increase : function(x) {
    this.counter += x;
},
updateMove : function(x,event){
    this.counter += x;
    this.x= event.clientX;
    this.y= event.clientY;
    if (this.counter > 500){
        this.increase(500)
    };
},
alert2 : function(event){
    alert(event.target.value)
}
},
})
</script> */


/*              ÖDEV-3 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="Vue.css">
</head>
<body>
    <div id="exercise">
        <!-- 1) Efekti Butona basarak başlatın. Efekt "highlight" ve/veya "shrink" class'ları arasında değişmelidir. Bu değişim her bir interval döngüsünde olmalıdır. ("effect" id' li div'e o anki aktif olan class eklenecektir.) -->
        <div>
          <button @click="startEffect">Efekti Başlat!</button>
          <div  :class="setClass" id="effect"></div>
        </div>
        <!-- 2) Birkaç tane CSS Class'ı üreterek bu Class'ları Array Syntax'ı ile aşağıdaki <div>' e ekleyiniz -->
            <div :class=" [box , bgColor , text ] ">Henüz bir class'ım yok :(</div>
        <!-- 3) Örnek birkaç tane Class üreterek (Ya da ürettiklerinizi kullanarak) <input> içerisine Class adı girerek hemen alttaki <div> elementine bu yazılan Class'ı eklemeyi yapınız. -->
            <div>
              <input type="text" v-model="bgColor1">
              <div :class="[ bgColor1 , text ]">Berke</div>
            </div>
        <!-- 4) Kullanıcının Class isimlerini girebileceği iki adet <input> elementimiz var. Bunları kullanarak hemen alttaki <div> elementinin Class'larini attached etmesini sağlayınız  -->
            <div>
              <input type="text" v-model="bgColor2">
              <input type="text" v-model="height">
              <div :class="[ bgColor2 , height]">Berke</div>
            </div>
        <!-- 5) 3.Uygulamayı tekrarlayın. Fakat bu sefer Class Adı yerine Denk gelecek Style Kodlarını ekleyiniz.  -->
            <div>
              <input type="text" v-model="yükseklik">
              <input type="text" v-model="genislik">
              <div :style="[ { backgroundColor: bgColor} , {height: yükseklik + 'px'} , { width : genislik + 'px'}]">Yükselik</div>
            </div>
            <hr>
        <!-- 6) setInterval ve Style Binding kullanarak Basit bir progress bar üretin. Progress bar' ın çalışmasını buton'a basarak başlatın. -->
            <div>
              <button @click="startProgress">Progress İşlemini Başlat!</button>
              <div class="progress" :style="{ width : progressBar + 'px' }  " ></div>
            </div>
    </div>
<script>
    new Vue({
  el: '#exercise',
  data: {
    attachedClass : true,
    box : "box",
    bgColor : "blue",
    text : "text",
    bgColor1 : "red",
    height : "h1",
    bgColor2 : "orange",
    yükseklik : 100,
    genislik : 100,
    progressBar : 0
  },
  methods: {
    startEffect: function() {
        var vm = this;
        setInterval(function(){ 
            vm.attachedClass = !vm.attachedClass
        }, 1000);
    },
    startProgress : function(){
        var vm = this ;
        setInterval(function(){
            vm.progressBar += 1
        },100);
    }
  },
});
</script>

</body>
</html>
 */
/*                      Koşullar dersi
<body>
<div id="app">
  <button @click="counter+= 5">Arttır</button>
  <p> {{ counter }} </p>
  <p v-if="counter > 50">Tebrikler !! Oyunu kazandın.</p>
  <p v-else>Hala oyunu bitiremedin pal!</p>
  <p v-if="counter < 10">Counter 10'dan küçük.</p>
  <p v-else-if="counter > 10 ">Counter 10'dan büyük.</p>
  <p v-else>Counter 10'a eşit</p>
  <hr>
  <button @click=" showparagh = !showparagh ">Göster | Gizle</button>
  <p v-show="showparagh">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere 
    bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, 
    aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren
    Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
  </p>
  <hr>
  <ul>
    <li v-for="(berke, i) in products"> {{ berke }} // {{ i }} </li>
  </ul>
  <hr>
  <template v-for="(berke, i) in products">
    <h2> {{ berke }} </h2>
    <p> {{ i }} </p>
  </template>
</div>
<script>
new Vue({
el : "#app",
data :{
  show : true,
  counter : 0,
  showparagh : true,
  products : [ "Monitör" , "Klavye" , "Mouse" , "Kasa" ],
  persons : [
            { name : "Berke" , email : "berke94gunen@gmail.com"},
            { name : "Berkan" , email : "berkan94gunen@gmail.com"},
            { name : "Mert" , email : "mert94gunen@gmail.com"},
            { name : "Şeyda" , email : "şeyda94gunen@gmail.com"}
  ]
},
})
</script>

</body> */