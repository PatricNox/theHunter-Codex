<template>
  <div class="flex flex-col mt-6 w-screen min-h-screen">
    <div v-if="map" class="text-center">
      <div class="">
        <h1
          class="
            text-accent-orange
            font-extrabold
            uppercase
            text-xl
            md:text-5xl
            shadow-sm
          "
        >
          {{ map.name }}
        </h1>
        <hr class="border-accent-orange border-0 border-b-2 w-4/6 mx-auto" />
      </div>
      <MapDetail :map="map" class="p-12 mt-12 pt-0 h-24" />
    </div>
    <div v-else class="w-screen text-center mt-6">
      <LoadingSymbol class="w-3/4 h-32 text-accent-orange" size="2xl" />
      <p class="mt-4">Loading map data..</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Map } from "@/types/application";
import { application } from "@/store/application";
import MapDetail from "@/components/map/MapDetail.vue";

@Component({
  components: { MapDetail },
})
export default class MapView extends Vue {
  map: Map | null = null;

  mounted() {
    const mapId = parseInt(this.$route.params.id);
    this.getMap(mapId).then((map: Map) => {
      application.loadMapData(mapId).then(() => (this.map = map));
    });
  }

  async getMap(mapId: number) {
    if (!mapId) this.$router.push("/");
    return application.maps.find((map: Map) => map.id === mapId) as Map;
  }
}
</script>
