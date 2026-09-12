((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
qT(d,e,f){var x=null
return new A.qS(C.Go,!0,f,x,x,x,x,C.v,x,!1,x,!0,x,new B.HQ(e,d,x,x,x),x)},
HQ:function HQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
E2:function E2(){},
aT0(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gaw(e))return C.b.gaw(d)
x=C.b.aA9(e,new B.aGu(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aSA(d,e,f,g,h){var x,w,v=A.T0(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=A.a5(v,v.$ti.c)
x.$flags=1
w=x
x=A.a4(w).i("aa<1,h>")
x=A.a5(new A.aa(w,new B.aG_(d,e,f,g,h),x),x.i("aA.E"))
x.$flags=1
return new B.arv(x,w)},
aOM(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=B.aSA(d.a,d.r7(),e.a,e.r7(),f)
w=A.lW(d.d,e.d,f)
w.toString
v=A.lW(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.fL(w,v,t,x.a,x.b,u)},
arv:function arv(d,e){this.a=d
this.b=e},
aGu:function aGu(d){this.a=d},
aG_:function aG_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ci:function Ci(){},
fL:function fL(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
ad0:function ad0(d){this.a=d},
aJB(d){var x
d.ah(y.n)
x=A.N(d)
return x.c2}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[22],B)
B.HQ.prototype={
D(d){var x,w=A.bc(d,C.aT)
w=w==null?null:w.gcc()
w=A.A((w==null?C.ae:w).aB(14)/14,1,2)
A.aNT(d)
w=A.X(8,4,w-1)
w.toString
x=A.b([this.d,new A.hu(1,C.cx,this.c,null)],y.u)
return A.bV(x,C.n,null,C.m,C.P,w)}}
B.E2.prototype={
Uc(d,e){var x=this.e
if(x==null)x=B.aJB(d).a
if(x==null)x=e
return x},
RT(d,e){var x,w,v=null,u=this.w,t=this.c,s=t!=null
if(s){t=A.A(t,0,1)
t.toString
u=""+C.c.aT(t*100)}t=s?C.aaw:C.aav
x=s?"0":v
w=s?"100":v
return A.bn(v,v,d,!1,v,v,v,!1,v,v,v,v,v,v,v,v,this.r,v,v,w,v,x,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,v,v,v,C.y,u)}}
B.arv.prototype={}
B.Ci.prototype={
r7(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aOx(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
cX(d,e){if(d==null)return this.aB(e)
return null},
cY(d,e){if(d==null)return this.aB(1-e)
return null},
WN(d,e){return null}}
B.fL.prototype={
wG(d,e){var x=this
return A.aIX(x.d.X(e).FB(d),x.e.X(e).FB(d),x.a,x.r7(),x.f,x.WN(d,e))},
kX(d){return this.wG(d,null)},
aB(d){var x=this,w=x.a,v=A.a4(w).i("aa<1,h>")
w=A.a5(new A.aa(w,new B.ad0(d),v),v.i("aA.E"))
return new B.fL(x.d,x.e,x.f,w,x.b,x.c)},
MI(d){var x=this
return new B.fL(x.d,x.e,x.f,A.bF(x.a.length,d,!1,y.o),x.b,x.c)},
cX(d,e){if(y.m.b(d))return B.aOM(d,this,e)
return this.Qo(d,e)},
cY(d,e){if(y.m.b(d))return B.aOM(this,d,e)
return this.Qp(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.W(e)!==A.C(x))return!1
return e instanceof B.fL&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&A.cx(e.a,x.a)&&A.cx(e.b,x.b)},
gA(d){var x=this,w=A.bp(x.a),v=x.b
v=v==null?null:A.bp(v)
return A.T(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["begin: "+x.d.l(0),"end: "+x.e.l(0),"colors: "+A.u(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+A.u(v))
w.push("tileMode: "+x.f.l(0))
return"LinearGradient("+C.b.bC(w,", ")+")"}}
var z=a.updateTypes([])
B.aGu.prototype={
$1(d){return d<=this.a},
$S:599}
B.aG_.prototype={
$1(d){var x=this,w=A.H(B.aT0(x.a,x.b,d),B.aT0(x.c,x.d,d),x.e)
w.toString
return w},
$S:600}
B.ad0.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:71};(function aliases(){var x=B.Ci.prototype
x.Qo=x.cX
x.Qp=x.cY})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HQ,A.Y)
x(B.E2,A.V)
w(A.O,[B.arv,B.Ci])
w(A.dT,[B.aGu,B.aG_,B.ad0])
x(B.fL,B.Ci)})()
A.fV(b.typeUniverse,JSON.parse('{"HQ":{"Y":[],"f":[]},"E2":{"V":[],"f":[]},"aJA":{"cG":[],"aV":[],"aK":[],"f":[]}}'))
var y={o:A.U("h"),x:A.U("r<I>"),u:A.U("r<f>"),n:A.U("aJA"),b:A.U("G"),m:A.U("fL?")}};
(a=>{a["YoXqS2AP03nFDKlQVXAH07/d478="]=a.current})($__dart_deferred_initializers__);