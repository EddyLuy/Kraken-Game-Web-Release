((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
mv(d,e,f,g){var x=null
return new A.r8(C.Hk,!0,f,x,x,x,g,C.v,x,!1,x,!0,x,new B.Ic(e,d,g,x,x),x)},
Ic:function Ic(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aUM(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gaz(e))return C.b.gaz(d)
x=C.b.aAR(e,new B.aI6(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aUl(d,e,f,g,h){var x,w,v=A.Ty(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=A.a4(v,v.$ti.c)
x.$flags=1
w=x
x=A.a3(w).i("aa<1,h>")
x=A.a4(new A.aa(w,new B.aHC(d,e,f,g,h),x),x.i("ay.E"))
x.$flags=1
return new B.ask(x,w)},
aQx(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=B.aUl(d.a,d.re(),e.a,e.re(),f)
w=A.m6(d.d,e.d,f)
w.toString
v=A.m6(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new B.eY(w,v,t,x.a,x.b,u)},
ask:function ask(d,e){this.a=d
this.b=e},
aI6:function aI6(d){this.a=d},
aHC:function aHC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CC:function CC(){},
eY:function eY(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
adK:function adK(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[29],B)
D=c[62]
B.Ic.prototype={
D(d){var x,w=null,v=this.e,u=w
if(v==null)x=u
else{v=v.a
if(v==null)v=u
else{v=v.W(C.bH)
v=v==null?w:v.r}x=v}if(x==null)x=14
v=A.bg(d,C.aW)
v=v==null?w:v.gcg()
v=A.x((v==null?C.aj:v).aB(x)/14,1,2)
A.aPG(d)
v=A.a_(8,4,v-1)
v.toString
u=A.b([this.d,new A.hF(1,C.cI,this.c,w)],y.e)
return A.bW(u,C.n,w,C.m,C.P,v)}}
B.ask.prototype={}
B.CC.prototype={
re(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aQi(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
d5(d,e){if(d==null)return this.aB(e)
return null},
d6(d,e){if(d==null)return this.aB(1-e)
return null},
X1(d,e){return null}}
B.eY.prototype={
wM(d,e){var x=this
return A.aKH(x.d.W(e).FN(d),x.e.W(e).FN(d),x.a,x.re(),x.f,x.X1(d,e))},
i6(d){return this.wM(d,null)},
aB(d){var x=this,w=x.a,v=A.a3(w).i("aa<1,h>")
w=A.a4(new A.aa(w,new B.adK(d),v),v.i("ay.E"))
return new B.eY(x.d,x.e,x.f,w,x.b,x.c)},
MX(d){var x=this
return new B.eY(x.d,x.e,x.f,A.bH(x.a.length,d,!1,y.o),x.b,x.c)},
d5(d,e){if(y.m.b(d))return B.aQx(d,this,e)
return this.QC(d,e)},
d6(d,e){if(y.m.b(d))return B.aQx(this,d,e)
return this.QD(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.X(e)!==A.E(x))return!1
return e instanceof B.eY&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.cz(e.a,x.a)&&A.cz(e.b,x.b)},
gB(d){var x=this,w=A.bt(x.a),v=x.b
v=v==null?null:A.bt(v)
return A.U(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["begin: "+x.d.l(0),"end: "+x.e.l(0),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
return"LinearGradient("+C.b.bF(w,", ")+")"}}
var z=a.updateTypes([])
B.aI6.prototype={
$1(d){return d<=this.a},
$S:599}
B.aHC.prototype={
$1(d){var x=this,w=A.H(B.aUM(x.a,x.b,d),B.aUM(x.c,x.d,d),x.e)
w.toString
return w},
$S:600}
B.adK.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function aliases(){var x=B.CC.prototype
x.QC=x.d5
x.QD=x.d6})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ic,A.Y)
w(A.P,[B.ask,B.CC])
w(A.dJ,[B.aI6,B.aHC,B.adK])
x(B.eY,B.CC)})()
A.eD(b.typeUniverse,JSON.parse('{"Ic":{"Y":[],"f":[]}}'))
var y={o:A.S("h"),h:A.S("m<I>"),e:A.S("m<f>"),b:A.S("G"),m:A.S("eY?")};(function constants(){D.ec=new A.am(58186,"MaterialIcons",!1)})()};
(a=>{a["C3XSP+vWcEwB8j5gJ0a88KB83VA="]=a.current})($__dart_deferred_initializers__);