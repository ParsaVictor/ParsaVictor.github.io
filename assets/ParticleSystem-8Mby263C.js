var j=Object.defineProperty;var Q=(n,e,t)=>e in n?j(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>Q(n,typeof e!="symbol"?e+"":e,t);import{S as D,G as J,V as F,C as K,W as $,P as tt,B as _,a as g,b as R,c as B,d as O,A as L,e as et,L as ot}from"./three-0Ov1NEkI.js";import{m as w,c as d,l as v,s as A}from"./index-YR-JUVSx.js";import"./vendor-DYodzFiF.js";import"./gsap-xgxdCp6f.js";const M=Math.PI*2,st=Math.PI*(3-Math.sqrt(5));function W(n,e=0){const t=w(99),r=[];for(let o=0;o<n;o++){const i=1-o/(n-1)*2,s=Math.sqrt(Math.max(0,1-i*i)),a=st*o,h=1+(t()-.5)*e;r.push([Math.cos(a)*s*h,i*h,Math.sin(a)*s*h])}return r}function S(n,e,t){const r=w(t),o=new Float32Array(e*6),i=n.length||1;for(let s=0;s<e;s++){const a=n[Math.floor(r()*i)%i]||[[0,0,0],[0,0,0]];o[s*6]=a[0][0],o[s*6+1]=a[0][1],o[s*6+2]=a[0][2],o[s*6+3]=a[1][0],o[s*6+4]=a[1][1],o[s*6+5]=a[1][2]}return o}function x(n){const e=[];for(let t=0;t<n.length-1;t++)e.push([n[t],n[t+1]]);return e}function it(n){const e=new Float32Array(n.length*3);return n.forEach((t,r)=>{e[r*3]=t[0],e[r*3+1]=t[1],e[r*3+2]=t[2]}),e}function at(n,e){const r=W(1100),o=[];for(let i=0;i<1100;i++)for(const s of[21,34]){const a=r[(i+s)%1100],h=r[i];Math.hypot(h[0]-a[0],h[1]-a[1],h[2]-a[2])<.42&&o.push([h,a])}return S(o,n,e)}function rt(n,e){const t=w(e),r=n.length,o=new Float32Array(r*3);for(let i=0;i<r;i++){const s=n[i],a=Math.hypot(s[0],s[1]),h=Math.atan2(s[1],s[0]),l=i/r;let u,p,f;if(l<.12){const m=.14*Math.sqrt(t()),b=t()*M;u=Math.cos(b)*m,p=Math.sin(b)*m,f=.14+(t()-.5)*.05}else if(l<.85){const P=.2+(1+Math.floor((a+t()*.12)/1.05*9))/9*.62;u=Math.cos(h)*P,p=Math.sin(h)*P,f=(t()-.5)*.12+Math.cos(P*6)*.05}else{const m=.98+(t()-.5)*.04;u=Math.cos(h)*m,p=Math.sin(h)*m*.82,f=(t()-.5)*.06}const y=Math.hypot(u,p);o[i*3]=u,o[i*3+1]=p,o[i*3+2]=f+Math.cos(Math.min(1,y)*Math.PI*.5)*.34}return o}function nt(n,e){const t=[],r=[.2,.34,.48,.62,.78,.98];r.forEach((o,i)=>{const a=i===r.length-1?.82:1,h=Math.cos(Math.min(1,o)*Math.PI*.5)*.34,l=[];for(let u=0;u<=60;u++){const p=u/60*M;l.push([Math.cos(p)*o,Math.sin(p)*o*a,h])}t.push(...x(l))});for(let o=0;o<32;o++){const i=o/32*M,s=a=>Math.cos(Math.min(1,a)*Math.PI*.5)*.34;t.push([[Math.cos(i)*.2,Math.sin(i)*.2,s(.2)],[Math.cos(i)*.78,Math.sin(i)*.78,s(.78)]])}return S(t,n,e)}const ht=[3,6,6,4],lt=[-1.12,-.38,.38,1.12],z=[.44,.82,.82,.5];function U(){const n=ht.map((t,r)=>{const o=[];for(let i=0;i<t;i++){const s=i/t*M+r*.42;o.push([lt[r],Math.cos(s)*z[r],Math.sin(s)*z[r]])}return o}),e=[];for(let t=0;t<n.length-1;t++)for(const r of n[t])for(const o of n[t+1])e.push([r,o]);return{nodes:n,edges:e}}function ct(n,e){const t=w(e),{nodes:r,edges:o}=U(),i=r.flat(),s=new Float32Array(n*3);for(let a=0;a<n;a++){let h,l,u;if(t()<.3){const p=i[Math.floor(t()*i.length)],f=.075*Math.cbrt(t()),y=t()*M,m=Math.acos(t()*2-1);h=p[0]+Math.sin(m)*Math.cos(y)*f,l=p[1]+Math.sin(m)*Math.sin(y)*f,u=p[2]+Math.cos(m)*f}else{const p=o[Math.floor(t()*o.length)],f=t(),y=.012;h=p[0][0]+(p[1][0]-p[0][0])*f+(t()-.5)*y,l=p[0][1]+(p[1][1]-p[0][1])*f+(t()-.5)*y,u=p[0][2]+(p[1][2]-p[0][2])*f+(t()-.5)*y}s[a*3]=h,s[a*3+1]=l,s[a*3+2]=u}return s}function ut(n,e){const{nodes:t,edges:r}=U(),o=[...r];return t.forEach(i=>{for(let s=0;s<i.length;s++)o.push([i[s],i[(s+1)%i.length]])}),S(o,n,e)}function pt(n,e){const t=w(e),r=n.length,o=12,i=18,s=new Float32Array(r*3);for(let a=0;a<r;a++){const h=n[a];let l=Math.asin(Math.max(-1,Math.min(1,h[1]))),u=Math.atan2(h[2],h[0]);a%2===0?l=Math.round((l+Math.PI/2)/Math.PI*o)/o*Math.PI-Math.PI/2:u=Math.round((u+Math.PI)/M*i)/i*M-Math.PI;const p=Math.cos(l);s[a*3]=p*Math.cos(u)*(1+(t()-.5)*.015),s[a*3+1]=Math.sin(l),s[a*3+2]=p*Math.sin(u)*(1+(t()-.5)*.015)}return s}function ft(n,e){const t=[];for(let i=1;i<7;i++){const s=i/7*Math.PI-Math.PI/2,a=[];for(let h=0;h<=48;h++){const l=h/48*M-Math.PI;a.push([Math.cos(s)*Math.cos(l),Math.sin(s),Math.cos(s)*Math.sin(l)])}t.push(...x(a))}for(let i=0;i<12;i++){const s=i/12*M,a=[];for(let h=0;h<=48;h++){const l=h/48*Math.PI-Math.PI/2;a.push([Math.cos(l)*Math.cos(s),Math.sin(l),Math.cos(l)*Math.sin(s)])}t.push(...x(a))}return S(t,n,e)}function X(){const e=-22*Math.PI/180,t=302*Math.PI/180,r=[];for(let l=0;l<=260;l++){const u=l/260,p=e+u*t;r.push([Math.cos(p)*.92,Math.sin(p)*.92,Math.sin(u*7)*.035])}const o=[];for(let l=0;l<=48;l++){const u=l/48,p=e-u*.62,f=.92*(1+u*.3);o.push([Math.cos(p)*f,Math.sin(p)*f-u*.14,0])}const i=[],s=.32,a=-.06;for(let l=0;l<=150;l++){const u=l/150*M;i.push([a+Math.cos(u)*s,Math.sin(u)*s,0])}const h=[];for(let l=0;l<=70;l++){const u=l/70;h.push([.26+(u>.76?(u-.76)*.85:0),.34-u*.62,0])}return[r,o,i,h]}function dt(n,e){const t=w(e),r=X(),o=[];for(const a of r)o.push(...a);const i=n.length,s=new Float32Array(i*3);for(let a=0;a<i;a++){const h=o[Math.floor(t()*o.length)%o.length];s[a*3]=h[0]+(t()-.5)*.05,s[a*3+1]=h[1]+(t()-.5)*.05,s[a*3+2]=(h[2]??0)+(t()-.5)*.13}return s}function mt(n,e){const t=[];for(const r of X())t.push(...x(r));return S(t,n,e)}function vt(n,e){const t=W(n,.02),r=new Float32Array(n*3),o=w(7);for(let i=0;i<n;i++){const s=.05*Math.cbrt(o()),a=o()*M,h=Math.acos(o()*2-1);r[i*3]=Math.sin(h)*Math.cos(a)*s,r[i*3+1]=Math.sin(h)*Math.sin(a)*s,r[i*3+2]=Math.cos(h)*s}return{core:r,points:[it(t),rt(t,12),ct(n,23),pt(t,31),dt(t,41)],lines:[at(e,112),nt(e,123),ut(e,223),ft(e,331),mt(e,441)]}}const Mt=`
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
`,gt=`
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
`,yt=`
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
`,wt=`
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
`,T=5,I=[.8,.72,.78,.72,.92],C=[.34,.3,.46,.34,.55],k=[1.32,.78,.82,.78,1.24],N=[.1,-1.5,1.5,-1.5,0],H=[0,.02,.16,.02,0],V=[0,.82,.82,.82,.05],Z=[1,.5,.55,.5,.95],q=[1,.3,.42,.3,.9],Y=[1.18,.62,.66,.62,1.08];class xt{constructor(e){c(this,"renderer");c(this,"scene",new D);c(this,"camera");c(this,"group",new J);c(this,"points");c(this,"lines");c(this,"pMat");c(this,"lMat");c(this,"pGeo");c(this,"lGeo");c(this,"colors");c(this,"forms");c(this,"count");c(this,"lineSeg");c(this,"seg",-1);c(this,"reduced");c(this,"mobile");c(this,"progress",0);c(this,"targetProgress",0);c(this,"stage",0);c(this,"targetStage",0);c(this,"pointerView",new F);c(this,"intro",0);c(this,"introTarget",0);c(this,"pointer",new F(0,0));c(this,"pointerTarget",new F(0,0));c(this,"camZ",18);c(this,"spread",0);c(this,"quiet",0);c(this,"rtl",!1);c(this,"mouseForce",0);c(this,"offsetX",0);c(this,"offsetY",0);c(this,"spin",0);c(this,"time",0);c(this,"disposed",!1);this.reduced=e.reducedMotion,this.mobile=e.mobile,this.colors=e.colors.map(o=>new K(o)),this.renderer=new $({canvas:e.canvas,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e.mobile?1.5:1.75)),this.renderer.setClearColor(0,0),this.camera=new tt(48,1,.1,100),this.camera.position.set(0,0,this.camZ),this.group.scale.setScalar(e.mobile?2.05:2.85),this.scene.add(this.group);const t=window.innerWidth,r=window.innerHeight;this.count=this.reduced?1600:Math.round(d(t*r/(e.mobile?1100:420),e.mobile?1600:2400,e.mobile?2600:7e3)),this.lineSeg=this.reduced?260:e.mobile?300:900,this.mouseForce=this.reduced?0:e.mobile?.25:.9,this.forms=vt(this.count,this.lineSeg),this.buildPoints(),this.buildLines(),this.reduced&&(this.intro=this.introTarget=1,this.camZ=8.4,this.camera.position.z=this.camZ)}buildPoints(){const e=this.count;this.pGeo=new _;const t=new Float32Array(this.forms.points[0]),r=new Float32Array(this.forms.points[1]),o=new Float32Array(e),i=new Float32Array(e);for(let s=0;s<e;s++)o[s]=s%23===0?2.2:s%7===0?1.35:.7+Math.random()*.4,i[s]=Math.random();this.pGeo.setAttribute("position",new g(new Float32Array(t),3)),this.pGeo.setAttribute("aFrom",new g(t,3)),this.pGeo.setAttribute("aTo",new g(r,3)),this.pGeo.setAttribute("aCore",new g(new Float32Array(this.forms.core),3)),this.pGeo.setAttribute("aScale",new g(o,1)),this.pGeo.setAttribute("aSeed",new g(i,1)),this.pGeo.boundingSphere=new R(new B,4),this.pMat=new O({vertexShader:Mt,fragmentShader:gt,transparent:!0,depthWrite:!1,depthTest:!1,blending:L,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uSize:{value:this.mobile?2.3:3.1},uPixelRatio:{value:this.renderer.getPixelRatio()},uBreathe:{value:1},uSpread:{value:0},uMouseForce:{value:this.mouseForce},uPointer:{value:new F},uPointerR:{value:2},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:I[0]}}}),this.points=new et(this.pGeo,this.pMat),this.points.frustumCulled=!1,this.group.add(this.points)}buildLines(){const e=this.lineSeg,t=e*2;this.lGeo=new _;const r=new Float32Array(this.forms.lines[0]),o=new Float32Array(this.forms.lines[1]),i=new Float32Array(t);for(let s=0;s<e;s++){const a=Math.random();i[s*2]=a,i[s*2+1]=a}this.lGeo.setAttribute("position",new g(new Float32Array(r),3)),this.lGeo.setAttribute("aFrom",new g(r,3)),this.lGeo.setAttribute("aTo",new g(o,3)),this.lGeo.setAttribute("aSeed",new g(i,1)),this.lGeo.boundingSphere=new R(new B,4),this.lMat=new O({vertexShader:yt,fragmentShader:wt,transparent:!0,depthWrite:!1,depthTest:!1,blending:L,uniforms:{uTime:{value:0},uMix:{value:0},uIntro:{value:this.reduced?1:0},uBreathe:{value:1},uSpread:{value:0},uColorFrom:{value:this.colors[0].clone()},uColorTo:{value:this.colors[1].clone()},uOpacity:{value:C[0]}}}),this.lines=new ot(this.lGeo,this.lMat),this.lines.frustumCulled=!1,this.group.add(this.lines)}playIntro(){this.introTarget=1}setScrollProgress(e){this.targetProgress=d(e,0,1)}setStage(e){this.targetStage=d(e,0,T-1)}setRTL(e){this.rtl=e}setQuiet(e){this.quiet=d(e,0,1)}setPointer(e,t){this.pointerTarget.set(e,-t)}pulse(){this.spin+=.28}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.pMat.uniforms.uPixelRatio.value=this.renderer.getPixelRatio()}applyStage(){const e=this.stage;let t=Math.floor(e);t>T-2&&(t=T-2),t<0&&(t=0);const r=d(e-t,0,1);if(t!==this.seg){this.seg=t;const b=this.pGeo.getAttribute("aFrom"),P=this.pGeo.getAttribute("aTo");b.array.set(this.forms.points[t]),P.array.set(this.forms.points[t+1]),b.needsUpdate=!0,P.needsUpdate=!0;const G=this.lGeo.getAttribute("aFrom"),E=this.lGeo.getAttribute("aTo");G.array.set(this.forms.lines[t]),E.array.set(this.forms.lines[t+1]),G.needsUpdate=!0,E.needsUpdate=!0}this.spread=this.reduced?0:Math.pow(Math.sin(d(r,0,1)*Math.PI),.8);const o=A(d((r-.08)/.84,0,1)),i=this.colors[t],s=this.colors[t+1],a=this.pMat.uniforms;a.uMix.value=o,a.uColorFrom.value.copy(i),a.uColorTo.value.copy(s);const h=1-this.quiet*.94,l=this.mobile,u=l?v(Z[t],Z[t+1],o):1,p=l?v(q[t],q[t+1],o):1;a.uOpacity.value=v(I[t],I[t+1],o)*h*u,a.uBreathe.value=l?v(Y[t],Y[t+1],o):v(k[t],k[t+1],o),a.uSpread.value=this.spread;const f=this.lMat.uniforms;f.uMix.value=o,f.uColorFrom.value.copy(i),f.uColorTo.value.copy(s),f.uOpacity.value=v(C[t],C[t+1],o)*h*p,f.uBreathe.value=a.uBreathe.value,f.uSpread.value=this.spread;const m=window.innerWidth>1024?v(N[t],N[t+1],o):0;this.offsetX=this.rtl?-m:m,this.offsetY=l?v(V[t],V[t+1],o):v(H[t],H[t+1],o)}update(e){if(this.disposed)return;const t=d(e,8,60);this.reduced||(this.time+=t),this.progress+=(this.targetProgress-this.progress)*d(t/260,0,1),this.stage+=(this.targetStage-this.stage)*d(t/220,0,1),this.intro+=(this.introTarget-this.intro)*d(t/620,0,1),this.pointer.lerp(this.pointerTarget,d(t/200,0,1));const r=v(8.6,7.4,A(this.progress))+(1-this.intro)*9+this.spread*.9;this.camZ+=(r-this.camZ)*d(t/900,0,1),this.camera.position.z=this.camZ,this.camera.position.x+=(this.pointer.x*.35-this.camera.position.x)*d(t/500,0,1),this.camera.position.y+=(this.pointer.y*.25-this.camera.position.y)*d(t/500,0,1),this.camera.lookAt(0,0,0),this.applyStage();const o=Math.abs(this.camZ)*Math.tan(this.camera.fov*Math.PI/360),i=o*this.camera.aspect;this.pointerView.set(this.pointer.x*i,this.pointer.y*o),this.pMat.uniforms.uTime.value=this.time,this.pMat.uniforms.uIntro.value=this.intro,this.pMat.uniforms.uPointer.value.copy(this.pointerView),this.pMat.uniforms.uPointerR.value=o*.42,this.lMat.uniforms.uTime.value=this.time,this.lMat.uniforms.uIntro.value=this.intro,this.reduced||(this.spin+=t*55e-6);const s=A(d((this.stage-(T-1)+.7)/.7,0,1)),a=this.spin*v(1,.5,s),h=this.progress*Math.PI*.85*v(1,.55,s);this.group.rotation.y=a+h+this.pointer.x*.18,this.group.rotation.x=Math.sin(this.time*13e-5)*.1-this.pointer.y*.12;const l=d(t/700,0,1);this.group.position.x+=(this.offsetX*2.6-this.group.position.x)*l,this.group.position.y+=(this.offsetY*2.6-this.group.position.y)*l,this.renderer.render(this.scene,this.camera)}debugState(){return{intro:this.intro,progress:this.progress,stage:this.stage,spread:this.spread,quiet:this.quiet,rtl:this.rtl,camZ:this.camZ,breathe:this.pMat.uniforms.uBreathe.value,opacity:this.pMat.uniforms.uOpacity.value,groupX:this.group.position.x,groupScale:this.group.scale.x,count:this.count,seg:this.seg,mix:this.pMat.uniforms.uMix.value}}dispose(){this.disposed=!0,this.pGeo?.dispose(),this.lGeo?.dispose(),this.pMat?.dispose(),this.lMat?.dispose(),this.renderer.dispose()}}export{xt as ParticleSystem};
