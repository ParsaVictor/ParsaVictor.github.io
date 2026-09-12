var H=Object.defineProperty;var q=(n,e,t)=>e in n?H(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>q(n,typeof e!="symbol"?e+"":e,t);import{S as W,G as Y,V as S,C as U,W as X,P as j,B as I,a as g,b as R,c as _,d as E,A as z,e as Q,L as D}from"./three-0Ov1NEkI.js";import{m as w,c as d,l as y,s as A}from"./index-BB0hccZ3.js";import"./vendor-DYodzFiF.js";import"./gsap-xgxdCp6f.js";const M=Math.PI*2,J=Math.PI*(3-Math.sqrt(5));function N(n,e=0){const t=w(99),r=[];for(let s=0;s<n;s++){const a=1-s/(n-1)*2,o=Math.sqrt(Math.max(0,1-a*a)),i=J*s,h=1+(t()-.5)*e;r.push([Math.cos(i)*o*h,a*h,Math.sin(i)*o*h])}return r}function P(n,e,t){const r=w(t),s=new Float32Array(e*6),a=n.length||1;for(let o=0;o<e;o++){const i=n[Math.floor(r()*a)%a]||[[0,0,0],[0,0,0]];s[o*6]=i[0][0],s[o*6+1]=i[0][1],s[o*6+2]=i[0][2],s[o*6+3]=i[1][0],s[o*6+4]=i[1][1],s[o*6+5]=i[1][2]}return s}function x(n){const e=[];for(let t=0;t<n.length-1;t++)e.push([n[t],n[t+1]]);return e}function K(n){const e=new Float32Array(n.length*3);return n.forEach((t,r)=>{e[r*3]=t[0],e[r*3+1]=t[1],e[r*3+2]=t[2]}),e}function $(n,e){const r=N(1100),s=[];for(let a=0;a<1100;a++)for(const o of[21,34]){const i=r[(a+o)%1100],h=r[a];Math.hypot(h[0]-i[0],h[1]-i[1],h[2]-i[2])<.42&&s.push([h,i])}return P(s,n,e)}function tt(n,e){const t=w(e),r=n.length,s=new Float32Array(r*3);for(let a=0;a<r;a++){const o=n[a],i=Math.hypot(o[0],o[1]),h=Math.atan2(o[1],o[0]),l=a/r;let p,u,f;if(l<.12){const m=.14*Math.sqrt(t()),b=t()*M;p=Math.cos(b)*m,u=Math.sin(b)*m,f=.14+(t()-.5)*.05}else if(l<.85){const T=.2+(1+Math.floor((i+t()*.12)/1.05*9))/9*.62;p=Math.cos(h)*T,u=Math.sin(h)*T,f=(t()-.5)*.12+Math.cos(T*6)*.05}else{const m=.98+(t()-.5)*.04;p=Math.cos(h)*m,u=Math.sin(h)*m*.82,f=(t()-.5)*.06}const v=Math.hypot(p,u);s[a*3]=p,s[a*3+1]=u,s[a*3+2]=f+Math.cos(Math.min(1,v)*Math.PI*.5)*.34}return s}function et(n,e){const t=[],r=[.2,.34,.48,.62,.78,.98];r.forEach((s,a)=>{const i=a===r.length-1?.82:1,h=Math.cos(Math.min(1,s)*Math.PI*.5)*.34,l=[];for(let p=0;p<=60;p++){const u=p/60*M;l.push([Math.cos(u)*s,Math.sin(u)*s*i,h])}t.push(...x(l))});for(let s=0;s<32;s++){const a=s/32*M,o=i=>Math.cos(Math.min(1,i)*Math.PI*.5)*.34;t.push([[Math.cos(a)*.2,Math.sin(a)*.2,o(.2)],[Math.cos(a)*.78,Math.sin(a)*.78,o(.78)]])}return P(t,n,e)}const ot=[3,6,6,4],st=[-1.12,-.38,.38,1.12],k=[.44,.82,.82,.5];function V(){const n=ot.map((t,r)=>{const s=[];for(let a=0;a<t;a++){const o=a/t*M+r*.42;s.push([st[r],Math.cos(o)*k[r],Math.sin(o)*k[r]])}return s}),e=[];for(let t=0;t<n.length-1;t++)for(const r of n[t])for(const s of n[t+1])e.push([r,s]);return{nodes:n,edges:e}}function at(n,e){const t=w(e),{nodes:r,edges:s}=V(),a=r.flat(),o=new Float32Array(n*3);for(let i=0;i<n;i++){let h,l,p;if(t()<.3){const u=a[Math.floor(t()*a.length)],f=.075*Math.cbrt(t()),v=t()*M,m=Math.acos(t()*2-1);h=u[0]+Math.sin(m)*Math.cos(v)*f,l=u[1]+Math.sin(m)*Math.sin(v)*f,p=u[2]+Math.cos(m)*f}else{const u=s[Math.floor(t()*s.length)],f=t(),v=.012;h=u[0][0]+(u[1][0]-u[0][0])*f+(t()-.5)*v,l=u[0][1]+(u[1][1]-u[0][1])*f+(t()-.5)*v,p=u[0][2]+(u[1][2]-u[0][2])*f+(t()-.5)*v}o[i*3]=h,o[i*3+1]=l,o[i*3+2]=p}return o}function it(n,e){const{nodes:t,edges:r}=V(),s=[...r];return t.forEach(a=>{for(let o=0;o<a.length;o++)s.push([a[o],a[(o+1)%a.length]])}),P(s,n,e)}function rt(n,e){const t=w(e),r=n.length,s=12,a=18,o=new Float32Array(r*3);for(let i=0;i<r;i++){const h=n[i];let l=Math.asin(Math.max(-1,Math.min(1,h[1]))),p=Math.atan2(h[2],h[0]);i%2===0?l=Math.round((l+Math.PI/2)/Math.PI*s)/s*Math.PI-Math.PI/2:p=Math.round((p+Math.PI)/M*a)/a*M-Math.PI;const u=Math.cos(l);o[i*3]=u*Math.cos(p)*(1+(t()-.5)*.015),o[i*3+1]=Math.sin(l),o[i*3+2]=u*Math.sin(p)*(1+(t()-.5)*.015)}return o}function nt(n,e){const t=[];for(let a=1;a<7;a++){const o=a/7*Math.PI-Math.PI/2,i=[];for(let h=0;h<=48;h++){const l=h/48*M-Math.PI;i.push([Math.cos(o)*Math.cos(l),Math.sin(o),Math.cos(o)*Math.sin(l)])}t.push(...x(i))}for(let a=0;a<12;a++){const o=a/12*M,i=[];for(let h=0;h<=48;h++){const l=h/48*Math.PI-Math.PI/2;i.push([Math.cos(l)*Math.cos(o),Math.sin(l),Math.cos(l)*Math.sin(o)])}t.push(...x(i))}return P(t,n,e)}function Z(){const e=-22*Math.PI/180,t=302*Math.PI/180,r=[];for(let l=0;l<=260;l++){const p=l/260,u=e+p*t;r.push([Math.cos(u)*.92,Math.sin(u)*.92,Math.sin(p*7)*.035])}const s=[];for(let l=0;l<=48;l++){const p=l/48,u=e-p*.62,f=.92*(1+p*.3);s.push([Math.cos(u)*f,Math.sin(u)*f-p*.14,0])}const a=[],o=.32,i=-.06;for(let l=0;l<=150;l++){const p=l/150*M;a.push([i+Math.cos(p)*o,Math.sin(p)*o,0])}const h=[];for(let l=0;l<=70;l++){const p=l/70;h.push([.26+(p>.76?(p-.76)*.85:0),.34-p*.62,0])}return[r,s,a,h]}function ht(n,e){const t=w(e),r=Z(),s=[];for(const i of r)s.push(...i);const a=n.length,o=new Float32Array(a*3);for(let i=0;i<a;i++){const h=s[Math.floor(t()*s.length)%s.length];o[i*3]=h[0]+(t()-.5)*.05,o[i*3+1]=h[1]+(t()-.5)*.05,o[i*3+2]=(h[2]??0)+(t()-.5)*.13}return o}function lt(n,e){const t=[];for(const r of Z())t.push(...x(r));return P(t,n,e)}function ct(n,e){const t=N(n,.02),r=new Float32Array(n*3),s=w(7);for(let a=0;a<n;a++){const o=.05*Math.cbrt(s()),i=s()*M,h=Math.acos(s()*2-1);r[a*3]=Math.sin(h)*Math.cos(i)*o,r[a*3+1]=Math.sin(h)*Math.sin(i)*o,r[a*3+2]=Math.cos(h)*o}return{core:r,points:[K(t),tt(t,12),at(n,23),rt(t,31),ht(t,41)],lines:[$(e,112),et(e,123),it(e,223),nt(e,331),lt(e,441)]}}const ut=`
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
uniform vec2  uPointer;
uniform vec3  uColorFrom;
uniform vec3  uColorTo;

attribute vec3  aFrom;
attribute vec3  aTo;
attribute vec3  aCore;
attribute float aScale;
attribute float aSeed;

varying vec3  vColor;
varying float vGlow;
varying float vFade;
varying float vHot;

void main() {
  vec3 shaped = mix(aFrom, aTo, uMix);

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
`,pt=`
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
`,ft=`
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
`,dt=`
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
`,F=5,G=[.8,.72,.78,.72,.92],C=[.34,.3,.46,.34,.55],B=[1.32,.78,.82,.78,1.24],O=[.1,-1.5,1.5,-1.5,0],L=[0,.02,.16,.02,0];class wt{constructor(e){c(this,"renderer");c(this,"scene",new W);c(this,"camera");c(this,"group",new Y);c(this,"points");c(this,"lines");c(this,"pMat");c(this,"lMat");c(this,"pGeo");c(this,"lGeo");c(this,"colors");c(this,"forms");c(this,"count");c(this,"lineSeg");c(this,"seg",-1);c(this,"reduced");c(this,"mobile");c(this,"progress",0);c(this,"targetProgress",0);c(this,"stage",0);c(this,"targetStage",0);c(this,"pointerView",new S);c(this,"intro",0);c(this,"introTarget",0);c(this,"pointer",new S(0,0));c(this,"pointerTarget",new S(0,0));c(this,"camZ",18);c(this,"spread",0);c(this,"quiet",0);c(this,"rtl",!1);c(this,"mouseForce",0);c(this,"offsetX",0);c(this,"offsetY",0);c(this,"spin",0);c(this,"time",0);c(this,"disposed",!1);this.reduced=e.reducedMotion,this.mobile=e.mobile,this.colors=e.colors.map(s=>new U(s)),this.renderer=new X({canvas:e.canvas,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.mobile?2:1.75)),this.renderer.setClearColor(0,0),this.camera=new j(48,1,.1,100),this.camera.position.set(0,0,this.camZ),this.group.scale.setScalar(e.mobile?2.2:2.85),this.scene.add(this.group);const t=window.innerWidth,r=window.innerHeight;this.count=this.reduced?1600:Math.round(d(t*r/(e.mobile?900:420),2400,e.mobile?3600:7e3)),this.lineSeg=this.reduced?260:e.mobile?420:900,this.mouseForce=this.reduced?0:e.mobile?.25:.9,this.forms=ct(this.count,this.lineSeg),this.buildPoints(),this.buildLines(),this.reduced&&(this.intro=this.introTarget=1,this.camZ=8.4,this.camera.position.z=this.camZ)}buildPoints(){const e=this.count;this.pGeo=new I;const t=new Float32Array(this.forms.points[0]),r=new Float32Array(this.forms.points[1]),s=new Float32Array(e),a=new Float32Array(e);for(let o=0;o<e;o++)s[o]=o%23===0?2.2:o%7===0?1.35:.7+Math.random()*.4,a[o]=Math.random();this.pGeo.setAttribute("position",new g(new Float32Array(t),3)),this.pGeo.setAttribute("aFrom",new g(t,3)),this.pGeo.setAttribute("aTo",new g(r,3)),this.pGeo.setAttribute("aCore",new g(new Float32Array(this.forms.core),3)),this.pGeo.setAttribute("aScale",new g(s,1)),this.pGeo.setAttribute("aSeed",new g(a,1)),this.pGeo.boundingSphere=new R(new _,4),this.pMat=new E({vertexShader:ut,fragmentShader:pt,transparent:!0,depthWrite:!1,depthTest:!1,blending:z,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uSize:{value:this.mobile?2.6:3.1},uPixelRatio:{value:this.renderer.getPixelRatio()},uBreathe:{value:1},uSpread:{value:0},uMouseForce:{value:this.mouseForce},uPointer:{value:new S},uPointerR:{value:2},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:G[0]}}}),this.points=new Q(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.group.add(this.points)}buildLines(){const e=this.lineSeg,t=e*2;this.lGeo=new I;const r=new Float32Array(this.forms.lines[0]),s=new Float32Array(this.forms.lines[1]),a=new Float32Array(t);for(let o=0;o<e;o++){const i=Math.random();a[o*2]=i,a[o*2+1]=i}this.lGeo.setAttribute("position",new g(new Float32Array(r),3)),this.lGeo.setAttribute("aFrom",new g(r,3)),this.lGeo.setAttribute("aTo",new g(s,3)),this.lGeo.setAttribute("aSeed",new g(a,1)),this.lGeo.boundingSphere=new R(new _,4),this.lMat=new E({vertexShader:ft,fragmentShader:dt,transparent:!0,depthWrite:!1,depthTest:!1,blending:z,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uBreathe:{value:1},uSpread:{value:0},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:C[0]}}}),this.lines=new D(this.lGeo,this.lMat),this.lines.frustumCulled=!1,this.group.add(this.lines)}playIntro(){this.introTarget=1}setScrollProgress(e){this.targetProgress=d(e,0,1)}setStage(e){this.targetStage=d(e,0,F-1)}setRTL(e){this.rtl=e}setQuiet(e){this.quiet=d(e,0,1)}setPointer(e,t){this.pointerTarget.set(e,-t)}pulse(){this.spin+=.28}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.pMat.uniforms.uPixelRatio.value=this.renderer.getPixelRatio()}applyStage(){const e=this.stage;let t=Math.floor(e);t>F-2&&(t=F-2),t<0&&(t=0);const r=d(e-t,0,1);if(t!==this.seg){this.seg=t;const f=this.pGeo.getAttribute("aFrom"),v=this.pGeo.getAttribute("aTo");f.array.set(this.forms.points[t]),v.array.set(this.forms.points[t+1]),f.needsUpdate=!0,v.needsUpdate=!0;const m=this.lGeo.getAttribute("aFrom"),b=this.lGeo.getAttribute("aTo");m.array.set(this.forms.lines[t]),b.array.set(this.forms.lines[t+1]),m.needsUpdate=!0,b.needsUpdate=!0}this.spread=this.reduced?0:Math.pow(Math.sin(d(r,0,1)*Math.PI),.8);const s=A(d((r-.08)/.84,0,1)),a=this.colors[t],o=this.colors[t+1],i=this.pMat.uniforms;i.uMix.value=s,i.uColorFrom.value.copy(a),i.uColorTo.value.copy(o);const h=1-this.quiet*.94;i.uOpacity.value=y(G[t],G[t+1],s)*h,i.uBreathe.value=y(B[t],B[t+1],s),i.uSpread.value=this.spread;const l=this.lMat.uniforms;l.uMix.value=s,l.uColorFrom.value.copy(a),l.uColorTo.value.copy(o),l.uOpacity.value=y(C[t],C[t+1],s)*h,l.uBreathe.value=i.uBreathe.value,l.uSpread.value=this.spread;const u=window.innerWidth>1024?y(O[t],O[t+1],s):0;this.offsetX=this.rtl?-u:u,this.offsetY=y(L[t],L[t+1],s)}update(e){if(this.disposed)return;const t=d(e,8,60);this.reduced||(this.time+=t),this.progress+=(this.targetProgress-this.progress)*d(t/260,0,1),this.stage+=(this.targetStage-this.stage)*d(t/220,0,1),this.intro+=(this.introTarget-this.intro)*d(t/620,0,1),this.pointer.lerp(this.pointerTarget,d(t/200,0,1));const r=y(8.6,7.4,A(this.progress))+(1-this.intro)*9+this.spread*.9;this.camZ+=(r-this.camZ)*d(t/900,0,1),this.camera.position.z=this.camZ,this.camera.position.x+=(this.pointer.x*.35-this.camera.position.x)*d(t/500,0,1),this.camera.position.y+=(this.pointer.y*.25-this.camera.position.y)*d(t/500,0,1),this.camera.lookAt(0,0,0),this.applyStage();const s=Math.abs(this.camZ)*Math.tan(this.camera.fov*Math.PI/360),a=s*this.camera.aspect;this.pointerView.set(this.pointer.x*a,this.pointer.y*s),this.pMat.uniforms.uTime.value=this.time,this.pMat.uniforms.uIntro.value=this.intro,this.pMat.uniforms.uPointer.value.copy(this.pointerView),this.pMat.uniforms.uPointerR.value=s*.42,this.lMat.uniforms.uTime.value=this.time,this.lMat.uniforms.uIntro.value=this.intro,this.reduced||(this.spin+=t*55e-6);const o=A(d((this.stage-(F-1)+.7)/.7,0,1)),i=this.spin*y(1,.5,o),h=this.progress*Math.PI*.85*y(1,.55,o);this.group.rotation.y=i+h+this.pointer.x*.18,this.group.rotation.x=Math.sin(this.time*13e-5)*.1-this.pointer.y*.12;const l=d(t/700,0,1);this.group.position.x+=(this.offsetX*2.6-this.group.position.x)*l,this.group.position.y+=(this.offsetY*2.6-this.group.position.y)*l,this.renderer.render(this.scene,this.camera)}debugState(){return{intro:this.intro,progress:this.progress,stage:this.stage,spread:this.spread,quiet:this.quiet,rtl:this.rtl,camZ:this.camZ,breathe:this.pMat.uniforms.uBreathe.value,opacity:this.pMat.uniforms.uOpacity.value,groupX:this.group.position.x,groupScale:this.group.scale.x,count:this.count,seg:this.seg,mix:this.pMat.uniforms.uMix.value}}dispose(){this.disposed=!0,this.pGeo?.dispose(),this.lGeo?.dispose(),this.pMat?.dispose(),this.lMat?.dispose(),this.renderer.dispose()}}export{wt as ParticleSystem};
