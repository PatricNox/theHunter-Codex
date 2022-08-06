<template>
  <div class="mx-2 p-12">
    <div v-if="map">
      <div class="text-center">
        <h1
          class="
            text-accent-orange
            font-extrabold
            uppercase
            ml-20
            text-xl
            md:text-5xl
            shadow-sm
          "
        >
          {{ map.name }}
        </h1>
        <hr class="border-accent-orange border-0 border-b-2 w-4/6 mx-auto" />
      </div>
      <MapDetail :map="map" />
    </div>
    <div v-else>
      <LoadingSymbol
        class="w-3/4 h-32 left-0 right-0 text-accent-orange ml-64"
        size="2xl"
      />
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
