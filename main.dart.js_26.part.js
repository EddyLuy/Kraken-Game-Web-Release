((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aRx(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aB(f)
if(e==null)return d.aB(1-f)
x=D.aUk(d.a,d.rd(),e.a,e.rd(),f)
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
aiD:function aiD(d){this.a=d},
acb(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.a9(A.cG('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.k(0,d)&&k===0
else x=!0
if(x){$.J()
x=new A.a6H(d,e,f,g,h,null)
x.GS()
return x}else{$.J()
x=new A.a6F(j,k,d,e,f,g,h,null)
x.GS()
return x}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[26],B)
D=c[29]
B.lr.prototype={
wM(d,e){var x=this,w=x.d.W(e).FN(d),v=d.gem(),u=x.rd(),t=x.X1(d,e),s=x.r
s=s==null?null:s.W(e).FN(d)
return B.acb(w,x.e*v,x.a,u,x.f,t,s,x.w*d.gem())},
i6(d){return this.wM(d,null)},
aB(d){var x=this,w=x.a,v=A.a3(w).i("aa<1,h>")
w=A.a4(new A.aa(w,new B.aiD(d),v),v.i("ay.E"))
return new B.lr(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
MX(d){var x=this
return new B.lr(x.d,x.e,x.f,x.r,x.w,A.bH(x.a.length,d,!1,y.o),x.b,x.c)},
d5(d,e){if(y.a.b(d))return B.aRx(d,this,e)
return this.QC(d,e)},
d6(d,e){if(y.a.b(d))return B.aRx(this,d,e)
return this.QD(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.X(e)!==A.E(x))return!1
return e instanceof B.lr&&e.d.k(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cz(e.a,x.a)&&A.cz(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gB(d){var x=this,w=A.bt(x.a),v=x.b
v=v==null?null:A.bt(v)
return A.U(x.d,x.e,x.f,x.c,w,v,x.r,x.w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.i6(x.e),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.i6(x.w))
return"RadialGradient("+C.b.bF(w,", ")+")"}}
var z=a.updateTypes([])
B.aiD.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function inheritance(){var x=a.inherit
x(B.lr,D.CC)
x(B.aiD,A.dJ)})()
var y={o:A.S("h"),h:A.S("m<I>"),a:A.S("lr?")}};
(a=>{a["TQ6gsFzldkE/kNcY/S39z9GvMZw="]=a.current})($__dart_deferred_initializers__);