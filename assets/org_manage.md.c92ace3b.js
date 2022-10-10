import{_ as t,c as e,o as r,a}from"./app.b80f3151.js";var d="/cubepress/companyhierarchy.png",o="/cubepress/centralised.png",n="/cubepress/agenthierarchy.png";const f=JSON.parse('{"title":"Management of Organistaion Structure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Company Hierarchy","slug":"company-hierarchy"},{"level":2,"title":"Centralised Model","slug":"centralised-model"},{"level":2,"title":"Agent Hierarchy","slug":"agent-hierarchy"},{"level":2,"title":"Mixed Model","slug":"mixed-model"}],"relativePath":"org/manage.md","lastUpdated":1665379853000}'),i={name:"org/manage.md"},s=a('<h1 id="management-of-organistaion-structure" tabindex="-1">Management of Organistaion Structure <a class="header-anchor" href="#management-of-organistaion-structure" aria-hidden="true">#</a></h1><p>Cube&#39;s Organisations are loosely coupled as Administrators are allowed to create new organisations and invite collaborators with great flexibility. When you hava an organistaional structure or hierarchy, you can use below patterns:</p><h2 id="company-hierarchy" tabindex="-1">Company Hierarchy <a class="header-anchor" href="#company-hierarchy" aria-hidden="true">#</a></h2><p>When you are setting up a structure for your company and branch offices around the world, you may adopt the hierarchy pattern as illustrated below:</p><p><img src="'+d+'" alt="company hierarchy"></p><hr><ul><li><p><strong>Thomas (CTO)</strong> - is responsible for the company hierarchy. He is <code>superadmin</code> for HQ and <strong>created Brazil and UK companies</strong> - therefore their <code>superadmin</code> as well. He then invited <strong>Lucy</strong> and <strong>Mark</strong> to be in charge of the local operations.</p></li><li><p><strong>Lucy(Brazil)</strong> - is invited to be an <code>admin</code> and is responsible for Brasil operations. She created a local branch <strong>Brasilia</strong> and becomes its <code>superadmin</code>.</p></li><li><p><strong>Mark(UK operational PIC)</strong> - <strong>Created London and Sheffield branches</strong> and invite <strong>Mary</strong> to oversee Sheffield as a user.</p></li><li><p><strong>Mary(Sheffield)</strong> - is invited to <strong>Sheffield</strong> branch as a <strong>user</strong>. She can observe and monitor. But she CANNOT create organisation.</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>However, Thomas won&#39;t know <strong>what&#39;s going on with local branches, e.g., London.</strong> since he doesn&#39;t have any role there. Therefore Mark invites Thomas to be the admin so that he can be overseeing its operations.</p></div><p>Below is the table of who can access which organisations:</p><table><thead><tr><th>Person</th><th>Organisations</th><th>Role</th></tr></thead><tbody><tr><td>Thomas</td><td>HQ</td><td>superadmin</td></tr><tr><td></td><td>Brazil</td><td>superadmin</td></tr><tr><td></td><td>UK</td><td>superadmin</td></tr><tr><td></td><td>London</td><td>admin</td></tr><tr><td>Lucy</td><td>Brazil</td><td>admin</td></tr><tr><td></td><td>Brasilia</td><td>superadmin</td></tr><tr><td>Mark</td><td>UK</td><td>admin</td></tr><tr><td></td><td>London</td><td>superadmin</td></tr><tr><td></td><td>Sheffield</td><td>superadmin</td></tr><tr><td>Mary</td><td>Sheffield</td><td>user</td></tr></tbody></table><h2 id="centralised-model" tabindex="-1">Centralised Model <a class="header-anchor" href="#centralised-model" aria-hidden="true">#</a></h2><p>In a more <strong>centralised model</strong>, Thomas can choose to create all companies and local branches so that he will naturally be able to monitor all.</p><p>In this model, Thomas has a greater control over local operations.</p><p><img src="'+o+'" alt="Centralized Model"></p><table><thead><tr><th>Person</th><th>Organisations</th><th>Role</th></tr></thead><tbody><tr><td>Thomas</td><td>HQ</td><td>superadmin</td></tr><tr><td></td><td>Brazil</td><td>superadmin</td></tr><tr><td></td><td>Brasilia</td><td>superadmin</td></tr><tr><td></td><td>UK</td><td>superadmin</td></tr><tr><td></td><td>London</td><td>superadmin</td></tr><tr><td></td><td>Sheffield</td><td>superadmin</td></tr><tr><td>Lucy</td><td>Brazil</td><td>operator</td></tr><tr><td></td><td>Brasilia</td><td>user</td></tr><tr><td>Mark</td><td>UK</td><td>admin</td></tr><tr><td></td><td>London</td><td>operator</td></tr><tr><td></td><td>Sheffield</td><td>admin</td></tr></tbody></table><ul><li><strong>Be noted:</strong> in this case, Mark <strong>can no longer invite anyone to manage London branch</strong> as he is <code>operator</code> with London branch now.</li></ul><h2 id="agent-hierarchy" tabindex="-1">Agent Hierarchy <a class="header-anchor" href="#agent-hierarchy" aria-hidden="true">#</a></h2><p>Similarly as company hierarchy, agent hierarchy <strong>authorises its sub level Organisations to manage their own operations.</strong> In this case, these (sub level) organisations do not invite Thomas to engage in their operational activities, <strong>so each agent company has full autonomy.</strong></p><p><img src="'+n+'" alt="agent hierarchy"></p><table><thead><tr><th>Person</th><th>Organisations</th><th>Role</th></tr></thead><tbody><tr><td>Thomas</td><td>Company</td><td>superadmin</td></tr><tr><td></td><td>Distributor A</td><td>superadmin</td></tr><tr><td>Lucy</td><td>Industry A</td><td>superadmin</td></tr><tr><td></td><td>Industry B</td><td>superadmin</td></tr><tr><td>Mark</td><td>Industry A</td><td>admin</td></tr><tr><td>Mary</td><td>Industry B</td><td>admin</td></tr><tr><td></td><td>UK Branch</td><td>superadmin</td></tr></tbody></table><p>Unlike company hierarchy, in this case operations of Industry A and B are <strong>of no interest</strong> to Thomas.</p><h2 id="mixed-model" tabindex="-1">Mixed Model <a class="header-anchor" href="#mixed-model" aria-hidden="true">#</a></h2><p>In above example, <strong>Mary</strong> can again develop her own organisational structure based on either company hierarchy or centralised model.</p><hr><p><strong>From simple to complex, Cube&#39;s organisation feature can help you acheive your desired network of organisations with both security and flexibility.</strong></p>',25),h=[s];function l(c,p,m,g,u,y){return r(),e("div",null,h)}var v=t(i,[["render",l]]);export{f as __pageData,v as default};
