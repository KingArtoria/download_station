<template>
  <div>
    <div class="head">软件下载</div>
    <div class="content">
      <!-- 推荐列表 -->
      <div class="content_2">
        <div class="content_2_1">
          <div class="content_2_1_1">为您推荐</div>
          <img src="../../assets/huo3.png" class="content_2_1_2" />
        </div>
        <div class="content_2_2" v-for="(item, index) in indexData.recommend_list" :key="index">
          <div class="content_2_2_1">
            <img :src="item.logo" class="content_2_2_1_1" v-if="item.logo != null" />
            <div class="content_2_2_1_3" v-else>
              {{ item.name.substring(0, 1) }}
            </div>
            <div class="content_2_2_1_2">
              <div class="content_2_2_1_2_1">{{ item.name }}</div>
              <div class="content_2_2_1_2_2" @click="down(item.download, item.id)">下载</div>
            </div>
          </div>
          <div class="content_2_2_2">注：{{ item.content }}</div>
        </div>
      </div>
      <!-- 游戏列表 -->
      <div class="content_1">
        <div class="content_1_2">更多游戏</div>
        <div class="content_1_1" v-for="(item, index) in indexData.list" :key="index">
          <div class="content_1_1_1">
            <img :src="item.logo" class="content_1_1_1_1" v-if="item.logo != null" />
            <div class="content_1_1_1_3" v-else>
              {{ item.name.substring(0, 1) }}
            </div>
            <div class="content_1_1_1_2">
              <div class="content_1_1_1_2_1">{{ item.name }}</div>
              <div class="content_1_1_1_2_2" @click="down(item.download, item.id)">下载</div>
            </div>
          </div>
          <div class="content_1_1_2">注：{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div class="tabBar">
      <div class="tabBar_1">
        <img src="../../assets/changwan-l.webp" class="tabBar_1_1" v-show="tabBar == 1" />
        <img src="../../assets/changwan-a.webp" class="tabBar_1_1" v-show="tabBar != 1" @click="tabBar = 1" />
        <img src="../../assets/xiangwa-l.webp" class="tabBar_1_1" v-show="tabBar == 2" />
        <img src="../../assets/xiangwa-a.webp" class="tabBar_1_1" v-show="tabBar != 2" @click="tabBar = 2" />
        <img src="../../assets/lewan-l.webp" class="tabBar_1_1" v-show="tabBar == 3" />
        <img src="../../assets/lewan-a.webp" class="tabBar_1_1" v-show="tabBar != 3" @click="tabBar = 3" />
        <img src="../../assets/quwan_l.webp" class="tabBar_1_1" v-show="tabBar == 4" />
        <img src="../../assets/quwan_a.webp" class="tabBar_1_1" v-show="tabBar != 4" @click="tabBar = 4" />
        <img src="../../assets/qita_l.webp" class="tabBar_1_1" v-show="tabBar == 5" />
        <img src="../../assets/qita_a.webp" class="tabBar_1_1" v-show="tabBar != 5" @click="tabBar = 5" />
      </div>
      <div class="tabBar_2">
        <div class="tabBar_2_1" :style="`color:${tabBar == 1 ? '#3578F6' : '#939292'}`">畅玩</div>
        <div class="tabBar_2_1" :style="`color:${tabBar == 2 ? '#3578F6' : '#939292'}`">享玩</div>
        <div class="tabBar_2_1" :style="`color:${tabBar == 3 ? '#3578F6' : '#939292'}`">乐玩</div>
        <div class="tabBar_2_1" :style="`color:${tabBar == 4 ? '#3578F6' : '#939292'}`">趣玩</div>
        <div class="tabBar_2_1" :style="`color:${tabBar == 5 ? '#3578F6' : '#939292'}`">其它</div>
      </div>
    </div>
  </div>
</template>

<script>
import { index, memberApp } from '../../utils/api';
export default {
  data() {
    return {
      indexData: [],
      tabBar: 1,
    };
  },
  methods: {
    index() {
      index({ type: this.tabBar }).then(res => {
        if (res.code == -2) return this.$router.push('/login');
        res.data.list.forEach(item => {
          // item.name长度超出省略号
          if (item.name.length > 10) {
            item.name = item.name.substring(0, 10) + '...';
          }
        });
        res.data.recommend_list.forEach(item => {
          if (item.name.length > 10) {
            item.name = item.name.substring(0, 10) + '...';
          }
        });
        this.indexData = res.data;
      });
    },
    down(url, id) {
      location.href = url;
      memberApp({ id }).then(res => {
        this.index();
      });
    },
  },
  mounted() {
    this.index();
  },
  watch: {
    tabBar() {
      this.indexData = [];
      this.index();
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
