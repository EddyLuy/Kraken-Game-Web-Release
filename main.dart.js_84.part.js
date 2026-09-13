((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,M,I,G,N,K,O,P,Q,E,R,S,F,T,U,B={
aVH(d,e,f,g){return C.d.a9(d-e*0.5,f,Math.max(f,g-e))},
aLf(d,e,f,g,h,i,j,k,l){return new B.Rs(l,d,e,h,f,i,g,j,k)},
aVK(d,e){return A.bS(d.L(0,new A.c(e?92:-92,0)),105,184)},
aVJ(d){var x
switch(d.a){case 0:x=42
break
case 1:x=96
break
default:x=null}return x},
aRa(d){var x=d.a,w=d.b
return new B.mQ(x,x,w,w,d.c,d.d,!0,d.f)},
b23(d){return B.aRa(d)},
aVL(d){return new A.fO(B.bab(d),y.w)},
bab(d){return function(){var x=d
var w=0,v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,a0,a1,a2,a3,a4,a5
return function $async$aVL(a6,a7,a8){if(a7===1){u.push(a8)
w=v}for(;;)switch(w){case 0:a5=x.ch
t=x.go,s=t.length,r=a5.a,q=r*0.35,p=r*0.15,o=r*0.5,n=a5.b,m=n*0.62,l=0
case 2:if(!(l<s)){w=4
break}k=t[l]
j=k.c
i=k.a
h=j-i
g=h<=r
f=g?m:n
e=k.d,a0=k.b,a1=i+q,a2=i-p,h=i+h/2,a3=0
case 5:if(!(e>a0)){w=7
break}w=g?8:9
break
case 8:w=10
return a6.b=new A.JH(k,new A.c(h,e)),1
case 10:++a3
w=6
break
case 9:a4=a1-((a3&1)===1?o:0)
case 11:if(!(a4<j)){w=13
break}w=a4>=a2?14:15
break
case 14:w=16
return a6.b=new A.JH(k,new A.c(a4,e)),1
case 16:case 15:case 12:a4+=r
w=11
break
case 13:++a3
case 6:e-=f
w=5
break
case 7:case 3:++l
w=2
break
case 4:return 0
case 1:return a6.c=u.at(-1),3}}}},
bac(d,e,f){var x=e.M(0,d)
if(x.gjq()<0.0001)return f.M(0,d).gaS()
return f.M(0,d.L(0,x.S(0,C.d.a9((f.M(0,d).a*x.a+f.M(0,d).b*x.b)/x.gjq(),0,1)))).gaS()},
aVI(d,e,f){return d.M(0,new A.c(C.d.a9(d.a,f.a,f.c),C.d.a9(d.b,f.b,f.d))).gjq()<e*e},
Mt(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=J.bm(e)
if(m.gJ(e)<3)return!1
for(x=m.gJ(e)-1,w=d.b,v=d.a,u=!1,t=0;t<m.gJ(e);s=t+1,x=t,t=s){r=m.h(e,t)
q=m.h(e,x)
p=r.b
o=q.b
if(p>w!==o>w){n=r.a
n=v<(q.a-n)*(w-p)/(o-p)+n
p=n}else p=!1
if(p)u=!u}return u},
ba9(d,e,f){var x,w,v,u
if(!B.Mt(d,f))return!1
for(x=d.a,w=d.b,v=0;v<12;++v){u=6.283185307179586*v/12
if(!B.Mt(new A.c(x+Math.cos(u)*e,w+Math.sin(u)*e),f))return!1}return!0},
baa(d,e,f){var x,w,v,u
if(B.Mt(d,f))return!0
for(x=d.a,w=d.b,v=0;v<12;++v){u=6.283185307179586*v/12
if(B.Mt(new A.c(x+Math.cos(u)*e,w+Math.sin(u)*e),f))return!0}return!1},
aNe(d,e,f,g,h,i,j){var x,w=new B.aJ4(j,i,g,f),v=new A.c(C.d.a9(h.a+e.a,d.a+i,d.c-i),h.b)
if(!w.$1(v))v=h
x=new A.c(v.a,C.d.a9(v.b+e.b,d.b+i,d.d-i))
return w.$1(x)?x:v},
ahM(d,e,f,g,h,i,j,k,l,m,n){return new B.Ed(f,k,j,!1,n,!1,l,d,i,e,h)},
Rs:function Rs(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.x=j
_.y=k
_.z=l},
x7:function x7(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0},
iy:function iy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
oU:function oU(d,e){this.a=d
this.b=e},
mQ:function mQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.z=_.y=_.x=0},
br:function br(d,e,f){this.a=d
this.b=e
this.c=f},
iz:function iz(d,e){this.a=d
this.b=e},
x6:function x6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1
_.fr=a2
_.fx=a3
_.fy=a4
_.go=a5
_.k1=a6
_.k2=a7},
aJ4:function aJ4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aJ5:function aJ5(d,e){this.a=d
this.b=e},
aJ6:function aJ6(d,e){this.a=d
this.b=e},
Ed:function Ed(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
Jq:function Jq(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=null
_.cy=h
_.db=i
_.fr=_.dy=_.dx=$
_.fx=!1
_.fy=0
_.go=!0
_.k2=_.k1=_.id=0
_.k3=null
_.k4=j
_.ok=$
_.p1=k
_.p2=l
_.p3=5
_.p4=0
_.c=_.a=null},
aBi:function aBi(d){this.a=d},
aBj:function aBj(d){this.a=d},
aB0:function aB0(d,e){this.a=d
this.b=e},
aAZ:function aAZ(d,e){this.a=d
this.b=e},
aB_:function aB_(d,e){this.a=d
this.b=e},
aB9:function aB9(d){this.a=d},
aBa:function aBa(d){this.a=d},
aB7:function aB7(d){this.a=d},
aB8:function aB8(d){this.a=d},
aBb:function aBb(){},
aB6:function aB6(){},
aB5:function aB5(){},
aB2:function aB2(d,e){this.a=d
this.b=e},
aB3:function aB3(d,e,f){this.a=d
this.b=e
this.c=f},
aB1:function aB1(d){this.a=d},
aB4:function aB4(d,e){this.a=d
this.b=e},
aBd:function aBd(){},
aBe:function aBe(){},
aBh:function aBh(d){this.a=d},
aBf:function aBf(d,e){this.a=d
this.b=e},
aBc:function aBc(d,e){this.a=d
this.b=e},
aBg:function aBg(){},
Jp:function Jp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ZH:function ZH(d,e){this.c=d
this.a=e},
aAX:function aAX(d,e){this.a=d
this.b=e},
aAY:function aAY(d,e){this.a=d
this.b=e},
aAW:function aAW(d,e){this.a=d
this.b=e},
ZJ:function ZJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBq:function aBq(d){this.a=d},
Yy:function Yy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.a=o},
a18:function a18(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ZI:function ZI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.CW=t
_.cx=u
_.cy=v
_.db=w
_.dx=x
_.dy=a0
_.fr=a1
_.fx=a2
_.fy=a3
_.go=a4
_.id=a5
_.k1=a6
_.k2=a7
_.a=a8},
aBk:function aBk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBl:function aBl(d,e,f){this.a=d
this.b=e
this.c=f},
aBm:function aBm(d,e,f){this.a=d
this.b=e
this.c=f},
aBn:function aBn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBo:function aBo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBp:function aBp(){}},D,L
J=c[1]
A=c[0]
C=c[2]
H=c[30]
M=c[79]
I=c[26]
G=c[29]
N=c[62]
K=c[24]
O=c[31]
P=c[69]
Q=c[35]
E=c[43]
R=c[48]
S=c[80]
F=c[81]
T=c[60]
U=c[28]
B=a.updateHolder(c[18],B)
D=c[75]
L=c[78]
B.Rs.prototype={
iU(d){var x=this,w=x.c,v=C.d.a9((d.b-w)/(x.d-w),0,1)
w=A.a_(x.e,x.f,v)
w.toString
return new A.c(x.a.a/2+(d.a-x.b)*x.x,w)},
a3z(d,e){var x=this.iU(d)
return new A.c(x.a+0,x.b+-e*0.88)}}
B.x7.prototype={}
B.iy.prototype={}
B.oU.prototype={
G(){return"PerspectiveEnemyKind."+this.b}}
B.mQ.prototype={}
B.br.prototype={}
B.iz.prototype={
G(){return"PerspectivePropKind."+this.b}}
B.x6.prototype={}
B.Ed.prototype={
aa(){var x=A.jb(!0,null,!0,!0,null,null,!1),w=y.I
return new B.Jq(x,C.cY,A.ar(y.x),new A.bY(Date.now(),0,!1),A.C(y.e,w),A.C(y.A,w),A.b([],y.F),A.ar(y.W),A.ar(y.m))}}
B.Jq.prototype={
gpk(){var x=this.a.c
return Math.min(x.r,x.e-x.d)},
gVM(){var x,w,v,u,t,s,r,q,p,o,n=this.a.c
if(n.dx==null)return null
for(n=n.k1,x=n.length,w=this.p2,v=null,u=1/0,t=0;t<x;++t){s=n[t]
if(s.b!==D.cN||w.n(0,s))continue
r=s.a
q=this.dx
q===$&&A.a()
p=r.a-q.a
q=r.b-q.b
o=Math.sqrt(p*p+q*q)
if(o<=155&&o<u){u=o
v=s}}return v},
v1(d){var x=this.a.c
return d.b*1.2*x.w/x.c},
B2(d){var x,w=d.a/(2*this.v1(d)),v=this.a.c.c
if(w*2>=v)return v/2
x=this.dx
x===$&&A.a()
return C.d.a9(x.a,w,v-w)},
ao(){var x,w,v,u=this
u.aD()
x=u.a.c
w=u.dx=x.f
v=w.b
u.dy=new A.c(w.a+-90,v+45)
u.fr=B.aVH(v,u.gpk(),x.d,x.e)
x=u.a.c.k2
v=A.a3(x).i("aa<1,mQ>")
x=A.a4(new A.aa(x,B.bad(),v),v.i("ay.E"))
u.ok!==$&&A.aK()
u.ok=x
u.AV()
u.AU()
if(u.a.c.x)u.As()
u.r=A.pu(Q.mJ,new B.aBi(u))
$.a2.ok$.push(new B.aBj(u))},
AV(){var x=0,w=A.q(y.H),v,u=this,t,s
var $async$AV=A.r(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:x=3
return A.j(A.bJ(A.b([u.jX("assets/sprites/pirate_idle_sheet_transparent.png"),u.jX("assets/sprites/pirate_running_sheet_transparent.png"),u.jX("assets/sprites/pirate_extended_cutlass_sheet_v4_transparent.png"),u.jX("assets/sprites/pirate_flintlock_sheet.png"),u.jX("assets/sprites/necromancer_ghost/necro_ghost.png")],y.k),y.I),$async$AV)
case 3:s=e
if(u.c==null){for(t=J.b7(s);t.u();)t.gO().j()
x=1
break}u.I(new B.aB0(u,s))
case 1:return A.o(v,w)}})
return A.p($async$AV,w)},
AU(){var x=0,w=A.q(y.H),v,u=this,t
var $async$AU=A.r(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:x=3
return A.j(K.qi(u.a.Q),$async$AU)
case 3:t=e
if(u.c==null){if(t!=null)t.j()
x=1
break}u.I(new B.aAZ(u,t))
case 1:return A.o(v,w)}})
return A.p($async$AU,w)},
jX(d){return this.alp(d)},
alp(d){var x=0,w=A.q(y.I),v,u,t,s,r,q
var $async$jX=A.r(function(e,f){if(e===1)return A.n(f,w)
for(;;)switch(x){case 0:s=U
r=J
q=C.X
x=4
return A.j($.dR().d1(d),$async$jX)
case 4:x=3
return A.j(s.f7(r.ft(q.gba(f))),$async$jX)
case 3:u=f
x=5
return A.j(u.cI(),$async$jX)
case 5:t=f
u.j()
v=t.gcu()
x=1
break
case 1:return A.o(v,w)}})
return A.p($async$jX,w)},
As(){var x=0,w=A.q(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$As=A.r(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=y.N
k=A.C(l,l)
j=s.a.c.Q
if(j!=null)k.p(0,"backdrop",j)
j=s.a.c.as
if(j!=null)k.p(0,"ground",j)
j=s.a.c.ax
if(j!=null)k.p(0,"water",j)
j=s.a.c.ay
if(j!=null)k.p(0,"obstacle-fill",j)
for(j=s.a.c.cy.ghq(),j=j.gac(j);j.u();){n=j.gO()
k.p(0,"prop:"+n.a.b,n.b)}for(j=s.a.c.db.ghq(),j=j.gac(j);j.u();){n=j.gO()
k.p(0,"enemy:"+n.a.b,n.b)}r=k
q=A.C(l,y.I)
u=4
l=r,l=new A.eu(l,A.u(l).i("eu<1,2>")).gac(0)
case 7:if(!l.u()){x=8
break}k=l.d
k.toString
p=k
h=J
g=q
f=p.a
x=9
return A.j(s.jX(p.b),$async$As)
case 9:h.nV(g,f,e)
x=7
break
case 8:u=2
x=6
break
case 4:u=3
i=t.pop()
for(l=q,l=new A.co(l,l.r,l.e);l.u();){o=l.d
o.j()}x=1
break
x=6
break
case 3:x=2
break
case 6:if(s.c==null){for(l=q,l=new A.co(l,l.r,l.e);l.u();)l.d.j()
x=1
break}s.I(new B.aB_(s,q))
case 1:return A.o(v,w)
case 2:return A.n(t.at(-1),w)}})
return A.p($async$As,w)},
acz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(d==null)return null
$.J()
x=new A.kH()
w=A.NE(x,null)
v=this.a.c
u=this.gpk()
t=v.CW
s=d.c
r=d.d
q=t*s/r*(1/u)/(1.2*v.w/v.c)
for(v=new A.iW(B.aVL(v).a()),u=w.a,p=q/2;v.u();){o=v.b
n=o.b
m=o.a
J.a7(u.save())
u.clipRect(A.bn(new A.i(m.a,m.b-t,m.c,m.d)),$.h5()[1],!0)
l=n.a-p
k=n.b-t
w.bL(d,new A.i(0,0,s,r),new A.i(l,k,l+q,k+t),new A.b9(C.r,C.t,C.D,C.F,C.o))
u.restore()}return x.nS()},
aow(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.c==null)return
x=new A.bY(Date.now(),0,!1)
w=C.d.a9(x.dW(e.w).a/1e6,0,0.04)
e.w=x
e.fy+=w
e.id=Math.max(0,e.id-w)
e.k1=Math.max(0,e.k1-w)
e.k2=Math.max(0,e.k2-w)
e.p4=Math.max(0,e.p4-w)
v=e.f
u=v.n(0,C.at)||v.n(0,C.c2)
t=v.n(0,C.au)||v.n(0,C.ct)
s=v.n(0,C.aU)||v.n(0,C.cu)
r=v.n(0,C.aZ)||v.n(0,C.cL)
v=t?1:0
q=u?1:0
p=r?1:0
o=s?1:0
n=new A.c(v-q,p-o)
if(n.gaS()>1)n=n.cE(0,n.gaS())
v=n.a
if(v!==0)e.go=v>0
q=e.a.c
p=q.c
o=e.gpk()
m=e.dx
m===$&&A.a()
q=e.dx=B.aNe(new A.i(0,q.d,p,q.e),new A.c(v,n.b*(1.2*q.w*o/p)).S(0,570).S(0,w),D.jT,q.go,m,30,q.fy)
if(e.a.Q!=null){l=e.go?-1:1
v=e.dy
v===$&&A.a()
e.dy=K.aIx(v,w,4.8,new A.c(q.a+105*l,q.b+42))}v=e.dx
q=e.gpk()
p=e.a.c
e.fr=B.aVH(v.b,q,p.d,p.e)
if(!e.fx){v=e.a
q=v.c.fx
v=(q==null?null:q.n(0,e.dx))===!0&&v.e!=null}else v=!1
if(v){e.fx=!0
$.a2.ok$.push(new B.aB9(e))}e.aox(w)
e.atq()
for(v=e.k4,q=v.length,k=0;k<v.length;v.length===q||(0,A.y)(v),++k){j=v[k]
i=j.a
p=j.b
h=new A.c(i.a+p.a*w,i.b+p.b*w)
j.a=h
j.d+=w
p=e.ok
p===$&&A.a()
o=p.length
g=0
for(;g<p.length;p.length===o||(0,A.y)(p),++g){f=p[g]
m=f.c
if(m<=0)continue
if(B.bac(i,h,f.a)<=B.aVJ(f.f)){p=Math.max(0,f.c-50)
f.c=p
f.x=0.18
if(p<=0&&f.w)f.z=2.5
j.d=99
break}}}C.b.cT(v,new B.aBa(e))
e.I(new B.aBb())},
aox(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.ok
n===$&&A.a()
x=n.length
w=0
for(;w<n.length;n.length===x||(0,A.y)(n),++w){v=n[w]
v.x=Math.max(0,v.x-d)
v.y=Math.max(0,v.y-d)
if(v.c<=0){if(!v.w)continue
if((v.z-=d)<=0){v.a=v.b
v.c=v.d}continue}if(!v.e)continue
u=o.dx
u===$&&A.a()
t=v.a
s=u.a-t.a
t=u.b-t.b
r=Math.sqrt(s*s+t*t)
if(r<=(v.f===D.hS?112:86)){u=v.y
if(u<=0)u=v.y=0.65
q=o.a
if(!q.r&&o.p4<=0&&u>0.25){--o.p3
o.p4=1.1
p=r<0.001?C.dG:new A.c(-s/r,-t/r)
u=o.dx
q=q.c
o.dx=B.aNe(new A.i(0,q.d,q.c,q.e),new A.c(p.a*82,p.b*82),D.jT,q.go,u,30,q.fy)
if(o.p3<=0)o.apB()}continue}if(r>520)continue
u=v.a
q=o.a.c
v.a=B.aNe(new A.i(0,q.d,q.c,q.e),new A.c(s/r*105*d,t/r*105*d),D.jT,q.go,u,28,q.fy)}},
apB(){var x,w,v,u,t,s=this
s.dx=s.a.c.f
s.p3=5
s.p4=1.1
C.b.R(s.k4)
x=s.ok
x===$&&A.a()
w=x.length
v=0
for(;v<w;++v){u=x[v]
t=u.c<=0&&!u.w
if(t)continue
u.a=u.b
u.c=u.d
u.z=u.y=0}},
atq(){var x,w,v,u,t,s,r,q=this,p=q.id
if(p<=0)return
x=0.48-p
if(x<0.16||x>0.38)return
p=q.dx
p===$&&A.a()
w=B.aVK(p,q.go)
p=q.ok
p===$&&A.a()
v=p.length
u=q.p1
t=0
for(;t<p.length;p.length===v||(0,A.y)(p),++t){s=p[t]
if(s.c<=0||u.n(0,s))continue
if(!B.aVI(s.a,B.aVJ(s.f),w))continue
u.F(0,s)
r=Math.max(0,s.c-100)
s.c=r
s.x=0.18
if(r<=0&&s.w)s.z=2.5}},
aov(d,e){var x=e.b
if(!A.c1([C.at,C.au,C.aU,C.aZ,C.c2,C.ct,C.cu,C.cL,C.bD],y.x).n(0,x))return C.cd
if(e instanceof A.fG)if(x.k(0,C.bD))this.Yi()
else this.f.F(0,x)
if(e instanceof A.hN)this.f.E(0,x)
return C.bN},
Yi(){var x=this
if(x.id>0)return
x.id=0.48
x.p1.R(0)
x.d.cD()
x.I(new B.aB6())},
ar_(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.k2>0)return
x=i.B2(e)
w=i.fr
w===$&&A.a()
v=i.gpk()
u=i.v1(e)
t=i.a.c
s=B.aLf(x,w,0,u,w+v,e.b,t.d,t.e,e)
t=s.e
r=s.d
q=s.c
p=s.y
if(p==null)p=q
o=s.z
if(o==null)o=r
n=(s.f-t)/(r-q)
x=92*(0/(o-p))
m=C.d.a9((d.b-t+n*q+80.96-x*p)/(n-x),q,r)
l=new A.c(s.b+(d.a-s.a.a/2)/s.x,m)
x=i.dx
x===$&&A.a()
k=l.M(0,x)
if(k.gaS()<5)return
j=k.cE(0,k.gaS())
i.go=j.a>=0
i.k3=l
i.k4.push(new B.x7(i.dx.L(0,j.S(0,34)),j.S(0,900),92))
i.k1=0.56
i.k2=1.15
i.d.cD()
i.I(new B.aB5())},
akv(d,e){var x=this.f
if(e)x.F(0,d)
else x.E(0,d)
this.d.cD()},
vD(){var x=0,w=A.q(y.H),v,u=this,t,s,r,q
var $async$vD=A.r(function(d,e){if(d===1)return A.n(e,w)
for(;;)switch(x){case 0:r=u.gVM()
q=u.a.c.dx
if(r==null||q==null){x=1
break}t=u.e.eF()<u.a.c.dy
u.f.R(0)
u.I(new B.aB2(u,r))
x=t?3:4
break
case 3:s=u.a.x
s=s==null?null:s.$0()
x=5
return A.j(y.q.b(s)?s:A.da(s,y.H),$async$vD)
case 5:case 4:s=u.c
if(s==null){x=1
break}x=6
return A.j(A.iZ(!1,new B.aB3(u,t,q),s,y.H),$async$vD)
case 6:if(u.c==null){x=1
break}if(!t)u.I(new B.aB4(u,r))
u.d.cD()
case 1:return A.o(v,w)}})
return A.p($async$vD,w)},
arA(d){var x,w,v,u,t,s,r
for(x=[-235,235],w=d.a,v=d.b+200,u=0;u<2;++u){t=C.d.a9(w+x[u],60,this.a.c.c-60)
s=this.a.c
s=C.d.a9(v,s.d+60,s.e-60)
r=this.ok
r===$&&A.a()
C.b.F(r,B.aRa(new B.iy(new A.c(t,s),160,!0,D.hS,!1)))}},
j(){var x=this,w=x.r
if(w!=null)w.aP()
x.d.j()
w=x.x
if(w!=null)w.j()
w=x.y
if(w!=null)w.j()
w=x.z
if(w!=null)w.j()
w=x.Q
if(w!=null)w.j()
w=x.as
if(w!=null)w.j()
w=x.at
if(w!=null)w.j()
w=x.ax
if(w!=null)w.j()
w=x.ay
if(w!=null)w.j()
w=x.ch
if(w!=null)w.j()
w=x.cx
if(w!=null)w.j()
w=x.CW
if(w!=null)w.j()
for(w=x.cy,w=new A.co(w,w.r,w.e);w.u();)w.d.j()
for(w=x.db,w=new A.co(w,w.r,w.e);w.u();)w.d.j()
x.au()},
D(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.f.a,n=q.ok
n===$&&A.a()
x=A.a3(n).i("az<1>")
w=A.a4(new A.az(n,new B.aBd(),x),x.i("L.E"))
v=new A.az(w,new B.aBe(),A.a3(w).i("az<1>")).gJ(0)
o=A.f1(0,A.je(new B.aBf(q,o!==0)))
n=A.wt(p,p,p,F.uH,p,p,q.a.d,p,p,p,"Leave development map")
x=y.p
u=A.b([],x)
t=q.a
s=t.y
if(s!=null&&t.z!=null)u.push(A.W(s.toUpperCase()+" \u2022 LEVEL "+A.v(t.z),p,p,p,F.Gt,p,p,p))
u.push(A.W(q.a.c.a.toUpperCase(),p,p,p,L.Gw,p,p,p))
n=A.bD(p,q.Jx(A.bW(A.b([n,A.bs(u,C.b2,C.m,C.z)],x),C.n,p,C.m,C.z,0)),p,p,16,p,16,p)
u=A.bD(p,q.Jx(D.aqH),p,p,p,16,16,p)
t=q.a.r
s="TARGETS "+v
r=""+w.length
if(t)t=s+"/"+r+"  \u2022  TRAINING DAMAGE OFF"
else{t=y.N
t=s+"/"+r+"  \u2022  HEALTH "+(C.b.tz(A.bH(q.p3,"\u2665",!1,t))+C.b.tz(A.bH(5-q.p3,"\u2661",!1,t)))}t=A.b([o,n,u,A.bD(p,q.Jx(A.W(t,p,p,p,D.anq,p,p,p)),p,p,p,16,62,p)],x)
o=q.p4
if(o>0.82)t.push(A.f1(0,A.dE(A.fy(p,C.AN.bi(C.d.a9((o-0.82)/0.28,0,1)*0.24),!0),!0,p)))
t.push(A.bD(22,new B.ZH(q.gaku(),p),p,p,22,p,p,p))
o=q.k2
o=o<=0?"CLICK TO FIRE":C.d.ag(o,1)+"s"
t.push(A.bD(22,A.bW(A.b([new B.Jp(T.nG,o,new B.aBg(),p),C.ex,new B.Jp(D.US,"SWORD",q.garO(),p)],x),C.n,p,C.m,C.z,0),p,p,p,22,p,p))
if(q.gVM()!=null)t.push(A.bD(28,A.cA(G.mv(D.Wy,D.aqm,q.galz(),A.aKv(p,D.NI,C.i,D.T9,D.Ie)),p,p),p,p,0,0,p,p))
return A.fz(!0,p,A.fZ(p,D.M6,A.bZ(C.a5,t,C.p,C.af,p)),p,p,p,q.d,!0,p,new B.aBh(q),p,q.gaou(),p,p)},
Jx(d){var x=null
return A.ha(new A.aA(M.tD,d,x),new A.bX(D.mf,x,H.eS(E.cC,1.5),A.dz(14),x,x,C.ab),C.bb)}}
B.Jp.prototype={
D(d){var x=null,w=H.eS(E.cC,2),v=A.dz(16)
return A.ik(x,A.eH(x,A.bs(A.b([A.cl(this.c,C.i,x,25),A.W(this.d,x,x,x,D.aoR,x,x,x)],y.p),C.n,C.cv,C.z),C.v,x,new A.bX(D.mf,x,w,v,x,x,C.ab),x,58,x,x,x,x,82),C.ax,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x)}}
B.ZH.prototype={
D(d){var x=this
return A.cU(A.bZ(C.a5,A.b([x.AT(53,0,D.V5,C.aU),x.AT(0,53,D.V3,C.at),x.AT(106,53,D.V4,C.au),x.AT(53,106,F.uo,C.aZ)],y.p),C.p,C.af,null),154,154)},
AT(d,e,f,g){var x=null,w=H.eS(E.cC,2),v=A.dz(14)
return A.bD(x,A.lc(C.c1,A.eH(x,A.cl(f,C.i,x,34),C.v,x,new A.bX(D.mf,x,w,v,x,x,C.ab),x,48,x,x,x,x,48),new B.aAW(this,g),new B.aAX(this,g),x,x,new B.aAY(this,g)),x,x,d,x,e,x)}}
B.ZJ.prototype={
D(d){var x,w,v,u,t=this,s=null,r=t.c
if(r.x){x=r.d
w=r.e
v=Math.min(r.r,w-x)
u=r.at
if(u==null)u=x
r=A.dj(s,s,s,new B.Yy(t.d,t.f,x,w,v,r.c,u,t.e,t.r,t.w,r.y,s),C.E)}else r=A.je(new B.aBq(t))
return r}}
B.Yy.prototype={
aq(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=b0.a,a6=b0.b,a7=0+a5,a8=0+a6
$.J()
x=A.K()
x.seZ(D.XF.i6(new A.i(0,0,a7,a8)))
a9.bm(new A.i(0,0,a7,a8),x)
w=a6*0.34
v=a3.y
if(v!=null){a7=a3.x
u=a3.r*a7
t=u*v.d/v.c
s=(a3.w-a3.c)*(a6/a3.f)+a6*0.08-t
r=a5/2-a3.b*a7
A.a4p(C.bz,C.r,a9,a4,a4,a4,C.a6,C.iI,!1,v,!1,!1,1,new A.i(r,s,r+u,s+t),C.d5,1)
return}if(!a3.Q)return
q=a5/2-a3.b*a3.x
a7=a9.a
J.a7(a7.save())
a7.translate(0,-(a3.c-a3.d)*a6/a3.f)
a8=a6*0.54
x=A.K()
x.seZ(D.XJ.i6(new A.i(0,w,a5,a8)))
a9.bm(new A.i(0,w,a5,a8),x)
p=a3.z
if(p!=null){a8=a6*0.47
J.a7(a7.save())
a7.clipRect(A.bn(new A.i(0,w,a5,a8)),$.h5()[1],!0)
for(o=C.d.aL(q,310)-310,a8=w+(a8-w);o<a5;o+=310)A.a4p(C.M,C.r,a9,a4,a4,a4,C.a6,C.iI,!1,p,!1,!1,1,new A.i(o,w,o+311,a8),C.d5,1)
a7.restore()}a8=$.J()
n=A.K()
n.r=D.Lv.gm()
for(o=C.d.aL(q,420)-420,x=a5+420,m=w-42,l=w-70,k=y.v,a8=a8.r,j=o;j<x;j+=420){i=A.b([],k)
h=new A.ba(a8,C.C,a4,a4,i)
i.push(new A.cD(j,w))
i.push(new A.hS(j+105,l,j+210,w))
i.push(new A.hS(j+310,m,j+410,w))
i.push(new A.f9())
g=n.aI()
i=h.ge2().a.snapshot()
a7.drawPath((h.e=new A.fw(i)).a,g)
g.delete()}f=A.K()
f.r=D.Mf.gm()
for(j=C.d.aL(q,310)-310,m=a5+310,l=w-65,i=w-105;j<m;j+=310){e=A.b([],k)
h=new A.ba(a8,C.C,a4,a4,e)
e.push(new A.cD(j,w))
e.push(new A.hS(j+75,i,j+150,w))
e.push(new A.hS(j+225,l,j+300,w))
e.push(new A.f9())
g=f.aI()
e=h.ge2().a.snapshot()
a7.drawPath((h.e=new A.fw(e)).a,g)
g.delete()}d=A.K()
d.r=C.i.bi(0.28).gm()
d.c=1.4
for(a5+=150,a0=1;a0<=5;++a0){a1=w+a0*a6*0.026
for(j=C.d.aL(q,150)-150,a8=a1+(9+a0);j<a5;j+=150){g=d.aI()
a7.drawArc.apply(a7,[A.bn(new A.i(j,a1,j+92,a8)),21.599999999999998,136.79999999999998,!1,g])
g.delete()}}$.J()
a2=A.K()
a2.r=C.i.bi(0.72).gm()
for(a5=a6*0.16;o<x;o+=420){a6=A.bS(new A.c(o+190,a5),42,190)
g=a2.aI()
a7.drawOval(A.bn(a6),g)
g.delete()}a7.restore()},
cF(d){var x=this
return d.b!==x.b||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f||d.w!==x.w||d.x!==x.x||d.y!=x.y||d.z!=x.z||d.Q!==x.Q}}
B.a18.prototype={
aq(d,e){var x,w,v,u,t,s,r=this,q=null,p=e.b,o=B.aLf(r.c,r.e,0,r.d,r.f,p,q,q,e).iU(r.b),n=e.ga2R()*0.78,m=Math.min(185,e.gem()*0.24),l=C.d.a9(m/n,0,0.8),k=C.d.a9((m+115)/n,l,0.92),j=e.a,i=0+j,h=0+p
$.J()
x=A.K()
x.seZ(I.acb(o,n,D.a__,A.b([0,l,k,1],y.n),C.aJ,q,q,0))
d.bm(new A.i(0,0,i,h),x)
d.eY(new A.i(0,0,i,h),A.K())
w=A.K()
w.r=D.NK.gm()
w.z=D.a5D
v=[new A.c(j*0.08,p*0.24),new A.c(j*0.34,p*0.08),new A.c(j*0.68,p*0.14),new A.c(j*0.92,p*0.34),new A.c(j*0.15,p*0.82),new A.c(j*0.52,p*0.94),new A.c(j*0.86,p*0.8)]
for(p=d.a,u=0;u<7;++u){j=v[u]
i=C.f.aL(u,3)
j=A.bS(j,105+((u&1)===0?35:0),300+i*85)
t=w.aI()
p.drawOval(A.bn(j),t)
t.delete()}s=m+175
$.J()
j=A.K()
j.a=D.I1
j.seZ(I.acb(o,s,R.o6,D.YW,C.aJ,q,q,0))
d.bW(o,s,j)
p.restore()},
cF(d){var x=this
return!d.b.k(0,x.b)||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f}}
B.ZI.prototype={
aq(d,e){var x,w,v,u,t,s,r,q=this,p=q.b,o=B.aLf(q.r,q.x,0,q.w,q.y,e.b,p.d,p.e,e)
if(p.x)q.anA(d,e,o)
q.anP(d,o)
x=A.b([],y.u)
for(p=p.k1,w=p.length,v=0;v<w;++v){u=p[v]
t=u.a
x.push(new A.pY(t.b,t.a,new B.aBk(q,d,o,u)))}p=q.c
x.push(new A.pY(p.b,p.a,new B.aBl(q,d,o)))
if(q.e!=null){p=q.d
x.push(new A.pY(p.b,p.a,new B.aBm(q,d,o)))}for(p=q.fr,w=p.length,v=0;v<p.length;p.length===w||(0,A.y)(p),++v){s=p[v]
t=s.a
x.push(new A.pY(t.b,t.a,new B.aBn(q,d,o,s)))}for(p=q.fx,w=p.length,v=0;v<p.length;p.length===w||(0,A.y)(p),++v){r=p[v]
t=r.c
if(t>0){t=r.a
x.push(new A.pY(t.b,t.a,new B.aBo(q,d,o,r)))}}C.b.fc(x,new B.aBp())
for(p=x.length,v=0;v<x.length;x.length===p||(0,A.y)(x),++v)x[v].c.$0()},
anP(d,e){var x,w,v,u,t,s=this.k1
if(s==null)return
x=e.x
w=e.e
v=e.c
u=(e.f-w)/(e.d-v)
t=d.a
J.a7(t.save())
t.translate(e.a.a/2-e.b*x,w-v*u)
d.hd(x,u)
v=s.b
v===$&&A.a()
v=v.a
v===$&&A.a()
v=v.a
v.toString
t.drawPicture(v)
t.restore()},
anA(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=this.b,a3=a2.at
if(a3==null)a3=a2.d
x=a6.iU(new A.c(0,a3)).b
w=new A.ba($.J().r,C.C,a1,a1,A.b([],y.v))
w.a7(new A.cD(0,x))
v=a5.a
w.a7(new A.bj(v,x))
u=a5.b
w.a7(new A.bj(v,u))
w.a7(new A.bj(0,u))
w.a7(new A.f9())
u=A.K()
t=a2.e
u.seZ(D.XB.i6(new A.i(0,x,v,a6.iU(new A.c(0,t)).b)))
a4.dG(w,u)
s=this.go
if(s!=null){u=a4.a
J.a7(u.save())
a4.Cx(w)
r=a6.x
q=a6.e
p=a6.c
o=(a6.f-q)/(a6.d-p)
n=520*r*s.d/s.c/o
u.translate(a6.a.a/2-a6.b*r,q-p*o)
a4.hd(r,o)
for(m=a3-n,q=t+n,p=a2.c+520,l=520+1/r,k=n+1/o;m<q;m+=n)for(j=m+k,i=0;i<p;i+=520)A.a4p(C.M,C.r,a4,a1,a1,a1,C.o,C.iI,!1,s,!1,!1,1,new A.i(i,m,i+l,j),C.d5,1)
u.restore()}this.anB(a4,a5,a6)
$.J()
h=A.K()
h.r=D.Oy.gm()
h.c=2
for(u=a2.c,g=a2.d+55,a2=a4.a,v+=30,i=80;i<u;i+=145)for(q=i*0.071,f=g;f<t;f+=95){e=a6.iU(new A.c(i,f))
p=e.a
if(p<-30||p>v)continue
l=e.b
k=l+0
d=h.aI()
a2.drawLine.apply(a2,[p+-13.2,k,p+13.2,k,d])
d.delete()
a0=Math.sin(q+f*0.113)
if(a0>0.15){p=A.bS(new A.c(p+a0*22,l+7.04),3.08,(10+Math.abs(a0)*24)*0.88)
$.J()
l=new A.b9(C.r,C.t,C.D,C.F,C.o)
l.r=D.Pf.gm()
d=l.aI()
a2.drawOval(A.bn(p),d)
d.delete()}}},
anB(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.id
if(j==null||this.b.cx.length<3)return
x=this.b
w=x.cx
v=A.a3(w).i("aa<1,c>")
u=A.a4(new A.aa(w,f.gaDi(),v),v.i("ay.E"))
t=new A.ba($.J().r,C.C,k,k,A.b([],y.v))
w=A.a4(u,y.o)
t.a7(new A.Ar(w,!0))
if(A.a4j(t.ge2().a.getBounds()).dB(new A.i(0,0,0+e.a,0+e.b)).ga8(0))return
w=d.a
J.a7(w.save())
d.Cx(t)
s=f.x
v=f.e
r=f.c
q=(f.f-v)/(f.d-r)
p=460*s*j.d/j.c/q
w.translate(f.a.a/2-f.b*s,v-r*q)
d.hd(s,q)
for(o=x.d-p,v=x.e+p,x=x.c+460,r=460+1/s,n=p+1/q;o<v;o+=p)for(m=o+n,l=0;l<x;l+=460)A.a4p(C.M,C.r,d,k,k,k,C.o,C.iI,!1,j,!1,!1,1,new A.i(l,o,l+r,m),C.d5,1)
w.restore()
J.a7(w.save())
$.J()
x=A.K()
x.r=C.i.bi(0.55).gm()
x.b=C.H
x.c=3
d.dG(t,x)
w.restore()},
anK(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=e.iU(a0.a),f=d.a
J.a7(f.save())
f.translate(g.a,g.b)
d.aB(0.88*a0.c)
x=$.J()
w=A.K()
w.r=C.l.bi(0.28).gm()
w.z=D.a5E
d.kf(D.agh,w)
w=a0.b
v=this.k2.h(0,w)
if(v!=null){A:{if(D.bk===w){x=235
break A}if(D.al===w){x=128
break A}if(D.cN===w){x=92
break A}x=120
break A}w=v.c
u=v.d
t=x*w/u
s=-t/2
r=-x
q=A.K()
q.Q=C.a6
d.bL(v,new A.i(0,0,w,u),new A.i(s,r,s+t,r+x),q)
f.restore()
return}switch(w.a){case 0:p=new A.ba(x.r,C.C,null,null,A.b([],y.v))
p.a7(new A.cD(-55,0))
p.a7(new A.bj(-38,-62))
p.a7(new A.bj(-8,-92))
p.a7(new A.bj(20,-74))
p.a7(new A.bj(58,0))
p.a7(new A.f9())
x=A.K()
x.r=D.MN.gm()
d.dG(p,x)
x=A.K()
x.r=D.LD.gm()
x.b=C.H
x.c=4
d.dG(p,x)
break
case 1:x=A.K()
x.r=D.NU.gm()
d.bm(D.agf,x)
x=A.K()
x.r=D.OX.gm()
d.bW(D.a6F,68,x)
break
case 2:x=A.K()
x.r=D.M3.gm()
d.bm(D.agk,x)
x=A.K()
x.r=D.Qb.gm()
d.bm(D.agg,x)
break
case 3:x=A.hi(D.agj,C.dK)
w=A.K()
w.r=D.Mc.gm()
d.da(x,w)
w=A.K()
w.r=D.O3.gm()
d.bm(D.agi,w)
break
case 4:o=A.K()
o.r=D.Pw.gm()
n=A.K()
n.r=D.LT.gm()
for(m=0;m<9;++m){l=6.283185307179586*m/9
x=A.bS(new A.c(Math.cos(l)*38,-28+Math.sin(l)*22),24,54)
k=((m&1)===0?o:n).aI()
f.drawOval(A.bn(x),k)
k.delete()}$.J()
x=A.K()
x.r=D.Lm.gm()
d.bW(D.a6H,25,x)
break
case 5:x=A.K()
x.r=D.MX.gm()
d.bm(D.age,x)
for(j=-94;j<105;j+=31){x=new A.b9(C.r,C.t,C.D,C.F,C.o)
x.r=D.Pg.gm()
k=x.aI()
f.drawRect(A.bn(new A.i(j,-39,j+25,-4)),k)
k.delete()}for(x=[-88,88],i=0;i<2;++i){w=x[i]-7
u=new A.b9(C.r,C.t,C.D,C.F,C.o)
u.r=D.Mh.gm()
k=u.aI()
f.drawRect(A.bn(new A.i(w,-58,w+14,8)),k)
k.delete()}break
case 6:h=A.K()
h.r=D.O7.gm()
d.bm(D.agm,h)
d.bm(D.afH,h)
d.bm(D.agl,h)
x=A.hi(D.EZ,C.i_)
w=A.K()
w.seZ(D.acS.i6(D.EZ))
d.da(x,w)
break}f.restore()},
anH(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c,g=a1.iU(h),f=A.bS(g,15.84,63.36),e=$.J(),d=A.K()
d.r=C.l.bi(0.34).gm()
d.z=L.om
a0.kf(f,d)
f=i.cy
d=f>0
if(d)x=i.ay
else if(i.db>0){w=i.ch
x=w}else{w=i.Q?i.ax:i.at
x=w}if(x==null){h=A.K()
h.r=E.cC.gm()
a0.bW(new A.c(g.a+0,g.b+-57.2),24.64,h)
return}v=A.c4()
if(d){f=C.f.a9(C.d.cn((0.48-f)/0.08),0,5)*1100
v.sbk(new A.i(f,0,f+1100,725))}else{f=i.db
if(f>0){u=C.f.a9(C.d.cn((0.56-f)/0.07),0,7)
t=C.f.aL(u,4)
s=C.f.bU(u,4)
v.sbk(new A.i(F.nV[t],F.nT[s],F.nV[t+1],F.nT[s+1]))}else{f=i.Q?9:3
u=C.f.aL(C.d.cn(i.z*f),4)
r=x.c/4
f=u*r
v.sbk(new A.i(f,0,f+r,x.d))}}q=(d?230:185)*0.88
f=v.aW()
w=f.c
f=f.a
p=v.aW()
o=q*(w-f)/(p.d-p.b)
p=-o/2
f=-q
w=a0.a
J.a7(w.save())
w.translate(g.a,g.b+4)
n=i.as
if(!n)a0.hd(-1,1)
m=v.aW()
l=A.K()
l.Q=C.o
a0.bL(x,m,new A.i(p,f,p+o,f+q),l)
w.restore()
if(d){k=B.aVK(h,n)
h=k.a
f=k.b
d=k.c
w=k.d
j=A.b([a1.iU(new A.c(h,f)),a1.iU(new A.c(d,f)),a1.iU(new A.c(d,w)),a1.iU(new A.c(h,w))],y.g)
e=new A.ba(e.r,C.C,null,null,A.b([],y.v))
h=A.a4(j,y.o)
e.a7(new A.Ar(h,!0))
h=A.K()
h.r=D.Pb.gm()
h.b=C.H
h.c=4
a0.dG(e,h)}},
cF(d){return!0}}
var z=a.updateTypes(["B(mQ)","c(c)","eK(ck,dK)","~()","~(k,B)","a8<~>()","B(x7)","mQ(iy)"])
B.aJ4.prototype={
$1(d){var x=this,w=x.a
if(w.length===0||B.ba9(d,x.b,w)){w=x.b
w=C.b.dq(x.c,new B.aJ5(d,w))&&C.b.dq(x.d,new B.aJ6(d,w))}else w=!1
return w},
$S:156}
B.aJ5.prototype={
$1(d){return!B.aVI(this.a,this.b,d)},
$S:88}
B.aJ6.prototype={
$1(d){return!B.baa(this.a,this.b,d)},
$S:170}
B.aBi.prototype={
$1(d){return this.a.aow()},
$S:39}
B.aBj.prototype={
$1(d){return this.a.d.cD()},
$S:3}
B.aB0.prototype={
$0(){var x=this.a,w=this.b,v=J.bm(w)
x.x=v.h(w,0)
x.y=v.h(w,1)
x.z=v.h(w,2)
x.Q=v.h(w,3)
x.as=v.h(w,4)},
$S:0}
B.aAZ.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.aB_.prototype={
$0(){var x,w,v,u,t=this.a,s=this.b
t.ax=s.E(0,"backdrop")
t.ay=s.E(0,"ground")
t.ch=s.E(0,"water")
t.CW=s.E(0,"obstacle-fill")
x=t.cx
if(x!=null)x.j()
t.cx=t.acz(t.CW)
for(x=t.cy,w=0;w<7;++w){v=D.Zu[w]
u=s.E(0,"prop:"+v.b)
if(u!=null)x.p(0,v,u)}for(t=t.db,w=0;w<2;++w){v=D.a0W[w]
u=s.E(0,"enemy:"+v.b)
if(u!=null)t.p(0,v,u)}},
$S:0}
B.aB9.prototype={
$1(d){var x=this.a
if(x.c!=null){x=x.a.e
if(x!=null)x.$0()}},
$S:3}
B.aBa.prototype={
$1(d){var x,w,v,u,t=!0
if(!(d.d>2)){x=d.a
w=x.a
if(!(w<0)){v=this.a
u=v.a.c
if(!(w>u.c)){x=x.b
if(!(x<u.d))if(!(x>u.e))if(!C.b.cY(u.go,new B.aB7(d))){x=v.a.c.fy
if(!(x.length!==0&&!B.Mt(d.a,x))){v.a.toString
t=C.b.cY(D.jT,new B.aB8(d))}}}}}return t},
$S:z+6}
B.aB7.prototype={
$1(d){return d.n(0,this.a.a)},
$S:88}
B.aB8.prototype={
$1(d){return B.Mt(this.a.a,d)},
$S:170}
B.aBb.prototype={
$0(){},
$S:0}
B.aB6.prototype={
$0(){},
$S:0}
B.aB5.prototype={
$0(){},
$S:0}
B.aB2.prototype={
$0(){return this.a.p2.F(0,this.b)},
$S:0}
B.aB3.prototype={
$1(d){var x=null,w=this.b,v=A.W(w?"Treasure Found":"An Empty Promise",x,x,x,D.anI,x,x,x),u=A.W(w?this.a.a.c.fr:this.c,x,x,x,D.anH,x,x,x)
return A.j1(A.b([A.h1(S.Gz,new B.aB1(d),x)],y.p),x,D.Py,u,x,v)},
$S:53}
B.aB1.prototype={
$0(){return A.cf(this.a,!1).cv()},
$S:0}
B.aB4.prototype={
$0(){return this.a.arA(this.b.a)},
$S:0}
B.aBd.prototype={
$1(d){return!0},
$S:z+0}
B.aBe.prototype={
$1(d){return d.c>0},
$S:z+0}
B.aBh.prototype={
$1(d){if(!d)this.a.f.R(0)},
$S:7}
B.aBf.prototype={
$2(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=this.a,a4=a3.a.c,a5=b3.a,a6=b3.b,a7=b3.c,a8=b3.d,a9=a3.B2(new A.w(A.x(1/0,a5,a6),A.x(1/0,a7,a8))),b0=a3.v1(new A.w(A.x(1/0,a5,a6),A.x(1/0,a7,a8))),b1=a3.fr
b1===$&&A.a()
x=a3.ax
w=a3.ch
v=a3.a
u=v.c
t=a3.dx
t===$&&A.a()
s=a3.dy
s===$&&A.a()
v=v.Q
r=a3.at
q=a3.B2(new A.w(A.x(1/0,a5,a6),A.x(1/0,a7,a8)))
p=a3.v1(new A.w(A.x(1/0,a5,a6),A.x(1/0,a7,a8)))
o=a3.fr
n=a3.gpk()
m=a3.fy
l=a3.go
k=a3.x
j=a3.y
i=a3.z
h=a3.Q
g=a3.as
f=a3.id
e=a3.k1
d=a3.k2
a0=a3.k3
a1=a3.ok
a1===$&&A.a()
a3.a.toString
a1=A.b([new B.ZJ(a4,a9,b0,b1,x,w,a2),A.dj(a2,a2,a2,new B.ZI(u,t,s,v,r,q,p,o,o+n,m,this.b,l,k,j,i,h,g,a3.db,f,e,d,a0,a3.k4,a1,!1,a3.ay,a3.ch,a3.cx,a3.cy,a2),C.E)],y.p)
if(a3.a.c.z){a4=a3.dx
a9=a3.B2(new A.w(A.x(1/0,a5,a6),A.x(1/0,a7,a8)))
a8=a3.v1(new A.w(A.x(1/0,a5,a6),A.x(1/0,a7,a8)))
a7=a3.fr
a1.push(A.dE(A.dj(a2,a2,a2,new B.a18(a4,a9,a8,a7,a7+a3.gpk(),a2),C.E),!0,a2))}return A.ik(C.aO,A.bZ(C.a5,a1,C.p,C.ci,a2),C.ax,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new B.aBc(a3,b3),a2,a2,a2,a2)},
$S:613}
B.aBc.prototype={
$1(d){var x=this.b
return this.a.ar_(d.b,new A.w(A.x(1/0,x.a,x.b),A.x(1/0,x.c,x.d)))},
$S:28}
B.aBg.prototype={
$0(){},
$S:0}
B.aAX.prototype={
$1(d){return this.a.c.$2(this.b,!0)},
$S:33}
B.aAY.prototype={
$1(d){return this.a.c.$2(this.b,!1)},
$S:95}
B.aAW.prototype={
$1(d){return this.a.c.$2(this.b,!1)},
$S:127}
B.aBq.prototype={
$2(d,e){var x=null,w=this.a,v=w.c,u=v.d,t=v.e-u,s=e.d/Math.min(v.r,t),r=w.e
return A.qN(A.bZ(C.a5,A.b([A.bD(x,O.hJ(v.b,C.a6,C.fZ,x,x,x),t*s,x,e.b/2-w.d*r,x,-(w.f-u)*s,v.c*r)],y.p),C.p,C.af,x),C.p,x)},
$S:614}
B.aBk.prototype={
$0(){var x=this
return x.a.anK(x.b,x.c,x.d)},
$S:0}
B.aBl.prototype={
$0(){return this.a.anH(this.b,this.c)},
$S:0}
B.aBm.prototype={
$0(){var x=this.a,w=this.c.a3z(x.d,27),v=x.e
v.toString
return K.aJ2(this.b,w,v,x.f,36.96,x.z)},
$S:0}
B.aBn.prototype={
$0(){var x=this.b,w=this.d,v=this.c.a3z(w.a,w.c)
$.J()
w=A.K()
w.r=D.OG.gm()
x.bW(v,4.4,w)
w=A.K()
w.r=D.OS.gm()
w.z=L.om
x.bW(v,10.56,w)
return null},
$S:0}
B.aBo.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o=this,n=o.a,m=o.b,l=o.d,k=o.c.iU(l.a),j=l.y,i=j>0?Math.sin((0.65-j)/0.65*3.141592653589793)*14:0
j=A.bS(k,15.84,66.88)
$.J()
x=A.K()
x.r=C.l.bi(0.38).gm()
m.kf(j,x)
x=l.f
w=n.cx.h(0,x)
if(w==null)w=n.CW
if(w!=null){v=(x===D.hS?156:112)*0.88
n=w.d
j=w.c
u=v*n/j
t=k.a
s=k.b
r=A.bS(new A.c(t+0,s+(-u/2-i)),u,v)
q=A.K()
q.Q=C.o
q.sm6(l.x>0?D.Tq:null)
m.bL(w,new A.i(0,0,j,n),r,q)
j=s
n=t}else{n=k.a
j=k.b
x=A.K()
x.r=D.LP.gm()
m.bW(new A.c(n+0,j+-48.4),28.16,x)}p=A.bS(new A.c(n+0,j+-110),7,63.36)
j=A.K()
j.r=C.a2.gm()
m.bm(p,j)
j=p.a
n=p.b
x=l.c
t=A.K()
t.r=D.iQ.gm()
m.bm(new A.i(j,n,j+(p.c-j)*x/l.d,n+(p.d-n)),t)
return null},
$S:0}
B.aBp.prototype={
$2(d,e){var x=C.d.bw(d.a,e.a)
return x!==0?x:C.d.bw(d.b,e.b)},
$S:615};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_2u,u=a._instance_0u
x(B,"bad","b23",7)
w(B.Rs.prototype,"gaDi","iU",1)
var t
v(t=B.Jq.prototype,"gaou","aov",2)
u(t,"garO","Yi",3)
v(t,"gaku","akv",4)
u(t,"galz","vD",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.P,[B.Rs,B.x7,B.iy,B.mQ,B.br,B.x6])
x(A.iT,[B.oU,B.iz])
x(A.dJ,[B.aJ4,B.aJ5,B.aJ6,B.aBi,B.aBj,B.aB9,B.aBa,B.aB7,B.aB8,B.aB3,B.aBd,B.aBe,B.aBh,B.aBc,B.aAX,B.aAY,B.aAW])
w(B.Ed,A.V)
w(B.Jq,A.Z)
x(A.fa,[B.aB0,B.aAZ,B.aB_,B.aBb,B.aB6,B.aB5,B.aB2,B.aB1,B.aB4,B.aBg,B.aBk,B.aBl,B.aBm,B.aBn,B.aBo])
x(A.h8,[B.aBf,B.aBq,B.aBp])
x(A.Y,[B.Jp,B.ZH,B.ZJ])
x(A.hC,[B.Yy,B.a18,B.ZI])})()
A.eD(b.typeUniverse,JSON.parse('{"Ed":{"V":[],"f":[]},"Jq":{"Z":["Ed"]},"Jp":{"Y":[],"f":[]},"ZH":{"Y":[],"f":[]},"ZJ":{"Y":[],"f":[]},"Yy":{"ac":[]},"a18":{"ac":[]},"ZI":{"ac":[]}}'))
var y=(function rtii(){var x=A.S
return{q:x("a8<~>"),I:x("d0"),O:x("m<h>"),k:x("m<a8<d0>>"),g:x("m<c>"),v:x("m<c8>"),F:x("m<x7>"),u:x("m<+depth,horizontalOrder,paint(G,G,~())>"),p:x("m<f>"),n:x("m<G>"),x:x("k"),o:x("c"),W:x("mQ"),A:x("oU"),m:x("br"),e:x("iz"),N:x("I"),w:x("fO<+obstacle,point(i,c)>"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.I1=new A.m9(8,"dstOut")
D.Ie=new A.aX(E.cC,2,C.G,-1)
D.Lm=new A.h(1,0.13725490196078433,0.37254901960784315,0.25882352941176473,C.c)
D.Lv=new A.h(1,0.2784313725490196,0.47843137254901963,0.4470588235294118,C.c)
D.LD=new A.h(1,0.5058823529411764,0.4588235294117647,0.5647058823529412,C.c)
D.iQ=new A.h(1,0.9098039215686274,0.7176470588235294,1,C.c)
D.LP=new A.h(1,0.7098039215686275,0.40784313725490196,0.8313725490196079,C.c)
D.LT=new A.h(1,0.1803921568627451,0.4627450980392157,0.3176470588235294,C.c)
D.M3=new A.h(1,0.4117647058823529,0.38823529411764707,0.33725490196078434,C.c)
D.M6=new A.h(1,0.00784313725490196,0.0392156862745098,0.07058823529411765,C.c)
D.Mc=new A.h(1,0.5450980392156862,0.30980392156862746,0.1411764705882353,C.c)
D.Mf=new A.h(1,0.15294117647058825,0.30196078431372547,0.28627450980392155,C.c)
D.Mh=new A.h(1,0.29411764705882354,0.18823529411764706,0.11372549019607843,C.c)
D.MN=new A.h(1,0.23921568627450981,0.23137254901960785,0.2901960784313726,C.c)
D.MX=new A.h(1,0.4392156862745098,0.27058823529411763,0.13333333333333333,C.c)
D.NI=new A.h(1,0.7137254901960784,0.41568627450980394,0.12549019607843137,C.c)
D.NK=new A.h(1,0.3686274509803922,0.42745098039215684,0.6274509803921569,C.c)
D.NU=new A.h(1,0.2196078431372549,0.15294117647058825,0.09803921568627451,C.c)
D.O3=new A.h(1,1,0.8,0.3333333333333333,C.c)
D.O7=new A.h(1,0.4235294117647059,0.44313725490196076,0.40784313725490196,C.c)
D.Oy=new A.h(0.2,1,0.9411764705882353,0.6901960784313725,C.c)
D.mf=new A.h(0.8784313725490196,0.03137254901960784,0.13333333333333333,0.18823529411764706,C.c)
D.OG=new A.h(1,1,0.9490196078431372,0.6588235294117647,C.c)
D.OS=new A.h(0.3333333333333333,1,0.8235294117647058,0.3686274509803922,C.c)
D.OX=new A.h(1,0.09019607843137255,0.24313725490196078,0.19215686274509805,C.c)
D.Pb=new A.h(0.3333333333333333,1,0.8431372549019608,0.41568627450980394,C.c)
D.Pf=new A.h(0.2,0.4392156862745098,0.2784313725490196,0.16470588235294117,C.c)
D.Pg=new A.h(1,0.6470588235294118,0.4196078431372549,0.19607843137254902,C.c)
D.Pw=new A.h(1,0.09019607843137255,0.30980392156862746,0.2196078431372549,C.c)
D.Py=new A.h(1,0.06274509803921569,0.1607843137254902,0.21176470588235294,C.c)
D.Qb=new A.h(1,0.0784313725490196,0.12549019607843137,0.1568627450980392,C.c)
D.T9=new A.aj(22,14,22,14)
D.Tq=new A.ig(C.i,P.lF,null,C.e1)
D.US=new A.am(57725,"MaterialIcons",!1)
D.V3=new A.am(58196,"MaterialIcons",!1)
D.V4=new A.am(58197,"MaterialIcons",!1)
D.V5=new A.am(58198,"MaterialIcons",!1)
D.Wy=new A.aP(N.eb,null,null,null,null,null)
D.Lz=new A.h(1,0.8470588235294118,0.7098039215686275,0.4196078431372549,C.c)
D.O1=new A.h(1,0.5450980392156862,0.3568627450980392,0.19607843137254902,C.c)
D.Yd=x([D.Lz,D.O1],y.O)
D.XB=new G.eY(C.bW,C.bz,C.aJ,D.Yd,null,null)
D.Pk=new A.h(1,0.08627450980392157,0.48627450980392156,0.8196078431372549,C.c)
D.LR=new A.h(1,0.5529411764705883,0.8470588235294118,0.8980392156862745,C.c)
D.ZM=x([D.Pk,D.LR],y.O)
D.XF=new G.eY(C.bW,C.bz,C.aJ,D.ZM,null,null)
D.PO=new A.h(1,0.07058823529411765,0.42745098039215684,0.5686274509803921,C.c)
D.PJ=new A.h(1,0.20784313725490197,0.7176470588235294,0.6980392156862745,C.c)
D.Z3=x([D.PO,D.PJ],y.O)
D.XJ=new G.eY(C.bW,C.bz,C.aJ,D.Z3,null,null)
D.YW=x([0,0.42,1],y.n)
D.al=new B.iz(0,"rock")
D.bk=new B.iz(1,"tree")
D.oC=new B.iz(2,"ruin")
D.cN=new B.iz(3,"treasure")
D.Bj=new B.iz(4,"foliage")
D.Bk=new B.iz(5,"dock")
D.Bl=new B.iz(6,"gateway")
D.Zu=x([D.al,D.bk,D.oC,D.cN,D.Bj,D.Bk,D.Bl],A.S("m<iz>"))
D.rC=new A.h(0,0.050980392156862744,0.09411764705882353,0.18823529411764706,C.c)
D.Nq=new A.h(0.7843137254901961,0.3568627450980392,0.2901960784313726,0.5254901960784314,C.c)
D.MJ=new A.h(0.7058823529411765,0.19215686274509805,0.17647058823529413,0.3843137254901961,C.c)
D.a__=x([D.rC,D.rC,D.Nq,D.MJ],y.O)
D.jT=x([],A.S("m<a0<c>>"))
D.jW=x([],y.g)
D.eo=new B.oU(0,"trainingGhost")
D.hS=new B.oU(1,"rockCrab")
D.a0W=x([D.eo,D.hS],A.S("m<oU>"))
D.a5D=new A.ff(C.K,38)
D.a5E=new A.ff(C.K,6)
D.a6F=new A.c(0,-150)
D.a6H=new A.c(0,-34)
D.pf=new A.w(130,82)
D.ol=new A.c_(C.bE,[],A.S("c_<oU,I>"))
D.Qc=new A.h(1,1,0.9411764705882353,0.6039215686274509,C.c)
D.NR=new A.h(1,1,0.615686274509804,0.1411764705882353,C.c)
D.Me=new A.h(0,0.33725490196078434,0.1450980392156863,0.09411764705882353,C.c)
D.a27=x([D.Qc,D.NR,D.Me],y.O)
D.acS=new I.lr(C.M,0.5,C.aJ,null,0,D.a27,null,null)
D.afH=new A.i(42,-178,76,0)
D.age=new A.i(-105,-42,105,0)
D.agf=new A.i(-12,-132,12,0)
D.agg=new A.i(-25,-76,25,0)
D.agh=new A.i(-34,-5,82,17)
D.EZ=new A.i(-41,-143,41,0)
D.agi=new A.i(-42,-32,42,-24)
D.agj=new A.i(-42,-48,42,0)
D.agk=new A.i(-55,-118,55,0)
D.agl=new A.i(-76,-178,76,-144)
D.agm=new A.i(-76,-178,-42,0)
D.anq=new A.t(!0,D.iQ,null,null,null,null,11,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.anH=new A.t(!0,C.i,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.anI=new A.t(!0,E.cC,null,null,null,null,null,C.c0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aoR=new A.t(!0,E.cC,null,null,null,null,9,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aqm=new A.af("Loot Chest",null,null,null,null,null,null,null,null,null)
D.aoD=new A.t(!0,C.i,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aqH=new A.af("WASD / ARROWS MOVE  \u2022  SPACE SWORD  \u2022  CLICK FIRE",null,D.aoD,null,null,null,null,null,null,null)})()};
(a=>{a["cKgGwRylYS0pEXwitXBUBo9G/vQ="]=a.current})($__dart_deferred_initializers__);