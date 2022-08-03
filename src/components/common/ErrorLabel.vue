<template>
  <div class="text-accent-pink px-2">{{ error }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ErrorLabel extends Vue {
  @Prop(String) readonly error!: string;
}
</script>
