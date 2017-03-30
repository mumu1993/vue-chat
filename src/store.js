import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
  state: {
    //user
    user: {
      name: 'mumu',
      img: 'dist/images/1.jpg'
    },
    //会话列表
    seesions: [
      {
        id: 1,
        user: {
          name: "Intro",
          img: "dist/images/1.jpg"
        },
        messages: [
          {
            content: "Hello this is a vue + vuex + webpack simple chat project demo, chat history store in localStorage, any questions ask me from Github Issue",
            date: now
          },
          {
            content: "https://github.com/mumu1993/vue-chat",
            date: now
          }
        ]
      },
      {
        id: 2,
        user: {
          name: "webpack",
          img: "dist/images/3.jpg"
        },
        messages: []
      }
    ],
    //当前选中id
    currentSessionId: 1,
    filterKey: ''
  },
  mutations: {
    INIT_DATA(state) {
      let data = localStorage.getItem('vue-chat-session');
      if (data) {
        state.sessions = JSON.parse(data);
      }
    },
    // 发送消息
    SEND_MESSAGE({ sessions, currentSessionId }, content) {
      let session = sessions.find(item => item.id === currentSessionId);
      session.messages.push({
        content: content,
        date: new Date(),
        self: true
      });
    },
    // 选择会话
    SELECT_SESSION(state, id) {
      state.currentSessionId = id;
    },
    // 搜索
    SET_FILTER_KEY(state, value) {
      state.filterKey = value;
    }
  },
})


store.watch(
  (state) => state.sessions,
  (val) => {
    console.log('CHANGE: ', val);
    localStorage.setItem('vue-chat-session', JSON.stringify(val));
  },
  {
    deep: true
  }
);

export default store;
export const actions = {
  initData: ({ dispatch }) => dispatch('INIT_DATA'),
  sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
  selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
  search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};