((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
qP(d,e,f){var x=null
return new A.qO(C.Gc,!0,f,x,x,x,x,C.v,x,!1,x,!0,x,new B.HO(e,d,x,x,x),x)},
HO:function HO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
E0:function E0(){},
aSS(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gaw(e))return C.b.gaw(d)
x=C.b.aA3(e,new B.aGl(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aSr(d,e,f,g,h){var x,w,v=A.SW(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=A.a5(v,v.$ti.c)
x.$flags=1
w=x
x=A.a4(w).i("a9<1,h>")
x=A.a5(new A.a9(w,new B.aFR(d,e,f,g,h),x),x.i("aA.E"))
x.$flags=1
return new B.arr(x,w)},
aOD(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=B.aSr(d.a,d.r5(),e.a,e.r5(),f)
w=A.lT(d.d,e.d,f)
w.toString
v=A.lT(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.h0(w,v,t,x.a,x.b,u)},
arr:function arr(d,e){this.a=d
this.b=e},
aGl:function aGl(d){this.a=d},
aFR:function aFR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cg:function Cg(){},
h0:function h0(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
acY:function acY(d){this.a=d},
aJr(d){var x
d.ah(y.n)
x=A.N(d)
return x.c1}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[20],B)
B.HO.prototype={
D(d){var x,w=A.bc(d,C.aS)
w=w==null?null:w.gcc()
w=A.A((w==null?C.ae:w).aB(14)/14,1,2)
A.aNK(d)
w=A.X(8,4,w-1)
w.toString
x=A.b([this.d,new A.hs(1,C.cw,this.c,null)],y.u)
return A.bW(x,C.n,null,C.m,C.R,w)}}
B.E0.prototype={
U8(d,e){var x=this.e
if(x==null)x=B.aJr(d).a
if(x==null)x=e
return x},
RP(d,e){var x,w,v=null,u=this.w,t=this.c,s=t!=null
if(s){t=A.A(t,0,1)
t.toString
u=""+C.c.aT(t*100)}t=s?C.a91:C.a90
x=s?"0":v
w=s?"100":v
return A.bk(v,v,d,!1,v,v,v,!1,v,v,v,v,v,v,v,v,this.r,v,v,w,v,x,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,v,v,v,C.x,u)}}
B.arr.prototype={}
B.Cg.prototype={
r5(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aOo(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
cX(d,e){if(d==null)return this.aB(e)
return null},
cY(d,e){if(d==null)return this.aB(1-e)
return null},
WJ(d,e){return null}}
B.h0.prototype={
wE(d,e){var x=this
return A.aIN(x.d.X(e).Fv(d),x.e.X(e).Fv(d),x.a,x.r5(),x.f,x.WJ(d,e))},
m5(d){return this.wE(d,null)},
aB(d){var x=this,w=x.a,v=A.a4(w).i("a9<1,h>")
w=A.a5(new A.a9(w,new B.acY(d),v),v.i("aA.E"))
return new B.h0(x.d,x.e,x.f,w,x.b,x.c)},
MC(d){var x=this
return new B.h0(x.d,x.e,x.f,A.bF(x.a.length,d,!1,y.o),x.b,x.c)},
cX(d,e){if(y.m.b(d))return B.aOD(d,this,e)
return this.Qk(d,e)},
cY(d,e){if(y.m.b(d))return B.aOD(this,d,e)
return this.Ql(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.V(e)!==A.C(x))return!1
return e instanceof B.h0&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&A.cu(e.a,x.a)&&A.cu(e.b,x.b)},
gA(d){var x=this,w=A.bp(x.a),v=x.b
v=v==null?null:A.bp(v)
return A.S(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["begin: "+x.d.l(0),"end: "+x.e.l(0),"colors: "+A.u(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+A.u(v))
w.push("tileMode: "+x.f.l(0))
return"LinearGradient("+C.b.bC(w,", ")+")"}}
var z=a.updateTypes([])
B.aGl.prototype={
$1(d){return d<=this.a},
$S:599}
B.aFR.prototype={
$1(d){var x=this,w=A.H(B.aSS(x.a,x.b,d),B.aSS(x.c,x.d,d),x.e)
w.toString
return w},
$S:600}
B.acY.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function aliases(){var x=B.Cg.prototype
x.Qk=x.cX
x.Ql=x.cY})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HO,A.Y)
x(B.E0,A.U)
w(A.O,[B.arr,B.Cg])
w(A.e6,[B.aGl,B.aFR,B.acY])
x(B.h0,B.Cg)})()
A.hQ(b.typeUniverse,JSON.parse('{"HO":{"Y":[],"f":[]},"E0":{"U":[],"f":[]},"aJq":{"cE":[],"aV":[],"aK":[],"f":[]}}'))
var y={o:A.W("h"),x:A.W("r<I>"),u:A.W("r<f>"),n:A.W("aJq"),b:A.W("G"),m:A.W("h0?")}};
(a=>{a["KF3jYfII+pM304a+KErzzne2pvQ="]=a.current})($__dart_deferred_initializers__);