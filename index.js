const express = require("express");
const app = express();
const PORT = 4000;

/*
/deeplink?pa=&pn=&tn=&am=
*/
app.get("/deeplink", (req, res) => {
	let { pa, pn, tn, am } = req.query;
  	//Construct like this "upi://pay?pa=prem.mohapatra@oksbi&pn=PNLBot&am=1000&tn=MonthlyFees&tr=uuid";
	let url = new URL("upi://pay");
	if (pa) url.searchParams.append("pa", pa);
	if (pn) url.searchParams.append("pn", pn);
	if (tn) url.searchParams.append("tn", tn);
	if (am) url.searchParams.append("am", am);
	url.searchParams.append("tr", new Date().getTime());

	res.redirect(url.href);
});

app.listen(PORT);