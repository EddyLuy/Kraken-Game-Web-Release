((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
qP(d,e,f){var x=null
return new A.qO(C.G8,!0,f,x,x,x,x,C.v,x,!1,x,!0,x,new B.HM(e,d,x,x,x),x)},
HM:function HM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
DZ:function DZ(){},
aSL(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gaw(e))return C.b.gaw(d)
x=C.b.azZ(e,new B.aGe(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aSk(d,e,f,g,h){var x,w,v=A.SU(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=A.a5(v,v.$ti.c)
x.$flags=1
w=x
x=A.a4(w).i("a9<1,h>")
x=A.a5(new A.a9(w,new B.aFK(d,e,f,g,h),x),x.i("aA.E"))
x.$flags=1
return new B.aro(x,w)},
aOw(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=B.aSk(d.a,d.r5(),e.a,e.r5(),f)
w=A.lT(d.d,e.d,f)
w.toString
v=A.lT(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.h0(w,v,t,x.a,x.b,u)},
aro:function aro(d,e){this.a=d
this.b=e},
aGe:function aGe(d){this.a=d},
aFK:function aFK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ce:function Ce(){},
h0:function h0(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
acV:function acV(d){this.a=d},
aJk(d){var x
d.ah(y.n)
x=A.N(d)
return x.c1}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[20],B)
B.HM.prototype={
D(d){var x,w=A.bc(d,C.aS)
w=w==null?null:w.gcc()
w=A.A((w==null?C.ae:w).aB(14)/14,1,2)
A.aND(d)
w=A.X(8,4,w-1)
w.toString
x=A.b([this.d,new A.hs(1,C.cw,this.c,null)],y.u)
return A.c_(x,C.n,null,C.m,C.R,w)}}
B.DZ.prototype={
U5(d,e){var x=this.e
if(x==null)x=B.aJk(d).a
if(x==null)x=e
return x},
RN(d,e){var x,w,v=null,u=this.w,t=this.c,s=t!=null
if(s){t=A.A(t,0,1)
t.toString
u=""+C.c.aT(t*100)}t=s?C.a8Z:C.a8Y
x=s?"0":v
w=s?"100":v
return A.bk(v,v,d,!1,v,v,v,!1,v,v,v,v,v,v,v,v,this.r,v,v,w,v,x,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,v,v,v,C.x,u)}}
B.aro.prototype={}
B.Ce.prototype={
r5(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aOh(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
cX(d,e){if(d==null)return this.aB(e)
return null},
cY(d,e){if(d==null)return this.aB(1-e)
return null},
WG(d,e){return null}}
B.h0.prototype={
wE(d,e){var x=this
return A.aIG(x.d.X(e).Ft(d),x.e.X(e).Ft(d),x.a,x.r5(),x.f,x.WG(d,e))},
m5(d){return this.wE(d,null)},
aB(d){var x=this,w=x.a,v=A.a4(w).i("a9<1,h>")
w=A.a5(new A.a9(w,new B.acV(d),v),v.i("aA.E"))
return new B.h0(x.d,x.e,x.f,w,x.b,x.c)},
MA(d){var x=this
return new B.h0(x.d,x.e,x.f,A.bF(x.a.length,d,!1,y.o),x.b,x.c)},
cX(d,e){if(y.m.b(d))return B.aOw(d,this,e)
return this.Qi(d,e)},
cY(d,e){if(y.m.b(d))return B.aOw(this,d,e)
return this.Qj(d,e)},
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
B.aGe.prototype={
$1(d){return d<=this.a},
$S:599}
B.aFK.prototype={
$1(d){var x=this,w=A.H(B.aSL(x.a,x.b,d),B.aSL(x.c,x.d,d),x.e)
w.toString
return w},
$S:600}
B.acV.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function aliases(){var x=B.Ce.prototype
x.Qi=x.cX
x.Qj=x.cY})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HM,A.Y)
x(B.DZ,A.U)
w(A.O,[B.aro,B.Ce])
w(A.e4,[B.aGe,B.aFK,B.acV])
x(B.h0,B.Ce)})()
A.hQ(b.typeUniverse,JSON.parse('{"HM":{"Y":[],"f":[]},"DZ":{"U":[],"f":[]},"aJj":{"cE":[],"aV":[],"aK":[],"f":[]}}'))
var y={o:A.W("h"),x:A.W("r<I>"),u:A.W("r<f>"),n:A.W("aJj"),b:A.W("G"),m:A.W("h0?")}};
(a=>{a["9oA0iv+aEsCrI/Te1OMBMVrfKSw="]=a.current})($__dart_deferred_initializers__);