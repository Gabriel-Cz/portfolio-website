<template>
    <div class="container">
      <div class="resumeWrapper">
        <div class="div1">
          <div class="header">Resume</div>
             <div class="content">
              {{ content }} <NuxtLink class="nuxt-link" to="/techStack">Stack.</NuxtLink> 
             </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    content: "Hi, ìm Gabriel. I develop with diverses libraries and frameworks in JavaScript. I design as well, mainly focusing me in UX, but the UI aesthetics gets me too. I haven't used any templates in my projects yet, i like more the open creativity that give you designing by your own making sketches and mockups and with the help that give you some frameworks with their Designs Systems like Vuetify with Material Design, but sometimes i built my own Design Systems, and i implemented with neither SCSS nor Tailwind. I go full responsive and adaptive, i think that mobile user friendly approach is quite important it dont worth it if you can see beauty in a big window but you will be blinded in a small screen by the fault of simple details. I do almost all my design job in Figma and the real implementation with Vue.js or React.. I love the power of state management libraries like Vuex or Redux that let me be more focused and organized with the entire state of my applications and actually be less verbose with my template and sometimes more hacky lettting me manipulate several visual renderers to show loading states, communicating information with getters etc. For the server-side part. I use Node.js in conjunction with express to build servers and MongoDB as a database. By the moment a im only familiar developing REST APIS architecture and integrating them in my applications, regularly using Axios as http client with async callbacks. For authentication i usually go simpler and use JWT. As well i have experience with babel, deployments, PasS like heroku and vercel, debugging and system control versions (git). When i started in web development, (previously i was learning AI with python). I developed several pages mainly SPAS, but when i started to take it more seriously. My beliefs where pretty clear, i prefered to build a project with some complexity around him and be more experimental trying with new technologies and concepts, and learn because of that exposure. That to pass through a repetitive cycle developing the same boring stuff"
  }),
  /*async fetch() {
    try {
      this.$axios.get('/resume')
      .then(res => this.content = res.data.content);
    } catch (error) {
      console.log(error);
    }
  }*/
}
</script>


<style lang="scss" scoped>

@use '@/assets/_mediaMixin.scss' as mixin;

$fontHeader: 400 26px 'Libre Franklin', sans-serif;
$fontContent: 300 18px 'Libre Franklin', sans-serif;

.container {
    width: 100%;
    max-height: 100%;
    min-height: 100vh;
    color: floralwhite;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .resumeWrapper {
      @include mixin.media(xs) {
        width: 100%;
      }
      @include mixin.media(sm) {
        margin-top: 50px;
        width: 75%;
      }
      background-color: rgba($color: black, $alpha: 0.6);
      margin-top: 50px;
      width: 50%;
      border-radius: 5px;
      .div1 {
        padding: 25px;
        border: 4px double rgba($color: #CFD8DC, $alpha: 0.20);
        border-radius: 5px;
      }
      .div2 {
        padding-bottom: 25px;
        padding-right: 25px;
        border-bottom: 4px double rgba($color: #CFD8DC, $alpha: 0.25);
        border-right: 4px double rgba($color: #CFD8DC, $alpha: 0.25);
        border-radius: 5px;
      }
      .header {
        margin-top: 25px;
        font: $fontHeader;
        letter-spacing: 1px;
      }
      .content {
        @include mixin.media(xs) {
          font-size: 14px;
          margin: 50px 10px 20px 10px;      
        }
        font: $fontContent;
        margin: 50px 25px 20px 25px;
        letter-spacing: 1px;
        line-height: 25px;
        .nuxt-link {
          text-decoration: none;
          color: #26A69A;
        }
      }
    }
}

</style>