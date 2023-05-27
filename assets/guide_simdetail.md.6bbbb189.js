import{_ as e,c as a,o as t,R as i}from"./chunks/framework.27a1c15b.js";const s="/simdetail-overview.png",o="/simdetail-overview-expand.png",n="/simdetail-event-time.png",b=JSON.parse('{"title":"SIM Detail Page","description":"","frontmatter":{},"headers":[],"relativePath":"guide/simdetail.md","lastUpdated":1685161690000}'),l={name:"guide/simdetail.md"},r=i('<h1 id="sim-detail-page" tabindex="-1">SIM Detail Page <a class="header-anchor" href="#sim-detail-page" aria-label="Permalink to &quot;SIM Detail Page&quot;">​</a></h1><p>When you click on the ICCID of the SIM in the SIM table, the SIM detail gets displayed on a new tab page. You can open multiple SIM detail pages at the same time.</p><h2 id="sim-overview" tabindex="-1">SIM Overview <a class="header-anchor" href="#sim-overview" aria-label="Permalink to &quot;SIM Overview&quot;">​</a></h2><p>The first section gives you an overview of the SIM</p><ul><li>ICCID</li><li>Card OS technology label</li><li>SIM current status and its life cycle transition diagram</li><li>Expiry date</li><li>Usable data in current billing cycle</li></ul><p><img src="'+s+'" alt="SIM-overview"></p><p>When clicking on &quot;More&quot;, additional information will be displayed:</p><ul><li>Tags (at most 10)</li><li>IMSI</li><li>IMEI</li><li>Delivery Note Number</li><li>Shipment Date</li><li>Notes</li></ul><p><img src="'+o+'" alt="SIM-overview-expand"></p><div class="info custom-block"><p class="custom-block-title">Delivery Note Number</p><p>This is used to identify a batch of SIMs that usually come from the same order and have the same configuration.</p></div><div class="info custom-block"><p class="custom-block-title">Shipment Date</p><p>The date when SIMs are configured and checked out from inventory</p></div><h2 id="connection" tabindex="-1">Connection <a class="header-anchor" href="#connection" aria-label="Permalink to &quot;Connection&quot;">​</a></h2><p>The SIM connection status and the most recent 10 CDR session records are displayed here.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Usage summarises and visualises the data/sms usage in the past 6 months/30 days</p><h2 id="bundles" tabindex="-1">Bundles <a class="header-anchor" href="#bundles" aria-label="Permalink to &quot;Bundles&quot;">​</a></h2><p>Bundle history of the SIM is displayed here. Click on each line to find more about the bundle.</p><h2 id="sms" tabindex="-1">SMS <a class="header-anchor" href="#sms" aria-label="Permalink to &quot;SMS&quot;">​</a></h2><p>View and send sms here.</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>This section diplays the events that occurred to the SIM. Hover mouse on the relative time to see the exact time when it happened. <img src="'+n+'" alt="SIM-event-time"></p>',21),d=[r];function c(h,p,m,u,v,_){return t(),a("div",null,d)}const g=e(l,[["render",c]]);export{b as __pageData,g as default};
