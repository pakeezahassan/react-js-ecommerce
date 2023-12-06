const FormatPrice = ({ price }) => {
	return new Intl.NumberFormat("en-PK", {
		style: "currency",
		currency: "PKR",
		maximumFractionDigits: 2,
	}).format(price / 100);
};

export default FormatPrice;
