((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
aQx(d,e,f){var x,w,v,u,t,s,r
if(d==e)return d
if(d==null)return e.aA(f)
if(e==null)return d.aA(1-f)
x=E.aTl(d.a,d.ra(),e.a,e.ra(),f)
w=A.lY(d.d,e.d,f)
w.toString
v=A.W(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=f<0.5
t=u?d.f:e.f
s=A.lY(d.r,e.r,f)
r=A.W(d.w,e.w,f)
r.toString
r=Math.max(0,r)
u=u?d.c:e.c
return new C.mR(w,v,t,s,r,x.a,x.b,u)},
mR:function mR(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i
_.b=j
_.c=k},
ai9:function ai9(d){this.a=d},
aOZ(d,e,f,g,h,i,j,k){var x
if(f.length!==g.length)A.a7(A.cB('"colors" and "colorStops" arguments must have equal length.',null))
if(j!=null)x=j.j(0,d)&&k===0
else x=!0
if(x){$.L()
x=new A.a6h(d,e,f,g,h,null)
x.GL()
return x}else{$.L()
x=new A.a6f(j,k,d,e,f,g,h,null)
x.GL()
return x}}},D,E
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[20],C)
D=c[41]
E=c[22]
C.mR.prototype={
wK(d,e){var x=this,w=x.d.X(e).FH(d),v=d.geK(),u=x.ra(),t=x.WW(d,e),s=x.r
s=s==null?null:s.X(e).FH(d)
return C.aOZ(w,x.e*v,x.a,u,x.f,t,s,x.w*d.geK())},
kZ(d){return this.wK(d,null)},
aA(d){var x=this,w=x.a,v=A.a4(w).i("aa<1,h>")
w=A.a6(new A.aa(w,new C.ai9(d),v),v.i("ay.E"))
return new C.mR(x.d,x.e,x.f,x.r,x.w,w,x.b,x.c)},
MR(d){var x=this
return new C.mR(x.d,x.e,x.f,x.r,x.w,A.bG(x.a.length,d,!1,y.o),x.b,x.c)},
d0(d,e){if(y.a.b(d))return C.aQx(d,this,e)
return this.Qx(d,e)},
d1(d,e){if(y.a.b(d))return C.aQx(this,d,e)
return this.Qy(d,e)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.X(e)!==A.D(x))return!1
return e instanceof C.mR&&e.d.j(0,x.d)&&e.e===x.e&&e.f===x.f&&A.cx(e.a,x.a)&&A.cx(e.b,x.b)&&J.e(e.r,x.r)&&e.w===x.w},
gA(d){var x=this,w=A.bq(x.a),v=x.b
v=v==null?null:A.bq(v)
return A.T(x.d,x.e,x.f,x.c,w,v,x.r,x.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(d){var x=this,w=A.b(["center: "+x.d.l(0),"radius: "+A.i_(x.e),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.f.l(0))
v=x.r
if(v!=null)w.push("focal: "+v.l(0))
w.push("focalRadius: "+A.i_(x.w))
return"RadialGradient("+B.b.bE(w,", ")+")"}}
var z=a.updateTypes([])
C.ai9.prototype={
$1(d){var x=A.H(null,d,this.a)
x.toString
return x},
$S:67};(function inheritance(){var x=a.inherit
x(C.mR,E.Cr)
x(C.ai9,A.dM)})()
var y={o:A.U("h"),h:A.U("m<I>"),a:A.U("mR?")};(function constants(){D.lJ=new A.h(1,0,0.6745098039215687,0.7568627450980392,B.d)
D.iS=new A.h(1,1,0.7019607843137254,0,B.d)
D.rg=new A.h(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,B.d)
D.ri=new A.h(1,1,0.30196078431372547,0,B.d)
D.rp=new A.h(1,0.9176470588235294,0.9647058823529412,1,B.d)
D.dn=new A.al(24,24,24,24)
D.tY=new A.an(984367,"MaterialIcons",!1)
D.cZ=new A.c(0,3)})()};
(a=>{a["RZovIhsGQVDMjMfu6hv9pwB0DMA="]=a.current})($__dart_deferred_initializers__);