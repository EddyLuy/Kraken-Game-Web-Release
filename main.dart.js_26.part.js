((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aS8(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=D.aUW(d.a,d.rh(),e.a,e.rh(),f)
w=A.m9(d.d,e.d,f)
w.toString
v=A.a0(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=f<0.5
t=u?d.f:e.f
s=A.m9(d.r,e.r,f)
r=A.a0(d.w,e.w,f)
r.toString
r=Math.max(0,r)
u=u?d.c:e.c
return new B.lv(w,v,t,s,r,x.a,x.b,u)},
lv:function lv(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i
_.b=j
_.c=k},
aiS:function aiS(d){this.a=d},
aLe(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.aa(A.cF('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.k(0,d)&&k===0
else x=!0
if(x){$.J()
x=new A.a6U(d,e,f,g,h,null)
x.H_()
return x}else{$.J()
x=new A.a6S(j,k,d,e,f,g,h,null)
x.H_()
return x}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
D=c[29]
B.lv.prototype={
wO(d,e){var x=this,w=x.d.W(e).FV(d),v=d.gem(),u=x.rh(),t=x.Xc(d,e),s=x.r
s=s==null?null:s.W(e).FV(d)
return B.aLe(w,x.e*v,x.a,u,x.f,t,s,x.w*d.gem())},
i7(d){return this.wO(d,null)},
aB(d){var x=this,w=x.a,v=A.a5(w).i("a9<1,h>")
w=A.a4(new A.a9(w,new B.aiS(d),v),v.i("ay.E"))
return new B.lv(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
N3(d){var x=this
return new B.lv(x.d,x.e,x.f,x.r,x.w,A.bJ(x.a.length,d,!1,y.o),x.b,x.c)},
d6(d,e){if(y.a.b(d))return B.aS8(d,this,e)
return this.QI(d,e)},
d7(d,e){if(y.a.b(d))return B.aS8(this,d,e)
return this.QJ(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==A.E(x))return!1
return e instanceof B.lv&&e.d.k(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cA(e.a,x.a)&&A.cA(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gB(d){var x=this,w=A.bt(x.a),v=x.b
v=v==null?null:A.bt(v)
return A.U(x.d,x.e,x.f,x.c,w,v,x.r,x.w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.ia(x.e),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.ia(x.w))
return"RadialGradient("+C.b.bG(w,", ")+")"}}
var z=a.updateTypes([])
B.aiS.prototype={
$1(d){var x=A.I(null,d,this.a)
x.toString
return x},
$S:66};(function inheritance(){var x=a.inherit
x(B.lv,D.CI)
x(B.aiS,A.dp)})()
var y={o:A.Q("h"),h:A.Q("l<H>"),a:A.Q("lv?")}};
(a=>{a["Y2q3UbdsNQmkKZ8rrmekA91gCaw="]=a.current})($__dart_deferred_initializers__);