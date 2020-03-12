<template>
  <svg class="corner" viewBox="0 0 200 200">
    <polygon points="200,0 200,200 0,200" style="fill:#fd6104" />
    <line v-if="!this.up" x1="120" y1="140" x2="150" y2="170" style="stroke:#fff;stroke-width:8" stroke-linecap="round" />
    <line v-if="!this.up" x1="180" y1="140" x2="150" y2="170" style="stroke:#fff;stroke-width:8" stroke-linecap="round" />
    <line v-if="this.up" x1="120" y1="170" x2="150" y2="140" style="stroke:#fff;stroke-width:8" stroke-linecap="round" />
    <line v-if="this.up" x1="180" y1="170" x2="150" y2="140" style="stroke:#fff;stroke-width:8" stroke-linecap="round" />
  </svg>
</template>

<style>
svg.corner {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  width: 200px;
}

@media only screen and (max-width: 768px) {
  svg.corner {
    width: 150px;
  }
}
</style>

<script>
export default {
  props: {
    up: Boolean,
  }
}
</script>