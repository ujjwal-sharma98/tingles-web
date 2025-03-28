import{n as w,j as r,o as Q,p as X,r as m,q as H,t as N,v as Z,w as A,x as D,y as T,z as G,S as _,A as ee,D as re,E as M,F,L as ae,T as b,G as te,H as P,I as W,u as oe,b as se,J as le,K as y,M as ne,N as ie,C as ce,O as de,P as n,Q as v,R as O,U as q,V as E,W as B,X as V,B as ue,Y as pe}from"./index-DqQgmcma.js";const me=w(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),he=w(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),xe=w(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ye(a){return X("MuiCheckbox",a)}const L=Q("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ve=a=>{const{classes:t,indeterminate:o,color:l,size:i}=a,e={root:["root",o&&"indeterminate",`color${T(l)}`,`size${T(i)}`]},s=G(e,ye,t);return{...t,...s}},fe=D(_,{shouldForwardProp:a=>ee(a)||a==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,o.indeterminate&&t.indeterminate,t[`size${T(o.size)}`],o.color!=="default"&&t[`color${T(o.color)}`]]}})(re(({theme:a})=>({color:(a.vars||a).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:M(a.palette.action.active,a.palette.action.hoverOpacity)}}},...Object.entries(a.palette).filter(F()).map(([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:M(a.palette[t].main,a.palette.action.hoverOpacity)}}})),...Object.entries(a.palette).filter(F()).map(([t])=>({props:{color:t},style:{[`&.${L.checked}, &.${L.indeterminate}`]:{color:(a.vars||a).palette[t].main},[`&.${L.disabled}`]:{color:(a.vars||a).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),ge=r.jsx(he,{}),be=r.jsx(me,{}),Ce=r.jsx(xe,{}),je=m.forwardRef(function(t,o){const l=H({props:t,name:"MuiCheckbox"}),{checkedIcon:i=ge,color:e="primary",icon:s=be,indeterminate:h=!1,indeterminateIcon:f=Ce,inputProps:R,size:g="medium",disableRipple:C=!1,className:$,slots:j={},slotProps:k={},...S}=l,c=h?f:s,d=h?f:i,u={...l,disableRipple:C,color:e,indeterminate:h,size:g},x=ve(u),p=k.input??R,[U,z]=N("root",{ref:o,elementType:fe,className:A(x.root,$),shouldForwardComponentProp:!0,externalForwardedProps:{slots:j,slotProps:k,...S},ownerState:u,additionalProps:{type:"checkbox",icon:m.cloneElement(c,{fontSize:c.props.fontSize??g}),checkedIcon:m.cloneElement(d,{fontSize:d.props.fontSize??g}),disableRipple:C,slots:j,slotProps:{input:Z(typeof p=="function"?p(u):p,{"data-indeterminate":h})}}});return r.jsx(U,{...z,classes:x})}),ke=a=>{const{classes:t,inset:o,primary:l,secondary:i,dense:e}=a;return G({root:["root",o&&"inset",e&&"dense",l&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},te,t)},Se=D("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[{[`& .${P.primary}`]:t.primary},{[`& .${P.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${W.root}:where(& .${P.primary})`]:{display:"block"},[`.${W.root}:where(& .${P.secondary})`]:{display:"block"},variants:[{props:({ownerState:a})=>a.primary&&a.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:a})=>a.inset,style:{paddingLeft:56}}]}),Ie=m.forwardRef(function(t,o){const l=H({props:t,name:"MuiListItemText"}),{children:i,className:e,disableTypography:s=!1,inset:h=!1,primary:f,primaryTypographyProps:R,secondary:g,secondaryTypographyProps:C,slots:$={},slotProps:j={},...k}=l,{dense:S}=m.useContext(ae);let c=f??i,d=g;const u={...l,disableTypography:s,inset:h,primary:!!c,secondary:!!d,dense:S},x=ke(u),p={slots:$,slotProps:{primary:R,secondary:C,...j}},[U,z]=N("root",{className:A(x.root,e),elementType:Se,externalForwardedProps:{...p,...k},ownerState:u,ref:o}),[J,I]=N("primary",{className:x.primary,elementType:b,externalForwardedProps:p,ownerState:u}),[Y,K]=N("secondary",{className:x.secondary,elementType:b,externalForwardedProps:p,ownerState:u});return c!=null&&c.type!==b&&!s&&(c=r.jsx(J,{variant:S?"body2":"body1",component:I!=null&&I.variant?void 0:"span",...I,children:c})),d!=null&&d.type!==b&&!s&&(d=r.jsx(Y,{variant:"body2",color:"textSecondary",...K,children:d})),r.jsxs(U,{...z,children:[c,d]})}),Pe=["JavaScript","React","Node.js","MongoDB","CSS","HTML"],Ne=()=>{const a=oe(),{user:t}=se(s=>s.profileReducer),[o,l]=m.useState(!0),i=le({firstName:y().min(4,"At least 4 characters").max(50).required("Required"),lastName:y().max(50,"Maximum 50 characters"),emailId:y().email("Invalid email").required("Required"),age:ne().min(18,"You must be at least 18").required("Required"),gender:y().oneOf(["male","female","other"],"Invalid gender").required("Required"),photoUrl:y().url("Invalid URL"),about:y()}),e=ie({initialValues:{firstName:"",lastName:"",emailId:"",age:"",gender:"",photoUrl:"",about:"",skills:[]},validationSchema:i,onSubmit:s=>{alert("Profile Updated Successfully!"),a(pe(s))}});return m.useEffect(()=>{t&&(e.setValues({firstName:t.firstName||"",lastName:t.lastName||"",emailId:t.emailId||"",about:t.about||"about...",skills:t.skills||[],gender:t.gender||"",age:t.age||null,photoUrl:t.photoUrl||""}),l(!1))},[t]),r.jsxs(ce,{maxWidth:"sm",sx:{mt:5},children:[r.jsx(b,{variant:"h4",align:"center",gutterBottom:!0,children:"Edit Profile"}),o?r.jsx(de,{sx:{display:"block",margin:"auto"}}):r.jsx("form",{onSubmit:e.handleSubmit,children:r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{item:!0,xs:12,sm:6,children:r.jsx(v,{label:"First Name",name:"firstName",fullWidth:!0,variant:"outlined",value:e.values.firstName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.firstName&&!!e.errors.firstName,helperText:e.touched.firstName&&e.errors.firstName})}),r.jsx(n,{item:!0,xs:12,sm:6,children:r.jsx(v,{label:"Last Name",name:"lastName",fullWidth:!0,variant:"outlined",value:e.values.lastName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.lastName&&!!e.errors.lastName,helperText:e.touched.lastName&&e.errors.lastName})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(v,{label:"Email",name:"emailId",fullWidth:!0,variant:"outlined",value:e.values.emailId,disabled:!0})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(v,{label:"Age",name:"age",type:"number",fullWidth:!0,variant:"outlined",value:e.values.age,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.age&&!!e.errors.age,helperText:e.touched.age&&e.errors.age})}),r.jsx(n,{item:!0,xs:12,children:r.jsxs(O,{fullWidth:!0,error:e.touched.gender&&!!e.errors.gender,children:[r.jsx(q,{children:"Gender"}),r.jsxs(E,{name:"gender",value:e.values.gender,onChange:e.handleChange,onBlur:e.handleBlur,children:[r.jsx(B,{value:"male",children:"Male"}),r.jsx(B,{value:"female",children:"Female"}),r.jsx(B,{value:"other",children:"Other"})]}),r.jsx(V,{children:e.touched.gender&&e.errors.gender})]})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(v,{label:"Profile Picture URL",name:"photoUrl",fullWidth:!0,variant:"outlined",value:e.values.photoUrl,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.photoUrl&&!!e.errors.photoUrl,helperText:e.touched.photoUrl&&e.errors.photoUrl})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(v,{label:"About",name:"about",multiline:!0,rows:2,fullWidth:!0,variant:"outlined",value:e.values.about,onChange:e.handleChange})}),r.jsx(n,{item:!0,xs:12,children:r.jsxs(O,{fullWidth:!0,error:e.touched.skills&&!!e.errors.skills,children:[r.jsx(q,{children:"Skills"}),r.jsx(E,{multiple:!0,name:"skills",value:e.values.skills,onChange:e.handleChange,renderValue:s=>s.join(", "),children:Pe.map(s=>r.jsxs(B,{value:s,children:[r.jsx(je,{checked:e.values.skills.includes(s)}),r.jsx(Ie,{primary:s})]},s))}),r.jsx(V,{children:e.touched.skills&&e.errors.skills})]})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(ue,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Save Changes"})})]})})]})};export{Ne as default};
