<template>
  <font-awesome-icon :icon="['fas', 'spinner']" :size="size" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class LoadingSymbol extends Vue {
  @Prop({ default: "lg" }) size: string | undefined;
}
</script>

<style scoped>
/* Define an animation behavior */
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

/* This is the class name given by the Font Awesome component when icon contains 'spinner' */
.fa-spinner {
  /* Apply 'spinner' keyframes looping once every second (1s)  */
  animation: spinner 1.25s linear infinite;
}
</style>
