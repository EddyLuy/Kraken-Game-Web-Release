((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aPD(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=E.aSr(d.a,d.r5(),e.a,e.r5(),f)
w=A.lT(d.d,e.d,f)
w.toString
v=A.X(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=f<0.5
t=u?d.f:e.f
s=A.lT(d.r,e.r,f)
r=A.X(d.w,e.w,f)
r.toString
r=Math.max(0,r)
u=u?d.c:e.c
return new C.mL(w,v,t,s,r,x.a,x.b,u)},
mL:function mL(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i
_.b=j
_.c=k},
ahQ:function ahQ(d){this.a=d},
aO4(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.a7(A.cz('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.j(0,d)&&k===0
else x=!0
if(x){$.M()
x=new A.a5W(d,e,f,g,h,null)
x.Gz()
return x}else{$.M()
x=new A.a5U(j,k,d,e,f,g,h,null)
x.Gz()
return x}}},D,E
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[16],C)
D=c[35]
E=c[20]
C.mL.prototype={
wE(d,e){var x=this,w=x.d.X(e).Fv(d),v=d.geJ(),u=x.r5(),t=x.WJ(d,e),s=x.r
s=s==null?null:s.X(e).Fv(d)
return C.aO4(w,x.e*v,x.a,u,x.f,t,s,x.w*d.geJ())},
m5(d){return this.wE(d,null)},
aB(d){var x=this,w=x.a,v=A.a4(w).i("a9<1,h>")
w=A.a5(new A.a9(w,new C.ahQ(d),v),v.i("aA.E"))
return new C.mL(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
MC(d){var x=this
return new C.mL(x.d,x.e,x.f,x.r,x.w,A.bG(x.a.length,d,!1,y.o),x.b,x.c)},
cX(d,e){if(y.a.b(d))return C.aPD(d,this,e)
return this.Qk(d,e)},
cY(d,e){if(y.a.b(d))return C.aPD(this,d,e)
return this.Ql(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.V(e)!==A.C(x))return!1
return e instanceof C.mL&&e.d.j(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cu(e.a,x.a)&&A.cu(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gA(d){var x=this,w=A.bp(x.a),v=x.b
v=v==null?null:A.bp(v)
return A.S(x.d,x.e,x.f,x.c,w,v,x.r,x.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.hU(x.e),"colors: "+A.u(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.u(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.hU(x.w))
return"RadialGradient("+B.b.bC(w,", ")+")"}}
var z=a.updateTypes([])
C.ahQ.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function inheritance(){var x=a.inherit
x(C.mL,E.Cg)
x(C.ahQ,A.e6)})()
var y={o:A.W("h"),h:A.W("r<I>"),a:A.W("mL?")};(function constants(){D.lD=new A.h(1,0,0.6745098039215687,0.7568627450980392,B.d)
D.iN=new A.h(1,1,0.7019607843137254,0,B.d)
D.r2=new A.h(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,B.d)
D.r4=new A.h(1,1,0.30196078431372547,0,B.d)
D.ra=new A.h(1,0.9176470588235294,0.9647058823529412,1,B.d)
D.dl=new A.al(24,24,24,24)
D.tK=new A.as(984367,"MaterialIcons",!1)
D.eQ=new A.as(58701,"MaterialIcons",!1)
D.cV=new A.d(0,3)})()};
(a=>{a["fvue6c/3eHUV20d8P1dmI3rl9CE="]=a.current})($__dart_deferred_initializers__);