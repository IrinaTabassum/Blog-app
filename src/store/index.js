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
    loginAuth:false,
    blogTitle:"",
    blogHTML:"",
    blogImg:"",
    blogPhotoFileURL:null,
    blogPhotoPreview:null,
    profileId:null
  },
  getters: {
  },
  mutations: {
    newBlogPost(state,payload){
      state.blogHTML=payload.value;
      
    },
    updateBlogTitle(state,payload){
      state.blogTitle=payload.value;
    },
    profileImg(state,payload){
      state.blogImg=payload.value;
      console.log(state.blogTitle)

    },
    toggleEditPost(state, payload){
      state.editPost = payload.value;
      console.log(state.editPost);
      
    }
  },
  actions: {
  },
  modules: {
  }
})
