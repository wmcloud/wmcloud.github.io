config = {
  apiAddress: "https://adminapi.djsapp.xyz"
};

function api(addr) {
  return config.apiAddress + addr
}

// var nav_admin = [
//   {
//     "title": "首页",
//     "spread": false,
//     "href": "home.html"
//   }, {
//     "title": "用户管理",
//     "spread": false,
//     "href": "user.html"
//   }, {
//     "title": "日志管理",
//     "spread": false,
//     "href": "log.html"
//   },
//   {
//     "title": "邀请码管理",
//     "spread": false,
//     "children": [
//       {
//         "title": "邀请码列表",
//         "spread": false,
//         "href": "record/inviteCode.html"
//       }, {
//         "title": "生成邀请码",
//         "spread": false,
//         "href": "record/generateInviteCode.html"
//       }, {
//         "title": "最后生成",
//         "spread": false,
//         "href": "record/lastCode.html"
//       }, {
//         "title": "使用记录",
//         "spread": false,
//         "href": "record/frozenRecord.html?inviteCodeType=used"
//       }, {
//         "title": "冻结记录",
//         "spread": false,
//         "href": "record/frozenRecord.html?inviteCodeType=frozen"
//       }, {
//         "title": "异常记录",
//         "spread": false,
//         "href": "record/frozenRecord.html?inviteCodeType=exception&frozenBySystem=1"
//       }
//     ]
//   },
//   {
//     "title": "系统设置",
//     "spread": false,
//     "href": "setting.html",
//     "children": [
//       {
//         "title": "全局设置",
//         "spread": false,
//         "href": "setting.html",
//       },
//       {
//         "title": "证书设置",
//         "spread": false,
//         "href": "certificate.html",
//       },
//       {
//         "title": "产品设置",
//         "spread": false,
//         "href": "product.html",
//       }
//     ]
//   }
// ];

// var nav_user = [
//   {
//     "title": "首页",
//     "spread": false,
//     "href": "home.html"
//   }, {
//     "title": "用户管理",
//     "spread": false,
//     "href": "user.html"
//   }, {
//     "title": "日志管理",
//     "spread": false,
//     "href": "log.html"
//   }, {
//     "title": "邀请码管理",
//     "spread": false,
//     "children": [
//       {
//         "title": "邀请码列表",
//         "spread": false,
//         "href": "record/inviteCode.html"
//       }, {
//         "title": "生成邀请码",
//         "spread": false,
//         "href": "record/generateInviteCode.html"
//       }, {
//         "title": "最后生成",
//         "spread": false,
//         "href": "record/lastCode.html"
//       }, {
//         "title": "使用记录",
//         "spread": false,
//         "href": "record/frozenRecord.html?inviteCodeType=used"
//       }, {
//         "title": "冻结记录",
//         "spread": false,
//         "href": "record/frozenRecord.html?inviteCodeType=frozen"
//       }, {
//         "title": "异常记录",
//         "spread": false,
//         "href": "record/frozenRecord.html?inviteCodeType=exception&frozenBySystem=1"
//       }
//     ]
//   }
// ];
