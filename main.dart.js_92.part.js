((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,O,K,F,P,Q,E,R,L,S,G,H,T,I,M,B={EF:function EF(d,e,f,g){var _=this
_.v=d
_.C$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},AL:function AL(d,e,f){this.e=d
this.c=e
this.a=f},Au:function Au(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},US:function US(d,e){var _=this
_.d=$
_.dr$=d
_.b6$=e
_.c=_.a=null},aqv:function aqv(d,e){this.a=d
this.b=e},LB:function LB(){},
b_z(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l="italy_first_bounty",k="accept_italy_first_bounty",j="close_dialogue",i="stranger"
A:{if("italy_ship_captain"===d){w=x.s
v=C.b(["Welcome aboard, sailor. I am Captain Lorenzo, and I assign bounties to crews bold enough to earn them.","A bounty is a promise: I name the target, you bring back proof, and the reward is yours.","I have a first contract waiting. Will you accept it?"],w)
u=x.u
t=C.b([new B.cB("Accept first bounty",k,!0,!0),new B.cB("Not yet",j,!0,!0)],u)
s=C.b([C.Nk(e.k3)+" is defeated. You have done Italy a service, captain.","As promised, your bounty is 500 gold."],w)
r=C.b([new B.cB("Claim bounty","claim_italy_first_bounty",!0,!0)],u)
q=C.b([C.Nk(e.k3)+" will trouble us no more. Spend your reward wisely, captain.","Another target has drawn a price. Will you take the next contract?"],w)
u=C.b([new B.cB("Accept another bounty",k,!0,!0),new B.cB("Not now",j,!0,!0)],u)
p=e.k3
o=x.m
w=new B.cZ("Captain Lorenzo",C.b([new B.cc(A.ak,v,m,m,l,t),new B.cc(A.ak,s,l,D.hZ,m,r),new B.cc(A.ak,q,l,D.kj,m,u),new B.cc(A.ak,C.b(["Your target is "+C.Nk(p)+".",C.aJZ(p)],w),l,D.es,m,A.ee),new B.cc(C.b([new B.qZ(A.Rr,1)],o),C.b(["Ah, espresso on the sea. You have excellent instincts, sailor.","Keep it close. A clear mind sees reefs long before the waves do."],w),m,m,m,A.ee),new B.cc(C.b([new B.qZ(A.Rq,100)],o),C.b(["Your purse has a reassuring weight to it.","Gold buys supplies, but a captain earns the crew's trust."],w),m,m,m,A.ee)],x.J))
break A}if("shipwright"===d){w=A.Ru
break A}if("kraken_cave"===d){w=A.RD
break A}if("electro_kraken"===d){w=A.RK
break A}if("necromancer_graveyard"===d){w=A.RP
break A}if("siren_island_trap"===d){w=A.RI
break A}if("black_market_daily"===d){w=B.b_y(e)
break A}if("spanish_cafe"===d){w=A.RA
break A}if("spanish_blacksmith"===d){w=A.RL
break A}if("intro_beach_stir"===d){w=A.Rv
break A}if("intro_beach_stranger"===d){w=A.RF
break A}if("intro_beach_player"===d){w=A.Rw
break A}if("intro_british_officer"===d){w=A.RO
break A}if("intro_british_naval_ship"===d){w=A.RH
break A}if("intro_concerned_stranger"===d){w=A.RB
break A}if("intro_forgotten_name"===d){w=A.Rx
break A}if("intro_choose_name"===d){w=A.Rt
break A}if("intro_name_greeting"===d){n=e.ax
w=new B.cZ("Concerned Stranger",C.b([new B.cc(A.ak,C.b(["It is good to meet you, "+(n.length===0?i:n)+". I am glad you are alive."],x.s),m,m,m,A.a23)],x.J))
break A}if("intro_stranger_introduction"===d){w=A.RM
break A}if("intro_player_thanks"===d){w=A.Rs
break A}if("spanish_home_bedroom"===d){w=A.RJ
break A}if("spanish_home_bedroom_enter_stranger"===d){n=e.ax
w=new B.cZ("Mateo",C.b([new B.cc(A.ak,C.b([(n.length===0?i:n)+"! You are finally awake! I am glad to see you on your feet.","Welcome to my home. It isn't much, but it's a safe place for you to recover."],x.s),m,m,m,A.ZH)],x.J))
break A}if("spanish_home_bedroom_mateo_seated"===d){w=A.RG
break A}if("spanish_home_bedroom_player_memory"===d){w=A.Ry
break A}if("spanish_home_bedroom_prince_revelation"===d){w=A.Rz
break A}if("british_prince_smoke_memory"===d){w=A.RE
break A}if("outro_british_island_approach"===d){w=A.RN
break A}if("outro_british_fleet_intercepts"===d){w=A.RC
break A}w=m
break A}return w},
b_y(d){var w,v,u,t,s,r,q=null,p="Black Market Dealer",o=d.gwv()
if(!o.d){w=d.ga_y().a
return new B.cZ(p,C.b([new B.cc(A.ak,C.b(["You have already had today's special deal. I do not repeat myself.","Come back in "+D.f.bU(w,36e8)+"h "+D.f.bU(w,6e7)%60+"m and I may have another offer."],x.s),q,q,q,A.ee)],x.J))}w=o.a
v=d.k1.u4(w)
u=o.b
t=v>=u
w=U.GP(w)
s=C.Qx(o.c)
r=t?"You have what I asked for. Do we have a deal?":"You only have "+v+". Return when you have the full amount."
r=C.b(["Keep your voice down. Once every twenty-four hours, I offer one captain a special trade.","Bring me "+u+" "+w+". In exchange, you get one "+s+".",r],x.s)
s=C.b([],x.u)
if(t)s.push(A.R9)
s.push(A.jh)
return new B.cZ(p,C.b([new B.cc(A.ak,r,q,q,q,s)],x.J))},
Ow:function Ow(d,e){this.a=d
this.b=e},
qZ:function qZ(d,e){this.a=d
this.b=e},
cc:function cc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a7W:function a7W(d){this.a=d},
a7X:function a7X(d){this.a=d},
a7Y:function a7Y(d){this.a=d},
a7Z:function a7Z(d){this.a=d},
cB:function cB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cZ:function cZ(d,e){this.a=d
this.b=e},
a7V:function a7V(d,e){this.a=d
this.b=e},
BL:function BL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
WN:function WN(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
atq:function atq(d){this.a=d},
atp:function atp(d,e){this.a=d
this.b=e},
atm:function atm(d,e){this.a=d
this.b=e},
atr:function atr(d,e,f){this.a=d
this.b=e
this.c=f},
atn:function atn(d){this.a=d},
ato:function ato(d,e){this.a=d
this.b=e},
Cy:function Cy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i},
XO:function XO(){this.d=!1
this.c=this.a=null},
avE:function avE(d,e){this.a=d
this.b=e},
avF:function avF(d,e){this.a=d
this.b=e},
avD:function avD(d,e,f){this.a=d
this.b=e
this.c=f},
avG:function avG(d){this.a=d},
avC:function avC(d){this.a=d},
avB:function avB(d,e){this.a=d
this.b=e},
avA:function avA(d,e,f){this.a=d
this.b=e
this.c=f},
avy:function avy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avx:function avx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avu:function avu(){},
avv:function avv(d){this.a=d},
avt:function avt(d){this.a=d},
avw:function avw(){},
avz:function avz(d){this.a=d},
YR:function YR(d,e){this.c=d
this.a=e},
I8:function I8(d){this.a=d},
Xa:function Xa(d,e){var _=this
_.d=$
_.dr$=d
_.b6$=e
_.c=_.a=null},
atR:function atR(d){this.a=d},
X9:function X9(d,e){this.b=d
this.a=e},
Yu:function Yu(d,e){this.c=d
this.a=e},
Yv:function Yv(d,e){this.c=d
this.a=e},
pS:function pS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
LP:function LP(){},
aVu(d){var w=d.a,v=d.b
return new C.i(w*0.195,v*0.18,w*0.887,v*0.655)},
b9Y(d){return d.length<=10?d:D.e.al(d,0,9)+"."},
baj(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b4.gLa()>b2){w=b4.b
v=new C.w(w*b2,w)}else{w=b4.a
v=new C.w(w,w/b2)}u=C.bS(new C.c(b4.a/2,b4.b/2),v.b,v.a)
w=u.a
t=u.b
s=u.c
r=u.d
q=new C.i(w+12,Math.max(t+12,72),s-12,r-12)
s-=w
p=D.d.a9(s/1000,0.8,1.25)
o=C.b([],x.g)
for(n=b3.length,m=x.b,l=x.r,r-=t,k=0;k<n;++k){j=b3[k]
i=j.b
h=w+s*i.a
i=t+r*i.b
g=new C.c(h,i)
f=j.a
e=D.d.a9((f.length<=10?f:D.e.al(f,0,9)+".").length*8.5+75,150,220)*p
d=e/4
a0=j.r
if(a0!=null){o.push(new B.tO(j,g,B.aU6(C.bS(new C.c(w+s*a0.a,t+r*a0.b),d,e),q),p))
continue}if(j.x)a1=C.b([D.k7],m)
else{a2=C.b([D.k7],m)
D.b.P(a2,new C.az(A.Z_,new B.aJi(j),l))
a1=a2}for(a3=null,a4=1/0,a5=0;a5<a1.length;++a5){a2={}
a6=a1[a5]
a7=B.b6o(g,e,d,a6,24)
a2.a=a7
a2.a=B.aU6(a7,q)
a8=D.b.pR(o,0,new B.aJj(a2))
a6=a2.a
a9=a6.a
b0=a6.b
a9=a9+(a6.c-a9)/2-h
b0=b0+(a6.d-b0)/2-i
b1=a8*1000+a5*10+Math.sqrt(a9*a9+b0*b0)
if(b1<a4){a3=a2.a
a4=b1}}a3.toString
o.push(new B.tO(j,g,a3,p))}return o},
b6o(d,e,f,g,h){var w,v
switch(g.a){case 0:w=d.a-e/2
v=d.b-f-h
v=new C.i(w,v,w+e,v+f)
w=v
break
case 1:w=d.a-e/2
v=d.b+h
v=new C.i(w,v,w+e,v+f)
w=v
break
case 2:w=d.a-e-h
v=d.b-f/2
v=new C.i(w,v,w+e,v+f)
w=v
break
case 3:w=d.a+h
v=d.b-f/2
v=new C.i(w,v,w+e,v+f)
w=v
break
default:w=null}return w},
aU6(d,e){var w,v=d.a,u=e.a
if(v<u)v=u-v
else{v=d.c
u=e.c
v=v>u?u-v:0}u=d.b
w=e.b
if(u<w)u=w-u
else{u=d.d
w=e.d
u=u>w?w-u:0}return d.cJ(new C.c(v,u))},
b9u(d){var w,v,u,t,s
for(w=d.length,v=0;v<w;v=u)for(u=v+1,t=u;t<w;++t){s=d[v].c.dB(d[t].c)
if(s.c-s.a>8&&s.d-s.b>8)return!0}return!1},
tO:function tO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aJi:function aJi(d){this.a=d},
aJj:function aJj(d){this.a=d},
Ts:function Ts(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ank:function ank(d){this.a=d},
anj:function anj(d,e){this.a=d
this.b=e},
VV:function VV(d,e,f){this.c=d
this.d=e
this.a=f},
asm:function asm(d,e){this.a=d
this.b=e},
z9:function z9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Yw:function Yw(){var _=this
_.e=_.d=!1
_.c=_.a=null},
ayE:function ayE(d){this.a=d},
ayw:function ayw(d){this.a=d},
ayF:function ayF(d){this.a=d},
ayv:function ayv(d){this.a=d},
ayC:function ayC(d){this.a=d},
ayy:function ayy(d){this.a=d},
ayB:function ayB(d){this.a=d},
ayz:function ayz(d){this.a=d},
ayD:function ayD(d){this.a=d},
ayx:function ayx(d){this.a=d},
ayA:function ayA(d){this.a=d},
XY:function XY(d,e){this.b=d
this.a=e},
b8z(d,e,f,g,h){return new B.Cy(d,f,h,g,e,null)}},A,U,N
J=c[1]
C=c[0]
D=c[2]
O=c[71]
K=c[30]
F=c[49]
P=c[65]
Q=c[37]
E=c[31]
R=c[66]
L=c[58]
S=c[38]
G=c[12]
H=c[34]
T=c[43]
I=c[46]
M=c[78]
B=a.updateHolder(c[9],B)
A=c[77]
U=c[16]
N=c[63]
B.EF.prototype={
sLa(d){if(this.v===d)return
this.v=d
this.a2()},
bd(d){var w
if(isFinite(d))return d*this.v
w=this.C$
w=w==null?null:w.ad(D.aA,d,w.gbo())
return w==null?0:w},
b9(d){var w
if(isFinite(d))return d*this.v
w=this.C$
w=w==null?null:w.ad(D.am,d,w.gbb())
return w==null?0:w},
bc(d){var w
if(isFinite(d))return d/this.v
w=this.C$
w=w==null?null:w.ad(D.aG,d,w.gbr())
return w==null?0:w},
b8(d){var w
if(isFinite(d))return d/this.v
w=this.C$
w=w==null?null:w.ad(D.b5,d,w.gbH())
return w==null?0:w},
ac8(d){var w,v,u,t,s=d.a,r=d.b
if(s>=r&&d.c>=d.d)return new C.w(C.x(0,s,r),C.x(0,d.c,d.d))
w=this.v
if(isFinite(r)){v=r/w
u=r}else{v=d.d
u=v*w}if(u>r)v=r/w
else r=u
t=d.d
if(v>t){r=t*w
v=t}if(r<s)v=s/w
else s=r
t=d.c
if(v<t){s=t*w
v=t}return d.aV(new C.w(s,v))},
cB(d){return this.ac8(d)},
cP(d,e){return this.Rf(C.kC(this.ad(D.N,d,this.gbQ())),e)},
bB(){var w,v=this
v.fy=v.ad(D.N,x.k.a(C.A.prototype.ga_.call(v)),v.gbQ())
w=v.C$
if(w!=null)w.ik(C.kC(v.gt()))}}
B.AL.prototype={
aO(d){var w=new B.EF(this.e,null,new C.aI(),C.ai())
w.aN()
w.sb1(null)
return w},
aU(d,e){e.sLa(this.e)}}
B.Au.prototype={
aa(){return new B.US(null,null)}}
B.US.prototype={
ao(){var w,v=this
v.aD()
w=C.bL(null,C.d_(0,v.a.f),null,null,v)
v.d!==$&&C.aK()
v.d=w
if(v.a.d!=null)w.OF(!0)},
j(){var w=this.d
w===$&&C.a()
w.j()
this.aal()},
D(d){var w=null,v=this.a,u=v.d
if(u==null)v=E.hJ(v.c,D.a6,w,w,w,w)
else{v=this.d
v===$&&C.a()
v=C.eo(v,new B.aqv(this,u),w)}return C.fy(C.cA(new C.j9(!0,v,w),w,w),D.l,!0)}}
B.LB.prototype={
j(){var w=this,v=w.b6$
if(v!=null)v.K(w.geN())
w.b6$=null
w.au()},
bv(){this.ci()
this.c9()
this.eO()}}
B.Ow.prototype={
G(){return"DialogueConditionType."+this.b}}
B.qZ.prototype={
aBr(d){var w
switch(this.a.a){case 0:w=d.a>=this.b
break
case 1:w=d.b>=this.b
break
default:w=null}return w}}
B.cc.prototype={
aBs(d,e){var w=this,v=w.c==null||D.b.cY(e,new B.a7W(w)),u=w.e!=null&&D.b.cY(e,new B.a7X(w)),t=w.d==null||D.b.cY(e,new B.a7Y(w))
return v&&t&&!u&&D.b.dq(w.a,new B.a7Z(d))}}
B.cB.prototype={}
B.cZ.prototype={
aFb(d,e){return D.b.tn(this.b,new B.a7V(d,e))}}
B.BL.prototype={
aa(){return new B.WN()},
aBP(d){return this.e.$1(d)}}
B.WN.prototype={
aK(d){var w=this
w.aZ(d)
if(d.c!==w.a.c){w.d=0
w.e=!0}},
D(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=B.b_z(n.c,n.d)
if(m==null||!p.e)return D.aS
n=p.a.d
w=m.aFb(n.k1,C.rJ(n.k2,x.h))
v=w.b
u=D.f.dd(D.f.a9(p.d,0,v.length-1))
t=u===v.length-1
n=m.a
s=C.O(d).ok.w
n=C.W(n,o,o,o,s==null?o:s.awr(P.dt,D.V),o,o,o)
s=v[u]
r=C.O(d).ok.y
s=C.W(s,o,o,o,r==null?o:r.bI(D.i),o,o,o)
if(t&&w.f.length!==0){r=w.f
q=C.a3(r).i("aa<1,oN>")
r=C.a4(new C.aa(r,new B.atq(p),q),q.i("ay.E"))
r=C.H8(D.cR,r,D.eD,0,8)}else r=C.h1(C.W(t?"Close":"Next",o,o,o,o,o,o,o),new B.atr(p,t,u),o)
return C.iE(!0,new C.dx(D.bA,o,o,new C.dC(A.IG,C.e1(new C.aA(A.T8,C.bs(C.b([n,D.c6,s,new C.dx(D.iy,o,o,r,o)],x.p),D.b2,D.m,D.P),o),o,A.NM,D.mP),o),o),!0,D.a3,!0,!1)}}
B.Cy.prototype={
aa(){return new B.XO()},
aBT(d){return this.d.$1(d)}}
B.XO.prototype={
aK(d){this.aZ(d)
if(d.c!==this.a.c)this.d=!1},
D(d){var w,v,u,t=this,s=null,r=C.b([C.f1(0,t.acs())],x.p),q=t.a.w
if(q!=null)r.push(C.bD(s,G.aPw(Q.hx,A.apJ,q),s,s,16,s,16,s))
r.push(C.bD(s,C.dE(C.cA(new B.YR(t.a.c.a,s),s,s),!0,s),s,s,0,0,16,s))
q=t.a.c
w=q.f
if(q.ay)r.push(C.f1(0,new B.Ts(w,q.ch,new B.avE(t,d),s)))
else D.b.P(r,new C.aa(w,new B.avF(t,d),C.a3(w).i("aa<1,f>")))
q=t.a
w=q.c.at
if(w!=null){v=q.f
u=q.r
q=q.w
r.push(new B.BL(w,v,u,q,w==="kraken_cave"||w==="electro_kraken"?new B.avG(t):s,s))}return C.bZ(D.a5,r,D.p,D.af,s)},
Uz(d,e){var w
if(e.e===D.Av){w=e.f
w.toString
this.arh(d,w)
return}this.a.aBT(e)},
arh(d,e){C.iZ(!0,new B.avB(this,e),d,x.H)},
acs(){var w,v=this,u=null,t=v.a.c
if(t.r)return C.fy(C.cA(C.bs(C.b([A.WA,L.fw,C.W(t.a,u,u,u,O.Gv,u,u,u),D.c6,A.aqN],x.p),D.n,D.m,D.P),u,u),A.NI,!0)
w=t.b
w.toString
t=C.b([new B.Au(w,t.c,t.d,t.e,u)],x.p)
if(v.a.c.at==="electro_kraken"&&!v.d)t.push(A.atj)
if(v.d)t.push(new B.Yu(v.a.c.at==="electro_kraken",u))
return C.bZ(D.a5,t,D.p,D.cj,u)}}
B.YR.prototype={
D(d){var w=null,v=K.eS(T.cD,1.5),u=C.dz(14)
return C.ha(new C.aA(A.T6,C.W(this.c.toUpperCase(),w,w,w,M.Gx,w,w,w),w),new C.bX(A.O0,w,v,u,A.a0n,w,D.ab),D.bb)}}
B.I8.prototype={
aa(){return new B.Xa(null,null)}}
B.Xa.prototype={
ao(){var w,v=this
v.aD()
w=C.bL(null,D.tl,null,null,v)
w.OE()
v.d!==$&&C.aK()
v.d=w},
j(){var w=this.d
w===$&&C.a()
w.j()
this.aax()},
D(d){var w=null,v=this.d
v===$&&C.a()
return C.dE(new C.j9(!0,C.cA(new B.AL(1.5384615384615385,C.eo(v,new B.atR(this),w),w),w,w),w),!0,w)}}
B.X9.prototype={
aq(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=Math.min(a7.a/1000,a7.b/650),a5=a6.a
J.a7(a5.save())
a6.aB(a4)
w=$.aNL()
v=$.J()
u=C.K()
u.r=A.PU.gm()
u.b=D.H
u.c=28
u.d=D.aq
u.e=D.dc
u.z=I.AL
a6.dG(w,u)
u=C.K()
u.r=F.me.gm()
u.b=D.H
u.c=8
u.d=D.aq
u.e=D.dc
a6.dG(w,u)
for(w=$.aXw(),t=0;t<4;++t){s=w[t]
u=new C.b9(D.r,D.t,D.D,D.F,D.o)
u.r=A.O1.gm()
u.b=D.H
u.c=4
u.d=D.aq
u.e=D.dc
u.z=I.AM
r=u.aI()
u=s.e
a5.drawPath((u==null?s.e=new C.fw(s.ge2().a.snapshot()):u).a,r)
r.delete()
u=new C.b9(D.r,D.t,D.D,D.F,D.o)
u.r=A.Oe.gm()
u.b=D.H
u.c=1.5
u.d=D.aq
u.e=D.dc
r=u.aI()
u=s.e
a5.drawPath((u==null?s.e=new C.fw(s.ge2().a.snapshot()):u).a,r)
r.delete()}w=$.aNL()
u=C.K()
u.r=D.i.gm()
u.b=D.H
u.c=3.5
u.d=D.aq
u.e=D.dc
a6.dG(w,u)
for(w=this.b,u=w*3.141592653589793*2,q=x.v,p=0;p<4;++p){o=D.d.aL(w+p*0.25,1)
n=24+o*190
m=C.b([],q)
l=new C.ba(v.r,D.C,a3,a3,m)
for(v=p*1.9,k=0;k<=48;++k){j=k/48*3.141592653589793*2
i=n+(Math.sin(j*7+v)*5+Math.sin(j*13-u)*2.5)
h=472+Math.cos(j)*i
i=326+Math.sin(j)*i*0.27
if(k===0){i=new C.cD(h,i)
m.push(i)
h=l.f
if(h!=null)i.e5(h)
i=l.e
if(i!=null)i.a.delete()
l.e=null}else{i=new C.bj(h,i)
m.push(i)
h=l.f
if(h!=null)i.e5(h)
i=l.e
if(i!=null)i.a.delete()
l.e=null}}g=D.f.a9(D.d.aT((1-o)*210),0,255)
v=$.J()
m=new C.b9(D.r,D.t,D.D,D.F,D.o)
m.r=C.ax(g,255,214,64).gm()
m.b=D.H
m.c=2.2
m.d=D.aq
m.z=A.a5C
r=m.aI()
m=l.e
a5.drawPath((m==null?l.e=new C.fw(l.ge2().a.snapshot()):m).a,r)
r.delete()}for(w*=28,f=0;f<12;++f){j=f*3.141592653589793/6+Math.sin(f*2.4)*0.12
e=65+D.f.aL(f*37,95)+w
m=C.b([],q)
d=new C.ba(v.r,D.C,a3,a3,m)
m.push(new C.cD(472,326))
for(v=f*1.3,i=f*0.8,k=1;k<=9;++k){a0=e*k/9
a1=Math.sin(k*3.7+v+u)*11+Math.sin(k*7.1-i)*4
h=new C.bj(472+Math.cos(j)*a0+Math.sin(j)*a1,326+(Math.sin(j)*a0-Math.cos(j)*a1)*0.27)
m.push(h)
a2=d.f
if(a2!=null)h.e5(a2)
h=d.e
if(h!=null)h.a.delete()
d.e=null}v=$.J()
m=new C.b9(D.r,D.t,D.D,D.F,D.o)
m.r=A.N9.gm()
m.b=D.H
m.c=12
m.d=D.aq
m.z=I.AJ
r=m.aI()
m=d.e
a5.drawPath((m==null?d.e=new C.fw(d.ge2().a.snapshot()):m).a,r)
r.delete()
m=new C.b9(D.r,D.t,D.D,D.F,D.o)
m.r=A.M3.gm()
m.b=D.H
m.c=5
m.d=D.aq
m.z=M.ol
r=m.aI()
m=d.e
a5.drawPath((m==null?d.e=new C.fw(d.ge2().a.snapshot()):m).a,r)
r.delete()}w=C.K()
w.r=A.MW.gm()
w.z=A.a5B
a6.bW(A.a8H,18,w)
a5.restore()},
cF(d){return d.b!==this.b}}
B.Yu.prototype={
D(d){var w=null,v=this.c,u=v?"assets/sprites/kraken/electro_kraken_head_transparent.png":"assets/sprites/kraken/kraken_head_domed_transparent_v3.png"
return C.dE(new C.j9(!0,C.cA(new B.AL(1.5384615384615385,C.bZ(A.HL,C.b([D.pi,A.atO,new B.Yv(v,w),A.atM,A.atP,new B.pS(u,0.36,1,w),A.atN],x.p),D.p,D.af,w),w),w,w),w),!0,w)}}
B.Yv.prototype={
D(d){var w,v,u=null,t=this.c?"assets/sprites/kraken/electro_kraken_tentacle_tip_transparent.png":"assets/sprites/kraken/kraken_phase_1_tentacle_tip_transparent.png",s=C.b([],x.p)
for(w=0;w<8;++w){v=C.ap9(new C.ca(58,190,E.hJ(t,D.a6,D.eI,u,u,u),u),A.a6G)
s.push(new C.lI(C.aSD(w*3.141592653589793/4),D.M,!0,u,v,u))}return C.bZ(D.M,s,D.p,D.af,u)}}
B.pS.prototype={
D(d){var w=null
return G.aKE(C.oM(E.hJ(this.c,D.a6,w,w,w,w),this.e),w,this.d)}}
B.LP.prototype={
j(){var w=this,v=w.b6$
if(v!=null)v.K(w.geN())
w.b6$=null
w.au()},
bv(){this.ci()
this.c9()
this.eO()}}
B.tO.prototype={}
B.Ts.prototype={
D(d){return C.je(new B.ank(this))}}
B.VV.prototype={
D(d){var w,v,u,t,s=null,r=K.eS(H.dq,1),q=C.dz(8),p=x.p,o=C.b([],p)
for(w=this.c,v=w.length,u=0;u<v;++u){t=C.b([],p)
if(u>0)t.push(F.pg)
t.push(new C.ca(150,37.5,new B.z9(w[u].a,new B.asm(this,u),1,s),s))
D.b.P(o,t)}return C.ha(C.lx(C.bW(o,D.n,s,D.m,D.z,0),A.Th,D.aT),new C.bX(A.Lq,s,r,q,s,s,D.ab),D.bb)}}
B.z9.prototype={
aa(){return new B.Yw()}}
B.Yw.prototype={
D(d){var w,v=this,u=null,t=v.a,s=t.c
t=t.d
if(v.e)w="assets/ui/map_button_pressed.png"
else w=v.d?"assets/ui/map_button_hover.png":"assets/ui/map_button_normal.png"
return C.bq(!0,u,C.iv(C.ik(D.aO,C.bZ(D.a5,C.b([E.hJ(w,D.bD,D.fZ,u,u,u),C.je(new B.ayA(v))],x.p),D.p,D.cj,u),D.ax,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,new B.ayB(v),new B.ayC(v),new B.ayD(v),u,u,u),D.ij,u,new B.ayE(v),new B.ayF(v),u),!1,u,u,u,!1,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,D.A,u)}}
B.XY.prototype={
aq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,C.y)(w),++t){s=w[t]
$.J()
r=new C.b9(D.r,D.t,D.D,D.F,D.o)
r.r=H.dq.bi(0.9).gm()
q=s.d
r.c=2*q
p=new C.b9(D.r,D.t,D.D,D.F,D.o)
p.r=A.Mh.bi(0.8).gm()
o=new C.b9(D.r,D.t,D.D,D.F,D.o)
o.r=H.dq.gm()
n=s.c
m=n.a
l=s.b
k=r.aI()
j=l.a
l=l.b
u.drawLine.apply(u,[j,l,m+(n.c-m)/2,n.d,k])
k.delete()
k=p.aI()
u.drawCircle(j,l,7*q,k)
k.delete()
k=o.aI()
u.drawCircle(j,l,3.5*q,k)
k.delete()}},
cF(d){return d.b!==this.b}}
var z=a.updateTypes(["G(G)","B(qZ)","B(cc)","oN(cB)","G(G,tO)"])
B.aqv.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&C.a()
p=p.x
p===$&&C.a()
q=q.a
w=q.e
if(w==null)return C.bZ(D.M,C.b([E.hJ(q.c,D.a6,r,r,r,r),C.oM(E.hJ(this.b,D.a6,r,r,r,r),p)],x.p),D.p,D.af,r)
if(p<0.5){v=p*2
u=1-v
t=v
s=0}else{v=(p-0.5)*2
t=1-v
s=v
u=0}return C.bZ(D.M,C.b([C.oM(E.hJ(q.c,D.a6,r,r,r,r),u),C.oM(E.hJ(this.b,D.a6,r,r,r,r),t),C.oM(E.hJ(w,D.a6,r,r,r,r),s)],x.p),D.p,D.af,r)},
$S:118}
B.a7W.prototype={
$1(d){return d.a===this.a.c},
$S:114}
B.a7X.prototype={
$1(d){return d.a===this.a.e},
$S:114}
B.a7Y.prototype={
$1(d){var w=this.a
return d.a===w.c&&d.d===w.d},
$S:114}
B.a7Z.prototype={
$1(d){return d.aBr(this.a)},
$S:z+1}
B.a7V.prototype={
$1(d){return d.aBs(this.a,this.b)},
$S:z+2}
B.atq.prototype={
$1(d){var w=null
return C.ahv(C.W(d.a,w,w,w,w,w,w,w),new B.atp(this.a,d))},
$S:z+3}
B.atp.prototype={
$0(){var w=this.a,v=this.b
w.I(new B.atm(w,v))
w.a.aBP(v.b)
if(v.c&&v.d){w=w.a.f
if(w!=null)w.$0()}},
$S:0}
B.atm.prototype={
$0(){var w=this.a
w.d=0
w.e=!this.b.c},
$S:0}
B.atr.prototype={
$0(){var w,v=this.a
if(this.b){v.I(new B.atn(v))
v=v.a.f
if(v!=null)v.$0()}else{v.I(new B.ato(v,this.c))
w=v.a.r
if(w!=null)w.$1(v.d)}},
$S:0}
B.atn.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ato.prototype={
$0(){this.a.d=this.b+1},
$S:0}
B.avE.prototype={
$1(d){return this.a.Uz(this.b,d)},
$S:239}
B.avF.prototype={
$1(d){var w=null,v=this.b,u=x.w,t=C.bA(v,w,u).w,s=d.b
u=C.bA(v,w,u).w
return C.bD(w,new G.C2(!1,new B.avD(this.a,v,d),w,w,w,w,w,w,!1,w,!0,w,C.W(d.a,w,w,w,w,w,w,w),w),w,w,t.a.a*s.a,w,u.a.b*s.b,w)},
$S:603}
B.avD.prototype={
$0(){return this.a.Uz(this.b,this.c)},
$S:0}
B.avG.prototype={
$1(d){var w=this.a
if(d>=(w.a.c.at==="electro_kraken"?1:2)&&!w.d)w.I(new B.avC(w))},
$S:16}
B.avC.prototype={
$0(){return this.a.d=!0},
$S:0}
B.avB.prototype={
$1(d){return new C.tR(new B.avA(this.a,this.b,d),null)},
$S:604}
B.avA.prototype={
$2(d,e){var w=null,v=C.W("The Three Fates",w,w,w,w,w,w,w),u=this.a,t=x.p,s=C.b([C.W("Choose the thread you wish the fortune teller to read. Each reading costs 25 gold and may be purchased repeatedly.",w,w,w,w,w,w,w),D.c6,C.W("Your gold: "+u.a.f.k1.a,w,w,w,D.bw,w,w,w),D.cP],t)
D.b.P(s,new C.aa(D.a2k,new B.avy(u,d,this.c,e),x.c))
s=C.lx(C.bs(s,D.b2,D.m,D.P),w,D.ah)
return C.j1(C.b([C.h1(D.fB,new B.avz(d),w)],t),w,w,new C.dC(A.IA,s,w),w,v)},
$S:605}
B.avy.prototype={
$1(d){var w=this,v=null,u=x.p,t=C.b([C.bW(C.b([C.oi(C.W(d.a,v,v,v,C.O(w.b).ok.w,v,v,v),1),C.W("25 gold",v,v,v,v,v,v,v)],u),D.n,v,D.m,D.z,0),D.dP,C.W(d.c,v,v,v,v,v,v,v)],u)
D.b.P(t,C.b([D.c6,A.ar_],u))
t.push(D.c6)
u=w.a
u=u.a.f.k1.a>=25?new B.avx(u,d,w.c,w.d):v
t.push(new C.dx(D.iy,v,v,C.ii(C.W("Purchase \u2014 25 gold",v,v,v,v,v,v,v),u),v))
return C.e1(new C.aA(S.hp,C.bs(t,D.aY,D.m,D.z),v),v,v,v)},
$S:606}
B.avx.prototype={
$0(){var w=0,v=C.q(x.H),u,t=this,s,r
var $async$$0=C.r(function(d,e){if(d===1)return C.n(e,v)
for(;;)switch(w){case 0:w=3
return C.j(t.a.a.f.mV(25),$async$$0)
case 3:if(!e||t.c.e==null){w=1
break}s=t.d
s.$1(new B.avu())
r=t.c
w=4
return C.j(C.iZ(!0,new B.avv(t.b),r,x.H),$async$$0)
case 4:if(r.e!=null)s.$1(new B.avw())
case 1:return C.o(u,v)}})
return C.p($async$$0,v)},
$S:11}
B.avu.prototype={
$0(){},
$S:0}
B.avv.prototype={
$1(d){var w=null,v=this.a,u=C.W(v.a,w,w,w,w,w,w,w),t=x.p
v=C.b([C.W(v.d,w,w,w,w,w,w,w)],t)
D.b.P(v,C.b([L.fw,A.QQ],t))
v=C.bs(v,D.b2,D.m,D.P)
return C.j1(C.b([C.h1(A.aqq,new B.avt(d),w)],t),w,w,v,w,u)},
$S:53}
B.avt.prototype={
$0(){return C.cf(this.a,!1).cv()},
$S:0}
B.avw.prototype={
$0(){},
$S:0}
B.avz.prototype={
$0(){return C.cf(this.a,!1).cv()},
$S:0}
B.atR.prototype={
$2(d,e){var w=null,v=this.a.d
v===$&&C.a()
v=v.x
v===$&&C.a()
return C.dj(w,w,w,new B.X9(v,w),D.E)},
$S:607}
B.aJi.prototype={
$1(d){return d!==D.k7},
$S:608}
B.aJj.prototype={
$2(d,e){var w=this.a.a.dB(e.c),v=w.c-w.a
return d+(v>0&&w.d-w.b>0?v*(w.d-w.b):0)},
$S:z+4}
B.ank.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.c,o=B.baj(q.d,p,new C.w(C.x(1/0,e.a,e.b),C.x(1/0,e.c,e.d))),n=B.b9u(o),m=x.p,l=C.b([],m)
if(n)l.push(C.bD(12,new B.VV(p,q.e,A.asJ),52,r,12,12,r,r))
else{p=C.b([C.f1(0,C.dE(C.dj(r,r,r,new B.XY(o,r),D.E),!0,r))],m)
for(m=o.length,w=0;w<o.length;o.length===m||(0,C.y)(o),++w){v=o[w]
u=v.c
t=u.a
s=u.b
p.push(new C.f0(t,s,r,r,u.c-t,u.d-s,new B.z9(v.a.a,new B.anj(q,v),v.d,r),r))}D.b.P(l,p)}return C.bZ(D.a5,l,D.p,D.af,r)},
$S:44}
B.anj.prototype={
$0(){return this.a.e.$1(this.b.a)},
$S:0}
B.asm.prototype={
$0(){var w=this.a
return w.d.$1(w.c[this.b])},
$S:0}
B.ayE.prototype={
$1(d){var w=this.a
return w.I(new B.ayw(w))},
$S:51}
B.ayw.prototype={
$0(){return this.a.d=!0},
$S:0}
B.ayF.prototype={
$1(d){var w=this.a
return w.I(new B.ayv(w))},
$S:47}
B.ayv.prototype={
$0(){var w=this.a
w.e=w.d=!1},
$S:0}
B.ayC.prototype={
$1(d){var w=this.a
return w.I(new B.ayy(w))},
$S:28}
B.ayy.prototype={
$0(){return this.a.e=!0},
$S:0}
B.ayB.prototype={
$0(){var w=this.a
return w.I(new B.ayz(w))},
$S:0}
B.ayz.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ayD.prototype={
$1(d){var w=this.a
return w.I(new B.ayx(w))},
$S:73}
B.ayx.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ayA.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=null,n=a0.a,m=a0.b,l=a0.c,k=a0.d,j=B.aVu(new C.w(C.x(1/0,n,m),C.x(1/0,l,k))),i=this.a,h=B.b9Y(i.a.c).toUpperCase(),g=i.a.e,f=A.Gy.LZ(14*g,0.7*g),e=C.iK(o,o,1,o,C.dG(o,o,o,o,o,o,o,o,o,f,h),D.av,D.a0,o,D.aj,D.ag)
e.jA()
g=j.c
w=j.a
v=g-w
u=D.d.a9(v/e.b.c,0,1)
t=f.r
t.toString
s=f.y
s.toString
r=f.LZ(t*u,s*u)
q=C.iK(o,o,1,o,C.dG(o,o,o,o,o,o,o,o,o,r,h),D.av,D.a0,o,D.aj,D.ag)
q.aAU(v)
n=C.x(1/0,n,m)
k=C.x(1/0,l,k)
l=C.bA(d,D.cU,x.w).w.b
i=i.a.e
j=B.aVu(new C.w(n,k))
p=C.iK(o,o,1,o,C.dG(o,o,o,o,o,o,o,o,o,A.Gy.LZ(14*i,0.7*i),"MAP LABEL"),D.av,D.a0,o,D.aj,D.ag)
p.jA()
i=D.d.aT((j.gaR().b-p.b.a.c.gbq()/2+D.b.gcN(p.nF()).gi5())*l)
k=D.b.gcN(q.nF()).gi5()
n=q.b.a.c.gbq()
return C.bZ(D.a5,C.b([C.bD(o,C.W(h,1,D.Go,o,r,D.bU,o,D.aj),n,o,w,m-g,i/l-k,o)],x.p),D.p,D.af,o)},
$S:44};(function aliases(){var w=B.LB.prototype
w.aal=w.j
w=B.LP.prototype
w.aax=w.j})();(function installTearOffs(){var w=a._instance_1u
var v
w(v=B.EF.prototype,"gbo","bd",0)
w(v,"gbb","b9",0)
w(v,"gbr","bc",0)
w(v,"gbH","b8",0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(B.EF,C.n4)
v(B.AL,C.aS)
u(C.V,[B.Au,B.BL,B.Cy,B.I8,B.z9])
u(C.Z,[B.LB,B.WN,B.XO,B.LP,B.Yw])
v(B.US,B.LB)
u(C.h8,[B.aqv,B.avA,B.atR,B.aJj,B.ank,B.ayA])
v(B.Ow,C.iT)
u(C.P,[B.qZ,B.cc,B.cB,B.cZ,B.tO])
u(C.dJ,[B.a7W,B.a7X,B.a7Y,B.a7Z,B.a7V,B.atq,B.avE,B.avF,B.avG,B.avB,B.avy,B.avv,B.aJi,B.ayE,B.ayF,B.ayC,B.ayD])
u(C.fa,[B.atp,B.atm,B.atr,B.atn,B.ato,B.avD,B.avC,B.avx,B.avu,B.avt,B.avw,B.avz,B.anj,B.asm,B.ayw,B.ayv,B.ayy,B.ayB,B.ayz,B.ayx])
u(C.Y,[B.YR,B.Yu,B.Yv,B.pS,B.Ts,B.VV])
v(B.Xa,B.LP)
u(C.hC,[B.X9,B.XY])
w(B.LB,C.e9)
w(B.LP,C.e9)})()
C.eD(b.typeUniverse,JSON.parse('{"EF":{"F":[],"aJ":["F"],"A":[],"aq":[]},"AL":{"aS":[],"ao":[],"f":[]},"Au":{"V":[],"f":[]},"US":{"Z":["Au"]},"BL":{"V":[],"f":[]},"WN":{"Z":["BL"]},"Cy":{"V":[],"f":[]},"I8":{"V":[],"f":[]},"XO":{"Z":["Cy"]},"YR":{"Y":[],"f":[]},"Xa":{"Z":["I8"]},"X9":{"ac":[]},"Yu":{"Y":[],"f":[]},"Yv":{"Y":[],"f":[]},"pS":{"Y":[],"f":[]},"z9":{"V":[],"f":[]},"Ts":{"Y":[],"f":[]},"VV":{"Y":[],"f":[]},"Yw":{"Z":["z9"]},"XY":{"ac":[]}}'))
var y={c:"assets/sprites/kraken/kraken_foreground_ripples_transparent_v2.png",b:"assets/sprites/kraken/kraken_water_transparent.png"}
var x=(function rtii(){var w=C.S
return{k:w("a6"),u:w("m<cB>"),m:w("m<qZ>"),J:w("m<cc>"),b:w("m<ld>"),v:w("m<c8>"),g:w("m<tO>"),s:w("m<I>"),p:w("m<f>"),c:w("aa<n_,f>"),w:w("fU"),h:w("fY"),r:w("az<ld>"),H:w("~")}})();(function constants(){var w=a.makeConstList
A.HL=new C.e0(0,-0.08)
A.IA=new C.a6(0,520,0,1/0)
A.IG=new C.a6(0,760,0,1/0)
A.Lq=new C.h(0.9019607843137255,0.027450980392156862,0.09803921568627451,0.13725490196078433,D.c)
A.M3=new C.h(0.4392156862745098,1,0.8784313725490196,0.5098039215686274,D.c)
A.Mh=new C.h(1,0.027450980392156862,0.09803921568627451,0.13725490196078433,D.c)
A.MW=new C.h(0.9019607843137255,1,0.9529411764705882,0.6274509803921569,D.c)
A.N9=new C.h(0.3215686274509804,1,0.7019607843137254,0,D.c)
A.NI=new C.h(1,0.06274509803921569,0.16470588235294117,0.2627450980392157,D.c)
A.NM=new C.h(0.9294117647058824,0.06666666666666667,0.09411764705882353,0.15294117647058825,D.c)
A.O0=new C.h(0.8509803921568627,0.0392156862745098,0.1411764705882353,0.20392156862745098,D.c)
A.O1=new C.h(1,1,0.8431372549019608,0.25098039215686274,D.c)
A.Oe=new C.h(1,1,0.9725490196078431,0.8156862745098039,D.c)
A.PU=new C.h(0.7019607843137254,1,0.7568627450980392,0.027450980392156862,D.c)
A.P1=new C.h(1,1,0.8784313725490196,0.6980392156862745,D.c)
A.IJ=new C.bX(A.P1,null,null,D.iF,null,null,D.ab)
A.Ls=new C.h(1,0.5411764705882353,0.23137254901960785,0,D.c)
A.anV=new C.t(!0,A.Ls,null,null,null,null,null,D.c1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.aqA=new C.af("PLACEHOLDER READING \u2014 NO GAMEPLAY EFFECT HAS BEEN APPLIED.",null,A.anV,null,null,null,null,null,null,null)
A.aaJ=new C.aA(D.tw,A.aqA,null)
A.QQ=new C.vU(A.IJ,D.bb,A.aaJ,null)
A.R9=new B.cB("Make the trade","complete_black_market_deal",!0,!0)
A.jh=new B.cB("Not now","close_dialogue",!0,!0)
A.Rq=new B.Ow(0,"minimumGold")
A.Rr=new B.Ow(1,"minimumEspressoCoffee")
A.ak=w([],x.m)
A.a_P=w(["Th..Thank you, Mateo. I..I owe you my life...","The words grow distant as exhaustion pulls you back into darkness."],x.s)
A.Rl=new B.cB("Close your eyes","intro_pass_out_to_spanish_home",!0,!1)
A.a1S=w([A.Rl],x.u)
A.S0=new B.cc(A.ak,A.a_P,null,null,null,A.a1S)
A.a_W=w([A.S0],x.J)
A.Rs=new B.cZ("Player",A.a_W)
A.a0o=w(["Then what should I call you?"],x.s)
A.Rh=new B.cB("Choose your name","intro_choose_player_name",!0,!1)
A.YE=w([A.Rh],x.u)
A.RX=new B.cc(A.ak,A.a0o,null,null,null,A.YE)
A.Y9=w([A.RX],x.J)
A.Rt=new B.cZ("Concerned Stranger",A.Y9)
A.Z3=w(["Welcome, captain. Your ship has good bones, but there is always room for finer work.","Would you like to order work on your ship?"],x.s)
A.Rf=new B.cB("View ship upgrades","open_ship_upgrade_menu",!1,!0)
A.a0u=w([A.Rf,A.jh],x.u)
A.RQ=new B.cc(A.ak,A.Z3,null,null,null,A.a0u)
A.a0b=w([A.RQ],x.J)
A.Ru=new B.cZ("Shipwright",A.a0b)
A.a_9=w(["The player stirs, violently coughing up seawater. There is a distinct taste of iron admist the saltiness. The chill on your flesh is contrasted by the burning in your side."],x.s)
A.Rg=new B.cB("Next","intro_show_stranger",!0,!1)
A.a25=w([A.Rg],x.u)
A.RS=new B.cc(A.ak,A.a_9,null,null,null,A.a25)
A.ZZ=w([A.RS],x.J)
A.Rv=new B.cZ("Narrator",A.ZZ)
A.a_z=w(["I...I...I don't know... I..."],x.s)
A.Rb=new B.cB("Try to Remember","intro_show_british_officer",!0,!1)
A.a2f=w([A.Rb],x.u)
A.RU=new B.cc(A.ak,A.a_z,null,null,null,A.a2f)
A.Zh=w([A.RU],x.J)
A.Rw=new B.cZ("Player",A.Zh)
A.a1w=w(["I... I cannot remember."],x.s)
A.Rc=new B.cB("Continue","intro_ask_player_name",!0,!1)
A.a_h=w([A.Rc],x.u)
A.S9=new B.cc(A.ak,A.a1w,null,null,null,A.a_h)
A.ZF=w([A.S9],x.J)
A.Rx=new B.cZ("Player",A.ZF)
A.a2m=w(["Nothing... apart from a face.","A young man with dark hair and cold eyes. He wore a naval coat finer than any officer's, with a golden lion at his collar.","He looked at me as though he knew me. Then everything went dark."],x.s)
A.R3=new B.cB("Watch Mateo's reaction","intro_mateo_recognizes_prince",!0,!1)
A.a1W=w([A.R3],x.u)
A.RV=new B.cc(A.ak,A.a2m,null,null,null,A.a1W)
A.a1i=w([A.RV],x.J)
A.Ry=new B.cZ("Player",A.a1i)
A.Ze=w(["That sounds like the Prince of Britain.","The British Navy has been cracking down hard on piracy. If you crossed paths with the prince himself, they may have taken you for a pirate.","But the crown calls everyone a criminal when it suits them. The government is corrupt, and poverty has spread across the nation while the powerful line their own pockets.","Many people down on their luck have turned to piracy simply to make ends meet. For some, it is the only way left to put food on the table."],x.s)
A.ee=w([],x.u)
A.S6=new B.cc(A.ak,A.Ze,null,null,null,A.ee)
A.YG=w([A.S6],x.J)
A.Rz=new B.cZ("Mateo",A.YG)
A.a1p=w(["Welcome to the cafe, captain. You look like you could use something strong after your voyage.","Would you like to browse today's menu of consumables?"],x.s)
A.R6=new B.cB("Browse menu","open_spanish_cafe_menu",!0,!1)
A.YF=w([A.R6,A.jh],x.u)
A.S_=new B.cc(A.ak,A.a1p,null,null,null,A.YF)
A.a1X=w([A.S_],x.J)
A.RA=new B.cZ("Barista",A.a1X)
A.a1N=w(["Hey\u2014stay with me. Can you hear me?","Who are you?"],x.s)
A.R2=new B.cB("Try to remember","intro_cannot_remember_name",!0,!1)
A.a_Z=w([A.R2],x.u)
A.RT=new B.cc(A.ak,A.a1N,null,null,null,A.a_Z)
A.a1F=w([A.RT],x.J)
A.RB=new B.cZ("Concerned Stranger",A.a1F)
A.a1Y=w(["The fortress harbor opens, and the Royal Navy sails out to meet you.","Gilded warships spread across the channel beneath British flags, forming a wall between your fleet and the island.","Neither armada turns away."],x.s)
A.S2=new B.cc(A.ak,A.a1Y,null,null,null,A.ee)
A.a1R=w([A.S2],x.J)
A.RC=new B.cZ("Narrator",A.a1R)
A.a_f=w(["The cave trembles as something immense stirs beneath the black water.","A forest of tentacles rises from the depths, and a furious eye fixes upon your crew.","You were a fool to come here."],x.s)
A.Rk=new B.cB("Face the Kraken","start_kraken_fight",!0,!1)
A.a_c=w([A.Rk],x.u)
A.Sa=new B.cc(A.ak,A.a_f,null,null,null,A.a_c)
A.a_i=w([A.Sa],x.J)
A.RD=new B.cZ("The Kraken",A.a_i)
A.a_l=w(["You close your eyes. The room falls away.","His face emerges from the darkness, framed by drifting smoke: the same cold stare, the same golden insignia."],x.s)
A.Rj=new B.cB("Open your eyes","intro_describe_remembered_face",!0,!1)
A.ZT=w([A.Rj],x.u)
A.RZ=new B.cc(A.ak,A.a_l,null,null,null,A.ZT)
A.XZ=w([A.RZ],x.J)
A.RE=new B.cZ("Narrator",A.XZ)
A.YN=w(["Thank god... I feared the worst. What happened to you?"],x.s)
A.Rm=new B.cB("Continue","intro_player_remembers",!0,!1)
A.a15=w([A.Rm],x.u)
A.S1=new B.cc(A.ak,A.YN,null,null,null,A.a15)
A.a1f=w([A.S1],x.J)
A.RF=new B.cZ("Stranger",A.a1f)
A.a1Z=w(["I was on my way to the docks when I found you. I was sure you were dead...","The doctor has been by to check on you. Your body, he says, will heal, but he cannot explain your memory loss.","Now that you are awake, do you remember anything about what happened to you?"],x.s)
A.Re=new B.cB("Try to remember","intro_recall_prince_face",!0,!1)
A.a21=w([A.Re],x.u)
A.RW=new B.cc(A.ak,A.a1Z,null,null,null,A.a21)
A.a2g=w([A.RW],x.J)
A.RG=new B.cZ("Mateo",A.a2g)
A.a07=w(["The British officer drove his blade into you and threw you overboard.","Through fading vision, you watched the British naval ship sail away and leave you to the sea."],x.s)
A.Ri=new B.cB("Wake up","intro_return_to_stranger",!0,!1)
A.a2u=w([A.Ri],x.u)
A.Sb=new B.cc(A.ak,A.a07,null,null,null,A.a2u)
A.ZV=w([A.Sb],x.J)
A.RH=new B.cZ("Narrator",A.ZV)
A.a_I=w(["What happened to the treasure? This is not the island we saw from the water.","The golden shore twists into black rock as the welcoming lights vanish behind us.","Sirens... They lured us here. This entire island was a trap."],x.s)
A.RY=new B.cc(A.ak,A.a_I,null,null,null,A.ee)
A.Zo=w([A.RY],x.J)
A.RI=new B.cZ("Player",A.Zo)
A.a1k=w(["You awake beneath clean blankets in an unfamiliar bedroom. Your wound aches beneath fresh bandages.","Unsteady but determined, you rise from the bed and find your footing. Your limbs scream in pain, but your mind screams louder.","You hear a firm knock on the door."],x.s)
A.Ro=new B.cB("Look at the door.","intro_mateo_enters_bedroom",!0,!1)
A.a1l=w([A.Ro],x.u)
A.S4=new B.cc(A.ak,A.a1k,null,null,null,A.a1l)
A.a2d=w([A.S4],x.J)
A.RJ=new B.cZ("Narrator",A.a2d)
A.YJ=w(["Lightning tears across the water as the Kraken returns, charged with violent energy.","This encounter will become the Kraken's second phase."],x.s)
A.R8=new B.cB("Face the Electro Kraken","start_electro_kraken_fight",!0,!1)
A.a_L=w([A.R8],x.u)
A.S7=new B.cc(A.ak,A.YJ,null,null,null,A.a_L)
A.a0v=w([A.S7],x.J)
A.RK=new B.cZ("Electro Kraken",A.a0v)
A.Yc=w(["Welcome, captain. My forge supplies steel for both the dueling deck and the gun deck.","You can buy weapons, stock special cannonballs, or commission cannon upgrades using iron ore.","Would you like to browse my wares?"],x.s)
A.R5=new B.cB("Browse blacksmith shop","open_spanish_blacksmith_menu",!0,!1)
A.a0V=w([A.R5,A.jh],x.u)
A.RR=new B.cc(A.ak,A.Yc,null,null,null,A.a0V)
A.a_X=w([A.RR],x.J)
A.RL=new B.cZ("Blacksmith",A.a_X)
A.a2h=w(["My name is Mateo. I found you washed ashore, but I have no idea how long you have been there.","You were stabbed in the side, and your lungs were full of water. I cannot believe you are alive. I did what I could, but you need rest."],x.s)
A.R7=new B.cB("Thank him","intro_player_thanks_mateo",!0,!1)
A.a_o=w([A.R7],x.u)
A.Sc=new B.cc(A.ak,A.a2h,null,null,null,A.a_o)
A.a22=w([A.Sc],x.J)
A.RM=new B.cZ("Mateo",A.a22)
A.Zs=w(["Britain rises on the horizon.","Behind you, the ships of your fleet cut through the waves in battle formation. Every sail is set toward the kingdom that cast you into the sea.","The king and prince who tried to erase you wait beyond those shores. At last, you have returned to face them.","This is no raid for gold. Before this day is over, the fate of Britain will be decided."],x.s)
A.Rn=new B.cB("Face the British fleet","outro_show_british_fleet",!0,!1)
A.a1o=w([A.Rn],x.u)
A.S3=new B.cc(A.ak,A.Zs,null,null,null,A.a1o)
A.Y6=w([A.S3],x.J)
A.RN=new B.cZ("Narrator",A.Y6)
A.XP=w(["You won't be missed. Goodbye."],x.s)
A.R4=new B.cB("Continue","intro_blur_to_british_naval_ship",!0,!1)
A.a2a=w([A.R4],x.u)
A.S5=new B.cc(A.ak,A.XP,null,null,null,A.a2a)
A.ZP=w([A.S5],x.J)
A.RO=new B.cZ("British Officer",A.ZP)
A.Y8=w(["The dead do not welcome warm blood among their graves.","The earth splits as the Necromancer raises a crew of forgotten sailors around you.","Leave now, or join them beneath the soil."],x.s)
A.Ra=new B.cB("Challenge the Necromancer","start_necromancer_fight",!0,!1)
A.a1U=w([A.Ra],x.u)
A.S8=new B.cc(A.ak,A.Y8,null,null,null,A.a1U)
A.ZO=w([A.S8],x.J)
A.RP=new B.cZ("The Necromancer",A.ZO)
A.T6=new C.aj(18,9,18,9)
A.T8=new C.aj(20,16,12,12)
A.Th=new C.aj(6,7,6,7)
A.Vu=new C.am(62447,"MaterialIcons",!1)
A.WA=new C.aP(A.Vu,64,D.i,null,null,null)
A.a54=new C.ld(1,"below")
A.a55=new C.ld(2,"left")
A.a56=new C.ld(3,"right")
A.Z_=w([D.k7,A.a54,A.a55,A.a56],x.b)
A.Rp=new B.cB("Continue talking","intro_mateo_sits_at_desk",!0,!1)
A.ZH=w([A.Rp],x.u)
A.IX=new C.bb(0,D.K,D.mb,R.cN,8)
A.a0n=w([A.IX],C.S("m<bb>"))
A.Rd=new B.cB("Continue","intro_stranger_introduces_himself",!0,!1)
A.a23=w([A.Rd],x.u)
A.a5B=new C.ff(D.K,15)
A.a5C=new C.ff(D.K,2)
A.a6G=new C.c(0,-155)
A.a8H=new C.c(472,326)
A.Lz=new C.h(1,1,0.9058823529411765,0.6901960784313725,D.c)
A.ahH=new C.fi(D.l,D.bR,2)
A.a_8=w([A.ahH],C.S("m<fi>"))
A.Gy=new C.t(!0,A.Lz,null,null,null,null,14,D.V,null,0.7,null,null,1,null,null,null,null,null,null,null,null,null,A.a_8,null,null,null)
A.apJ=new C.af("Back",null,null,null,null,null,null,null,null,null)
A.aqq=new C.af("Return",null,null,null,null,null,null,null,null,null)
A.akE=new C.t(!0,D.Z,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.aqN=new C.af("This map is being built.",null,A.akE,null,null,null,null,null,null,null)
A.PX=new C.h(1,0.984313725490196,0.9137254901960784,0.9058823529411765,D.c)
A.NT=new C.h(1,1,0.8,0.7372549019607844,D.c)
A.OZ=new C.h(1,1,0.6705882352941176,0.5686274509803921,D.c)
A.Oj=new C.h(1,1,0.5411764705882353,0.396078431372549,D.c)
A.Py=new C.h(1,1,0.3411764705882353,0.13333333333333333,D.c)
A.Mo=new C.h(1,0.9568627450980393,0.3176470588235294,0.11764705882352941,D.c)
A.a5x=new C.bR([50,A.PX,100,A.NT,200,A.OZ,300,A.Oj,400,F.e3,500,A.Py,600,A.Mo,700,N.rW,800,F.rl,900,N.rV],C.S("bR<z,h>"))
A.a5L=new C.oH(A.a5x,1,1,0.3411764705882353,0.13333333333333333,D.c)
A.amK=new C.t(!0,A.a5L,null,null,null,null,null,D.c1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.ar_=new C.af("EFFECT NOT YET IMPLEMENTED",null,A.amK,null,null,null,null,null,null,null)
A.asJ=new C.bT("compact-hotspot-bar",C.S("bT<I>"))
A.atj=new B.I8(null)
A.atM=new B.pS(y.c,0.69,0.72,null)
A.atN=new B.pS(y.c,0.35,0.55,null)
A.atO=new B.pS(y.b,0.72,0.55,null)
A.atP=new B.pS(y.b,0.39,0.72,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bdx","aNL",()=>{var v=C.Rq()
v.xT(526,-20)
v.fl(514,30)
v.fl(530,47)
v.fl(493,83)
v.fl(507,105)
v.fl(481,139)
v.fl(500,158)
v.fl(468,196)
v.fl(486,218)
v.fl(463,257)
v.fl(480,278)
v.fl(472,326)
return v})
w($,"bdy","aXw",()=>{var v,u,t,s=C.Rq()
s.xT(493,83)
s.fl(454,104)
s.fl(439,139)
v=C.Rq()
v.xT(468,196)
v.fl(427,219)
v.fl(405,252)
u=C.Rq()
u.xT(486,218)
u.fl(520,243)
u.fl(537,276)
t=C.Rq()
t.xT(480,278)
t.fl(446,294)
t.fl(432,317)
return C.b([s,v,u,t],C.S("m<oT>"))})})()};
(a=>{a["fIFfk1MBMR9BlA9bOpOe37XAL6I="]=a.current})($__dart_deferred_initializers__);