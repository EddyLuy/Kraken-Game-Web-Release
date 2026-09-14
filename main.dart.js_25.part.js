((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aRM(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=D.aUz(d.a,d.rf(),e.a,e.rf(),f)
w=A.m6(d.d,e.d,f)
w.toString
v=A.a_(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=f<0.5
t=u?d.f:e.f
s=A.m6(d.r,e.r,f)
r=A.a_(d.w,e.w,f)
r.toString
r=Math.max(0,r)
u=u?d.c:e.c
return new B.lr(w,v,t,s,r,x.a,x.b,u)},
lr:function lr(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i
_.b=j
_.c=k},
aiK:function aiK(d){this.a=d},
aKU(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.aa(A.cF('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.k(0,d)&&k===0
else x=!0
if(x){$.I()
x=new A.a6O(d,e,f,g,h,null)
x.GW()
return x}else{$.I()
x=new A.a6M(j,k,d,e,f,g,h,null)
x.GW()
return x}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[24],B)
D=c[28]
B.lr.prototype={
wN(d,e){var x=this,w=x.d.W(e).FR(d),v=d.gem(),u=x.rf(),t=x.X7(d,e),s=x.r
s=s==null?null:s.W(e).FR(d)
return B.aKU(w,x.e*v,x.a,u,x.f,t,s,x.w*d.gem())},
i7(d){return this.wN(d,null)},
aB(d){var x=this,w=x.a,v=A.a4(w).i("a9<1,h>")
w=A.a3(new A.a9(w,new B.aiK(d),v),v.i("ax.E"))
return new B.lr(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
N0(d){var x=this
return new B.lr(x.d,x.e,x.f,x.r,x.w,A.bI(x.a.length,d,!1,y.o),x.b,x.c)},
d5(d,e){if(y.a.b(d))return B.aRM(d,this,e)
return this.QF(d,e)},
d6(d,e){if(y.a.b(d))return B.aRM(this,d,e)
return this.QG(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.X(e)!==A.E(x))return!1
return e instanceof B.lr&&e.d.k(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cA(e.a,x.a)&&A.cA(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gB(d){var x=this,w=A.bt(x.a),v=x.b
v=v==null?null:A.bt(v)
return A.U(x.d,x.e,x.f,x.c,w,v,x.r,x.w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.i8(x.e),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.i8(x.w))
return"RadialGradient("+C.b.bF(w,", ")+")"}}
var z=a.updateTypes([])
B.aiK.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:66};(function inheritance(){var x=a.inherit
x(B.lr,D.CE)
x(B.aiK,A.dJ)})()
var y={o:A.T("h"),h:A.T("m<J>"),a:A.T("lr?")}};
(a=>{a["b0vUwuMeHBTBbBjKFjMeC+l/pnw="]=a.current})($__dart_deferred_initializers__);