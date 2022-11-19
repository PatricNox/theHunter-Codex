<template>
  <div class="mx-2 p-12">
    <div class="flex flex-col justify-center">
      <div class="mx-auto items-center">
        <h1
          class="
            ml-20
            text-4xl
            lg:text-8xl
            text-bolder
            uppercase
            text-accent-orange
            font-extrabold
          "
        >
          The Hunter Codex
        </h1>
        <hr
          class="
            bg-accent-orange
            h-2
            ml-20
            border-0 border-b
            text-accent-orange
          "
        />
      </div>
      <div class="flex flex-wrap mx-auto mt-12 w-3/4">
        <div
          v-for="map in maps"
          :key="map.id"
          class="
            w-1/6
            cursor-pointer
            object-contain
            mt-4
            opacity-50
            hover:opacity-100
          "
          @click="selectMap(map.id)"
        >
          <div class="abs-centered">
            <img :src="getMedia(map.mediaUrl)" :alt="map.name" width="200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { application } from "@/store/application";
import { Map } from "@/types/application";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Index extends Vue {
  get maps(): Map[] {
    return application.maps;
  }

  getMedia(mediaUrl: string) {
    return require(`@/assets/images/${mediaUrl}`);
  }

  selectMap(mapId: number): void {
    this.$router.push("/map/" + mapId);
  }
}
</script>
<style scoped>
.abs-centered {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
