<template>
  <button
    :class="buttonStyle"
    class="py-1 px-2 uppercase font-bold rounded-xl focus:outline-none focus:shadow-outline"
    :disabled="disabled"
    @click="handleClick"
  >
    <LoadingSymbol v-if="loading" />
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { Variant } from "@/types/utils";
import BaseVariantComponent from "@/components/common/BaseVariantComponent.vue";
import LoadingSymbol from "@/components/common/LoadingSymbol.vue";

@Component({
  components: { LoadingSymbol },
})
export default class Button extends BaseVariantComponent {
  @Prop({ default: false }) loading!: boolean;

  variantStyles: Record<Variant, string> = {
    default: `bg-accent-blue text-white`,
    disabled: `bg-base-blackLight text-base-blackSemi border border-blackSemi cursor-not-allowed`,
    success: `bg-accent-green text-white`,
    warning: `bg-accent-yellow text-base-black`,
    danger: `bg-accent-pink text-white`,
    none: ``,
  };

  get buttonStyle() {
    return this.loading || this.disabled
      ? this.variantStyle
      : `${this.variantStyle} lift`;
  }

  handleClick(event: Event) {
    if (!this.loading) {
      this.$emit("click", event);
    }
  }
}
</script>
