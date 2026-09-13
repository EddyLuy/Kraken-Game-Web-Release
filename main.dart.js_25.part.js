((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aQO(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aA(f)
if(e==null)return d.aA(1-f)
x=D.aTC(d.a,d.ra(),e.a,e.ra(),f)
w=A.m0(d.d,e.d,f)
w.toString
v=A.Y(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=f<0.5
t=u?d.f:e.f
s=A.m0(d.r,e.r,f)
r=A.Y(d.w,e.w,f)
r.toString
r=Math.max(0,r)
u=u?d.c:e.c
return new B.ll(w,v,t,s,r,x.a,x.b,u)},
ll:function ll(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i
_.b=j
_.c=k},
aif:function aif(d){this.a=d},
aPd(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.a8(A.cE('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.j(0,d)&&k===0
else x=!0
if(x){$.J()
x=new A.a6n(d,e,f,g,h,null)
x.GP()
return x}else{$.J()
x=new A.a6l(j,k,d,e,f,g,h,null)
x.GP()
return x}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[22],B)
D=c[25]
B.ll.prototype={
wN(d,e){var x=this,w=x.d.X(e).FL(d),v=d.geL(),u=x.ra(),t=x.X_(d,e),s=x.r
s=s==null?null:s.X(e).FL(d)
return B.aPd(w,x.e*v,x.a,u,x.f,t,s,x.w*d.geL())},
i3(d){return this.wN(d,null)},
aA(d){var x=this,w=x.a,v=A.a4(w).i("aa<1,h>")
w=A.a5(new A.aa(w,new B.aif(d),v),v.i("ay.E"))
return new B.ll(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
MU(d){var x=this
return new B.ll(x.d,x.e,x.f,x.r,x.w,A.bz(x.a.length,d,!1,y.o),x.b,x.c)},
d0(d,e){if(y.a.b(d))return B.aQO(d,this,e)
return this.QA(d,e)},
d1(d,e){if(y.a.b(d))return B.aQO(this,d,e)
return this.QB(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.W(e)!==A.E(x))return!1
return e instanceof B.ll&&e.d.j(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cA(e.a,x.a)&&A.cA(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gA(d){var x=this,w=A.br(x.a),v=x.b
v=v==null?null:A.br(v)
return A.U(x.d,x.e,x.f,x.c,w,v,x.r,x.w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.i2(x.e),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.i2(x.w))
return"RadialGradient("+C.b.bF(w,", ")+")"}}
var z=a.updateTypes([])
B.aif.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function inheritance(){var x=a.inherit
x(B.ll,D.Cv)
x(B.aif,A.dN)})()
var y={o:A.T("h"),h:A.T("m<I>"),a:A.T("ll?")}};
(a=>{a["yJ7zsCJpe6SS4UArw+h5HKIS1j8="]=a.current})($__dart_deferred_initializers__);