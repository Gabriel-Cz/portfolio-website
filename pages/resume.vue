<template>
    <div class="container">
        <div class="resumeWrapper">
            <div class="infoWrapper">
              <div class="header">Resume</div>
              <div class="subheader">
                Lorem ipsum dolor asimet lorem, asimet ipsum, dolor asimet.
                Lorem ipsum dolor asimet lorem, asimet ipsum, dolor asimet.
                Lorem ipsum dolor asimet lorem, asimet ipsum, dolor asimet.
                Lorem ipsum dolor asimet lorem, asimet ipsum, dolor asimet.
              </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

$fontHeader: 300 26px 'Quicksand', sans-serif;
$fontSubheader: 400 18px 'Quicksand', sans-serif;

.container {
    width: 100%;
    height: 100%;
    color: floralwhite;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
    .resumeWrapper {
      position: relative;
      width: 50%;
      padding-top: (500 / 500) * 50;
      .header {
        width: 100%;
        padding: 30px 10px;
        font: $fontHeader;
    }
      .subheader {
        width: 100%;
        padding: 30px 10px;
        font: $fontSubheader;
    }
    .responsiveFrame {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    }
}
</style>