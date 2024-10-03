"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[6892],{"./stories/CallsToAction/Link.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultLink:()=>DefaultLink,LinkWithBadge:()=>LinkWithBadge,LinkWithBorder:()=>LinkWithBorder,LinkWithLefticon:()=>LinkWithLefticon,LinkWithRighticon:()=>LinkWithRighticon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_src_CallsToAction_Link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/CallsToAction/Link/index.js"),_react_src_Communications_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/src/Communications/Badge/index.js"),_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/src/Icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Call To Action/TwixtLink",component:_react_src_CallsToAction_Link__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{type:{name:"string",required:!1},description:"Tailwind text color class",defaultValue:"text-blue-500"},onClick:{action:"clicked",description:"Function to be called when the link is clicked"},background:{type:{name:"string",required:!1},description:"Tailwind background color class",defaultValue:""},link:{type:{name:"string",required:!1},description:"URL the link points to",defaultValue:"#"},label:{type:{name:"string",required:!0},description:"The content of the link",defaultValue:"Link"},overwriteClass:{type:{name:"string",required:!1},description:"Additional CSS classes to overwrite the default ones",defaultValue:""}}};var DefaultLink={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI"}},LinkWithLefticon={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"pin",variant:"filled",size:"12",color:"color"})}},LinkWithRighticon={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",rightIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"chevronDown",variant:"filled",size:"12",color:"color"})}},LinkWithBadge={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"pin",variant:"filled",size:"12",color:"color"}),rightContent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Communications_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{value:"2"})}},LinkWithBorder={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"pin",variant:"filled",size:"12",color:"color"}),rightContent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Communications_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{value:"2"}),overwriteClass:"rounded border"}};const __namedExportsOrder=["DefaultLink","LinkWithLefticon","LinkWithRighticon","LinkWithBadge","LinkWithBorder"];DefaultLink.parameters={...DefaultLink.parameters,docs:{...DefaultLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Go to TwixtUI',\n    link: 'https://github.com/web-slate/TwixtUI'\n  }\n}",...DefaultLink.parameters?.docs?.source}}},LinkWithLefticon.parameters={...LinkWithLefticon.parameters,docs:{...LinkWithLefticon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />\n  }\n}',...LinkWithLefticon.parameters?.docs?.source}}},LinkWithRighticon.parameters={...LinkWithRighticon.parameters,docs:{...LinkWithRighticon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    rightIcon: <TwixtIcon type="chevronDown" variant="filled" size="12" color="color" />\n  }\n}',...LinkWithRighticon.parameters?.docs?.source}}},LinkWithBadge.parameters={...LinkWithBadge.parameters,docs:{...LinkWithBadge.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />,\n    rightContent: <TwixtBadge value="2" />\n  }\n}',...LinkWithBadge.parameters?.docs?.source}}},LinkWithBorder.parameters={...LinkWithBorder.parameters,docs:{...LinkWithBorder.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />,\n    rightContent: <TwixtBadge value="2" />,\n    overwriteClass: \'rounded border\'\n  }\n}',...LinkWithBorder.parameters?.docs?.source}}}},"../react/src/CallsToAction/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function TwixtLink(param){var _param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"text-blue-500":_param_color,_param_link=param.link,link=void 0===_param_link?"#":_param_link,onClick=param.onClick,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_appendClass=param.appendClass,appendClass=void 0===_param_appendClass?"":_param_appendClass,label=param.label,leftIcon=param.leftIcon,rightIcon=param.rightIcon,rightContent=param.rightContent,target=param.target;if(!label)return null;var classNames=overwriteClass||"inline-flex items-center gap-2 ".concat(background," ").concat(color," ").concat(appendClass);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:link,className:classNames,onClick,target},leftIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,leftIcon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label),rightIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,rightIcon),rightContent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,rightContent))}TwixtLink.__docgenInfo={description:"",methods:[],displayName:"TwixtLink",props:{background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"'text-blue-500'",computed:!1},required:!1},link:{defaultValue:{value:"'#'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},appendClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/CallsToAction/Link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Link__WEBPACK_IMPORTED_MODULE_0__.A});var _Link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../react/src/CallsToAction/Link/Link.js")},"../react/src/Communications/Badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Badge_Badge});var react=__webpack_require__("./node_modules/react/index.js"),BoxItem=__webpack_require__("../react/src/Containers/BoxItem/index.js"),Badge=function(param){var _param_type=param.type,type=void 0===_param_type?"block":_param_type,value=param.value,status=param.status,overwriteClass=param.overwriteClass,leftIcon=param.leftIcon,rightIcon=param.rightIcon,badgeClasses=overwriteClass||"inline-flex items-center px-3 py-1 text-white font-semibold text-sm rounded-full ".concat({default:"bg-gray-500",active:"bg-blue-500",success:"bg-green-500",error:"bg-red-500",warning:"bg-orange-500",yellow:"bg-yellow-500",magenta:"bg-pink-500",purple:"bg-purple-500",teal:"bg-teal-500",cyan:"bg-cyan-500"}[status]||"bg-gray-500");return react.createElement(BoxItem.A,{type,overwriteClass:badgeClasses},leftIcon&&react.createElement("span",{className:"mr-2 flex items-center"},leftIcon),react.createElement("span",null,value),rightIcon&&react.createElement("span",{className:"ml-2 flex items-center"},rightIcon))};const Badge_Badge=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{defaultValue:{value:"'block'",computed:!1},required:!1}}}},"../react/src/Containers/BoxItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BoxItem_BoxItem});var react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function BoxItem(_param){var _param_type=_param.type,type=void 0===_param_type?"block":_param_type,children=_param.children,_param_overwriteClass=_param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,props=_object_without_properties(_param,["type","children","overwriteClass"]);return"block"==type?react.createElement("div",_object_spread({className:overwriteClass},props),children):"inline"==type?react.createElement("span",_object_spread({className:overwriteClass},props),children):null}const BoxItem_BoxItem=BoxItem;BoxItem.__docgenInfo={description:"",methods:[],displayName:"BoxItem",props:{type:{defaultValue:{value:"'block'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_fi__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../react/node_modules/react-icons/fi/index.mjs"),react_icons_io__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../react/node_modules/react-icons/io/index.mjs"),react_icons_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../react/node_modules/react-icons/md/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_io5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/io5/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={home:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.oKG,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.M14},notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.TVP},file:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Gp9,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.t69},lock:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.JhU,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.nQ7},send:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.ylI,outline:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoSendOutline},share:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.eb3,outline:null},user:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.VGZ},userSlashed:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.vYY,outline:null},userGraduate:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.mFx,outline:null},userGroup:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaUserGroup,outline:null},office:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.ymh,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.IqM},mobile:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.rle,outline:null},mail:{filled:null,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.ep0},mic:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.i0t,outline:react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.Rrl,slashed:react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.Qnk},settings:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.ikl,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.GD},warning:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.qVL,outline:null},success:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.v_8,outline:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.LGE},error:{filled:react_icons_md__WEBPACK_IMPORTED_MODULE_7__._Jm,outline:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.ItP},info:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.__w,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.tEG},close:{filled:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.Tfw,outline:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.rOP}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"":_param_color,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color,className:overwriteClass})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"''",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}}}]);