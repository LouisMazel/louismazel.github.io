<template>
  <div
    id="VueCtkDateTimePickerView">
    <div
      class="tile">
      <h1 class="mt-0 text-white fs-28 fw-300 text-center mb-2">Vue Ctk Date Time Picker</h1>
      <h2 class="mt-0 text-white fs-22 fw-300 text-center">
        DateTimePicker, DatePicker, TimePicker, RangeDatePicker
      </h2>
    </div>
    <div class="flex justify-content-center mb-3">
      <el-button
        type="primary"
        @click="darkMode = !darkMode">
        {{ darkMode ? 'Disable' : 'Enable' }} Dark Mode
      </el-button>
    </div>
    <div class="container">
      <div class="components-container flex">
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>DateTimePicker</h3>
          <p>Inititale value : '2018-04-05T04:26'</p>
          <p>v-model = {{ value || 'null' }}</p>
          <ctk-date-time-picker
            v-model="value"
            :minute-interval="10"
            :min-date="minDate"
            :max-date="maxDate"
            :dark="darkMode"
            color="#96bf31"
            enable-button-validate
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 120px;">
              <ctk-date-time-picker
                v-model="value"
                :minute-interval="10"
                color="#96bf31"
                :dark="darkMode"
                enable-button-validate
                :min-date="'2018-04-03'"
                :max-date="'2018-04-12'"
              />
            </textarea>
        </div>
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>Range Date Picker</h3>
          <p>Inititale value : {start: '2018-04-05', end: '2018-04-09'}</p>
          <p>v-model = {{ rangeValues || 'null' }}</p>
          <ctk-date-time-picker
            v-model="rangeValues"
            :dark="darkMode"
            :shortcuts-translation="shortcutsTranslation"
            range-mode
            overlay-background
            color="purple"
            enable-button-validate
            format="YYYY-MM-DD"
            formatted="ddd D MMM YYYY"
            label="Select range"
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 150px;">
              <ctk-date-time-picker
                v-model="{ start: '2018-04-05', end: '2018-04-20' }"
                range-mode
                overlay-background
                color="purple"
                enable-button-validate
                format="YYYY-MM-DD"
                formatted="ddd D MMM YYYY"
                label="Select range"
              />
            </textarea>
        </div>
      </div>
      <div class="components-container flex">
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>DatePicker</h3>
          <p>Inititale value : null</p>
          <p>v-model = {{ value2 || 'null' }}</p>
          <ctk-date-time-picker
            v-model="value2"
            :dark="darkMode"
            format="YYYY-MM-DD"
            color="#287696"
            formatted="ddd D MMM YYYY"
            label="Choose date"
            disable-time
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 120px;">
              <ctk-date-time-picker
                v-model="value2"
                :dark="darkMode"
                color="#287696"
                format="YYYY-MM-DD"
                formatted="ddd D MMM YYYY"
                label="Choose date"
                disable-time
              />
            </textarea>
        </div>
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>TimePicker</h3>
          <p>Inititale value : '14:26'</p>
          <p>v-model = {{ timePickerValue || 'null' }}</p>
          <ctk-date-time-picker
            id="timepicker"
            v-model="timePickerValue"
            :minute-interval="minuteInterval2"
            :disabled="false"
            :dark="darkMode"
            formatted="h:mm a"
            format="HH:mm"
            time-format="h:mm a"
            label="Choose time"
            disable-date
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 130px;">
              <ctk-date-time-picker
                v-model="yourValue"
                :dark="darkMode"
                formatted="h:mm a"
                format="HH:mm"
                time-format="h:mm a"
                label="Choose time"
                :minute-interval="10"
                disable-date
              />
            </textarea>
        </div>
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>DateTimePicker without header & auto close</h3>
          <p>Inititale value : '2018-04-05T14:26'</p>
          <p>v-model = {{ value3 || 'null' }}</p>
          <ctk-date-time-picker
            v-model="value3"
            :minute-interval="10"
            :error-hint="errorHint"
            :hint="hint"
            :dark="darkMode"
            without-header
            auto-close
            time-format="HH:mm"
            locale="fr"
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 130px;">
              <ctk-date-time-picker
                without-header
                auto-close
                v-model="yourValue"
                time-format="HH:mm"
                :minute-interval="10"
                :error-hint="true"
                hint="Error message"
                locale="fr"
              />
            </textarea>
        </div>
      </div>
      <div class="components-container flex">
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>Inline DateTimePicker && disabled dates</h3>
          <p>v-model = {{ value || 'null' }}</p>
          <ctk-date-time-picker
            v-model="value"
            :dark="darkMode"
            :disabled-dates="['2018-04-03', '2018-04-07', '2018-04-09', '2018-04-11', '2018-04-13', '2018-04-15', '2018-04-17', '2018-04-19']"
            label="Choose date time"
            no-weekends-days
            inline
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 100px;">
              <ctk-date-time-picker
                v-model="value"
                :dark="darkMode"
                :disabled-dates="['2018-04-03', '2018-04-07', '2018-04-09', '2018-04-11', '2018-04-13', '2018-04-15', '2018-04-17', '2018-04-19']"
                label="Choose date time"
                no-weekends-days
                inline
              />
            </textarea>
        </div>
        <div
          :class="{'dark': darkMode}"
          class="component-container flex-1">
          <h3>DateTimePicker disabled</h3>
          <p>Option : 'disabled'</p>
          <ctk-date-time-picker
            :dark="darkMode"
            disabled
          />
          <br>
          <textarea
            readonly
            tabindex="-1"
            style="height: 60px;">
              <ctk-date-time-picker
                :dark="darkMode"
                disabled
              />
            </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueCtkDateTimePickerView',
    data () {
      return {
        value: '2018-04-05T04:26',
        value2: null,
        value3: '2018-04-05T14:26',
        rangeValues: {
          start: '2018-04-05',
          end: '2018-04-20'
        },
        timePickerValue: '14:26',
        minuteInterval: 5,
        minuteInterval2: 10,
        hint: 'Error message',
        errorHint: true,
        timeFormat: 'hh:mm a',
        locale: 'fr',
        minDate: '2018-04-03',
        maxDate: '2018-04-12',
        darkMode: false,
        shortcutsTranslation: {
          'this_week': 'Cette semaine',
          'last_30_days': '30 derniers jours',
          'last_month': 'Mois précédent',
          'last_year': 'L\'année dernière'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    margin-top: 0;
  }
  .component-container {
    margin: 0 10px 20px 10px;
    padding: 20px;
    background: #F2F2F2;
    border-radius: 4px;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    &.dark {
      background-color: darken(#424242, 10%);
      color: #FFF;
      textarea {
        background: #424242;
        color: dodgerblue;
      }
    }
  }
  textarea {
    background-color: #FFF;
    color: #bd4147;
    border: 1px solid #CCC;
    border-radius: 4px;
    outline: none;
    font-size: 85%;
    width: 100%;
    font-weight: 700;
    font-family: monospace, monospace;
    resize: none;
  }
  @media screen and (max-width: 1024px) {
    .components-container.flex {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      flex-flow: column;
      -moz-flex-direction: column;
    }
  }
</style>
