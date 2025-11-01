async function main(){
  const el = (sel)=>document.querySelector(sel);
  try{
    const res = await fetch('./data/router_flow.json', {cache:'no-store'});
    const data = await res.json();

    el('#reqId').textContent = data.request_id;
    el('#service').textContent = data.service_type;
    el('#userNote').textContent = data.user_note || '—';
    el('#partner').textContent = data.partner.name;
    el('#license').textContent = data.partner.license_status;
    el('#contact').textContent = data.partner.contact;
    el('#status').textContent = data.routing.status;
    el('#matchedAt').textContent = new Date(data.routing.matched_at).toLocaleString();
    el('#sla').textContent = `${data.routing.sla_minutes} min`;
    el('#amt').textContent = `${data.payment.amount} ${data.payment.currency}`;
    el('#network').textContent = data.payment.network;
    el('#hash').textContent = data.payment.transaction_hash;
    el('#payStatus').textContent = data.payment.status;

    // simple OK/Alert tone
    el('#badge').textContent = data.payment.status === 'Confirmed' ? 'USDC Confirmed' : 'Awaiting Payment';
  }catch(e){
    document.querySelector('.wrap').innerHTML = `<div class="card"><h3 class="h">Load error</h3><p>Could not read <code>data/router_flow.json</code>.</p></div>`;
    console.error(e);
  }
}
main();
