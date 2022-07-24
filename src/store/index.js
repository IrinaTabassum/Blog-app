import { createStore } from 'vuex'

export default createStore({
  state: {
    blogData:[
      {title:"This is my first blog post1",date:"12/03/2022",img:"img1"},
      {title:"This is my first blog post2",date:"12/03/2022",img:"img2"},
      {title:"This is my first blog post3",date:"12/03/2022",img:"img3"},
      {title:"This is my first blog post1",date:"12/03/2022",img:"img1"},
      {title:"This is my first blog post2",date:"12/03/2022",img:"img2"},
      {title:"This is my first blog post3",date:"12/03/2022",img:"img3"},
    ],
    editPost:false,
  },
  getters: {
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
      console.log(state.editPost);
    }
  },
  actions: {
  },
  modules: {
  }
})
