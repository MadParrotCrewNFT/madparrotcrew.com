import { BuenoWidget } from "https://nft.bueno.art/widget/latest.js";

const widget = new BuenoWidget(
  document.getElementById('bueno-embed-container')
);

widget.init({
  contractId: "2CJRcuOsfBJpamak99HL2",
  button: { background: "#c447a1", color: '#fff', 'font-weight': 700 },
  showPrice: true,
  showSupply: true,
  autoConnect: false,
});