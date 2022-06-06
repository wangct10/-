import { reqCartList, reqDeleteCartById, reqUpdateCheckById } from '@/api'
const state = {
  cartList: []
}
const mutations = {
  GATCARLIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit('GATCARLIST', result.data)
    }
  },
  // 删除购物车某个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('删除失败'))
    }
  },
  // 修改购物车某一个产品的选中状态
  async UpdateCheckById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckById(skuId, isChecked)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('选中失败'))
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    // console.log(context);
    // context：小仓库 commit【提交mutation修改state】 getters【计算属性】 disp【派发action】state【当前仓库数据】 
    // 获取购物车中全部的产品（是一个数组）
    // console.log(getters.cartList.cartInfoList);
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
      // 将每一次返回的Promise添加到数组当中
      PromiseAll.push(promise)

    })
    // 只要全部的p1|p2。。。都成功，返回结果即为成功
    // 如果有一个失败，即为返回结果失败
    return Promise.all(PromiseAll)
  },
  // 修改全部产品的状态(全选)
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('UpdateCheckById', { skuId: item.skuId, isChecked })
      promiseAll.push(promise)
    })
    // 最终返回结果
    return Promise.all(promiseAll)
  }

}

const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },

}

export default ({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
});