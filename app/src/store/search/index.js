import { reqGetSearchInfo } from '@/api'
// search模块的小仓库
const state = {
  searchList: {}
};
const mutations = {
  GETSEARCGLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    // 当前这个reqGetSearchInfo函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
    // params形参：是当用户派发action的时候，第二个参数传递过来，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit('GETSEARCGLIST', result.data)

    }
  }
}
// 计算属性。在项目中，为了简化数据而生
// 可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  // state是当前仓库的state，并非大仓库中的state
  goodsList(state) {
    // 假如网络不给力或者没有网 state.searchList.goodsList返回的undefined
    // 计算新的属性至少来一个数组所以要||[]
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  total(state) {
    return state.searchList.total
  }

}

export default ({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
});