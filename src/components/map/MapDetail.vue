<template>
  <div>
    <div class="flex flex-row">
      <div class="flex-row w-1/3 pr-8">
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
          <span v-else class="text-white">no animal selected</span>
        </MapDetailBox>
      </div>
      <div class="flex-row w-1/3 pl-4 ">
        <MapDetailBox title="weapons" class="">
          <span v-if="animalSelected" class="">
            <span
              v-for="weapon in weaponsForAnimal"
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
            </span>
          </span>
          <span v-else>no animal selected</span>
        </MapDetailBox>
      </div>
      <div class="flex-row w-1/3 pl-8 ml-4">
        <MapDetailBox title="ammunition">
          <span v-if="weaponSelected">
            <div v-for="ammo in ammunitionForWeapon" :key="ammo.id">
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
          </span>
          <span v-else>no weapon selected</span>
        </MapDetailBox>
        <MapDetailBox title="callers and scents" class="mt-16">
          <span v-if="animalSelected">
            <div v-if="animalSelected.callers.length">
              <div v-for="caller in animalSelected.callers" :key="caller.id">
                <p
                  class="
                    uppercase
                    text-accent-orange
                    font-extrabold
                    hover:bg-accent-orange
                  "
                >
                  {{ caller.name }}
                </p>
              </div>
            </div>
            <div v-else>
              <p
                class="
                    uppercase
                    text-accent-orange
                    font-extrabold
                  "
              >
                No caller or scent exists for {{ animalSelected.name }}.
              </p>
            </div>
          </span>
          <span v-else>no animal selected</span>
        </MapDetailBox>
      </div>
    </div>

    <div class="mt-4 pb-12">
      <div
        class="
        uppercase
        text-accent-red
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Map, Animal, Weapon, Ammunition } from "@/types/application";
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
  weaponsForAnimal: Weapon[] = [];
  ammunitionForWeapon: Ammunition[] = [];

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
    this.setWeaponList(animal.weapons);
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
    this.setAmmunitionList(weapon.ammunition);
    this.$router
      .push({
        path: this.$route.fullPath,
        query: { weapon: weapon.id.toString() },
      })
      .catch(() => {
        return "";
      });
  }

  setWeaponList(weapons: Weapon[]) {
    this.weaponsForAnimal = weapons.filter(w =>
      w.classes.some(c => c === this.animalSelected?.class),
    );
  }

  setAmmunitionList(ammunition: Ammunition[]) {
    this.ammunitionForWeapon = ammunition.filter(a =>
      a.classes.some(c => c === this.animalSelected?.class),
    );
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
