<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Variant } from "@/types/utils";

@Component
export default class BaseVariantComponent extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({
    default: Variant.default,
    validator: variant => variant in Variant,
  })
  variant!: Variant;

  variantStyles: Record<Variant, string> = {
    default: "not implemented",
    disabled: "",
    success: "",
    warning: "",
    danger: "",
    none: "",
  };

  mounted() {
    //? Not possible to make component and property abstract so we do it like this
    if (this.variantStyles.default === "not implemented") {
      throw "Component extending BaseVariantComponent must overload variantStyles-property";
    }
  }

  get variantStyle() {
    return this.disabled
      ? this.variantStyles.disabled
      : this.variantStyles[this.variant];
  }
}
</script>
