(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-537a5e38"],{"64c4":function(e,t,n){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},b8b9:function(e,t,n){"use strict";var i=n("64c4"),a=n.n(i);a.a},db31:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0===Object.keys(e.interfaceOptions).length?n("v-notice",[e._v("\n  "+e._s(e.$t("interface_has_no_options"))+"\n")]):e.interfaceOptions?n("form",{on:{submit:function(e){e.preventDefault()}}},e._l(e.interfaceOptions,function(t,i){return n("div",{key:i,staticClass:"options"},[n("label",{attrs:{for:i}},[e._v(e._s(t.name))]),n("v-ext-input",{attrs:{id:t.interface,name:i,type:t.type,length:t.length,readonly:t.readonly,required:t.required,loading:t.loading,options:t.options,value:(e.value||{})[i],fields:e.interfaceOptions,values:e.value||{}},on:{input:function(t){return e.stageValue(i,t)}}}),n("p",{staticClass:"note",domProps:{innerHTML:e._s(e.$helpers.snarkdown(t.comment||""))}})],1)}),0):n("v-notice",[e._v("\n  "+e._s(e.$t("select_interface"))+"\n")])},a=[],o=n("bd86"),r=(n("ac6a"),n("8db2")),l=n.n(r),s={name:"InterfaceOptions",mixins:[l.a],computed:{interfaceName:function(){var e=this.options.interfaceField;if(e)return this.values[e]},interfaceOptions:function(){if(this.interfaceName)return this.$store.state.extensions.interfaces[this.interfaceName].options}},methods:{stageValue:function(e,t){var n=_.clone(this.value||{}),i=_.merge(n,Object(o["a"])({},e,t));this.$emit("input",i)}}},u=s,c=(n("b8b9"),n("2877")),p=Object(c["a"])(u,i,a,!1,null,"0f08e73b",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-537a5e38.0616e1b7.js.map