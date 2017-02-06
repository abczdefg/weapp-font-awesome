Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper'],
        fa: "fa fa-eye"
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress'],
        fa: "fa fa-cubes"
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch'],
        fa: "fa fa-edit"
      }, {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['action-sheet', 'modal', 'toast', 'loading'],
        fa: "fa fa-print"
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator'],
        fa: "fa fa-navicon"
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video'],
        fa: "fa fa-music"
      }, {
        id: 'map',
        name: '地图',
        pages: ['map'],
        fa: "fa fa-map-o"
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas'],
        fa: "fa fa-photo"
      }
    ]
  }
});
