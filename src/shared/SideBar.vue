<!-- <template>
  <div
    v-if="isDrawerOpen"
    class="tw-sidebar-content"
    :class="width ? 'tw-sidebar-content-sm' : ''"
    style="position: relative; z-index: 1031"
  >
    <q-drawer
      v-model="isDrawerOpen"
      @update:model-value="onClose"
      :breakpoint="2000"
      no-swipe-close
      bordered
      :side="side || 'right'"
      class="bg-white"
    >
      <q-scroll-area style="height: 100%">
        <div class="card" ref="popup">
          <div class="bg-white card-header" v-if="label">
            <div class="card-title d-flex justify-content-between mb-0">
              <h4>{{ label }}</h4>
              <span @click="onClose" class="cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  ></rect>
                </svg>
              </span>
            </div>
          </div>
          <div class="card-body pb-5" :class="!label ? 'p-0' : ''">
            <component :is="component" v-bind="props" />
          </div>
          <div
            class="card-footer fixed-bottom d-flex justify-content-end w-100 bg-light"
          >
            <q-btn
              color="transparent"
              :label="cancelButtonLabel"
              @click="onClose"
              class="btn text-body"
            />
            <q-btn
              color="primary"
              :label="ctaLabel"
              @click="onSave"
              class="btn"
            />
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Emit } from 'vue-property-decorator';

@Options({
  props: [
    'show',
    'label',
    'ctaLabel',
    'cancelButtonLabel',
    'width',
    'side',
    'component',
    'props',
  ],
})
export default class SideBar extends Vue {
  show?: boolean;
  label?: string;
  ctaLabel?: string;
  width?: boolean;
  cancelButtonLabel?: string;
  side?: string;
  component?: object;
  props?: object;

  @Emit('onClose')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose(evt: any) {}

  @Emit('onSave')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSave(evt: any) {}

  /**
   * Indicates whether the drawer is open based on the value of the 'show' prop.
   *
   * @returns {boolean} - A boolean value indicating whether the drawer is open.
   */
  get isDrawerOpen() {
    return this.show;
  }
}
</script>
 -->
