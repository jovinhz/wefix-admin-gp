(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a84a08a"],{50911:function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return d}));var n=a("997a");const o=new n["a"],c=t=>o.axiosInstance.get("/administrator/offers",{params:t}),i=t=>o.axiosInstance.post("/administrator/offers",t),r=t=>o.axiosInstance.get("/administrator/offers/"+t),s=(t,e)=>o.axiosInstance.put("/administrator/offers/"+t,e),d=t=>o.axiosInstance.post(`/administrator/offers/${t}/cancel`)},af1a:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const o={class:"content-title d-flex justify-content-between align-items-center"},c=Object(n["createElementVNode"])("h5",null,"Daftar Offer",-1),i=Object(n["createElementVNode"])("button",{class:"btn btn-with-addon btn-primary"},[Object(n["createElementVNode"])("span",{class:"btn-addon"},[Object(n["createElementVNode"])("i",{class:"btn-addon-icon fe fe-plus-circle"})]),Object(n["createTextVNode"])(" Tambah ")],-1);function r(t,e,a,r,s,d){const u=Object(n["resolveComponent"])("router-link"),l=Object(n["resolveComponent"])("a-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",o,[c,Object(n["createVNode"])(u,{to:"/offers/new"},{default:Object(n["withCtx"])(()=>[i]),_:1})]),Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(l,{columns:r.columns,"data-source":s.data,loading:s.loading,"row-key":t=>t.id,"custom-row":r.customRow,pagination:s.pagination,onChange:d.handleTabChange},null,8,["columns","data-source","loading","row-key","custom-row","pagination","onChange"])])])}var s=a("6605"),d=a("50911");const u=[{title:"Customer",key:"customer",dataIndex:"customer"},{title:"Kategori",key:"category",dataIndex:"category_item_caption"},{title:"Tipe Perangkat",key:"deviceType",dataIndex:"device_type"},{title:"Status",key:"status",dataIndex:"status"},{title:"Catatan",key:"note",dataIndex:"note"},{title:"Harga",key:"price",dataIndex:"formatted_price"}];var l={setup(){const t=Object(s["d"])(),e=e=>({style:{cursor:"pointer"},onClick:()=>{t.push({path:"/offers/view/"+e.id})}});return{columns:u,customRow:e}},data(){return{data:[],loading:!0,pagination:{current:1,pageSize:20}}},mounted(){this.fetchData()},methods:{async fetchData(t={}){this.loading=!0;try{const e=await Object(d["d"])(t);200===e.status&&(this.data=e.data.data)}catch(e){}this.loading=!1},handleTabChange(t){this.pagination.current=t.current,this.fetchData({page:this.pagination.current,limit:this.pagination.pageSize})}}},f=a("d959"),p=a.n(f);const m=p()(l,[["render",r]]);e["default"]=m}}]);