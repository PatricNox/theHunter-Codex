<template>
  <div class="mt-12 h-full items-center">
    <div class="flex justify-between">
      <div class="w-1/3 pr-8">
        <MapDetailBox title="animals">
          <div
            v-for="animal in animals"
            :key="animal.id"
            @click="selectAnimal(animal)"
          >
            <p
              class="
                uppercase
                text-accent-orange
                font-extrabold
                cursor-pointer
                hover:bg-accent-orange
                  hover:bg-opacity-50
              "
              :class="{
                'bg-accent-orange bg-opacity-50': isSelectedAnimal(animal),
              }"
            >
              {{ animal.name }}
            </p>
          </div>
        </MapDetailBox>
        <MapDetailBox title="trophy info" class="mt-16 text-accent-orange">
          <AnimalTrophyBox v-if="animalSelected" :animal="animalSelected" />
        </MapDetailBox>
      </div>
      <div class="w-1/3 ml-4">
        <MapDetailBox title="weapons">
          <div v-if="animalSelected">
            <div
              v-for="weapon in animalSelected.weapons"
              :key="weapon.id"
              @click="selectWeapon(weapon)"
            >
              <p
                class="
                  uppercase
                  text-accent-orange
                  font-extrabold
                  cursor-pointer
                  hover:bg-accent-orange
                  hover:bg-opacity-50
                "
                :class="{
                  'bg-accent-orange bg-opacity-50': isSelectedWeapon(weapon),
                }"
              >
                {{ weapon.name }}
              </p>
            </div>
          </div>
        </MapDetailBox>
      </div>
      <div class="w-1/3 pl-8 ml-4">
        <MapDetailBox title="ammunition">
          <div v-if="weaponSelected">
            <div v-for="ammo in weaponSelected.ammunition" :key="ammo.id">
              <p
                class="
                  uppercase
                  text-accent-orange
                  font-extrabold
                  hover:bg-accent-orange
                "
              >
                {{ ammo.name }}
              </p>
            </div>
          </div>
        </MapDetailBox>
        <MapDetailBox title="callers and scents" class="mt-16">
          <div v-if="animalSelected">
            <div v-for="scent in animalSelected.scents" :key="scent.id">
              <p
                class="
                  uppercase
                  text-accent-orange
                  font-extrabold
                  hover:bg-accent-orange
                "
              >
                {{ scent.name }}
              </p>
            </div>
          </div>
        </MapDetailBox>
      </div>
    </div>

    <div
      class="
        uppercase
        text-accent-red
        mt-4
        pb-4
        text-center
        font-extrabold
        cursor-pointer
        shadow
        text-2xl
        hover:text-accent-redSemi
      "
      @click="$router.push('/')"
    >
      change reserve
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Map, Animal, Weapon } from "@/types/application";
import { application } from "@/store/application";
import AnimalTrophyBox from "@/components/animal/AnimalTrophyBox.vue";
import MapDetailBox from "@/components/map/MapDetailBox.vue";

@Component({
  components: { AnimalTrophyBox, MapDetailBox },
})
export default class MapDetail extends Vue {
  @Prop({ required: true }) map!: Map;
  animalSelected: Animal | null = null;
  weaponSelected: Weapon | null = null;

  get animals(): Animal[] {
    return application.animals;
  }

  mounted() {
    if (this.$route.query.animal)
      this.findAnimal(this.$route.query.animal as string);
    if (this.$route.query.weapon)
      this.findWeapon(this.$route.query.weapon as string);
  }

  selectAnimal(animal: Animal) {
    this.animalSelected = animal;
    this.$router
      .push({
        path: this.$route.fullPath,
        query: { animal: animal.id.toString() },
      })
      .catch(() => {
        return "";
      });
  }

  selectWeapon(weapon: Weapon) {
    this.weaponSelected = weapon;
    this.$router
      .push({
        path: this.$route.fullPath,
        query: { weapon: weapon.id.toString() },
      })
      .catch(() => {
        return "";
      });
  }

  isSelectedAnimal(animal: Animal): boolean {
    if (!this.$route.query.animal) return false;

    const animalQuery = this.$route.query.animal as string;
    if (parseInt(animalQuery) !== animal.id) return false;

    return true;
  }

  isSelectedWeapon(weapon: Weapon): boolean {
    if (!this.$route.query.weapon) return false;

    const weaponQuery = this.$route.query.weapon as string;
    if (parseInt(weaponQuery) !== weapon.id) return false;

    return true;
  }

  findAnimal(id: string) {
    const animal = this.animals.find(
      (animal: Animal) => animal.id === parseInt(id),
    );
    if (animal) this.selectAnimal(animal);
  }

  findWeapon(id: string) {
    if (this.animalSelected) {
      const weapon = this.animalSelected.weapons.find(
        (weapon: Weapon) => weapon.id === parseInt(id),
      );
      if (weapon) this.selectWeapon(weapon);
    }
  }
}
</script>
