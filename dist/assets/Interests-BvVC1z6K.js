import{u as h,b as l,r as u,h as m,j as t,C as x,T as a,c as p,d as j,e as f,g,B as o,i as c}from"./index-DqQgmcma.js";function I(){const s=h(),{interestedPeople:r}=l(e=>e.interestsReducer);u.useEffect(()=>{s(m())},[s]);const n=e=>{s(c({status:"rejected",requestId:e}))},i=e=>{s(c({status:"accepted",requestId:e}))};return t.jsxs(x,{maxWidth:"sm",sx:{mt:5},children:[t.jsx(a,{variant:"h4",gutterBottom:!0,align:"center",children:"Interests"}),t.jsxs(a,{variant:"h6",gutterBottom:!0,align:"center",children:[r.length>0?r.length:"No"," ",r.length===""?"user":"users"," found !!"]}),r.map((e,d)=>t.jsxs(p,{sx:{mb:3,boxShadow:3},children:[t.jsx(j,{component:"img",height:"150",image:e.fromUserId.photoUrl||"https://via.placeholder.com/150",alt:e.fromUserId.firstName,sx:{objectFit:"cover"}}),t.jsxs(f,{children:[t.jsx(a,{variant:"h6",children:e.fromUserId.firstName}),t.jsxs(a,{color:"textSecondary",children:[e.fromUserId.age," years"]})]}),t.jsxs(g,{children:[t.jsx(o,{variant:"contained",color:"primary",onClick:()=>n(e._id),children:"Reject"}),t.jsx(o,{variant:"contained",color:"primary",onClick:()=>i(e._id),children:"Accept"})]})]},d))]})}export{I as default};
