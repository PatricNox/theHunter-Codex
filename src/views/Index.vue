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
      <div class="flex flex-wrap mx-auto mt-12 lg:w-1/2">
        <div
          v-for="map in maps"
          :key="map.id"
          class="
            w-1/6
            transition-all
            cursor-pointer
            hover:opacity-90
            object-contain
            mt-4
          "
          @click="selectMap(map.id)"
        >
          <img :src="getMedia(map.mediaUrl)" class="bg-contain" />
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
