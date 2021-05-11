<template>
    <div class="container">
      <div class="resumeWrapper">
        <div class="header">Resume</div>
        <div class="content">
          {{ content }} 
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    content: "",
  }),
  async fetch() {
    try {
      this.$axios.get('/resume')
      .then(res => content = res.data);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>


<style lang="scss" scoped>

$fontHeader: 300 26px 'Raleway', sans-serif;
$fontContent: 400 18px 'Raleway', sans-serif;

.container {
    width: 100%;
    border: solid;
    height: 100%;
    color: floralwhite;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .resumeWrapper {
      width: 50%;
      .header {
        font: $fontHeader;
        margin-top: 50px;
        letter-spacing: 1px;
      }
      .content {
        font: $fontContent;
        margin-top: 50px;
        letter-spacing: 1px;
      }
    }
}

</style>