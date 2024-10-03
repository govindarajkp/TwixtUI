"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[7136],{"./stories/List/Tabs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultActiveTab:()=>DefaultActiveTab,DefaultHorizontal:()=>DefaultHorizontal,TabsWithIcons:()=>TabsWithIcons,VerticalTabs:()=>VerticalTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),Link=__webpack_require__("../react/src/CallsToAction/Link/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Tabs=function(param){var items=param.items,_param_direction=param.direction,direction=void 0===_param_direction?"horizontal":_param_direction,_param_defaultActiveTab=param.defaultActiveTab,defaultActiveTab=void 0===_param_defaultActiveTab?0:_param_defaultActiveTab,_useState=(param.tabType,_sliced_to_array((0,react.useState)(defaultActiveTab),2)),activeTab=_useState[0],setActiveTab=_useState[1];(0,react.useEffect)((function(){setActiveTab(defaultActiveTab)}),[defaultActiveTab]);var renderIcon=function(Icon){return Icon?react.createElement(Icon,{className:"shrink-0 size-4"}):null};return react.createElement("div",{className:"tabs-component ".concat("vertical"===direction?"flex flex-wrap":"")},react.createElement("div",{className:"".concat("vertical"===direction?"border-e mr-2":"border-b"," border-gray-200 dark:border-neutral-700")},react.createElement("nav",{className:"flex ".concat("vertical"===direction?"flex-col space-y-4 pr-2":"gap-x-4"," "),"aria-label":"Tabs",role:"tablist","aria-orientation":direction},items.map((function(item,index){return react.createElement(Link.A,{key:index,label:item.label,leftIcon:renderIcon(item.leftIcon),rightIcon:renderIcon(item.rightIcon),appendClass:"p-2 ".concat(activeTab===index?"border-b border-b-blue-500":""),onClick:function(e){e.preventDefault(),setActiveTab(index)}})})))),react.createElement("div",{className:"mt-3"},items.map((function(item,index){return react.createElement("div",{key:index,id:"tab-panel-".concat(index),role:"tabpanel",className:activeTab===index?"":"hidden","aria-labelledby":"tab-item-".concat(index)},react.createElement("p",{className:"text-gray-500 dark:text-neutral-400"},item.content))}))))};const Tabs_Tabs=Tabs;Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},defaultActiveTab:{defaultValue:{value:"0",computed:!1},required:!1},tabType:{defaultValue:{value:'"underline"',computed:!1},required:!1}}};var Icon=__webpack_require__("../react/src/Icon.js"),Badge=__webpack_require__("../react/src/Communications/Badge/index.js");const Tabs_stories={title:"List/TwixtTabs",component:Tabs_Tabs,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}};var DefaultHorizontal=function(){return react.createElement(Tabs_Tabs,{items:[{label:"Tab 1",content:"This is the content for Tab 1."},{label:"Tab 2",content:"This is the content for Tab 2."},{label:"Tab 3",content:"This is the content for Tab 3."}],direction:"horizontal"})},VerticalTabs=function(){return react.createElement(Tabs_Tabs,{items:[{label:"Tab 1",content:"This is the content for Tab 1."},{label:"Tab 2",content:"This is the content for Tab 2."},{label:"Tab 3",content:"This is the content for Tab 3."}],direction:"vertical"})},DefaultActiveTab=function(){return react.createElement(Tabs_Tabs,{items:[{label:"Tab 1",content:"This is the content for Tab 1."},{label:"Tab 2",content:"This is the content for Tab 2."},{label:"Tab 3",content:"This is the content for Tab 3."}],direction:"horizontal",defaultActiveTab:1})},TabsWithIcons=function(){var items=[{label:"Inbox",content:"This is the content for Tab 1.",rightIcon:function(){return react.createElement(Badge.A,{status:"active",value:"99+"})}},{label:"Hub",content:"This is the content for Tab 2.",leftIcon:function(){return react.createElement(Icon.A,{type:"home",variant:"outline",size:18})}},{label:"Terminal",content:"This is the content for Tab 3.",leftIcon:function(){return react.createElement(Icon.A,{type:"terminal",variant:"filled",size:18})}},{label:"Notifications",content:"This is the content for Tab 4.",rightIcon:function(){return react.createElement(Icon.A,{type:"notification",variant:"filled",size:18})}}];return react.createElement(Tabs_Tabs,{items,direction:"horizontal"})};const __namedExportsOrder=["DefaultHorizontal","VerticalTabs","DefaultActiveTab","TabsWithIcons"];DefaultHorizontal.parameters={...DefaultHorizontal.parameters,docs:{...DefaultHorizontal.parameters?.docs,source:{originalSource:"() => {\n  const items = [{\n    label: 'Tab 1',\n    content: 'This is the content for Tab 1.'\n  }, {\n    label: 'Tab 2',\n    content: 'This is the content for Tab 2.'\n  }, {\n    label: 'Tab 3',\n    content: 'This is the content for Tab 3.'\n  }];\n  return <TwixtTabs items={items} direction=\"horizontal\" />;\n}",...DefaultHorizontal.parameters?.docs?.source}}},VerticalTabs.parameters={...VerticalTabs.parameters,docs:{...VerticalTabs.parameters?.docs,source:{originalSource:"() => {\n  const items = [{\n    label: 'Tab 1',\n    content: 'This is the content for Tab 1.'\n  }, {\n    label: 'Tab 2',\n    content: 'This is the content for Tab 2.'\n  }, {\n    label: 'Tab 3',\n    content: 'This is the content for Tab 3.'\n  }];\n  return <TwixtTabs items={items} direction=\"vertical\" />;\n}",...VerticalTabs.parameters?.docs?.source}}},DefaultActiveTab.parameters={...DefaultActiveTab.parameters,docs:{...DefaultActiveTab.parameters?.docs,source:{originalSource:"() => {\n  const items = [{\n    label: 'Tab 1',\n    content: 'This is the content for Tab 1.'\n  }, {\n    label: 'Tab 2',\n    content: 'This is the content for Tab 2.'\n  }, {\n    label: 'Tab 3',\n    content: 'This is the content for Tab 3.'\n  }];\n  return <TwixtTabs items={items} direction=\"horizontal\" defaultActiveTab={1} />;\n}",...DefaultActiveTab.parameters?.docs?.source}}},TabsWithIcons.parameters={...TabsWithIcons.parameters,docs:{...TabsWithIcons.parameters?.docs,source:{originalSource:'() => {\n  const items = [{\n    label: \'Inbox\',\n    content: \'This is the content for Tab 1.\',\n    rightIcon: () => <TwixtBadge status="active" value="99+" />\n  }, {\n    label: \'Hub\',\n    content: \'This is the content for Tab 2.\',\n    leftIcon: () => <TwixtIcon type="home" variant="outline" size={18} />\n  }, {\n    label: \'Terminal\',\n    content: \'This is the content for Tab 3.\',\n    leftIcon: () => <TwixtIcon type="terminal" variant="filled" size={18} />\n  }, {\n    label: \'Notifications\',\n    content: \'This is the content for Tab 4.\',\n    rightIcon: () => <TwixtIcon type="notification" variant="filled" size={18} />\n  }];\n  return <TwixtTabs items={items} direction="horizontal" />;\n}',...TabsWithIcons.parameters?.docs?.source}}}},"../react/src/CallsToAction/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function TwixtLink(param){var _param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"text-blue-500":_param_color,_param_link=param.link,link=void 0===_param_link?"#":_param_link,onClick=param.onClick,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,_param_appendClass=param.appendClass,appendClass=void 0===_param_appendClass?"":_param_appendClass,label=param.label,leftIcon=param.leftIcon,rightIcon=param.rightIcon,rightContent=param.rightContent,target=param.target;if(!label)return null;var classNames=overwriteClass||"inline-flex items-center gap-2 ".concat(background," ").concat(color," ").concat(appendClass);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:link,className:classNames,onClick,target},leftIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,leftIcon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label),rightIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,rightIcon),rightContent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,rightContent))}TwixtLink.__docgenInfo={description:"",methods:[],displayName:"TwixtLink",props:{background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"'text-blue-500'",computed:!1},required:!1},link:{defaultValue:{value:"'#'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1},appendClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/CallsToAction/Link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_Link__WEBPACK_IMPORTED_MODULE_0__.A});var _Link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../react/src/CallsToAction/Link/Link.js")},"../react/src/Communications/Badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Badge_Badge});var react=__webpack_require__("./node_modules/react/index.js"),BoxItem=__webpack_require__("../react/src/Containers/BoxItem/index.js"),Badge=function(param){var _param_type=param.type,type=void 0===_param_type?"block":_param_type,value=param.value,status=param.status,overwriteClass=param.overwriteClass,leftIcon=param.leftIcon,rightIcon=param.rightIcon,badgeClasses=overwriteClass||"inline-flex items-center px-3 py-1 text-white font-semibold text-sm rounded-full ".concat({default:"bg-gray-500",active:"bg-blue-500",success:"bg-green-500",error:"bg-red-500",warning:"bg-orange-500",yellow:"bg-yellow-500",magenta:"bg-pink-500",purple:"bg-purple-500",teal:"bg-teal-500",cyan:"bg-cyan-500"}[status]||"bg-gray-500");return react.createElement(BoxItem.A,{type,overwriteClass:badgeClasses},leftIcon&&react.createElement("span",{className:"mr-2 flex items-center"},leftIcon),react.createElement("span",null,value),rightIcon&&react.createElement("span",{className:"ml-2 flex items-center"},rightIcon))};const Badge_Badge=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{defaultValue:{value:"'block'",computed:!1},required:!1}}}},"../react/src/Containers/BoxItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BoxItem_BoxItem});var react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function BoxItem(_param){var _param_type=_param.type,type=void 0===_param_type?"block":_param_type,children=_param.children,_param_overwriteClass=_param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,props=_object_without_properties(_param,["type","children","overwriteClass"]);return"block"==type?react.createElement("div",_object_spread({className:overwriteClass},props),children):"inline"==type?react.createElement("span",_object_spread({className:overwriteClass},props),children):null}const BoxItem_BoxItem=BoxItem;BoxItem.__docgenInfo={description:"",methods:[],displayName:"BoxItem",props:{type:{defaultValue:{value:"'block'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_fi__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../react/node_modules/react-icons/fi/index.mjs"),react_icons_io__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../react/node_modules/react-icons/io/index.mjs"),react_icons_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../react/node_modules/react-icons/md/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_io5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/io5/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={home:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.oKG,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.M14},notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_4__.TVP},file:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.Gp9,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.t69},lock:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.JhU,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.nQ7},send:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.ylI,outline:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoSendOutline},share:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.eb3,outline:null},user:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.VGZ},userSlashed:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.vYY,outline:null},userGraduate:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.mFx,outline:null},userGroup:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaUserGroup,outline:null},office:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.ymh,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.IqM},mobile:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.rle,outline:null},mail:{filled:null,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.ep0},mic:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.i0t,outline:react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.Rrl,slashed:react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.Qnk},settings:{filled:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.ikl,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.GD},warning:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.qVL,outline:null},success:{filled:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.v_8,outline:react_icons_io__WEBPACK_IMPORTED_MODULE_5__.LGE},error:{filled:react_icons_md__WEBPACK_IMPORTED_MODULE_7__._Jm,outline:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.ItP},info:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.__w,outline:react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.tEG},close:{filled:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.Tfw,outline:react_icons_md__WEBPACK_IMPORTED_MODULE_7__.rOP}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"":_param_color,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color,className:overwriteClass})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"''",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}}}]);