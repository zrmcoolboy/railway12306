<template>
  <Header />
  <!-- 子页购买-单程页面-->
  <div class="body-top">
    <form method="get">
      <div class="left">
        <ul>
          <li>
            <input type="radio" name="go" id="ra" checked="checked" />
            <label for="ra" class="cursor">单程</label>
          </li>
          <li>
            <input type="radio" name="go" id="back" />
            <label for="back" class="cursor">往返</label>
          </li>
        </ul>
      </div>
      <div class="center">
        <ul>
          <li class="one">
            <span class="label">
              <label>出发地</label>
            </span>
            <div class="label-next">
              <input
                v-model="info.start"
                type="text"
                class="city-go"
                placeholder="北京"
              />
              <span class="iconfont point">&#xe615;</span>
            </div>
          </li>
          <li>
            <span class="iconfont point" id="second" @click="exchange"
              >&#xe612;</span
            >
          </li>
          <li class="three">
            <span class="label2">
              <label>目的地</label>
            </span>
            <div class="label-next">
              <input
                v-model="info.end"
                type="text"
                class="city-go"
                placeholder="上海"
              />
              <span class="iconfont point">&#xe615;</span>
            </div>
          </li>
          <li class="four">
            <div class="label-next">
              <div class="block">
                <span class="demonstration">出发日</span>
                <el-date-picker
                  v-model="info.startTime"
                  type="date"
                  placeholder="选择日期"
                  format="YYYY/MM/DD"
                  value-format="YYYY-MM-DD"
                />
              </div>
            </div>
          </li>
          <li class="five">
            <div class="block">
              <span class="demonstration">返程日</span>
              <el-date-picker
                v-model="info.endTime"
                type="date"
                placeholder="选择日期"
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>
            <input type="radio" name="chick" id="normal" checked="checked" />
            <label for="normal" class="cursor">普通</label>
          </li>
          <li>
            <input type="radio" id="stu" name="chick" />
            <label for="stu" class="cursor">学生</label>
          </li>
        </ul>
        <div class="right-right">
          <el-button type="warning" @click="findinfo">查询</el-button>
        </div>
      </div>
    </form>
  </div>
  <!-- 单程第二部分 -->
  <div class="body-second">
    <div class="body-second-top">
      <el-tabs type="border-card">
        <el-tab-pane label="10-4">
          <div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <!--                   :class="troggleAll ? 'active' : ''" -->
                <span class="top-center-all" @click="findAllTrain">全部</span>
                <ul ref="lis">
                  <li>
                    <input type="checkbox" id="G" @click="findGTrain" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" @click="findGTrain" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" @click="findGTrain" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="T" @click="findGTrain" />
                    <label for="T" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" @click="findGTrain" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" @click="findGTrain" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin" @click="getAllStart">全部</span>
              </div>
              <ul class="goCity">
                <li v-for="(item, index) in gostation" :key="index">
                  <input
                    type="checkbox"
                    :id="item"
                    data-station="start"
                    @click="ByStartOrEnd(item, $event)"
                  />
                  <label :for="item" @click="">{{ item }}</label>
                </li>
              </ul>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">到达车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
              <ul class="goCity">
                <li v-for="(item, index) in onstation" :key="index">
                  <input
                    type="checkbox"
                    :id="item"
                    data-station="end"
                    @click="ByStartOrEnd(item, $event)"
                  />
                  <label :for="item" :name="item">{{ item }}</label>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="10-5"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-6"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-7"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-8"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-9"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-10"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-11"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-12"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-13"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-14"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-15"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-16"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-17"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
        <el-tab-pane label="10-18"
          ><div class="body-second-botton">
            <div class="botton-top">
              <div class="botton-top-left">车次类型：</div>
              <div class="botton-top-center">
                <span class="top-center-all">全部</span>
                <ul>
                  <li>
                    <input type="checkbox" id="G" />
                    <label for="G" class="cursor">GC-高铁/城际</label>
                  </li>
                  <li>
                    <input type="checkbox" id="D" />
                    <label for="D" class="cursor">D-动车</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">Z-直达</label>
                  </li>
                  <li>
                    <input type="checkbox" id="Z" />
                    <label for="Z" class="cursor">T-特快</label>
                  </li>
                  <li>
                    <input type="checkbox" id="K" />
                    <label for="K" class="cursor">K-快速</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ELSE" />
                    <label for="ELSE" class="cursor">其他</label>
                  </li>
                </ul>
              </div>
              <div class="botton-top-right">
                发车时间：
                <select name="time-right">
                  <option value="00002400">00:00-24:00</option>
                  <option value="00000600">00:00-06:00</option>
                  <option value="06001200">06:00-12:00</option>
                  <option value="12001800">12:00-18:00</option>
                  <option value="18002400">18:00-24:00</option>
                </select>
              </div>
            </div>
            <div class="botton-botton">
              <div class="botton-botton-left">出发车站：</div>
              <div class="botton-botton-all">
                <span class="allin">全部</span>
              </div>
            </div>
          </div></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
  <!-- 中间积分 -->
  <div class="result">
    <div class="result-left" v-show="isShowCarInfo">
      <span
        ><strong>{{ info.start }}</strong></span
      >
      <el-icon><Right /></el-icon>
      <span class="endCity"
        ><strong>{{ info.end }}</strong></span
      >
      <span
        >共计<strong>{{ ticketData.length ? ticketData.length : 0 }}</strong
        >辆车次</span
      >
      <span
        >您可使用<i class="centerChange">中转换乘</i
        >功能，查询途中换乘一次的部分列车余票情况</span
      >
    </div>
    <span class="result-right">
      <input type="checkbox" id="F" />
      <label for="F" class="cursor">显示积分兑换车次</label>
      <input type="checkbox" id="L" />
      <label for="L" class="cursor">显示全部可预订车次</label>
    </span>
  </div>

  <!-- 最后表格 -->
  <div class="body-third">
    <table border="1" cellspacing="1">
      <tr>
        <th>车次</th>
        <th>
          出发站
          <br clear="none" />
          到达站
        </th>
        <th>
          <div class="goTime" @click="changeArrowStart">
            出发时间<el-icon v-show="isIcon"><ArrowUp /></el-icon
            ><el-icon v-show="!isIcon"><ArrowDown /></el-icon>
          </div>
          <br clear="none" />
          <div @click="changeArrowEnd" class="goTime2">
            到达时间<el-icon v-show="isIcon2"><ArrowDown /></el-icon
            ><el-icon v-show="!isIcon2"><ArrowUp /></el-icon>
          </div>
        </th>
        <th @click="changeArrowTime" class="passTime">
          历时<el-icon v-show="isIcon3"><ArrowDownBold /></el-icon
          ><el-icon v-show="!isIcon3"><ArrowUpBold /></el-icon>
        </th>
        <th>
          商务座
          <br clear="none" />
          特等座
        </th>
        <th>一等座</th>
        <th>
          二等座
          <br clear="none" />
          二等包座
        </th>
        <th>高级软卧</th>
        <th>
          软卧
          <br clear="none" />
          一等卧
        </th>
        <th>软座</th>
        <th>硬座</th>
        <th>无座</th>
        <th>其他</th>
        <th colspan="1" rowspan="1">备注</th>
      </tr>
      <tr class="dataList" v-for="item in ticketData" :key="item.carID">
        <th>{{ item.carID }}</th>
        <th>
          {{ item.start }}
          <br clear="none" />
          {{ item.end }}
        </th>
        <th>
          {{ item.startTime }}
          <br clear="none" />
          {{ item.endTime }}
        </th>
        <th>
          {{ item.totalTime }}
        </th>
        <th>{{ item.tedeng ? item.tedeng : "--" }}</th>
        <th>{{ item.one ? item.one : "--" }}</th>
        <th>{{ item.two ? item.two : "--" }}</th>
        <th>{{ item.gjsoftwo ? item.gjsoftwo : "--" }}</th>
        <th>{{ item.softwo ? item.softwo : "--" }}</th>
        <th>{{ item.soft ? item.soft : "--" }}</th>
        <th>{{ item.ying ? item.ying : "--" }}</th>
        <th>{{ item.nochart ? item.nochart : "--" }}</th>
        <th>{{ item.other ? item.other : "--" }}</th>
        <th>
          <el-button type="primary" @click="prepurchase(item)">预定</el-button>
        </th>
      </tr>
    </table>
    <div class="noneInfo">
      <div class="centerline" v-show="info.start && info.end && isShowCarInfo">
        <p class="place">{{ info.start }}</p>
        <div class="optionCenter">
          <el-icon><Refresh /></el-icon>
          中转换乘
        </div>
        <p class="endspace">{{ info.end }}</p>
        <p class="findmethod">查询更多中转方案</p>
      </div>
      <div class="notrain" v-show="!ticketData.length">
        <el-icon size="70px" color="#ccc"><Warning /></el-icon>
        <p>没有符合筛选条件的车次，请修改筛选条件或</p>
        <p class="showAll">显示全部车次 ！</p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { useMainStore } from "@/store";
import { reactive, ref, onMounted, computed, onUpdated } from "vue";
import { findTicket, FindTypeTrain } from "@/api/request.js";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import router from "@/router";
const store = useMainStore();
const { ticketData, start, end } = storeToRefs(store);
console.log(ticketData.value);
let temp = ref("");
// 地点交换
const exchange = () => {
  if (info.start === "" && info.end === "") {
    console.log("不能交换");
  } else {
    temp = info.start;
    info.start = info.end;
    info.end = temp;
  }
};
// 预定
const username = localStorage.getItem("username");
const prepurchase = (item) => {
  if (username === "") {
    alert("请登录");
  } else {
    // alert("预定成功！");
    // console.log(item.carID);
    localStorage.setItem("optioncarinfo", JSON.stringify(item));
    router.push("/buyticket");
  }
};
// 输入框信息
let info = reactive({
  start: "",
  end: "",
  startTime: "",
  endTime: "",
});
const isShowCarInfo = ref(false);
// 查询按钮
const findinfo = () => {
  if (!info.start || !info.end) {
    ElMessage({
      message: "请输入地点",
      type: "error",
    });
  } else {
    isShowCarInfo.value = true;
    findAllTrain();
    // info.start = "";
    // info.end = "";
  }
};

// 查询高铁
const findGTrain = async (e) => {
  if (!info.start || !info.end) {
    ElMessage({
      message: "请输入出发地和到达地",
      type: "error",
    });
  } else {
    const res = await FindTypeTrain(e.target.id, info.start, info.end);
    // console.log(res);
    if (res.status === 200) {
      store.$patch({
        ticketData: res.data,
      });
    }
    const arr = liss.value.map((item) => (item.checked = false));
    e.target.checked = true;
  }
};

// 点击出发点或到达点的点击事件
const ByStartOrEnd = (name, e) => {
  if (e.target.checked) {
    // console.log(ticketData.value);
    console.log(e.target.dataset.station === "start");
    const arr = JSON.parse(localStorage.getItem("trainList"));
    // console.log(arr);
    if (e.target.dataset.station === "start") {
      console.log("出发点");
      const newArr = arr.filter((item) => {
        return item.start === name;
      });
      store.$patch({
        ticketData: newArr,
      });
    } else {
      const newArr = arr.filter((item) => item.end === name);
      store.$patch({
        ticketData: newArr,
      });
    }
  }
};

// 获取ulDom
const lis = ref(null);
// 存储lisDOM  input
const liss = ref([]);

// 车型全部按钮
const findAllTrain = () => {
  getTicketInfo();
  liss.value.map((item) => (item.checked = true));
};
// 出发站的全部按钮
const getAllStart = () => {
  const arr = JSON.parse(localStorage.getItem("trainList"));
  store.$patch({
    ticketData: arr,
  });
};
// 整理获取回来的数据，找出出发站
const gostation = ref([]);
// 找出到达站
const onstation = ref([]);
// 获取全部车次信息
const getTicketInfo = async () => {
  const res = await findTicket(info);
  console.log(res);
  if (res.status === 200) {
    store.$patch({
      ticketData: res.data,
    });
    localStorage.setItem("trainList", JSON.stringify(ticketData.value));
  }
  const arr = res.data.map((item) => item.start);
  const arr2 = res.data.map((item) => item.end);
  // 去重1
  // console.log([...new Set(arr)]);
  gostation.value = [...new Set(arr)];
  onstation.value = [...new Set(arr2)];
  //去重2
  // console.log(Array.from(new Set(arr)));
};

// 首页搜索进入
onMounted(() => {
  (info.start = start), (info.end = end);
  if (info.start === "" && info.end === "") {
    store.$patch({
      ticketData: "",
    });
  } else {
    getTicketInfo();
  }

  isShowCarInfo.value = true;
  // 打印ul
  // console.log(lis.value.querySelectorAll("li"));
  // 获取所有的li
  const arr = lis.value.querySelectorAll("li input");
  arr.forEach((el) => {
    // console.log(el);
    liss.value.push(el);
  });
  ElMessageBox.alert(
    "<strong>根据国务院联防联控机制，2022年9月10日至10月31日，旅客进站乘车需持48小时核酸阴性证明，请广大旅客提前做好相关准备，确保出行顺畅。进（返）京旅客还需持“北京健康宝”绿码</strong>",
    "温馨提示",
    {
      confirmButtonText: "确定",
      dangerouslyUseHTMLString: true,
    }
  );
});

// 上下箭头控制显示隐藏
const isIcon = ref(true);
const isIcon2 = ref(true);
const isIcon3 = ref(true);
// 箭头点击事件
const changeArrowStart = () => {
  isIcon.value = !isIcon.value;
};
const changeArrowEnd = () => {
  isIcon2.value = !isIcon2.value;
};
const changeArrowTime = () => {
  isIcon3.value = !isIcon3.value;
};
</script>

<style lang="less" scoped>
// 出发日期
.block {
  width: 200px;
  display: flex;
  align-items: center;
  margin-top: -10px;
  margin-left: -10px;
  .demonstration {
    width: 60px;
  }
}
.body-top {
  width: 1169px;
  height: 55px;
  background: #eef1f8;
  font-size: 12px;
  border: 1px solid #298cce;
  margin-top: 10px;
  border-radius: 3px;
  padding: 12px 10px;
  margin: 10px auto;
  position: relative;
  .left {
    width: 80px;
    height: 48px;
    float: left;
    background: url(@/assets/img/line_sear.png) right center no-repeat;
    position: absolute;
    top: 24px;
    li {
      width: 80px;
      height: 24px;
      line-height: 20px;
      height: 20px;
      padding: 2px;
    }
  }
}

input {
  font-size: 12px;
  line-height: 18px;
  color: #333;
  outline: 0;
}
.cursor {
  cursor: pointer;
}
.center {
  width: 801px;
  height: 50px;
  margin-right: 25px;
  position: absolute;
  top: 30px;
  left: 100px;
}
.center > ul .one {
  width: 190px;
  float: left;
  height: 30px;
  /* line-height: 30px; */
  padding: 10px 0;
  white-space: nowrap;
}
.center .label {
  width: 42px;
  height: 30px;
  display: block;
  width: 40px;
  float: left;
  margin: 0;
  padding: 0;
  padding-right: 2px;
  text-align: right;
}
.center .label-next {
  position: relative;
  width: 122px;
  height: 30px;
  // float: left;
}
.center .label-next .city-go {
  border: 1px solid #ff0000;
  position: absolute;
  top: -8px;
  padding: 5px;
}
.point {
  position: absolute;
  right: -25px;
  top: -1px;
  color: black;
  width: 20px;
  height: 20px;
  /* background-color: pink; */
  cursor: pointer;
}
#second {
  position: absolute;
  top: 10px;
  left: 217px;
}
.label2 {
  width: 42px;
  height: 30px;
  display: block;
  width: 40px;
  float: left;
  margin: 0;
  padding: 0;
  padding-right: 2px;
  text-align: right;
}
.three {
  position: absolute;
  top: 10px;
  left: 245px;
}
.four {
  position: absolute;
  top: 10px;
  left: 480px;
}
.five {
  position: absolute;
  top: 10px;
  right: -90px;
}
.right {
  display: inline-block;
  position: relative;
  left: 1010px;
  top: 10px;
  // float: left;
}
.right > ul > li {
  padding: 5px;
}
.right-right {
  width: 98px;
  height: 35px;
  position: absolute;
  left: 60px;
  top: 6px;
  .el-button {
    width: 100%;
    height: 100%;
  }
}
.right-right > a {
  color: #ffffff;
}
.right-right:hover {
  background-color: rgba(226, 240, 71, 0.8);
}
.body-second {
  width: 1190px;
  height: 81px;
  position: relative;
  margin: 10px auto;
}
.body-second .body-second-top {
  height: 28px;
  border: 1px solid #999;
  border-bottom: 1px solid #3391d0;
  color: #333;
  position: relative;
  z-index: 100;
}
.body-second-top > ul > li {
  float: left;
  height: 28px;
  padding-right: 2px;
  background: url(@/assets/img/line_searsel.png) no-repeat;
  width: 77px;
  text-align: center;
}
.body-second-top > ul > li span {
  width: 146px;
  font-size: 12px;
  font-weight: 700;
}
.body-second-botton {
  width: 100%;
  height: 75px;
}
.botton-top {
  position: relative;
  display: inline-block;
  // float: left;
}
.body-second-botton .botton-top {
  height: 22px;
  width: 1188px;
}
.body-second-botton .botton-top .botton-top-left {
  position: absolute;
  top: 6px;
  width: 80px;
  height: 22px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px;
  text-align: right;
}
.botton-top-center {
  width: 898px;
  height: 22px;
}
.top-center-all {
  font-size: 12px;
  position: absolute;
  top: 8px;
  left: 80px;
  display: block;
  width: 33px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: #99cccc;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
}

.botton-top-center > ul {
  position: absolute;
  top: 8px;
  left: 120px;
}
.botton-top-center > ul > li {
  float: left;
  height: 18px;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  padding: 2px;
}
.botton-top-right {
  width: 176px;
  height: 22px;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 12px;
}
.botton-botton {
  position: relative;
  display: inline-block;
  // float: left;
  .goCity {
    display: flex;
    position: absolute;
    top: 10px;
    left: 122px;
    font-size: 12px;
  }
}
.botton-botton .botton-botton-left {
  position: absolute;
  top: 8px;
  width: 80px;
  height: 22px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px;
  text-align: right;
}
.botton-botton-all {
  width: 898px;
  height: 22px;
  position: relative;
}
.botton-botton-all .allin {
  display: block;
  width: 33px;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  float: left;
  text-align: center;
  position: absolute;
  left: 80px;
  top: 9px;
  background-color: #99cccc;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
}
.result {
  display: flex;
  justify-content: space-between;
  margin: 85px auto;
  height: 23px;
  line-height: 23px;
  width: 1190px;
  padding: 6px 0;
  .result-left {
    font-size: 13px;
    .centerChange {
      margin: 0 10px;
      font-style: normal;
      color: #f80;
      font-weight: bold;
      cursor: pointer;
    }
    .el-icon {
      margin: 0 10px;
    }
    span {
      margin-left: 10px;
    }
    .endCity {
      margin-left: 0;
    }
  }
  .result-right {
    display: flex;
    font-size: 13px;
  }
}

//箭头部分
.el-icon {
  cursor: pointer;
}
.goTime {
  cursor: pointer;
  margin-bottom: -10px;
}
.goTime2 {
  cursor: pointer;
}
.passTime {
  cursor: pointer;
}
//////////////////
.body-third {
  width: 1190px;
  margin: 0 auto;
  margin-bottom: 70px;
  margin-top: -65px;
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    background-color: #298cce;
    .dataList {
      th {
        color: #000;
        background-color: #eef1f8;
      }
    }
  }
  .noneInfo {
    width: 100%;
    // height: 650px;
    border: 1px solid #298cce;
    .centerline {
      width: 100%;
      height: 82px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #298cce;

      p {
        font-size: 21px;
        font-family: 宋体;
        font-weight: bold;
      }
      .optionCenter {
        width: 110px;
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        border: 1px solid #ccc;
        text-align: center;
        margin: 0 50px;
        color: #348ff3;
        font-size: 12px;
      }
      .findmethod {
        font-size: 14px;
        margin-left: 30px;
        text-decoration: underline;
        color: #348ff3;
        cursor: pointer;
      }
    }
    .notrain {
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      /* padding: 0 20px; */
      margin-bottom: 60px;
      margin-top: 30px;
      p {
        color: #ccc;
      }
      .showAll {
        color: #46a4ff;
        cursor: pointer;
      }
    }
  }
}
.body-third th {
  width: 90px;
  height: 52px;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
}
li {
  display: flex;
  align-items: center;
}
</style>