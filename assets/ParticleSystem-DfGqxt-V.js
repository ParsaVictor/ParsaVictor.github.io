var K=Object.defineProperty;var $=(h,o,t)=>o in h?K(h,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[o]=t;var d=(h,o,t)=>$(h,typeof o!="symbol"?o+"":o,t);import{S as tt,G as et,V as x,M as ot,C as st,W as it,P as at,B as O,a as v,b as k,c as L,d as W,e as rt,A as z,f as nt,L as ht}from"./three-owulaBmx.js";import{m as w,c as m,s as F,l as g}from"./index-BYKtPWH9.js";import"./vendor-DYodzFiF.js";import"./gsap-xgxdCp6f.js";const y=Math.PI*2,lt=Math.PI*(3-Math.sqrt(5));function D(h,o=0){const t=w(99),a=[];for(let i=0;i<h;i++){const e=1-i/(h-1)*2,s=Math.sqrt(Math.max(0,1-e*e)),r=lt*i,n=1+(t()-.5)*o;a.push([Math.cos(r)*s*n,e*n,Math.sin(r)*s*n])}return a}function P(h,o,t){const a=w(t),i=new Float32Array(o*6),e=h.length||1;for(let s=0;s<o;s++){const r=h[Math.floor(a()*e)%e]||[[0,0,0],[0,0,0]];i[s*6]=r[0][0],i[s*6+1]=r[0][1],i[s*6+2]=r[0][2],i[s*6+3]=r[1][0],i[s*6+4]=r[1][1],i[s*6+5]=r[1][2]}return i}function A(h){const o=[];for(let t=0;t<h.length-1;t++)o.push([h[t],h[t+1]]);return o}function ct(h){const o=new Float32Array(h.length*3);return h.forEach((t,a)=>{o[a*3]=t[0],o[a*3+1]=t[1],o[a*3+2]=t[2]}),o}function ut(h,o){const a=D(1100),i=[];for(let e=0;e<1100;e++)for(const s of[21,34]){const r=a[(e+s)%1100],n=a[e];Math.hypot(n[0]-r[0],n[1]-r[1],n[2]-r[2])<.42&&i.push([n,r])}return P(i,h,o)}function dt(h,o){const t=w(o),a=h.length,i=new Float32Array(a*3);for(let e=0;e<a;e++){const s=h[e],r=Math.hypot(s[0],s[1]),n=Math.atan2(s[1],s[0]),l=e/a;let u,c,p;if(l<.12){const f=.14*Math.sqrt(t()),S=t()*y;u=Math.cos(S)*f,c=Math.sin(S)*f,p=.14+(t()-.5)*.05}else if(l<.85){const b=.2+(1+Math.floor((r+t()*.12)/1.05*9))/9*.62;u=Math.cos(n)*b,c=Math.sin(n)*b,p=(t()-.5)*.12+Math.cos(b*6)*.05}else{const f=.98+(t()-.5)*.04;u=Math.cos(n)*f,c=Math.sin(n)*f*.82,p=(t()-.5)*.06}const M=Math.hypot(u,c);i[e*3]=u,i[e*3+1]=c,i[e*3+2]=p+Math.cos(Math.min(1,M)*Math.PI*.5)*.34}return i}function pt(h,o){const t=[],a=[.2,.34,.48,.62,.78,.98];a.forEach((i,e)=>{const r=e===a.length-1?.82:1,n=Math.cos(Math.min(1,i)*Math.PI*.5)*.34,l=[];for(let u=0;u<=60;u++){const c=u/60*y;l.push([Math.cos(c)*i,Math.sin(c)*i*r,n])}t.push(...A(l))});for(let i=0;i<32;i++){const e=i/32*y,s=r=>Math.cos(Math.min(1,r)*Math.PI*.5)*.34;t.push([[Math.cos(e)*.2,Math.sin(e)*.2,s(.2)],[Math.cos(e)*.78,Math.sin(e)*.78,s(.78)]])}return P(t,h,o)}const ft=[3,6,6,4],mt=[-1.12,-.38,.38,1.12],N=[.44,.82,.82,.5];function Q(){const h=ft.map((t,a)=>{const i=[];for(let e=0;e<t;e++){const s=e/t*y+a*.42;i.push([mt[a],Math.cos(s)*N[a],Math.sin(s)*N[a]])}return i}),o=[];for(let t=0;t<h.length-1;t++)for(const a of h[t])for(const i of h[t+1])o.push([a,i]);return{nodes:h,edges:o}}function gt(h,o){const t=w(o),{nodes:a,edges:i}=Q(),e=a.flat(),s=new Float32Array(h*3);for(let r=0;r<h;r++){let n,l,u;if(t()<.3){const c=e[Math.floor(t()*e.length)],p=.075*Math.cbrt(t()),M=t()*y,f=Math.acos(t()*2-1);n=c[0]+Math.sin(f)*Math.cos(M)*p,l=c[1]+Math.sin(f)*Math.sin(M)*p,u=c[2]+Math.cos(f)*p}else{const c=i[Math.floor(t()*i.length)],p=t(),M=.012;n=c[0][0]+(c[1][0]-c[0][0])*p+(t()-.5)*M,l=c[0][1]+(c[1][1]-c[0][1])*p+(t()-.5)*M,u=c[0][2]+(c[1][2]-c[0][2])*p+(t()-.5)*M}s[r*3]=n,s[r*3+1]=l,s[r*3+2]=u}return s}function Mt(h,o){const{nodes:t,edges:a}=Q(),i=[...a];return t.forEach(e=>{for(let s=0;s<e.length;s++)i.push([e[s],e[(s+1)%e.length]])}),P(i,h,o)}function vt(h,o){const t=w(o),a=h.length,i=12,e=18,s=new Float32Array(a*3);for(let r=0;r<a;r++){const n=h[r];let l=Math.asin(Math.max(-1,Math.min(1,n[1]))),u=Math.atan2(n[2],n[0]);r%2===0?l=Math.round((l+Math.PI/2)/Math.PI*i)/i*Math.PI-Math.PI/2:u=Math.round((u+Math.PI)/y*e)/e*y-Math.PI;const c=Math.cos(l);s[r*3]=c*Math.cos(u)*(1+(t()-.5)*.015),s[r*3+1]=Math.sin(l),s[r*3+2]=c*Math.sin(u)*(1+(t()-.5)*.015)}return s}function yt(h,o){const t=[];for(let e=1;e<7;e++){const s=e/7*Math.PI-Math.PI/2,r=[];for(let n=0;n<=48;n++){const l=n/48*y-Math.PI;r.push([Math.cos(s)*Math.cos(l),Math.sin(s),Math.cos(s)*Math.sin(l)])}t.push(...A(r))}for(let e=0;e<12;e++){const s=e/12*y,r=[];for(let n=0;n<=48;n++){const l=n/48*Math.PI-Math.PI/2;r.push([Math.cos(l)*Math.cos(s),Math.sin(l),Math.cos(l)*Math.sin(s)])}t.push(...A(r))}return P(t,h,o)}function J(){const o=-22*Math.PI/180,t=302*Math.PI/180,a=[];for(let l=0;l<=260;l++){const u=l/260,c=o+u*t;a.push([Math.cos(c)*.92,Math.sin(c)*.92,Math.sin(u*7)*.035])}const i=[];for(let l=0;l<=48;l++){const u=l/48,c=o-u*.62,p=.92*(1+u*.3);i.push([Math.cos(c)*p,Math.sin(c)*p-u*.14,0])}const e=[],s=.32,r=-.06;for(let l=0;l<=150;l++){const u=l/150*y;e.push([r+Math.cos(u)*s,Math.sin(u)*s,0])}const n=[];for(let l=0;l<=70;l++){const u=l/70;n.push([.26+(u>.76?(u-.76)*.85:0),.34-u*.62,0])}return[a,i,e,n]}function wt(h,o){const t=w(o),a=J(),i=[];for(const r of a)i.push(...r);const e=h.length,s=new Float32Array(e*3);for(let r=0;r<e;r++){const n=i[Math.floor(t()*i.length)%i.length];s[r*3]=n[0]+(t()-.5)*.05,s[r*3+1]=n[1]+(t()-.5)*.05,s[r*3+2]=(n[2]??0)+(t()-.5)*.13}return s}function bt(h,o){const t=[];for(const a of J())t.push(...A(a));return P(t,h,o)}function Ft(h,o){const t=D(h,.02),a=new Float32Array(h*3),i=w(7);for(let e=0;e<h;e++){const s=.05*Math.cbrt(i()),r=i()*y,n=Math.acos(i()*2-1);a[e*3]=Math.sin(n)*Math.cos(r)*s,a[e*3+1]=Math.sin(n)*Math.sin(r)*s,a[e*3+2]=Math.cos(n)*s}return{core:a,digits:["00","01","02","03","04"].map((e,s)=>Pt(e,h,900+s)),points:[ct(t),dt(t,12),gt(h,23),vt(t,31),wt(t,41)],lines:[ut(o,112),pt(o,123),Mt(o,223),yt(o,331),bt(o,441)]}}function Pt(h,o,t){const a=new Float32Array(o*3),i=w(t),e=360,s=180,r=document.createElement("canvas");r.width=e,r.height=s;const n=r.getContext("2d",{willReadFrequently:!0});if(!n)return a;n.fillStyle="#fff",n.font='700 150px "Space Grotesk", "Helvetica Neue", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(h,e/2,s/2+4);const l=n.getImageData(0,0,e,s).data,u=[];for(let c=0;c<s;c++)for(let p=0;p<e;p++)l[(c*e+p)*4+3]>140&&u.push(c*e+p);if(u.length===0)return a;for(let c=0;c<o;c++){const p=u[Math.floor(i()*u.length)],M=p%e+i()-.5,f=Math.floor(p/e)+i()-.5;a[c*3]=(M/e*2-1)*1.05,a[c*3+1]=(1-f/s*2)*.55,a[c*3+2]=(i()-.5)*.12}return a}const St=`
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
uniform vec2  uPointer;
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
  // The pointer pushes points outward, opening a rounded cavity in the swarm
  // that travels with the cursor. uPointer already arrives in view space, so
  // the bubble sits exactly under the mouse at any aspect ratio.
  vec2 fromP = mv.xy - uPointer;
  float d = length(fromP) + 0.0001;
  float infl = 1.0 - smoothstep(0.0, uPointerR, d);
  infl = infl * infl;                                   // tight rim, soft falloff
  vec2 dir = fromP / d;
  mv.xy += dir * infl * uPointerR * uMouseForce;
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
`,Tt=`
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
`,T=5,I=[.8,.72,.78,.72,.92],G=[.34,.3,.46,.34,.55],H=[1.18,.8,.72,.8,1.1],U=[.1,-1.38,1.15,-1.15,0],V=[0,-.06,.06,-.06,0],Z=[0,.82,.82,.82,.05],q=[1,.5,.55,.5,.95],Y=[1,.22,.26,.22,.9],X=[1.18,.62,.66,.62,1.08],j={desktop:.96,mobile:.74};class _t{constructor(o){d(this,"renderer");d(this,"scene",new tt);d(this,"camera");d(this,"group",new et);d(this,"points");d(this,"lines");d(this,"pMat");d(this,"lMat");d(this,"pGeo");d(this,"lGeo");d(this,"colors");d(this,"forms");d(this,"count");d(this,"lineSeg");d(this,"seg",-1);d(this,"reduced");d(this,"mobile");d(this,"progress",0);d(this,"targetProgress",0);d(this,"stage",0);d(this,"targetStage",0);d(this,"pointerView",new x);d(this,"intro",0);d(this,"introTarget",0);d(this,"pointer",new x(0,0));d(this,"pointerTarget",new x(0,0));d(this,"camZ",18);d(this,"spread",0);d(this,"midW",0);d(this,"unrot",new ot);d(this,"quiet",0);d(this,"rtl",!1);d(this,"mouseForce",0);d(this,"offsetX",0);d(this,"offsetY",0);d(this,"spin",0);d(this,"time",0);d(this,"disposed",!1);this.reduced=o.reducedMotion,this.mobile=o.mobile,this.colors=o.colors.map(i=>new st(i)),this.renderer=new it({canvas:o.canvas,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,o.mobile?1.5:1.75)),this.renderer.setClearColor(0,0),this.camera=new at(48,1,.1,100),this.camera.position.set(0,0,this.camZ),this.group.scale.setScalar(o.mobile?2.05:2.85),this.scene.add(this.group);const t=window.innerWidth,a=window.innerHeight;this.count=this.reduced?1600:Math.round(m(t*a/(o.mobile?1100:420),o.mobile?1600:2400,o.mobile?2600:7e3)),this.lineSeg=this.reduced?260:o.mobile?300:900,this.mouseForce=this.reduced?0:o.mobile?.25:.75,this.forms=Ft(this.count,this.lineSeg),this.buildPoints(),this.buildLines(),this.reduced&&(this.intro=this.introTarget=1,this.camZ=8.4,this.camera.position.z=this.camZ)}buildPoints(){const o=this.count;this.pGeo=new O;const t=new Float32Array(this.forms.points[0]),a=new Float32Array(this.forms.points[1]),i=new Float32Array(o),e=new Float32Array(o);for(let s=0;s<o;s++)i[s]=s%23===0?2.2:s%7===0?1.35:.7+Math.random()*.4,e[s]=Math.random();this.pGeo.setAttribute("position",new v(new Float32Array(t),3)),this.pGeo.setAttribute("aFrom",new v(t,3)),this.pGeo.setAttribute("aTo",new v(a,3)),this.pGeo.setAttribute("aCore",new v(new Float32Array(this.forms.core),3)),this.pGeo.setAttribute("aMid",new v(new Float32Array(this.forms.digits[1]),3)),this.pGeo.setAttribute("aScale",new v(i,1)),this.pGeo.setAttribute("aSeed",new v(e,1)),this.pGeo.boundingSphere=new k(new L,4),this.pMat=new W({vertexShader:St,fragmentShader:xt,transparent:!0,depthWrite:!1,depthTest:!1,blending:z,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uSize:{value:this.mobile?2.3:3.1},uPixelRatio:{value:this.renderer.getPixelRatio()},uBreathe:{value:1},uSpread:{value:0},uMouseForce:{value:this.mouseForce},uPointer:{value:new x},uPointerR:{value:2},uMidW:{value:0},uUnrot:{value:new rt},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:I[0]}}}),this.points=new nt(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.group.add(this.points)}buildLines(){const o=this.lineSeg,t=o*2;this.lGeo=new O;const a=new Float32Array(this.forms.lines[0]),i=new Float32Array(this.forms.lines[1]),e=new Float32Array(t);for(let s=0;s<o;s++){const r=Math.random();e[s*2]=r,e[s*2+1]=r}this.lGeo.setAttribute("position",new v(new Float32Array(a),3)),this.lGeo.setAttribute("aFrom",new v(a,3)),this.lGeo.setAttribute("aTo",new v(i,3)),this.lGeo.setAttribute("aSeed",new v(e,1)),this.lGeo.boundingSphere=new k(new L,4),this.lMat=new W({vertexShader:Tt,fragmentShader:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:z,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uBreathe:{value:1},uSpread:{value:0},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:G[0]}}}),this.lines=new ht(this.lGeo,this.lMat),this.lines.frustumCulled=!1,this.group.add(this.lines)}playIntro(){this.introTarget=1}setScrollProgress(o){this.targetProgress=m(o,0,1)}setStage(o){this.targetStage=m(o,0,T-1)}setRTL(o){this.rtl=o}setQuiet(o){this.quiet=m(o,0,1)}setPointer(o,t){this.pointerTarget.set(o,-t)}pulse(){this.spin+=.28}resize(o,t){this.renderer.setSize(o,t,!1),this.camera.aspect=o/t,this.camera.updateProjectionMatrix(),this.pMat.uniforms.uPixelRatio.value=this.renderer.getPixelRatio()}applyStage(){const o=this.stage;let t=Math.floor(o);t>T-2&&(t=T-2),t<0&&(t=0);const a=m(o-t,0,1);if(t!==this.seg){this.seg=t;const C=this.pGeo.getAttribute("aFrom"),E=this.pGeo.getAttribute("aTo");C.array.set(this.forms.points[t]),E.array.set(this.forms.points[t+1]),C.needsUpdate=!0,E.needsUpdate=!0;const R=this.pGeo.getAttribute("aMid");R.array.set(this.forms.digits[t+1]),R.needsUpdate=!0;const _=this.lGeo.getAttribute("aFrom"),B=this.lGeo.getAttribute("aTo");_.array.set(this.forms.lines[t]),B.array.set(this.forms.lines[t+1]),_.needsUpdate=!0,B.needsUpdate=!0}const i=this.reduced?0:F(m((a-.08)/.17,0,1))*(1-F(m((a-.75)/.17,0,1)));this.midW=i,this.spread=this.reduced?0:Math.pow(Math.sin(m(a,0,1)*Math.PI),.8)*(1-i);const e=F(m((a-.08)/.84,0,1)),s=this.colors[t],r=this.colors[t+1],n=this.pMat.uniforms;n.uMix.value=e,n.uColorFrom.value.copy(s),n.uColorTo.value.copy(r);const l=1-this.quiet*.94,u=this.mobile,c=u?g(q[t],q[t+1],e):1,p=u?g(Y[t],Y[t+1],e):1;n.uOpacity.value=g(I[t],I[t+1],e)*l*c;const M=u?g(X[t],X[t+1],e):g(H[t],H[t+1],e);n.uBreathe.value=g(M,u?j.mobile:j.desktop,i),n.uSpread.value=this.spread,n.uMidW.value=i,n.uMouseForce.value=this.mouseForce*(1-i),n.uOpacity.value=g(n.uOpacity.value,.95*l,i);const f=this.lMat.uniforms;f.uMix.value=e,f.uColorFrom.value.copy(s),f.uColorTo.value.copy(r),f.uOpacity.value=g(G[t],G[t+1],e)*l*p*(1-i),f.uBreathe.value=n.uBreathe.value,f.uSpread.value=this.spread;const b=window.innerWidth>1024?g(U[t],U[t+1],e):0;this.offsetX=(this.rtl?-b:b)*(1-i),this.offsetY=(u?g(Z[t],Z[t+1],e):g(V[t],V[t+1],e))*(1-i)}update(o){if(this.disposed)return;const t=m(o,8,60);this.reduced||(this.time+=t),this.progress+=(this.targetProgress-this.progress)*m(t/260,0,1),this.stage+=(this.targetStage-this.stage)*m(t/220,0,1),this.intro+=(this.introTarget-this.intro)*m(t/620,0,1),this.pointer.lerp(this.pointerTarget,m(t/200,0,1));const a=g(8.6,7.4,F(this.progress))+(1-this.intro)*9+this.spread*.9;this.camZ+=(a-this.camZ)*m(t/900,0,1),this.camera.position.z=this.camZ,this.camera.position.x+=(this.pointer.x*.35-this.camera.position.x)*m(t/500,0,1),this.camera.position.y+=(this.pointer.y*.25-this.camera.position.y)*m(t/500,0,1),this.camera.lookAt(0,0,0),this.applyStage();const i=Math.abs(this.camZ)*Math.tan(this.camera.fov*Math.PI/360),e=i*this.camera.aspect;this.pointerView.set(this.pointer.x*e,this.pointer.y*i),this.pMat.uniforms.uTime.value=this.time,this.pMat.uniforms.uIntro.value=this.intro,this.pMat.uniforms.uPointer.value.copy(this.pointerView),this.pMat.uniforms.uPointerR.value=i*.24,this.lMat.uniforms.uTime.value=this.time,this.lMat.uniforms.uIntro.value=this.intro,this.reduced||(this.spin+=t*55e-6);const s=F(m((this.stage-(T-1)+.7)/.7,0,1)),r=this.spin*g(1,.5,s),n=this.progress*Math.PI*.85*g(1,.55,s);this.group.rotation.y=r+n+this.pointer.x*.18,this.group.rotation.x=Math.sin(this.time*13e-5)*.1-this.pointer.y*.12,this.midW>5e-4&&(this.unrot.makeRotationFromEuler(this.group.rotation).invert(),this.pMat.uniforms.uUnrot.value.setFromMatrix4(this.unrot));const l=m(t/700,0,1);this.group.position.x+=(this.offsetX*2.6-this.group.position.x)*l,this.group.position.y+=(this.offsetY*2.6-this.group.position.y)*l,this.renderer.render(this.scene,this.camera)}glyphWeight(){return this.midW}debugState(){return{intro:this.intro,progress:this.progress,stage:this.stage,spread:this.spread,midW:this.midW,quiet:this.quiet,rtl:this.rtl,camZ:this.camZ,breathe:this.pMat.uniforms.uBreathe.value,opacity:this.pMat.uniforms.uOpacity.value,groupX:this.group.position.x,groupScale:this.group.scale.x,count:this.count,seg:this.seg,mix:this.pMat.uniforms.uMix.value}}dispose(){this.disposed=!0,this.pGeo?.dispose(),this.lGeo?.dispose(),this.pMat?.dispose(),this.lMat?.dispose(),this.renderer.dispose()}}export{_t as ParticleSystem};
