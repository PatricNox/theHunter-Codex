<template>
  <div>
    <!-- Background -->
    <div
      class="fixed bg-base-black top-0 bottom-0 right-0 left-0 opacity-75 z-20 min-h-screen overflow-hidden"
    />
    <!-- Modal container -->
    <div
      class="fixed left-0 top-0 bottom-0 right-0 z-50 flex flex-col justify-center items-center py-4"
    >
      <!-- Modal -->
      <div
        class="bg-white rounded-3xl shadow-lg flex flex-col w-11/12 xl:w-3/4 max-h-full"
        @click.stop
      >
        <!-- Header -->
        <div
          class="w-full flex justify-start bg-pattern-blue text-white rounded-t-3xl shadow relative px-4"
        >
          <!-- Title -->
          <h3 class="text-3xl uppercase tracking-wider py-4">
            <slot name="header" />
          </h3>
          <!-- Close button -->
          <div
            class="absolute top-0 right-0 bottom-0 h-full flex items-center px-4"
          >
            <Button
              v-if="closable"
              variant="none"
              class="h-10 w-10 bg-whiteTransparent flex justify-center items-center rounded-full"
              @click="closeModal"
            >
              <font-awesome-icon :icon="['fas', 'times']" size="1x" />
            </Button>
          </div>
        </div>
        <!-- Content -->
        <div class="w-full flex-1 overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class Modal extends Vue {
  @Prop({ default: true }) closable!: boolean;

  @Emit("modalClosed")
  closeModal() {
    return;
  }
}
</script>

<style scoped>
.bg-whiteTransparent {
  background-color: rgba(255, 255, 255, 0.25);
}
</style>
