let elems = [];
[...document.getElementsByTagName("input")].forEach(el => {
    elems.push(el);
    el.onchange = evt => {
        const cur_id = evt.target.id;
        console.log(cur_id);
        document.querySelector(`label[for="${cur_id}"]`).innerText = cur_id + " " + evt.target.value;
    }
})

setInterval(() => {
    const fd = new FormData();
    elems.forEach(e => {
        fd.set(e.id, e.value);
    });
    axios.post('/api/set', fd);
}, 500);
