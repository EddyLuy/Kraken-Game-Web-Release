((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,O,K,F,P,Q,E,R,L,S,G,H,T,I,M,B={EI:function EI(d,e,f,g){var _=this
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
_.dx=$},AM:function AM(d,e,f){this.e=d
this.c=e
this.a=f},Av:function Av(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},UW:function UW(d,e){var _=this
_.d=$
_.dr$=d
_.b6$=e
_.c=_.a=null},aqC:function aqC(d,e){this.a=d
this.b=e},LE:function LE(){},
b_P(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l="italy_first_bounty",k="accept_italy_first_bounty",j="close_dialogue",i="stranger"
A:{if("italy_ship_captain"===d){w=x.s
v=C.b(["Welcome aboard, sailor. I am Captain Lorenzo, and I assign bounties to crews bold enough to earn them.","A bounty is a promise: I name the target, you bring back proof, and the reward is yours.","I have a first contract waiting. Will you accept it?"],w)
u=x.u
t=C.b([new B.cB("Accept first bounty",k,!0,!0),new B.cB("Not yet",j,!0,!0)],u)
s=C.b([C.Nn(e.k3)+" is defeated. You have done Italy a service, captain.","As promised, your bounty is 500 gold."],w)
r=C.b([new B.cB("Claim bounty","claim_italy_first_bounty",!0,!0)],u)
q=C.b([C.Nn(e.k3)+" will trouble us no more. Spend your reward wisely, captain.","Another target has drawn a price. Will you take the next contract?"],w)
u=C.b([new B.cB("Accept another bounty",k,!0,!0),new B.cB("Not now",j,!0,!0)],u)
p=e.k3
o=x.m
w=new B.cY("Captain Lorenzo",C.b([new B.cb(A.ak,v,m,m,l,t),new B.cb(A.ak,s,l,D.i_,m,r),new B.cb(A.ak,q,l,D.kk,m,u),new B.cb(A.ak,C.b(["Your target is "+C.Nn(p)+".",C.aKa(p)],w),l,D.eq,m,A.ec),new B.cb(C.b([new B.r_(A.Rq,1)],o),C.b(["Ah, espresso on the sea. You have excellent instincts, sailor.","Keep it close. A clear mind sees reefs long before the waves do."],w),m,m,m,A.ec),new B.cb(C.b([new B.r_(A.Rp,100)],o),C.b(["Your purse has a reassuring weight to it.","Gold buys supplies, but a captain earns the crew's trust."],w),m,m,m,A.ec)],x.J))
break A}if("shipwright"===d){w=A.Rt
break A}if("kraken_cave"===d){w=A.RC
break A}if("electro_kraken"===d){w=A.RJ
break A}if("necromancer_graveyard"===d){w=A.RO
break A}if("siren_island_trap"===d){w=A.RH
break A}if("black_market_daily"===d){w=B.b_O(e)
break A}if("spanish_cafe"===d){w=A.Rz
break A}if("spanish_blacksmith"===d){w=A.RK
break A}if("intro_beach_stir"===d){w=A.Ru
break A}if("intro_beach_stranger"===d){w=A.RE
break A}if("intro_beach_player"===d){w=A.Rv
break A}if("intro_british_officer"===d){w=A.RN
break A}if("intro_british_naval_ship"===d){w=A.RG
break A}if("intro_concerned_stranger"===d){w=A.RA
break A}if("intro_forgotten_name"===d){w=A.Rw
break A}if("intro_choose_name"===d){w=A.Rs
break A}if("intro_name_greeting"===d){n=e.ax
w=new B.cY("Concerned Stranger",C.b([new B.cb(A.ak,C.b(["It is good to meet you, "+(n.length===0?i:n)+". I am glad you are alive."],x.s),m,m,m,A.a1F)],x.J))
break A}if("intro_stranger_introduction"===d){w=A.RL
break A}if("intro_player_thanks"===d){w=A.Rr
break A}if("spanish_home_bedroom"===d){w=A.RI
break A}if("spanish_home_bedroom_enter_stranger"===d){n=e.ax
w=new B.cY("Mateo",C.b([new B.cb(A.ak,C.b([(n.length===0?i:n)+"! You are finally awake! I am glad to see you on your feet.","Welcome to my home. It isn't much, but it's a safe place for you to recover."],x.s),m,m,m,A.Zi)],x.J))
break A}if("spanish_home_bedroom_mateo_seated"===d){w=A.RF
break A}if("spanish_home_bedroom_player_memory"===d){w=A.Rx
break A}if("spanish_home_bedroom_prince_revelation"===d){w=A.Ry
break A}if("british_prince_smoke_memory"===d){w=A.RD
break A}if("outro_british_island_approach"===d){w=A.RM
break A}if("outro_british_fleet_intercepts"===d){w=A.RB
break A}w=m
break A}return w},
b_O(d){var w,v,u,t,s,r,q=null,p="Black Market Dealer",o=d.gwv()
if(!o.d){w=d.ga_F().a
return new B.cY(p,C.b([new B.cb(A.ak,C.b(["You have already had today's special deal. I do not repeat myself.","Come back in "+D.f.bU(w,36e8)+"h "+D.f.bU(w,6e7)%60+"m and I may have another offer."],x.s),q,q,q,A.ec)],x.J))}w=o.a
v=d.k1.u4(w)
u=o.b
t=v>=u
w=U.GS(w)
s=C.QA(o.c)
r=t?"You have what I asked for. Do we have a deal?":"You only have "+v+". Return when you have the full amount."
r=C.b(["Keep your voice down. Once every twenty-four hours, I offer one captain a special trade.","Bring me "+u+" "+w+". In exchange, you get one "+s+".",r],x.s)
s=C.b([],x.u)
if(t)s.push(A.R8)
s.push(A.jk)
return new B.cY(p,C.b([new B.cb(A.ak,r,q,q,q,s)],x.J))},
OA:function OA(d,e){this.a=d
this.b=e},
r_:function r_(d,e){this.a=d
this.b=e},
cb:function cb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a81:function a81(d){this.a=d},
a82:function a82(d){this.a=d},
a83:function a83(d){this.a=d},
a84:function a84(d){this.a=d},
cB:function cB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cY:function cY(d,e){this.a=d
this.b=e},
a80:function a80(d,e){this.a=d
this.b=e},
BM:function BM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
WR:function WR(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
atx:function atx(d){this.a=d},
atw:function atw(d,e){this.a=d
this.b=e},
att:function att(d,e){this.a=d
this.b=e},
aty:function aty(d,e,f){this.a=d
this.b=e
this.c=f},
atu:function atu(d){this.a=d},
atv:function atv(d,e){this.a=d
this.b=e},
CA:function CA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i},
XS:function XS(){this.d=!1
this.c=this.a=null},
avL:function avL(d,e){this.a=d
this.b=e},
avM:function avM(d,e){this.a=d
this.b=e},
avK:function avK(d,e,f){this.a=d
this.b=e
this.c=f},
avN:function avN(d){this.a=d},
avJ:function avJ(d){this.a=d},
avI:function avI(d,e){this.a=d
this.b=e},
avH:function avH(d,e,f){this.a=d
this.b=e
this.c=f},
avF:function avF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avE:function avE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avB:function avB(){},
avC:function avC(d){this.a=d},
avA:function avA(d){this.a=d},
avD:function avD(){},
avG:function avG(d){this.a=d},
YV:function YV(d,e){this.c=d
this.a=e},
Ib:function Ib(d){this.a=d},
Xe:function Xe(d,e){var _=this
_.d=$
_.dr$=d
_.b6$=e
_.c=_.a=null},
atY:function atY(d){this.a=d},
Xd:function Xd(d,e){this.b=d
this.a=e},
Yy:function Yy(d,e){this.c=d
this.a=e},
Yz:function Yz(d,e){this.c=d
this.a=e},
pU:function pU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
LS:function LS(){},
aVJ(d){var w=d.a,v=d.b
return new C.i(w*0.195,v*0.18,w*0.887,v*0.655)},
bae(d){return d.length<=10?d:D.e.al(d,0,9)+"."},
baA(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b4.gLe()>b2){w=b4.b
v=new C.w(w*b2,w)}else{w=b4.a
v=new C.w(w,w/b2)}u=C.bN(new C.c(b4.a/2,b4.b/2),v.b,v.a)
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
if(a0!=null){o.push(new B.tP(j,g,B.aUk(C.bN(new C.c(w+s*a0.a,t+r*a0.b),d,e),q),p))
continue}if(j.x)a1=C.b([D.k8],m)
else{a2=C.b([D.k8],m)
D.b.P(a2,new C.az(A.YB,new B.aJt(j),l))
a1=a2}for(a3=null,a4=1/0,a5=0;a5<a1.length;++a5){a2={}
a6=a1[a5]
a7=B.b6F(g,e,d,a6,24)
a2.a=a7
a2.a=B.aUk(a7,q)
a8=D.b.pS(o,0,new B.aJu(a2))
a6=a2.a
a9=a6.a
b0=a6.b
a9=a9+(a6.c-a9)/2-h
b0=b0+(a6.d-b0)/2-i
b1=a8*1000+a5*10+Math.sqrt(a9*a9+b0*b0)
if(b1<a4){a3=a2.a
a4=b1}}a3.toString
o.push(new B.tP(j,g,a3,p))}return o},
b6F(d,e,f,g,h){var w,v
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
aUk(d,e){var w,v=d.a,u=e.a
if(v<u)v=u-v
else{v=d.c
u=e.c
v=v>u?u-v:0}u=d.b
w=e.b
if(u<w)u=w-u
else{u=d.d
w=e.d
u=u>w?w-u:0}return d.cJ(new C.c(v,u))},
b9L(d){var w,v,u,t,s
for(w=d.length,v=0;v<w;v=u)for(u=v+1,t=u;t<w;++t){s=d[v].c.dC(d[t].c)
if(s.c-s.a>8&&s.d-s.b>8)return!0}return!1},
tP:function tP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aJt:function aJt(d){this.a=d},
aJu:function aJu(d){this.a=d},
Tw:function Tw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anr:function anr(d){this.a=d},
anq:function anq(d,e){this.a=d
this.b=e},
VZ:function VZ(d,e,f){this.c=d
this.d=e
this.a=f},
ast:function ast(d,e){this.a=d
this.b=e},
zb:function zb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
YA:function YA(){var _=this
_.e=_.d=!1
_.c=_.a=null},
ayL:function ayL(d){this.a=d},
ayD:function ayD(d){this.a=d},
ayM:function ayM(d){this.a=d},
ayC:function ayC(d){this.a=d},
ayJ:function ayJ(d){this.a=d},
ayF:function ayF(d){this.a=d},
ayI:function ayI(d){this.a=d},
ayG:function ayG(d){this.a=d},
ayK:function ayK(d){this.a=d},
ayE:function ayE(d){this.a=d},
ayH:function ayH(d){this.a=d},
Y1:function Y1(d,e){this.b=d
this.a=e},
b8Q(d,e,f,g,h){return new B.CA(d,f,h,g,e,null)}},A,U,N
J=c[1]
C=c[0]
D=c[2]
O=c[70]
K=c[29]
F=c[47]
P=c[63]
Q=c[36]
E=c[30]
R=c[64]
L=c[56]
S=c[37]
G=c[12]
H=c[33]
T=c[42]
I=c[45]
M=c[77]
B=a.updateHolder(c[9],B)
A=c[76]
U=c[16]
N=c[61]
B.EI.prototype={
sLe(d){if(this.v===d)return
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
w=w==null?null:w.ad(D.b4,d,w.gbH())
return w==null?0:w},
acf(d){var w,v,u,t,s=d.a,r=d.b
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
cB(d){return this.acf(d)},
cP(d,e){return this.Ri(C.kC(this.ad(D.O,d,this.gbQ())),e)},
bB(){var w,v=this
v.fy=v.ad(D.O,x.k.a(C.B.prototype.ga_.call(v)),v.gbQ())
w=v.C$
if(w!=null)w.im(C.kC(v.gt()))}}
B.AM.prototype={
aO(d){var w=new B.EI(this.e,null,new C.aI(),C.ai())
w.aN()
w.sb2(null)
return w},
aU(d,e){e.sLe(this.e)}}
B.Av.prototype={
aa(){return new B.UW(null,null)}}
B.UW.prototype={
ao(){var w,v=this
v.aD()
w=C.bL(null,C.cZ(0,v.a.f),null,null,v)
v.d!==$&&C.aJ()
v.d=w
if(v.a.d!=null)w.OI(!0)},
j(){var w=this.d
w===$&&C.a()
w.j()
this.aas()},
D(d){var w=null,v=this.a,u=v.d
if(u==null)v=E.hK(v.c,D.a6,w,w,w,w)
else{v=this.d
v===$&&C.a()
v=C.ep(v,new B.aqC(this,u),w)}return C.fy(C.cs(new C.j9(!0,v,w),w,w),D.l,!0)}}
B.LE.prototype={
j(){var w=this,v=w.b6$
if(v!=null)v.K(w.geN())
w.b6$=null
w.au()},
bv(){this.ci()
this.c9()
this.eO()}}
B.OA.prototype={
G(){return"DialogueConditionType."+this.b}}
B.r_.prototype={
aBA(d){var w
switch(this.a.a){case 0:w=d.a>=this.b
break
case 1:w=d.b>=this.b
break
default:w=null}return w}}
B.cb.prototype={
aBB(d,e){var w=this,v=w.c==null||D.b.cY(e,new B.a81(w)),u=w.e!=null&&D.b.cY(e,new B.a82(w)),t=w.d==null||D.b.cY(e,new B.a83(w))
return v&&t&&!u&&D.b.dc(w.a,new B.a84(d))}}
B.cB.prototype={}
B.cY.prototype={
aFk(d,e){return D.b.tn(this.b,new B.a80(d,e))}}
B.BM.prototype={
aa(){return new B.WR()},
aBY(d){return this.e.$1(d)}}
B.WR.prototype={
aK(d){var w=this
w.aZ(d)
if(d.c!==w.a.c){w.d=0
w.e=!0}},
D(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=B.b_P(n.c,n.d)
if(m==null||!p.e)return D.aQ
n=p.a.d
w=m.aFk(n.k1,C.rJ(n.k2,x.h))
v=w.b
u=D.f.de(D.f.a9(p.d,0,v.length-1))
t=u===v.length-1
n=m.a
s=C.O(d).ok.w
n=C.W(n,o,o,o,s==null?o:s.awA(P.dt,D.V),o,o,o)
s=v[u]
r=C.O(d).ok.y
s=C.W(s,o,o,o,r==null?o:r.bI(D.i),o,o,o)
if(t&&w.f.length!==0){r=w.f
q=C.a4(r).i("a9<1,oP>")
r=C.a3(new C.a9(r,new B.atx(p),q),q.i("ax.E"))
r=C.Hb(D.cR,r,D.eD,0,8)}else r=C.h2(C.W(t?"Close":"Next",o,o,o,o,o,o,o),new B.aty(p,t,u),o)
return C.iF(!0,new C.dz(D.by,o,o,new C.dD(A.IE,C.e2(new C.aA(A.T8,C.br(C.b([n,D.c5,s,new C.dz(D.iz,o,o,r,o)],x.p),D.b1,D.m,D.M),o),o,A.NL,D.mP),o),o),!0,D.a3,!0,!1)}}
B.CA.prototype={
aa(){return new B.XS()},
aC1(d){return this.d.$1(d)}}
B.XS.prototype={
aK(d){this.aZ(d)
if(d.c!==this.a.c)this.d=!1},
D(d){var w,v,u,t=this,s=null,r=C.b([C.f1(0,t.acz())],x.p),q=t.a.w
if(q!=null)r.push(C.bD(s,G.aPM(Q.hy,A.apf,q),s,s,16,s,16,s))
r.push(C.bD(s,C.dF(C.cs(new B.YV(t.a.c.a,s),s,s),!0,s),s,s,0,0,16,s))
q=t.a.c
w=q.f
if(q.ay)r.push(C.f1(0,new B.Tw(w,q.ch,new B.avL(t,d),s)))
else D.b.P(r,new C.a9(w,new B.avM(t,d),C.a4(w).i("a9<1,f>")))
q=t.a
w=q.c.at
if(w!=null){v=q.f
u=q.r
q=q.w
r.push(new B.BM(w,v,u,q,w==="kraken_cave"||w==="electro_kraken"?new B.avN(t):s,s))}return C.bY(D.a5,r,D.p,D.ag,s)},
UD(d,e){var w
if(e.e===D.As){w=e.f
w.toString
this.aro(d,w)
return}this.a.aC1(e)},
aro(d,e){C.iZ(!0,new B.avI(this,e),d,x.H)},
acz(){var w,v=this,u=null,t=v.a.c
if(t.r)return C.fy(C.cs(C.br(C.b([A.Wc,L.fz,C.W(t.a,u,u,u,O.Gu,u,u,u),D.c5,A.aqj],x.p),D.n,D.m,D.M),u,u),A.NI,!0)
w=t.b
w.toString
t=C.b([new B.Av(w,t.c,t.d,t.e,u)],x.p)
if(v.a.c.at==="electro_kraken"&&!v.d)t.push(A.asR)
if(v.d)t.push(new B.Yy(v.a.c.at==="electro_kraken",u))
return C.bY(D.a5,t,D.p,D.ci,u)}}
B.YV.prototype={
D(d){var w=null,v=K.eH(T.cr,1.5),u=C.dn(14)
return C.hc(new C.aA(A.T6,C.W(this.c.toUpperCase(),w,w,w,M.Gw,w,w,w),w),new C.bV(A.NZ,w,v,u,A.a00,w,D.a8),D.ba)}}
B.Ib.prototype={
aa(){return new B.Xe(null,null)}}
B.Xe.prototype={
ao(){var w,v=this
v.aD()
w=C.bL(null,D.tl,null,null,v)
w.OH()
v.d!==$&&C.aJ()
v.d=w},
j(){var w=this.d
w===$&&C.a()
w.j()
this.aaE()},
D(d){var w=null,v=this.d
v===$&&C.a()
return C.dF(new C.j9(!0,C.cs(new B.AM(1.5384615384615385,C.ep(v,new B.atY(this),w),w),w,w),w),!0,w)}}
B.Xd.prototype={
aq(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=Math.min(a7.a/1000,a7.b/650),a5=a6.a
J.a7(a5.save())
a6.aB(a4)
w=$.aO0()
v=$.I()
u=C.K()
u.r=A.PT.gm()
u.b=D.G
u.c=28
u.d=D.aq
u.e=D.db
u.z=I.AG
a6.dA(w,u)
u=C.K()
u.r=F.mf.gm()
u.b=D.G
u.c=8
u.d=D.aq
u.e=D.db
a6.dA(w,u)
for(w=$.aXL(),t=0;t<4;++t){s=w[t]
u=new C.b8(D.r,D.t,D.C,D.E,D.o)
u.r=A.O_.gm()
u.b=D.G
u.c=4
u.d=D.aq
u.e=D.db
u.z=I.AH
r=u.aI()
u=s.e
a5.drawPath((u==null?s.e=new C.fw(s.ge2().a.snapshot()):u).a,r)
r.delete()
u=new C.b8(D.r,D.t,D.C,D.E,D.o)
u.r=A.Ob.gm()
u.b=D.G
u.c=1.5
u.d=D.aq
u.e=D.db
r=u.aI()
u=s.e
a5.drawPath((u==null?s.e=new C.fw(s.ge2().a.snapshot()):u).a,r)
r.delete()}w=$.aO0()
u=C.K()
u.r=D.i.gm()
u.b=D.G
u.c=3.5
u.d=D.aq
u.e=D.db
a6.dA(w,u)
for(w=this.b,u=w*3.141592653589793*2,q=x.v,p=0;p<4;++p){o=D.d.aM(w+p*0.25,1)
n=24+o*190
m=C.b([],q)
l=new C.b2(v.r,D.x,a3,a3,m)
for(v=p*1.9,k=0;k<=48;++k){j=k/48*3.141592653589793*2
i=n+(Math.sin(j*7+v)*5+Math.sin(j*13-u)*2.5)
h=472+Math.cos(j)*i
i=326+Math.sin(j)*i*0.27
if(k===0){i=new C.cw(h,i)
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
v=$.I()
m=new C.b8(D.r,D.t,D.C,D.E,D.o)
m.r=C.ay(g,255,214,64).gm()
m.b=D.G
m.c=2.2
m.d=D.aq
m.z=A.a5e
r=m.aI()
m=l.e
a5.drawPath((m==null?l.e=new C.fw(l.ge2().a.snapshot()):m).a,r)
r.delete()}for(w*=28,f=0;f<12;++f){j=f*3.141592653589793/6+Math.sin(f*2.4)*0.12
e=65+D.f.aM(f*37,95)+w
m=C.b([],q)
d=new C.b2(v.r,D.x,a3,a3,m)
m.push(new C.cw(472,326))
for(v=f*1.3,i=f*0.8,k=1;k<=9;++k){a0=e*k/9
a1=Math.sin(k*3.7+v+u)*11+Math.sin(k*7.1-i)*4
h=new C.bj(472+Math.cos(j)*a0+Math.sin(j)*a1,326+(Math.sin(j)*a0-Math.cos(j)*a1)*0.27)
m.push(h)
a2=d.f
if(a2!=null)h.e5(a2)
h=d.e
if(h!=null)h.a.delete()
d.e=null}v=$.I()
m=new C.b8(D.r,D.t,D.C,D.E,D.o)
m.r=A.N9.gm()
m.b=D.G
m.c=12
m.d=D.aq
m.z=I.AE
r=m.aI()
m=d.e
a5.drawPath((m==null?d.e=new C.fw(d.ge2().a.snapshot()):m).a,r)
r.delete()
m=new C.b8(D.r,D.t,D.C,D.E,D.o)
m.r=A.M3.gm()
m.b=D.G
m.c=5
m.d=D.aq
m.z=M.on
r=m.aI()
m=d.e
a5.drawPath((m==null?d.e=new C.fw(d.ge2().a.snapshot()):m).a,r)
r.delete()}w=C.K()
w.r=A.MW.gm()
w.z=A.a5d
a6.bW(A.a89,18,w)
a5.restore()},
cF(d){return d.b!==this.b}}
B.Yy.prototype={
D(d){var w=null,v=this.c,u=v?"assets/sprites/kraken/electro_kraken_head_transparent.png":"assets/sprites/kraken/kraken_head_domed_transparent_v3.png"
return C.dF(new C.j9(!0,C.cs(new B.AM(1.5384615384615385,C.bY(A.HK,C.b([D.pi,A.atl,new B.Yz(v,w),A.atj,A.atm,new B.pU(u,0.36,1,w),A.atk],x.p),D.p,D.ag,w),w),w,w),w),!0,w)}}
B.Yz.prototype={
D(d){var w,v,u=null,t=this.c?"assets/sprites/kraken/electro_kraken_tentacle_tip_transparent.png":"assets/sprites/kraken/kraken_phase_1_tentacle_tip_transparent.png",s=C.b([],x.p)
for(w=0;w<8;++w){v=C.apg(new C.c5(58,190,E.hK(t,D.a6,D.eI,u,u,u),u),A.a6h)
s.push(new C.lI(C.aSR(w*3.141592653589793/4),D.N,!0,u,v,u))}return C.bY(D.N,s,D.p,D.ag,u)}}
B.pU.prototype={
D(d){var w=null
return G.aKQ(C.oO(E.hK(this.c,D.a6,w,w,w,w),this.e),w,this.d)}}
B.LS.prototype={
j(){var w=this,v=w.b6$
if(v!=null)v.K(w.geN())
w.b6$=null
w.au()},
bv(){this.ci()
this.c9()
this.eO()}}
B.tP.prototype={}
B.Tw.prototype={
D(d){return C.je(new B.anr(this))}}
B.VZ.prototype={
D(d){var w,v,u,t,s=null,r=K.eH(H.dq,1),q=C.dn(8),p=x.p,o=C.b([],p)
for(w=this.c,v=w.length,u=0;u<v;++u){t=C.b([],p)
if(u>0)t.push(F.pg)
t.push(new C.c5(150,37.5,new B.zb(w[u].a,new B.ast(this,u),1,s),s))
D.b.P(o,t)}return C.hc(C.lx(C.bT(o,D.n,s,D.m,D.w,0),A.Th,D.aS),new C.bV(A.Lq,s,r,q,s,s,D.a8),D.ba)}}
B.zb.prototype={
aa(){return new B.YA()}}
B.YA.prototype={
D(d){var w,v=this,u=null,t=v.a,s=t.c
t=t.d
if(v.e)w="assets/ui/map_button_pressed.png"
else w=v.d?"assets/ui/map_button_hover.png":"assets/ui/map_button_normal.png"
return C.bq(!0,u,C.ix(C.im(D.aM,C.bY(D.a5,C.b([E.hK(w,D.bB,D.h_,u,u,u),C.je(new B.ayH(v))],x.p),D.p,D.ci,u),D.ax,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,new B.ayI(v),new B.ayJ(v),new B.ayK(v),u,u,u),D.ik,u,new B.ayL(v),new B.ayM(v),u),!1,u,u,u,!1,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,D.B,u)}}
B.Y1.prototype={
aq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,C.y)(w),++t){s=w[t]
$.I()
r=new C.b8(D.r,D.t,D.C,D.E,D.o)
r.r=H.dq.be(0.9).gm()
q=s.d
r.c=2*q
p=new C.b8(D.r,D.t,D.C,D.E,D.o)
p.r=A.Mi.be(0.8).gm()
o=new C.b8(D.r,D.t,D.C,D.E,D.o)
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
var z=a.updateTypes(["G(G)","A(r_)","A(cb)","oP(cB)","G(G,tP)"])
B.aqC.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&C.a()
p=p.x
p===$&&C.a()
q=q.a
w=q.e
if(w==null)return C.bY(D.N,C.b([E.hK(q.c,D.a6,r,r,r,r),C.oO(E.hK(this.b,D.a6,r,r,r,r),p)],x.p),D.p,D.ag,r)
if(p<0.5){v=p*2
u=1-v
t=v
s=0}else{v=(p-0.5)*2
t=1-v
s=v
u=0}return C.bY(D.N,C.b([C.oO(E.hK(q.c,D.a6,r,r,r,r),u),C.oO(E.hK(this.b,D.a6,r,r,r,r),t),C.oO(E.hK(w,D.a6,r,r,r,r),s)],x.p),D.p,D.ag,r)},
$S:119}
B.a81.prototype={
$1(d){return d.a===this.a.c},
$S:123}
B.a82.prototype={
$1(d){return d.a===this.a.e},
$S:123}
B.a83.prototype={
$1(d){var w=this.a
return d.a===w.c&&d.d===w.d},
$S:123}
B.a84.prototype={
$1(d){return d.aBA(this.a)},
$S:z+1}
B.a80.prototype={
$1(d){return d.aBB(this.a,this.b)},
$S:z+2}
B.atx.prototype={
$1(d){var w=null
return C.ahB(C.W(d.a,w,w,w,w,w,w,w),new B.atw(this.a,d))},
$S:z+3}
B.atw.prototype={
$0(){var w=this.a,v=this.b
w.I(new B.att(w,v))
w.a.aBY(v.b)
if(v.c&&v.d){w=w.a.f
if(w!=null)w.$0()}},
$S:0}
B.att.prototype={
$0(){var w=this.a
w.d=0
w.e=!this.b.c},
$S:0}
B.aty.prototype={
$0(){var w,v=this.a
if(this.b){v.I(new B.atu(v))
v=v.a.f
if(v!=null)v.$0()}else{v.I(new B.atv(v,this.c))
w=v.a.r
if(w!=null)w.$1(v.d)}},
$S:0}
B.atu.prototype={
$0(){return this.a.e=!1},
$S:0}
B.atv.prototype={
$0(){this.a.d=this.b+1},
$S:0}
B.avL.prototype={
$1(d){return this.a.UD(this.b,d)},
$S:231}
B.avM.prototype={
$1(d){var w=null,v=this.b,u=x.w,t=C.bA(v,w,u).w,s=d.b
u=C.bA(v,w,u).w
return C.bD(w,new G.C3(!1,new B.avK(this.a,v,d),w,w,w,w,w,w,!1,w,!0,w,C.W(d.a,w,w,w,w,w,w,w),w),w,w,t.a.a*s.a,w,u.a.b*s.b,w)},
$S:608}
B.avK.prototype={
$0(){return this.a.UD(this.b,this.c)},
$S:0}
B.avN.prototype={
$1(d){var w=this.a
if(d>=(w.a.c.at==="electro_kraken"?1:2)&&!w.d)w.I(new B.avJ(w))},
$S:16}
B.avJ.prototype={
$0(){return this.a.d=!0},
$S:0}
B.avI.prototype={
$1(d){return new C.tS(new B.avH(this.a,this.b,d),null)},
$S:609}
B.avH.prototype={
$2(d,e){var w=null,v=C.W("The Three Fates",w,w,w,w,w,w,w),u=this.a,t=x.p,s=C.b([C.W("Choose the thread you wish the fortune teller to read. Each reading costs 25 gold and may be purchased repeatedly.",w,w,w,w,w,w,w),D.c5,C.W("Your gold: "+u.a.f.k1.a,w,w,w,D.bu,w,w,w),D.cP],t)
D.b.P(s,new C.a9(D.a1W,new B.avF(u,d,this.c,e),x.c))
s=C.lx(C.br(s,D.b1,D.m,D.M),w,D.ah)
return C.j1(C.b([C.h2(D.fC,new B.avG(d),w)],t),w,w,new C.dD(A.Iy,s,w),w,v)},
$S:610}
B.avF.prototype={
$1(d){var w=this,v=null,u=x.p,t=C.b([C.bT(C.b([C.ok(C.W(d.a,v,v,v,C.O(w.b).ok.w,v,v,v),1),C.W("25 gold",v,v,v,v,v,v,v)],u),D.n,v,D.m,D.w,0),D.dQ,C.W(d.c,v,v,v,v,v,v,v)],u)
D.b.P(t,C.b([D.c5,A.aqw],u))
t.push(D.c5)
u=w.a
u=u.a.f.k1.a>=25?new B.avE(u,d,w.c,w.d):v
t.push(new C.dz(D.iz,v,v,C.ik(C.W("Purchase \u2014 25 gold",v,v,v,v,v,v,v),u),v))
return C.e2(new C.aA(S.hq,C.br(t,D.aT,D.m,D.w),v),v,v,v)},
$S:611}
B.avE.prototype={
$0(){var w=0,v=C.q(x.H),u,t=this,s,r
var $async$$0=C.r(function(d,e){if(d===1)return C.n(e,v)
for(;;)switch(w){case 0:w=3
return C.j(t.a.a.f.mV(25),$async$$0)
case 3:if(!e||t.c.e==null){w=1
break}s=t.d
s.$1(new B.avB())
r=t.c
w=4
return C.j(C.iZ(!0,new B.avC(t.b),r,x.H),$async$$0)
case 4:if(r.e!=null)s.$1(new B.avD())
case 1:return C.o(u,v)}})
return C.p($async$$0,v)},
$S:11}
B.avB.prototype={
$0(){},
$S:0}
B.avC.prototype={
$1(d){var w=null,v=this.a,u=C.W(v.a,w,w,w,w,w,w,w),t=x.p
v=C.b([C.W(v.d,w,w,w,w,w,w,w)],t)
D.b.P(v,C.b([L.fz,A.QP],t))
v=C.br(v,D.b1,D.m,D.M)
return C.j1(C.b([C.h2(A.apX,new B.avA(d),w)],t),w,w,v,w,u)},
$S:49}
B.avA.prototype={
$0(){return C.ce(this.a,!1).cv()},
$S:0}
B.avD.prototype={
$0(){},
$S:0}
B.avG.prototype={
$0(){return C.ce(this.a,!1).cv()},
$S:0}
B.atY.prototype={
$2(d,e){var w=null,v=this.a.d
v===$&&C.a()
v=v.x
v===$&&C.a()
return C.dj(w,w,w,new B.Xd(v,w),D.F)},
$S:612}
B.aJt.prototype={
$1(d){return d!==D.k8},
$S:613}
B.aJu.prototype={
$2(d,e){var w=this.a.a.dC(e.c),v=w.c-w.a
return d+(v>0&&w.d-w.b>0?v*(w.d-w.b):0)},
$S:z+4}
B.anr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.c,o=B.baA(q.d,p,new C.w(C.x(1/0,e.a,e.b),C.x(1/0,e.c,e.d))),n=B.b9L(o),m=x.p,l=C.b([],m)
if(n)l.push(C.bD(12,new B.VZ(p,q.e,A.asg),52,r,12,12,r,r))
else{p=C.b([C.f1(0,C.dF(C.dj(r,r,r,new B.Y1(o,r),D.F),!0,r))],m)
for(m=o.length,w=0;w<o.length;o.length===m||(0,C.y)(o),++w){v=o[w]
u=v.c
t=u.a
s=u.b
p.push(new C.f0(t,s,r,r,u.c-t,u.d-s,new B.zb(v.a.a,new B.anq(q,v),v.d,r),r))}D.b.P(l,p)}return C.bY(D.a5,l,D.p,D.ag,r)},
$S:48}
B.anq.prototype={
$0(){return this.a.e.$1(this.b.a)},
$S:0}
B.ast.prototype={
$0(){var w=this.a
return w.d.$1(w.c[this.b])},
$S:0}
B.ayL.prototype={
$1(d){var w=this.a
return w.I(new B.ayD(w))},
$S:53}
B.ayD.prototype={
$0(){return this.a.d=!0},
$S:0}
B.ayM.prototype={
$1(d){var w=this.a
return w.I(new B.ayC(w))},
$S:43}
B.ayC.prototype={
$0(){var w=this.a
w.e=w.d=!1},
$S:0}
B.ayJ.prototype={
$1(d){var w=this.a
return w.I(new B.ayF(w))},
$S:29}
B.ayF.prototype={
$0(){return this.a.e=!0},
$S:0}
B.ayI.prototype={
$0(){var w=this.a
return w.I(new B.ayG(w))},
$S:0}
B.ayG.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ayK.prototype={
$1(d){var w=this.a
return w.I(new B.ayE(w))},
$S:73}
B.ayE.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ayH.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=null,n=a0.a,m=a0.b,l=a0.c,k=a0.d,j=B.aVJ(new C.w(C.x(1/0,n,m),C.x(1/0,l,k))),i=this.a,h=B.bae(i.a.c).toUpperCase(),g=i.a.e,f=A.Gx.M2(14*g,0.7*g),e=C.hX(o,o,1,o,C.dv(o,o,o,o,o,o,o,o,o,f,h),D.at,D.a_,o,D.aj,D.ae)
e.iR()
g=j.c
w=j.a
v=g-w
u=D.d.a9(v/e.b.c,0,1)
t=f.r
t.toString
s=f.y
s.toString
r=f.M2(t*u,s*u)
q=C.hX(o,o,1,o,C.dv(o,o,o,o,o,o,o,o,o,r,h),D.at,D.a_,o,D.aj,D.ae)
q.aB2(v)
n=C.x(1/0,n,m)
k=C.x(1/0,l,k)
l=C.bA(d,D.cU,x.w).w.b
i=i.a.e
j=B.aVJ(new C.w(n,k))
p=C.hX(o,o,1,o,C.dv(o,o,o,o,o,o,o,o,o,A.Gx.M2(14*i,0.7*i),"MAP LABEL"),D.at,D.a_,o,D.aj,D.ae)
p.iR()
i=D.d.aT((j.gaR().b-p.b.a.c.gbq()/2+D.b.gcN(p.nG()).gi6())*l)
k=D.b.gcN(q.nG()).gi6()
n=q.b.a.c.gbq()
return C.bY(D.a5,C.b([C.bD(o,C.W(h,1,D.Gm,o,r,D.bJ,o,D.aj),n,o,w,m-g,i/l-k,o)],x.p),D.p,D.ag,o)},
$S:48};(function aliases(){var w=B.LE.prototype
w.aas=w.j
w=B.LS.prototype
w.aaE=w.j})();(function installTearOffs(){var w=a._instance_1u
var v
w(v=B.EI.prototype,"gbo","bd",0)
w(v,"gbb","b9",0)
w(v,"gbr","bc",0)
w(v,"gbH","b8",0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(B.EI,C.n4)
v(B.AM,C.aS)
u(C.V,[B.Av,B.BM,B.CA,B.Ib,B.zb])
u(C.Z,[B.LE,B.WR,B.XS,B.LS,B.YA])
v(B.UW,B.LE)
u(C.ha,[B.aqC,B.avH,B.atY,B.aJu,B.anr,B.ayH])
v(B.OA,C.iT)
u(C.Q,[B.r_,B.cb,B.cB,B.cY,B.tP])
u(C.dJ,[B.a81,B.a82,B.a83,B.a84,B.a80,B.atx,B.avL,B.avM,B.avN,B.avI,B.avF,B.avC,B.aJt,B.ayL,B.ayM,B.ayJ,B.ayK])
u(C.fa,[B.atw,B.att,B.aty,B.atu,B.atv,B.avK,B.avJ,B.avE,B.avB,B.avA,B.avD,B.avG,B.anq,B.ast,B.ayD,B.ayC,B.ayF,B.ayI,B.ayG,B.ayE])
u(C.Y,[B.YV,B.Yy,B.Yz,B.pU,B.Tw,B.VZ])
v(B.Xe,B.LS)
u(C.hD,[B.Xd,B.Y1])
w(B.LE,C.ea)
w(B.LS,C.ea)})()
C.eO(b.typeUniverse,JSON.parse('{"EI":{"F":[],"aK":["F"],"B":[],"aq":[]},"AM":{"aS":[],"ao":[],"f":[]},"Av":{"V":[],"f":[]},"UW":{"Z":["Av"]},"BM":{"V":[],"f":[]},"WR":{"Z":["BM"]},"CA":{"V":[],"f":[]},"Ib":{"V":[],"f":[]},"XS":{"Z":["CA"]},"YV":{"Y":[],"f":[]},"Xe":{"Z":["Ib"]},"Xd":{"ac":[]},"Yy":{"Y":[],"f":[]},"Yz":{"Y":[],"f":[]},"pU":{"Y":[],"f":[]},"zb":{"V":[],"f":[]},"Tw":{"Y":[],"f":[]},"VZ":{"Y":[],"f":[]},"YA":{"Z":["zb"]},"Y1":{"ac":[]}}'))
var y={c:"assets/sprites/kraken/kraken_foreground_ripples_transparent_v2.png",b:"assets/sprites/kraken/kraken_water_transparent.png"}
var x=(function rtii(){var w=C.T
return{k:w("a6"),u:w("m<cB>"),m:w("m<r_>"),J:w("m<cb>"),b:w("m<ld>"),v:w("m<c8>"),g:w("m<tP>"),s:w("m<J>"),p:w("m<f>"),c:w("a9<n_,f>"),w:w("fW"),h:w("h_"),r:w("az<ld>"),H:w("~")}})();(function constants(){var w=a.makeConstList
A.HK=new C.e1(0,-0.08)
A.Iy=new C.a6(0,520,0,1/0)
A.IE=new C.a6(0,760,0,1/0)
A.Lq=new C.h(0.9019607843137255,0.027450980392156862,0.09803921568627451,0.13725490196078433,D.c)
A.M3=new C.h(0.4392156862745098,1,0.8784313725490196,0.5098039215686274,D.c)
A.Mi=new C.h(1,0.027450980392156862,0.09803921568627451,0.13725490196078433,D.c)
A.MW=new C.h(0.9019607843137255,1,0.9529411764705882,0.6274509803921569,D.c)
A.N9=new C.h(0.3215686274509804,1,0.7019607843137254,0,D.c)
A.NI=new C.h(1,0.06274509803921569,0.16470588235294117,0.2627450980392157,D.c)
A.NL=new C.h(0.9294117647058824,0.06666666666666667,0.09411764705882353,0.15294117647058825,D.c)
A.NZ=new C.h(0.8509803921568627,0.0392156862745098,0.1411764705882353,0.20392156862745098,D.c)
A.O_=new C.h(1,1,0.8431372549019608,0.25098039215686274,D.c)
A.Ob=new C.h(1,1,0.9725490196078431,0.8156862745098039,D.c)
A.PT=new C.h(0.7019607843137254,1,0.7568627450980392,0.027450980392156862,D.c)
A.P_=new C.h(1,1,0.8784313725490196,0.6980392156862745,D.c)
A.IH=new C.bV(A.P_,null,null,D.iG,null,null,D.a8)
A.Ls=new C.h(1,0.5411764705882353,0.23137254901960785,0,D.c)
A.anq=new C.t(!0,A.Ls,null,null,null,null,null,D.bC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.aq6=new C.af("PLACEHOLDER READING \u2014 NO GAMEPLAY EFFECT HAS BEEN APPLIED.",null,A.anq,null,null,null,null,null,null,null)
A.aad=new C.aA(D.tw,A.aq6,null)
A.QP=new C.vW(A.IH,D.ba,A.aad,null)
A.R8=new B.cB("Make the trade","complete_black_market_deal",!0,!0)
A.jk=new B.cB("Not now","close_dialogue",!0,!0)
A.Rp=new B.OA(0,"minimumGold")
A.Rq=new B.OA(1,"minimumEspressoCoffee")
A.ak=w([],x.m)
A.a_s=w(["Th..Thank you, Mateo. I..I owe you my life...","The words grow distant as exhaustion pulls you back into darkness."],x.s)
A.Rk=new B.cB("Close your eyes","intro_pass_out_to_spanish_home",!0,!1)
A.a1t=w([A.Rk],x.u)
A.S_=new B.cb(A.ak,A.a_s,null,null,null,A.a1t)
A.a_z=w([A.S_],x.J)
A.Rr=new B.cY("Player",A.a_z)
A.a01=w(["Then what should I call you?"],x.s)
A.Rg=new B.cB("Choose your name","intro_choose_player_name",!0,!1)
A.Yg=w([A.Rg],x.u)
A.RW=new B.cb(A.ak,A.a01,null,null,null,A.Yg)
A.XL=w([A.RW],x.J)
A.Rs=new B.cY("Concerned Stranger",A.XL)
A.YF=w(["Welcome, captain. Your ship has good bones, but there is always room for finer work.","Would you like to order work on your ship?"],x.s)
A.Re=new B.cB("View ship upgrades","open_ship_upgrade_menu",!1,!0)
A.a08=w([A.Re,A.jk],x.u)
A.RP=new B.cb(A.ak,A.YF,null,null,null,A.a08)
A.a_P=w([A.RP],x.J)
A.Rt=new B.cY("Shipwright",A.a_P)
A.ZL=w(["The player stirs, violently coughing up seawater. There is a distinct taste of iron admist the saltiness. The chill on your flesh is contrasted by the burning in your side."],x.s)
A.Rf=new B.cB("Next","intro_show_stranger",!0,!1)
A.a1H=w([A.Rf],x.u)
A.RR=new B.cb(A.ak,A.ZL,null,null,null,A.a1H)
A.ZA=w([A.RR],x.J)
A.Ru=new B.cY("Narrator",A.ZA)
A.a_b=w(["I...I...I don't know... I..."],x.s)
A.Ra=new B.cB("Try to Remember","intro_show_british_officer",!0,!1)
A.a1R=w([A.Ra],x.u)
A.RT=new B.cb(A.ak,A.a_b,null,null,null,A.a1R)
A.YT=w([A.RT],x.J)
A.Rv=new B.cY("Player",A.YT)
A.a19=w(["I... I cannot remember."],x.s)
A.Rb=new B.cB("Continue","intro_ask_player_name",!0,!1)
A.ZT=w([A.Rb],x.u)
A.S8=new B.cb(A.ak,A.a19,null,null,null,A.ZT)
A.Zg=w([A.S8],x.J)
A.Rw=new B.cY("Player",A.Zg)
A.a1Y=w(["Nothing... apart from a face.","A young man with dark hair and cold eyes. He wore a naval coat finer than any officer's, with a golden lion at his collar.","He looked at me as though he knew me. Then everything went dark."],x.s)
A.R2=new B.cB("Watch Mateo's reaction","intro_mateo_recognizes_prince",!0,!1)
A.a1x=w([A.R2],x.u)
A.RU=new B.cb(A.ak,A.a1Y,null,null,null,A.a1x)
A.a0Y=w([A.RU],x.J)
A.Rx=new B.cY("Player",A.a0Y)
A.YQ=w(["That sounds like the Prince of Britain.","The British Navy has been cracking down hard on piracy. If you crossed paths with the prince himself, they may have taken you for a pirate.","But the crown calls everyone a criminal when it suits them. The government is corrupt, and poverty has spread across the nation while the powerful line their own pockets.","Many people down on their luck have turned to piracy simply to make ends meet. For some, it is the only way left to put food on the table."],x.s)
A.ec=w([],x.u)
A.S5=new B.cb(A.ak,A.YQ,null,null,null,A.ec)
A.Yi=w([A.S5],x.J)
A.Ry=new B.cY("Mateo",A.Yi)
A.a14=w(["Welcome to the cafe, captain. You look like you could use something strong after your voyage.","Would you like to browse today's menu of consumables?"],x.s)
A.R5=new B.cB("Browse menu","open_spanish_cafe_menu",!0,!1)
A.Yh=w([A.R5,A.jk],x.u)
A.RZ=new B.cb(A.ak,A.a14,null,null,null,A.Yh)
A.a1y=w([A.RZ],x.J)
A.Rz=new B.cY("Barista",A.a1y)
A.a1o=w(["Hey\u2014stay with me. Can you hear me?","Who are you?"],x.s)
A.R1=new B.cB("Try to remember","intro_cannot_remember_name",!0,!1)
A.a_C=w([A.R1],x.u)
A.RS=new B.cb(A.ak,A.a1o,null,null,null,A.a_C)
A.a1g=w([A.RS],x.J)
A.RA=new B.cY("Concerned Stranger",A.a1g)
A.a1z=w(["The fortress harbor opens, and the Royal Navy sails out to meet you.","Gilded warships spread across the channel beneath British flags, forming a wall between your fleet and the island.","Neither armada turns away."],x.s)
A.S1=new B.cb(A.ak,A.a1z,null,null,null,A.ec)
A.a1s=w([A.S1],x.J)
A.RB=new B.cY("Narrator",A.a1s)
A.ZR=w(["The cave trembles as something immense stirs beneath the black water.","A forest of tentacles rises from the depths, and a furious eye fixes upon your crew.","You were a fool to come here."],x.s)
A.Rj=new B.cB("Face the Kraken","start_kraken_fight",!0,!1)
A.ZO=w([A.Rj],x.u)
A.S9=new B.cb(A.ak,A.ZR,null,null,null,A.ZO)
A.ZU=w([A.S9],x.J)
A.RC=new B.cY("The Kraken",A.ZU)
A.ZX=w(["You close your eyes. The room falls away.","His face emerges from the darkness, framed by drifting smoke: the same cold stare, the same golden insignia."],x.s)
A.Ri=new B.cB("Open your eyes","intro_describe_remembered_face",!0,!1)
A.Zu=w([A.Ri],x.u)
A.RY=new B.cb(A.ak,A.ZX,null,null,null,A.Zu)
A.XB=w([A.RY],x.J)
A.RD=new B.cY("Narrator",A.XB)
A.Yp=w(["Thank god... I feared the worst. What happened to you?"],x.s)
A.Rl=new B.cB("Continue","intro_player_remembers",!0,!1)
A.a0L=w([A.Rl],x.u)
A.S0=new B.cb(A.ak,A.Yp,null,null,null,A.a0L)
A.a0V=w([A.S0],x.J)
A.RE=new B.cY("Stranger",A.a0V)
A.a1A=w(["I was on my way to the docks when I found you. I was sure you were dead...","The doctor has been by to check on you. Your body, he says, will heal, but he cannot explain your memory loss.","Now that you are awake, do you remember anything about what happened to you?"],x.s)
A.Rd=new B.cB("Try to remember","intro_recall_prince_face",!0,!1)
A.a1D=w([A.Rd],x.u)
A.RV=new B.cb(A.ak,A.a1A,null,null,null,A.a1D)
A.a1S=w([A.RV],x.J)
A.RF=new B.cY("Mateo",A.a1S)
A.a_L=w(["The British officer drove his blade into you and threw you overboard.","Through fading vision, you watched the British naval ship sail away and leave you to the sea."],x.s)
A.Rh=new B.cB("Wake up","intro_return_to_stranger",!0,!1)
A.a25=w([A.Rh],x.u)
A.Sa=new B.cb(A.ak,A.a_L,null,null,null,A.a25)
A.Zw=w([A.Sa],x.J)
A.RG=new B.cY("Narrator",A.Zw)
A.a_k=w(["What happened to the treasure? This is not the island we saw from the water.","The golden shore twists into black rock as the welcoming lights vanish behind us.","Sirens... They lured us here. This entire island was a trap."],x.s)
A.RX=new B.cb(A.ak,A.a_k,null,null,null,A.ec)
A.Z_=w([A.RX],x.J)
A.RH=new B.cY("Player",A.Z_)
A.a1_=w(["You awake beneath clean blankets in an unfamiliar bedroom. Your wound aches beneath fresh bandages.","Unsteady but determined, you rise from the bed and find your footing. Your limbs scream in pain, but your mind screams louder.","You hear a firm knock on the door."],x.s)
A.Rn=new B.cB("Look at the door.","intro_mateo_enters_bedroom",!0,!1)
A.a10=w([A.Rn],x.u)
A.S3=new B.cb(A.ak,A.a1_,null,null,null,A.a10)
A.a1P=w([A.S3],x.J)
A.RI=new B.cY("Narrator",A.a1P)
A.Yl=w(["Lightning tears across the water as the Kraken returns, charged with violent energy.","This encounter will become the Kraken's second phase."],x.s)
A.R7=new B.cB("Face the Electro Kraken","start_electro_kraken_fight",!0,!1)
A.a_n=w([A.R7],x.u)
A.S6=new B.cb(A.ak,A.Yl,null,null,null,A.a_n)
A.a09=w([A.S6],x.J)
A.RJ=new B.cY("Electro Kraken",A.a09)
A.XO=w(["Welcome, captain. My forge supplies steel for both the dueling deck and the gun deck.","You can buy weapons, stock special cannonballs, or commission cannon upgrades using iron ore.","Would you like to browse my wares?"],x.s)
A.R4=new B.cB("Browse blacksmith shop","open_spanish_blacksmith_menu",!0,!1)
A.a0B=w([A.R4,A.jk],x.u)
A.RQ=new B.cb(A.ak,A.XO,null,null,null,A.a0B)
A.a_A=w([A.RQ],x.J)
A.RK=new B.cY("Blacksmith",A.a_A)
A.a1T=w(["My name is Mateo. I found you washed ashore, but I have no idea how long you have been there.","You were stabbed in the side, and your lungs were full of water. I cannot believe you are alive. I did what I could, but you need rest."],x.s)
A.R6=new B.cB("Thank him","intro_player_thanks_mateo",!0,!1)
A.a__=w([A.R6],x.u)
A.Sb=new B.cb(A.ak,A.a1T,null,null,null,A.a__)
A.a1E=w([A.Sb],x.J)
A.RL=new B.cY("Mateo",A.a1E)
A.Z3=w(["Britain rises on the horizon.","Behind you, the ships of your fleet cut through the waves in battle formation. Every sail is set toward the kingdom that cast you into the sea.","The king and prince who tried to erase you wait beyond those shores. At last, you have returned to face them.","This is no raid for gold. Before this day is over, the fate of Britain will be decided."],x.s)
A.Rm=new B.cB("Face the British fleet","outro_show_british_fleet",!0,!1)
A.a13=w([A.Rm],x.u)
A.S2=new B.cb(A.ak,A.Z3,null,null,null,A.a13)
A.XI=w([A.S2],x.J)
A.RM=new B.cY("Narrator",A.XI)
A.Xr=w(["You won't be missed. Goodbye."],x.s)
A.R3=new B.cB("Continue","intro_blur_to_british_naval_ship",!0,!1)
A.a1M=w([A.R3],x.u)
A.S4=new B.cb(A.ak,A.Xr,null,null,null,A.a1M)
A.Zq=w([A.S4],x.J)
A.RN=new B.cY("British Officer",A.Zq)
A.XK=w(["The dead do not welcome warm blood among their graves.","The earth splits as the Necromancer raises a crew of forgotten sailors around you.","Leave now, or join them beneath the soil."],x.s)
A.R9=new B.cB("Challenge the Necromancer","start_necromancer_fight",!0,!1)
A.a1v=w([A.R9],x.u)
A.S7=new B.cb(A.ak,A.XK,null,null,null,A.a1v)
A.Zp=w([A.S7],x.J)
A.RO=new B.cY("The Necromancer",A.Zp)
A.T6=new C.aj(18,9,18,9)
A.T8=new C.aj(20,16,12,12)
A.Th=new C.aj(6,7,6,7)
A.V7=new C.an(62447,"MaterialIcons",!1)
A.Wc=new C.aQ(A.V7,64,D.i,null,null,null)
A.a4G=new C.ld(1,"below")
A.a4H=new C.ld(2,"left")
A.a4I=new C.ld(3,"right")
A.YB=w([D.k8,A.a4G,A.a4H,A.a4I],x.b)
A.Ro=new B.cB("Continue talking","intro_mateo_sits_at_desk",!0,!1)
A.Zi=w([A.Ro],x.u)
A.IV=new C.bb(0,D.K,D.mc,R.cN,8)
A.a00=w([A.IV],C.T("m<bb>"))
A.Rc=new B.cB("Continue","intro_stranger_introduces_himself",!0,!1)
A.a1F=w([A.Rc],x.u)
A.a5d=new C.ff(D.K,15)
A.a5e=new C.ff(D.K,2)
A.a6h=new C.c(0,-155)
A.a89=new C.c(472,326)
A.Lz=new C.h(1,1,0.9058823529411765,0.6901960784313725,D.c)
A.ahc=new C.fi(D.l,D.bS,2)
A.ZK=w([A.ahc],C.T("m<fi>"))
A.Gx=new C.t(!0,A.Lz,null,null,null,null,14,D.V,null,0.7,null,null,1,null,null,null,null,null,null,null,null,null,A.ZK,null,null,null)
A.apf=new C.af("Back",null,null,null,null,null,null,null,null,null)
A.apX=new C.af("Return",null,null,null,null,null,null,null,null,null)
A.ak9=new C.t(!0,D.X,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.aqj=new C.af("This map is being built.",null,A.ak9,null,null,null,null,null,null,null)
A.PW=new C.h(1,0.984313725490196,0.9137254901960784,0.9058823529411765,D.c)
A.NS=new C.h(1,1,0.8,0.7372549019607844,D.c)
A.OX=new C.h(1,1,0.6705882352941176,0.5686274509803921,D.c)
A.Og=new C.h(1,1,0.5411764705882353,0.396078431372549,D.c)
A.Pw=new C.h(1,1,0.3411764705882353,0.13333333333333333,D.c)
A.Mp=new C.h(1,0.9568627450980393,0.3176470588235294,0.11764705882352941,D.c)
A.a58=new C.bS([50,A.PW,100,A.NS,200,A.OX,300,A.Og,400,F.e3,500,A.Pw,600,A.Mp,700,N.rW,800,F.rm,900,N.rV],C.T("bS<z,h>"))
A.a5m=new C.oJ(A.a58,1,1,0.3411764705882353,0.13333333333333333,D.c)
A.amf=new C.t(!0,A.a5m,null,null,null,null,null,D.bC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.aqw=new C.af("EFFECT NOT YET IMPLEMENTED",null,A.amf,null,null,null,null,null,null,null)
A.asg=new C.bQ("compact-hotspot-bar",C.T("bQ<J>"))
A.asR=new B.Ib(null)
A.atj=new B.pU(y.c,0.69,0.72,null)
A.atk=new B.pU(y.c,0.35,0.55,null)
A.atl=new B.pU(y.b,0.72,0.55,null)
A.atm=new B.pU(y.b,0.39,0.72,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bdO","aO0",()=>{var v=C.Rt()
v.xU(526,-20)
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
w($,"bdP","aXL",()=>{var v,u,t,s=C.Rt()
s.xU(493,83)
s.fl(454,104)
s.fl(439,139)
v=C.Rt()
v.xU(468,196)
v.fl(427,219)
v.fl(405,252)
u=C.Rt()
u.xU(486,218)
u.fl(520,243)
u.fl(537,276)
t=C.Rt()
t.xU(480,278)
t.fl(446,294)
t.fl(432,317)
return C.b([s,v,u,t],C.T("m<oV>"))})})()};
(a=>{a["aNXDa98zPpom+p1BtsNmsGSMxAQ="]=a.current})($__dart_deferred_initializers__);