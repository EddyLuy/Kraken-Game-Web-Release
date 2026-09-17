((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aSr(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aC(f)
if(e==null)return d.aC(1-f)
x=D.aVe(d.a,d.rf(),e.a,e.rf(),f)
w=A.mb(d.d,e.d,f)
w.toString
v=A.a0(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=f<0.5
t=u?d.f:e.f
s=A.mb(d.r,e.r,f)
r=A.a0(d.w,e.w,f)
r.toString
r=Math.max(0,r)
u=u?d.c:e.c
return new B.lx(w,v,t,s,r,x.a,x.b,u)},
lx:function lx(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i
_.b=j
_.c=k},
ajl:function ajl(d){this.a=d},
aLw(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.aa(A.cF('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.k(0,d)&&k===0
else x=!0
if(x){$.J()
x=new A.a73(d,e,f,g,h,null)
x.GV()
return x}else{$.J()
x=new A.a71(j,k,d,e,f,g,h,null)
x.GV()
return x}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
D=c[29]
B.lx.prototype={
wL(d,e){var x=this,w=x.d.Y(e).FQ(d),v=d.gem(),u=x.rf(),t=x.X5(d,e),s=x.r
s=s==null?null:s.Y(e).FQ(d)
return B.aLw(w,x.e*v,x.a,u,x.f,t,s,x.w*d.gem())},
i7(d){return this.wL(d,null)},
aC(d){var x=this,w=x.a,v=A.a5(w).i("a9<1,h>")
w=A.a4(new A.a9(w,new B.ajl(d),v),v.i("az.E"))
return new B.lx(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
N_(d){var x=this
return new B.lx(x.d,x.e,x.f,x.r,x.w,A.bJ(x.a.length,d,!1,y.o),x.b,x.c)},
d6(d,e){if(y.a.b(d))return B.aSr(d,this,e)
return this.QE(d,e)},
d7(d,e){if(y.a.b(d))return B.aSr(this,d,e)
return this.QF(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==A.E(x))return!1
return e instanceof B.lx&&e.d.k(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cA(e.a,x.a)&&A.cA(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gB(d){var x=this,w=A.bt(x.a),v=x.b
v=v==null?null:A.bt(v)
return A.U(x.d,x.e,x.f,x.c,w,v,x.r,x.w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.ib(x.e),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.ib(x.w))
return"RadialGradient("+C.b.bG(w,", ")+")"}}
var z=a.updateTypes([])
B.ajl.prototype={
$1(d){var x=A.I(null,d,this.a)
x.toString
return x},
$S:65};(function inheritance(){var x=a.inherit
x(B.lx,D.CP)
x(B.ajl,A.dp)})()
var y={o:A.R("h"),h:A.R("l<H>"),a:A.R("lx?")}};
(a=>{a["gQGQrsATQudlYOI7DO+PSB9vgBY="]=a.current})($__dart_deferred_initializers__);