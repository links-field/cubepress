import{_ as e,c as t,o as i,a}from"./app.b80f3151.js";var o="/cubepress/invite.png",n="/cubepress/invited.png",s="/cubepress/revokeinvite.png";const b=JSON.parse('{"title":"Collaborators","description":"","frontmatter":{},"headers":[{"level":2,"title":"Invite","slug":"invite"},{"level":2,"title":"Accept Invite","slug":"accept-invite"},{"level":2,"title":"Revoke Invite","slug":"revoke-invite"}],"relativePath":"guide/collaborator.md","lastUpdated":1664360597000}'),r={name:"guide/collaborator.md"},c=a('<h1 id="collaborators" tabindex="-1">Collaborators <a class="header-anchor" href="#collaborators" aria-hidden="true">#</a></h1><p>Once you have an administror role with an organisation, you may invite other collaborators to join the organisation from <code>settings</code> page.</p><h2 id="invite" tabindex="-1">Invite <a class="header-anchor" href="#invite" aria-hidden="true">#</a></h2><p>Go to <code>Settings</code> from sidebar menu, click <code>invite</code></p><p><img src="'+o+'" alt="invite"></p><ul><li><strong>Enter the email address</strong> and check if this email address alrady exists in Cube&#39;s ID system</li><li>If it exists, an invitation will be sent to the account. <ul><li>The invited account status is <strong><code>pending</code></strong></li><li>After inivitation is accepted, the account status is <strong><code>enabled</code></strong></li></ul></li><li>If it doesn&#39;t already exist, fill up the details in the form and the account will be created with Cube. <strong>Account detail will then be sent to the registered email address if notification by email is opted.</strong></li></ul><h2 id="accept-invite" tabindex="-1">Accept Invite <a class="header-anchor" href="#accept-invite" aria-hidden="true">#</a></h2><p><img src="'+n+'" alt="invited"></p><p>Next time the invited account <strong>signs in</strong>, the invitation can be seen in &quot;My Organisations&quot; panel accessed from top navigation.</p><p>Click on the invitaion to accept it.</p><h2 id="revoke-invite" tabindex="-1">Revoke Invite <a class="header-anchor" href="#revoke-invite" aria-hidden="true">#</a></h2><p><img src="'+s+'" alt="revoke"></p><p>Go to account list, click on the pending invitation to revoke it, before the invitation is accepted.</p><p>The invitation will then disappear from the invited&#39;s organisation list.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>There is maximum 10 organisations allowed for an account to be associated with, by default.</p></div>',15),l=[c];function d(p,h,v,u,g,m){return i(),t("div",null,l)}var f=e(r,[["render",d]]);export{b as __pageData,f as default};
