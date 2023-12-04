var le=Object.defineProperty;var ce=(s,t,e)=>t in s?le(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var U=(s,t,e)=>(ce(s,typeof t!="symbol"?t+"":t,e),e);import{M as W,V as l,C as L,F as ue,P as ve,a as me,W as fe,U as H,b as q,c as G,S as X,d as K,B as de,e as he,f as pe,g as Y,R as Q,h as j,i as O,A as ge,j as xe,k as we,I as ye,l as J,m as Se,G as be,n as $,o as Me,T as ee,p as te,q as Pe,r as ie,s as Ce,D as _e,t as De,u as Ee}from"./WebglThreeRender-EWXfKFhR.js";import{d as Te,r as oe,o as Re,a as ze,c as Be,b as Fe,p as Ae,e as Ve,f as Le,_ as We}from"./index--7M1sW-4.js";class ke extends W{constructor(t,e={}){super(t),this.isWater=!0;const m=this,b=e.textureWidth!==void 0?e.textureWidth:512,d=e.textureHeight!==void 0?e.textureHeight:512,C=e.clipBias!==void 0?e.clipBias:0,i=e.alpha!==void 0?e.alpha:1,o=e.time!==void 0?e.time:0,n=e.waterNormals!==void 0?e.waterNormals:null,M=e.sunDirection!==void 0?e.sunDirection:new l(.70707,.70707,0),c=new L(e.sunColor!==void 0?e.sunColor:16777215),F=new L(e.waterColor!==void 0?e.waterColor:8355711),_=e.eye!==void 0?e.eye:new l(0,0,0),p=e.distortionScale!==void 0?e.distortionScale:20,g=e.side!==void 0?e.side:ue,a=e.fog!==void 0?e.fog:!1,r=new ve,y=new l,x=new l,k=new l,D=new G,R=new l(0,0,-1),u=new K,w=new l,A=new l,z=new K,E=new G,v=new me,T=new fe(b,d),P={uniforms:H.merge([q.fog,q.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new G},sunColor:{value:new L(8355711)},sunDirection:{value:new l(.70707,.70707,0)},eye:{value:new l},waterColor:{value:new L(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},h=new X({fragmentShader:P.fragmentShader,vertexShader:P.vertexShader,uniforms:H.clone(P.uniforms),lights:!0,side:g,fog:a});h.uniforms.mirrorSampler.value=T.texture,h.uniforms.textureMatrix.value=E,h.uniforms.alpha.value=i,h.uniforms.time.value=o,h.uniforms.normalSampler.value=n,h.uniforms.sunColor.value=c,h.uniforms.waterColor.value=F,h.uniforms.sunDirection.value=M,h.uniforms.distortionScale.value=p,h.uniforms.eye.value=_,m.material=h,m.onBeforeRender=function(f,ne,V){if(x.setFromMatrixPosition(m.matrixWorld),k.setFromMatrixPosition(V.matrixWorld),D.extractRotation(m.matrixWorld),y.set(0,0,1),y.applyMatrix4(D),w.subVectors(x,k),w.dot(y)>0)return;w.reflect(y).negate(),w.add(x),D.extractRotation(V.matrixWorld),R.set(0,0,-1),R.applyMatrix4(D),R.add(k),A.subVectors(x,R),A.reflect(y).negate(),A.add(x),v.position.copy(w),v.up.set(0,1,0),v.up.applyMatrix4(D),v.up.reflect(y),v.lookAt(A),v.far=V.far,v.updateMatrixWorld(),v.projectionMatrix.copy(V.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(v.projectionMatrix),E.multiply(v.matrixWorldInverse),r.setFromNormalAndCoplanarPoint(y,x),r.applyMatrix4(v.matrixWorldInverse),u.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const S=v.projectionMatrix;z.x=(Math.sign(u.x)+S.elements[8])/S.elements[0],z.y=(Math.sign(u.y)+S.elements[9])/S.elements[5],z.z=-1,z.w=(1+S.elements[10])/S.elements[14],u.multiplyScalar(2/u.dot(z)),S.elements[2]=u.x,S.elements[6]=u.y,S.elements[10]=u.z+1-C,S.elements[14]=u.w,_.setFromMatrixPosition(V.matrixWorld);const ae=f.getRenderTarget(),re=f.xr.enabled,se=f.shadowMap.autoUpdate;m.visible=!1,f.xr.enabled=!1,f.shadowMap.autoUpdate=!1,f.setRenderTarget(T),f.state.buffers.depth.setMask(!0),f.autoClear===!1&&f.clear(),f.render(ne,v),m.visible=!0,f.xr.enabled=re,f.shadowMap.autoUpdate=se,f.setRenderTarget(ae);const Z=V.viewport;Z!==void 0&&f.state.viewport(Z)}}}class I extends W{constructor(){const t=I.SkyShader,e=new X({name:"SkyShader",fragmentShader:t.fragmentShader,vertexShader:t.vertexShader,uniforms:H.clone(t.uniforms),side:de,depthWrite:!1});super(new he(1,1,1),e),this.isSky=!0}}I.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new l},up:{value:new l(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class N extends W{constructor(){super(N.Geometry,new pe({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new l,e=new l,m=new Y(16,16,Q),b=new Y(16,16,Q),d=N.Geometry,C=new j({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),i=new j({uniforms:{map:{value:m},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),o=new W(d,C),n=[],M=B.Shader,c=new j({uniforms:{map:{value:null},occlusionMap:{value:b},color:{value:new L(16777215)},scale:{value:new O},screenPosition:{value:new l}},vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,blending:ge,transparent:!0,depthWrite:!1}),F=new W(d,c);this.addElement=function(r){n.push(r)};const _=new O,p=new O,g=new xe,a=new K;this.onBeforeRender=function(r,y,x){r.getCurrentViewport(a);const k=a.w/a.z,D=a.z/2,R=a.w/2;let u=16/a.w;if(_.set(u*k,u),g.min.set(a.x,a.y),g.max.set(a.x+(a.z-16),a.y+(a.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(x.matrixWorldInverse),!(e.z>0)&&(t.copy(e).applyMatrix4(x.projectionMatrix),p.x=a.x+t.x*D+D-8,p.y=a.y+t.y*R+R-8,g.containsPoint(p))){r.copyFramebufferToTexture(p,m);let w=C.uniforms;w.scale.value=_,w.screenPosition.value=t,r.renderBufferDirect(x,null,d,C,o,null),r.copyFramebufferToTexture(p,b),w=i.uniforms,w.scale.value=_,w.screenPosition.value=t,r.renderBufferDirect(x,null,d,i,o,null);const A=-t.x*2,z=-t.y*2;for(let E=0,v=n.length;E<v;E++){const T=n[E],P=c.uniforms;P.color.value.copy(T.color),P.map.value=T.texture,P.screenPosition.value.x=t.x+A*T.distance,P.screenPosition.value.y=t.y+z*T.distance,u=T.size/a.w;const h=a.w/a.z;P.scale.value.set(u*h,u),c.uniformsNeedUpdate=!0,r.renderBufferDirect(x,null,d,c,F,null)}}},this.dispose=function(){C.dispose(),i.dispose(),c.dispose(),m.dispose(),b.dispose();for(let r=0,y=n.length;r<y;r++)n[r].texture.dispose()}}}class B{constructor(t,e=1,m=0,b=new L(16777215)){this.texture=t,this.size=e,this.distance=m,this.color=b}}B.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};N.Geometry=function(){const s=new we,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new ye(t,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new J(e,3,0,!1)),s.setAttribute("uv",new J(e,2,3,!1)),s}();const Ue=""+new URL("lensflare0-QA4pBekj.png",import.meta.url).href,Ne=""+new URL("lensflare1-vf6V-Y-6.png",import.meta.url).href;var Ie=`varying vec2 vUV;
varying vec3 vNormal;

void main () {
  vUV = uv;
  vNormal = vec3(normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ge=`varying vec2 vUV;
varying vec3 vNormal;

void main () {
  vec4 c = vec4(abs(vNormal) + vec3(vUV, 0.0), 0.1);
  gl_FragColor = c;
}`;const je=""+new URL("waternormals-35viC6WO.jpg",import.meta.url).href,Oe=s=>(Ae("data-v-1f5f975a"),s=s(),Ve(),s),He={id:"ocean",class:"webgl"},Ke=Oe(()=>Le("div",{id:"ocean-webgl",class:"webgl-3d"},null,-1)),Xe=[Ke],Ze=Te({__name:"index",setup(s){class t extends Se{constructor(i,o={}){super(i,o);U(this,"sky");U(this,"water");U(this,"island");U(this,"state",{loadingProcess:0,sceneReady:!1});this.myDraw()}loadModel(){this.loader=new be,this.loader.load("./models/island.glb",i=>{const o=i.scene;o.traverse(n=>{n.isMesh&&(n.material.metalness=.4,n.material.roughness=.6)}),o.position.set(0,-5.5,0),o.scale.set(80,80,80),this.island=o,this.scene.add(o)}),this.loader.load("./models/flamingo.glb",i=>{const o=i.scene.children[0];o.scale.set(.4,.4,.4),o.position.set(-180,80,-160),o.rotation.set(.2,-.8,0),this.scene.add(o);const n=o.clone();n.scale.set(.4,.4,.4),n.position.set(-60,75,-260),n.rotation.set(.2,-.8,0),this.scene.add(n);const M=new $(o);M.clipAction(i.animations[0]).setDuration(1.2).play(),this.mixers.push(M);const c=new $(n);c.clipAction(i.animations[0]).setDuration(1.8).play(),this.mixers.push(c)})}initSky(){this.sky=new I,this.sky.scale.setScalar(1e4),this.scene.add(this.sky);const i=this.sky.material.uniforms;i.turbidity.value=20,i.rayleigh.value=2,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.8}initSea(){const i=new Me(1e4,1e4);this.water=new ke(i,{textureWidth:512,textureHeight:512,waterNormals:new ee().load(je,o=>{o.wrapS=te,o.wrapT=te}),sunDirection:new l,sunColor:16777215,waterColor:29439,distortionScale:4,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water)}initSun(){const i=new l,o=new Pe(this.renderer),n=ie.degToRad(88),M=ie.degToRad(180);i.setFromSphericalCoords(1,n,M),this.sky.material.uniforms.sunPosition.value.copy(i),this.water.material.uniforms.sunDirection.value.copy(i).normalize(),this.scene.environment=o.fromScene(this.sky).texture;const c=new Ce(16777215,1.2,2e3);c.color.setHSL(.995,.5,.9),c.position.set(0,45,-5e3);const F=new ee,_=F.load(Ue),p=F.load(Ne),g=new N;g.addElement(new B(_,600,0,c.color)),g.addElement(new B(p,60,.6)),g.addElement(new B(p,70,.7)),g.addElement(new B(p,120,.9)),g.addElement(new B(p,70,1)),c.add(g),this.scene.add(c)}initTorus(){const i=new X({side:_e,transparent:!0,uniforms:{},vertexShader:Ie,fragmentShader:Ge}),o=new De(200,10,50,100),n=new W(o,i);n.opacity=.1,n.position.set(0,-80,-650),n.scale.set(1.8,1.8,1.8),this.scene.add(n)}animate2(){requestAnimationFrame(this.animate2.bind(this)),this.water.material.uniforms.time.value+=2/60;const i=this.clock.getDelta();this.mixers&&this.mixers.forEach(o=>{o.update(i)})}resetCamera(){this.camera.near=1,this.camera.updateProjectionMatrix(),this.camera.position.set(65,160,320)}resetControls(){this.controls.target.set(0,0,0),this.controls.maxPolarAngle=1.4,this.controls.minDistance=180,this.controls.maxDistance=800,this.controls.enabled=!0}resetRender(){this.renderer.toneMapping=Ee}myDraw(){this.initSea(),this.initSky(),this.initSun(),this.initTorus(),this.loadModel(),this.resetCamera(),this.resetControls(),this.resetRender(),this.animate2()}}const e=oe(null),m=oe({width:0,height:0});function b(){const d=document.getElementById("ocean-webgl");m.value={width:d.offsetWidth,height:d.offsetHeight},e.value=new t(d,{logarithmicDepthBuffer:!1})}return Re(()=>{b()}),ze(()=>{e.value&&(e.value.destroyed(e.value),cancelAnimationFrame(e.value.animate),cancelAnimationFrame(e.value.animate2),e.value.scene.clear()),e.value=null}),(d,C)=>(Fe(),Be("div",He,Xe))}}),Je=We(Ze,[["__scopeId","data-v-1f5f975a"]]);export{Je as default};
