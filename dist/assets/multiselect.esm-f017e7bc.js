import{s as U,o as a,c as d,m as S,a as r,U as H,Z as T,A as c,D as p,O as q,C as j,B as Z,R as W,E as J,d as Q,G as X,H as Y,h as $,I as ee,J as te,n as f,r as u,F as I,u as k,t as b,p as B,K as R,j as x,i as m,k as C,l as E,w,T as ie,q as P,L as le,M as F,y as K,z as se}from"./index-89264d92.js";var G={name:"SearchIcon",extends:U};const ne=r("g",{"clip-path":"url(#clip0_238_9909)"},[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"})],-1),oe=r("defs",null,[r("clipPath",{id:"clip0_238_9909"},[r("rect",{width:"14",height:"14",fill:"white"})])],-1),ae=[ne,oe];function re(e,t,i,o,n,l){return a(),d("svg",S({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),ae,16)}G.render=re;var de={name:"MultiSelect",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},placeholder:String,disabled:Boolean,inputId:{type:String,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},closeButtonProps:{type:null,default:null},dataKey:null,filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:String,default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:"{0} items selected"},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,focusOnHover:!1,data(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,headerCheckboxFocused:!1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||H()},options(){this.autoUpdateModel()}},mounted(){this.id=this.id||H(),this.autoUpdateModel()},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(T.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?c.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?c.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?c.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.maxSelectionLimitReached&&!this.isSelected(e)?!0:this.optionDisabled?c.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return c.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return c.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&p.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&p.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.disabled||(this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(e.code==="KeyA"&&t){const i=this.visibleOptions.filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(e,i),e.preventDefault();break}!t&&c.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e),e.preventDefault());break}},onContainerClick(e){this.disabled||this.loading||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onFirstHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?p.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;p.focus(t)},onLastHiddenFocus(e){const t=e.relatedTarget===this.$refs.focusInput?p.getLastFocusableElement(this.overlay,":not(.p-hidden-focusable)"):this.$refs.focusInput;p.focus(t)},onCloseClick(){this.hide(!0)},onHeaderCheckboxFocus(){this.headerCheckboxFocused=!0},onHeaderCheckboxBlur(){this.headerCheckboxFocused=!1},onOptionSelect(e,t,i=-1,o=!1){if(this.disabled||this.isOptionDisabled(t))return;let n=this.isSelected(t),l=null;n?l=this.modelValue.filter(y=>!c.equals(y,this.getOptionValue(t),this.equalityKey)):l=[...this.modelValue||[],this.getOptionValue(t)],this.updateModel(e,l),i!==-1&&(this.focusedOptionIndex=i),o&&p.focus(this.$refs.focusInput)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onOptionSelectRange(e,t=-1,i=-1){if(t===-1&&(t=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(t)),t!==-1&&i!==-1){const o=Math.min(t,i),n=Math.max(t,i),l=this.visibleOptions.slice(o,n+1).filter(y=>this.isValidOption(y)).map(y=>this.getOptionValue(y));this.updateModel(e,l)}},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){q.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,t),this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){const{currentTarget:i}=e;if(t){const o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1}else{let o=e.metaKey||e.ctrlKey,n=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show()}e.preventDefault()},onEndKey(e,t=!1){const{currentTarget:i}=e;if(t){const o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1}else{let o=e.metaKey||e.ctrlKey,n=this.findLastOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex,n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show()}e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?this.focusedOptionIndex!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])):this.onArrowDownKey(e),e.preventDefault()},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(p.focus(e.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter(e){T.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&p.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){T.clear(e)},alignOverlay(){this.appendTo==="self"?p.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=p.getOuterWidth(this.$el)+"px",p.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.isOutsideClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new j(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!p.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target)||this.overlay&&this.overlay.contains(e.target))},getLabelByValue(e){const i=(this.optionGroupLabel?this.flatOptions(this.options):this.options||[]).find(o=>!this.isOptionGroup(o)&&c.equals(this.getOptionValue(o),e,this.equalityKey));return i?this.getOptionLabel(i):null},getSelectedItemsLabel(){let e=/{(.*?)}/;return e.test(this.selectedItemsLabel)?this.selectedItemsLabel.replace(this.selectedItemsLabel.match(e)[0],this.modelValue.length+""):this.selectedItemsLabel},onToggleAll(e){if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:e,checked:!this.allSelected});else{const t=this.allSelected?[]:this.visibleOptions.filter(i=>this.isValidOption(i)).map(i=>this.getOptionValue(i));this.updateModel(e,t)}this.headerCheckboxFocused=!0},removeOption(e,t){let i=this.modelValue.filter(o=>!c.equals(o,t,this.equalityKey));this.updateModel(e,i)},clearFilter(){this.filterValue=null},hasFocusableElements(){return p.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){const t=this.getOptionValue(e);return(this.modelValue||[]).some(i=>c.equals(i,t,this.equalityKey))},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return c.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?c.findLastIndex(this.visibleOptions.slice(0,e),i=>this.isValidOption(i)):-1;return t>-1?t:e},findFirstSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findLastSelectedOptionIndex(){return this.hasSelectedOption?c.findLastIndex(this.visibleOptions,e=>this.isValidSelectedOption(e)):-1},findNextSelectedOptionIndex(e){const t=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return t>-1?t+e+1:-1},findPrevSelectedOptionIndex(e){const t=this.hasSelectedOption&&e>0?c.findLastIndex(this.visibleOptions.slice(0,e),i=>this.isValidSelectedOption(i)):-1;return t>-1?t:-1},findNearestSelectedOptionIndex(e,t=!1){let i=-1;return this.hasSelectedOption&&(t?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e},findFirstFocusedOptionIndex(){const e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e){this.searchValue=(this.searchValue||"")+e.key;let t=-1;this.focusedOptionIndex!==-1?(t=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)),t=t===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(i=>this.isOptionMatched(i)):t+this.focusedOptionIndex):t=this.visibleOptions.findIndex(i=>this.isOptionMatched(i)),t===-1&&this.focusedOptionIndex===-1&&(t=this.findFirstFocusedOptionIndex()),t!==-1&&this.changeFocusedOptionIndex(e,t),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500)},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,i=p.findSingle(this.list,`li[id="${t}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption){this.focusedOptionIndex=this.findFirstFocusedOptionIndex();const e=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[e])}},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,i,o)=>{t.push({optionGroup:i,group:!0,index:o});const n=this.getOptionGroupChildren(i);return n&&n.forEach(l=>t.push(l)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-multiselect p-component p-inputwrapper",{"p-multiselect-chip":this.display==="chip","p-disabled":this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue&&this.modelValue.length,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},labelClass(){return["p-multiselect-label",{"p-placeholder":this.label===this.placeholder,"p-multiselect-label-empty":!this.placeholder&&(!this.modelValue||this.modelValue.length===0)}]},panelStyleClass(){return["p-multiselect-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},headerCheckboxClass(){return["p-checkbox p-component",{"p-checkbox-checked":this.allSelected,"p-checkbox-focused":this.headerCheckboxFocused}]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){const t=Z.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){const i=this.options||[],o=[];return i.forEach(n=>{const y=this.getOptionGroupChildren(n).filter(M=>t.includes(M));y.length>0&&o.push({...n,[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...y]})}),this.flatOptions(o)}return t}return e},label(){let e;if(this.modelValue&&this.modelValue.length){if(c.isNotEmpty(this.maxSelectedLabels)&&this.modelValue.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();e="";for(let t=0;t<this.modelValue.length;t++)t!==0&&(e+=", "),e+=this.getLabelByValue(this.modelValue[t])}else e=this.placeholder;return e},chipSelectedItems(){return c.isNotEmpty(this.maxSelectedLabels)&&this.modelValue&&this.modelValue.length>this.maxSelectedLabels?this.modelValue.slice(0,this.maxSelectedLabels):this.modelValue},allSelected(){return this.selectAll!==null?this.selectAll:c.isNotEmpty(this.visibleOptions)&&this.visibleOptions.every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))},hasSelectedOption(){return c.isNotEmpty(this.modelValue)},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue&&this.modelValue.length===this.selectionLimit},filterResultMessageText(){return c.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.modelValue.length):this.emptySelectionMessageText},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},toggleAllAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:W},components:{VirtualScroller:J,Portal:Q,TimesIcon:X,SearchIcon:G,TimesCircleIcon:Y,ChevronDownIcon:$,SpinnerIcon:ee,CheckIcon:te}};const ce={class:"p-hidden-accessible"},he=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],ue={class:"p-multiselect-label-container"},pe={class:"p-multiselect-token-label"},fe=["onClick"],ye={class:"p-multiselect-trigger"},be={key:0,class:"p-multiselect-header"},me={class:"p-hidden-accessible"},ge=["checked","aria-label"],Oe={key:1,class:"p-multiselect-filter-container"},ve=["value","placeholder","aria-owns","aria-activedescendant"],xe={key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},Ie=["aria-label"],Se=["id"],ke=["id"],Ce=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],Le={class:"p-checkbox p-component"},Ve={key:0,class:"p-multiselect-empty-message",role:"option"},we={key:1,class:"p-multiselect-empty-message",role:"option"},Fe={key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},Ke={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function Me(e,t,i,o,n,l){const y=K("TimesCircleIcon"),M=K("SpinnerIcon"),_=K("VirtualScroller"),N=K("Portal"),A=se("ripple");return a(),d("div",{ref:"container",class:f(l.containerClass),onClick:t[15]||(t[15]=(...s)=>l.onContainerClick&&l.onContainerClick(...s))},[r("div",ce,[r("input",S({ref:"focusInput",id:i.inputId,type:"text",readonly:"",disabled:i.disabled,placeholder:i.placeholder,tabindex:i.disabled?-1:i.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":n.overlayVisible,"aria-controls":n.id+"_list","aria-activedescendant":n.focused?l.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...s)=>l.onFocus&&l.onFocus(...s)),onBlur:t[1]||(t[1]=(...s)=>l.onBlur&&l.onBlur(...s)),onKeydown:t[2]||(t[2]=(...s)=>l.onKeyDown&&l.onKeyDown(...s))},i.inputProps),null,16,he)]),r("div",ue,[r("div",{class:f(l.labelClass)},[u(e.$slots,"value",{value:i.modelValue,placeholder:i.placeholder},()=>[i.display==="comma"?(a(),d(I,{key:0},[k(b(l.label||"empty"),1)],64)):i.display==="chip"?(a(),d(I,{key:1},[(a(!0),d(I,null,B(l.chipSelectedItems,s=>(a(),d("div",{key:l.getLabelByValue(s),class:"p-multiselect-token"},[u(e.$slots,"chip",{value:s},()=>[r("span",pe,b(l.getLabelByValue(s)),1)]),i.disabled?m("",!0):u(e.$slots,"removetokenicon",{key:0,class:"p-multiselect-token-icon",onClick:v=>l.removeOption(v,s)},()=>[i.removeTokenIcon?(a(),d("span",{key:0,class:f(["p-multiselect-token-icon",i.removeTokenIcon]),onClick:R(v=>l.removeOption(v,s),["stop"])},null,10,fe)):(a(),x(y,{key:1,class:"p-multiselect-token-icon",onClick:R(v=>l.removeOption(v,s),["stop"])},null,8,["onClick"]))])]))),128)),!i.modelValue||i.modelValue.length===0?(a(),d(I,{key:0},[k(b(i.placeholder||"empty"),1)],64)):m("",!0)],64)):m("",!0)])],2)]),r("div",ye,[i.loading?u(e.$slots,"loadingicon",{key:0,class:"p-multiselect-trigger-icon"},()=>[i.loadingIcon?(a(),d("span",{key:0,class:f(["p-multiselect-trigger-icon pi-spin",i.loadingIcon]),"aria-hidden":"true"},null,2)):(a(),x(M,{key:1,class:"p-multiselect-trigger-icon",spin:"","aria-hidden":"true"}))]):u(e.$slots,"dropdownicon",{key:1,class:"p-multiselect-trigger-icon"},()=>[(a(),x(C(i.dropdownIcon?"span":"ChevronDownIcon"),{class:f(["p-multiselect-trigger-icon",i.dropdownIcon]),"aria-hidden":"true"},null,8,["class"]))])]),E(N,{appendTo:i.appendTo},{default:w(()=>[E(ie,{name:"p-connected-overlay",onEnter:l.onOverlayEnter,onAfterEnter:l.onOverlayAfterEnter,onLeave:l.onOverlayLeave,onAfterLeave:l.onOverlayAfterLeave},{default:w(()=>[n.overlayVisible?(a(),d("div",S({key:0,ref:l.overlayRef,style:i.panelStyle,class:l.panelStyleClass,onClick:t[13]||(t[13]=(...s)=>l.onOverlayClick&&l.onOverlayClick(...s)),onKeydown:t[14]||(t[14]=(...s)=>l.onOverlayKeyDown&&l.onOverlayKeyDown(...s))},i.panelProps),[r("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=(...s)=>l.onFirstHiddenFocus&&l.onFirstHiddenFocus(...s))},null,544),u(e.$slots,"header",{value:i.modelValue,options:l.visibleOptions}),i.showToggleAll&&i.selectionLimit==null||i.filter?(a(),d("div",be,[i.showToggleAll&&i.selectionLimit==null?(a(),d("div",{key:0,class:f(l.headerCheckboxClass),onClick:t[6]||(t[6]=(...s)=>l.onToggleAll&&l.onToggleAll(...s))},[r("div",me,[r("input",{type:"checkbox",readonly:"",checked:l.allSelected,"aria-label":l.toggleAllAriaLabel,onFocus:t[4]||(t[4]=(...s)=>l.onHeaderCheckboxFocus&&l.onHeaderCheckboxFocus(...s)),onBlur:t[5]||(t[5]=(...s)=>l.onHeaderCheckboxBlur&&l.onHeaderCheckboxBlur(...s))},null,40,ge)]),r("div",{class:f(["p-checkbox-box",{"p-highlight":l.allSelected,"p-focus":n.headerCheckboxFocused}])},[u(e.$slots,"headercheckboxicon",{allSelected:l.allSelected,class:"p-checkbox-icon"},()=>[(a(),x(C(i.checkboxIcon?"span":"CheckIcon"),{class:f(["p-checkbox-icon",{[i.checkboxIcon]:l.allSelected}])},null,8,["class"]))])],2)],2)):m("",!0),i.filter?(a(),d("div",Oe,[r("input",S({ref:"filterInput",type:"text",value:n.filterValue,onVnodeUpdated:t[7]||(t[7]=(...s)=>l.onFilterUpdated&&l.onFilterUpdated(...s)),class:"p-multiselect-filter p-inputtext p-component",placeholder:i.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":n.id+"_list","aria-activedescendant":l.focusedOptionId,onKeydown:t[8]||(t[8]=(...s)=>l.onFilterKeyDown&&l.onFilterKeyDown(...s)),onBlur:t[9]||(t[9]=(...s)=>l.onFilterBlur&&l.onFilterBlur(...s)),onInput:t[10]||(t[10]=(...s)=>l.onFilterChange&&l.onFilterChange(...s))},i.filterInputProps),null,16,ve),u(e.$slots,"filtericon",{class:"p-multiselect-filter-icon"},()=>[(a(),x(C(i.filterIcon?"span":"SearchIcon"),{class:f(["p-multiselect-filter-icon",i.filterIcon])},null,8,["class"]))])])):m("",!0),i.filter?(a(),d("span",xe,b(l.filterResultMessageText),1)):m("",!0),P((a(),d("button",S({class:"p-multiselect-close p-link","aria-label":l.closeAriaLabel,onClick:t[11]||(t[11]=(...s)=>l.onCloseClick&&l.onCloseClick(...s)),type:"button"},i.closeButtonProps),[u(e.$slots,"closeicon",{class:"p-multiselect-close-icon"},()=>[(a(),x(C(i.closeIcon?"span":"TimesIcon"),{class:f(["p-multiselect-close-icon",i.closeIcon])},null,8,["class"]))])],16,Ie)),[[A]])])):m("",!0),r("div",{class:"p-multiselect-items-wrapper",style:F({"max-height":l.virtualScrollerDisabled?i.scrollHeight:""})},[E(_,S({ref:l.virtualScrollerRef},i.virtualScrollerOptions,{items:l.visibleOptions,style:{height:i.scrollHeight},tabindex:-1,disabled:l.virtualScrollerDisabled}),le({content:w(({styleClass:s,contentRef:v,items:L,getItemOptions:g,contentStyle:z,itemSize:V})=>[r("ul",{ref:h=>l.listRef(h,v),id:n.id+"_list",class:f(["p-multiselect-items p-component",s]),style:F(z),role:"listbox","aria-multiselectable":"true"},[(a(!0),d(I,null,B(L,(h,O)=>(a(),d(I,{key:l.getOptionRenderKey(h,l.getOptionIndex(O,g))},[l.isOptionGroup(h)?(a(),d("li",{key:0,id:n.id+"_"+l.getOptionIndex(O,g),style:F({height:V?V+"px":void 0}),class:"p-multiselect-item-group",role:"option"},[u(e.$slots,"optiongroup",{option:h.optionGroup,index:l.getOptionIndex(O,g)},()=>[k(b(l.getOptionGroupLabel(h.optionGroup)),1)])],12,ke)):P((a(),d("li",{key:1,id:n.id+"_"+l.getOptionIndex(O,g),style:F({height:V?V+"px":void 0}),class:f(["p-multiselect-item",{"p-highlight":l.isSelected(h),"p-focus":n.focusedOptionIndex===l.getOptionIndex(O,g),"p-disabled":l.isOptionDisabled(h)}]),role:"option","aria-label":l.getOptionLabel(h),"aria-selected":l.isSelected(h),"aria-disabled":l.isOptionDisabled(h),"aria-setsize":l.ariaSetSize,"aria-posinset":l.getAriaPosInset(l.getOptionIndex(O,g)),onClick:D=>l.onOptionSelect(D,h,l.getOptionIndex(O,g),!0),onMousemove:D=>l.onOptionMouseMove(D,l.getOptionIndex(O,g))},[r("div",Le,[r("div",{class:f(["p-checkbox-box",{"p-highlight":l.isSelected(h)}])},[u(e.$slots,"itemcheckboxicon",{selected:l.isSelected(h),class:"p-checkbox-icon"},()=>[(a(),x(C(i.checkboxIcon?"span":"CheckIcon"),{class:f(["p-checkbox-icon",{[i.checkboxIcon]:l.isSelected(h)}])},null,8,["class"]))])],2)]),u(e.$slots,"option",{option:h,index:l.getOptionIndex(O,g)},()=>[r("span",null,b(l.getOptionLabel(h)),1)])],46,Ce)),[[A]])],64))),128)),n.filterValue&&(!L||L&&L.length===0)?(a(),d("li",Ve,[u(e.$slots,"emptyfilter",{},()=>[k(b(l.emptyFilterMessageText),1)])])):!i.options||i.options&&i.options.length===0?(a(),d("li",we,[u(e.$slots,"empty",{},()=>[k(b(l.emptyMessageText),1)])])):m("",!0)],14,Se)]),_:2},[e.$slots.loader?{name:"loader",fn:w(({options:s})=>[u(e.$slots,"loader",{options:s})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),u(e.$slots,"footer",{value:i.modelValue,options:l.visibleOptions}),!i.options||i.options&&i.options.length===0?(a(),d("span",Fe,b(l.emptyMessageText),1)):m("",!0),r("span",Ke,b(l.selectedMessageText),1),r("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[12]||(t[12]=(...s)=>l.onLastHiddenFocus&&l.onLastHiddenFocus(...s))},null,544)],16)):m("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],2)}function De(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var Te=`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}
.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}
.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}
.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}
.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}
.p-multiselect-token-icon {
    cursor: pointer;
}
.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}
.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-multiselect-items-wrapper {
    overflow: auto;
}
.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-multiselect-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-multiselect-item-group {
    cursor: auto;
}
.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}
.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-multiselect-filter-container .p-inputtext {
    width: 100%;
}
.p-multiselect-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    margin-left: auto;
}
.p-fluid .p-multiselect {
    display: flex;
}
`;De(Te);de.render=Me;export{de as default};