(this["webpackJsonpcode-playground"]=this["webpackJsonpcode-playground"]||[]).push([[253],{430:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var p=i[u];if("string"===typeof p||p.content&&"string"===typeof p.content){var g=r[o],s=t.tokenStack[g],l="string"===typeof p?p:p.content,f=n(a,g),k=l.indexOf(f);if(k>-1){++o;var d=l.substring(0,k),h=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),y=l.substring(k+f.length),m=[];d&&m.push.apply(m,c([d])),m.push(h),y&&m.push.apply(m,c([y])),"string"===typeof p?i.splice.apply(i,[u,1].concat(m)):p.content=m}}else p.content&&c(p.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=253.2f7f49e9.chunk.js.map