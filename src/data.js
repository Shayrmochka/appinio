export const dataFirst = [
  {
    id: '1000',
    groupTitle:
      'Part A - Details of the primary visa holder or applicant (the primary person)',
    groupInfo: [
      {
        id: '1001',
        blockTitle: '1. What are the primary person’s details?',
        elementsType: 'input',
        style: 'form__group--without-border',
        elements: [
          {
            name: '1-family-name',
            placeholder: 'Family name',
          },
          {
            name: '1-given-names',
            placeholder: 'Given names',
          },
          {
            name: '1-dateOfBirth',
            placeholder: 'Date of birth',
          },
          {
            name: '1-passport',
            placeholder: 'Passport number',
          },
        ],
      },
      {
        id: '1002',
        blockTitle: 'Sex',
        elementsType: 'checkbox',
        elements: [
          {
            id: '1-male',
            name: '1-gender',
            value: '1-male',
            label: 'Male',
          },
          {
            id: '1-female',
            name: '1-gender',
            value: '1-female',
            label: 'Female',
          },
          {
            id: '1-unspecified',
            name: '1-gender',
            value: '1-unspecified',
            label: 'Indeterminate / Intersex / Unspecified',
          },
        ],
      },
      {
        id: '1003',
        blockTitle: 'Provide details of the primary person’s nomination',
        elementsType: 'input',
        elements: [
          {
            name: '1-appID',
            placeholder: 'Nomination application ID',
          },
        ],
      },
      {
        id: '1004',
        blockTitle: 'Provide detail of the primary person’s visa application',
        elementsType: 'input',
        elements: [
          {
            name: '1-visaTRN',
            placeholder: 'Visa application TRN',
          },
          {
            name: '1-visaId',
            placeholder: 'Visa application ID',
          },
          {
            name: '1-grantNumber',
            placeholder: 'Grant grant number',
          },
        ],
      },

      {
        id: '2000',
        blockTitle: '2. How many people are included in this application?',
        elementsType: 'input',
        elements: [
          {
            name: '2-people',
            placeholder: 'How many people are included in this application?',
          },
        ],
      },
    ],
  },
];

export const dataSecond = [
  {
    id: '3000',
    groupTitle: 'Details of person(s) included in this application',
    groupInfo: [
      {
        id: '3001',
        blockTitle:
          '3. Give details of all secondary persons to be included as applicants for a subclass 491 visa in this application form.',
        elementsType: 'input',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-family-name',
            placeholder: 'Family name',
          },
          {
            name: '3-given-names',
            placeholder: 'Given names',
          },
        ],
      },
      {
        id: '3002',
        blockTitle:
          'Have they been known by any other names? (including name at birth, previous married names, aliases)',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-no',
            name: '3-other-names',
            value: false,
            label: 'No',
            checked: false,
          },
          {
            id: '3-yes',
            name: '3-other-names',
            value: true,
            label: 'Yes',
            checked: false,
          },
        ],
      },
      {
        id: '3003',
        renderFor: '3-other-names',
        blockTitle: 'Give details',
        elementsType: 'input',
        // style: 'form__group--hidden form__group--without-border',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-other-family-name',
            placeholder: 'Family name',
            disabled: true,
          },
          {
            name: '3-other-given-names',
            placeholder: 'Given names',
            disabled: false,
          },
        ],
      },
      {
        id: '3004',
        blockTitle: 'Sex',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-male',
            name: '3-gender',
            value: '3-male',
            label: 'Male',
          },
          {
            id: '3-female',
            name: '3-gender',
            value: '3-female',
            label: 'Female',
          },
          {
            id: '3-unspecified',
            name: '3-gender',
            value: '3-unspecified',
            label: 'Indeterminate / Intersex / Unspecified',
          },
        ],
      },
      {
        id: '3005',
        blockTitle: 'Date of birth',
        elementsType: 'input',
        elements: [
          {
            name: '3-dateOfBirth',
            type: 'date',
            placeholder: 'Date of birth',
          },
        ],
      },
      {
        id: '3006',
        blockTitle: 'Place of birth',
        elementsType: 'input',
        elements: [
          {
            name: '3-place-of-birth',
            country: '3-country',
            region: '3-region',
            type: 'select',
            placeholder: 'Place of birth',
          },
        ],
      },
      {
        id: '3007',
        blockTitle: 'Relationship to the primary person',
        elementsType: 'input',
        elements: [
          {
            name: '3-relationship',
            placeholder: 'Relationship to the primary person',
          },
        ],
      },
      {
        id: '3008',
        blockTitle: 'Relationship status',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-married',
            name: '3-relationship-status',
            value: true,
            label: 'Married',
          },
          {
            id: '3-engaged',
            name: '3-relationship-status',
            value: '3-engaged',
            label: 'Engaged',
          },
          {
            id: '3-deFacto',
            name: '3-relationship-status',
            label: 'De facto',
            value: '3-deFacto',
          },
          {
            id: '3-separated',
            name: '3-relationship-status',
            value: '3-separated',
            label: 'Separated',
          },
          {
            id: '3-divorced',
            name: '3-relationship-status',
            value: '3-divorced',
            label: 'Divorced',
          },
          {
            id: '3-widowed',
            name: '3-relationship-status',
            label: 'Widowed',
            value: '3-widowed',
          },
          {
            id: '3-never',
            name: '3-relationship-status',
            label: 'Never married or been in a de facto relationship',
            value: '3-never',
          },
        ],
      },
      {
        id: '3009',
        blockTitle: 'Citizenship',
        elementsType: 'input',
        elements: [
          {
            name: '3-citizenship',
            placeholder: 'Citizenship',
          },
        ],
      },
      {
        id: '3010',
        blockTitle: 'Details from passport',
        elementsType: 'input',
        elements: [
          {
            name: '3-passportNumber',
            placeholder: 'Passport number',
          },
          {
            name: '3-countryOfPassport',
            placeholder: 'Country of passport',
          },
          {
            name: '3-issue',
            placeholder: 'Date of issue',
          },
          {
            name: '3-expiry',
            placeholder: 'Date of expiry',
          },
          {
            name: '3-authority',
            placeholder:
              'Issuing authority/place of issue as shown in your passport',
          },
        ],
      },
      // {
      //   id: '3011',
      //   blockTitle: '',
      //   elementsType: 'input',
      //   elements: [

      //   ],
      // },
      {
        id: '3012',
        blockTitle:
          'Does this person hold an identity card or identity number issued by their government eg. National identity card?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-card-no',
            name: '3-card',
            value: false,
            label: 'No',
          },
          {
            id: '3-card-yes',
            name: '3-card',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '3013',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '3-card',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-card-identify-number',
            placeholder: 'Identity number',
          },
          {
            name: '3-card-country-issue',
            placeholder: 'Country of issue',
          },
        ],
      },
      {
        id: '3014',
        blockTitle: 'Country this person is currently located in',
        elementsType: 'input',
        elements: [
          {
            name: '3-currently-located',
            placeholder: 'Country this person is currently located in',
          },
        ],
      },
      {
        id: '3015',
        blockTitle: 'Legal status of this person in this country',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-citizen',
            name: '3-citizen',
            value: true,
            label: 'Citizen',
          },
          {
            id: '3-permanent-resident',
            name: '3-permanent-resident',
            value: true,
            label: 'Permanent resident',
          },
          {
            id: '3-temporary-resident',
            name: '3-temporary-resident',
            label: 'Temporary resident',
            value: true,
          },
          {
            id: '3-no-legal-status',
            name: '3-no-legal-status',
            value: true,
            label: 'No legal status',
          },
          {
            id: '3-visitor',
            name: '3-visitor',
            label: 'Visitor',
            value: true,
          },
          {
            id: '3-other',
            name: '3-other',
            label: 'Other',
            value: true,
          },
        ],
      },
      {
        id: '3016',
        blockTitle: 'Is this person a home government sponsored student?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-goverment-student-no',
            name: '3-goverment-student',
            value: false,
            label: 'No',
          },
          {
            id: '3-goverment-student-yes',
            name: '3-goverment-student',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '3017',
        blockTitle:
          'Is this person a Foreign Affairs or an AusAID supported student or recipient?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-supported-student-no',
            name: '3-supported-student',
            value: false,
            label: 'No',
          },
          {
            id: '3-supported-student-yes',
            name: '3-supported-student',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '3018',
        blockTitle:
          'Before this application, has this person ever applied for an Australian visa?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-applied-visa-no',
            name: '3-applied-visa',
            value: false,
            label: 'No',
          },
          {
            id: '3-applied-visa-yes',
            name: '3-applied-visa',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '3019',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '3-applied-visa',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-date-of-application',
            placeholder: 'Date of application',
          },
          {
            name: '3-location-of-application',
            placeholder: 'Lodgement location of application',
          },
          {
            name: '3-visa-applied-for',
            placeholder: 'Subclass and name of visa applied for',
          },
        ],
      },
      {
        id: '3020',
        blockTitle: 'Was the visa or the application:',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-granted',
            name: '3-granted',
            value: true,
            label: 'Granted',
          },
          {
            id: '3-refused',
            name: '3-refused',
            value: true,
            label: 'Refused',
          },
          {
            id: '3-withdrawn',
            name: '3-withdrawn',
            label: 'Withdrawn',
            value: true,
          },
          {
            id: '3-pending',
            name: '3-pending',
            value: true,
            label: 'Pending',
          },
        ],
      },
      {
        id: '3021',
        blockTitle: 'Has this person ever held a Bridging visa E?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-bridging-visa-e-no',
            name: '3-bridging-visa-e',
            value: false,
            label: 'No',
          },
          {
            id: '3-bridging-visa-e-yes',
            name: '3-bridging-visa-e',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '3022',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '3-bridging-visa-e',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-bridging-visa-place',
            placeholder: 'Place of issue',
          },
          {
            name: '3-bridging-visa-issue',
            placeholder: 'Date of issue',
          },
          {
            name: '3-bridging-visa-expiry',
            placeholder: 'Date of expiry',
          },
        ],
      },
      {
        id: '3023',
        blockTitle:
          'Has this person ever had an Australian visa refused or cancelled?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '3-australian-visa-refused-no',
            name: '3-australian-visa-refused',
            value: false,
            label: 'No',
          },
          {
            id: '3-australian-visa-refused-yes',
            name: '3-australian-visa-refused',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '3024',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '3-australian-visa-refused',
        style: 'form__group--without-border',
        elements: [
          {
            name: '3-australian-visa-refused',
            placeholder: 'Give details',
          },
        ],
      },
    ],
  },
];

export const dataThird = [
  {
    id: '5000',
    groupTitle: 'Health',
    groupInfo: [
      {
        id: '5001',
        blockTitle:
          '5. In the last 5 years, has any person included in this application, visited, or lived, outside their country of passport for more than 3 consecutive months?',
        elementsType: 'checkbox',
        style: 'form__group--without-border',
        elements: [
          {
            id: '5-visited-no',
            name: '5-visited',
            value: false,
            label: 'No',
          },
          {
            id: '5-visited-yes',
            name: '5-visited',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '5002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '5-visited',
        style: 'form__group--without-border',
        elements: [
          {
            name: '5-name-first',
            placeholder: 'Name',
          },
          {
            name: '5-country-first',
            placeholder: 'Country',
          },
          {
            name: '5-date-from-first',
            placeholder: 'Date from',
          },
          {
            name: '5-date-to-first',
            placeholder: 'Date to',
          },
        ],
      },
      {
        id: '5003',
        blockTitle: '',
        elementsType: 'input',
        elements: [
          {
            name: '5-name-second',
            placeholder: 'Name',
          },
          {
            name: '5-country-second',
            placeholder: 'Country',
          },
          {
            name: '5-date-from-second',
            placeholder: 'Date from',
          },
          {
            name: '5-date-to-second',
            placeholder: 'Date to',
          },
        ],
      },
      {
        id: '5004',
        blockTitle: '',
        elementsType: 'input',
        elements: [
          {
            name: '5-name-third',
            placeholder: 'Name',
          },
          {
            name: '5-country-third',
            placeholder: 'Country',
          },
          {
            name: '5-date-from-third',
            placeholder: 'Date from',
          },
          {
            name: '5-date-to-third',
            placeholder: 'Date to',
          },
        ],
      },

      {
        id: '6001',
        blockTitle:
          '6. Does any person included in this application, intend to enter a hospital or a health care facility (including nursing homes) while in Australia?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '6-hospital-no',
            name: '6-hospital',
            value: false,
            label: 'No',
          },
          {
            id: '6-hospital-yes',
            name: '6-hospital',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '6002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '6-hospital',
        style: 'form__group--without-border',
        elements: [
          {
            name: '6-hospital-details',
            placeholder: 'Give details',
          },
        ],
      },

      {
        id: '7001',
        blockTitle:
          '7. Does any person included in this application, intend to work as, or study to be, a doctor, dentist, nurse or paramedic during your stay in Australia?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '7-work-no',
            name: '7-work',
            value: false,
            label: 'No',
          },
          {
            id: '7-work-yes',
            name: '7-work',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '7002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '7-work',
        style: 'form__group--without-border',
        elements: [
          {
            name: '7-work-details',
            placeholder: 'Give details',
          },
        ],
      },

      {
        id: '8001',
        blockTitle:
          '8. Does any person included in this application, intend to work, or be a trainee, at a child care centre (including preschools and creches) while in Australia?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '8-work-no',
            name: '8-work',
            value: false,
            label: 'No',
          },
          {
            id: '8-work-yes',
            name: '8-work',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '8002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '8-work',
        style: 'form__group--without-border',
        elements: [
          {
            name: '8-work-details',
            placeholder: 'Give details',
          },
        ],
      },

      {
        id: '9001',
        blockTitle:
          '9. Has any person included in this application ever had, or currently have, tuberculosis or been in close contact with a family member that has active tuberculosis or ever had a chest x-ray which showed an abnormality?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '9-tuberculosis-no',
            name: '9-tuberculosis',
            value: false,
            label: 'No',
          },
          {
            id: '9-tuberculosis-yes',
            name: '9-tuberculosis',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '9002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '9-tuberculosis',
        style: 'form__group--without-border',
        elements: [
          {
            name: '9-tuberculosis-details',
            placeholder: 'Give details',
          },
        ],
      },

      {
        id: '10001',
        blockTitle:
          '10. During the proposed stay in Australia, does any person included in this application, expect to incur medical costs, or require treatment or medical follow up for: blood disorder; cancer; heart disease; hepatitis B or C and/or liver disease; HIV infection, including AIDS; kidney disease, including dialysis; mental illness; pregnancy; respiratory disease that has required hospital admission or oxygen therapy; other?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '10-for-no',
            name: '10-for',
            value: false,
            label: 'No',
          },
          {
            id: '10-for-yes',
            name: '10-for',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '10002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '10-for',
        style: 'form__group--without-border',
        elements: [
          {
            name: '10-for-details',
            placeholder: 'Give details',
          },
        ],
      },

      {
        id: '11001',
        blockTitle:
          '11. Does any person included in this application, require assistance with mobility or care due to a medical condition?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '11-assistance-no',
            name: '11-assistance',
            value: false,
            label: 'No',
          },
          {
            id: '11-assistance-yes',
            name: '11-assistance',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '11002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '11-assistance',
        style: 'form__group--without-border',
        elements: [
          {
            name: '11-assistance-details',
            placeholder: 'Give details',
          },
        ],
      },

      {
        id: '12001',
        blockTitle:
          '12. Has any person included in this application, undertaken a health examination for an Australian visa in the last 12 months?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '12-undertaken-no',
            name: '12-undertaken',
            value: false,
            label: 'No',
          },
          {
            id: '12-undertaken-yes',
            name: '12-undertaken',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '12002',
        blockTitle: 'Give details',
        elementsType: 'input',
        renderFor: '12-undertaken',
        style: 'form__group--without-border',
        elements: [
          {
            name: '12-undertaken-details',
            placeholder: 'Give details',
          },
        ],
      },
    ],
  },
];

export const dataFourth = [
  {
    id: '15000',
    groupTitle: '15. Has any person included in this application, ever:',
    groupInfo: [
      {
        id: '15001',
        blockTitle:
          'been charged with any offence that is currently awaiting legal action?',
        elementsType: 'checkbox',
        style: 'form__group--without-border form__group--table',
        elements: [
          {
            id: '15-legal-no',
            name: '15-legal',
            value: false,
            label: 'No',
          },
          {
            id: '15-legal-yes',
            name: '15-legal',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15002',
        blockTitle:
          'been convicted of an offence in any country (including any conviction which is now removed from official records)?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-convicted-no',
            name: '15-convicted',
            value: false,
            label: 'No',
          },
          {
            id: '15-convicted-yes',
            name: '15-convicted',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15003',
        blockTitle:
          'been charged or convicted of family or domestic violence offences or similar related offences?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-charged-no',
            name: '15-charged',
            value: false,
            label: 'No',
          },
          {
            id: '15-charged-yes',
            name: '15-charged',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15004',
        blockTitle:
          'been the subject of a domestic or family violence order, or any other order, of a tribunal or court or other similar authority, for the personal protection of another person?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-order-no',
            name: '15-order',
            value: false,
            label: 'No',
          },
          {
            id: '15-order-yes',
            name: '15-order',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15005',
        blockTitle: 'been the subject of an arrest warrant or Interpol notice?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-interpol-no',
            name: '15-interpol',
            value: false,
            label: 'No',
          },
          {
            id: '15-interpol-yes',
            name: '15-interpol',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15006',
        blockTitle:
          'been found guilty of a sexually based offence involving a child (including where no conviction was recorded)?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-guilty-of-sex-no',
            name: '15-guilty-of-sex',
            value: false,
            label: 'No',
          },
          {
            id: '15-guilty-of-sex-yes',
            name: '15-guilty-of-sex',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '15007',
        blockTitle: 'been named on a sex offender register?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-sex-offender-no',
            name: '15-sex-offender',
            value: false,
            label: 'No',
          },
          {
            id: '15-sex-offender-yes',
            name: '15-sex-offender',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15008',
        blockTitle:
          'been acquitted of any offence on the grounds of unsoundness of mind or insanity?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-acquitted-no',
            name: '15-acquitted',
            value: false,
            label: 'No',
          },
          {
            id: '15-acquitted-yes',
            name: '15-acquitted',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '15009',
        blockTitle: 'been found by a court not fit to plead?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-not-plead-no',
            name: '15-not-plead',
            value: false,
            label: 'No',
          },
          {
            id: '15-not-plead-yes',
            name: '15-not-plead',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150010',
        blockTitle:
          'been directly or indirectly involved in, or associated with, activities which would represent a risk to national security in Australia or any other country?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-national-security-no',
            name: '15-national-security',
            value: false,
            label: 'No',
          },
          {
            id: '15-national-security-yes',
            name: '15-national-security',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150011',
        blockTitle:
          'been charged with, or indicted for: genocide, war crimes, crimes against humanity, torture, slavery, or any other crime that is otherwise of a serious international concern?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-genocide-no',
            name: '15-genocide',
            value: false,
            label: 'No',
          },
          {
            id: '15-genocide-yes',
            name: '15-genocide',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150012',
        blockTitle:
          'been associated with a person, group or organisation that has been/is involved in criminal conduct?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-criminal-conduct-no',
            name: '15-criminal-conduct',
            value: false,
            label: 'No',
          },
          {
            id: '15-criminal-conduct-yes',
            name: '15-criminal-conduct',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150013',
        blockTitle:
          'been associated with an organisation engaged in violence or engaged in acts of violence (including war, insurgency, freedom fighting, terrorism, protest) either overseas or in Australia?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-organisation-engaged-no',
            name: '15-organisation-engaged',
            value: false,
            label: 'No',
          },
          {
            id: '15-organisation-engaged-yes',
            name: '15-organisation-engaged',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '150014',
        blockTitle:
          'served in a military force, police force, state sponsored/private militia or intelligence agency (including secret police)?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-military-force-no',
            name: '15-military-force',
            value: false,
            label: 'No',
          },
          {
            id: '15-military-force-yes',
            name: '15-military-force',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150015',
        blockTitle:
          'undergone any military/paramilitary training, been trained in weapons/explosives or in the manufacture of chemical/biological products?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-training-no',
            name: '15-training',
            value: false,
            label: 'No',
          },
          {
            id: '15-training-yes',
            name: '15-training',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150016',
        blockTitle:
          'been involved in people smuggling or people trafficking offences?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-smuggling-no',
            name: '15-smuggling',
            value: false,
            label: 'No',
          },
          {
            id: '15-smuggling-yes',
            name: '15-smuggling',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150017',
        blockTitle:
          'been removed, deported or excluded from any country (including Australia)?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-deported-no',
            name: '15-deported',
            value: false,
            label: 'No',
          },
          {
            id: '15-deported-yes',
            name: '15-deported',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150018',
        blockTitle: 'overstayed a visa in any country (including Australia)?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-overstayed-no',
            name: '15-overstayed',
            value: false,
            label: 'No',
          },
          {
            id: '15-overstayed-yes',
            name: '15-overstayed',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '150020',
        blockTitle:
          'had any outstanding debts to the Australian Government or any public authority in Australia?',
        elementsType: 'checkbox',
        style: ' form__group--table',
        elements: [
          {
            id: '15-outstanding-debts-no',
            name: '15-outstanding-debts',
            value: false,
            label: 'No',
          },
          {
            id: '15-outstanding-debts-yes',
            name: '15-outstanding-debts',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '150021',
        blockTitle:
          'If you answered ‘Yes’ to any question at Question 15, give details, including the date of the charge, the outcome and any penalty imposed.',
        elementsType: 'input',
        style: 'form__group--without-border',
        renderFor: '15-outstanding-debts',
        elements: [
          {
            name: '15-yes-details-details',
            placeholder: 'Give details',
          },
        ],
      },
    ],
  },
];

export const dataFifth = [
  {
    id: '16000',
    groupTitle: 'Part B – Assistance with this form',
    groupInfo: [
      {
        id: '16001',
        blockTitle: '16. Did you receive assistance in completing this form?',
        elementsType: 'checkbox',
        style: 'form__group--without-border',
        elements: [
          {
            id: '16-assistance-no',
            name: '16-assistance-no',
            value: false,
            label: 'No',
          },
          {
            id: '16-assistance-yes',
            name: '16-assistance-yes',
            value: true,
            label: 'Yes',
          },
        ],
      },
      {
        id: '16002',
        blockTitle: 'Please give details of the person who assisted you',
        elementsType: 'checkbox',
        elements: [
          {
            id: '16-mr',
            name: '16-mr',
            value: 'yes',
            label: 'Mr',
          },
          {
            id: '16-mrs',
            name: '16-mrs',
            value: 'yes',
            label: 'Mrs',
          },
          {
            id: '16-miss',
            name: '16-miss',
            label: 'Miss',
            value: 'yes',
          },
          {
            id: '16-ms',
            name: '16-ms',
            value: 'yes',
            label: 'Ms',
          },
          {
            id: '16-other',
            name: '16-other',
            value: 'yes',
            label: 'Other',
          },
        ],
      },
      {
        id: '16003',
        blockTitle: '',
        elementsType: 'input',
        elements: [
          {
            name: '16-family-name',
            placeholder: 'Family name',
          },
          {
            name: '16-given-names',
            placeholder: 'Given names',
          },
          {
            name: '16-address',
            placeholder: 'Address',
          },
        ],
      },
      {
        id: '16004',
        blockTitle: 'Telephone number or daytime contact',
        elementsType: 'input',
        elements: [
          {
            name: '16-office-hours',
            placeholder: 'Office hours',
          },
          {
            name: '16-mobile',
            placeholder: 'Mobile',
          },
        ],
      },

      {
        id: '17000',
        blockTitle:
          '17. Is the person a registered migration agent, Australian legal practitioner or an exempt person?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '17-migration-no',
            name: '17-migration',
            value: false,
            label: 'No',
          },
          {
            id: '17-migration-yes',
            name: '17-migration',
            value: true,
            label: 'Yes',
          },
        ],
      },

      {
        id: '18000',
        blockTitle:
          '18. Did you pay the person and/or give a gift for this assistance?',
        elementsType: 'checkbox',
        elements: [
          {
            id: '18-pay-no',
            name: '18-pay',
            value: false,
            label: 'No',
          },
          {
            id: '18-pay-yes',
            name: '18-pay',
            value: true,
            label: 'Yes',
          },
        ],
      },
    ],
  },
  {
    id: '19000',
    groupTitle: 'Part C – Options for receiving written communications',
    groupInfo: [
      {
        id: '19001',
        blockTitle:
          '19. All written communications about this application should be sent to:',
        elementsType: 'checkbox',
        elements: [
          {
            id: '19-myself',
            name: '19-myself',
            value: 'yes',
            label: 'Myself',
          },
          {
            id: '19-recipient',
            name: '19-recipient',
            value: 'yes',
            label: 'Authorised recipient',
          },
          {
            id: '19-agent',
            name: '19-agent',
            label: 'Migration agent',
            value: 'yes',
          },
          {
            id: '19-practitioner',
            name: '19-practitioner',
            value: 'yes',
            label: 'Legal practitioner',
          },
          {
            id: '19-exempt',
            name: '19-exempt',
            value: 'yes',
            label: 'Exempt person',
          },
        ],
      },
    ],
  },
  {
    id: '20000',
    groupTitle: 'Part D – Payment details',
    groupInfo: [
      {
        id: '20001',
        blockTitle:
          '20. Make your payment electronically through the ‘My Payments’ section of ImmiAccount. Sign into, or create, your ImmiAccount and select My Payments>Manage Payments>Pre-Pay Paper Service, at www.homeaffairs.gov.au/immiaccount',
        elementsType: 'input',
        elements: [
          {
            name: '20-payment-details',
            placeholder: 'Payment details',
          },
        ],
      },
    ],
  },
];
