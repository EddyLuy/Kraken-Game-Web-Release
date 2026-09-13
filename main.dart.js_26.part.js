((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
oe(d,e,f,g){var x=null
return new A.r1(C.GM,!0,f,x,x,x,g,C.v,x,!1,x,!0,x,new B.I2(e,d,g,x,x),x)},
I2:function I2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aU2(d,e,f){var x,w,v,u,t
if(f<=C.b.ga7(e))return C.b.ga7(d)
if(f>=C.b.gaw(e))return C.b.gaw(d)
x=C.b.aAE(e,new B.aHr(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aTC(d,e,f,g,h){var x,w,v=A.Th(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=A.a5(v,v.$ti.c)
x.$flags=1
w=x
x=A.a4(w).i("aa<1,h>")
x=A.a5(new A.aa(w,new B.aGX(d,e,f,g,h),x),x.i("ay.E"))
x.$flags=1
return new B.arS(x,w)},
aPM(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aA(f)
if(e==null)return d.aA(1-f)
x=B.aTC(d.a,d.ra(),e.a,e.ra(),f)
w=A.m0(d.d,e.d,f)
w.toString
v=A.m0(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.eX(w,v,t,x.a,x.b,u)},
arS:function arS(d,e){this.a=d
this.b=e},
aHr:function aHr(d){this.a=d},
aGX:function aGX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cv:function Cv(){},
eX:function eX(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
adn:function adn(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
B.I2.prototype={
D(d){var x,w=null,v=this.e,u=w
if(v==null)x=u
else{v=v.a
if(v==null)v=u
else{v=v.X(C.bF)
v=v==null?w:v.r}x=v}if(x==null)x=14
v=A.bf(d,C.aV)
v=v==null?w:v.gcc()
v=A.y((v==null?C.ah:v).aA(x)/14,1,2)
A.aOU(d)
v=A.Y(8,4,v-1)
v.toString
u=A.b([this.d,new A.hB(1,C.cD,this.c,w)],y.e)
return A.bV(u,C.n,w,C.m,C.Q,v)}}
B.arS.prototype={}
B.Cv.prototype={
ra(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aPx(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
d0(d,e){if(d==null)return this.aA(e)
return null},
d1(d,e){if(d==null)return this.aA(1-e)
return null},
X_(d,e){return null}}
B.eX.prototype={
wN(d,e){var x=this
return A.aJX(x.d.X(e).FL(d),x.e.X(e).FL(d),x.a,x.ra(),x.f,x.X_(d,e))},
i3(d){return this.wN(d,null)},
aA(d){var x=this,w=x.a,v=A.a4(w).i("aa<1,h>")
w=A.a5(new A.aa(w,new B.adn(d),v),v.i("ay.E"))
return new B.eX(x.d,x.e,x.f,w,x.b,x.c)},
MU(d){var x=this
return new B.eX(x.d,x.e,x.f,A.bz(x.a.length,d,!1,y.o),x.b,x.c)},
d0(d,e){if(y.m.b(d))return B.aPM(d,this,e)
return this.QA(d,e)},
d1(d,e){if(y.m.b(d))return B.aPM(this,d,e)
return this.QB(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.W(e)!==A.E(x))return!1
return e instanceof B.eX&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&A.cA(e.a,x.a)&&A.cA(e.b,x.b)},
gA(d){var x=this,w=A.br(x.a),v=x.b
v=v==null?null:A.br(v)
return A.U(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["begin: "+x.d.l(0),"end: "+x.e.l(0),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
return"LinearGradient("+C.b.bF(w,", ")+")"}}
var z=a.updateTypes([])
B.aHr.prototype={
$1(d){return d<=this.a},
$S:599}
B.aGX.prototype={
$1(d){var x=this,w=A.H(B.aU2(x.a,x.b,d),B.aU2(x.c,x.d,d),x.e)
w.toString
return w},
$S:600}
B.adn.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function aliases(){var x=B.Cv.prototype
x.QA=x.d0
x.QB=x.d1})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.I2,A.X)
w(A.P,[B.arS,B.Cv])
w(A.dN,[B.aHr,B.aGX,B.adn])
x(B.eX,B.Cv)})()
A.f5(b.typeUniverse,JSON.parse('{"I2":{"X":[],"f":[]}}'))
var y={o:A.T("h"),h:A.T("m<I>"),e:A.T("m<f>"),b:A.T("G"),m:A.T("eX?")}};
(a=>{a["vzNzFsNC9DRru74qVESOZMINxmA="]=a.current})($__dart_deferred_initializers__);