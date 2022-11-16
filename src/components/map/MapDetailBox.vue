<template>
  <div class="">
    <h2
      class="
        uppercase
        text-accent-orange
        font-extrabold
        text-4xl
        shadow
        text-center
      "
    >
      {{ title }}
    </h2>
    <div class="p-4 bgTransparent">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MapDetailBox extends Vue {
  @Prop({ required: true }) title!: string;
}
</script>

<style scoped>
.bgTransparent {
  background: rgba(0, 0, 0, 0.438);
}
</style>
