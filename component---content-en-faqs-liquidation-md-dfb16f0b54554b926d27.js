(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{YE0M:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var i=a("zLVn"),n=(a("q1tI"),a("7ljp")),l=a("z1h2"),o={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=r("StatusBanner"),s=r("Button"),b={_frontmatter:o},u=l.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(u,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{sticky:!0,mdxType:"StatusBanner"},Object(n.b)("p",null,"These are legacy guides and will not be maintened. You may be looking for the page on ",Object(n.b)(s,{secondary:!0,inline:!0,to:"/learn/vaults/liquidation/",mdxType:"Button"},"Liquidation"))),Object(n.b)("h1",{id:"liquidation"},"Liquidation"),Object(n.b)("h2",{id:"what-is-liquidation"},"What is Liquidation?"),Object(n.b)("p",null,"Liquidation is the process of selling collateral to cover the amount of Dai a user has generated from their ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault"),". Liquidation is the process of selling collateral to cover a user’s generated Dai. A Vault can be Liquidated if the value of its collateral falls below the required minimum level, called the Liquidation Ratio. During the Liquidation process, enough collateral is sold to cover the debt along with a Liquidation Penalty, leaving the remaining collateral available for withdrawal."),Object(n.b)("h2",{id:"why-does-liquidation-exist"},"Why does Liquidation exist?"),Object(n.b)("p",null,"Dai is a proxy for the US Dollar, with the additional benefit of being fully backed by real value in the form of various collateral assets. Liquidation helps to ensure that Dai is always backed by an appropriate amount of collateral by closing-out ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vaults")," that are under their minimum required Collateralization Ratio for their given collateral type."),Object(n.b)("h2",{id:"who-triggers-liquidation"},"Who triggers Liquidation?"),Object(n.b)("p",null,"To make sure that the required surplus of collateral exists at all times, a class of users called Keepers are incentivized to maintain a constant watch for ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vaults")," that become under-collateralized. These Keepers are a special category of Maker Protocol users. They are the actors in the system who are incentivized to make sure that the outstanding Dai supply remains fully collateralized and solvent. They help maintain the health of the entire ecosystem by ensuring that undercollateralized Vaults are offered up for Liquidation as quickly as possible. This is particularly important during rapid market downturns as the collateral value could be subject to slippage."),Object(n.b)("h2",{id:"what-is-the-liquidation-ratio"},"What is the Liquidation Ratio?"),Object(n.b)("p",null,"The Liquidation Ratio is the minimum required collateralization level for each ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," type before it is considered undercollateralized and subject to Liquidation. The Maker Protocol’s ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/Oracles/"}),"Oracles")," provide the system with pricing data that is used to track Vaults for when their Liquidation Ratio is breached. Once breached, they are available for Liquidation."),Object(n.b)("p",null,"For example, a Vault with a 150% Liquidation Ratio will require a minimum $1.50 of collateral value for every $1 of Dai generated. If the value of the collateral falls to \\$1.49 it will be Liquidated to cover the generated Dai in addition to a fee called the Liquidation Penalty."),Object(n.b)("p",null,"Each Vault type’s Liquidation Ratio is determined by a combination of the collateral’s risk profile and the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fee"),". There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees."),Object(n.b)("h2",{id:"what-is-the-liquidation-price"},"What is the Liquidation Price?"),Object(n.b)("p",null,"This is the price at which a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," becomes vulnerable to Liquidation. It is unique to each user’s Vault and moves up slowly as ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fees")," accrue."),Object(n.b)("h2",{id:"what-is-the-liquidation-penalty"},"What is the Liquidation Penalty?"),Object(n.b)("p",null,"This is a fee that is paid by ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," owners when their Vaults are Liquidated. The fee is added to the Vault’s total outstanding generated DAI when a Liquidation occurs, which results in more of the collateral being sold on ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"Auction"),"."),Object(n.b)("p",null,"Proceeds from Liquidation Penalties are put towards the Surplus Auctions, which result in burned MKR."),Object(n.b)("h2",{id:"why-is-the-liquidation-penalty-necessary"},"Why is the Liquidation Penalty necessary?"),Object(n.b)("p",null,"The penalty is necessary to prevent Auction Grinding Attacks, which essentially break the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"Auction mechanism")," since an attacker can exploit the Maker Protocol for profit. To read more about this attack read this paper: ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/livnev/auction-grinding/blob/master/grinding.pdf"}),"The Auction Grinding Attack: and a case for a liquidation penalty in Dai"),"."),Object(n.b)("h2",{id:"what-happens-during-a-liquidation"},"What happens during a Liquidation?"),Object(n.b)("p",null,"Liquidation occurs through an ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"Auction mechanism")," built into the Maker Protocol."),Object(n.b)("p",null,"The simplified order of operations looks like this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A Keeper detects an undercollateralized ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"/learn/vaults/"}),"Vault")," and triggers a Liquidation."),Object(n.b)("li",{parentName:"ul"},"All of the collateral is put up for auction to cover the outstanding Dai + Liquidation Penalty"),Object(n.b)("li",{parentName:"ul"},"Once bids reach the Dai amount equaling to the outstanding Dai + Liquidation Penalty, the auction reverses and bidders now compete by offering to accept less collateral for the Dai they bid in the previous phase."),Object(n.b)("li",{parentName:"ul"},"Once the auction completes bidders receive the sold collateral, the winning bidders Dai is burned, and the Vault owner receives leftover collateral if any remains.")),Object(n.b)("p",null,"For a more detailed guide on how Auctions and Keepers work see ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"The Auctions of the Maker Protocol")," on our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal"),"."),Object(n.b)("h2",{id:"how-much-collateral-is-left-after-a-liquidation"},"How much Collateral is left after a Liquidation?"),Object(n.b)("p",null,"Since Liquidations occur through ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#collateral-auction-collateral-sale"}),"Collateral Auctions"),", there is no way to accurately predict the exact amount of collateral one would receive."),Object(n.b)("h2",{id:"how-do-i-calculate-my-liquidation-price"},"How do I calculate my Liquidation Price?"),Object(n.b)("p",null,"The Liquidation Price for a given ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," is usually shown on front-ends that offer Vaults. Though one can manually calculate their Liquidation Price by using the following simplified formula:"),Object(n.b)("h3",{id:"formula"},"Formula"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(Generated Dai * Liquidation Ratio) / (Amount of Collateral) = Liquidation Price\n")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Generated Dai"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"1000 DAI")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Liquidation Ratio"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"150%")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Amount of Collateral"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"10 ETH")))),Object(n.b)("h3",{id:"result"},"Result"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(1000 × 1.5 ) ÷ (10) = 150 USD\n")),Object(n.b)("p",null,"If we use ETH as an example, it would need to fall to 150 USD before the Vault is considered undercollateralized by the system."),Object(n.b)("h2",{id:"how-do-i-calculate-my-collateralization-ratio"},"How do I calculate my Collateralization Ratio?"),Object(n.b)("p",null,"The Collateralization Ratio for a given ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," is usually shown on front-ends that offer Vaults. Though one can manually calculate their Collateralization Ratio by using the following simplified formula:"),Object(n.b)("p",null,"Formula:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(Collateral Amount x Collateral Price) ÷ Generated Dai × 100 = Collateralization Ratio\n")),Object(n.b)("p",null,"Given that:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Amount"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"10 ETH")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Price"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"300 USD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Generated Dai"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"1000 DAI")))),Object(n.b)("p",null,"Result:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(10 x 300) ÷ 1000 × 100 = 300%\n")),Object(n.b)("p",null,"The Vault in this example has a Collateralization Ratio of 300%."),Object(n.b)("h2",{id:"how-do-i-lower-my-liquidation-price"},"How do I lower my Liquidation Price?"),Object(n.b)("p",null,"If a user’s ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," is close to the Liquidation Price, they may either add more collateral or pay Dai back into the Vault."),Object(n.b)("p",null,"The most efficient way a user can lower their Liquidation Price is to repay DAI. This also has the added benefit of reducing the Stability Fees that accrue for the owner of the Vault. This can be proven by the following example:"),Object(n.b)("p",null,"Formula:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(Generated Dai x Liquidation Ratio) ÷ Collateral Amount = Liquidation Price\n")),Object(n.b)("p",null,"Given that:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Liquidation Ratio"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"150%")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Amount"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"10 ETH")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Price"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"200 USD")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Generated Dai"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"1000 DAI")))),Object(n.b)("p",null,"Current Liquidation Price:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(1000 × 1.5 ) ÷ (10) = 150 USD\n")),Object(n.b)("p",null,"Liquidation Price change by ",Object(n.b)("strong",{parentName:"p"},"adding")," 400 USD worth of collateral:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(1000 × 1.5 ) ÷ (12) = 125 USD\n")),Object(n.b)("p",null,"Liquidation Price change by ",Object(n.b)("strong",{parentName:"p"},"repaying")," 400 Dai:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"(600 × 1.5 ) ÷ (10) = 90 USD\n")),Object(n.b)("h2",{id:"what-are-typical-practices-to-avoid-getting-liquidated"},"What are typical practices to avoid getting Liquidated?"),Object(n.b)("p",null,"Remaining aware of a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault’s")," condition is the Vault owner’s own responsibility. Ensuring that assets remain safe from Liquidation is entirely in the hands of each Vault owner. Below are some common practices to monitor the health of a Vault:"),Object(n.b)("p",null,"Vault owners could:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Set up price alerts for the collateral asset(s) being used."),Object(n.b)("li",{parentName:"ul"},"Set up a personal rule that would require them to unwind their Vaults if the collateral price falls below a certain level, this may act as an additional buffer."),Object(n.b)("li",{parentName:"ul"},"Make sure they have adequate access to their Vaults, especially during volatile periods in the markets."),Object(n.b)("li",{parentName:"ul"},"Keep note of their Vault’s number. They can use it as a reference to have an external party payback Dai or add collateral on their behalf if they don’t have immediate access to their Vault."),Object(n.b)("li",{parentName:"ul"},"Make sure they have access to emergency funds or assets that can be readily used to pay back Dai or add more collateral to their positions.")),Object(n.b)("p",null,"Remember that opening a Vault and generating Dai represents the creation of risk. Vault owners should be very cognizant of this fact and should use Vaults at their own risk."),Object(n.b)("h2",{id:"how-would-a-flash-crash-affect-the-liquidation-of-vaults"},"How would a flash crash affect the Liquidation of Vaults?"),Object(n.b)("p",null,"A flash crash on a single exchange will not affect the system as each ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/Oracles/"}),"Oracle")," aggregates prices from many sources. The Oracle calculates the median of these prices, which naturally filters outliers like a broken price from an exchange that’s experienced a flash crash. You can read more about the Maker Protocol’s decentralized Oracles in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/Oracles/"}),"Oracle FAQ"),"."),Object(n.b)("h2",{id:"where-can-i-view-live-information-about-liquidations"},"Where can I view live information about Liquidations?"),Object(n.b)("p",null,"Liquidations occur on-chain, so anyone can pull the data themselves. Several MakerDAO analytics dashboards already exist. You can see a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#watch-dai"}),"list of them")," in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com"}),"Awesome-MakerDAO")," resource repository."),Object(n.b)("h2",{id:"where-can-i-find-more-technical-information-about-liquidations"},"Where can I find more technical information about Liquidations?"),Object(n.b)("p",null,"Visit our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol. Technical documentation of Liquidations can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/collateral-module/flipper-detailed-documentation"}),"Flipper - Detailed Documentation")," and the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/core-module/cat-detailed-documentation"}),"Cat - Detailed Documentation")," subsections of our Documentation Portal."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-faqs-liquidation-md-dfb16f0b54554b926d27.js.map