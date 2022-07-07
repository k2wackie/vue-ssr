import Vue from "vue";

export const state = () => ({
  member: null,
});

export const mutations = {};
export const getters = {};
export const actions = {
  async duplicateCheck(ctx, { field, value }) {
    // console.log("duplicteCheck", payload);
    const { $axios } = Vue.prototype;
    const data = await $axios.get(
      `/api/member/duplicateCheck/${field}/${value}`
    );
    return data;
  },
  async createMember(ctx, form) {
    // console.log("createMember", form);
    const { $axios } = Vue.prototype;
    const data = await $axios.post(`/api/member/`, form);
    return data;
  },
  async signInLocal({ commit }, form) {
    const { $axios } = Vue.prototype;
    const data = await $axios.post("/api/member/loginLocal", form);
    return data;
  },
};
