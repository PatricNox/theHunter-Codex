<template>
  <div class="text-left">
    <div>
      <p>
        class:
        <span class="text-accent-orangeSemi">{{ animal.class }}</span>
      </p>
    </div>
    <div>
      <p>
        max difficulty:
        <span class="text-accent-orangeSemi">{{ animal.maxDifficulty }}</span>
      </p>
    </div>
    <div>
      <p>
        max weight:
        <span class="text-accent-orangeSemi">{{ animal.maxWeight }}</span>
      </p>
    </div>
    <div>
      <p>
        trophy type:
        <span class="text-accent-orangeSemi">{{ animal.trophy }}</span>
      </p>
    </div>
    <div>
      <p>
        rating:
        <span class="text-accent-orangeSemi">{{
          calculateRating(animal.ratings)
        }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Animal } from "@/types/application";

@Component({
  components: {},
})
export default class AnimalTrophyBox extends Vue {
  @Prop({ required: true }) animal!: Animal;

  calculateRating(ratings: Animal["ratings"]): string {
    return `B: ${ratings.bronze} | S: ${ratings.silver} | G: ${ratings.gold} | D: ${ratings.diamond}`;
  }
}
</script>
