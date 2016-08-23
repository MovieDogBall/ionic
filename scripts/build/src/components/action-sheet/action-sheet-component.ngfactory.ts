/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './action-sheet-component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../navigation/view-controller';
import * as import9 from '../../config/config';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '../../util/form';
import * as import12 from '../../navigation/nav-params';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../backdrop/backdrop';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../gestures/gesture-controller';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/core/src/metadata/view';
import * as import21 from '@angular/common/src/directives/ng_class';
import * as import22 from '../button/button';
import * as import23 from '../button/button.ngfactory';
import * as import24 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import25 from '../icon/icon';
var renderType_ActionSheetCmp_Host:import0.RenderComponentType = null;
class _View_ActionSheetCmp_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _ActionSheetCmp_0_4:import3.ActionSheetCmp;
  private _expr_1:any;
  private _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp_Host0,renderType_ActionSheetCmp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-action-sheet',rootSelector,null);
    this.renderer.setElementAttribute(this._el_0,'role','dialog');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_ActionSheetCmp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ActionSheetCmp_0_4 = new import3.ActionSheetCmp(this.parentInjector.get(import8.ViewController),this.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0),this.parentInjector.get(import11.Form),this.parentInjector.get(import12.NavParams),this.renderer);
    this._appEl_0.initComponent(this._ActionSheetCmp_0_4,[],compView_0);
    compView_0.create(this._ActionSheetCmp_0_4,this.projectableNodes,null);
    var disposable_0:Function = this.renderer.listenGlobal('body','keyup',this.eventHandler(this._handle_keyup_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ActionSheetCmp) && (0 === requestNodeIndex))) { return this._ActionSheetCmp_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._ActionSheetCmp_0_4.hdrId;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_0,'aria-labelledby',((currVal_1 == null)? null: currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._ActionSheetCmp_0_4.descId;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_0,'aria-describedby',((currVal_2 == null)? null: currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_keyup_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._ActionSheetCmp_0_4.keyUp($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ActionSheetCmp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ActionSheetCmp_Host === null)) { (renderType_ActionSheetCmp_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_ActionSheetCmp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ActionSheetCmpNgFactory:import13.ComponentFactory<import3.ActionSheetCmp> = new import13.ComponentFactory<import3.ActionSheetCmp>('ion-action-sheet',viewFactory_ActionSheetCmp_Host0,import3.ActionSheetCmp);
const styles_ActionSheetCmp:any[] = [];
var renderType_ActionSheetCmp:import0.RenderComponentType = null;
class _View_ActionSheetCmp0 extends import1.AppView<import3.ActionSheetCmp> {
  _el_0:any;
  _Backdrop_0_3:import14.Backdrop;
  _el_1:any;
  _el_2:any;
  _el_3:any;
  _anchor_4:any;
  private _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import15.NgIf;
  _anchor_5:any;
  private _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import15.NgIf;
  _anchor_6:any;
  private _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import16.NgFor;
  _anchor_7:any;
  private _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import15.NgIf;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp0,renderType_ActionSheetCmp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-backdrop',null);
    this.renderer.setElementAttribute(this._el_0,'disable-activated','');
    this.renderer.setElementAttribute(this._el_0,'role','presentation');
    this.renderer.setElementAttribute(this._el_0,'tappable','');
    this._Backdrop_0_3 = new import14.Backdrop(this.parentInjector.get(import17.GestureController),new import10.ElementRef(this._el_0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_1,'class','action-sheet-wrapper');
    this._el_2 = this.renderer.createElement(this._el_1,'div',null);
    this.renderer.setElementAttribute(this._el_2,'class','action-sheet-container');
    this._el_3 = this.renderer.createElement(this._el_2,'div',null);
    this.renderer.setElementAttribute(this._el_3,'class','action-sheet-group');
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_3,null);
    this._appEl_4 = new import2.AppElement(4,3,this,this._anchor_4);
    this._TemplateRef_4_5 = new import18.TemplateRef_(this._appEl_4,viewFactory_ActionSheetCmp1);
    this._NgIf_4_6 = new import15.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,null);
    this._appEl_5 = new import2.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import18.TemplateRef_(this._appEl_5,viewFactory_ActionSheetCmp2);
    this._NgIf_5_6 = new import15.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_3,null);
    this._appEl_6 = new import2.AppElement(6,3,this,this._anchor_6);
    this._TemplateRef_6_5 = new import18.TemplateRef_(this._appEl_6,viewFactory_ActionSheetCmp3);
    this._NgFor_6_6 = new import16.NgFor(this._appEl_6.vcRef,this._TemplateRef_6_5,this.parentInjector.get(import19.IterableDiffers),this.ref);
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_2,null);
    this._appEl_7 = new import2.AppElement(7,2,this,this._anchor_7);
    this._TemplateRef_7_5 = new import18.TemplateRef_(this._appEl_7,viewFactory_ActionSheetCmp5);
    this._NgIf_7_6 = new import15.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._anchor_4,
      this._anchor_5,
      this._anchor_6,
      this._anchor_7
    ]
    ,[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.Backdrop) && (0 === requestNodeIndex))) { return this._Backdrop_0_3; }
    if (((token === import18.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import15.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import18.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import15.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import18.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import16.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6; }
    if (((token === import18.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import15.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = null;
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Backdrop_0_3.ngOnInit(); }
    const currVal_1:any = this.context.d.title;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.d.subTitle;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_5_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    changes = null;
    const currVal_3:any = this.context.d.buttons;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgFor_6_6.ngForOf = currVal_3;
      if ((changes === null)) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== null)) { this._NgFor_6_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_6_6.ngDoCheck(); }
    const currVal_4:any = this.context.d.cancelButton;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_7_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Backdrop_0_3.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.bdClick()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ActionSheetCmp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ActionSheetCmp> {
  if ((renderType_ActionSheetCmp === null)) { (renderType_ActionSheetCmp = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/action-sheet/action-sheet-component.ts class ActionSheetCmp - inline template',0,import20.ViewEncapsulation.None,styles_ActionSheetCmp,{})); }
  return new _View_ActionSheetCmp0(viewUtils,parentInjector,declarationEl);
}
class _View_ActionSheetCmp1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp1,renderType_ActionSheetCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','action-sheet-title');
    this._text_1 = this.renderer.createText(this._el_0,'',null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.hdrId,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'id',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.context.d.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ActionSheetCmp1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ActionSheetCmp1(viewUtils,parentInjector,declarationEl);
}
class _View_ActionSheetCmp2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp2,renderType_ActionSheetCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','action-sheet-sub-title');
    this._text_1 = this.renderer.createText(this._el_0,'',null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.descId,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'id',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.context.d.subTitle,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ActionSheetCmp2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ActionSheetCmp2(viewUtils,parentInjector,declarationEl);
}
class _View_ActionSheetCmp3 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _NgClass_0_4:import21.NgClass;
  _Button_0_5:import22.Button;
  _anchor_1:any;
  private _appEl_1:import2.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import15.NgIf;
  _text_2:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp3,renderType_ActionSheetCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'button',null);
    this.renderer.setElementAttribute(this._el_0,'class','disable-hover');
    this.renderer.setElementAttribute(this._el_0,'ion-button','action-sheet-button');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = import23.viewFactory_Button0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NgClass_0_4 = new import21.NgClass(this.parent.parentInjector.get(import19.IterableDiffers),this.parent.parentInjector.get(import24.KeyValueDiffers),new import10.ElementRef(this._el_0),this.renderer);
    this._Button_0_5 = new import22.Button('action-sheet-button',this.parent.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Button_0_5,[],compView_0);
    this._anchor_1 = this.renderer.createTemplateAnchor(null,null);
    this._appEl_1 = new import2.AppElement(1,0,this,this._anchor_1);
    this._TemplateRef_1_5 = new import18.TemplateRef_(this._appEl_1,viewFactory_ActionSheetCmp4);
    this._NgIf_1_6 = new import15.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(null,'',null);
      compView_0.create(this._Button_0_5,[[].concat([
        this._appEl_1,
        this._text_2
      ]
    )],null);
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._anchor_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import15.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    if (((token === import21.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._NgClass_0_4; }
    if (((token === import22.Button) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._Button_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = 'disable-hover';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_4.initialClasses = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.$implicit.cssClass;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_0_4.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_0_4.ngDoCheck(); }
    const currVal_3:any = this.context.$implicit.icon;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_1_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_0_5.ngAfterContentInit(); }
      this._Button_0_5.ngAfterContentChecked();
    }
    const currVal_4:any = import4.interpolate(1,'',this.context.$implicit.text,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_2,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.click(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ActionSheetCmp3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ActionSheetCmp3(viewUtils,parentInjector,declarationEl);
}
class _View_ActionSheetCmp4 extends import1.AppView<any> {
  _el_0:any;
  _Icon_0_3:import25.Icon;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp4,renderType_ActionSheetCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'ion-icon',null);
    this.renderer.setElementAttribute(this._el_0,'class','action-sheet-icon');
    this.renderer.setElementAttribute(this._el_0,'role','img');
    this._Icon_0_3 = new import25.Icon(this.parent.parent.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.Icon) && (0 === requestNodeIndex))) { return this._Icon_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.$implicit.icon;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Icon_0_3.name = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Icon_0_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'hide',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_0_3.ngOnDestroy();
  }
}
function viewFactory_ActionSheetCmp4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ActionSheetCmp4(viewUtils,parentInjector,declarationEl);
}
class _View_ActionSheetCmp5 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  private _appEl_1:import2.AppElement;
  _NgClass_1_4:import21.NgClass;
  _Button_1_5:import22.Button;
  _anchor_2:any;
  private _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import15.NgIf;
  _text_3:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp5,renderType_ActionSheetCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','action-sheet-group');
    this._el_1 = this.renderer.createElement(this._el_0,'button',null);
    this.renderer.setElementAttribute(this._el_1,'class','action-sheet-cancel disable-hover');
    this.renderer.setElementAttribute(this._el_1,'ion-button','action-sheet-button');
    this._appEl_1 = new import2.AppElement(1,0,this,this._el_1);
    var compView_1:any = import23.viewFactory_Button0(this.viewUtils,this.injector(1),this._appEl_1);
    this._NgClass_1_4 = new import21.NgClass(this.parent.parentInjector.get(import19.IterableDiffers),this.parent.parentInjector.get(import24.KeyValueDiffers),new import10.ElementRef(this._el_1),this.renderer);
    this._Button_1_5 = new import22.Button('action-sheet-button',this.parent.parentInjector.get(import9.Config),new import10.ElementRef(this._el_1),this.renderer);
    this._appEl_1.initComponent(this._Button_1_5,[],compView_1);
    this._anchor_2 = this.renderer.createTemplateAnchor(null,null);
    this._appEl_2 = new import2.AppElement(2,1,this,this._anchor_2);
    this._TemplateRef_2_5 = new import18.TemplateRef_(this._appEl_2,viewFactory_ActionSheetCmp6);
    this._NgIf_2_6 = new import15.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(null,'',null);
      compView_1.create(this._Button_1_5,[[].concat([
        this._appEl_2,
        this._text_3
      ]
    )],null);
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._anchor_2,
      this._text_3
    ]
    ,[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import15.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import21.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgClass_1_4; }
    if (((token === import22.Button) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Button_1_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = 'action-sheet-cancel disable-hover';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_4.initialClasses = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.parent.context.d.cancelButton.cssClass;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_1_4.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_1_4.ngDoCheck(); }
    const currVal_3:any = this.parent.context.d.cancelButton.icon;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_2_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_1_5.ngAfterContentInit(); }
      this._Button_1_5.ngAfterContentChecked();
    }
    const currVal_4:any = import4.interpolate(1,'',this.parent.context.d.cancelButton.text,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_3,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.click(this.parent.context.d.cancelButton)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ActionSheetCmp5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ActionSheetCmp5(viewUtils,parentInjector,declarationEl);
}
class _View_ActionSheetCmp6 extends import1.AppView<any> {
  _el_0:any;
  _Icon_0_3:import25.Icon;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ActionSheetCmp6,renderType_ActionSheetCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'ion-icon',null);
    this.renderer.setElementAttribute(this._el_0,'class','action-sheet-icon');
    this.renderer.setElementAttribute(this._el_0,'role','img');
    this._Icon_0_3 = new import25.Icon(this.parent.parent.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.Icon) && (0 === requestNodeIndex))) { return this._Icon_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.parent.context.d.cancelButton.icon;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Icon_0_3.name = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Icon_0_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'hide',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_0_3.ngOnDestroy();
  }
}
function viewFactory_ActionSheetCmp6(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ActionSheetCmp6(viewUtils,parentInjector,declarationEl);
}