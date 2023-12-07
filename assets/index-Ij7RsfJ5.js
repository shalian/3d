var ce=Object.defineProperty;var ue=(s,i,e)=>i in s?ce(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e;var A=(s,i,e)=>(ue(s,typeof i!="symbol"?i+"":i,e),e);import{d as ve,r as j,o as de,a as me,c as fe,b as I,w as he,v as pe,e as ge,f as xe,g as we,t as ye,p as Se,h as Me,_ as be}from"./index-bH0oN4uq.js";import{M as k,V as l,C as W,F as Pe,P as Ce,a as _e,W as De,U as X,b as Q,c as O,S as q,d as Z,B as Te,e as Ee,f as Re,g as J,R as $,h as H,i as K,A as ze,j as Le,k as Be,I as Fe,l as ee,L as Ve,m as Ae,G as We,n as te,o as ke,T as ie,p as oe,q as Ue,r as ne,s as Ne,D as Ie,t as Ge,u as je}from"./loading-IcugxdLB.js";class Oe extends k{constructor(i,e={}){super(i),this.isWater=!0;const v=this,f=e.textureWidth!==void 0?e.textureWidth:512,b=e.textureHeight!==void 0?e.textureHeight:512,h=e.clipBias!==void 0?e.clipBias:0,R=e.alpha!==void 0?e.alpha:1,o=e.time!==void 0?e.time:0,t=e.waterNormals!==void 0?e.waterNormals:null,a=e.sunDirection!==void 0?e.sunDirection:new l(.70707,.70707,0),p=new W(e.sunColor!==void 0?e.sunColor:16777215),g=new W(e.waterColor!==void 0?e.waterColor:8355711),P=e.eye!==void 0?e.eye:new l(0,0,0),C=e.distortionScale!==void 0?e.distortionScale:20,y=e.side!==void 0?e.side:Pe,n=e.fog!==void 0?e.fog:!1,r=new Ce,S=new l,x=new l,U=new l,D=new O,z=new l(0,0,-1),c=new Z,w=new l,F=new l,L=new Z,T=new O,u=new _e,E=new De(f,b),_={uniforms:X.merge([Q.fog,Q.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new O},sunColor:{value:new W(8355711)},sunDirection:{value:new l(.70707,.70707,0)},eye:{value:new l},waterColor:{value:new W(5592405)}}]),vertexShader:`
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
				}`},m=new q({fragmentShader:_.fragmentShader,vertexShader:_.vertexShader,uniforms:X.clone(_.uniforms),lights:!0,side:y,fog:n});m.uniforms.mirrorSampler.value=E.texture,m.uniforms.textureMatrix.value=T,m.uniforms.alpha.value=R,m.uniforms.time.value=o,m.uniforms.normalSampler.value=t,m.uniforms.sunColor.value=p,m.uniforms.waterColor.value=g,m.uniforms.sunDirection.value=a,m.uniforms.distortionScale.value=C,m.uniforms.eye.value=P,v.material=m,v.onBeforeRender=function(d,ae,V){if(x.setFromMatrixPosition(v.matrixWorld),U.setFromMatrixPosition(V.matrixWorld),D.extractRotation(v.matrixWorld),S.set(0,0,1),S.applyMatrix4(D),w.subVectors(x,U),w.dot(S)>0)return;w.reflect(S).negate(),w.add(x),D.extractRotation(V.matrixWorld),z.set(0,0,-1),z.applyMatrix4(D),z.add(U),F.subVectors(x,z),F.reflect(S).negate(),F.add(x),u.position.copy(w),u.up.set(0,1,0),u.up.applyMatrix4(D),u.up.reflect(S),u.lookAt(F),u.far=V.far,u.updateMatrixWorld(),u.projectionMatrix.copy(V.projectionMatrix),T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(u.projectionMatrix),T.multiply(u.matrixWorldInverse),r.setFromNormalAndCoplanarPoint(S,x),r.applyMatrix4(u.matrixWorldInverse),c.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const M=u.projectionMatrix;L.x=(Math.sign(c.x)+M.elements[8])/M.elements[0],L.y=(Math.sign(c.y)+M.elements[9])/M.elements[5],L.z=-1,L.w=(1+M.elements[10])/M.elements[14],c.multiplyScalar(2/c.dot(L)),M.elements[2]=c.x,M.elements[6]=c.y,M.elements[10]=c.z+1-h,M.elements[14]=c.w,P.setFromMatrixPosition(V.matrixWorld);const re=d.getRenderTarget(),se=d.xr.enabled,le=d.shadowMap.autoUpdate;v.visible=!1,d.xr.enabled=!1,d.shadowMap.autoUpdate=!1,d.setRenderTarget(E),d.state.buffers.depth.setMask(!0),d.autoClear===!1&&d.clear(),d.render(ae,u),v.visible=!0,d.xr.enabled=se,d.shadowMap.autoUpdate=le,d.setRenderTarget(re);const Y=V.viewport;Y!==void 0&&d.state.viewport(Y)}}}class G extends k{constructor(){const i=G.SkyShader,e=new q({name:"SkyShader",fragmentShader:i.fragmentShader,vertexShader:i.vertexShader,uniforms:X.clone(i.uniforms),side:Te,depthWrite:!1});super(new Ee(1,1,1),e),this.isSky=!0}}G.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new l},up:{value:new l(0,1,0)}},vertexShader:`
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

		}`};class N extends k{constructor(){super(N.Geometry,new Re({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new l,e=new l,v=new J(16,16,$),f=new J(16,16,$),b=N.Geometry,h=new H({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),R=new H({uniforms:{map:{value:v},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),o=new k(b,h),t=[],a=B.Shader,p=new H({uniforms:{map:{value:null},occlusionMap:{value:f},color:{value:new W(16777215)},scale:{value:new K},screenPosition:{value:new l}},vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:ze,transparent:!0,depthWrite:!1}),g=new k(b,p);this.addElement=function(r){t.push(r)};const P=new K,C=new K,y=new Le,n=new Z;this.onBeforeRender=function(r,S,x){r.getCurrentViewport(n);const U=n.w/n.z,D=n.z/2,z=n.w/2;let c=16/n.w;if(P.set(c*U,c),y.min.set(n.x,n.y),y.max.set(n.x+(n.z-16),n.y+(n.w-16)),e.setFromMatrixPosition(this.matrixWorld),e.applyMatrix4(x.matrixWorldInverse),!(e.z>0)&&(i.copy(e).applyMatrix4(x.projectionMatrix),C.x=n.x+i.x*D+D-8,C.y=n.y+i.y*z+z-8,y.containsPoint(C))){r.copyFramebufferToTexture(C,v);let w=h.uniforms;w.scale.value=P,w.screenPosition.value=i,r.renderBufferDirect(x,null,b,h,o,null),r.copyFramebufferToTexture(C,f),w=R.uniforms,w.scale.value=P,w.screenPosition.value=i,r.renderBufferDirect(x,null,b,R,o,null);const F=-i.x*2,L=-i.y*2;for(let T=0,u=t.length;T<u;T++){const E=t[T],_=p.uniforms;_.color.value.copy(E.color),_.map.value=E.texture,_.screenPosition.value.x=i.x+F*E.distance,_.screenPosition.value.y=i.y+L*E.distance,c=E.size/n.w;const m=n.w/n.z;_.scale.value.set(c*m,c),p.uniformsNeedUpdate=!0,r.renderBufferDirect(x,null,b,p,g,null)}}},this.dispose=function(){h.dispose(),R.dispose(),p.dispose(),v.dispose(),f.dispose();for(let r=0,S=t.length;r<S;r++)t[r].texture.dispose()}}}class B{constructor(i,e=1,v=0,f=new W(16777215)){this.texture=i,this.size=e,this.distance=v,this.color=f}}B.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};N.Geometry=function(){const s=new Be,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),e=new Fe(i,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new ee(e,3,0,!1)),s.setAttribute("uv",new ee(e,2,3,!1)),s}();const He=""+new URL("lensflare0-QA4pBekj.png",import.meta.url).href,Ke=""+new URL("lensflare1-vf6V-Y-6.png",import.meta.url).href;var Xe=`varying vec2 vUV;
varying vec3 vNormal;

void main () {
  vUV = uv;
  vNormal = vec3(normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ze=`varying vec2 vUV;
varying vec3 vNormal;

void main () {
  vec4 c = vec4(abs(vNormal) + vec3(vUV, 0.0), 0.1);
  gl_FragColor = c;
}`;const qe=""+new URL("waternormals-35viC6WO.jpg",import.meta.url).href,Ye=s=>(Se("data-v-5fdef645"),s=s(),Me(),s),Qe={id:"ocean",class:"webgl"},Je={id:"ocean-webgl",class:"webgl-3d"},$e={class:"loading"},et=Ye(()=>I("p",null,"Loading · · ·",-1)),tt={class:"process"},it=ve({__name:"index",setup(s){class i extends Ae{constructor(o,t={}){super(o,t);A(this,"sky");A(this,"water");A(this,"island");A(this,"animateId2");A(this,"gltfLoader");this.myDraw()}initModel(){this.gltfLoader=new We(this.manager),this.gltfLoader.load("./models/island.glb",o=>{const t=o.scene;t.traverse(a=>{a.isMesh&&(a.material.metalness=.4,a.material.roughness=.6)}),t.position.set(0,-5.5,0),t.scale.set(80,80,80),this.island=t,this.scene.add(t)}),this.gltfLoader.load("./models/flamingo.glb",o=>{const t=o.scene.children[0];t.scale.set(.4,.4,.4),t.position.set(-180,80,-160),t.rotation.set(.2,-.8,0),this.scene.add(t);const a=t.clone();a.scale.set(.4,.4,.4),a.position.set(-60,75,-260),a.rotation.set(.2,-.8,0),this.scene.add(a);const p=new te(t);p.clipAction(o.animations[0]).setDuration(1.2).play(),this.mixers.push(p);const g=new te(a);g.clipAction(o.animations[0]).setDuration(1.8).play(),this.mixers.push(g)})}initSky(){this.sky=new G,this.sky.scale.setScalar(1e4),this.scene.add(this.sky);const o=this.sky.material.uniforms;o.turbidity.value=20,o.rayleigh.value=2,o.mieCoefficient.value=.005,o.mieDirectionalG.value=.8}initSea(){const o=new ke(1e4,1e4);this.water=new Oe(o,{textureWidth:512,textureHeight:512,waterNormals:new ie().load(qe,t=>{t.wrapS=oe,t.wrapT=oe}),sunDirection:new l,sunColor:16777215,waterColor:29439,distortionScale:4,fog:this.scene.fog!==void 0}),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water)}initSun(){const o=new l,t=new Ue(this.renderer),a=ne.degToRad(88),p=ne.degToRad(180);o.setFromSphericalCoords(1,a,p),this.sky.material.uniforms.sunPosition.value.copy(o),this.water.material.uniforms.sunDirection.value.copy(o).normalize(),this.scene.environment=t.fromScene(this.sky).texture;const g=new Ne(16777215,1.2,2e3);g.color.setHSL(.995,.5,.9),g.position.set(0,45,-5e3);const P=new ie,C=P.load(He),y=P.load(Ke),n=new N;n.addElement(new B(C,600,0,g.color)),n.addElement(new B(y,60,.6)),n.addElement(new B(y,70,.7)),n.addElement(new B(y,120,.9)),n.addElement(new B(y,70,1)),g.add(n),this.scene.add(g)}initTorus(){const o=new q({side:Ie,transparent:!0,uniforms:{},vertexShader:Xe,fragmentShader:Ze}),t=new Ge(200,10,50,100),a=new k(t,o);a.opacity=.1,a.position.set(0,-80,-650),a.scale.set(1.8,1.8,1.8),this.scene.add(a)}initManager(){const o={x:41,y:257,z:447};super.initManager(f,o)}animate2(){this.animateId2=requestAnimationFrame(this.animate2.bind(this)),this.water.material.uniforms.time.value+=2/60;const o=this.clock.getDelta();this.mixers&&this.mixers.forEach(t=>{t.update(o)})}initCamera(){super.initCamera(),this.camera.near=1,this.camera.updateProjectionMatrix(),this.camera.position.set(373,777,1227)}initControls(){super.initControls(),this.controls.target.set(0,0,0),this.controls.maxPolarAngle=1.4,this.controls.minDistance=180,this.controls.maxDistance=1500,this.controls.enabled=!0}initRender(){super.initRender({x:41,y:257,z:447}),this.renderer.toneMapping=je}myDraw(){super.draw(),this.initManager(),this.initSea(),this.initSky(),this.initSun(),this.initTorus(),this.initModel(),this.animate2()}destroyed(){super.destroyed(e.value),cancelAnimationFrame(this.animateId2)}}const e=j(null),v=j({width:0,height:0}),f=j({loadingProcess:0,sceneReady:!1,loadingTimeout:null});function b(){const h=document.getElementById("ocean-webgl");v.value={width:h.offsetWidth,height:h.offsetHeight},e.value=new i(h,{logarithmicDepthBuffer:!1})}return de(()=>{b()}),me(()=>{e.value&&e.value.destroyed(),f.value={loadingProcess:0,loadingTimeout:null,sceneReady:!1},e.value=null}),(h,R)=>(we(),fe("div",Qe,[I("div",Je,[he(ge(Ve,null,{default:xe(()=>[I("div",$e,[et,I("span",tt,ye(f.value.loadingProcess)+"%",1)])]),_:1},512),[[pe,f.value.loadingProcess!=100]])])]))}}),rt=be(it,[["__scopeId","data-v-5fdef645"]]);export{rt as default};
