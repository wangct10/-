// 登录与注册的模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from "@/utils/token";


const state = {
  code1: '',
  token: getToken(),
  userInfo: {}
}
const mutations = {
  GETCODE(state, code) {
    state.code1 = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  // 清除本地数据
  CLEAR(state) {
    // 把仓库的用户信息清空
    state.token = '';
    state.userInfo = {},
      // 本地存储数据清空
      removeToken()
  }
}
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    // 获取验证码的这个接口，把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
    let result = await reqGetCode(phone)
    // console.log(result);
    if (result.code == 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  // 用户注册
  async UserRegister({ commit }, user) {
    let result = await reqUserRegister(user)
    // console.log(result);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  // 登录业务
  async UserLogin({ commit }, data) {
    let result = await reqUserLogin(data)
    // console.log(result);
    // 服务器下发token，用户唯一标识符（uuid）
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token)
      // 持久化存储token
      // localStorage.setItem("TOKEN", result.data.token)
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('登录失败'))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo()
    // console.log(result);
    if (result.code == 200) {
      // 提交用户信息
      commit("GETUSERINFO", result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error('失败'))
    }

  },
  // 退出登录
  async UserLogout({ commit }) {
    // 只是向服务器发起一次请求，通知服务器清除token
    let result = await reqLogout()
    if (result.code == 200) {
      commit("CLEAR")
      return 'ok'
    } else {
      return Promise.reject(new Error('失败'))
    }
  }
}
const getters = {
  Name(state) {
    return state.userInfo.name
  }
}


export default ({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
});