((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
qZ(d,e,f){var x=null
return new A.qY(C.Gy,!0,f,x,x,x,x,C.t,x,!1,x,!0,x,new B.HY(e,d,x,x,x),x)},
HY:function HY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ea:function Ea(){},
aTM(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gaw(e))return C.b.gaw(d)
x=C.b.aAv(e,new B.aHc(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aTl(d,e,f,g,h){var x,w,v=A.Te(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=A.a6(v,v.$ti.c)
x.$flags=1
w=x
x=A.a4(w).i("aa<1,h>")
x=A.a6(new A.aa(w,new B.aGI(d,e,f,g,h),x),x.i("ay.E"))
x.$flags=1
return new B.arM(x,w)},
aPx(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aA(f)
if(e==null)return d.aA(1-f)
x=B.aTl(d.a,d.ra(),e.a,e.ra(),f)
w=A.lY(d.d,e.d,f)
w.toString
v=A.lY(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.fO(w,v,t,x.a,x.b,u)},
arM:function arM(d,e){this.a=d
this.b=e},
aHc:function aHc(d){this.a=d},
aGI:function aGI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cr:function Cr(){},
fO:function fO(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
adh:function adh(d){this.a=d},
aKm(d){var x
d.ai(y.n)
x=A.N(d)
return x.c3}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[22],B)
B.HY.prototype={
D(d){var x,w=A.bc(d,C.aU)
w=w==null?null:w.gcc()
w=A.y((w==null?C.ag:w).aA(14)/14,1,2)
A.aOE(d)
w=A.W(8,4,w-1)
w.toString
x=A.b([this.d,new A.hx(1,C.cA,this.c,null)],y.u)
return A.bT(x,C.n,null,C.m,C.P,w)}}
B.Ea.prototype={
Ul(d,e){var x=this.e
if(x==null)x=B.aKm(d).a
if(x==null)x=e
return x},
S1(d,e){var x,w,v=null,u=this.w,t=this.c,s=t!=null
if(s){t=A.y(t,0,1)
t.toString
u=""+C.c.aV(t*100)}t=s?C.ac3:C.ac2
x=s?"0":v
w=s?"100":v
return A.bo(v,v,d,!1,v,v,v,!1,v,v,v,v,v,v,v,v,this.r,v,v,w,v,x,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,v,v,v,C.y,u)}}
B.arM.prototype={}
B.Cr.prototype={
ra(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aPi(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
d0(d,e){if(d==null)return this.aA(e)
return null},
d1(d,e){if(d==null)return this.aA(1-e)
return null},
WW(d,e){return null}}
B.fO.prototype={
wK(d,e){var x=this
return A.aJI(x.d.X(e).FH(d),x.e.X(e).FH(d),x.a,x.ra(),x.f,x.WW(d,e))},
kZ(d){return this.wK(d,null)},
aA(d){var x=this,w=x.a,v=A.a4(w).i("aa<1,h>")
w=A.a6(new A.aa(w,new B.adh(d),v),v.i("ay.E"))
return new B.fO(x.d,x.e,x.f,w,x.b,x.c)},
MR(d){var x=this
return new B.fO(x.d,x.e,x.f,A.bG(x.a.length,d,!1,y.o),x.b,x.c)},
d0(d,e){if(y.m.b(d))return B.aPx(d,this,e)
return this.Qx(d,e)},
d1(d,e){if(y.m.b(d))return B.aPx(this,d,e)
return this.Qy(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.X(e)!==A.D(x))return!1
return e instanceof B.fO&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&A.cx(e.a,x.a)&&A.cx(e.b,x.b)},
gA(d){var x=this,w=A.bq(x.a),v=x.b
v=v==null?null:A.bq(v)
return A.T(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["begin: "+x.d.l(0),"end: "+x.e.l(0),"colors: "+A.v(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
return"LinearGradient("+C.b.bE(w,", ")+")"}}
var z=a.updateTypes([])
B.aHc.prototype={
$1(d){return d<=this.a},
$S:599}
B.aGI.prototype={
$1(d){var x=this,w=A.H(B.aTM(x.a,x.b,d),B.aTM(x.c,x.d,d),x.e)
w.toString
return w},
$S:600}
B.adh.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function aliases(){var x=B.Cr.prototype
x.Qx=x.d0
x.Qy=x.d1})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.HY,A.Y)
x(B.Ea,A.V)
w(A.O,[B.arM,B.Cr])
w(A.dM,[B.aHc,B.aGI,B.adh])
x(B.fO,B.Cr)})()
A.fj(b.typeUniverse,JSON.parse('{"HY":{"Y":[],"f":[]},"Ea":{"V":[],"f":[]},"aKl":{"cG":[],"aV":[],"aL":[],"f":[]}}'))
var y={o:A.U("h"),x:A.U("m<I>"),u:A.U("m<f>"),n:A.U("aKl"),b:A.U("G"),m:A.U("fO?")}};
(a=>{a["M5cJYSg/HnsETYxFcz/0D7PQ0nI="]=a.current})($__dart_deferred_initializers__);