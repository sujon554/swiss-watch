(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(38),i=c.n(n),r=(c(106),c(13)),l=c(16),j=(c(107),c(11)),o=c(40),d=c(93),b={apiKey:"AIzaSyC-bQUWUUt2yxXluqGBVC6YzOljya9tiAU",authDomain:"watch-4befc.firebaseapp.com",projectId:"watch-4befc",storageBucket:"watch-4befc.appspot.com",messagingSenderId:"112131637849",appId:"1:112131637849:web:ffd70c24cf94d26cf2a748"};(function(){Object(d.a)(b)})();var h=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(j.a)(n,2),r=i[0],l=i[1],d=Object(a.useState)(""),b=Object(j.a)(d,2),h=b[0],x=b[1],O=Object(a.useState)(!1),m=Object(j.a)(O,2),u=m[0],p=m[1],f=Object(o.c)();Object(a.useEffect)((function(){var e=Object(o.d)(f,(function(e){s(e||{}),l(!1)}));return function(){return e}}),[]);var g=function(e,t,c){var a={email:e,displayName:t};fetch("https://ancient-citadel-32341.herokuapp.com/users",{method:c,headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then()};return Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/users/".concat(c.email)).then((function(e){return e.json()})).then((function(e){return p(e.admin)}))}),[c.email]),{user:c,admin:u,logOut:function(){l(!0),Object(o.g)(f).then((function(){})).finally((function(){return l(!1)}))},authError:h,isLoading:r,registerUser:function(e,t,c,a){l(!0),Object(o.b)(f,e,t).then((function(t){x(""),s({email:e,displayName:c}),g(e,c,"POST"),Object(o.h)(f.currentUser,{displayName:c}).then((function(){})).catch((function(e){})),a.replace("/")})).catch((function(e){x(e.message)})).finally((function(){return l(!1)}))},logInUser:function(e,t,c,a){l(!0),Object(o.e)(f,e,t).then((function(e){var t,s=(null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)||"/";a.replace(s),x("")})).catch((function(e){x(e.message)})).finally((function(){return l(!1)}))},registerWithEmail:function(e,t){Object(o.b)(f,e,t).then((function(e){})).catch((function(e){}))},signInUsingGoogle:function(e,t){l(!0);var c=new o.a;Object(o.f)(f,c).then((function(e){var t=e.user;g(t.email,t.displayName,"PUT"),x("")})).catch((function(e){x(e.message)})).finally((function(){return l(!1)}))}}},x=c(0),O=Object(a.createContext)(),m=function(e){var t=e.children,c=h();return Object(x.jsx)(O.Provider,{value:c,children:t})},u=c(165),p=(c(110),function(){return Object(x.jsx)("div",{className:"container my-5",children:Object(x.jsxs)("div",{className:"contacts-container",children:[Object(x.jsxs)("div",{className:"contacts",children:[Object(x.jsx)("h1",{children:"Contacts Us"}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)("input",{className:"w-50 p-2",placeholder:"Enter Name",type:"text"})]}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)("input",{className:"w-50 p-2",placeholder:"Enter Mail",type:"mail"})]}),Object(x.jsxs)("p",{children:[" ",Object(x.jsx)("input",{className:"w-50 p-2",placeholder:"Subject",type:"text"})]}),Object(x.jsx)("textarea",{className:"p-2",placeholder:"Type your Messese here...",id:"",cols:"45",rows:"10"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{className:"btn-primary p-3 px-5",children:"Send"})]}),Object(x.jsxs)("div",{className:"office",children:[Object(x.jsx)("h1",{children:"Our Office"}),Object(x.jsx)("p",{children:"We are egarly wants to meet with you. You are most welcome to visit our office. We are just offering you to drink a cup of tea with us. Thank You"}),Object(x.jsx)("h3",{children:"Address"}),Object(x.jsx)("p",{children:"184, Senpara Parbata, Razia Plaza, 4th floor, Mirpur-10, Dhaka-1216, Bangladesh"}),Object(x.jsx)("h3",{children:"Phone number:"}),Object(x.jsx)("p",{children:"02-9032597"}),Object(x.jsx)("p",{children:"+88-01711927829"}),Object(x.jsx)("p",{children:"+88-01971927829"}),Object(x.jsx)("h3",{children:"E-mail"}),Object(x.jsx)("p",{children:"info@nebulas-it.com"}),Object(x.jsx)("p",{children:"nebulasbd@gmail.com"})]})]})})}),f=c(166),g=c(167),N=c(94),v=c(174),w=(c(111),function(){return Object(a.useContext)(O)}),y=c(176),A=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=w().user;Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/myorders?email=".concat(n.email)).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);return Object(x.jsx)("div",{children:Object(x.jsxs)(f.a,{children:[Object(x.jsxs)("h1",{children:["Your ",Object(x.jsx)("strong",{className:"text-info",children:"Orders"})]}),Object(x.jsxs)("h3",{className:"my-5",children:["Total Orders ",c.length]}),Object(x.jsx)(g.a,{className:"g-5",children:c.map((function(e){return Object(x.jsx)(N.a,{sm:2,md:4,xl:3,order:e,children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(y.a.Img,{variant:"top",src:e.singleWatchImg}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:e.singleWatchName}),Object(x.jsx)(y.a.Title,{children:e.singleWatchPrice}),Object(x.jsx)(y.a.Title,{children:"Booked By"}),Object(x.jsx)(y.a.Title,{children:e.userName}),Object(x.jsx)(y.a.Text,{className:"text-danger",children:e.userEmail}),Object(x.jsx)(u.a,{onClick:function(){return t=e._id,console.log(t),void(window.confirm("Are you sure, you want to delete this package?")&&fetch("https://ancient-citadel-32341.herokuapp.com/myorders/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.deletedCount>0){var a=c.filter((function(e){return e._id!==t}));console.log(a),s(a)}})));var t},variant:"danger",size:"sm",children:"Cancel"})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("small",{className:"text-muted text-center",children:e.bookedServiceStatus})})]})},e._id)}))})]})})},S=c(5),E=c(54),k=c.n(E),T=c(173),B=c(55),C=function(){var e=Object(B.a)(),t=e.register,c=e.handleSubmit,s=e.reset,n=Object(a.useState)(),i=Object(j.a)(n,2),r=i[0],l=i[1],o=function(){l("")};return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"pt-5",children:[Object(x.jsxs)("h3",{className:"text-center text-dark mb-5 text-uppercase",children:["Add a new ",Object(x.jsx)("strong",{className:"text-info",children:"Review"})]}),Object(x.jsxs)(T.a,{className:"d-flex flex-column w-25 mx-auto",onSubmit:c((function(e){k.a.post("https://ancient-citadel-32341.herokuapp.com/reviews",e).then((function(e){e.data.insertedId&&(s(),l("Review Post Successfully !"))}))})),children:[Object(x.jsx)("textarea",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"Your Name"},t("UserName"))),Object(x.jsx)("textarea",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"Write your Review"},t("ReviewName"))),Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"Rating (out of 5)"},t("watchRating"))),Object(x.jsx)(u.a,{className:"w-50",variant:"success",type:"submit",children:"Add Review"})]}),Object(x.jsx)("p",{className:"text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4",children:r})]})})},R=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"This page Under construction"}),Object(x.jsx)("h2",{children:"Payment System coming soon at this page"})]})},I=function(){var e=Object(B.a)(),t=e.register,c=e.handleSubmit,s=e.reset,n=Object(a.useState)(),i=Object(j.a)(n,2),r=i[0],l=i[1],o=function(){l("")};return Object(x.jsxs)("div",{className:"pt-5",children:[Object(x.jsxs)("h3",{className:"text-center text-dark mb-5 text-uppercase",children:["add a new ",Object(x.jsx)("strong",{className:"text-info",children:"Watch"})]}),Object(x.jsxs)(T.a,{className:"d-flex flex-column w-25 mx-auto",onSubmit:c((function(e){k.a.post("https://ancient-citadel-32341.herokuapp.com/watches",e).then((function(e){e.data.insertedId&&(s(),l("Watch Added Successfully !"))}))})),children:[Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"Watch Name"},t("name"))),Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"Image URL"},t("img"))),Object(x.jsx)("textarea",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"About"},t("Description"))),Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"$ Price"},t("Price"))),Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},onClick:o,className:"mb-3 py-2 px-3",placeholder:"Rating (out of 5)"},t("star"))),Object(x.jsx)(u.a,{className:"w-50",variant:"success",type:"submit",children:"Add Watch"})]}),Object(x.jsx)("p",{className:"text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4",children:r})]})},P=c(96),D=c.n(P),U=c(177),W=c(95),G=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(x.jsxs)(f.a,{children:[Object(x.jsx)("h1",{children:"Make Admin"}),Object(x.jsx)(T.a,{onSubmit:function(e){var t={email:c};fetch("https://ancient-citadel-32341.herokuapp.com/users/admin",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount&&(console.log(e),D.a.fire({position:"top-center",icon:"success",title:"Admin added successfully!",showConfirmButton:!1,timer:2500}))})),e.preventDefault()},className:"d-flex justify-content-center my-5",children:Object(x.jsxs)(U.a,{className:"mb-3 w-50",children:[Object(x.jsx)(W.a,{onBlur:function(e){s(e.target.value)},placeholder:"Enter E-mail"}),Object(x.jsx)(u.a,{variant:"success",type:"submit",children:"Make Admin"})]})})]})},L=c(168),H=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/watches").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);return Object(x.jsxs)(f.a,{children:[Object(x.jsxs)("h1",{children:["Manage ",Object(x.jsx)("strong",{className:"text-info",children:"All Watches"})]}),Object(x.jsxs)("h3",{children:["Total All Orders ",c.length]}),Object(x.jsx)(g.a,{className:"g-5",children:Object(x.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"light",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Watch Name"}),Object(x.jsx)("th",{children:"Watch Price"}),Object(x.jsx)("th",{children:"Ratings"}),Object(x.jsx)("th",{children:"Watch Cancel"})]})}),Object(x.jsx)("tbody",{children:c.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.Price}),Object(x.jsxs)("td",{children:[e.star," ",Object(x.jsx)("i",{className:"text-warning fas fa-star"})," "]}),Object(x.jsx)("td",{children:Object(x.jsx)(u.a,{className:"bg-danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure, you want to delete this Watch?")&&fetch("https://ancient-citadel-32341.herokuapp.com/watches/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount>0){var a=c.filter((function(e){return e._id!==t}));s(a)}})));var t},children:"Cancel"})})]})}))})]})})]})},z=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(j.a)(n,2),r=i[0],l=i[1],o=Object(a.useState)("Approved"),d=Object(j.a)(o,2),b=d[0],h=d[1];Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/allorders").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[r]);return Object(x.jsxs)(f.a,{children:[Object(x.jsxs)("h1",{children:["Manage ",Object(x.jsx)("strong",{className:"text-info",children:"All Orders"})]}),Object(x.jsxs)("h3",{children:["Total All Orders ",c.length]}),Object(x.jsx)(g.a,{className:"g-5",children:c.map((function(e){return Object(x.jsx)(N.a,{sm:2,md:4,order:e,children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(y.a.Img,{variant:"top",src:e.singleWatchImg}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:e.singleWatchName}),Object(x.jsx)(y.a.Title,{children:e.singleWatchPrice}),Object(x.jsx)(y.a.Title,{children:"Booked By"}),Object(x.jsx)(y.a.Title,{children:e.userName}),Object(x.jsx)(y.a.Text,{className:"text-danger",children:e.userEmail}),Object(x.jsx)(u.a,{className:"m-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure, you want to approve this package?")&&(h(b),fetch("https://ancient-citadel-32341.herokuapp.com/updateStatus/".concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({status:b})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.matchedCount&&l(!r)}))));var t},variant:"success",size:"sm",children:"Approved"}),Object(x.jsx)(u.a,{className:"m-2",onClick:function(){return t=e._id,console.log(t),void(window.confirm("Are you sure, you want to delete this package?")&&fetch("https://ancient-citadel-32341.herokuapp.com/allorders/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.deletedCount>0){var a=c.filter((function(e){return e._id!==t}));console.log(a),s(a)}})));var t},variant:"danger",size:"sm",children:"Cancel"})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("small",{className:"text-muted text-center",children:e.bookedServiceStatus})})]})},e._id)}))})]})},M=function(){var e=w(),t=e.logOut,c=e.admin,a=Object(l.j)(),s=a.path,n=a.url;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsxs)("h1",{className:"text-center mt-3 mb-3  text-uppercase display-6",children:["dash",Object(x.jsx)("strong",{className:"text-info",children:"board"})]})}),Object(x.jsx)("hr",{className:"new"}),Object(x.jsx)(f.a,{className:"mt-4 mb-5 pb-5",children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(N.a,{sm:2,xl:2,lg:2,children:Object(x.jsx)("div",{className:"pt-5 px-2",children:Object(x.jsxs)(v.a,{className:"d-grid me-auto",children:[Object(x.jsx)(r.c,{className:"mb-3 dashboard text-decoration-none",to:"".concat(n,"/yourorders"),children:"Your Orders"}),Object(x.jsx)(r.c,{className:" mb-3 dashboard text-decoration-none",to:"".concat(n,"/payment"),children:"Payment"}),Object(x.jsx)(r.c,{className:" mb-3 dashboard text-decoration-none",to:"".concat(n,"/addreview"),children:"Add Review"}),c&&Object(x.jsxs)(v.a,{children:[Object(x.jsx)(r.c,{className:" mb-3 dashboard text-decoration-none",to:"".concat(n,"/addnewproduct"),children:"Add New Product"}),Object(x.jsx)(r.c,{className:" mb-3 dashboard text-decoration-none",to:"".concat(n,"/manageallorders"),children:"Manage All Orders"}),Object(x.jsx)(r.c,{className:" mb-3 dashboard text-decoration-none",to:"".concat(n,"/manageallproducts"),children:"Manage All Watchs"}),Object(x.jsx)(r.c,{className:" mb-3 dashboard text-decoration-none",to:"".concat(n,"/makeadmin"),children:"Make Admin"})]}),Object(x.jsx)(r.c,{onClick:t,className:" mb-3 text-decoration-none",to:"/home",children:Object(x.jsx)(u.a,{size:"sm",variant:"warning mt-3 px-4",children:"Log Out"})})]})})}),Object(x.jsx)(N.a,{sm:10,xl:10,lg:10,children:Object(x.jsx)("div",{className:"menubar px-5 w-100",children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{exact:!0,path:s,children:Object(x.jsx)(A,{})}),Object(x.jsx)(l.b,{exact:!0,path:"".concat(s,"/yourorders"),children:Object(x.jsx)(A,{})}),Object(x.jsx)(l.b,{path:"".concat(s,"/addreview"),children:Object(x.jsx)(C,{})}),Object(x.jsx)(l.b,{path:"".concat(s,"/payment"),children:Object(x.jsx)(R,{})}),Object(x.jsx)(l.b,{path:"".concat(s,"/addnewproduct"),children:Object(x.jsx)(I,{})}),Object(x.jsx)(l.b,{path:"".concat(s,"/manageallproducts"),children:Object(x.jsx)(H,{})}),Object(x.jsx)(l.b,{path:"".concat(s,"/manageallorders"),children:Object(x.jsx)(z,{})}),Object(x.jsx)(l.b,{path:"".concat(s,"/makeadmin"),children:Object(x.jsx)(G,{})})]})})})]})})]})},Y=c(169),F=c.p+"static/media/blog1.46c3b6de.jpg",q=c.p+"static/media/blog2.866c79d5.jpg",Q=c.p+"static/media/blog5.bfa7a76e.jpg",X=c.p+"static/media/blog4.9748bac3.jpg",V=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(N.a,{className:"my-5",children:[Object(x.jsx)("h2",{children:"OUR BLOG"}),Object(x.jsx)("p",{children:"________________________"}),Object(x.jsx)("h5",{children:"HAPPENINGS AROUND"})]}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(Y.a,{children:[Object(x.jsxs)(y.a,{className:"m-2",children:[Object(x.jsx)(y.a.Img,{variant:"top",src:F}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:"CREATORS OF THE MAN MADE WATCHES"}),Object(x.jsx)(y.a.Text,{children:"Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Elementum nisi quis."})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(x.jsxs)(y.a,{className:"m-2",children:[Object(x.jsx)(y.a.Img,{variant:"top",src:q}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:"A LUBRICANT-FREE WATCH FOR PERFECT MEN"}),Object(x.jsx)(y.a.Text,{children:"Aliquam sem et tortor consequat id porta nibh venenatis cras. Mollis aliquam ut porttitor leo a diam sollicitudin. Venenatis lectus magna fringilla urn."})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(x.jsxs)(y.a,{className:"m-2",children:[Object(x.jsx)(y.a.Img,{variant:"top",src:Q}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:"MODERN DIGITAL JUMP-SECONDS DISPLAY"}),Object(x.jsx)(y.a.Text,{children:"Maecenas volutpat blandit aliquam etiam. Integer malesuada nunc vel risus commodo viverra maecenas. Gravida quis blandit turpis cursus in."})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(x.jsxs)(y.a,{className:"m-2",children:[Object(x.jsx)(y.a.Img,{variant:"top",src:X}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:"MODERN DIGITAL JUMP-SECONDS DISPLAY"}),Object(x.jsx)(y.a.Text,{children:"Maecenas volutpat blandit aliquam etiam. Integer malesuada nunc vel risus commodo viverra maecenas. Gravida quis blandit turpis cursus in."})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})})]})},J=c(56),Z=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/watches").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(x.jsxs)(f.a,{className:"my-5 mb-3 py-3",children:[Object(x.jsx)("h1",{className:"text-warning my-5",children:"WATCHES"}),Object(x.jsx)(g.a,{xs:1,md:3,className:"g-4",children:c.slice(0,6).map((function(e){return Object(x.jsx)(N.a,{watch:e,children:Object(x.jsxs)("div",{children:[Object(x.jsx)(y.a.Img,{height:"300",width:"250",variant:"top",src:e.img}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:e.name}),Object(x.jsx)("h6",{children:e.Price}),Object(x.jsx)(y.a.Text,{children:e.Description}),Object(x.jsx)(J.a,{initialRating:e.star,readonly:!0,emptySymbol:"far fa-star text-warning",fullSymbol:"fas fa-star text-warning"})]}),Object(x.jsx)(r.b,{to:"/singleproduct/".concat(e._id),children:Object(x.jsx)(u.a,{className:"px-5 py-2",children:"Buy Now"})})]})},e._id)}))})]})},_=c(100),K=c.n(_),$=(c(161),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/reviews").then((function(e){return e.json()})).then((function(e){return s(e)})),console.log(c)}),[]),Object(x.jsx)("div",{className:"review",children:Object(x.jsxs)(f.a,{className:"my-5",children:[Object(x.jsx)("h2",{className:"mb-5 text-",children:"CLIENTS REVIEWS"}),Object(x.jsx)(K.a,Object(S.a)(Object(S.a)({},{className:"center",dots:!0,centerMode:!0,infinite:!0,centerPadding:"40px",slidesToShow:4,speed:500}),{},{children:c.map((function(e){return Object(x.jsxs)("div",{review:e,children:[Object(x.jsx)("h3",{children:e.UserName}),Object(x.jsx)("h6",{children:e.ReviewName}),Object(x.jsx)(J.a,{initialRating:e.watchRating,readonly:!0,emptySymbol:"far fa-star text-warning",fullSymbol:"fas fa-star text-warning"})]},e._id)}))}))]})})}),ee=c(175),te=c.p+"static/media/slider1.6951b89a.jpg",ce=c.p+"static/media/slider2.4bc5ac7b.jpg",ae=c.p+"static/media/slide-3.1ec2cfd0.jpg",se=function(){return Object(x.jsxs)(ee.a,{children:[Object(x.jsxs)(ee.a.Item,{children:[Object(x.jsx)("img",{className:"d-block w-100",src:te,alt:"Second slide"}),Object(x.jsxs)(ee.a.Caption,{children:[Object(x.jsx)("h1",{children:"THE WATCH EVERYONE DESIRE"}),Object(x.jsx)("p",{children:"Rolex watches are crafted from the finest raw materials and assembled with scrupulous attention to detail. Discover the Rolex collection on the Official ."})]})]}),Object(x.jsxs)(ee.a.Item,{interval:500,children:[Object(x.jsx)("img",{className:"d-block w-100",src:ce,alt:"Second slide"}),Object(x.jsxs)(ee.a.Caption,{children:[Object(x.jsx)("h1",{children:"AN EXTRAORDINARY CLASSIC"}),Object(x.jsx)("p",{children:"Rolex SA is a British-founded Swiss watch designer & manufacturer Switzerland. Founded in 1905 as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London"})]})]}),Object(x.jsxs)(ee.a.Item,{children:[Object(x.jsx)("img",{className:"d-block w-100",src:ae,alt:"Third slide"}),Object(x.jsxs)(ee.a.Caption,{children:[Object(x.jsx)("h1",{children:"WATCH FOR HIGH-TECH PROPLE"}),Object(x.jsx)("p",{children:"Rolex watches are crafted from the finest raw materials and assembled with scrupulous attention to detail. Discover the Rolex collection on the Official ."})]})]})]})},ne=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(se,{}),Object(x.jsx)(Z,{}),Object(x.jsx)($,{}),Object(x.jsx)(V,{})]})},ie=function(){var e=Object(l.i)().id,t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],n=c[1],i=w().user,o=Object(B.a)(),d=o.register,b=o.handleSubmit;Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/watches/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}))}),[e]);return Object(x.jsxs)(f.a,{className:"d-flex",children:[Object(x.jsx)(r.b,{to:"/watches",children:Object(x.jsx)(u.a,{children:"Back Watch Page"})}),Object(x.jsxs)("div",{className:"mb-5",children:[Object(x.jsx)("img",{src:s.img,alt:""}),Object(x.jsxs)("h2",{className:"mt-5",children:["Watch Name ",s.name]}),Object(x.jsxs)("h1",{className:"my-3",children:["Price: ",s.Price]}),Object(x.jsx)("p",{className:"mb-5",children:s.Description})]}),Object(x.jsx)("div",{children:Object(x.jsxs)(T.a,{className:"d-flex flex-column mx-auto",onSubmit:b((function(e){console.log(e),k.a.post("https://ancient-citadel-32341.herokuapp.com/allorders",e).then((function(e){e.data.insertedId&&alert("Package Booked Successfully!")}))})),children:[Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},className:"mb-3 py-2 px-3",defaultValue:i.displayName},d("userName"))),Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},className:"mb-3 py-2 px-3",defaultValue:i.email},d("userEmail"))),s.name&&Object(x.jsx)("input",Object(S.a)({style:{outline:"none"},className:"mb-3 py-2 px-3",defaultValue:s.name},d("singleWatchName"))),s.img&&Object(x.jsx)("input",Object(S.a)({className:"mb-3 p-2 d-none",defaultValue:s.img},d("singleWatchImg"))),s.Price&&Object(x.jsx)("input",Object(S.a)({className:"mb-3 p-2",defaultValue:s.Price},d("singleWatchPrice"))),Object(x.jsx)("input",Object(S.a)({className:"mb-3 p-2 d-none",defaultValue:"Pending"},d("bookedServiceStatus"))),Object(x.jsx)(u.a,{variant:"warning",type:"submit",children:"Order Now"})]})})]})},re=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://ancient-citadel-32341.herokuapp.com/watches").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(x.jsx)(f.a,{children:Object(x.jsx)(g.a,{xs:1,md:3,className:"g-4",children:c.map((function(e){return Object(x.jsx)(N.a,{watch:e,children:Object(x.jsxs)("div",{children:[Object(x.jsx)(y.a.Img,{variant:"top",height:"300",width:"250",src:e.img}),Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(y.a.Title,{children:e.name}),Object(x.jsx)("h6",{children:e.Price}),Object(x.jsx)(y.a.Text,{children:e.Description}),Object(x.jsx)(J.a,{initialRating:e.star,readonly:!0,emptySymbol:"far fa-star text-warning",fullSymbol:"fas fa-star text-warning"})]}),Object(x.jsx)(r.b,{to:"/singleproduct/".concat(e._id),children:Object(x.jsx)(u.a,{className:"px-5 py-2",children:"Details"})})]})},e._id)}))})})},le=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{})})},je=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(re,{}),Object(x.jsx)(le,{})]})},oe=c(170),de=c(171),be=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=w(),i=n.user,o=n.logInUser,d=n.signInUsingGoogle,b=n.isLoading,h=n.authError,O=Object(l.h)(),m=Object(l.g)(),p=function(e){var t=e.target.name,a=e.target.value;console.log(t,a);var n=Object(S.a)({},c);n[t]=a,s(n)};return Object(x.jsxs)(f.a,{style:{background:"#FBEFEC"},children:[Object(x.jsxs)("h1",{className:"mb-5",children:[Object(x.jsx)("strong",{className:"text-danger",children:"LOGIN"}),Object(x.jsx)("strong",{className:"text-info",children:"HERE"})]}),Object(x.jsxs)(g.a,{children:[Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(T.a,{onSubmit:function(e){o(c.email,c.password,O,m),e.preventDefault()},children:[Object(x.jsx)("input",{className:"w-75 p-1",type:"email",name:"email",placeholder:"E-mail",onBlur:p})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"w-75 p-1",type:"password",name:"password",placeholder:"password",onBlur:p})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{className:"px-5",type:"submit",children:"User's LogIn"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Or"}),Object(x.jsx)("br",{}),b&&Object(x.jsx)(oe.a,{animation:"border"}),(null===i||void 0===i?void 0:i.email)&&Object(x.jsx)(de.a,{severity:"success",children:"Login Success successfully!"}),h&&Object(x.jsx)(de.a,{severity:"error",children:h})]}),Object(x.jsxs)(u.a,{className:"px-5 py-2",onClick:function(){d(O,m)},children:[Object(x.jsx)("i",{className:"px-5 fs-3 text-danger fab fa-google"})," Google SignIn"]})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),Object(x.jsx)(r.c,{className:"my-5",to:"/register",children:Object(x.jsxs)(u.a,{className:"fs-5 my-5 text-danger text-bold",variant:"text",children:["New User? ",Object(x.jsx)("strong",{className:"text-info",children:"Please Register"})]})})]}),Object(x.jsx)(N.a,{children:Object(x.jsx)("img",{className:"w-75 h-75",src:"https://www.seekpng.com/png/detail/37-373951_login-logo-de-login.png",alt:""})})]})]})},he=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=w(),i=n.user,o=n.registerUser,d=n.isLoading,b=n.authError,h=(Object(l.g)(),function(e){var t=e.target.name,a=e.target.value,n=Object(S.a)({},c);n[t]=a,console.log(n),s(n)});return Object(x.jsxs)(f.a,{children:[Object(x.jsxs)("h1",{className:"mb-5",children:[Object(x.jsx)("strong",{className:"text-danger",children:"REGISTRATION"}),Object(x.jsx)("strong",{className:"text-info",children:"HERE"})]}),Object(x.jsxs)(g.a,{children:[Object(x.jsxs)(N.a,{children:[!d&&Object(x.jsxs)("form",{onSubmit:function(e){c.password===c.password2?(o(c.email,c.password,c.name),e.preventDefault()):alert("Your password not matched")},children:[Object(x.jsx)("input",{className:"w-75 p-1",onBlur:h,type:"text",name:"name",placeholder:"Your name"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"w-75 p-1",onBlur:h,type:"email",name:"email",placeholder:"E-mail"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"w-75 p-1",onBlur:h,type:"password",name:"password",placeholder:"Password"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"w-75 p-1",onBlur:h,type:"password",name:"password2",placeholder:"Re-type password"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{className:"bg-success text-white w-50",type:"submit",variant:"contained",children:"Register"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(r.c,{to:"/login",children:Object(x.jsxs)(u.a,{className:"fs-5 my-5 text-danger text-bold",variant:"text",children:["Already Registered?"," ",Object(x.jsx)("strong",{className:"text-info",children:"Please Login"})]})})]}),d&&Object(x.jsx)(oe.a,{animation:"border"}),(null===i||void 0===i?void 0:i.email)&&Object(x.jsx)(de.a,{severity:"success",children:"User Created successfully!"}),b&&Object(x.jsx)(de.a,{severity:"error",children:b})]}),Object(x.jsx)(N.a,{children:Object(x.jsx)("img",{src:"https://image.shutterstock.com/image-photo/hand-pressing-register-now-on-260nw-328898132.jpg",alt:""})})]})]})},xe=c(8),Oe=["children"],me=function(e){var t=e.children,c=Object(xe.a)(e,Oe),a=w(),s=a.user;return a.isLoading?Object(x.jsx)(oe.a,{animation:"border"}):Object(x.jsx)(l.b,Object(S.a)(Object(S.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(x.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},ue=function(){return Object(x.jsxs)(f.a,{className:"m-5",children:[Object(x.jsx)("h1",{className:"mb-4",children:"About Us "}),Object(x.jsxs)(g.a,{children:[Object(x.jsx)(N.a,{children:Object(x.jsx)("p",{children:'Most often associated with watches or timepieces made in Switzerland, Swiss law considers a watch to be Swiss made if its movement is Swiss, if the movement has been assembled in the Swiss region, its final inspection occurred in Switzerland, and at least 60% of manufacturing costs are domestic.[3] Besides the "Swiss made" requirements, watches may carry the Swiss movement ("Swiss Movt") marker if at least half of the assembled parts are of Swiss manufacture.[3] In addition to "Swiss made" and "Swiss Movt", under Swiss law watches may carry the words "Suisse", "produit suisse", "fabriqu\xe9 en Suisse", "qualit\xe9 suisse" or simply the English translation, "Swiss".[3] Outside of the jurisdiction of Switzerland, the legal requirements for use of the term "Swiss made" may differ.'})}),Object(x.jsx)(N.a,{children:Object(x.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Steinhausen_Watch_Swiss_Made.jpg",alt:""})})]})]})},pe=c.p+"static/media/payemt.efd07e46.JPG",fe=function(){return Object(x.jsx)("div",{className:"bg-dark text-white py-5",children:Object(x.jsx)(f.a,{children:Object(x.jsxs)(g.a,{className:"text-start",children:[Object(x.jsxs)(N.a,{children:[Object(x.jsx)("h3",{children:"Contact"}),Object(x.jsx)("p",{children:"Address: 1216 Mirpur, Dhaka"}),Object(x.jsx)("p",{children:"E-mail: contacts@gmail.com"}),Object(x.jsx)("h6",{children:"+880152222222"}),Object(x.jsx)("br",{}),Object(x.jsx)("img",{src:pe,alt:""})]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)("h3",{children:"About Us"}),Object(x.jsx)("h6",{children:"Give $50 get $55"}),Object(x.jsx)("h6",{children:"Gift Card"}),Object(x.jsx)("h6",{children:"Our Story"}),Object(x.jsx)("h6",{children:"Partners"}),Object(x.jsx)("h6",{children:"Careers"}),Object(x.jsx)("h6",{children:"Affiliate Program"})]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)("h3",{children:"Help"}),Object(x.jsx)("h6",{children:"FAQs"}),Object(x.jsx)("h6",{children:"Delivery"}),Object(x.jsx)("h6",{children:"Payment"})," ",Object(x.jsx)("br",{}),Object(x.jsx)("h6",{children:"___________________"}),Object(x.jsx)("h3",{children:"Follow Us"}),Object(x.jsxs)("div",{className:"fs-3 m-2",children:[Object(x.jsx)("i",{className:"fab fa-facebook"}),Object(x.jsx)("i",{className:"fab m-2 fa-twitter"}),Object(x.jsx)("i",{className:"fab fa-youtube"}),Object(x.jsx)("i",{className:"fab m-2 fa-instagram"}),Object(x.jsx)("i",{className:"fab fa-linkedin-in"})]})]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)("h2",{children:"Quick Links"}),Object(x.jsx)("h6",{children:"How to Buy"}),Object(x.jsx)("h6",{children:"Payments"}),Object(x.jsx)("h6",{children:"Delivery"}),Object(x.jsx)("h6",{children:"Gift Receipt"}),Object(x.jsx)("h6",{children:"Recalled Item"}),Object(x.jsx)("h6",{children:"My Account"})]})]})})})},ge=c(172),Ne=(c(162),{fontWeight:"bold",fontSize:"1.2rem",textAlign:"center",color:"goldenrod"}),ve=function(){var e=w(),t=e.user,c=e.logOut;return Object(x.jsx)("div",{className:"Navbar py-3",children:Object(x.jsx)(ge.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(ge.a.Brand,{children:Object(x.jsx)(r.c,{className:"navItem py-5",activeStyle:Ne,to:"/home",children:Object(x.jsx)("img",{alt:"",src:"data:image/png;base64,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",width:"200",height:"30",className:"d-inline-block align-top"})})}),Object(x.jsx)(ge.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(ge.a.Collapse,{id:"responsive-navbar-nav",children:[Object(x.jsxs)(v.a,{className:"me-auto",children:[Object(x.jsx)(r.c,{className:"navItem ml-3",activeStyle:Ne,to:"/home",children:"HOME"}),Object(x.jsx)(r.c,{className:"navItem",activeStyle:Ne,to:"/watches",children:"WATCH"}),Object(x.jsx)(r.c,{className:"navItem",activeStyle:Ne,to:"/model",children:"ABOUT"}),Object(x.jsx)(r.c,{className:"navItem",activeStyle:Ne,to:"/contacts",children:"CONTACTS"})]}),Object(x.jsx)(v.a,{className:"d-flex align-items-center",children:(null===t||void 0===t?void 0:t.email)?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.c,{className:"text-decoration-none me-3",to:"/dashboard",children:"Dashboard"}),Object(x.jsx)(u.a,{size:"sm",variant:"danger",onClick:c,children:"Logout"}),Object(x.jsx)(r.c,{className:"text-decoration-none ms-3",to:"#",children:t.displayName})]}):Object(x.jsx)(r.c,{to:"/login",children:Object(x.jsx)(u.a,{size:"sm",variant:"primary",children:"LogIn"})})})]})]})})})};var we=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(m,{children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(ve,{}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{exact:!0,path:"/",children:Object(x.jsx)(ne,{})}),Object(x.jsx)(l.b,{path:"/home",children:Object(x.jsx)(ne,{})}),Object(x.jsx)(l.b,{path:"/contacts",children:Object(x.jsx)(p,{})}),Object(x.jsx)(l.b,{path:"/model",children:Object(x.jsx)(ue,{})}),Object(x.jsx)(me,{path:"/singleproduct/:id",children:Object(x.jsx)(ie,{})}),Object(x.jsx)(l.b,{path:"/dashboard",children:Object(x.jsx)(M,{})}),Object(x.jsx)(l.b,{path:"/login",children:Object(x.jsx)(be,{})}),Object(x.jsx)(l.b,{path:"/register",children:Object(x.jsx)(he,{})}),Object(x.jsx)(l.b,{path:"/watches",children:Object(x.jsx)(je,{})})]}),Object(x.jsx)(fe,{})]})})})},ye=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,178)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(we,{})}),document.getElementById("root")),ye()}},[[163,1,2]]]);
//# sourceMappingURL=main.82abad09.chunk.js.map