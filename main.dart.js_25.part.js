((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
aTH(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gaw(e))return C.b.gaw(d)
x=C.b.aAu(e,new A.aH8(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.H(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aTg(d,e,f,g,h){var x,w,v=B.Td(null,null,y.b)
v.P(0,e)
v.P(0,g)
x=B.a5(v,v.$ti.c)
x.$flags=1
w=x
x=B.a4(w).i("aa<1,h>")
x=B.a5(new B.aa(w,new A.aGE(d,e,f,g,h),x),x.i("ay.E"))
x.$flags=1
return new A.arK(x,w)},
aPs(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aA(f)
if(e==null)return d.aA(1-f)
x=A.aTg(d.a,d.ra(),e.a,e.ra(),f)
w=B.lY(d.d,e.d,f)
w.toString
v=B.lY(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.fA(w,v,t,x.a,x.b,u)},
arK:function arK(d,e){this.a=d
this.b=e},
aH8:function aH8(d){this.a=d},
aGE:function aGE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cr:function Cr(){},
fA:function fA(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
adf:function adf(d){this.a=d}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[25],A)
A.arK.prototype={}
A.Cr.prototype={
ra(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aPd(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w},
d0(d,e){if(d==null)return this.aA(e)
return null},
d1(d,e){if(d==null)return this.aA(1-e)
return null},
WU(d,e){return null}}
A.fA.prototype={
wK(d,e){var x=this
return B.aJD(x.d.X(e).FH(d),x.e.X(e).FH(d),x.a,x.ra(),x.f,x.WU(d,e))},
k5(d){return this.wK(d,null)},
aA(d){var x=this,w=x.a,v=B.a4(w).i("aa<1,h>")
w=B.a5(new B.aa(w,new A.adf(d),v),v.i("ay.E"))
return new A.fA(x.d,x.e,x.f,w,x.b,x.c)},
MP(d){var x=this
return new A.fA(x.d,x.e,x.f,B.bG(x.a.length,d,!1,y.o),x.b,x.c)},
d0(d,e){if(y.m.b(d))return A.aPs(d,this,e)
return this.Qv(d,e)},
d1(d,e){if(y.m.b(d))return A.aPs(this,d,e)
return this.Qw(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.X(e)!==B.D(x))return!1
return e instanceof A.fA&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&B.cx(e.a,x.a)&&B.cx(e.b,x.b)},
gA(d){var x=this,w=B.bq(x.a),v=x.b
v=v==null?null:B.bq(v)
return B.U(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=B.b(["begin: "+x.d.l(0),"end: "+x.e.l(0),"colors: "+B.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.v(v))
w.push("tileMode: "+x.f.l(0))
return"LinearGradient("+C.b.bE(w,", ")+")"}}
var z=a.updateTypes([])
A.aH8.prototype={
$1(d){return d<=this.a},
$S:600}
A.aGE.prototype={
$1(d){var x=this,w=B.H(A.aTH(x.a,x.b,d),A.aTH(x.c,x.d,d),x.e)
w.toString
return w},
$S:601}
A.adf.prototype={
$1(d){var x=B.H(null,d,this.a)
x.toString
return x},
$S:65};(function aliases(){var x=A.Cr.prototype
x.Qv=x.d0
x.Qw=x.d1})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.P,[A.arK,A.Cr])
x(B.dN,[A.aH8,A.aGE,A.adf])
w(A.fA,A.Cr)})()
var y={o:B.T("h"),h:B.T("m<I>"),b:B.T("G"),m:B.T("fA?")}};
(a=>{a["mzcMuIVttj4Rx7y33etsVW2d1FE="]=a.current})($__dart_deferred_initializers__);