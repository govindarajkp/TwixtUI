"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[8481],{"./stories/PopoverButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPopover:()=>CustomPopover,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PopoverButton_stories});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var TwixtPopoverButton=function(param){var _param_buttonText=param.buttonText,buttonText=void 0===_param_buttonText?"Click to popover":_param_buttonText,_param_title=param.title,title=void 0===_param_title?"Default Title":_param_title,_param_content=param.content,content=void 0===_param_content?"Default Content":_param_content,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1];return react.createElement("div",{className:"relative inline-block"},react.createElement("button",{type:"button",className:"px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600",onClick:function(){setIsOpen(!isOpen)}},buttonText),isOpen&&react.createElement("div",{className:"absolute z-10 mt-2 w-64 bg-white rounded-lg shadow-lg"},react.createElement("div",{className:"text-white text-lg text-center font-semibold mb-2 bg-blue-500 rounded p-2"},title),react.createElement("div",{className:"p-4"},content)))};const Popover=TwixtPopoverButton;TwixtPopoverButton.__docgenInfo={description:"",methods:[],displayName:"TwixtPopoverButton",props:{buttonText:{defaultValue:{value:"'Click to popover'",computed:!1},required:!1},title:{defaultValue:{value:"'Default Title'",computed:!1},required:!1},content:{defaultValue:{value:"'Default Content'",computed:!1},required:!1}}};const PopoverButton_stories={title:"Common/TwixtPopoverButton",component:Popover,argTypes:{buttonText:{control:"text",description:"Text displayed on the button",defaultValue:"Click to popover"},title:{control:"text",description:"Title displayed in the popover",defaultValue:"Default Title"},content:{control:"text",description:"Content displayed in the popover",defaultValue:"Default Content"}}};var Template=function(args){return react.createElement(Popover,args)},Default=Template.bind({});Default.args={buttonText:"Click to popover",title:"Default Title",content:"Default Content"};var CustomPopover=Template.bind({});CustomPopover.args={buttonText:"Show Popover",title:"Custom Title",content:"This is some custom content inside the popover."};const __namedExportsOrder=["Default","CustomPopover"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TwixtPopoverButton {...args} />",...Default.parameters?.docs?.source}}},CustomPopover.parameters={...CustomPopover.parameters,docs:{...CustomPopover.parameters?.docs,source:{originalSource:"args => <TwixtPopoverButton {...args} />",...CustomPopover.parameters?.docs?.source}}}}}]);