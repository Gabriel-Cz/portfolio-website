<template>
  <div>
    <svg class="Sphere" width="50%" height="50%" viewBox="0 0 258 258" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <circle cx="129" cy="125" r="125" fill="#EFEFEF"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="258" height="258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
      </defs>
    </svg>
  </div>
</template>

<style>

.Sphere{
  opacity: 0.25;
  z-index: 0;
  position: absolute;
  top: 60px;
  right: 16px;
  animation: fadeIn 10s infinite alternate;
  animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.25
  }
  100% {
    opacity: 0.25;
  }
}

</style>

