import{i as o,d as s,u as i,c as a}from"./bootstrap-Bf65uz2I.js";import{i as u,g as c,u as d}from"../jse/index-index-D3Xb8oT_.js";const r={prefix:Math.floor(Math.random()*1e4),current:0},I=Symbol("elIdInjection"),p=()=>c()?u(I,r):r,l=n=>{const e=p();!o&&e===r&&s("IdInjection",`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);const t=i();return a(()=>d(n)||`${t.value}-id-${e.prefix}-${e.current++}`)};export{p as a,l as u};
