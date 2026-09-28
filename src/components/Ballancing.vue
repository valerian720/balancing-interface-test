<template>
  <div class="container">
    <!-- Заголовок -->
    <header class="py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Баллансировка</h1>
      <p class="lead mb-0">
        Выберите в левой колонке пункты и их количество, чтобы в правой колонке
        появился итоговый баланс
      </p>
    </header>

    <div class="row g-4 m-3">
      <!-- Левая колонка: элементы -->
      <div class="col-12 col-lg-6">
        <div class="card h-100 shadow-sm">
          <div class="card-header">
            <h2 class="h4 mb-0">Элементы</h2>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mb-0">
              <li
                v-for="(curArmor, index) in armor"
                :key="index"
                class="pb-3 mb-3 border-bottom"
              >
                <dl class="row mb-2">
                  <template
                    v-for="(data, dataName) in curArmor"
                    :key="dataName"
                  >
                    <dt class="col-6 fw-normal text-muted">{{ dataName }}</dt>
                    <dd class="col-6 text-end mb-0">{{ data }}</dd>
                  </template>
                </dl>

                <div
                  class="btn-group"
                  role="group"
                  :aria-label="`Изменить количество: ${curArmor.name}`"
                >
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    aria-label="Уменьшить"
                    @click="
                      curArmor.DecreaseCount();
                      recalculateBallanse();
                    "
                  >
                    −
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    aria-label="Увеличить"
                    @click="
                      curArmor.IncreaseCount();
                      recalculateBallanse();
                    "
                  >
                    +
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Правая колонка -->
      <div class="col-12 col-lg-6 d-flex flex-column gap-4">
        <!-- Итоговый баланс -->
        <div class="card shadow-sm">
          <div class="card-header">
            <h2 class="h4 mb-0">Итоговый баланс</h2>
          </div>
          <div class="card-body">
            <dl class="row mb-3">
              <template
                v-for="(data, index) in displayedStatistics"
                :key="index"
              >
                <dt class="col-6 fw-normal text-muted">{{ index }}</dt>
                <dd class="col-6 text-end mb-1">{{ data.toFixed(2) }}</dd>
              </template>
            </dl>

            <div
              class="progress"
              role="progressbar"
              aria-label="Распределение характеристик"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                :style="{ width: displayedStatistics.healthBoost + '%' }"
                :aria-valuenow="displayedStatistics.healthBoost"
                :aria-valuetext="`Здоровье: ${displayedStatistics.healthBoost.toFixed(
                  1
                )}%`"
              ></div>
              <div
                class="progress-bar bg-success"
                :style="{ width: displayedStatistics.damageBoost + '%' }"
                :aria-valuenow="displayedStatistics.damageBoost"
                :aria-valuetext="`Урон: ${displayedStatistics.damageBoost.toFixed(
                  1
                )}%`"
              ></div>
              <div
                class="progress-bar bg-info"
                :style="{ width: displayedStatistics.speedBoost + '%' }"
                :aria-valuenow="displayedStatistics.speedBoost"
                :aria-valuetext="`Скорость: ${displayedStatistics.speedBoost.toFixed(
                  1
                )}%`"
              ></div>
            </div>

            <!-- Легенда прогресс-бара -->
            <ul class="list-inline small text-muted mt-2 mb-0">
              <li class="list-inline-item me-3">
                <span class="badge bg-danger">&nbsp;</span> Здоровье
              </li>
              <li class="list-inline-item me-3">
                <span class="badge bg-success">&nbsp;</span> Урон
              </li>
              <li class="list-inline-item">
                <span class="badge bg-info">&nbsp;</span> Скорость
              </li>
            </ul>
          </div>
        </div>

        <!-- Информация -->
        <div class="card shadow-sm">
          <div class="card-header">
            <h2 class="h4 mb-0">Информация</h2>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mb-0">
              <li
                v-for="(curArmor, index) in armor"
                :key="index"
                class="d-flex justify-content-between align-items-center py-2 border-bottom"
              >
                <span>{{ curArmor.name }}</span>
                <span class="badge bg-secondary">
                  {{ curArmor.amountSelected }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Изменение модулей -->
    <div class="m-3">
      <button
        class="btn btn-warning"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#changeModules"
        aria-expanded="false"
        aria-controls="changeModules"
      >
        Изменить Модули
      </button>

      <div class="collapse mt-3" id="changeModules">
        <div class="row g-3">
          <div
            v-for="(curArmor, index) in armor"
            :key="index"
            class="col-12 col-md-6 col-lg-4"
          >
            <ObjectCreatorVue
              :constructable="curArmor"
              :name="`модуля ${curArmor.name}`"
              @obj-changed="recalculateBallanse()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ObjectCreatorVue from "@/components/ObjectCreator.vue";

// i need a class to store stats
class Armor {
  name: string;
  healthBoost: number;
  damageBoost: number;
  speedBoost: number;

  amountSelected: number;

  constructor(
    name: string,
    healthBoost: number,
    damageBoost: number,
    speedBoost: number
  ) {
    this.amountSelected = 0;
    this.name = name;
    //
    [this.healthBoost, this.damageBoost, this.speedBoost] = [
      healthBoost,
      damageBoost,
      speedBoost,
    ];
  }

  IncreaseCount(): void {
    this.amountSelected++;
  }

  DecreaseCount(): void {
    if (this.amountSelected > 0) this.amountSelected--;
  }
}

// i need target class that will calculate target stats
class Stats {
  totalPoints = 100;

  calc(armorList: Array<Armor>): {
    healthBoost: number;
    damageBoost: number;
    speedBoost: number;
  } {
    let tmp = { healthBoost: 1, damageBoost: 1, speedBoost: 1 };

    for (let armor of armorList) {
      tmp.healthBoost += armor.healthBoost * armor.amountSelected;
      tmp.damageBoost += armor.damageBoost * armor.amountSelected;
      tmp.speedBoost += armor.speedBoost * armor.amountSelected;
    }

    let sum = tmp.damageBoost + tmp.healthBoost + tmp.speedBoost;

    tmp.healthBoost = (tmp.healthBoost / sum) * this.totalPoints;
    tmp.damageBoost = (tmp.damageBoost / sum) * this.totalPoints;
    tmp.speedBoost = (tmp.speedBoost / sum) * this.totalPoints;

    return tmp;
  }
}

//
@Options({
  props: {
    msg: String,
  },
  components: {
    ObjectCreatorVue,
  },
})
//
export default class HelloWorld extends Vue {
  // state
  armor!: Array<Armor>;
  statistics!: Stats;

  displayedStatistics = {
    healthBoost: 100 / 3,
    damageBoost: 100 / 3,
    speedBoost: 100 / 3,
  };

  // state (props)
  msg!: string;

  // functions
  data(): { armor: Array<Armor>; statistics: Stats } {
    return {
      armor: [
        new Armor("alfa", 1, 2, 1),
        new Armor("beta", 0, 0, 2),
        new Armor("gamma", 0, 2, 0),
        new Armor("delta", 3, 0, 0),
      ],
      statistics: new Stats(),
    };
  }

  recalculateBallanse(): void {
    this.displayedStatistics = this.statistics.calc(this.armor);
  }
}
</script>

<style scoped lang="less"></style>
