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
    content: "I started to progamming mainly focus on the AI field, that at the moment, i found it pretty atractive. Then, i decide to explore some other software fields like web development. My first steps in web development were HTML, CSS and JS because the process was actually pretty stimulant i decided to take it more seriously . Next i move on to learn one UI framework, that was Vue.js. I learnt vue developing several SPAS while i design the sketches and mockups in Figma. I realize that i do not only want to focus on the client-side so i started to learn Backend and in the process, i adopt other technologies like Deployments, the develop of REST API's in conjuction with api tools testing like postman, NoSql Databases like MongoDB, some cloud knowledge, authentication with JWT and understanding of some web middlewares policies like CORS etc.. I am highly interested in UI and UX design as well. My first aproach to this field were in the 'Interaction Design' especialization on coursera from University of California San Diego and by experimentation with my own's designs from heuristic exposure to train more my Designer Eye. My beliefs from my projects are quite simple and clean. Quality over quantity. I prefered to develop some complex big projects and expose me to learn on because of that. That have a ton of repetitive stuff. You can see the stack with i currently work in",
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