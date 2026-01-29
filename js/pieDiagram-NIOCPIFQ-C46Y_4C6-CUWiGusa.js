var R=(t,r,p)=>new Promise((o,l)=>{var h=a=>{try{e(p.next(a))}catch(s){l(s)}},i=a=>{try{e(p.throw(a))}catch(s){l(s)}},e=a=>a.done?o(a.value):Promise.resolve(a.value).then(h,i);e((p=p.apply(t,r)).next())});import{p as U}from"./chunk-353BL4L5-Dn_Y_Yna-BqbWy4Jb.js";import{_ as d,g as j,s as q,a as H,b as K,t as Q,q as Z,l as F,c as J,F as X,K as Y,a4 as tt,e as et,z as at,H as rt,Q as A,aE as nt,T as z}from"./mermaid.core-CAqkCmS1-CM8NaR-l.js";import{p as it}from"./treemap-75Q7IDZK-B2atdfMH-poOAsgcV.js";import{d as I}from"./arc-Js_tyW10-w3fmH6OI.js";import{o as st}from"./ordinal-DSZU4PqD-DOFoVEQk.js";import"../jse/index-index-D3Xb8oT_.js";import"./bootstrap-Bf65uz2I.js";import"./_baseUniq-BXtq6_NW-DmcqD6K1.js";import"./min-BngCxx8g-CaLr7yid.js";import"./clone-CEJtuQzg-DHIwSYDi.js";import"./init-ZxktEp_H-Gi6I4Gst.js";function ot(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=ot,p=null,o=A(0),l=A(z),h=A(0);function i(e){var a,s=(e=nt(e)).length,g,w,y=0,u=new Array(s),n=new Array(s),f=+o.apply(this,arguments),C=Math.min(z,Math.max(-z,l.apply(this,arguments)-f)),v,$=Math.min(Math.abs(C)/s,h.apply(this,arguments)),E=$*(C<0?-1:1),m;for(a=0;a<s;++a)(m=n[u[a]=a]=+t(e[a],a,e))>0&&(y+=m);for(r!=null?u.sort(function(x,D){return r(n[x],n[D])}):p!=null&&u.sort(function(x,D){return p(e[x],e[D])}),a=0,w=y?(C-s*E)/y:0;a<s;++a,f=v)g=u[a],m=n[g],v=f+(m>0?m*w:0)+E,n[g]={data:e[g],index:a,value:m,startAngle:f,endAngle:v,padAngle:$};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:A(+e),i):t},i.sortValues=function(e){return arguments.length?(r=e,p=null,i):r},i.sort=function(e){return arguments.length?(p=e,r=null,i):p},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:A(+e),i):o},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:A(+e),i):l},i.padAngle=function(e){return arguments.length?(h=typeof e=="function"?e:A(+e),i):h},i}var pt=rt.pie,G={sections:new Map,showData:!1},M=G.sections,N=G.showData,ut=structuredClone(pt),dt=d(()=>structuredClone(ut),"getConfig"),gt=d(()=>{M=new Map,N=G.showData,at()},"clear"),ft=d(({label:t,value:r})=>{M.has(t)||(M.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),mt=d(()=>M,"getSections"),ht=d(t=>{N=t},"setShowData"),vt=d(()=>N,"getShowData"),L={getConfig:dt,clear:gt,setDiagramTitle:Z,getDiagramTitle:Q,setAccTitle:K,getAccTitle:H,setAccDescription:q,getAccDescription:j,addSection:ft,getSections:mt,setShowData:ht,getShowData:vt},yt=d((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),xt={parse:d(t=>R(null,null,function*(){const r=yield it("pie",t);F.debug(r),yt(r,L)}),"parse")},St=d(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),At=St,wt=d(t=>{const r=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,l)=>l.value-o.value);return ct().value(o=>o.value)(r)},"createPieArcs"),Ct=d((t,r,p,o)=>{F.debug(`rendering pie chart
`+t);const l=o.db,h=J(),i=X(l.getConfig(),h.pie),e=40,a=18,s=4,g=450,w=g,y=Y(r),u=y.append("g");u.attr("transform","translate("+w/2+","+g/2+")");const{themeVariables:n}=h;let[f]=tt(n.pieOuterStrokeWidth);f!=null||(f=2);const C=i.textPosition,v=Math.min(w,g)/2-e,$=I().innerRadius(0).outerRadius(v),E=I().innerRadius(v*C).outerRadius(v*C);u.append("circle").attr("cx",0).attr("cy",0).attr("r",v+f/2).attr("class","pieOuterCircle");const m=l.getSections(),x=wt(m),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],T=st(D);u.selectAll("mySlices").data(x).enter().append("path").attr("d",$).attr("fill",c=>T(c.data.label)).attr("class","pieCircle");let O=0;m.forEach(c=>{O+=c}),u.selectAll("mySlices").data(x).enter().append("text").text(c=>(c.data.value/O*100).toFixed(0)+"%").attr("transform",c=>"translate("+E.centroid(c)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=u.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(c,S)=>{const b=a+s,_=b*T.domain().length/2,B=12*a,V=S*b-_;return"translate("+B+","+V+")"});k.append("rect").attr("width",a).attr("height",a).style("fill",T).style("stroke",T),k.data(x).append("text").attr("x",a+s).attr("y",a-s).text(c=>{const{label:S,value:b}=c.data;return l.getShowData()?`${S} [${b}]`:S});const W=Math.max(...k.selectAll("text").nodes().map(c=>{var S;return(S=c==null?void 0:c.getBoundingClientRect().width)!=null?S:0})),P=w+e+a+s+W;y.attr("viewBox",`0 0 ${P} ${g}`),et(y,g,P,i.useMaxWidth)},"draw"),Dt={draw:Ct},Rt={parser:xt,db:L,renderer:Dt,styles:At};export{Rt as diagram};
