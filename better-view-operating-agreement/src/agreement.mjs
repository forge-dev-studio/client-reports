// Better View Investment Group LLC, Operating Agreement redraft.
// Single source for the web page and the Word file. Cross-references are written
// as {{ref:section-id}} or {{art:article-id}} and resolved at build time, so
// section numbers can never go stale. Body items: a string is a paragraph;
// {list:[...]} renders (a)(b)(c), nested {sub:[...]} renders (i)(ii)(iii);
// {defs:[[term, text], ...]} renders a definitions list; {table:{...}} a table;
// {sig:{...}} a signature block; {blank:n} vertical space for handwriting.

export const meta = {
  company: 'Better View Investment Group LLC',
  shortName: 'Better View',
  state: 'Georgia',
  version: 'Redraft for attorney review',
  date: 'September 2026',
  dateISO: '2026-09-11',
  docxFile: 'Better-View-Investment-Group-LLC-Operating-Agreement-DRAFT-2026-09.docx',
};

export const notes = {
  title: 'Note to the Members and their attorney',
  remove: 'Remove this page before signing.',
  intro: [
    'This is a full redraft of the September 2026 draft operating agreement. It applies the thirty-five findings in the review that accompanies it, and it is written to be handed to a Georgia business attorney as the base for the signing version. It is not legal advice and it has not been reviewed by an attorney. Where the review said a business decision had to be made before the redraft could be written, this draft makes a reasonable default choice and lists it below so the five of you can change it.',
    'Every bracketed item, for example [__________], is a fact only the Members can supply. Nothing in the agreement works until Schedule A and Schedule B are filled in and every Member has signed.',
  ],
  decisionsHeading: 'Decisions this draft makes for you (change any of them)',
  decisions: [
    ['Who approves deals', 'A Supermajority in Interest, which is 80% and means four of five while the five of you hold equal shares, approves each Project Plan: the property, the price, the budget, the financing, and the minimum sale price. The Managers then buy, borrow, renovate, and sell inside that plan without another vote. Unanimous Consent is kept only for admitting a Member, changing anyone\'s Percentage Interest, amending the agreement, forcing capital beyond a Member\'s commitment, and changing the tax classification. The draft ends the five-of-five veto on every purchase, sale, and $5,000 expense.', 'reserved'],
    ['Managers', 'Named on Schedule B, appointed and removable by a Majority in Interest with or without cause. If two are serving they act together; three or more act by majority. They serve without pay unless the other Members approve a written arrangement. A Member who does construction, management, or brokerage work for the Company is paid only under a disclosed, bid-checked contract approved by the disinterested Members.', 'compensation'],
    ['Capital', 'Each Member states an Initial Capital Contribution and a Maximum Additional Commitment on Schedule A, and nobody can be called past that cap without written consent. Managers may call capital inside an approved budget; overruns beyond the greater of 10% or $5,000 on a line item, or 10% on a project, need a Majority in Interest. A Member who does not pay loses the vote while in default, and the paying Members choose between dilution and an 8% loan to the defaulter that is repaid out of the defaulter\'s own distributions. An uncured default is a buyout trigger at 80% of value.', 'capital-default'],
    ['Money out', 'Quarterly tax distributions at an assumed 40% rate, reserves capped at three months of carrying costs unless the Members approve more, distributions within 30 days after every sale or refinance, and a waterfall that pays member loans, then tax distributions, then returns capital, then splits the rest by Percentage Interest.', 'waterfall'],
    ['Outside deals', 'Members may invest in real estate on their own without offering it to the group. The exception is a Company Opportunity, meaning a deal that came through Company money, Company contacts, or Company information, which must be offered to the Company first, with a ten-business-day answer.', 'outside-activities'],
    ['Personal guarantees', 'No Member is required to sign one. A Member who does is indemnified by the Company, the other Members contribute pro rata to anything the Company cannot cover, and the group may approve a guarantee fee.', 'guarantees'],
    ['The exit door', 'Death is a mandatory buyout at 100% of value, paid first from any life insurance and otherwise 20% down with the balance over 60 months at not less than 6%. Disability, bankruptcy, a creditor\'s charging order, and a divorce award are buyout options at 100%. A Member may withdraw after the second anniversary on 180 days\' notice, which is an option at 90%. Expulsion for cause and capital default are options at 80%. Value is Net Asset Value: appraised property less an estimated 6% cost of sale, less all debt, with no minority or marketability discount, and a three-appraiser tie-break.', 'purchase-price'],
    ['Deadlock', 'Two failed votes on a reserved decision, then 30 days of talks, then mediation. If that fails, a Majority in Interest may force the sale of the property in dispute at not less than 95% of appraisal, or any Member may trigger a buy-sell: name a price, and each other Member chooses to buy or sell at it, in cash.', 'deadlock'],
    ['Disputes', 'Negotiation, then mediation, then binding arbitration in the county of the principal office, with attorney\'s fees to the prevailing party. If the five of you would rather keep the right to go to court, delete the arbitration paragraph and keep the venue clause.', 'disputes'],
    ['Dissolution', 'Only by an 80% vote or a court order. Selling the last house does not dissolve the Company, and neither does a Member\'s death, withdrawal, or bankruptcy.', 'dissolution-events'],
    ['Tax', 'Taxed as a partnership. Allocations follow the distribution waterfall (target allocations) so the tax books and the cash agree. The partnership representative is named on Schedule B and cannot settle an audit without a Majority in Interest. The Company elects out of the centralized audit regime each year it can, and may make the Georgia pass-through entity tax election when it helps.', 'partnership-representative'],
    ['One entity or one per property', 'The draft lets the Managers hold each property in a wholly owned subsidiary when the Project Plan says so. Whether to do that for every property, and whether to keep long-term rentals in a separate company from flips, is a question for the attorney and the CPA together.', 'subsidiaries'],
  ],
  blanksHeading: 'Blanks to fill before signing',
  blanks: [
    'The Effective Date in the first paragraph.',
    'Formation date and Secretary of State control number ({{ref:formation}}).',
    'Principal office address ({{ref:office}}). The registered agent and office are stated in the Articles.',
    'Schedule A: each Member\'s legal name, mailing address, email for notices, Initial Capital Contribution, its due date, and Maximum Additional Commitment.',
    'Schedule B: the initial Managers and the partnership representative.',
    'The Assumed Tax Rate if 40% is wrong for the group ({{ref:defined-terms}}).',
    'Insurance limits ({{ref:insurance}}), the two-signature threshold on bank transfers ({{ref:bank-accounts}}), and the Managers\' settlement authority ({{ref:managers-authority}}) if $25,000 and $1,000,000 are not the right numbers.',
    'The waiting period before voluntary withdrawal, set at two years ({{ref:withdrawal}}).',
  ],
  attorneyHeading: 'For the attorney',
  attorney: [
    'Confirm the Articles of Organization state that the Company is managed by managers. Under O.C.G.A. § 14-11-301 that statement, not the operating agreement alone, is what prevents any single Member from binding the Company to an outsider who has not read this document ({{ref:manager-managed-articles}}).',
    'Confirm every statute reference against the current Code, particularly §§ 14-11-301, 14-11-305, 14-11-402, 14-11-407, 14-11-408, 14-11-502 through 14-11-504, 14-11-601.1, 14-11-603, 14-11-605, and 48-7-23.',
    'Review the treatment of a Bankruptcy Event as a buyout trigger ({{ref:buysell-events}}) against federal bankruptcy law, and the target-allocation and regulatory-allocation language in {{art:allocations}} with the Company\'s CPA.',
    'The Members expect to sign after your review. Georgia does not require witnesses or a notary for an operating agreement, but a lender may ask for notarized signatures; add acknowledgment blocks if so.',
  ],
};

export const preamble = [
  'This Operating Agreement (this "Agreement") of Better View Investment Group LLC, a Georgia limited liability company (the "Company"), is made effective as of [__________], 2026 (the "Effective Date") by and among the Persons named as Members on Schedule A (each a "Member" and together the "Members") and the Company.',
  'The Members formed the Company to acquire, improve, lease, and sell real property together, and they enter into this Agreement to set out how the Company is owned, funded, managed, and, when the time comes, how a Member leaves. Capitalized terms are defined in {{art:definitions}}.',
];

export const articles = [
  // ---------------------------------------------------------------- 1
  {
    id: 'definitions',
    title: 'Definitions and Interpretation',
    sections: [
      {
        id: 'defined-terms',
        title: 'Defined Terms',
        body: [
          'In this Agreement, the following terms have the meanings given below. Terms defined elsewhere in this Agreement, in quotation marks, have the meanings given where they are defined.',
          { defs: [
            ['Act', 'the Georgia Limited Liability Company Act, O.C.G.A. § 14-11-100 and following, as amended from time to time.'],
            ['Affiliate', 'of a Person means any other Person that directly or indirectly controls, is controlled by, or is under common control with that Person, and, for an individual, that individual\'s spouse, parents, siblings, and descendants and any trust or entity established for the benefit of any of them.'],
            ['Approved Project Plan', 'has the meaning given in {{ref:project-plans}}.'],
            ['Articles', 'the Articles of Organization of the Company filed with the Georgia Secretary of State, as amended.'],
            ['Assumed Tax Rate', 'forty percent (40%), being the Managers\' good-faith estimate of the highest combined marginal federal and Georgia income tax rate, including tax on net earnings from self-employment where applicable, that applies to any Member. The Managers may revise the rate once each Fiscal Year with notice to the Members.'],
            ['Bankruptcy Event', 'means, as to a Member, that the Member (a) files a voluntary petition in bankruptcy, (b) is adjudicated bankrupt or insolvent, (c) makes a general assignment for the benefit of creditors, (d) files a petition or answer seeking reorganization, arrangement, composition, or similar relief under any law, (e) is the subject of an order for relief in an involuntary bankruptcy proceeding that is not dismissed within ninety (90) days, or (f) has a trustee, receiver, or liquidator appointed for the Member or for all or any substantial part of the Member\'s property, and the appointment is not vacated within ninety (90) days.'],
            ['Business Day', 'any day other than a Saturday, a Sunday, or a day on which banks in Georgia are authorized or required to close.'],
            ['Buy-Sell Event', 'has the meaning given in {{ref:buysell-events}}.'],
            ['Capital Account', 'has the meaning given in {{ref:capital-accounts}}.'],
            ['Capital Call', 'has the meaning given in {{ref:capital-calls}}.'],
            ['Capital Contribution', 'the total amount of money, and the agreed net fair market value of any property, contributed to the Company by a Member or the Member\'s predecessor in interest, including any Default Contribution.'],
            ['Code', 'the Internal Revenue Code of 1986, as amended.'],
            ['Company Opportunity', 'has the meaning given in {{ref:outside-activities}}.'],
            ['Confidential Information', 'has the meaning given in {{ref:confidentiality}}.'],
            ['Default Advance, Default Amount, Default Contribution, and Defaulting Member', 'have the meanings given in {{ref:capital-default}}.'],
            ['Disability', 'means, as to a Member, that the Member is unable, because of physical or mental illness or injury, to participate in the affairs of the Company for one hundred eighty (180) consecutive days or for two hundred forty (240) days in any period of three hundred sixty-five (365) days, or that a court of competent jurisdiction has declared the Member incompetent or has appointed a guardian or conservator for the Member. If the Managers and the affected Member (or the Member\'s representative) disagree about whether a Disability exists, the question is decided by a licensed physician selected by the Managers and reasonably acceptable to the affected Member or the Member\'s representative.'],
            ['Distributable Cash', 'has the meaning given in {{ref:distributable-cash}}.'],
            ['Economic Interest', 'a Person\'s share of the Profits, Losses, and distributions of the Company, without any right to vote, to participate in management, or to receive information beyond what the Act requires.'],
            ['Economic Interest Holder', 'a Person who holds an Economic Interest and is not a Member, including a Transferee that has not been admitted as a Member under {{ref:admission}} and the estate or successor of a Member under {{art:buysell}}.'],
            ['Emergency Expenditure', 'has the meaning given in {{ref:budgets}}.'],
            ['Fiscal Year', 'the calendar year, or any shorter period at the beginning or end of the Company\'s existence.'],
            ['Initial Capital Contribution', 'the amount stated for a Member on Schedule A under that heading.'],
            ['Majority in Interest', 'Members entitled to vote on a matter who together hold more than fifty percent (50%) of the Percentage Interests held by all Members entitled to vote on that matter.'],
            ['Managers', 'the Persons named as Managers on Schedule B and any successor or additional Managers appointed under {{ref:managers-number}}, and "Manager" means any one of them.'],
            ['Maximum Additional Commitment', 'the amount stated for a Member on Schedule A under that heading, being the total additional Capital Contributions, beyond the Initial Capital Contribution, that the Member may be required to make under {{ref:capital-calls}}.'],
            ['Member', 'each Person named as a Member on Schedule A and each Person later admitted as a Member under this Agreement, in each case for so long as the Person holds a Membership Interest.'],
            ['Member Loan', 'has the meaning given in {{ref:member-loans}}.'],
            ['Membership Interest', 'a Member\'s entire interest in the Company, including the Member\'s Economic Interest, the right to vote and to participate in management as this Agreement provides, and the right to information.'],
            ['Net Asset Value', 'has the meaning given in {{ref:valuation}}.'],
            ['Percentage Interest', 'as to a Member or Economic Interest Holder, the percentage stated for that Person on Schedule A, as adjusted under this Agreement. The Percentage Interests of all Members and Economic Interest Holders always total one hundred percent (100%).'],
            ['Person', 'an individual, trust, estate, corporation, limited liability company, partnership, association, or other entity.'],
            ['Profits and Losses', 'have the meanings given in {{ref:profits-losses}}.'],
            ['Project', 'a real estate acquisition, renovation, rental, subdivision, or development undertaken by the Company, directly or through a Subsidiary.'],
            ['Project Plan', 'has the meaning given in {{ref:project-plans}}.'],
            ['Related Party', 'a Member, a Manager, or an Affiliate of a Member or a Manager.'],
            ['Reserves', 'amounts set aside under {{ref:reserves}}.'],
            ['Reserved Decision', 'a decision listed in {{ref:reserved}}.'],
            ['Subsidiary', 'an entity all of whose ownership interests are held by the Company.'],
            ['Supermajority in Interest', 'Members entitled to vote on a matter who together hold at least eighty percent (80%) of the Percentage Interests held by all Members entitled to vote on that matter.'],
            ['Tax Distribution', 'has the meaning given in {{ref:tax-distributions}}.'],
            ['Transfer', 'any sale, assignment, gift, exchange, pledge, encumbrance, or other disposition of all or any part of a Membership Interest or an Economic Interest, whether voluntary, involuntary, or by operation of law, and "Transferee" and "Transferor" have corresponding meanings.'],
            ['Treasury Regulations', 'the income tax regulations issued under the Code, as amended.'],
            ['Unanimous Consent', 'the approval of all Members entitled to vote on the matter.'],
            ['Unreturned Capital Contribution', 'as to a Member or Economic Interest Holder, the Person\'s total Capital Contributions less all distributions the Person has received under {{ref:waterfall}}(c) and {{ref:liquidation}}(c).'],
          ] },
        ],
      },
      {
        id: 'interpretation',
        title: 'Interpretation',
        body: [
          { list: [
            'Headings are for convenience only and do not affect meaning.',
            '"Including" means "including without limitation."',
            'References to Articles, Sections, Schedules, and Exhibits are to those of this Agreement, and the Schedules and Exhibits are part of this Agreement.',
            'The singular includes the plural and the plural the singular.',
            '"Written" and "in writing" include electronic communications that satisfy {{ref:notices}}.',
            'A Member who is not entitled to vote on a matter under this Agreement, and the Percentage Interest of that Member, are disregarded in determining whether a Majority in Interest, a Supermajority in Interest, or Unanimous Consent has been obtained on that matter.',
            'References to a statute include the statute as amended and any successor provision.',
          ] },
        ],
      },
    ],
  },
  // ---------------------------------------------------------------- 2
  {
    id: 'organization',
    title: 'Organization',
    sections: [
      { id: 'formation', title: 'Formation', body: [
        'The Company was formed as a Georgia limited liability company by the filing of the Articles with the Georgia Secretary of State on [__________], Control Number [__________]. The rights and obligations of the Members and the Managers are as stated in the Act except as this Agreement provides otherwise. To the fullest extent the Act permits, this Agreement governs wherever it differs from a default rule of the Act.',
      ] },
      { id: 'name', title: 'Name', body: [
        'The name of the Company is Better View Investment Group LLC. The Managers may conduct the Company\'s business under that name or under any trade name they register.',
      ] },
      { id: 'term', title: 'Term', body: [
        'The Company continues perpetually until it is dissolved and wound up under {{art:dissolution}}.',
      ] },
      { id: 'office', title: 'Principal Office; Registered Agent', body: [
        'The principal office of the Company is at [__________], or any other place the Managers select with notice to the Members. The Company shall continuously maintain a registered office and a registered agent in Georgia as the Act requires. The initial registered agent and registered office are stated in the Articles, and the Managers may change them.',
      ] },
      { id: 'purpose', title: 'Purpose', body: [
        'The purpose of the Company is to acquire, own, renovate, improve, subdivide, develop, finance, lease, manage, and sell residential, rural, and commercial real property, directly or through Subsidiaries, and to engage in any lawful activity related to that purpose or otherwise permitted under the Act.',
      ] },
      { id: 'manager-managed-articles', title: 'Management by Managers; Articles', body: [
        'The Company is managed by Managers as provided in {{art:management}}. If the Articles do not state that management of the Company is vested in one or more managers, the Managers shall promptly file an amendment to the Articles so stating, so that under O.C.G.A. § 14-11-301 no Member, acting solely in the capacity of a Member, is an agent of the Company.',
      ] },
      { id: 'no-partnership', title: 'No Partnership', body: [
        'The Members intend the Company to be a limited liability company under the Act and to be treated as a partnership only for federal and state income tax purposes. No Member is a partner of, or an agent for, any other Member for any other purpose.',
      ] },
      { id: 'title', title: 'Title to Property; Nature of Interests', body: [
        'All property of the Company shall be held in the name of the Company or of a Subsidiary. No Member or Economic Interest Holder has any interest in specific Company property. A Membership Interest and an Economic Interest are personal property.',
      ] },
      { id: 'subsidiaries', title: 'Subsidiaries', body: [
        'When an Approved Project Plan so provides, the Managers may form a Subsidiary to acquire and hold a particular property, and may cause the Company to act as the sole member and manager of that Subsidiary. References in this Agreement to Company property, debt, insurance, and Projects include those of a Subsidiary, and every approval required for the Company is required for the same action by a Subsidiary.',
      ] },
      { id: 'limited-liability', title: 'Limited Liability', body: [
        'Except as the Act expressly requires, no Member, Manager, or Economic Interest Holder is liable for any debt, obligation, or liability of the Company or a Subsidiary, whether arising in contract, tort, or otherwise, solely by reason of being a Member, Manager, or Economic Interest Holder.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 3
  {
    id: 'capital',
    title: 'Members and Capital',
    sections: [
      { id: 'members-schedule', title: 'Members; Schedule A', body: [
        'The names, addresses, email addresses for notice, Initial Capital Contributions, Maximum Additional Commitments, and Percentage Interests of the Members are stated on Schedule A. The Managers shall amend Schedule A, without a vote, to reflect any change made in accordance with this Agreement, and shall deliver the amended Schedule A to every Member within ten (10) days after the change.',
      ] },
      { id: 'initial-contributions', title: 'Initial Capital Contributions', body: [
        'Each Member shall contribute to the Company, in cash, the Initial Capital Contribution stated for that Member on Schedule A, on or before the due date stated there. A Member may contribute property or services instead of cash only with Unanimous Consent, at the value the Members unanimously agree in writing before the contribution is made. Each Member\'s promise to contribute is set out in this signed writing as O.C.G.A. § 14-11-402 requires and is enforceable by the Company.',
      ] },
      { id: 'project-plans', title: 'Project Plans', body: [
        { list: [
          { text: 'Before the Company or a Subsidiary contracts to acquire any real property, the Managers shall deliver to every Member a written plan (a "Project Plan") describing:', sub: [
            'the property and the proposed purchase price;',
            'the renovation or development scope and budget, including a contingency;',
            'the proposed financing, including the lender, the loan amount, the interest rate or rate range, the term, and any personal guarantee that will be requested and from whom;',
            'the sources of funds, including any Capital Call;',
            'the expected hold period and exit, including the minimum acceptable sale price or the leasing plan;',
            'the insurance to be carried;',
            'whether the property will be held by a Subsidiary; and',
            'the Reserves to be maintained for the Project.',
          ] },
          'A Project Plan becomes an "Approved Project Plan" when a Supermajority in Interest approves it in writing.',
          'An Approved Project Plan may be amended only by the vote required to approve it, except as {{ref:budgets}} allows.',
        ] },
      ] },
      { id: 'capital-calls', title: 'Capital Calls', body: [
        { list: [
          'The Managers may issue a written call for additional Capital Contributions (a "Capital Call") to all Members, pro rata by Percentage Interests, for funds required (i) by an Approved Project Plan, (ii) for an Emergency Expenditure, or (iii) for any other purpose approved by a Majority in Interest.',
          'A Capital Call must state the total amount called, each Member\'s share, the purpose, and the due date, which may not be earlier than fifteen (15) Business Days after the Capital Call is given.',
          'No Member is obligated to make additional Capital Contributions that would cause the Member\'s total Capital Contributions after the Initial Capital Contribution to exceed the Member\'s Maximum Additional Commitment, unless the Member agrees in writing. A Member may increase the Member\'s Maximum Additional Commitment at any time by written notice to the Managers, and Schedule A shall be amended accordingly.',
          'Each Member shall pay the Member\'s share of each Capital Call, up to the limit in clause (c), on or before the due date. Amounts paid are Capital Contributions.',
          'If a Member\'s share of a Capital Call is reduced by the limit in clause (c), the Managers shall offer the shortfall to the other Members pro rata by Percentage Interests, and any Member who funds it makes a Capital Contribution and the Percentage Interests are recomputed as provided in {{ref:capital-default}}(b)(i).',
        ] },
      ] },
      { id: 'capital-default', title: 'Default in a Capital Call', body: [
        { list: [
          'A Member who fails to pay all of the Member\'s share of a Capital Call, within the limit in {{ref:capital-calls}}(c), within ten (10) days after its due date is a "Defaulting Member," and the unpaid amount is the "Default Amount."',
          { text: 'The Managers shall promptly give the Defaulting Member and every other Member written notice of the default. Within fifteen (15) days after that notice, the Members who are not in default may advance the Default Amount, in proportion to their Percentage Interests or in any other proportion they agree. Each advancing Member elects, by written notice given with the advance, to treat the advance as either:', sub: [
            'a "Default Contribution," meaning a Capital Contribution by the advancing Member, in which case the Percentage Interests of all Members and Economic Interest Holders are recomputed so that each Person\'s Percentage Interest equals that Person\'s total Capital Contributions divided by the total Capital Contributions of all Persons, and the Managers shall amend Schedule A accordingly; or',
            'a "Default Advance," meaning a loan by the advancing Member to the Defaulting Member, the proceeds of which are paid to the Company as a Capital Contribution by the Defaulting Member. A Default Advance bears simple interest at eight percent (8%) per year, is due on the earlier of twelve (12) months after the advance and the date of the next distribution to the Defaulting Member, and is repaid first from every distribution otherwise payable to the Defaulting Member, which the Company shall pay directly to the advancing Member until the Default Advance and accrued interest are paid in full.',
          ] },
          'While any Default Amount or Default Advance remains unpaid, the Defaulting Member is not entitled to vote on any matter, and the Defaulting Member\'s Percentage Interest is disregarded in computing any vote.',
          'A default under this Section that is not cured within thirty (30) days after the notice in clause (b) is a Buy-Sell Event under {{ref:buysell-events}}, whether or not a Default Contribution or Default Advance has been made.',
          'The remedies in this Section are in addition to every other remedy available to the Company, including an action to collect the Default Amount with interest at eight percent (8%) per year and the Company\'s reasonable attorney\'s fees and costs.',
        ] },
      ] },
      { id: 'member-loans', title: 'Member Loans', body: [
        'With the approval of a Majority in Interest, computed without the Percentage Interest of the lending Member, a Member may lend money to the Company on the terms the Members approve (a "Member Loan"). A Member Loan is a debt of the Company and not a Capital Contribution, does not change any Percentage Interest, and is repaid under {{ref:waterfall}}(a) before any distribution to the Members. Unless the approval provides otherwise, a Member Loan bears simple interest at eight percent (8%) per year and is due on the earlier of its stated maturity and the closing of the next sale or refinancing of any Company property.',
      ] },
      { id: 'capital-accounts', title: 'Capital Accounts', body: [
        'The Company shall maintain a separate capital account (a "Capital Account") for each Member and Economic Interest Holder in accordance with Treasury Regulations § 1.704-1(b)(2)(iv). A Capital Account is increased by the Capital Contributions and the Profits and items of income and gain allocated to the Person, is decreased by the distributions made to and the Losses and items of loss and deduction allocated to the Person, and is otherwise adjusted as those regulations require. A Transferee succeeds to the Capital Account of the Transferor to the extent of the interest Transferred.',
      ] },
      { id: 'no-interest', title: 'No Interest; No Withdrawal of Capital', body: [
        'No Member is entitled to interest on any Capital Contribution or Capital Account, to withdraw any part of a Capital Contribution, or to receive any distribution, except as this Agreement provides. No Member is personally liable for the return of any other Member\'s Capital Contribution.',
      ] },
      { id: 'guarantees', title: 'Personal Guarantees', body: [
        { list: [
          'No Member is required to guarantee any debt of the Company or a Subsidiary. A Member who agrees to give a guarantee does so voluntarily, on terms disclosed to all Members in the Approved Project Plan for the Project concerned.',
          'The Company shall indemnify each Member who gives a guarantee against any amount the Member pays under it, together with the Member\'s costs and reasonable attorney\'s fees, to the extent of Company assets, and the Company\'s obligation ranks as a debt owed to a Member under {{ref:waterfall}}(a).',
          'To the extent the Company does not reimburse a guarantor Member within thirty (30) days after written demand, each other Member shall pay the guarantor Member, within thirty (30) days after written demand, that Member\'s share of the unreimbursed amount, in proportion to the Percentage Interests of all Members at the time the guaranteed debt was incurred. The Company\'s indemnity obligation then runs to each contributing Member in proportion to the amounts they paid.',
          'A Majority in Interest, computed without the Percentage Interest of the guarantor Member, may approve a guarantee fee payable by the Company to a Member who gives a guarantee.',
        ] },
      ] },
    ],
  },
  // ---------------------------------------------------------------- 4
  {
    id: 'allocations',
    title: 'Allocations',
    sections: [
      { id: 'profits-losses', title: 'Profits and Losses', body: [
        '"Profits" and "Losses" mean, for each Fiscal Year or other period, the Company\'s taxable income or loss for that period determined under Code § 703(a), adjusted as Treasury Regulations § 1.704-1(b)(2)(iv) requires, including by treating tax-exempt income as income, by treating nondeductible expenditures described in Code § 705(a)(2)(B) as deductions, and by computing depreciation and gain or loss with respect to property whose book value differs from its adjusted tax basis by reference to book value.',
      ] },
      { id: 'allocation', title: 'Allocation of Profits and Losses', body: [
        'After giving effect to {{ref:regulatory}}, Profits and Losses for each Fiscal Year shall be allocated among the Members and Economic Interest Holders so that, as nearly as possible, each Person\'s Capital Account balance at the end of the Fiscal Year equals the amount that would be distributed to that Person if the Company sold all of its assets for their book values, paid all of its liabilities (limiting each nonrecourse liability to the book value of the property that secures it), and distributed the remaining cash under {{ref:liquidation}}(c). The Managers may allocate items of income, gain, loss, and deduction, rather than Profits and Losses, where necessary to achieve that result.',
      ] },
      { id: 'regulatory', title: 'Regulatory Allocations', body: [
        'The "qualified income offset," "minimum gain chargeback," "partner nonrecourse debt minimum gain chargeback," and nonrecourse deduction provisions of Treasury Regulations §§ 1.704-1(b) and 1.704-2 are incorporated in this Agreement by reference and apply before {{ref:allocation}}. To the extent those provisions cause a Person\'s Capital Account to differ from what it would have been without them, later allocations shall be made, consistent with those regulations, so as to offset that effect as quickly as possible.',
      ] },
      { id: 'tax-allocations', title: 'Tax Allocations', body: [
        'Items of income, gain, loss, and deduction for income tax purposes shall be allocated in the same manner as the corresponding book items, except that items with respect to property whose book value differs from its adjusted tax basis shall be allocated under Code § 704(c) and the Treasury Regulations using any permitted method the Managers select with the advice of the Company\'s accountant.',
      ] },
      { id: 'transfers-year', title: 'Changes During a Year', body: [
        'If any Percentage Interest changes during a Fiscal Year, allocations for that year shall be made using any method permitted by Code § 706 and the Treasury Regulations that the Managers select.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 5
  {
    id: 'distributions',
    title: 'Distributions',
    sections: [
      { id: 'distributable-cash', title: 'Distributable Cash', body: [
        '"Distributable Cash" means, as of any date, all cash of the Company from operations, rental income, sales, refinancing, insurance and condemnation proceeds, and every other source, less (a) all Company expenses and debt service then due or due within the following ninety (90) days, (b) all other amounts then payable to creditors who are not Members, and (c) Reserves.',
      ] },
      { id: 'reserves', title: 'Reserves', body: [
        'The Managers shall maintain Reserves in the amounts stated in each Approved Project Plan and, for the Company as a whole, in an amount not exceeding three (3) months of the Company\'s fixed carrying costs (debt service, property taxes, insurance, and utilities), unless a Majority in Interest approves a larger amount for a stated purpose. Reserves in excess of the amounts so authorized are Distributable Cash.',
      ] },
      { id: 'waterfall', title: 'Order of Distributions', body: [
        { list: [
          'first, to the holders of Member Loans and other amounts owed by the Company to Members under this Agreement, pro rata by unpaid balance, until all accrued interest and then all principal has been paid;',
          'second, to the Members and Economic Interest Holders, the Tax Distributions required by {{ref:tax-distributions}} for the period, to the extent not already made;',
          'third, to the Members and Economic Interest Holders, in proportion to their Unreturned Capital Contributions, until each has received an amount equal to that Person\'s Unreturned Capital Contribution; and',
          'fourth, to the Members and Economic Interest Holders in proportion to their Percentage Interests.',
        ], lead: 'Distributable Cash shall be distributed in the following order:' },
        'Distributions are payable to the Person shown on Schedule A as of the date the Managers set as the record date, subject to {{ref:capital-default}}(b)(ii), under which distributions otherwise payable to a Defaulting Member are paid to the holder of a Default Advance.',
      ] },
      { id: 'timing', title: 'Timing', body: [
        'The Managers shall distribute Distributable Cash (a) within thirty (30) days after the closing of any sale or refinancing of Company property, and (b) from rental and other operating income, not less often than quarterly, in each case unless a Majority in Interest approves retaining the cash for a purpose stated in the approval.',
      ] },
      { id: 'tax-distributions', title: 'Tax Distributions', body: [
        'Not later than ten (10) days before each date on which federal estimated income tax payments are due from individuals, the Company shall distribute to each Member and Economic Interest Holder, to the extent of Distributable Cash and subject to any restriction in an agreement with a lender, an amount (a "Tax Distribution") equal to the Assumed Tax Rate multiplied by the net taxable income of the Company allocated, or reasonably estimated by the Managers to be allocated, to that Person for the Fiscal Year to date, less all other distributions made to that Person during the Fiscal Year. Tax Distributions are advances against, and reduce, the amounts the recipient would otherwise receive under {{ref:waterfall}}(c) and (d) and {{ref:liquidation}}(c). If Distributable Cash is insufficient to make all Tax Distributions in full, they shall be made in proportion to the amounts each Person would otherwise receive.',
      ] },
      { id: 'limits', title: 'Limits on Distributions', body: [
        'No distribution shall be made if, after giving it effect, the Company would be unable to pay its debts as they become due in the usual course of business, or the Company\'s total assets would be less than the sum of its total liabilities, in each case as O.C.G.A. § 14-11-407 provides, or if the distribution would breach an agreement with a lender. A Person who receives a distribution in knowing violation of this Section shall return it to the Company as O.C.G.A. § 14-11-408 provides. The Managers are responsible for applying this Section before every distribution.',
      ] },
      { id: 'withholding', title: 'Withholding', body: [
        'The Company may withhold from any distribution any amount that federal, state, or local law requires it to withhold, and shall treat the amount withheld as distributed to the Person on whose behalf it was withheld.',
      ] },
      { id: 'in-kind', title: 'Distributions in Kind', body: [
        'No Member or Economic Interest Holder may demand a distribution in any form other than cash. The Company may distribute property in kind only with the approval of a Supermajority in Interest, at the property\'s fair market value determined by appraisal under {{ref:valuation}}(b), and Profits and Losses shall be allocated as if the property had been sold for that value.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 6
  {
    id: 'management',
    title: 'Management',
    sections: [
      { id: 'management-by-managers', title: 'Management by the Managers', body: [
        'The business and affairs of the Company are managed by the Managers. Except for the Reserved Decisions and as this Agreement otherwise provides, the Managers have full and exclusive authority to manage the Company and to make every decision concerning its business, and no Member, acting solely in the capacity of a Member, may bind the Company.',
      ] },
      { id: 'managers-number', title: 'Number, Appointment, Term, and Removal', body: [
        { list: [
          'The Company has one or more Managers. The initial Managers are the Persons named on Schedule B. A Majority in Interest may change the number of Managers.',
          'Managers are appointed by a Majority in Interest and serve until they resign, die, suffer a Disability, or are removed. A Manager need not be a Member.',
          'A Majority in Interest may remove any Manager at any time, with or without cause, by written notice to the Manager and to the other Members. A Manager who is a Member votes on the Manager\'s own removal only in the capacity of a Member.',
          'A vacancy in the office of Manager is filled by a Majority in Interest. If no Manager is serving, the Members holding a Majority in Interest may act as the Managers until a Manager is appointed.',
          'A Manager may resign on thirty (30) days\' written notice to the Members.',
          'The Managers shall amend Schedule B, without a vote, to reflect any change made under this Section and shall deliver the amended Schedule B to every Member within ten (10) days.',
        ] },
      ] },
      { id: 'managers-action', title: 'Action by the Managers', body: [
        'If one Manager is serving, that Manager acts alone. If two Managers are serving, they act by mutual agreement. If three or more are serving, they act by majority. The Managers may act at a meeting, by telephone or video conference, or by written consent, including by email. Any one Manager may sign any document that the Managers have approved, and any Person dealing with the Company may rely on the signature of a single Manager as the act of the Company.',
      ] },
      { id: 'managers-authority', title: 'Authority of the Managers', body: [
        { list: [
          'implement each Approved Project Plan, including signing the purchase contract, closing the acquisition, and closing the financing on the terms the plan approves;',
          'sell a property in accordance with its Approved Project Plan at or above the approved minimum sale price, and sign the deed, the closing statement, and every other document required to close;',
          'engage, supervise, and pay contractors, architects, engineers, inspectors, property managers, real estate brokers, attorneys, accountants, and other professionals;',
          'sign leases of Company property on terms consistent with the Approved Project Plan and, otherwise, leases with a term of not more than twelve (12) months;',
          'open and maintain bank accounts in the Company\'s name and designate signatories, subject to {{ref:bank-accounts}};',
          'obtain and maintain the insurance required by {{ref:insurance}};',
          'pay Company expenses and make distributions under {{art:distributions}};',
          'issue Capital Calls under {{ref:capital-calls}};',
          'keep the Company\'s books and records, prepare and file its tax returns and annual registrations, and engage the Company\'s accountant and bookkeeper;',
          'make Emergency Expenditures under {{ref:budgets}};',
          'form and manage Subsidiaries under {{ref:subsidiaries}};',
          'commence, defend, and settle claims by or against the Company involving amounts of up to twenty-five thousand dollars ($25,000); and',
          'take any other action in the ordinary course of the Company\'s business that this Agreement does not reserve to the Members.',
        ], lead: 'Subject to the Reserved Decisions and to the Approved Project Plans, the Managers\' authority includes, without limitation, the power on behalf of the Company to:' },
      ] },
      { id: 'reserved', title: 'Reserved Decisions', body: [
        'Notwithstanding {{ref:managers-authority}}, the Company shall not take, and the Managers shall not cause the Company or any Subsidiary to take, any of the following actions without the approval stated (each a "Reserved Decision"):',
        { list: [
          { text: 'By a Supermajority in Interest:', sub: [
            'approve or amend a Project Plan, including any acquisition of real property;',
            'sell, exchange, or otherwise transfer any real property, except in accordance with its Approved Project Plan;',
            'borrow money, refinance, grant a mortgage, security deed, or other lien on Company property, or guarantee the obligation of any other Person, except as an Approved Project Plan provides;',
            'lease real property for a term longer than twelve (12) months, except as an Approved Project Plan provides;',
            'make any distribution in kind;',
            'form or dissolve a Subsidiary, or acquire an interest in any other entity, except as an Approved Project Plan provides;',
            'enter into any transaction with a Related Party involving more than ten thousand dollars ($10,000) in any Fiscal Year, subject also to {{ref:related-party}};',
            'dissolve the Company under {{ref:dissolution-events}}(a);',
            'file a voluntary petition in bankruptcy for the Company or a Subsidiary;',
            'settle any claim involving more than twenty-five thousand dollars ($25,000);',
            'change the Company\'s name, its purpose, or its state of organization; or',
            'cause the Company to purchase a Membership Interest or Economic Interest, except as {{art:buysell}} requires or permits.',
          ] },
          { text: 'By Unanimous Consent:', sub: [
            'admit a new Member, other than a Transferee admitted under {{ref:admission}};',
            'issue any additional Membership Interest or Economic Interest, or change any Percentage Interest, except as {{ref:capital-calls}}(e), {{ref:capital-default}}, and {{art:buysell}} provide;',
            'amend this Agreement or the Articles, other than amendments to Schedule A and Schedule B that the Managers make under this Agreement;',
            'require any Member to make a Capital Contribution beyond the Member\'s Maximum Additional Commitment;',
            'merge or convert the Company, or sell all or substantially all of its assets in one transaction or a series of related transactions other than in the ordinary course of completing Approved Project Plans; or',
            'elect to have the Company taxed other than as a partnership.',
          ] },
          { text: 'By a Majority in Interest:', sub: [
            'any Capital Call not required by an Approved Project Plan or for an Emergency Expenditure;',
            'budget overruns and Reserves beyond the limits in {{ref:reserves}} and {{ref:budgets}};',
            'the appointment and removal of Managers and the number of Managers;',
            'Member Loans, and any compensation or guarantee fee payable to a Manager or a Member;',
            'the annual operating budget for any property held for rental;',
            'the selection or replacement of the Company\'s accountant or attorney;',
            'retaining Distributable Cash under {{ref:timing}}; and',
            'any other matter that this Agreement submits to a Majority in Interest.',
          ] },
        ] },
      ] },
      { id: 'budgets', title: 'Budgets, Overruns, and Emergencies', body: [
        { list: [
          'The Managers shall manage each Project within the budget in its Approved Project Plan.',
          'Without further approval, the Managers may exceed any line item of a budget by the greater of ten percent (10%) of that line item or five thousand dollars ($5,000), provided that total expenditures for the Project do not exceed the total approved budget, including its contingency, by more than ten percent (10%). Related expenditures shall be aggregated in applying these limits, and no expenditure shall be divided to avoid them.',
          'Overruns beyond clause (b) require the approval of a Majority in Interest. The Managers shall request that approval in writing with an explanation of the cause, and the Members shall respond within five (5) Business Days.',
          'An "Emergency Expenditure" is an expenditure that the Managers reasonably believe is necessary to protect life or safety, to prevent imminent damage to Company property, to meet a deadline in a governmental order or a lender requirement, or to preserve insurance coverage. The Managers may make an Emergency Expenditure without prior approval, up to twenty-five thousand dollars ($25,000) per occurrence, and shall give every Member written notice of it, with the reason and the amount, within two (2) Business Days.',
        ] },
      ] },
      { id: 'compensation', title: 'Compensation and Reimbursement', body: [
        { list: [
          'The Managers serve without compensation unless a Majority in Interest, computed without the Percentage Interest of the Manager concerned, approves a written compensation arrangement. An arrangement may provide a fee per Project, a monthly amount, or a percentage of the profit of a Project, and is treated as a guaranteed payment under Code § 707(c) unless the approval states otherwise.',
          'The Company shall reimburse Managers and Members for reasonable out-of-pocket expenses they incur on behalf of the Company with the Managers\' prior approval and with proper documentation.',
          'A Member who performs construction, renovation, property management, brokerage, lending, or other services for the Company is paid for those services only under a written arrangement approved as a Related Party transaction under {{ref:related-party}}. No Member is otherwise entitled to compensation for services to the Company, and no Member is required to devote any particular amount of time to the Company.',
        ] },
      ] },
      { id: 'related-party', title: 'Transactions with Related Parties', body: [
        { list: [
          'the Related Party discloses the relationship and all material terms to every Member in writing before the Company is bound;',
          'the terms are no less favorable to the Company than those available from a Person who is not a Related Party, which for any contract over ten thousand dollars ($10,000) shall be shown by at least one competing written bid or quote from an unrelated Person; and',
          'the transaction is approved by a Majority in Interest computed without the Percentage Interest of any Member who is, or is an Affiliate of, the Related Party, and, if {{ref:reserved}}(a)(vii) applies, by a Supermajority in Interest computed the same way.',
        ], lead: 'The Company may enter into a transaction with a Related Party, including a Member\'s contracting, property management, brokerage, or lending business, only if:' },
        'The disinterested Members holding a Majority in Interest may terminate a Related Party contract on thirty (30) days\' written notice for a material breach that is not cured within that period, and the Related Party shall have no claim against the Company for the termination other than for work properly performed before it.',
      ] },
      { id: 'outside-activities', title: 'Outside Activities; Company Opportunities', body: [
        { list: [
          'Each Member and Manager may engage in and hold interests in other business ventures of every kind, including the acquisition, renovation, rental, and sale of real estate, alone or with others, and neither the Company nor any other Member has any right in those ventures or in their income by reason of this Agreement. This clause is intended to modify, to the extent O.C.G.A. § 14-11-305 permits, the duties that would otherwise apply.',
          { text: 'Clause (a) does not apply to a "Company Opportunity," which is an opportunity to acquire real property that comes to a Member or Manager:', sub: [
            'through a lead, advertisement, contact, or relationship developed with Company funds or in the course of Company business;',
            'from a seller, agent, wholesaler, or lender who approached the Company or a Manager acting for the Company; or',
            'while the Member or Manager is using Confidential Information.',
          ] },
          'A Member or Manager who learns of a Company Opportunity shall first present it to the Managers and every Member in writing, with all material information the Person has about it. The Company has ten (10) Business Days after that notice to state in writing that it intends to pursue the opportunity, and a further twenty (20) Business Days to approve a Project Plan for it under {{ref:project-plans}}. If the Company declines, or either period expires without action, the Person may pursue the opportunity personally on terms no more favorable to that Person than the terms presented to the Company.',
          'No Member or Manager may use Company funds, credit, employees, contractors\' time paid for by the Company, or Confidential Information for any activity outside the Company.',
        ] },
      ] },
      { id: 'members-not-agents', title: 'Members Not Agents', body: [
        'No Member, acting solely in the capacity of a Member, is an agent of the Company or has authority to bind the Company, to sign any document for it, or to incur any obligation on its behalf. A Member who purports to do so shall indemnify the Company and the other Members against any loss that results.',
      ] },
      { id: 'officers', title: 'Officers and Delegation', body: [
        'The Managers may appoint officers or agents of the Company with the titles and the delegated authority the Managers determine, and may remove them at any time. A delegation does not relieve the Managers of responsibility under this Agreement.',
      ] },
      { id: 'reliance-third-parties', title: 'Reliance by Third Parties', body: [
        'Any Person dealing with the Company may rely, without further inquiry, on a certificate signed by a Manager as to the identity and authority of the Managers, the approval of any action under this Agreement, and the authority of any signatory. A Manager who signs such a certificate shall first confirm that the approval it recites has been given.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 7
  {
    id: 'members-voting',
    title: 'Members: Meetings, Voting, and Deadlock',
    sections: [
      { id: 'voting', title: 'Voting', body: [
        'Each Member entitled to vote votes in proportion to the Member\'s Percentage Interest. Except where this Agreement or the Act requires a greater vote, every matter submitted to the Members is decided by a Majority in Interest. Economic Interest Holders, a Defaulting Member while in default, and a Member whose interest is the subject of a pending purchase under {{art:buysell}} (as to that purchase and the matters related to it) are not entitled to vote and are disregarded in computing any vote.',
      ] },
      { id: 'meetings', title: 'Meetings', body: [
        'A meeting of the Members may be called by any Manager or by Members holding at least twenty percent (20%) of the Percentage Interests, on not less than five (5) Business Days\' written notice stating the time, the place or the means of remote participation, and the purpose. Members may participate by telephone or video conference, and participation is presence. Attendance waives notice unless the Member attends solely to object to the meeting. A quorum is a Majority in Interest. The Members shall hold at least one meeting in each Fiscal Year, within ninety (90) days after the end of the prior Fiscal Year, to review the annual financial statements and the status of every Project.',
      ] },
      { id: 'written-consent', title: 'Action Without a Meeting', body: [
        'Any action the Members may take at a meeting may be taken without a meeting if Members holding the Percentage Interests required to approve the action sign a written consent describing it. A consent may be signed in counterparts and by electronic signature, or given by an email that clearly states the Member\'s approval, and the Managers shall deliver a copy of every consent to every Member within five (5) Business Days. A form of written consent is attached as Exhibit C.',
      ] },
      { id: 'records-actions', title: 'Records of Actions', body: [
        'The Managers shall keep minutes of every meeting of the Members and of the Managers, and a copy of every written consent, with the Company\'s records.',
      ] },
      { id: 'deadlock', title: 'Deadlock', body: [
        { list: [
          'A "Deadlock" exists if a Reserved Decision that a Manager or a Member has proposed in writing fails to receive the required approval at two meetings, or in two written-consent solicitations, held at least ten (10) Business Days apart, and any Member then gives every other Member written notice declaring a Deadlock.',
          'For thirty (30) days after the notice, the Members shall meet at least twice, in good faith, to resolve the matter. If it is not resolved in that period, the Members shall submit it to non-binding mediation before a mediator experienced in real estate or business disputes, selected by the Managers or, if the Managers cannot agree, from the roster of the Georgia Office of Dispute Resolution, at the Company\'s expense.',
          { text: 'If the Deadlock is not resolved within sixty (60) days after the notice, then:', sub: [
            'if the Deadlock concerns whether to sell or refinance a particular property, Members holding a Majority in Interest may require the Managers to list that property for sale with a licensed broker at not less than ninety-five percent (95%) of its appraised value determined under {{ref:valuation}}(b), and to accept any bona fide offer at or above that price on customary terms; and',
            'whether or not clause (i) applies, any Member may invoke the buy-sell procedure in {{ref:shotgun}}.',
          ] },
        ] },
      ] },
      { id: 'shotgun', title: 'Buy-Sell Procedure on Deadlock', body: [
        { list: [
          'A Member who invokes this Section (the "Offeror") shall deliver to every other Member a written offer stating a single price per one percent (1%) of Percentage Interest (the "Unit Price") at which the Offeror is willing either to buy all of the Membership Interests of the other Members or to sell the Offeror\'s entire Membership Interest.',
          'Each other Member shall, within forty-five (45) days after the offer, elect in writing either to sell that Member\'s Membership Interest to the Offeror at the Unit Price or to buy the Offeror\'s Membership Interest at the Unit Price. A Member who does not elect within the period is deemed to have elected to sell.',
          'If any Member elects to buy, the Offeror shall sell the Offeror\'s entire Membership Interest to the Members who elected to buy, in proportion to their Percentage Interests or as they otherwise agree, and the Members who elected to sell remain Members. If every other Member elects, or is deemed to elect, to sell, the Offeror shall buy all of their Membership Interests.',
          'The closing shall occur within ninety (90) days after the election deadline. The price is paid in cash at closing. Each buyer shall use commercially reasonable efforts to obtain the release of each seller from any personal guarantee of Company debt, and shall indemnify each seller against any guarantee that is not released.',
          'This Section may not be invoked while a purchase under {{art:buysell}} is pending, and not more than once in any twelve (12) month period.',
        ] },
      ] },
    ],
  },
  // ---------------------------------------------------------------- 8
  {
    id: 'liability',
    title: 'Duties, Exculpation, Indemnification, and Insurance',
    sections: [
      { id: 'duties', title: 'Duties', body: [
        'The Managers and the Members owe the Company and each other the duties stated in the Act, as modified by this Agreement, including {{ref:related-party}} and {{ref:outside-activities}}. To the fullest extent O.C.G.A. § 14-11-305 permits, a Manager or Member who acts in good-faith reliance on this Agreement is not liable to the Company or to any Member for that act.',
      ] },
      { id: 'exculpation', title: 'Exculpation', body: [
        { list: [
          'a breach of the duty of loyalty to the Company or its Members, as that duty is modified by this Agreement;',
          'an act or omission not in good faith, or one that involves intentional misconduct or a knowing violation of law;',
          'a transaction from which the Person derived an improper personal benefit; or',
          'a material breach of this Agreement.',
        ], lead: 'No Manager or Member is liable to the Company or to any Member for any loss or damage that results from an act or omission taken in good faith on behalf of the Company and within the scope of the authority this Agreement grants, unless the act or omission involved:' },
      ] },
      { id: 'indemnification', title: 'Indemnification', body: [
        'The Company shall indemnify, defend, and hold harmless each Manager and each Member, and their heirs and personal representatives, from every loss, liability, claim, judgment, settlement, and expense, including reasonable attorney\'s fees, incurred by reason of any act or omission on behalf of the Company within the scope of the authority this Agreement grants, except to the extent the loss results from conduct described in {{ref:exculpation}}(a) through (d). The Company shall advance expenses as they are incurred on receipt of a written undertaking to repay them if it is finally determined that the Person is not entitled to indemnification. Indemnification is payable only from Company assets and insurance, and no Member is required to make a Capital Contribution to fund it.',
      ] },
      { id: 'insurance', title: 'Insurance', body: [
        'The Company shall carry, for each property it or a Subsidiary owns, commercial general liability insurance with limits of not less than one million dollars ($1,000,000) per occurrence, property insurance for the full replacement cost of the improvements, builder\'s risk coverage during any renovation or construction, flood insurance where the property lies in a special flood hazard area, and any other coverage the Approved Project Plan requires, in each case naming the Company (and the Subsidiary, if any) as insured and any lender as its interest requires. The Company may carry an umbrella policy, and may purchase insurance for the benefit of the Managers and the Members against liability arising from their service to the Company, whether or not the Company could indemnify them for that liability.',
      ] },
      { id: 'reliance-professionals', title: 'Reliance on Professionals', body: [
        'A Manager may rely in good faith on the reports, statements, and opinions of the Company\'s accountant, attorney, appraiser, contractor, or other professional selected with reasonable care, and is not liable for acting in reliance on them.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 9
  {
    id: 'books-tax',
    title: 'Books, Records, Accounting, and Tax',
    sections: [
      { id: 'books', title: 'Books and Records', body: [
        { list: [
          'a current Schedule A and Schedule B;',
          'copies of the Articles and of this Agreement, with every amendment;',
          'the Company\'s federal, state, and local income tax returns and reports for the six (6) most recent Fiscal Years;',
          'financial statements for the six (6) most recent Fiscal Years;',
          'every Project Plan, closing statement, loan document, lease, insurance policy, and material contract;',
          'minutes of meetings and every written consent; and',
          'every other record that O.C.G.A. § 14-11-313 requires.',
        ], lead: 'The Managers shall keep, at the principal office, complete and accurate books and records of the Company, including:' },
        'Each Member may inspect and copy these records at reasonable times on reasonable notice, at the Member\'s expense, for any purpose reasonably related to the Member\'s interest in the Company.',
      ] },
      { id: 'bank-accounts', title: 'Bank Accounts', body: [
        'All funds of the Company shall be deposited in accounts in the name of the Company or a Subsidiary at banks the Managers select, and shall not be commingled with the funds of any Member, Manager, or other Person. Withdrawals and transfers require the authorization of a Manager or of a signatory the Managers designate. If more than one Manager is serving, any single withdrawal or transfer of more than twenty-five thousand dollars ($25,000), other than a scheduled debt service or closing payment under an Approved Project Plan, requires the authorization of two Managers or two designated signatories.',
      ] },
      { id: 'accounting', title: 'Accounting Method', body: [
        'The Company\'s books shall be kept for the Fiscal Year on the cash method of accounting, or on any other method the Company\'s accountant recommends and a Majority in Interest approves, in accordance with sound bookkeeping practice consistently applied, by a bookkeeper or accountant the Managers engage.',
      ] },
      { id: 'reports', title: 'Reports to the Members', body: [
        { list: [
          'within forty-five (45) days after the end of each calendar quarter, a report showing, for each Project, the approved budget and the actual costs to date, the schedule, and the status of financing and of sale or leasing, together with a balance sheet, an income statement, and a statement of cash for the Company;',
          'within ninety (90) days after the end of each Fiscal Year, annual financial statements for that year; and',
          'on or before March 15 of each year, a Schedule K-1 for the prior Fiscal Year and any other information the Member needs to prepare the Member\'s income tax returns or, if the Company\'s return is extended, a good-faith estimate by March 15 and the final Schedule K-1 within thirty (30) days after the return is filed.',
        ], lead: 'The Managers shall deliver to every Member:' },
      ] },
      { id: 'tax-classification', title: 'Tax Classification', body: [
        'The Members intend the Company to be classified as a partnership for federal and Georgia income tax purposes, and neither the Company nor any Member or Manager shall elect otherwise without Unanimous Consent. The Company shall file every partnership return the law requires. With the advice of the Company\'s accountant and the approval of a Majority in Interest, the Managers may cause the Company to make the Georgia election under O.C.G.A. § 48-7-23 to pay tax at the entity level for any Fiscal Year in which the election benefits the Members.',
      ] },
      { id: 'partnership-representative', title: 'Partnership Representative', body: [
        { list: [
          'The Person named on Schedule B is the "partnership representative" of the Company under Code § 6223 and, if that Person is an entity, the individual named on Schedule B is the designated individual. A Majority in Interest may replace the partnership representative or the designated individual at any time, and the Managers shall amend Schedule B accordingly.',
          'The partnership representative shall keep every Member informed of any audit, examination, or proceeding concerning the Company, shall deliver copies of all notices to every Member within ten (10) days after receipt, and shall not extend any statute of limitations, settle any matter, file any petition, or make any election, including an election under Code § 6226, without the approval of a Majority in Interest.',
          'For each Fiscal Year in which the Company is eligible, the Company shall make the election under Code § 6221(b) to opt out of the centralized partnership audit regime, and each Member shall promptly provide the information needed to make it.',
          'If the Company pays any imputed underpayment, interest, or penalty under Code § 6225, the Members, including any former Member for the year at issue, shall bear it in proportion to the adjustments attributable to them, as the partnership representative reasonably determines, by payment to the Company within thirty (30) days after demand or by offset against distributions. This obligation survives a Person\'s Transfer, withdrawal, or ceasing to be a Member.',
          'The partnership representative is entitled to indemnification under {{ref:indemnification}} and to reimbursement of expenses incurred in that capacity.',
        ] },
      ] },
      { id: 'tax-elections', title: 'Tax Elections', body: [
        'With the advice of the Company\'s accountant, the Managers may make any election available to the Company under the Code, including the election under Code § 754, and may revoke it as the Code permits.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 10
  {
    id: 'transfers',
    title: 'Transfers of Interests',
    sections: [
      { id: 'transfer-restriction', title: 'Restriction on Transfer', body: [
        'No Member or Economic Interest Holder may Transfer all or any part of a Membership Interest or Economic Interest except as this Article or {{art:buysell}} permits. A purported Transfer in violation of this Agreement is void, and the Company shall not recognize it for any purpose. Each Member acknowledges that the Membership Interests have not been registered under the Securities Act of 1933 or the Georgia Uniform Securities Act and may not be Transferred without registration or an available exemption.',
      ] },
      { id: 'permitted-transfers', title: 'Permitted Transfers', body: [
        { list: [
          'to a revocable trust of which the Member is the sole trustee and a principal beneficiary during the Member\'s life; or',
          'to an entity of which the Member holds all of the ownership interests and is the sole manager;',
        ], lead: 'A Member may, on thirty (30) days\' prior written notice to the Managers and without the consent of the other Members, Transfer all or part of the Member\'s Economic Interest for estate-planning purposes:' },
        'in each case provided that the Member retains sole voting and management control of the Transferee, the Transferee signs a joinder in the form of Exhibit E, and the Member remains a Member for every purpose of this Agreement, including voting the Percentage Interest that the Transferee holds. If the Member ceases to control the Transferee, the Transfer becomes subject to {{ref:rofr}} as of that date, and the Transferee holds only an Economic Interest. A Transfer to another Member is permitted subject to {{ref:rofr}}, so that every other Member has the same opportunity to purchase.',
      ] },
      { id: 'rofr', title: 'Right of First Refusal', body: [
        { list: [
          'A Member who wishes to Transfer any part of a Membership Interest or Economic Interest, other than under {{ref:permitted-transfers}}(a) or (b), and who has received a bona fide written offer from a Person financially able to perform it, shall give the Company and every other Member written notice (the "Offer Notice") stating the identity of the proposed Transferee, the price and every other material term, and enclosing a copy of the offer.',
          'For thirty (30) days after the Offer Notice, the other Members have the right to purchase the offered interest, in proportion to their Percentage Interests or as they otherwise agree, at the same price and on the same terms, except that any part of the price that is not cash shall be paid in its cash equivalent as the Company\'s accountant determines.',
          'A Member\'s election to purchase must be in writing within the thirty (30) days and may include an election to purchase any part of the offered interest that other Members do not take. If the electing Members together do not agree to purchase the entire offered interest, the Company may, by a Majority in Interest computed without the Percentage Interest of the Transferor, elect within ten (10) additional days to purchase the balance.',
          'If the entire offered interest is not purchased under clauses (b) and (c), the Transferor may, within sixty (60) days after those periods expire, Transfer the entire offered interest to the proposed Transferee at a price and on terms no more favorable to the Transferee than those in the Offer Notice. The Transferee receives only an Economic Interest and becomes an Economic Interest Holder unless admitted as a Member under {{ref:admission}}. If the Transfer is not completed within the sixty (60) days, any later Transfer is again subject to this Section.',
          'The closing of a purchase by the Members or the Company under this Section shall occur within sixty (60) days after the last election.',
        ] },
      ] },
      { id: 'assignees', title: 'Effect of Transfer; Assignees', body: [
        'A Transferee who is not admitted as a Member (a) holds only an Economic Interest, (b) is bound by this Agreement, (c) has no right to vote, to participate in management, to inspect records beyond what the Act requires, or to compel any distribution, and (d) receives the distributions and allocations that the Transferor would have received with respect to the interest Transferred. A Member who Transfers the Member\'s entire Membership Interest ceases to be a Member when the Transfer is effective but remains liable for obligations under this Agreement that accrued before it. O.C.G.A. §§ 14-11-502 and 14-11-503 apply except as this Agreement provides otherwise.',
      ] },
      { id: 'admission', title: 'Admission of a Transferee as a Member', body: [
        'A Transferee becomes a Member only when (a) the Members other than the Transferor give Unanimous Consent to the admission, (b) the Transferee signs a joinder in the form of Exhibit E and, if the Transferee is a married individual, delivers a spousal consent in the form of Exhibit D, and (c) the Transferee pays the Company\'s reasonable expenses of the admission. On admission, the Managers shall amend Schedule A.',
      ] },
      { id: 'charging-orders', title: 'Charging Orders and Involuntary Transfers', body: [
        'A judgment creditor of a Member or Economic Interest Holder has only the rights of the holder of a charging order under O.C.G.A. § 14-11-504, is entitled only to receive the distributions to which the debtor would otherwise be entitled, and does not become a Member or an Economic Interest Holder. The entry of a charging order that is not vacated or satisfied within ninety (90) days, and any other involuntary Transfer, including by foreclosure, by a divorce or separation decree, or by operation of law, is a Buy-Sell Event under {{art:buysell}}.',
      ] },
      { id: 'spousal', title: 'Spousal Matters', body: [
        'Each Member who is married on the Effective Date, or who later marries, shall deliver a spousal consent in the form of Exhibit D within thirty (30) days after the Effective Date or the marriage. If, in a divorce, legal separation, or similar proceeding, any part of a Member\'s Membership Interest or Economic Interest is awarded to the Member\'s spouse or former spouse, the Member has the first option, for sixty (60) days after the award becomes final, to purchase that part from the spouse at the Purchase Price, and, if the Member does not, the Company and the other Members have the option under {{ref:option}}(b). Until purchased, the spouse or former spouse holds only an Economic Interest.',
      ] },
      { id: 'transfer-expenses', title: 'Expenses and Compliance', body: [
        'The Transferor bears the Company\'s reasonable expenses of any Transfer. No Transfer may be made that would cause the Company to be treated as a publicly traded partnership under Code § 7704, that would require the Company to register under any securities law, or that would cause the Company to lose any license or approval.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 11
  {
    id: 'buysell',
    title: 'Buy-Sell Events',
    sections: [
      { id: 'buysell-events', title: 'Buy-Sell Events', body: [
        { list: [
          'the death of the Member;',
          'the Disability of the Member;',
          'a Bankruptcy Event of the Member;',
          'an involuntary Transfer or a charging order described in {{ref:charging-orders}};',
          'an award of any part of the Member\'s interest to a spouse or former spouse described in {{ref:spousal}};',
          'a default under {{ref:capital-default}} that is not cured within thirty (30) days after the notice of default;',
          'the expulsion of the Member for Cause under {{ref:expulsion}}; and',
          'the Member\'s withdrawal under {{ref:withdrawal}}.',
        ], lead: 'Each of the following is a "Buy-Sell Event" as to a Member (the "Affected Member"):' },
        'Each Member shall give the Managers written notice of any Buy-Sell Event concerning that Member, or concerning any other Member, promptly after learning of it.',
      ] },
      { id: 'expulsion', title: 'Expulsion for Cause', body: [
        { list: [
          'fraud, embezzlement, or theft involving the Company or its property;',
          'conviction of, or a plea of guilty or no contest to, a felony;',
          'a material breach of this Agreement, including {{ref:related-party}}, {{ref:outside-activities}}, {{ref:members-not-agents}}, or {{ref:confidentiality}}, that, if capable of cure, is not cured within thirty (30) days after written notice; or',
          'willful misconduct or gross negligence in connection with the Company that causes material harm to it.',
        ], lead: 'The Members may expel a Member for Cause by the written vote of the other Members holding at least seventy-five percent (75%) of the Percentage Interests held by all of the other Members. "Cause" means:' },
        'Before the vote, the Member concerned shall be given written notice of the grounds and an opportunity to respond at a meeting of the Members held not less than ten (10) Business Days after the notice.',
      ] },
      { id: 'withdrawal', title: 'Voluntary Withdrawal', body: [
        { list: [
          'No Member may withdraw from the Company before the second (2nd) anniversary of the Effective Date except with the consent of a Majority in Interest computed without the withdrawing Member\'s Percentage Interest.',
          'After that anniversary, a Member may withdraw on not less than one hundred eighty (180) days\' written notice to the Company and every Member, but not while the Member is a Defaulting Member or while a procedure under {{ref:deadlock}} or {{ref:shotgun}} is pending.',
          'Withdrawal is a Buy-Sell Event. A withdrawing Member is not entitled to receive the fair value of the Member\'s interest or any other payment on account of the withdrawal, other than the Purchase Price if the option in {{ref:option}}(b) is exercised. If the option is not exercised, the withdrawing Member becomes an Economic Interest Holder on the effective date of the withdrawal. This Section states the exclusive rights of a withdrawing Member and is intended to displace any contrary default rule of the Act, including O.C.G.A. §§ 14-11-601.1 and 14-11-602.',
        ] },
      ] },
      { id: 'option', title: 'Mandatory Purchase on Death; Option on Other Events', body: [
        { list: [
          'On the death of a Member, the Company shall purchase, and the deceased Member\'s estate or successor shall sell, the deceased Member\'s entire Membership Interest for the Purchase Price. The closing shall occur within one hundred twenty (120) days after the later of the appointment of the personal representative of the estate and the final determination of the Purchase Price. Pending the closing, the estate or successor holds only an Economic Interest.',
          'On every other Buy-Sell Event, the Company has the option, exercisable by a Majority in Interest computed without the Affected Member\'s Percentage Interest, by written notice given within ninety (90) days after the Managers receive written notice of the event, to purchase all, and not less than all, of the Affected Member\'s Membership Interest (or, in the case of {{ref:buysell-events}}(d) or (e), the interest held by the creditor, Transferee, or spouse) for the Purchase Price. If the Company does not exercise the option for the entire interest, the other Members may, within thirty (30) additional days, elect to purchase the interest in proportion to their Percentage Interests or as they otherwise agree.',
          'If neither the Company nor the other Members purchase the entire interest under clause (b), the Affected Member, or the Person who holds the interest, holds only an Economic Interest from the date of the Buy-Sell Event, remains bound by this Agreement, and the option under clause (b) may be exercised again on any later Buy-Sell Event.',
          'The Affected Member and any successor to the Affected Member\'s interest do not vote on the exercise of an option under this Section.',
        ] },
      ] },
      { id: 'purchase-price', title: 'Purchase Price', body: [
        { list: [
          { text: 'The "Purchase Price" of an interest purchased under this Article is the Net Asset Value multiplied by the Percentage Interest being purchased, adjusted as follows:', sub: [
            'for a Buy-Sell Event under {{ref:buysell-events}}(a), (b), (c), (d), or (e), one hundred percent (100%) of that amount;',
            'for a withdrawal under {{ref:buysell-events}}(h), ninety percent (90%) of that amount; and',
            'for a default under {{ref:buysell-events}}(f) or an expulsion under {{ref:buysell-events}}(g), eighty percent (80%) of that amount;',
          ] },
          'less, in every case, any Default Amount, Default Advance, and other amount the Affected Member owes to the Company or to any Member under this Agreement, which the buyer shall pay at closing to the Person owed.',
        ] },
      ] },
      { id: 'valuation', title: 'Net Asset Value', body: [
        { list: [
          { text: '"Net Asset Value" means, as of the last day of the month before the Buy-Sell Event (the "Valuation Date"):', sub: [
            'the fair market value of each parcel of real property owned by the Company or a Subsidiary, determined by appraisal under clause (b), less an allowance for the estimated costs of sale equal to six percent (6%) of that value; plus',
            'cash, deposits, receivables, and every other asset, at book value; less',
            'all liabilities of the Company and its Subsidiaries, including accrued interest, Member Loans, and the estimated cost to complete any renovation in progress under its Approved Project Plan.',
          ] },
          'Each parcel shall be appraised as of the Valuation Date by a Georgia state-certified real estate appraiser selected by the Managers and engaged by the Company at the Company\'s expense. The Affected Member, or the Person who holds the interest, may object in writing within fifteen (15) days after receiving the appraisal and engage a second Georgia state-certified appraiser at the objecting party\'s expense. If the two appraisals differ by ten percent (10%) or less of the higher value, the value is their average. If they differ by more, the two appraisers shall select a third, whose fee the Company and the objecting party share equally, and the value is the average of the two appraisals closest to each other.',
          'No discount shall be applied for minority interest, lack of control, or lack of marketability. The percentage adjustments in {{ref:purchase-price}} are the only adjustments to value.',
          'The Company\'s accountant shall prepare the computation of Net Asset Value from the appraisals and the Company\'s books within thirty (30) days after the appraisals are final, and the computation is binding on every party absent manifest error.',
        ] },
      ] },
      { id: 'payment-terms', title: 'Payment Terms and Closing', body: [
        { list: [
          { text: 'Unless the buyer elects to pay more at closing, the Purchase Price is paid:', sub: [
            'at closing, in cash, the greater of twenty percent (20%) of the Purchase Price and the amount of any life insurance proceeds the Company receives on account of the Buy-Sell Event, up to the Purchase Price; and',
            'the balance by a promissory note of the buyer payable in sixty (60) equal monthly installments of principal and interest, bearing interest at the greater of six percent (6%) per year and the applicable federal rate for the note\'s term on the closing date, prepayable without penalty, and secured by a pledge of the interest purchased.',
          ] },
          'The note becomes due in full on the sale of all or substantially all of the Company\'s property or on the dissolution of the Company and, if the Company is the buyer, is prepaid on each sale or refinancing of Company property in an amount equal to the seller\'s former Percentage Interest share of the net proceeds.',
          'At closing, the seller shall deliver an assignment of the interest, free of every lien, and a release of claims against the Company and the Members other than for the Purchase Price and any Tax Distribution accrued for the period before closing. The buyer shall use commercially reasonable efforts to obtain the release of the seller from any personal guarantee of Company debt, and shall indemnify the seller against any guarantee that is not released.',
          'If the buyer is the Company, the Purchase Price is a debt of the Company that ranks after the Company\'s obligations to creditors who are not Members and is subject to {{ref:limits}}.',
        ] },
      ] },
      { id: 'life-insurance', title: 'Life Insurance', body: [
        'The Company may, and if a Majority in Interest so directs shall, purchase and maintain term life insurance on the life of each Member in an amount approximating that Member\'s Percentage Interest share of Net Asset Value, owned by and payable to the Company, and each Member shall cooperate in obtaining it. Proceeds received on a Member\'s death are applied first to the Purchase Price under {{ref:payment-terms}}(a)(i). If insurance on a Member is not available at standard rates, the Company may decline to insure that Member, and the payment terms in {{ref:payment-terms}} apply. When a Member withdraws or Transfers the Member\'s entire interest, the Member may purchase the policy on the Member\'s life from the Company for the unearned premium.',
      ] },
      { id: 'continuation', title: 'Continuation of the Company', body: [
        'A Buy-Sell Event does not dissolve the Company. The Company continues, and the Affected Member or the Affected Member\'s successor holds only an Economic Interest from the date of the Buy-Sell Event until the interest is purchased or the holder is admitted as a Member.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 12
  {
    id: 'dissolution',
    title: 'Dissolution and Winding Up',
    sections: [
      { id: 'dissolution-events', title: 'Events of Dissolution', body: [
        { list: [
          'the written consent of a Supermajority in Interest;',
          'the entry of a decree of judicial dissolution under O.C.G.A. § 14-11-603; or',
          'any other event that requires dissolution under the Act and that this Agreement cannot vary.',
        ], lead: 'The Company dissolves only upon:' },
        'The death, Disability, Bankruptcy Event, withdrawal, or expulsion of a Member, the Transfer of a Member\'s interest, and the sale of all or any of the Company\'s real property do not dissolve the Company.',
      ] },
      { id: 'winding-up', title: 'Winding Up', body: [
        'On dissolution, the Managers or, if no Manager is serving or a Majority in Interest so elects, a liquidator appointed by a Majority in Interest, shall wind up the Company\'s affairs, may sell the Company\'s property on the terms they determine, and shall have the authority of the Managers for that purpose. The Person winding up may continue the Company\'s business for a reasonable period to complete Projects in progress if doing so is expected to increase the amount available for distribution.',
      ] },
      { id: 'liquidation', title: 'Order of Distribution', body: [
        { list: [
          'to creditors, including Members and Managers who are creditors under Member Loans, {{ref:guarantees}}, {{ref:indemnification}}, or otherwise, in the order of priority the law provides;',
          'to the establishment of reasonable Reserves for contingent, conditional, or unmatured liabilities of the Company, including warranty claims of buyers, lien claims, and claims of tenants, which shall be held for up to two (2) years and then distributed under clause (c); and',
          'to the Members and Economic Interest Holders in the order stated in {{ref:waterfall}}(c) and (d), which the allocations under {{ref:allocation}} are intended to cause to equal their positive Capital Account balances after all allocations for all periods, including the period of liquidation.',
        ], lead: 'The proceeds of liquidation and any remaining assets shall be applied in the following order, consistent with O.C.G.A. § 14-11-605:' },
        'No Member or Economic Interest Holder is obligated to restore a deficit balance in a Capital Account.',
      ] },
      { id: 'liquidation-in-kind', title: 'Distributions in Kind on Liquidation', body: [
        'With the approval of a Supermajority in Interest, property may be distributed in kind on liquidation at its value determined by appraisal under {{ref:valuation}}(b), to a Member who agrees to accept it subject to its liabilities in satisfaction of all or part of that Member\'s share, and unrealized gain or loss on the property shall be allocated under {{art:allocations}} as if the property had been sold for that value.',
      ] },
      { id: 'termination-certificate', title: 'Certificate of Termination', body: [
        'When the Company\'s affairs have been wound up, the Managers or the liquidator shall file a certificate of termination with the Georgia Secretary of State and take every other action required to terminate the Company\'s existence and its registrations.',
      ] },
    ],
  },
  // ---------------------------------------------------------------- 13
  {
    id: 'general',
    title: 'General Provisions',
    sections: [
      { id: 'notices', title: 'Notices', body: [
        { list: [
          'when delivered by hand;',
          'one (1) Business Day after deposit with a nationally recognized overnight courier, charges prepaid;',
          'three (3) Business Days after deposit in the United States mail, certified, return receipt requested, postage prepaid; or',
          'when sent by email to the email address on Schedule A, if sent before 5:00 p.m. Eastern time on a Business Day, and otherwise on the next Business Day, provided that a notice of default, a Capital Call, an Offer Notice, a notice declaring a Deadlock, an offer under {{ref:shotgun}}, and a notice of a Buy-Sell Event sent by email must also be sent by one of the other methods.',
        ], lead: 'Every notice under this Agreement must be in writing, addressed to the recipient at the address on Schedule A (or, for the Company, at its principal office to the attention of the Managers), and is effective:' },
        'A Person may change its notice address by notice to the Managers, who shall amend Schedule A.',
      ] },
      { id: 'amendments', title: 'Amendments', body: [
        'This Agreement may be amended only by a writing signed by all of the Members, except that the Managers shall amend Schedule A and Schedule B as this Agreement provides, without a vote, to reflect changes made in accordance with it.',
      ] },
      { id: 'confidentiality', title: 'Confidentiality', body: [
        'Each Member and Manager shall keep confidential, and shall not use except for the Company\'s purposes, all non-public information concerning the Company\'s properties, contracts, financial results, lender relationships, deal sources, and business plans ("Confidential Information"), except to the extent the information (a) must be disclosed by law or legal process, (b) is disclosed to the Person\'s spouse, attorney, accountant, or lender, or to a prospective purchaser of the Person\'s interest, who agrees to keep it confidential, or (c) has become public through no fault of the Person. This Section continues for two (2) years after a Person ceases to be a Member or Manager.',
      ] },
      { id: 'disputes', title: 'Dispute Resolution', body: [
        { list: [
          'The Members shall first attempt in good faith to resolve any dispute arising out of or relating to this Agreement or the Company by negotiation for thirty (30) days after one of them gives the others written notice of the dispute.',
          'If the dispute is not resolved by negotiation, the parties shall submit it to mediation in the county of the Company\'s principal office before a mediator they select or, if they cannot agree, a mediator from the roster of the Georgia Office of Dispute Resolution, with the mediator\'s fee shared equally.',
          'If the dispute is not resolved within sixty (60) days after the request for mediation, it shall be resolved by binding arbitration under the Georgia Arbitration Code, O.C.G.A. § 9-9-1 and following, administered by the American Arbitration Association under its Commercial Arbitration Rules, before a single arbitrator who is an attorney with at least ten (10) years of experience in Georgia business or real estate law, seated in the county of the Company\'s principal office. Judgment on the award may be entered in any court of competent jurisdiction.',
          'Nothing in this Section prevents a party from seeking a temporary restraining order, an injunction, or other provisional relief from a court to preserve the status quo or to enforce {{ref:transfer-restriction}}, {{ref:members-not-agents}}, or {{ref:confidentiality}}.',
          'The prevailing party in any arbitration or litigation arising out of this Agreement is entitled to recover its reasonable attorney\'s fees and costs from the other party.',
          '{{ref:deadlock}} and {{ref:shotgun}}, and not this Section, govern a Deadlock.',
        ] },
      ] },
      { id: 'governing-law', title: 'Governing Law; Venue', body: [
        'This Agreement is governed by the laws of the State of Georgia, without regard to its conflict-of-laws rules. Subject to {{ref:disputes}}, the state and federal courts sitting in the county of the Company\'s principal office have exclusive jurisdiction over any action arising out of this Agreement, and each Member consents to that jurisdiction and venue.',
      ] },
      { id: 'binding', title: 'Binding Effect; No Third-Party Beneficiaries', body: [
        'This Agreement binds and benefits the Members, the Managers, and the Company and their respective heirs, personal representatives, successors, and permitted assigns. No other Person, including any creditor of the Company or of a Member, is a beneficiary of this Agreement or may enforce it.',
      ] },
      { id: 'severability', title: 'Severability', body: [
        'If any provision of this Agreement is held invalid or unenforceable, the remaining provisions continue in full force, and the invalid provision shall be enforced to the greatest extent the law permits so as to carry out the Members\' intent.',
      ] },
      { id: 'entire', title: 'Entire Agreement', body: [
        'This Agreement, with its Schedules and Exhibits, is the entire agreement of the Members and the Company concerning the Company and supersedes every prior agreement and understanding, oral or written, concerning it, including every earlier draft of an operating agreement for the Company.',
      ] },
      { id: 'waiver', title: 'Waiver', body: [
        'No waiver of any provision of this Agreement is effective unless it is in writing and signed by the Person against whom it is asserted, and no waiver of one breach is a waiver of any other breach.',
      ] },
      { id: 'counterparts', title: 'Counterparts; Electronic Signatures', body: [
        'This Agreement may be signed in counterparts, each of which is an original and all of which are one instrument. Signatures delivered by electronic signature service, by email in portable document format, or by other electronic means are effective under the Georgia Uniform Electronic Transactions Act, O.C.G.A. § 10-12-1 and following.',
      ] },
      { id: 'further-assurances', title: 'Further Assurances', body: [
        'Each Member shall sign and deliver the further documents, and take the further actions, that the Managers reasonably request to carry out this Agreement, including certificates that a lender or closing attorney requires.',
      ] },
      { id: 'independent-counsel', title: 'Independent Counsel', body: [
        'Each Member acknowledges that any attorney who prepared or reviewed this Agreement for the Company represents the Company and not any individual Member, that the Member has been advised to obtain independent legal, tax, and financial advice before signing, and that the Member has read and understands this Agreement and signs it voluntarily.',
      ] },
      { id: 'time', title: 'Time', body: [
        'Time is of the essence of this Agreement. If the last day for any action falls on a day that is not a Business Day, the deadline is the next Business Day.',
      ] },
      { id: 'survival', title: 'Survival', body: [
        '{{ref:capital-default}}, {{ref:guarantees}}, {{ref:indemnification}}, {{ref:partnership-representative}}(d), {{ref:payment-terms}}, {{ref:confidentiality}}, and {{ref:disputes}} survive a Person\'s ceasing to be a Member or Manager and the dissolution of the Company.',
      ] },
      { id: 'construction', title: 'Construction', body: [
        'The Members have each had the opportunity to review this Agreement with counsel of their choice, and no rule of construction that resolves ambiguity against the drafting party applies to it.',
      ] },
    ],
  },
];

export const signaturePage = {
  witness: 'IN WITNESS WHEREOF, the Members and the Company have signed this Operating Agreement to be effective as of the Effective Date.',
  company: { label: 'THE COMPANY', name: 'Better View Investment Group LLC', by: 'By: ____________________________________', fields: ['Name: __________________________________', 'Title: Manager', 'Date: __________________________________'] },
  members: 5,
  memberFields: ['Signature: ______________________________', 'Printed name: ___________________________', 'Date: __________________________________'],
};

export const schedules = [
  {
    id: 'schedule-a', label: 'Schedule A', title: 'Members, Capital Contributions, and Percentage Interests',
    body: [
      'As of the Effective Date. The Managers amend this Schedule under {{ref:members-schedule}} to reflect changes made in accordance with the Agreement.',
      { table: {
        cols: ['Member (legal name)', 'Address and email for notices', 'Initial Capital Contribution', 'Due date', 'Maximum Additional Commitment', 'Percentage Interest'],
        widths: [1900, 2300, 1400, 1100, 1500, 1160],
        rows: [
          ['[__________]', '[__________]', '$[__________]', '[__________]', '$[__________]', '20.00%'],
          ['[__________]', '[__________]', '$[__________]', '[__________]', '$[__________]', '20.00%'],
          ['[__________]', '[__________]', '$[__________]', '[__________]', '$[__________]', '20.00%'],
          ['[__________]', '[__________]', '$[__________]', '[__________]', '$[__________]', '20.00%'],
          ['[__________]', '[__________]', '$[__________]', '[__________]', '$[__________]', '20.00%'],
          ['Total', '', '$[__________]', '', '$[__________]', '100.00%'],
        ],
      } },
      'Maximum Additional Commitment is the most a Member can be required to contribute after the Initial Capital Contribution under {{ref:capital-calls}}(c). A Member may raise it at any time by written notice; it can be lowered only by amendment.',
      'Schedule A last amended: [__________].',
    ],
  },
  {
    id: 'schedule-b', label: 'Schedule B', title: 'Managers and Partnership Representative',
    body: [
      'As of the Effective Date. The Managers amend this Schedule under {{ref:managers-number}}(f) and {{ref:partnership-representative}}(a).',
      { table: {
        cols: ['Role', 'Name', 'Address and email for notices'],
        widths: [2400, 3000, 3960],
        rows: [
          ['Manager', '[__________]', '[__________]'],
          ['Manager', '[__________]', '[__________]'],
          ['Partnership representative (Code § 6223)', '[__________]', '[__________]'],
          ['Designated individual (only if the partnership representative is an entity)', '[__________]', '[__________]'],
        ],
      } },
      'Two Managers act by mutual agreement under {{ref:managers-action}}. If the Members prefer a single Manager, delete the second row.',
      'Schedule B last amended: [__________].',
    ],
  },
];

export const exhibits = [
  {
    id: 'exhibit-c', label: 'Exhibit C', title: 'Form of Written Consent of the Members',
    body: [
      'WRITTEN CONSENT OF THE MEMBERS OF BETTER VIEW INVESTMENT GROUP LLC',
      'The undersigned, being Members of Better View Investment Group LLC, a Georgia limited liability company (the "Company"), holding not less than the Percentage Interests required under the Company\'s Operating Agreement dated as of [__________], 2026 (the "Agreement") to approve the action described below, consent to and approve the following action without a meeting under {{ref:written-consent}} of the Agreement:',
      'RESOLVED, that [describe the action, for example: the Project Plan dated __________ for the property at __________, Georgia, a copy of which is attached, is approved as an Approved Project Plan under Section 3.3 of the Agreement, and the Managers are authorized to take every action the plan describes, including signing the purchase contract at a price not exceeding $__________ and closing the financing on the terms the plan states].',
      'RESOLVED FURTHER, that any Manager is authorized to sign every document and take every action necessary to carry out the foregoing, and that any Person dealing with the Company may rely on this consent.',
      'This consent may be signed in counterparts and by electronic signature and is effective when Members holding the required Percentage Interests have signed it. The Managers shall deliver a copy to every Member.',
      { sig: { label: 'Member', count: 5, fields: ['Signature: ______________________________', 'Printed name: ___________________________', 'Percentage Interest: ________ Date: ________'] } },
    ],
  },
  {
    id: 'exhibit-d', label: 'Exhibit D', title: 'Spousal Consent',
    body: [
      'I am the spouse of [__________], a Member of Better View Investment Group LLC, a Georgia limited liability company (the "Company"). I have read the Operating Agreement of the Company dated as of [__________], 2026 (the "Agreement"), and I have had the opportunity to consult an attorney of my own choosing about it.',
      'I acknowledge and agree that: (a) I have no interest in the Company, its property, or my spouse\'s Membership Interest other than any economic interest that a court may award me, which will be subject to the Agreement; (b) any interest I may acquire in the Company, whether by divorce, separation, death, or otherwise, is subject to the restrictions on Transfer, the rights of first refusal, and the purchase options in Articles 10 and 11 of the Agreement, and I will hold it only as an Economic Interest Holder unless I am admitted as a Member; (c) I will not take any action that would interfere with the Company\'s or the Members\' rights under the Agreement; and (d) I will sign any further document the Company reasonably requests to carry out this consent.',
      'This consent binds my heirs, personal representatives, and assigns.',
      { sig: { label: 'Spouse', count: 1, fields: ['Signature: ______________________________', 'Printed name: ___________________________', 'Date: __________________________________'] } },
    ],
  },
  {
    id: 'exhibit-e', label: 'Exhibit E', title: 'Joinder Agreement',
    body: [
      'The undersigned is acquiring [a Membership Interest] [an Economic Interest] representing a ________% Percentage Interest in Better View Investment Group LLC, a Georgia limited liability company (the "Company"), from [__________] (the "Transferor") [or: by admission as a new Member under Section 6.5(b)(i)].',
      'In consideration of the Company\'s recognition of that acquisition, the undersigned: (a) acknowledges receipt of the Company\'s Operating Agreement dated as of [__________], 2026, as amended (the "Agreement"); (b) agrees to be bound by every provision of the Agreement as [a Member] [an Economic Interest Holder] as fully as if an original signatory; (c) acknowledges that the interest has not been registered under any securities law and is subject to the restrictions on Transfer in Article 10 of the Agreement; (d) represents that the undersigned is acquiring the interest for investment and not for resale; and (e) if the undersigned is a married individual, delivers with this Joinder a spousal consent in the form of Exhibit D.',
      'Address and email for notices under the Agreement: ________________________________________________.',
      { sig: { label: 'Transferee', count: 1, fields: ['Signature: ______________________________', 'Printed name: ___________________________', 'Date: __________________________________'] } },
      'Accepted by the Company, and Schedule A amended accordingly:',
      { sig: { label: 'Manager', count: 1, fields: ['Signature: ______________________________', 'Printed name: ___________________________', 'Date: __________________________________'] } },
    ],
  },
];
