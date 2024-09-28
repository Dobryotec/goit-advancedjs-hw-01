import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{b as i}from"./assets/vendor-SQfqkzzt.js";const r={email:"",message:""},n="feedback-form-state",o=document.querySelector(".feedback-form");c();o.addEventListener("input",s);function s(e){const t=e.target.name,a=e.target.value.trim();r[t]=a,localStorage.setItem(n,JSON.stringify(r))}function l(){try{return JSON.parse(localStorage.getItem(n))}catch(e){return console.error(`JSON parsing error: ${e}`),null}}function c(){const e=l();if(e)for(const t in e)o.elements[t].value=e[t],r[t]=e[t]}o.addEventListener("submit",m);function m(e){e.preventDefault();for(const t in r)if(!r[t]){i.create(`
    <div class="modal">
        <p>
            Fill please all fields.
        </p>
    </div>
`).show();return}console.log(`FormData => ${JSON.stringify(r)}`),localStorage.removeItem(n),o.reset();for(const t in r)r[t]=""}
//# sourceMappingURL=2-form.js.map
