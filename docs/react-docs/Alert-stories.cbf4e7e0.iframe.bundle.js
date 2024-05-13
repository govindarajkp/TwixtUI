"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[167],{"./stories/Alert.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Announcement:()=>Announcement,BackgroundChange:()=>BackgroundChange,BorderColorChange:()=>BorderColorChange,ErrorNotice:()=>ErrorNotice,IncreasePadding:()=>IncreasePadding,Notification:()=>Notification,TextColorChange:()=>TextColorChange,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Common/TwixtAlert",component:__webpack_require__("../react/src/Alert.js").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{title:"Welcome to Twixt React Alert Component",desc:"Explore the Alert for improved layout designed to enhance your experience."}};var Announcement={args:{title:"Welcome",desc:"Explore the Alert for improved layout designed to enhance your experience."}},ErrorNotice={args:{title:"Notice",desc:"We are currently experiencing technical difficulties with our app. Please be patient as we work to resolve this issue."}},Notification={args:{title:"Urgent Security Notification",desc:"We have detected unusual activity in some user accounts. Please reset your password immediately if you notice any suspicious activity."}},IncreasePadding={args:{title:"Increase Padding Title",desc:"Desc goes here",overwriteClass:"bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-7"}},BackgroundChange={args:{title:"Change Background color",desc:"Desc goes here",overwriteClass:"bg-yellow-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2"}},BorderColorChange={args:{title:"Change Border Change",desc:"Desc goes here",overwriteClass:"bg-orange-100 border-l-4 border-blue-500 text-orange-700 mx-4 p-2"}},TextColorChange={args:{title:"Change Text Color",desc:"Desc goes here",overwriteClass:"bg-orange-100 border-l-4 border-orange-500 text-black-700 mx-4 p-2"}};Announcement.parameters={...Announcement.parameters,docs:{...Announcement.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Welcome',\n    desc: 'Explore the Alert for improved layout designed to enhance your experience.'\n  }\n}",...Announcement.parameters?.docs?.source}}},ErrorNotice.parameters={...ErrorNotice.parameters,docs:{...ErrorNotice.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Notice',\n    desc: 'We are currently experiencing technical difficulties with our app. Please be patient as we work to resolve this issue.'\n  }\n}",...ErrorNotice.parameters?.docs?.source}}},Notification.parameters={...Notification.parameters,docs:{...Notification.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Urgent Security Notification',\n    desc: 'We have detected unusual activity in some user accounts. Please reset your password immediately if you notice any suspicious activity.'\n  }\n}",...Notification.parameters?.docs?.source}}},IncreasePadding.parameters={...IncreasePadding.parameters,docs:{...IncreasePadding.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Increase Padding Title',\n    desc: 'Desc goes here',\n    overwriteClass: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-7'\n  }\n}",...IncreasePadding.parameters?.docs?.source}}},BackgroundChange.parameters={...BackgroundChange.parameters,docs:{...BackgroundChange.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Change Background color',\n    desc: 'Desc goes here',\n    overwriteClass: 'bg-yellow-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2'\n  }\n}",...BackgroundChange.parameters?.docs?.source}}},BorderColorChange.parameters={...BorderColorChange.parameters,docs:{...BorderColorChange.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Change Border Change',\n    desc: 'Desc goes here',\n    overwriteClass: 'bg-orange-100 border-l-4 border-blue-500 text-orange-700 mx-4 p-2'\n  }\n}",...BorderColorChange.parameters?.docs?.source}}},TextColorChange.parameters={...TextColorChange.parameters,docs:{...TextColorChange.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Change Text Color',\n    desc: 'Desc goes here',\n    overwriteClass: 'bg-orange-100 border-l-4 border-orange-500 text-black-700 mx-4 p-2'\n  }\n}",...TextColorChange.parameters?.docs?.source}}};const __namedExportsOrder=["Announcement","ErrorNotice","Notification","IncreasePadding","BackgroundChange","BorderColorChange","TextColorChange"]},"../react/src/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtAlert});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function TwixtAlert(param){var overwriteClass=param.overwriteClass,title=param.title,desc=param.desc,alertClasses=overwriteClass||"bg-orange-100 border-l-4 border-orange-500 text-orange-700 mx-4 p-2";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:alertClasses,role:"alert"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"font-bold"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,desc))}TwixtAlert.__docgenInfo={description:"",methods:[],displayName:"TwixtAlert"}}}]);