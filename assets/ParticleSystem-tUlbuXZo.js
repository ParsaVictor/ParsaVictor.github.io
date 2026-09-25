var K=Object.defineProperty;var $=(h,o,t)=>o in h?K(h,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[o]=t;var p=(h,o,t)=>$(h,typeof o!="symbol"?o+"":o,t);import{S as tt,G as et,V as F,M as ot,C as st,W as it,P as at,B,a as M,b as O,c as N,d as z,e as rt,A as L,f as nt,L as ht}from"./three-owulaBmx.js";import{m as y,c as f,s as S,l as v}from"./index-zZTx3urw.js";import"./vendor-DYodzFiF.js";import"./gsap-xgxdCp6f.js";const w=Math.PI*2,lt=Math.PI*(3-Math.sqrt(5));function X(h,o=0){const t=y(99),a=[];for(let i=0;i<h;i++){const e=1-i/(h-1)*2,s=Math.sqrt(Math.max(0,1-e*e)),r=lt*i,n=1+(t()-.5)*o;a.push([Math.cos(r)*s*n,e*n,Math.sin(r)*s*n])}return a}function T(h,o,t){const a=y(t),i=new Float32Array(o*6),e=h.length||1;for(let s=0;s<o;s++){const r=h[Math.floor(a()*e)%e]||[[0,0,0],[0,0,0]];i[s*6]=r[0][0],i[s*6+1]=r[0][1],i[s*6+2]=r[0][2],i[s*6+3]=r[1][0],i[s*6+4]=r[1][1],i[s*6+5]=r[1][2]}return i}function A(h){const o=[];for(let t=0;t<h.length-1;t++)o.push([h[t],h[t+1]]);return o}function ct(h){const o=new Float32Array(h.length*3);return h.forEach((t,a)=>{o[a*3]=t[0],o[a*3+1]=t[1],o[a*3+2]=t[2]}),o}function ut(h,o){const a=X(1100),i=[];for(let e=0;e<1100;e++)for(const s of[21,34]){const r=a[(e+s)%1100],n=a[e];Math.hypot(n[0]-r[0],n[1]-r[1],n[2]-r[2])<.42&&i.push([n,r])}return T(i,h,o)}function pt(h,o){const t=y(o),a=h.length,i=new Float32Array(a*3);for(let e=0;e<a;e++){const s=h[e],r=Math.hypot(s[0],s[1]),n=Math.atan2(s[1],s[0]),c=e/a;let u,l,d;if(c<.12){const m=.14*Math.sqrt(t()),x=t()*w;u=Math.cos(x)*m,l=Math.sin(x)*m,d=.14+(t()-.5)*.05}else if(c<.85){const b=.2+(1+Math.floor((r+t()*.12)/1.05*9))/9*.62;u=Math.cos(n)*b,l=Math.sin(n)*b,d=(t()-.5)*.12+Math.cos(b*6)*.05}else{const m=.98+(t()-.5)*.04;u=Math.cos(n)*m,l=Math.sin(n)*m*.82,d=(t()-.5)*.06}const g=Math.hypot(u,l);i[e*3]=u,i[e*3+1]=l,i[e*3+2]=d+Math.cos(Math.min(1,g)*Math.PI*.5)*.34}return i}function dt(h,o){const t=[],a=[.2,.34,.48,.62,.78,.98];a.forEach((i,e)=>{const r=e===a.length-1?.82:1,n=Math.cos(Math.min(1,i)*Math.PI*.5)*.34,c=[];for(let u=0;u<=60;u++){const l=u/60*w;c.push([Math.cos(l)*i,Math.sin(l)*i*r,n])}t.push(...A(c))});for(let i=0;i<32;i++){const e=i/32*w,s=r=>Math.cos(Math.min(1,r)*Math.PI*.5)*.34;t.push([[Math.cos(e)*.2,Math.sin(e)*.2,s(.2)],[Math.cos(e)*.78,Math.sin(e)*.78,s(.78)]])}return T(t,h,o)}const ft=[3,6,6,4],mt=[-1.12,-.38,.38,1.12],W=[.44,.82,.82,.5];function Q(){const h=ft.map((t,a)=>{const i=[];for(let e=0;e<t;e++){const s=e/t*w+a*.42;i.push([mt[a],Math.cos(s)*W[a],Math.sin(s)*W[a]])}return i}),o=[];for(let t=0;t<h.length-1;t++)for(const a of h[t])for(const i of h[t+1])o.push([a,i]);return{nodes:h,edges:o}}function vt(h,o){const t=y(o),{nodes:a,edges:i}=Q(),e=a.flat(),s=new Float32Array(h*3);for(let r=0;r<h;r++){let n,c,u;if(t()<.3){const l=e[Math.floor(t()*e.length)],d=.075*Math.cbrt(t()),g=t()*w,m=Math.acos(t()*2-1);n=l[0]+Math.sin(m)*Math.cos(g)*d,c=l[1]+Math.sin(m)*Math.sin(g)*d,u=l[2]+Math.cos(m)*d}else{const l=i[Math.floor(t()*i.length)],d=t(),g=.012;n=l[0][0]+(l[1][0]-l[0][0])*d+(t()-.5)*g,c=l[0][1]+(l[1][1]-l[0][1])*d+(t()-.5)*g,u=l[0][2]+(l[1][2]-l[0][2])*d+(t()-.5)*g}s[r*3]=n,s[r*3+1]=c,s[r*3+2]=u}return s}function gt(h,o){const{nodes:t,edges:a}=Q(),i=[...a];return t.forEach(e=>{for(let s=0;s<e.length;s++)i.push([e[s],e[(s+1)%e.length]])}),T(i,h,o)}function Mt(h,o){const t=y(o),a=h.length,i=12,e=18,s=new Float32Array(a*3);for(let r=0;r<a;r++){const n=h[r];let c=Math.asin(Math.max(-1,Math.min(1,n[1]))),u=Math.atan2(n[2],n[0]);r%2===0?c=Math.round((c+Math.PI/2)/Math.PI*i)/i*Math.PI-Math.PI/2:u=Math.round((u+Math.PI)/w*e)/e*w-Math.PI;const l=Math.cos(c);s[r*3]=l*Math.cos(u)*(1+(t()-.5)*.015),s[r*3+1]=Math.sin(c),s[r*3+2]=l*Math.sin(u)*(1+(t()-.5)*.015)}return s}function wt(h,o){const t=[];for(let e=1;e<7;e++){const s=e/7*Math.PI-Math.PI/2,r=[];for(let n=0;n<=48;n++){const c=n/48*w-Math.PI;r.push([Math.cos(s)*Math.cos(c),Math.sin(s),Math.cos(s)*Math.sin(c)])}t.push(...A(r))}for(let e=0;e<12;e++){const s=e/12*w,r=[];for(let n=0;n<=48;n++){const c=n/48*Math.PI-Math.PI/2;r.push([Math.cos(c)*Math.cos(s),Math.sin(c),Math.cos(c)*Math.sin(s)])}t.push(...A(r))}return T(t,h,o)}function J(){const o=-22*Math.PI/180,t=302*Math.PI/180,a=[];for(let c=0;c<=260;c++){const u=c/260,l=o+u*t;a.push([Math.cos(l)*.92,Math.sin(l)*.92,Math.sin(u*7)*.035])}const i=[];for(let c=0;c<=48;c++){const u=c/48,l=o-u*.62,d=.92*(1+u*.3);i.push([Math.cos(l)*d,Math.sin(l)*d-u*.14,0])}const e=[],s=.32,r=-.06;for(let c=0;c<=150;c++){const u=c/150*w;e.push([r+Math.cos(u)*s,Math.sin(u)*s,0])}const n=[];for(let c=0;c<=70;c++){const u=c/70;n.push([.26+(u>.76?(u-.76)*.85:0),.34-u*.62,0])}return[a,i,e,n]}function yt(h,o){const t=y(o),a=J(),i=[];for(const r of a)i.push(...r);const e=h.length,s=new Float32Array(e*3);for(let r=0;r<e;r++){const n=i[Math.floor(t()*i.length)%i.length];s[r*3]=n[0]+(t()-.5)*.05,s[r*3+1]=n[1]+(t()-.5)*.05,s[r*3+2]=(n[2]??0)+(t()-.5)*.13}return s}function bt(h,o){const t=[];for(const a of J())t.push(...A(a));return T(t,h,o)}function Ft(h,o){const t=X(h,.02),a=new Float32Array(h*3),i=y(7);for(let e=0;e<h;e++){const s=.05*Math.cbrt(i()),r=i()*w,n=Math.acos(i()*2-1);a[e*3]=Math.sin(n)*Math.cos(r)*s,a[e*3+1]=Math.sin(n)*Math.sin(r)*s,a[e*3+2]=Math.cos(n)*s}return{core:a,digits:["00","01","02","03","04"].map((e,s)=>St(e,h,900+s)),points:[ct(t),pt(t,12),vt(h,23),Mt(t,31),yt(t,41)],lines:[ut(o,112),dt(o,123),gt(o,223),wt(o,331),bt(o,441)]}}function St(h,o,t){const a=new Float32Array(o*3),i=y(t),e=360,s=180,r=document.createElement("canvas");r.width=e,r.height=s;const n=r.getContext("2d",{willReadFrequently:!0});if(!n)return a;n.fillStyle="#fff",n.font='700 150px "Space Grotesk", "Helvetica Neue", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(h,e/2,s/2+4);const c=n.getImageData(0,0,e,s).data,u=[];for(let l=0;l<s;l++)for(let d=0;d<e;d++)c[(l*e+d)*4+3]>140&&u.push(l*e+d);if(u.length===0)return a;for(let l=0;l<o;l++){const d=u[Math.floor(i()*u.length)],g=d%e+i()-.5,m=Math.floor(d/e)+i()-.5;a[l*3]=(g/e*2-1)*1.05,a[l*3+1]=(1-m/s*2)*.55,a[l*3+2]=(i()-.5)*.12}return a}const Tt=`
precision highp float;

uniform float uTime;
uniform float uMix;
uniform float uIntro;
uniform float uSize;
uniform float uPixelRatio;
uniform float uBreathe;
uniform float uSpread;      // 0 at rest, 1 mid-transition — the cloud flies apart
uniform float uMouseForce;
uniform float uPointerR;
uniform float uMidW;       // 1 while the swarm is reading out a chapter number
uniform mat3  uUnrot;      // undoes the group rotation so the glyph faces the lens
uniform vec2  uPointer;     // the cursor in NDC (-1..1), unsmoothed
uniform float uAspect;      // viewport width / height
uniform float uTanHalfFov;  // tan(fov / 2) — view units per NDC unit, per unit of depth
uniform vec3  uColorFrom;
uniform vec3  uColorTo;

attribute vec3  aFrom;
attribute vec3  aTo;
attribute vec3  aCore;
attribute vec3  aMid;
attribute float aScale;
attribute float aSeed;

varying vec3  vColor;
varying float vGlow;
varying float vFade;
varying float vHot;

void main() {
  // between rooms the geometry passes through a flat glyph — the chapter
  // number — held upright regardless of how the group happens to be turned
  vec3 shaped = mix(mix(aFrom, aTo, uMix), uUnrot * aMid, uMidW);

  // birth: bloom outward from a dense core, points arriving on staggered delays
  float delay = aSeed * 0.35;
  float born  = clamp((uIntro - delay) / (1.0 - delay), 0.0, 1.0);
  born = 1.0 - pow(1.0 - born, 4.0);           // power4.out
  vec3 pos = mix(aCore, shaped, born);

  // gentle organic drift so the form always feels alive
  float t = uTime * 0.001;
  pos += vec3(
    sin(t * 0.55 + aSeed * 6.2831),
    cos(t * 0.63 + aSeed * 4.13),
    sin(t * 0.48 + aSeed * 2.71)
  ) * 0.018 * born;

  // ── scatter & regroup ───────────────────────────────────────────────
  // Between two stages the swarm blows outward and drifts, then settles into
  // the next geometry. Radial push keeps the silhouette readable; the seeded
  // vector adds the turbulence that makes it feel like a real dispersal.
  if (uSpread > 0.001) {
    vec3 radial = normalize(shaped + vec3(0.0001, 0.0002, 0.0003));
    vec3 turb = vec3(
      sin(aSeed * 31.7 + t * 1.7),
      cos(aSeed * 17.3 + t * 1.3),
      sin(aSeed * 47.1 + t * 2.1)
    );
    float s = uSpread * born;
    pos += radial * s * (0.55 + aSeed * 0.5);
    pos += turb * s * 0.40;
  }

  pos *= uBreathe;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);

  // ── cursor bubble ───────────────────────────────────────────────────
  // Measured on SCREEN, not at one depth: each point is compared with the
  // cursor where it actually appears (its projected NDC position, aspect-
  // corrected), so the cavity sits exactly under the mouse for near and far
  // points alike, wherever the swarm has been shifted to. The push is then
  // converted back to view units at the point's own depth, so a near point
  // and a far point move the same distance on screen.
  vec4 clip0 = projectionMatrix * mv;
  vec2 onScreen = clip0.xy / max(clip0.w, 0.0001);
  vec2 fromP = (onScreen - uPointer) * vec2(uAspect, 1.0);
  float d = length(fromP) + 0.0001;
  float infl = 1.0 - smoothstep(0.0, uPointerR, d);
  infl = infl * infl;                                   // tight rim, soft falloff
  vec2 dir = fromP / d;
  float perNdc = -mv.z * uTanHalfFov;                   // view units per NDC unit here
  mv.xy += dir * infl * uPointerR * perNdc * uMouseForce;
  // lift the displaced points toward the lens so the cavity reads as a dome
  mv.z += infl * uMouseForce * 0.55;
  // a little rotation in the rim keeps it alive rather than a dead hole
  mv.xy += vec2(-dir.y, dir.x) * infl * uMouseForce * 0.22;
  float pull = infl;

  gl_Position = projectionMatrix * mv;

  float size = uSize * aScale * uPixelRatio * (1.0 + pull * 0.85);
  gl_PointSize = clamp(size * (9.0 / -mv.z), 0.5, 24.0);

  // depth + screen-edge falloff keep the form contained instead of "all over"
  float depth = clamp((-mv.z - 4.5) / 11.0, 0.0, 1.0);
  vec2  ndc   = gl_Position.xy / max(gl_Position.w, 0.001);
  float edge  = 1.0 - smoothstep(0.66, 1.30, length(ndc));

  vColor = mix(uColorFrom, uColorTo, uMix);
  vGlow  = aScale;
  vFade  = (1.0 - depth * 0.65) * edge * born;
  vHot   = pull;
}
`,xt=`
precision highp float;

uniform float uOpacity;

varying vec3  vColor;
varying float vGlow;
varying float vFade;
varying float vHot;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;

  float core = smoothstep(0.42, 0.06, d);
  float halo = smoothstep(0.5, 0.0, d) * 0.22;
  float a = (core + halo) * uOpacity * vFade * (1.0 + vHot * 0.7);
  if (a < 0.006) discard;

  vec3 col = mix(vColor, vec3(1.0), core * 0.5 * vGlow + vHot * 0.35);
  gl_FragColor = vec4(col, a);
}
`,Pt=`
precision highp float;

uniform float uTime;
uniform float uMix;
uniform float uIntro;
uniform float uBreathe;
uniform float uSpread;
uniform vec3  uColorFrom;
uniform vec3  uColorTo;

attribute vec3  aFrom;
attribute vec3  aTo;
attribute float aSeed;

varying float vPulse;
varying float vFade;
varying vec3  vColor;

void main() {
  vec3 pos = mix(aFrom, aTo, uMix) * uBreathe;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float depth = clamp((-mv.z - 4.5) / 11.0, 0.0, 1.0);
  vec2  ndc   = gl_Position.xy / max(gl_Position.w, 0.001);
  float edge  = 1.0 - smoothstep(0.55, 1.15, length(ndc));

  vPulse = 0.45 + 0.55 * sin(uTime * 0.0016 + aSeed * 9.0);
  // wiring can't survive a dispersal — it dims out while the swarm is loose
  vFade  = (1.0 - depth * 0.8) * edge * uIntro * (1.0 - uSpread);
  vColor = mix(uColorFrom, uColorTo, uMix);
}
`,At=`
precision highp float;

uniform float uOpacity;

varying float vPulse;
varying float vFade;
varying vec3  vColor;

void main() {
  float a = uOpacity * vFade * (0.30 + 0.70 * vPulse);
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor, a);
}
`,P=5,C=[.8,.72,.78,.72,.92],I=[.34,.3,.46,.34,.55],H=[1.18,.8,.72,.8,1.1],U=[.1,-1.38,1.15,-1.15,0],q=[0,-.06,.06,-.06,0],Z=[0,.82,.82,.82,.05],Y=[1,.5,.55,.5,.95],j=[1,.22,.26,.22,.9],V=[1.18,.62,.66,.62,1.08],D={desktop:.96,mobile:.74};class _t{constructor(o){p(this,"renderer");p(this,"scene",new tt);p(this,"camera");p(this,"group",new et);p(this,"points");p(this,"lines");p(this,"pMat");p(this,"lMat");p(this,"pGeo");p(this,"lGeo");p(this,"colors");p(this,"forms");p(this,"count");p(this,"lineSeg");p(this,"seg",-1);p(this,"reduced");p(this,"mobile");p(this,"progress",0);p(this,"targetProgress",0);p(this,"stage",0);p(this,"targetStage",0);p(this,"intro",0);p(this,"introTarget",0);p(this,"pointer",new F(0,0));p(this,"pointerTarget",new F(0,0));p(this,"cursor",new F(9,9));p(this,"cursorTarget",new F(9,9));p(this,"camZ",18);p(this,"spread",0);p(this,"midW",0);p(this,"unrot",new ot);p(this,"quiet",0);p(this,"rtl",!1);p(this,"mouseForce",0);p(this,"offsetX",0);p(this,"offsetY",0);p(this,"spin",0);p(this,"time",0);p(this,"disposed",!1);this.reduced=o.reducedMotion,this.mobile=o.mobile,this.colors=o.colors.map(i=>new st(i)),this.renderer=new it({canvas:o.canvas,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,o.mobile?1.5:1.75)),this.renderer.setClearColor(0,0),this.camera=new at(48,1,.1,100),this.camera.position.set(0,0,this.camZ),this.group.scale.setScalar(o.mobile?2.05:2.85),this.scene.add(this.group);const t=window.innerWidth,a=window.innerHeight;this.count=this.reduced?1600:Math.round(f(t*a/(o.mobile?1100:420),o.mobile?1600:2400,o.mobile?2600:7e3)),this.lineSeg=this.reduced?260:o.mobile?300:900,this.mouseForce=this.reduced?0:o.mobile?.25:.28,this.forms=Ft(this.count,this.lineSeg),this.buildPoints(),this.buildLines(),this.reduced&&(this.intro=this.introTarget=1,this.camZ=8.4,this.camera.position.z=this.camZ)}buildPoints(){const o=this.count;this.pGeo=new B;const t=new Float32Array(this.forms.points[0]),a=new Float32Array(this.forms.points[1]),i=new Float32Array(o),e=new Float32Array(o);for(let s=0;s<o;s++)i[s]=s%23===0?2.2:s%7===0?1.35:.7+Math.random()*.4,e[s]=Math.random();this.pGeo.setAttribute("position",new M(new Float32Array(t),3)),this.pGeo.setAttribute("aFrom",new M(t,3)),this.pGeo.setAttribute("aTo",new M(a,3)),this.pGeo.setAttribute("aCore",new M(new Float32Array(this.forms.core),3)),this.pGeo.setAttribute("aMid",new M(new Float32Array(this.forms.digits[1]),3)),this.pGeo.setAttribute("aScale",new M(i,1)),this.pGeo.setAttribute("aSeed",new M(e,1)),this.pGeo.boundingSphere=new O(new N,4),this.pMat=new z({vertexShader:Tt,fragmentShader:xt,transparent:!0,depthWrite:!1,depthTest:!1,blending:L,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uSize:{value:this.mobile?2.3:3.1},uPixelRatio:{value:this.renderer.getPixelRatio()},uBreathe:{value:1},uSpread:{value:0},uMouseForce:{value:this.mouseForce},uPointer:{value:new F},uPointerR:{value:.24},uAspect:{value:1},uTanHalfFov:{value:.4},uMidW:{value:0},uUnrot:{value:new rt},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:C[0]}}}),this.points=new nt(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.group.add(this.points)}buildLines(){const o=this.lineSeg,t=o*2;this.lGeo=new B;const a=new Float32Array(this.forms.lines[0]),i=new Float32Array(this.forms.lines[1]),e=new Float32Array(t);for(let s=0;s<o;s++){const r=Math.random();e[s*2]=r,e[s*2+1]=r}this.lGeo.setAttribute("position",new M(new Float32Array(a),3)),this.lGeo.setAttribute("aFrom",new M(a,3)),this.lGeo.setAttribute("aTo",new M(i,3)),this.lGeo.setAttribute("aSeed",new M(e,1)),this.lGeo.boundingSphere=new O(new N,4),this.lMat=new z({vertexShader:Pt,fragmentShader:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:L,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uBreathe:{value:1},uSpread:{value:0},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:I[0]}}}),this.lines=new ht(this.lGeo,this.lMat),this.lines.frustumCulled=!1,this.group.add(this.lines)}playIntro(){this.introTarget=1}setScrollProgress(o){this.targetProgress=f(o,0,1)}setStage(o){this.targetStage=f(o,0,P-1)}setRTL(o){this.rtl=o}setQuiet(o){this.quiet=f(o,0,1)}setPointer(o,t,a=!0){if(this.pointerTarget.set(o,-t),a){const i=this.cursorTarget.x>5;this.cursorTarget.set(o,-t),i&&this.cursor.copy(this.cursorTarget)}else this.cursorTarget.set(9,9),this.cursor.set(9,9)}pulse(){this.spin+=.28}resize(o,t){this.renderer.setSize(o,t,!1),this.camera.aspect=o/t,this.camera.updateProjectionMatrix(),this.pMat.uniforms.uPixelRatio.value=this.renderer.getPixelRatio()}applyStage(){const o=this.stage;let t=Math.floor(o);t>P-2&&(t=P-2),t<0&&(t=0);const a=f(o-t,0,1);if(t!==this.seg){this.seg=t;const G=this.pGeo.getAttribute("aFrom"),E=this.pGeo.getAttribute("aTo");G.array.set(this.forms.points[t]),E.array.set(this.forms.points[t+1]),G.needsUpdate=!0,E.needsUpdate=!0;const R=this.pGeo.getAttribute("aMid");R.array.set(this.forms.digits[t+1]),R.needsUpdate=!0;const _=this.lGeo.getAttribute("aFrom"),k=this.lGeo.getAttribute("aTo");_.array.set(this.forms.lines[t]),k.array.set(this.forms.lines[t+1]),_.needsUpdate=!0,k.needsUpdate=!0}const i=this.reduced?0:S(f((a-.08)/.17,0,1))*(1-S(f((a-.75)/.17,0,1)));this.midW=i,this.spread=this.reduced?0:Math.pow(Math.sin(f(a,0,1)*Math.PI),.8)*(1-i);const e=S(f((a-.08)/.84,0,1)),s=this.colors[t],r=this.colors[t+1],n=this.pMat.uniforms;n.uMix.value=e,n.uColorFrom.value.copy(s),n.uColorTo.value.copy(r);const c=1-this.quiet*.94,u=this.mobile,l=u?v(Y[t],Y[t+1],e):1,d=u?v(j[t],j[t+1],e):1;n.uOpacity.value=v(C[t],C[t+1],e)*c*l;const g=u?v(V[t],V[t+1],e):v(H[t],H[t+1],e);n.uBreathe.value=v(g,u?D.mobile:D.desktop,i),n.uSpread.value=this.spread,n.uMidW.value=i,n.uMouseForce.value=this.mouseForce*(1-i),n.uOpacity.value=v(n.uOpacity.value,.95*c,i);const m=this.lMat.uniforms;m.uMix.value=e,m.uColorFrom.value.copy(s),m.uColorTo.value.copy(r),m.uOpacity.value=v(I[t],I[t+1],e)*c*d*(1-i),m.uBreathe.value=n.uBreathe.value,m.uSpread.value=this.spread;const b=window.innerWidth>1024?v(U[t],U[t+1],e):0;this.offsetX=(this.rtl?-b:b)*(1-i),this.offsetY=(u?v(Z[t],Z[t+1],e):v(q[t],q[t+1],e))*(1-i)}update(o){if(this.disposed)return;const t=f(o,8,60);this.reduced||(this.time+=t),this.progress+=(this.targetProgress-this.progress)*f(t/260,0,1),this.stage+=(this.targetStage-this.stage)*f(t/220,0,1),this.intro+=(this.introTarget-this.intro)*f(t/620,0,1),this.pointer.lerp(this.pointerTarget,f(t/200,0,1)),this.cursor.lerp(this.cursorTarget,f(t/40,0,1));const a=v(8.6,7.4,S(this.progress))+(1-this.intro)*9+this.spread*.9;this.camZ+=(a-this.camZ)*f(t/900,0,1),this.camera.position.z=this.camZ,this.camera.position.x+=(this.pointer.x*.35-this.camera.position.x)*f(t/500,0,1),this.camera.position.y+=(this.pointer.y*.25-this.camera.position.y)*f(t/500,0,1),this.camera.lookAt(0,0,0),this.applyStage(),this.pMat.uniforms.uTime.value=this.time,this.pMat.uniforms.uIntro.value=this.intro,this.pMat.uniforms.uPointer.value.copy(this.cursor),this.pMat.uniforms.uAspect.value=this.camera.aspect,this.pMat.uniforms.uTanHalfFov.value=Math.tan(this.camera.fov*Math.PI/360),this.pMat.uniforms.uPointerR.value=.48,this.lMat.uniforms.uTime.value=this.time,this.lMat.uniforms.uIntro.value=this.intro,this.reduced||(this.spin+=t*55e-6);const i=S(f((this.stage-(P-1)+.7)/.7,0,1)),e=this.spin*v(1,.5,i),s=this.progress*Math.PI*.85*v(1,.55,i);this.group.rotation.y=e+s+this.pointer.x*.18,this.group.rotation.x=Math.sin(this.time*13e-5)*.1-this.pointer.y*.12,this.midW>5e-4&&(this.unrot.makeRotationFromEuler(this.group.rotation).invert(),this.pMat.uniforms.uUnrot.value.setFromMatrix4(this.unrot));const r=f(t/700,0,1);this.group.position.x+=(this.offsetX*2.6-this.group.position.x)*r,this.group.position.y+=(this.offsetY*2.6-this.group.position.y)*r,this.renderer.render(this.scene,this.camera)}glyphWeight(){return this.midW}debugState(){return{intro:this.intro,progress:this.progress,stage:this.stage,spread:this.spread,midW:this.midW,quiet:this.quiet,rtl:this.rtl,camZ:this.camZ,breathe:this.pMat.uniforms.uBreathe.value,opacity:this.pMat.uniforms.uOpacity.value,groupX:this.group.position.x,groupScale:this.group.scale.x,count:this.count,seg:this.seg,mix:this.pMat.uniforms.uMix.value}}dispose(){this.disposed=!0,this.pGeo?.dispose(),this.lGeo?.dispose(),this.pMat?.dispose(),this.lMat?.dispose(),this.renderer.dispose()}}export{_t as ParticleSystem};
