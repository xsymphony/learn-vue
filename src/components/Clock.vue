<template>
  <div class="timing">
    <h1>计时</h1>
    <div class="process_box" v-if="this.config.isTiming">
      <div class="process main" v-bind:style="{width: clock.process_width+`px`}">{{percentage}}</div>
      <div class="process bg" v-bind:style="{width: clock.width+`px`}"></div>
      <div class="time"><h1>{{time.min}}:{{time.sec}}</h1></div>
    </div>
    <button @click="startTiming">{{config.button}}</button>
    <p v-if="!config.isTiming">{{warning.content}}</p>
    <div class="settime">
      <input type="checkbox" id="checkbox" v-model="config.setting">
      <label for="checkbox">设置</label>
    </div>
    <div v-show="config.setting">
      <div>
        工作时间：<input type="number" value='25' v-model='time.workTime' min="15" max="60">分钟
      </div>
      <button @click="test">开启测试加速</button>
      <p v-if="config.setting">当前速度{{current_speed}}倍</p>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { ADD_TOTAL_TIME } from '@/store/plan'
  export default {
    data () {
      return {
        config: {
          setting: false,
          speed: 1000,
          isTiming: false,
          timer: null,
          button: "开始",
        },
        time: {
          sec: '00',
          min: '25',
          workTime: 25,
        },
        clock: {
          width: 300,
          process_width: 0,
          j: 1,
        },
        warning: {
          bool: false,
          content: ''
        }
      }
    },
    methods: {
      ...mapActions([ADD_TOTAL_TIME]),
      test () {
        if (this.config.speed >= 10) {
          this.config.speed = this.config.speed / 10;
        } else {
          this.warning.bool = true;
          this.warning.content = "已经加速到最大啦";
          this.config.speed = 1000;
        }
      },

      startTiming () {
        if (this.config.isTiming === false) {
          if (this.time.workTime < 15 || this.time.workTime > 60 || this.time.workTime % 1 !== 0) {
            this.warning.bool = true;
            this.warning.content = '请输入15~60分钟之间的整数'
          } else {
            this.warning.bool = false;
            this.time.min = this.time.workTime;
            this.config.isTiming = true;
            this.config.setting = false;
            this.config.button = "结束";
            this.updateProgress()
          }
        } else {
          this.reset();
          window.clearTimeout(this.config.timer)
        }
      },

      updateProgress () {
        let step = this.config.isTiming ? 1 / 60 / this.time.workTime : 0;
        this.clock.j++;
        this.clock.process_width = this.clock.j * step * this.clock.width;
        if (this.time.min !== '00' && this.time.sec === '00') {
          this.time.min = this.addZero(+this.time.min - 1);
          this.time.sec = '59';
          this.config.timer = window.setTimeout(this.updateProgress, this.config.speed)
        } else if (this.time.sec !== '00') {
          this.time.sec = this.addZero(this.time.sec - 1);
          this.config.timer = window.setTimeout(this.updateProgress, this.config.speed)
        } else {
          this.reset();
          this.ADD_TOTAL_TIME(this.time.workTime);
          window.alert('任务完成啦');
          window.clearTimeout(this.config.timer)
        }
      },

      addZero (value) {
        if (value < 10) {
          value = '0' + value
        }
        return value + ''
      },

      reset () {
        this.warning.bool = false;
        this.config.isTiming = false;
        this.config.button = "开始";
        this.time.min = "25";
        this.time.sec = "00";
        this.clock.j = 0;
      }
    },

    watch: {
      'time.sec': function () {
        document.title = this.time.min + ":" + this.time.sec
      }
    },
    computed: {
    	percentage: function () {
        return (this.clock.process_width / this.clock.width * 100).toFixed(1) + "%"
      },
      current_speed: function () {
        return (1000/this.config.speed)
      }
    }
  }
</script>

<style lang="less" scoped>
  .process_box {
    position: relative;
  }
  .process {
    border-right: none;
    height: 20px;
  }
  .main {
    background-color: #FF6666;
    z-index:2;
    text-align: center;
  }
  .bg {
    background-color: black;
    position: absolute;
    opacity: 0.1;
    top: 0;
    z-index: 1;
  }
</style>
