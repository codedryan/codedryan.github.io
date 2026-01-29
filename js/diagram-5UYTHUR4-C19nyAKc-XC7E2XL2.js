var F=Object.defineProperty;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var x=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,v=(t,e)=>{for(var a in e||(e={}))P.call(e,a)&&x(t,a,e[a]);if(w)for(var a of w(e))E.call(e,a)&&x(t,a,e[a]);return t};var C=(t,e,a)=>new Promise((l,s)=>{var r=i=>{try{n(a.next(i))}catch(c){s(c)}},o=i=>{try{n(a.throw(i))}catch(c){s(c)}},n=i=>i.done?l(i.value):Promise.resolve(i.value).then(r,o);n((a=a.apply(t,e)).next())});import{p as W}from"./chunk-353BL4L5-Dn_Y_Yna-BqbWy4Jb.js";import{_ as p,s as T,g as D,t as _,q as A,a as N,b as L,F as $,K as Y,e as G,z as H,G as I,H as K,l as y}from"./mermaid.core-CAqkCmS1-CM8NaR-l.js";import{p as M}from"./treemap-75Q7IDZK-B2atdfMH-poOAsgcV.js";import"../jse/index-index-D3Xb8oT_.js";import"./bootstrap-Bf65uz2I.js";import"./_baseUniq-BXtq6_NW-DmcqD6K1.js";import"./min-BngCxx8g-CaLr7yid.js";import"./clone-CEJtuQzg-DHIwSYDi.js";var B={packet:[]},m=structuredClone(B),O=K.packet,q=p(()=>{const t=$(v(v({},O),I().packet));return t.showBits&&(t.paddingY+=10),t},"getConfig"),R=p(()=>m.packet,"getPacket"),U=p(t=>{t.length>0&&m.packet.push(t)},"pushWord"),X=p(()=>{H(),m=structuredClone(B)},"clear"),u={pushWord:U,getPacket:R,getConfig:q,clear:X,setAccTitle:L,getAccTitle:N,setDiagramTitle:A,getDiagramTitle:_,getAccDescription:D,setAccDescription:T},j=1e4,J=p(t=>{W(t,u);let e=-1,a=[],l=1;const{bitsPerRow:s}=u.getConfig();for(let{start:r,end:o,bits:n,label:i}of t.blocks){if(r!==void 0&&o!==void 0&&o<r)throw new Error(`Packet block ${r} - ${o} is invalid. End must be greater than start.`);if(r!=null||(r=e+1),r!==e+1)throw new Error(`Packet block ${r} - ${o!=null?o:r} is not contiguous. It should start from ${e+1}.`);if(n===0)throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(o!=null||(o=r+(n!=null?n:1)-1),n!=null||(n=o-r+1),e=o,y.debug(`Packet block ${r} - ${e} with label ${i}`);a.length<=s+1&&u.getPacket().length<j;){const[c,g]=Q({start:r,end:o,bits:n,label:i},l,s);if(a.push(c),c.end+1===l*s&&(u.pushWord(a),a=[],l++),!g)break;({start:r,end:o,bits:n,label:i}=g)}}u.pushWord(a)},"populate"),Q=p((t,e,a)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];const l=e*a-1,s=e*a;return[{start:t.start,end:l,label:t.label,bits:l-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),V={parse:p(t=>C(null,null,function*(){const e=yield M("packet",t);y.debug(e),J(e)}),"parse")},Z=p((t,e,a,l)=>{const s=l.db,r=s.getConfig(),{rowHeight:o,paddingY:n,bitWidth:i,bitsPerRow:c}=r,g=s.getPacket(),d=s.getDiagramTitle(),k=o+n,f=k*(g.length+1)-(d?0:o),h=i*c+2,b=Y(e);b.attr("viewbox",`0 0 ${h} ${f}`),G(b,f,h,r.useMaxWidth);for(const[S,z]of g.entries())tt(b,z,S,r);b.append("text").text(d).attr("x",h/2).attr("y",f-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),tt=p((t,e,a,{rowHeight:l,paddingX:s,paddingY:r,bitWidth:o,bitsPerRow:n,showBits:i})=>{const c=t.append("g"),g=a*(l+r)+r;for(const d of e){const k=d.start%n*o+1,f=(d.end-d.start+1)*o-s;if(c.append("rect").attr("x",k).attr("y",g).attr("width",f).attr("height",l).attr("class","packetBlock"),c.append("text").attr("x",k+f/2).attr("y",g+l/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(d.label),!i)continue;const h=d.end===d.start,b=g-2;c.append("text").attr("x",k+(h?f/2:0)).attr("y",b).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",h?"middle":"start").text(d.start),h||c.append("text").attr("x",k+f).attr("y",b).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(d.end)}},"drawWord"),et={draw:Z},at={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},rt=p(({packet:t}={})=>{const e=$(at,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),ft={parser:V,db:u,renderer:et,styles:rt};export{ft as diagram};
