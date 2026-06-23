export interface QA {
  q: string;
  a: string;
}

export interface Chapter {
  id: string;
  title: string;
  summary: string;
  qa: QA[];
}

export const chapters: Chapter[] = [
  {
    id: "intro",
    title: "Introduction to the RCS",
    summary:
      "What a Rent Comparability Study is, who needs one, and what it looks like as a deliverable.",
    qa: [
      {
        q: "What is the purpose of a Rent Comparability Study?",
        a: "A Rent Comparability Study (RCS) determines the contract rent at the subject property by concluding the market rent — what a market-rate tenant would be willing to pay. In most cases, it sets the contract rent for a Section 8 HAP property for the next five years of the contract.",
      },
      {
        q: "When is a Rent Study required?",
        a: "A Rent Study is used for acquisitions, dispositions, refinancing, redevelopment, and five-year HAP contract renewals (as required by the contract to reset rents).",
      },
      {
        q: "Who are the typical clients for a Rent Study?",
        a: "Clients include affordable housing lenders, religious organizations (Archdioceses, Parishes), nonprofits and faith-based groups, development teams, HUD Asset Managers, institutional investors (REITs), local and regional management companies, local real estate investors, and private equity funds.",
      },
      {
        q: "What does a completed Rent Study consist of?",
        a: "A Rent Study is comprised of two documents: an Excel document with formulas, tables, and calculations; and a Word document containing narrative, photos, and documentation for the subject and market.",
      },
    ],
  },
  {
    id: "checklist",
    title: "Action Items Checklist",
    summary:
      "Step-by-step checklist covering the full workflow from setup through final review.",
    qa: [
      {
        q: "What are the first steps when starting a new Rent Study?",
        a: "Gather client due diligence and set up a project folder in 1 HUD using the Word and Excel document templates. Rename both documents to the project name and link them together.",
      },
      {
        q: "How do you link the Word and Excel documents together?",
        a: "Open both documents. Copy a text cell from Excel into Word. Then in Word: Ctrl+A to select all, Shift+F9 to open all links, Ctrl+H to find and replace the old link path with the new one, select Replace All, close links with Shift+F9, and press F9 to update all links. Save your work.",
      },
      {
        q: "What research should be done before building comparables?",
        a: "Check DREA data for past assignments on: the subject property, the neighborhood or market, the same client, previous Rent Study reviews, appraisals or market demand studies, and HUD 3rd Party Rent Studies. This can save hours of research and data entry.",
      },
      {
        q: "What goes into the final review?",
        a: "Update and review all Excel and Word document links for errors or formatting issues, and benchmark against previous submissions for the property, client, and market.",
      },
    ],
  },
  {
    id: "comparables",
    title: "Selecting & Writing Comparables",
    summary:
      "How to find, evaluate, write up, and call comparable properties for the rent grid.",
    qa: [
      {
        q: "What is the goal when selecting comparable properties?",
        a: "Find comparable properties with as many similar defining traits as the subject as possible: structure type (walk-up, elevator, townhouse, single-family), age and condition, interior finish and fitout, and proximity to the subject.",
      },
      {
        q: "What information goes in the top section of a Rent Comparable profile?",
        a: "Basic information about the property and its physical makeup — location, walkscore, building details. This data is typically found on Apartments.com, Loopnet, Realtor.com, or through a parcel/tax assessor search.",
      },
      {
        q: "What goes in the middle section of the Rent Comparable profile?",
        a: "Rental data: unit type, bedroom and bathroom count, monthly and adjusted rent, unit size, and price per square foot. Adjusted rent and price per SF are formulas — do not enter them manually.",
      },
      {
        q: "What goes in the bottom section of the Rent Comparable profile?",
        a: "The most identifying attributes: amenities, fees, utilities, and unit characteristics. Key acronyms: CA = Central Air, W = Wall Unit, LR = Laundry Room, W/D = Washer/Dryer, P/E/R = Pool/Exercise/Recreation, Y/G/E = electric or gas utilities.",
      },
      {
        q: "How should I approach calling a comparable property?",
        a: "Pose as a potential tenant. Confirm rental rates, ask about hidden fees (amenity fees, parking, admin fees, application fees), utilities (who pays, flat fee?), parking, and laundry. If asked when you're moving in, say you're flexible but ideally by end of next month. If asked about contact info, give it — it could be useful for the comp folder.",
      },
      {
        q: "How do I get information on multiple unit types when calling?",
        a: "Say: 'I am also looking to maybe get a roommate(s) so could I ask you about the [X]BR.' If there's a big price difference between similar units, ask: 'I saw online that the two units had a pretty big price difference — is there a reason for that?'",
      },
    ],
  },
  {
    id: "adjustments",
    title: "Adjustments",
    summary:
      "How to evaluate and apply dollar adjustments on the Rent Grid, including market-derived and Line 7 finish adjustments.",
    qa: [
      {
        q: "What is the purpose of adjustments on the Rent Grid?",
        a: "Adjustments balance differences between comparable properties and the subject to help determine the final market rate rent. If a comparable is superior to the subject on a given attribute, it receives a downward adjustment; if inferior, an upward adjustment.",
      },
      {
        q: "What is the step-by-step process for making an adjustment?",
        a: "1) Identify whether the comparable is superior, inferior, or equivalent to the subject. 2) Apply the appropriate upward or downward dollar adjustment. 3) Conduct market research for market-derived adjustments if applicable. 4) Document and explain the adjustment in the Adjustment Narrative.",
      },
      {
        q: "Can you give an example of an adjustment — like laundry?",
        a: "In-unit Washer/Dryer is superior to a shared Laundry Room. So a comparable with W/D receives a downward adjustment relative to the subject's shared laundry. The market-derived cost is typically $35 — the monthly cost of washer/dryer ownership amortized over a typical lease term.",
      },
      {
        q: "What are the typical Pool/Exercise/Recreation adjustment amounts?",
        a: "Pool: $15–$20 depending on the market. Exercise/Gym: $10. Recreation (typically open or grassy space): $5. A comparable with all three would receive the sum of those adjustments in the downward direction.",
      },
      {
        q: "What is a market-derived adjustment?",
        a: "An adjustment that fluctuates in dollar amount depending on the market. The value of the amenity is based on what a market-rate tenant would be willing to pay. Parking, internet access, and utilities are common examples where the value varies by market.",
      },
      {
        q: "How is parking coverage calculated?",
        a: "Enter the number of parking spaces at the subject in 'enterdata.' The spreadsheet auto-calculates coverage, the value at the subject, and the Total Adjustment for parking at comparables. 'Market Cost' is the value of parking in the subject market — could be monthly garage costs or residential permit parking.",
      },
      {
        q: "What is Line 7 and why does it matter?",
        a: "Line 7 is the finish and fitout adjustment — one of the most crucial on the grid. It reflects differences in interior quality between the subject and comparables, benchmarked primarily by kitchen quality (cabinets, countertops, appliances, flooring, lighting). The greater the disparity in condition and the higher the rent, the greater the adjustment.",
      },
      {
        q: "How are Line 7 adjustments calculated?",
        a: "As a percentage of rents, benchmarked against the Line 7 table on each Rent Grid. The step from the bottom of the market to the top is approximately $150. Ensure the adjustment is realistic given the ceiling from the lowest to highest quality comp.",
      },
    ],
  },
  {
    id: "photos-maps",
    title: "Photos & Maps",
    summary:
      "Best practices for cropping photos and building subject market area, rent comparable, and Walkscore maps.",
    qa: [
      {
        q: "What is the golden rule for photos in a Rent Study?",
        a: "Crop, crop, crop. Remove unnecessary sky, ground (parking lots, streets), and background. Center the building or subject in the frame. Larger, tightly cropped images help you, your clients, and the reviewer see what matters — especially interior finishes.",
      },
      {
        q: "What should interior photos focus on?",
        a: "Appliances, surfaces, cabinets, countertops, and flooring. Minimize distracting overhead lighting. The finish and construction of the kitchen commands high adjustments, so photos must be clear and clean.",
      },
      {
        q: "What maps are required in a Rent Study?",
        a: "Three types: Subject Market Area map, Rent Comparable map, and Walkscore map. All are produced in Microsoft Streets and Trips except the Walkscore map (built at Walkscore.com).",
      },
      {
        q: "How do I define the Subject Market Area on a map?",
        a: "The SMA is the area the subject is most likely to draw tenants from. Borders are defined by major characteristics: highways, bodies of water, or drastic changes in landscape. Urban areas may be defined by neighborhood demographics and commerce; rural areas may encompass an entire town.",
      },
      {
        q: "What should the Rent Comparable map show?",
        a: "All five comparables in relation to each other and the subject. If four comps are within a half mile and one is two miles away, there should be a clear reason. Label each comp with its number, name, and address. Save in the project folder and paste into the Word document via Edit > Copy and Paste Map.",
      },
      {
        q: "How do I build a Walkscore map?",
        a: "Go to Walkscore.com, enter the subject property's address, click on the map, then select 'Walkability Map' to get a heat map. Use Snipping Tool to capture it (Ctrl+C, then Ctrl+P into the Word document).",
      },
    ],
  },
  {
    id: "rent-step",
    title: "Rent Step",
    summary:
      "How to calculate and defend the rent step between unit types using comparable data.",
    qa: [
      {
        q: "What is the rent step?",
        a: "The rent step is the difference in rent between one unit type and the next (e.g., studio to 1BR, 1BR to 2BR). It may reflect added amenities (extra bathroom, common space) in addition to the extra bedroom.",
      },
      {
        q: "How is the rent step calculated?",
        a: "Using the Rent Step table, identify comparables that have both unit types. Deduct the value of any added amenities or square footage from the rent step to isolate the portion primarily attributed to the bedroom itself. Apply a judgment factor based on the most influential comparables.",
      },
      {
        q: "What do you do when a comparable only has one unit type?",
        a: "Delete the blank data for that comparable so it doesn't skew the rent step calculation. Only pairs of unit types should be included in the step analysis.",
      },
    ],
  },
  {
    id: "glossary",
    title: "Glossary",
    summary:
      "Key terms, acronyms, and definitions used throughout the Rent Study process.",
    qa: [
      {
        q: "What is the SAFMR Test?",
        a: "The Small Area Fair Market Rent Test is a reasonableness check to ensure Rent Studies don't purport rents not backed by the market. If the concluded rent exceeds 150% of the SAFMR, HUD triggers a 3rd Party Rent Study ordered by HUD.",
      },
      {
        q: "What is STDB/ESRI?",
        a: "Site To Do Business (STDB) is an online business analytics platform used to build and display data — most commonly color-coded crime maps and demographics data.",
      },
      {
        q: "What is a Transmittal Letter?",
        a: "The opening section of a Rent Study that outlines the units at the subject property, concluded rents, the SAFMR test, and boilerplate associated with HUD requirements.",
      },
      {
        q: "What is a Full Rent Study vs. a Grids-Only Report?",
        a: "A Full RCS is required by HUD for Section 8 HAP contract renewals. It includes photos, subject and market narrative, demographics, rent conclusions, and adjustment narrative. A Grids-Only Report is used for internal planning, acquisitions, or appraisals — it ends after the rent conclusions with no narrative.",
      },
      {
        q: "What is the DREA Map?",
        a: "An interactive database with detailed entries for all past Rent Study, Review, and Appraisal work. Used for record keeping, marketing, and research for future assignments.",
      },
      {
        q: "What does 'enterdata' refer to?",
        a: "The 'enterdata' tab in the Excel document where property and client information is entered. It also contains tools like the parking coverage calculator and the demographics tables from STDB.",
      },
    ],
  },
];

export const TRAINING_PASSWORD = "doyle2024";
