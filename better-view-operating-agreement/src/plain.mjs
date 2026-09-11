// Plain-English notes for the redraft page, keyed by article, section, schedule, and exhibit id.
// The build refuses to run if any id in agreement.mjs is missing here or any key here is unknown.
// These notes are for the Members and are not part of the agreement.

export const plain = {
  // ---------------------------------------------------------------- Article 1
  'definitions': 'The dictionary. Every capitalized term in the agreement means exactly what this article says, nothing more.',
  'defined-terms': 'When you see a capitalized phrase like Majority in Interest or Distributable Cash, this is where it is defined. Three worth knowing cold: Majority in Interest is more than half the votes, Supermajority in Interest is 80% (four of you while shares are equal), and Unanimous Consent is everyone who is allowed to vote. Anyone who can\'t vote at that moment, like a member in default, doesn\'t count toward the total.',
  'interpretation': 'Reading rules. Headings don\'t change meaning, "including" never limits a list, email counts as writing if it follows the notice rules, and a member who can\'t vote on something is left out of the math for that vote.',

  // ---------------------------------------------------------------- Article 2
  'organization': 'The basics: what the company is, where it lives, what it is for, and the fact that it is run by managers.',
  'formation': 'The company already exists because the Articles were filed with the state. Fill in the filing date and control number. Where this agreement and the state\'s default rules disagree, this agreement wins wherever the law allows.',
  'name': 'The company\'s name. The managers can register a trade name if you ever want to do business under something else.',
  'term': 'The company lasts until you end it under Article 12. Nothing ends it by accident.',
  'office': 'Fill in the main office address. The managers can move it. Georgia requires a registered agent, which is named in the Articles and can be changed by the managers.',
  'purpose': 'Buy, fix, rent, split, finance, manage, and sell real estate, directly or through a subsidiary, plus anything lawful that goes with that.',
  'manager-managed-articles': 'This matters more than it looks. Under Georgia law, if the Articles filed with the state don\'t say the company is run by managers, any one member can sign a contract that binds the company to an outsider who has never read this agreement. If the Articles are silent, the managers must amend them.',
  'no-partnership': 'You are LLC members, not partners. The company is treated as a partnership only for taxes.',
  'title': 'Property is owned by the company, not by you. Your ownership is a share of the company, which is personal property, not a share of any particular house.',
  'subsidiaries': 'When a project plan says so, the managers can put a property in its own wholly owned LLC. That is the usual way to keep one property\'s problems from reaching the others. Every vote required for the company is also required for a subsidiary.',
  'limited-liability': 'Company debts are the company\'s. You are not personally on the hook just because you are a member or manager. A personal guarantee you choose to sign is the exception, and that is covered in Section 3.9.',

  // ---------------------------------------------------------------- Article 3
  'capital': 'Who owns what, what everyone puts in, how more money gets called, and what happens when someone doesn\'t pay.',
  'members-schedule': 'Schedule A is the master list: names, addresses, emails, what each member put in, each member\'s cap on future calls, and each member\'s percentage. The managers update it whenever something changes and send everyone the new version within ten days.',
  'initial-contributions': 'Each member pays the amount on Schedule A, in cash, by the due date there. Contributing property or labor instead of cash needs everyone\'s written agreement on its value first. Because the amount is in this signed document, the company can enforce it.',
  'project-plans': 'Before the company buys anything, the managers write a plan: the property, the price, the renovation budget with a contingency, the loan, who is being asked to guarantee it, where the money comes from, the exit and minimum sale price, insurance, and whether it goes in a subsidiary. Four of five approve it in writing, and then the managers run the project inside that plan without more votes.',
  'capital-calls': 'The managers can ask everyone for more money, pro rata, for an approved plan, an emergency, or anything a majority approves. You get at least fifteen business days\' notice. Nobody can be called past the cap they set on Schedule A without agreeing in writing. If someone\'s cap stops them from paying a full share, the others can pick up the shortfall and the percentages adjust.',
  'capital-default': 'Miss a capital call by ten days and you are in default. The others can cover your share and choose one of two things: treat it as their own contribution, which shrinks your percentage and grows theirs, or treat it as a loan to you at 8% that is repaid straight out of your distributions before you see a dollar. While you are in default you can\'t vote. If it isn\'t fixed in thirty days it becomes a buyout trigger at 80% of value.',
  'member-loans': 'A member can lend the company money if a majority of the others approve. It is a real loan, not ownership: it doesn\'t change anyone\'s percentage, it earns 8% unless agreed otherwise, and it is repaid before profits are split.',
  'capital-accounts': 'The tax bookkeeping. Each member has a running account of money in, profit and loss allocated, and money out, kept the way the IRS regulations require. Your CPA handles this.',
  'no-interest': 'You don\'t earn interest on the money you put in, you can\'t pull it back out on your own, and you are not responsible for returning anyone else\'s.',
  'guarantees': 'Nobody has to personally guarantee a loan. If you choose to, the company pays you back anything the lender collects from you, and if the company can\'t, the other members each pay their share within thirty days. The group can also approve a fee for signing a guarantee.',

  // ---------------------------------------------------------------- Article 4
  'allocations': 'How profit and loss are split on the tax books. This is CPA territory. The short version is that it is set up so the tax books follow the cash.',
  'profits-losses': 'Defines profit and loss the way partnership tax rules require, which is slightly different from the checkbook.',
  'allocation': 'Profit and loss are allocated so that each member\'s capital account ends up matching what that member would get if the company sold everything and paid out under the waterfall in Article 5. Tax and cash stay in step.',
  'regulatory': 'Standard IRS safety clauses that every partnership agreement carries. They exist so the allocations hold up on audit.',
  'tax-allocations': 'Tax items follow the book items, with the usual adjustment if someone ever contributes property instead of cash.',
  'transfers-year': 'If a percentage changes mid-year, the managers pick an IRS-approved way to split that year\'s numbers.',

  // ---------------------------------------------------------------- Article 5
  'distributions': 'When cash goes out, and in what order.',
  'distributable-cash': 'The cash available to pay out: everything coming in, minus bills and loan payments due in the next ninety days, minus what is owed to outside creditors, minus reserves.',
  'reserves': 'The managers keep the reserves each project plan calls for, plus up to three months of the company\'s fixed carrying costs. Holding more than that needs a majority vote for a stated reason. Anything above the limit gets paid out.',
  'waterfall': 'The order money goes out: first repay any member loans with interest, second the tax distributions, third give everyone back their unreturned capital in proportion to what they put in, and only then split what is left by percentage. If a member has a default loan against them, their share goes to the lender first.',
  'timing': 'Distributions go out within thirty days of every sale or refinance, and at least quarterly from rents, unless a majority votes to hold the cash for a stated purpose.',
  'tax-distributions': 'Before each quarterly estimated-tax deadline, the company pays each member enough to cover the tax on their share of the company\'s profit, assuming a 40% rate, so nobody owes tax on money they haven\'t received. Those payments are advances against later distributions.',
  'limits': 'The company can\'t pay out money if doing so would leave it unable to pay its bills or with more debt than assets. Georgia law says so, and anyone who knowingly takes such a payment has to give it back.',
  'withholding': 'If the law requires the company to withhold tax from a payment, the withheld amount still counts as paid to you.',
  'in-kind': 'Nobody can demand a house instead of cash. Giving property to a member instead of cash takes an 80% vote and an appraisal.',

  // ---------------------------------------------------------------- Article 6
  'management': 'Who runs things day to day, what they can do on their own, what needs a vote and how big a vote, and the rules on paying members, doing business with members\' own companies, and side deals.',
  'management-by-managers': 'The managers run the company. Members, as members, don\'t.',
  'managers-number': 'The managers are named on Schedule B. A majority of the members appoints them, can remove them at any time for any reason, and fills vacancies. A manager can quit on thirty days\' notice.',
  'managers-action': 'One manager acts alone. Two must agree. Three or more go by majority. Once the managers have approved something, any one of them can sign it, and outsiders can rely on that signature.',
  'managers-authority': 'Inside an approved project plan, the managers can buy, close the loan, hire and pay contractors and professionals, sign leases, run the bank accounts, insure, pay bills, make distributions, issue capital calls, keep the books, file the taxes, settle claims up to $25,000, and handle anything else in the ordinary course. Selling is allowed at or above the minimum price in the plan.',
  'reserved': 'The vote list. 80% (four of five): approving or changing a project plan, any purchase, any sale outside its plan, any loan or lien outside its plan, leases over a year, property distributions, subsidiaries, related-party deals over $10,000, dissolving, bankruptcy, settling claims over $25,000, changing the name or purpose. Everyone: admitting a member, changing anyone\'s percentage, amending this agreement, forcing capital past a cap, merging or selling the whole company, changing tax status. A simple majority: extra capital calls, budget overruns, hiring and firing managers, member loans and pay, rental budgets, choosing the accountant and attorney, holding back cash.',
  'budgets': 'Managers work inside the approved budget. They can go over a line item by 10% or $5,000, whichever is bigger, as long as the whole project stays within 10% of its budget. Beyond that a majority has to approve, and the members answer within five business days. Splitting an invoice to dodge the limit is prohibited. In a true emergency (safety, imminent damage, a government or lender deadline, or keeping insurance in force) the managers can spend up to $25,000 first and tell everyone within two business days.',
  'compensation': 'Managers work for free unless the other members approve a written pay arrangement, which can be a per-project fee, a monthly amount, or a slice of project profit. Out-of-pocket expenses are reimbursed with receipts. A member who does the renovation, management, or brokerage work is paid only under a related-party contract approved under the next section. Nobody is required to put in a set amount of time.',
  'related-party': 'If the company wants to hire a member\'s own business, the member discloses everything in writing first, the price has to be no worse than an outside bid (with an actual competing quote for anything over $10,000), and the members who aren\'t involved approve it. The uninvolved members can cancel the contract for an uncured breach.',
  'outside-activities': 'You can keep investing in real estate on your own, and you don\'t have to offer your own deals to the group. The exception is a deal that came to you through the company: its money, its marketing, its contacts, or its confidential information. Those go to the company first. The company has ten business days to say it is interested and twenty more to approve a plan. If it passes, the deal is yours, on terms no better than you offered the company. Company money, contractors, and information never go to outside projects.',
  'members-not-agents': 'No member can sign for the company or commit it to anything just by being a member. A member who tries is responsible for the damage.',
  'officers': 'The managers can give someone a title and a defined job, and can take it away.',
  'reliance-third-parties': 'A closing attorney or lender can rely on a signed certificate from a manager saying who the managers are and that a vote was taken.',

  // ---------------------------------------------------------------- Article 7
  'members-voting': 'How votes are taken, and what happens when the group is stuck.',
  'voting': 'You vote your percentage. Unless the agreement says otherwise, a simple majority decides. People who don\'t vote: assignees who were never admitted, a member in default, and a member whose interest is being bought out (on that buyout).',
  'meetings': 'Any manager, or members holding 20%, can call a meeting on five business days\' notice. Video and phone count. A majority is a quorum. At least once a year, within ninety days of year end, everyone meets to go over the financials and every project.',
  'written-consent': 'Most votes will be signatures on a written consent rather than a meeting. Electronic signatures and a clear email approval both count. Everyone gets a copy within five business days. Exhibit C is the form.',
  'records-actions': 'Minutes and consents are kept with the company records. Closing attorneys ask for these.',
  'deadlock': 'If a big decision fails twice, at least ten business days apart, anyone can declare a deadlock. Then thirty days of real talks, then mediation at the company\'s expense. If sixty days pass with no resolution: for a fight over whether to sell or refinance a particular property, a majority can force it onto the market at 95% of appraisal or better, and anyone can trigger the buy-sell in the next section.',
  'shotgun': 'The tie-breaker of last resort. One member names a price per percentage point. Every other member then chooses: sell to that member at that price, or buy that member out at the same price. Silence means sell. If anyone chooses to buy, the offeror is bought out by the buyers and the rest stay. If everyone chooses to sell, the offeror buys them all. Cash at closing within ninety days, and the buyers work to get the sellers off any loan guarantees. It can\'t be used more than once a year or while another buyout is pending. Because the person naming the price can end up on either side of it, the price tends to be fair.',

  // ---------------------------------------------------------------- Article 8
  'liability': 'What managers and members owe each other, when they are protected from personal liability, and what insurance the company carries.',
  'duties': 'Managers and members owe the company the duties Georgia law imposes, as adjusted by this agreement (mainly the outside-activities and related-party rules). Acting in good faith under this agreement is protected.',
  'exculpation': 'A manager or member isn\'t personally liable for an honest decision that went badly. The protection stops at disloyalty, bad faith, intentional misconduct, breaking the law, taking an improper personal benefit, or a material breach of this agreement.',
  'indemnification': 'The company covers a manager\'s or member\'s legal costs and losses from acting for the company, and advances the legal fees, unless the conduct falls in the exceptions above. It is paid only from company assets and insurance; nobody gets a capital call to fund it.',
  'insurance': 'Every property carries at least $1,000,000 of liability coverage, full replacement-cost property insurance, builder\'s risk during renovation, flood insurance where required, and whatever the project plan adds. The company may also insure the managers and members against claims from their service.',
  'reliance-professionals': 'A manager who relies in good faith on the CPA, attorney, appraiser, or contractor is protected if that advice turns out wrong.',

  // ---------------------------------------------------------------- Article 9
  'books-tax': 'Records, bank accounts, reports to members, and the tax rules the IRS requires a partnership to have in writing.',
  'books': 'The managers keep complete records at the office: the schedules, the filings, six years of tax returns and financials, every plan, closing, loan, lease, and contract, and all minutes and consents. Any member can inspect and copy them on reasonable notice.',
  'bank-accounts': 'All money stays in accounts in the company\'s name. No mixing with anyone\'s personal funds. When there are two managers, any single transfer over $25,000 (other than scheduled loan payments and closings) needs two approvals.',
  'accounting': 'Books on the cash method unless the CPA recommends otherwise and a majority agrees, kept by a bookkeeper or accountant the managers hire.',
  'reports': 'Every quarter, within forty-five days: per-project budget versus actual, schedule, financing and sale status, plus company financials. Every year, within ninety days: annual statements. By March 15: your K-1, or an estimate by March 15 and the final within thirty days of filing if the return is extended.',
  'tax-classification': 'The company is taxed as a partnership and stays that way unless everyone agrees. If it helps the members, the managers can make Georgia\'s pass-through entity election, which shifts state tax to the company level and is worth asking the CPA about.',
  'partnership-representative': 'The IRS requires one person to speak for the company in an audit, named on Schedule B. That person must keep everyone informed and can\'t settle or extend anything without a majority. Each year the company opts out of the IRS regime that lets the partnership itself be assessed. If the company ever does pay a tax bill on the members\' behalf, each member, including a former member, owes their share.',
  'tax-elections': 'The managers make routine tax elections with the CPA\'s advice, including the one that steps up basis when an interest changes hands.',

  // ---------------------------------------------------------------- Article 10
  'transfers': 'Selling or giving away your interest: mostly not allowed, with a defined path when it is.',
  'transfer-restriction': 'You can\'t sell, give, or pledge your interest except as this article and the buyout article allow. Anything else is void. These interests are unregistered securities, which is one more reason they can\'t just be sold.',
  'permitted-transfers': 'Estate planning is allowed without a vote: you can move your economic interest into your own revocable trust or a company you fully own, as long as you keep control and keep voting it. A sale to another member is allowed, but every other member gets the same chance to buy through the right of first refusal.',
  'rofr': 'If an outsider makes you a real written offer, you tell everyone the terms. The other members have thirty days to buy on the same terms, pro rata, with the option to take up any part others pass on, and the company gets ten more days to take the balance. If they don\'t buy all of it, you have sixty days to sell to the outsider on those terms, but the buyer gets money rights only, no vote, unless admitted under Section 10.5.',
  'assignees': 'Someone who buys or inherits an interest without being admitted gets the money and the tax allocations, is bound by this agreement, and has no vote, no say in management, and no right to force a distribution. A member who sells the whole interest stops being a member.',
  'admission': 'An outsider becomes a voting member only if every other member says yes, the outsider signs the joinder in Exhibit E (and a spousal consent if married), and pays the company\'s costs.',
  'charging-orders': 'If a member\'s personal creditor gets a court order against the interest, the creditor only gets distributions, never a vote or a seat. An order that isn\'t cleared in ninety days, a foreclosure, a divorce decree, or any other involuntary transfer triggers the buyout options in Article 11.',
  'spousal': 'Married members get their spouse to sign Exhibit D within thirty days. If a divorce court awards part of your interest to your spouse, you get sixty days to buy it back at the buyout price, then the company and the other members get the option. Until then the spouse has money rights only.',
  'transfer-expenses': 'The seller pays the company\'s costs of any transfer, and no transfer can happen if it would break securities law or the company\'s tax status.',

  // ---------------------------------------------------------------- Article 11
  'buysell': 'The exit door: what triggers a buyout, whether it is required or optional, the price, and how it is paid.',
  'buysell-events': 'Eight triggers: death, disability, bankruptcy, a creditor\'s order or other involuntary transfer, a divorce award, an uncured capital default, expulsion for cause, and voluntary withdrawal. Everyone has to tell the managers promptly when one happens.',
  'expulsion': 'The others can expel a member for cause, meaning fraud or theft involving the company, a felony, an uncured material breach of this agreement, or willful misconduct or gross negligence that materially harms the company. It takes 75% of the other members\' shares (three of four), after written notice and a chance to respond at a meeting.',
  'withdrawal': 'Nobody can quit in the first two years without the others\' consent. After that, 180 days\' written notice, and not while in default or during a deadlock. Withdrawing doesn\'t entitle you to the value of your interest; the company has the option to buy you out at 90%, and if it doesn\'t, you keep money rights only and lose your vote. This overrides Georgia\'s default rules on withdrawal.',
  'option': 'Death is different from everything else: the company must buy the estate out, at full value, within 120 days of the executor\'s appointment or the final price. For every other trigger, the company has ninety days to elect to buy the whole interest (by majority of the others), then the other members get thirty more days. If nobody buys, the affected member keeps money rights only and the option comes back on the next trigger. The person being bought out doesn\'t vote on it.',
  'purchase-price': 'Net Asset Value times the percentage being bought. Death, disability, bankruptcy, creditor, and divorce buyouts pay 100% of that. Voluntary withdrawal pays 90%. Capital default and expulsion pay 80%. Anything the departing member owes the company comes off the top.',
  'valuation': 'Value is set as of the end of the month before the trigger: every property appraised by a Georgia state-certified appraiser, less a 6% allowance for what it would cost to sell, plus cash and other assets, minus all debt and the cost to finish any renovation in progress. The company picks and pays for the first appraiser. The departing side can object within fifteen days and pay for a second. If the two are within 10%, average them. If not, the two appraisers pick a third and the two closest are averaged. No discount for being a minority owner. The CPA does the math within thirty days and it is final.',
  'payment-terms': 'At closing the buyer pays at least 20% in cash, or all of any life insurance proceeds if that is more. The balance is a five-year note at 6% or the federal rate, whichever is higher, paid monthly, prepayable, and secured by the interest being bought. The note comes due if the company sells everything or dissolves, and the company prepays it out of each sale. The buyer works to release the seller from loan guarantees and covers any that can\'t be released.',
  'life-insurance': 'The company can, and if a majority says so must, buy term life insurance on each member for roughly that member\'s share of value, so a death buyout is funded with insurance instead of five years of payments. A member who leaves can buy their own policy from the company for the unused premium.',
  'continuation': 'None of these events ends the company. It keeps going, and the departing member or their estate holds money rights only until bought out.',

  // ---------------------------------------------------------------- Article 12
  'dissolution': 'Ending the company on purpose, and never by accident.',
  'dissolution-events': 'The company ends only by an 80% written vote, a court order, or a legal event the agreement can\'t override. A death, a departure, a bankruptcy, or selling the last property does not end it.',
  'winding-up': 'The managers, or a liquidator a majority picks, wrap things up. They can finish projects in progress if that brings in more money.',
  'liquidation': 'Pay outside creditors and members who are creditors first, set aside a reserve for claims that might surface (buyer warranty claims, liens, tenant suits) for up to two years, then pay members: return of capital first, then percentages. Nobody has to write a check to cover a negative capital account.',
  'liquidation-in-kind': 'With an 80% vote, a member who wants to keep a property can take it at appraised value, with its debt, as part of their share.',
  'termination-certificate': 'When everything is paid out, the managers file the final paperwork with the state.',

  // ---------------------------------------------------------------- Article 13
  'general': 'The boilerplate that makes everything else enforceable, plus how disputes get resolved.',
  'notices': 'Notices are in writing to the address and email on Schedule A. Hand delivery, overnight courier, certified mail, or email before 5 p.m. Eastern on a business day all work. The serious ones (a default, a capital call, an outside offer, a deadlock, a buy-sell offer, a buyout trigger) have to go by email plus one of the other methods.',
  'amendments': 'Changing this agreement takes everyone\'s signature. Only Schedules A and B can be updated by the managers, and only to reflect changes this agreement already allows.',
  'confidentiality': 'Company information stays inside the group and its advisors, with the usual exceptions, for two years after you leave.',
  'disputes': 'For a claim that someone broke this agreement: thirty days of talking, then mediation, then binding arbitration before an experienced Georgia business attorney in the county of the office. Court is still available for an emergency injunction. The loser pays the winner\'s legal fees. Deadlocks are handled by Article 7, not here. If the five of you would rather keep the right to sue in court, delete paragraph (c).',
  'governing-law': 'Georgia law, and the courts in the county of the company\'s office, for anything arbitration doesn\'t cover.',
  'binding': 'Binds heirs and successors. Outsiders, including creditors, can\'t enforce it.',
  'severability': 'If a court throws out one clause, the rest still stands.',
  'entire': 'This document is the whole deal. Earlier drafts and side conversations don\'t count.',
  'waiver': 'Letting something slide once doesn\'t waive it next time. Waivers must be in writing.',
  'counterparts': 'Everyone can sign separately, electronically or by PDF.',
  'further-assurances': 'Members will sign the follow-up paperwork lenders and closing attorneys need.',
  'independent-counsel': 'The company\'s attorney represents the company, not you. Each of you was told to get your own advice before signing.',
  'time': 'Deadlines matter. If one lands on a weekend or holiday it moves to the next business day.',
  'survival': 'The obligations that outlive membership or the company: capital default, guarantee contributions, indemnification, audit tax shares, buyout notes, confidentiality, and dispute resolution.',
  'construction': 'Everyone had the chance to review this with a lawyer, so no clause is read against whoever drafted it.',

  // ---------------------------------------------------------------- Schedules and exhibits
  'schedule-a': 'The master list of owners and money. Nothing works until this is filled in and signed.',
  'schedule-b': 'Who runs the company, and who deals with the IRS.',
  'exhibit-c': 'The one-page form you will sign to approve a project or any other vote taken without a meeting.',
  'exhibit-d': 'The form a married member\'s spouse signs so a divorce or death can\'t put an outsider in the company.',
  'exhibit-e': 'The form anyone joining later signs to be bound by this agreement.',
};
