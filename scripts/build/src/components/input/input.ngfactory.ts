/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './input';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../config/config';
import * as import9 from '../../util/form';
import * as import10 from '../item/item';
import * as import11 from '../app/app';
import * as import12 from '../../platform/platform';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '../content/content';
import * as import15 from '../../navigation/nav-controller';
import * as import16 from '@angular/forms/src/directives/ng_control';
import * as import17 from '@angular/core/src/linker/component_factory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '@angular/forms/src/directives/default_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from './native-input';
import * as import23 from '@angular/common/src/directives/ng_if';
import * as import24 from '../button/button';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '../button/button.ngfactory';
import * as import27 from '@angular/forms/src/directives/control_value_accessor';
import * as import28 from '@angular/core/src/metadata/view';
var renderType_TextInput_Host:import0.RenderComponentType = null;
class _View_TextInput_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _TextInput_0_4:import3.TextInput;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextInput_Host0,renderType_TextInput_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-input',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_TextInput0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TextInput_0_4 = new import3.TextInput(this.parentInjector.get(import8.Config),this.parentInjector.get(import9.Form),this.parentInjector.get(import10.Item,null),this.parentInjector.get(import11.App),this.parentInjector.get(import12.Platform),new import13.ElementRef(this._el_0),this.parentInjector.get(import14.Content,null),this.parentInjector.get(import15.NavController,null),this.parentInjector.get(import16.NgControl,null));
    this._appEl_0.initComponent(this._TextInput_0_4,[],compView_0);
    compView_0.create(this._TextInput_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TextInput) && (0 === requestNodeIndex))) { return this._TextInput_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._TextInput_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { this._TextInput_0_4.ngAfterContentChecked(); }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._TextInput_0_4.ngOnDestroy();
  }
}
function viewFactory_TextInput_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TextInput_Host === null)) { (renderType_TextInput_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_TextInput_Host0(viewUtils,parentInjector,declarationEl);
}
export const TextInputNgFactory:import17.ComponentFactory<import3.TextInput> = new import17.ComponentFactory<import3.TextInput>('ion-input',viewFactory_TextInput_Host0,import3.TextInput);
const styles_TextInput:any[] = [];
var renderType_TextInput:import0.RenderComponentType = null;
class _View_TextInput0 extends import1.AppView<import3.TextInput> {
  _viewQuery_NativeInput_0:import18.QueryList<any>;
  _viewQuery_NextInput_1:import18.QueryList<any>;
  _el_0:any;
  _DefaultValueAccessor_0_3:import19.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_0_4:any[];
  _NgModel_0_5:import20.NgModel;
  _NgControl_0_6:any;
  _NgControlStatus_0_7:import21.NgControlStatus;
  _NativeInput_0_8:import22.NativeInput;
  _anchor_1:any;
  private _appEl_1:import2.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import23.NgIf;
  _el_2:any;
  private _appEl_2:import2.AppElement;
  _Button_2_4:import24.Button;
  _anchor_3:any;
  private _appEl_3:import2.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import23.NgIf;
  private _expr_8:any;
  private _expr_9:any;
  private _expr_10:any;
  private _expr_11:any;
  private _expr_12:any;
  private _expr_13:any;
  private _expr_14:any;
  private _expr_15:any;
  private _expr_16:any;
  private _expr_17:any;
  private _expr_20:any;
  private _expr_21:any;
  private _expr_22:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextInput0,renderType_TextInput,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_NativeInput_0 = new import18.QueryList<any>();
    this._viewQuery_NextInput_1 = new import18.QueryList<any>();
    this._el_0 = this.renderer.createElement(parentRenderNode,'input',null);
    this.renderer.setElementAttribute(this._el_0,'class','text-input');
    this._DefaultValueAccessor_0_3 = new import19.DefaultValueAccessor(this.renderer,new import13.ElementRef(this._el_0));
    this._NG_VALUE_ACCESSOR_0_4 = [this._DefaultValueAccessor_0_3];
    this._NgModel_0_5 = new import20.NgModel(null,null,null,this._NG_VALUE_ACCESSOR_0_4);
    this._NgControl_0_6 = this._NgModel_0_5;
    this._NgControlStatus_0_7 = new import21.NgControlStatus(this._NgControl_0_6);
    this._NativeInput_0_8 = new import22.NativeInput(new import13.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import8.Config),this._NgControl_0_6);
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,null);
    this._appEl_1 = new import2.AppElement(1,null,this,this._anchor_1);
    this._TemplateRef_1_5 = new import25.TemplateRef_(this._appEl_1,viewFactory_TextInput1);
    this._NgIf_1_6 = new import23.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._el_2 = this.renderer.createElement(parentRenderNode,'button',null);
    this.renderer.setElementAttribute(this._el_2,'class','text-input-clear-icon');
    this.renderer.setElementAttribute(this._el_2,'clear','');
    this.renderer.setElementAttribute(this._el_2,'ion-button','');
    this.renderer.setElementAttribute(this._el_2,'type','button');
    this._appEl_2 = new import2.AppElement(2,null,this,this._el_2);
    var compView_2:any = import26.viewFactory_Button0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Button_2_4 = new import24.Button('',this.parentInjector.get(import8.Config),new import13.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Button_2_4,[],compView_2);
    compView_2.create(this._Button_2_4,[[]],null);
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,null);
    this._appEl_3 = new import2.AppElement(3,null,this,this._anchor_3);
    this._TemplateRef_3_5 = new import25.TemplateRef_(this._appEl_3,viewFactory_TextInput2);
    this._NgIf_3_6 = new import23.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'ngModelChange',this.eventHandler(this._handle_ngModelChange_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'input',this.eventHandler(this._handle_input_0_3.bind(this)));
    this._expr_10 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_0_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_0_0.bind(this)));
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    var disposable_4:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_2,'mousedown',this.eventHandler(this._handle_mousedown_2_1.bind(this)));
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_22 = import7.UNINITIALIZED;
    this._viewQuery_NativeInput_0.reset([this._NativeInput_0_8]);
    this.context._nativeInput = this._viewQuery_NativeInput_0.first;
    this.init([],[
      this._el_0,
      this._anchor_1,
      this._el_2,
      this._anchor_3
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    ,[subscription_0]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.DefaultValueAccessor) && (0 === requestNodeIndex))) { return this._DefaultValueAccessor_0_3; }
    if (((token === import27.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    if (((token === import20.NgModel) && (0 === requestNodeIndex))) { return this._NgModel_0_5; }
    if (((token === import16.NgControl) && (0 === requestNodeIndex))) { return this._NgControl_0_6; }
    if (((token === import21.NgControlStatus) && (0 === requestNodeIndex))) { return this._NgControlStatus_0_7; }
    if (((token === import22.NativeInput) && (0 === requestNodeIndex))) { return this._NativeInput_0_8; }
    if (((token === import25.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import23.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    if (((token === import24.Button) && (2 === requestNodeIndex))) { return this._Button_2_4; }
    if (((token === import25.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import23.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    var changes:{[key: string]:import7.SimpleChange} = null;
    changes = null;
    const currVal_10:any = this.context._value;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgModel_0_5.model = currVal_10;
      if ((changes === null)) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_10,currVal_10);
      this._expr_10 = currVal_10;
    }
    if ((changes !== null)) { this._NgModel_0_5.ngOnChanges(changes); }
    const currVal_17:any = this.context._useAssist;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._NgIf_1_6.ngIf = currVal_17;
      this._expr_17 = currVal_17;
    }
    changed = false;
    const currVal_21:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this._Button_2_4.clear = currVal_21;
      changed = true;
      this._expr_21 = currVal_21;
    }
    if (changed) { this._appEl_2.componentView.markAsCheckOnce(); }
    const currVal_22:any = this.context._useAssist;
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this._NgIf_3_6.ngIf = currVal_22;
      this._expr_22 = currVal_22;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_2_4.ngAfterContentInit(); }
      this._Button_2_4.ngAfterContentChecked();
    }
    const currVal_8:any = this.context.type;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_0,'type',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.placeholder;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementProperty(this._el_0,'placeholder',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_11:any = this._NgControlStatus_0_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_0,'ng-untouched',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this._NgControlStatus_0_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_0,'ng-touched',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this._NgControlStatus_0_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_0,'ng-pristine',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_0_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_0,'ng-dirty',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_0_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_0,'ng-valid',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_0_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_0,'ng-invalid',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_20:boolean = !this.context.clearInput;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_20);
      this._expr_20 = currVal_20;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if (this._viewQuery_NextInput_1.dirty) {
        this._viewQuery_NextInput_1.reset([this._appEl_1.mapNestedViews(_View_TextInput1,(nestedView:_View_TextInput1):any => {
          return [nestedView._NextInput_0_3];
      })]);
      this.context._nextInput = this._viewQuery_NextInput_1.first;
    } }
  }
  destroyInternal():void {
    this._NgModel_0_5.ngOnDestroy();
    this._NativeInput_0_8.ngOnDestroy();
  }
  private _handle_ngModelChange_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context._value = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.inputBlurred($event)) !== false);
    const pd_1:any = ((<any>this._DefaultValueAccessor_0_3.onTouched()) !== false);
    const pd_2:any = ((<any>this._NativeInput_0_8._blur()) !== false);
    return (((true && pd_0) && pd_1) && pd_2);
  }
  private _handle_focus_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.inputFocused($event)) !== false);
    const pd_1:any = ((<any>this._NativeInput_0_8._focus()) !== false);
    return ((true && pd_0) && pd_1);
  }
  private _handle_input_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_0_3.onChange($event.target.value)) !== false);
    const pd_1:any = ((<any>this._NativeInput_0_8._change($event)) !== false);
    return ((true && pd_0) && pd_1);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.clearTextInput()) !== false);
    return (true && pd_0);
  }
  private _handle_mousedown_2_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.clearTextInput()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_TextInput0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TextInput> {
  if ((renderType_TextInput === null)) { (renderType_TextInput = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/input/input.ts class TextInput - inline template',0,import28.ViewEncapsulation.None,styles_TextInput,{})); }
  return new _View_TextInput0(viewUtils,parentInjector,declarationEl);
}
class _View_TextInput1 extends import1.AppView<any> {
  _el_0:any;
  _NextInput_0_3:import22.NextInput;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextInput1,renderType_TextInput,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'input',null);
    this.renderer.setElementAttribute(this._el_0,'aria-hidden','true');
    this.renderer.setElementAttribute(this._el_0,'next-input','');
    this._NextInput_0_3 = new import22.NextInput();
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_0.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.NextInput) && (0 === requestNodeIndex))) { return this._NextInput_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.parent.context.type;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'type',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<_View_TextInput0>this.parent)._viewQuery_NextInput_1.setDirty();
  }
  private _handle_focus_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NextInput_0_3.receivedFocus()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TextInput1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TextInput1(viewUtils,parentInjector,declarationEl);
}
class _View_TextInput2 extends import1.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextInput2,renderType_TextInput,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','input-cover');
    this.renderer.setElementAttribute(this._el_0,'tappable','');
    var disposable_0:Function = this.renderer.listen(this._el_0,'touchstart',this.eventHandler(this._handle_touchstart_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'touchend',this.eventHandler(this._handle_touchend_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'mouseup',this.eventHandler(this._handle_mouseup_0_3.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[]);
    return null;
  }
  private _handle_touchstart_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerStart($event)) !== false);
    return (true && pd_0);
  }
  private _handle_touchend_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerEnd($event)) !== false);
    return (true && pd_0);
  }
  private _handle_mousedown_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerStart($event)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseup_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerEnd($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TextInput2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TextInput2(viewUtils,parentInjector,declarationEl);
}
var renderType_TextArea_Host:import0.RenderComponentType = null;
class _View_TextArea_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _TextArea_0_4:import3.TextArea;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextArea_Host0,renderType_TextArea_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-textarea',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_TextArea0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TextArea_0_4 = new import3.TextArea(this.parentInjector.get(import8.Config),this.parentInjector.get(import9.Form),this.parentInjector.get(import10.Item,null),this.parentInjector.get(import11.App),this.parentInjector.get(import12.Platform),new import13.ElementRef(this._el_0),this.parentInjector.get(import14.Content,null),this.parentInjector.get(import15.NavController,null),this.parentInjector.get(import16.NgControl,null));
    this._appEl_0.initComponent(this._TextArea_0_4,[],compView_0);
    compView_0.create(this._TextArea_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TextArea) && (0 === requestNodeIndex))) { return this._TextArea_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._TextArea_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { this._TextArea_0_4.ngAfterContentChecked(); }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._TextArea_0_4.ngOnDestroy();
  }
}
function viewFactory_TextArea_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TextArea_Host === null)) { (renderType_TextArea_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_TextArea_Host0(viewUtils,parentInjector,declarationEl);
}
export const TextAreaNgFactory:import17.ComponentFactory<import3.TextArea> = new import17.ComponentFactory<import3.TextArea>('ion-textarea',viewFactory_TextArea_Host0,import3.TextArea);
const styles_TextArea:any[] = [];
var renderType_TextArea:import0.RenderComponentType = null;
class _View_TextArea0 extends import1.AppView<import3.TextArea> {
  _viewQuery_NativeInput_0:import18.QueryList<any>;
  _viewQuery_NextInput_1:import18.QueryList<any>;
  _el_0:any;
  _DefaultValueAccessor_0_3:import19.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_0_4:any[];
  _NgModel_0_5:import20.NgModel;
  _NgControl_0_6:any;
  _NgControlStatus_0_7:import21.NgControlStatus;
  _NativeInput_0_8:import22.NativeInput;
  _anchor_1:any;
  private _appEl_1:import2.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import23.NgIf;
  _anchor_2:any;
  private _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import23.NgIf;
  private _expr_8:any;
  private _expr_9:any;
  private _expr_10:any;
  private _expr_11:any;
  private _expr_12:any;
  private _expr_13:any;
  private _expr_14:any;
  private _expr_15:any;
  private _expr_16:any;
  private _expr_17:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextArea0,renderType_TextArea,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_NativeInput_0 = new import18.QueryList<any>();
    this._viewQuery_NextInput_1 = new import18.QueryList<any>();
    this._el_0 = this.renderer.createElement(parentRenderNode,'textarea',null);
    this.renderer.setElementAttribute(this._el_0,'class','text-input');
    this._DefaultValueAccessor_0_3 = new import19.DefaultValueAccessor(this.renderer,new import13.ElementRef(this._el_0));
    this._NG_VALUE_ACCESSOR_0_4 = [this._DefaultValueAccessor_0_3];
    this._NgModel_0_5 = new import20.NgModel(null,null,null,this._NG_VALUE_ACCESSOR_0_4);
    this._NgControl_0_6 = this._NgModel_0_5;
    this._NgControlStatus_0_7 = new import21.NgControlStatus(this._NgControl_0_6);
    this._NativeInput_0_8 = new import22.NativeInput(new import13.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import8.Config),this._NgControl_0_6);
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,null);
    this._appEl_1 = new import2.AppElement(1,null,this,this._anchor_1);
    this._TemplateRef_1_5 = new import25.TemplateRef_(this._appEl_1,viewFactory_TextArea1);
    this._NgIf_1_6 = new import23.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,null);
    this._appEl_2 = new import2.AppElement(2,null,this,this._anchor_2);
    this._TemplateRef_2_5 = new import25.TemplateRef_(this._appEl_2,viewFactory_TextArea2);
    this._NgIf_2_6 = new import23.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._expr_8 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'ngModelChange',this.eventHandler(this._handle_ngModelChange_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'input',this.eventHandler(this._handle_input_0_3.bind(this)));
    this._expr_9 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_0_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_0_0.bind(this)));
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._viewQuery_NativeInput_0.reset([this._NativeInput_0_8]);
    this.context._nativeInput = this._viewQuery_NativeInput_0.first;
    this.init([],[
      this._el_0,
      this._anchor_1,
      this._anchor_2
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[subscription_0]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.DefaultValueAccessor) && (0 === requestNodeIndex))) { return this._DefaultValueAccessor_0_3; }
    if (((token === import27.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    if (((token === import20.NgModel) && (0 === requestNodeIndex))) { return this._NgModel_0_5; }
    if (((token === import16.NgControl) && (0 === requestNodeIndex))) { return this._NgControl_0_6; }
    if (((token === import21.NgControlStatus) && (0 === requestNodeIndex))) { return this._NgControlStatus_0_7; }
    if (((token === import22.NativeInput) && (0 === requestNodeIndex))) { return this._NativeInput_0_8; }
    if (((token === import25.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import23.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    if (((token === import25.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import23.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = null;
    changes = null;
    const currVal_9:any = this.context._value;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._NgModel_0_5.model = currVal_9;
      if ((changes === null)) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    if ((changes !== null)) { this._NgModel_0_5.ngOnChanges(changes); }
    const currVal_16:any = this.context._useAssist;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._NgIf_1_6.ngIf = currVal_16;
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this.context._useAssist;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._NgIf_2_6.ngIf = currVal_17;
      this._expr_17 = currVal_17;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_8:any = this.context.placeholder;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_0,'placeholder',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_10:any = this._NgControlStatus_0_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_0,'ng-untouched',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._NgControlStatus_0_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_0,'ng-touched',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this._NgControlStatus_0_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_0,'ng-pristine',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this._NgControlStatus_0_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_0,'ng-dirty',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_0_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_0,'ng-valid',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_0_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_0,'ng-invalid',currVal_15);
      this._expr_15 = currVal_15;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if (this._viewQuery_NextInput_1.dirty) {
        this._viewQuery_NextInput_1.reset([this._appEl_1.mapNestedViews(_View_TextArea1,(nestedView:_View_TextArea1):any => {
          return [nestedView._NextInput_0_3];
      })]);
      this.context._nextInput = this._viewQuery_NextInput_1.first;
    } }
  }
  destroyInternal():void {
    this._NgModel_0_5.ngOnDestroy();
    this._NativeInput_0_8.ngOnDestroy();
  }
  private _handle_ngModelChange_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context._value = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.inputBlurred($event)) !== false);
    const pd_1:any = ((<any>this._DefaultValueAccessor_0_3.onTouched()) !== false);
    const pd_2:any = ((<any>this._NativeInput_0_8._blur()) !== false);
    return (((true && pd_0) && pd_1) && pd_2);
  }
  private _handle_focus_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.inputFocused($event)) !== false);
    const pd_1:any = ((<any>this._NativeInput_0_8._focus()) !== false);
    return ((true && pd_0) && pd_1);
  }
  private _handle_input_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_0_3.onChange($event.target.value)) !== false);
    const pd_1:any = ((<any>this._NativeInput_0_8._change($event)) !== false);
    return ((true && pd_0) && pd_1);
  }
}
export function viewFactory_TextArea0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TextArea> {
  if ((renderType_TextArea === null)) { (renderType_TextArea = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/input/input.ts class TextArea - inline template',0,import28.ViewEncapsulation.None,styles_TextArea,{})); }
  return new _View_TextArea0(viewUtils,parentInjector,declarationEl);
}
class _View_TextArea1 extends import1.AppView<any> {
  _el_0:any;
  _NextInput_0_3:import22.NextInput;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextArea1,renderType_TextArea,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'input',null);
    this.renderer.setElementAttribute(this._el_0,'aria-hidden','true');
    this.renderer.setElementAttribute(this._el_0,'next-input','');
    this.renderer.setElementAttribute(this._el_0,'type','text');
    this._NextInput_0_3 = new import22.NextInput();
    var disposable_0:Function = this.renderer.listen(this._el_0,'focus',this.eventHandler(this._handle_focus_0_0.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.NextInput) && (0 === requestNodeIndex))) { return this._NextInput_0_3; }
    return notFoundResult;
  }
  dirtyParentQueriesInternal():void {
    (<_View_TextArea0>this.parent)._viewQuery_NextInput_1.setDirty();
  }
  private _handle_focus_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NextInput_0_3.receivedFocus()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TextArea1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TextArea1(viewUtils,parentInjector,declarationEl);
}
class _View_TextArea2 extends import1.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TextArea2,renderType_TextArea,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','input-cover');
    this.renderer.setElementAttribute(this._el_0,'tappable','');
    var disposable_0:Function = this.renderer.listen(this._el_0,'touchstart',this.eventHandler(this._handle_touchstart_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'touchend',this.eventHandler(this._handle_touchend_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'mouseup',this.eventHandler(this._handle_mouseup_0_3.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[]);
    return null;
  }
  private _handle_touchstart_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerStart($event)) !== false);
    return (true && pd_0);
  }
  private _handle_touchend_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerEnd($event)) !== false);
    return (true && pd_0);
  }
  private _handle_mousedown_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerStart($event)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseup_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.pointerEnd($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TextArea2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TextArea2(viewUtils,parentInjector,declarationEl);
}