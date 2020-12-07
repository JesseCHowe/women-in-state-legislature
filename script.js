const data = [
  {
    state: "Alabama",
    year: 2015,
    female_senate: 4,
    total_senate: 35,
    female_house: 16,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 2015,
    female_senate: 4,
    total_senate: 39,
    female_house: 14,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 2015,
    female_senate: 2,
    total_senate: 46,
    female_house: 22,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 2015,
    female_senate: 8,
    total_senate: 52,
    female_house: 22,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 2015,
    female_senate: 4,
    total_senate: 38,
    female_house: 19,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 2015,
    female_senate: 6,
    total_senate: 48,
    female_house: 15,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 2015,
    female_senate: 9,
    total_senate: 50,
    female_house: 39,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 2015,
    female_senate: 7,
    total_senate: 35,
    female_house: 20,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 2015,
    female_senate: 8,
    total_senate: 40,
    female_house: 16,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 2015,
    female_senate: 6,
    total_senate: 33,
    female_house: 17,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 2015,
    female_senate: 10,
    total_senate: 56,
    female_house: 46,
    total_house: 180
  },
  {
    state: "Utah",
    year: 2015,
    female_senate: 6,
    total_senate: 29,
    female_house: 10,
    total_house: 75
  },
  {
    state: "Texas",
    year: 2015,
    female_senate: 7,
    total_senate: 31,
    female_house: 29,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 2015,
    female_senate: 8,
    total_senate: 47,
    female_house: 19,
    total_house: 94
  },
  {
    state: "West Virginia",
    year: 2015,
    female_senate: 1,
    total_senate: 34,
    female_house: 19,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 2015,
    female_senate: 11,
    total_senate: 40,
    female_house: 26,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 2015,
    female_senate: 9,
    total_senate: 50,
    female_house: 22,
    total_house: 100
  },
  {
    state: "New York",
    year: 2015,
    female_senate: 12,
    total_senate: 63,
    female_house: 43,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 2015,
    female_senate: 7,
    total_senate: 35,
    female_house: 15,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 2015,
    female_senate: 7,
    total_senate: 33,
    female_house: 26,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 2015,
    female_senate: 1,
    total_senate: 30,
    female_house: 11,
    total_house: 60
  },
  {
    state: "North Carolina",
    year: 2015,
    female_senate: 12,
    total_senate: 50,
    female_house: 26,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 2015,
    female_senate: 6,
    total_senate: 34,
    female_house: 43,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 2015,
    female_senate: 4,
    total_senate: 38,
    female_house: 26,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 2015,
    female_senate: 7,
    total_senate: 50,
    female_house: 27,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 2015,
    female_senate: 10,
    total_senate: 38,
    female_house: 21,
    total_house: 75
  },
  {
    state: "Florida",
    year: 2015,
    female_senate: 12,
    total_senate: 40,
    female_house: 28,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 2015,
    female_senate: 11,
    total_senate: 49,
    female_house: 11,
    total_house: 49
  },
  {
    state: "New Mexico",
    year: 2015,
    female_senate: 7,
    total_senate: 42,
    female_house: 23,
    total_house: 70
  },
  {
    state: "California",
    year: 2015,
    female_senate: 12,
    total_senate: 40,
    female_house: 19,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 2015,
    female_senate: 5,
    total_senate: 20,
    female_house: 12,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 2015,
    female_senate: 12,
    total_senate: 40,
    female_house: 38,
    total_house: 160
  },
  {
    state: "Montana",
    year: 2015,
    female_senate: 18,
    total_senate: 50,
    female_house: 29,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 2015,
    female_senate: 6,
    total_senate: 21,
    female_house: 9,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 2015,
    female_senate: 16,
    total_senate: 59,
    female_house: 42,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 2015,
    female_senate: 11,
    total_senate: 33,
    female_house: 23,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 2015,
    female_senate: 10,
    total_senate: 35,
    female_house: 19,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 2015,
    female_senate: 23,
    total_senate: 67,
    female_house: 45,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 2015,
    female_senate: 8,
    total_senate: 25,
    female_house: 14,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 2015,
    female_senate: 13,
    total_senate: 40,
    female_house: 28,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 2015,
    female_senate: 8,
    total_senate: 30,
    female_house: 20,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 2015,
    female_senate: 13,
    total_senate: 47,
    female_house: 47,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 2015,
    female_senate: 9,
    total_senate: 36,
    female_house: 44,
    total_house: 151
  },
  {
    state: "Maine",
    year: 2015,
    female_senate: 8,
    total_senate: 35,
    female_house: 46,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 2015,
    female_senate: 5,
    total_senate: 21,
    female_house: 16,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 2015,
    female_senate: 13,
    total_senate: 30,
    female_house: 19,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 2015,
    female_senate: 9,
    total_senate: 30,
    female_house: 65,
    total_house: 150
  },
  {
    state: "Washington",
    year: 2015,
    female_senate: 18,
    total_senate: 49,
    female_house: 32,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 2015,
    female_senate: 12,
    total_senate: 35,
    female_house: 30,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 2015,
    female_senate: 8,
    total_senate: 24,
    female_house: 114,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 2010,
    female_senate: 5,
    total_senate: 35,
    female_house: 13,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 2010,
    female_senate: 8,
    total_senate: 39,
    female_house: 15,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 2010,
    female_senate: 0,
    total_senate: 46,
    female_house: 17,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 2010,
    female_senate: 4,
    total_senate: 52,
    female_house: 21,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 2010,
    female_senate: 7,
    total_senate: 38,
    female_house: 15,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 2010,
    female_senate: 5,
    total_senate: 48,
    female_house: 12,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 2010,
    female_senate: 10,
    total_senate: 50,
    female_house: 29,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 2010,
    female_senate: 6,
    total_senate: 35,
    female_house: 25,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 2010,
    female_senate: 8,
    total_senate: 40,
    female_house: 19,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 2010,
    female_senate: 8,
    total_senate: 33,
    female_house: 17,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 2010,
    female_senate: 8,
    total_senate: 56,
    female_house: 38,
    total_house: 180
  },
  {
    state: "Utah",
    year: 2010,
    female_senate: 5,
    total_senate: 29,
    female_house: 18,
    total_house: 75
  },
  {
    state: "Texas",
    year: 2010,
    female_senate: 6,
    total_senate: 31,
    female_house: 37,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 2010,
    female_senate: 6,
    total_senate: 47,
    female_house: 17,
    total_house: 94
  },
  {
    state: "West Virginia",
    year: 2010,
    female_senate: 2,
    total_senate: 34,
    female_house: 20,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 2010,
    female_senate: 10,
    total_senate: 40,
    female_house: 24,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 2010,
    female_senate: 12,
    total_senate: 50,
    female_house: 20,
    total_house: 100
  },
  {
    state: "New York",
    year: 2010,
    female_senate: 10,
    total_senate: 62,
    female_house: 41,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 2010,
    female_senate: 7,
    total_senate: 35,
    female_house: 14,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 2010,
    female_senate: 7,
    total_senate: 33,
    female_house: 22,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 2010,
    female_senate: 2,
    total_senate: 30,
    female_house: 13,
    total_house: 60
  },
  {
    state: "North Carolina",
    year: 2010,
    female_senate: 6,
    total_senate: 50,
    female_house: 38,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 2010,
    female_senate: 8,
    total_senate: 34,
    female_house: 36,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 2010,
    female_senate: 9,
    total_senate: 38,
    female_house: 28,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 2010,
    female_senate: 9,
    total_senate: 50,
    female_house: 26,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 2010,
    female_senate: 8,
    total_senate: 38,
    female_house: 17,
    total_house: 75
  },
  {
    state: "Florida",
    year: 2010,
    female_senate: 9,
    total_senate: 40,
    female_house: 29,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 2010,
    female_senate: 10,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 2010,
    female_senate: 11,
    total_senate: 42,
    female_house: 23,
    total_house: 70
  },
  {
    state: "California",
    year: 2010,
    female_senate: 12,
    total_senate: 40,
    female_house: 20,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 2010,
    female_senate: 3,
    total_senate: 20,
    female_house: 10,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 2010,
    female_senate: 12,
    total_senate: 40,
    female_house: 39,
    total_house: 160
  },
  {
    state: "Montana",
    year: 2010,
    female_senate: 10,
    total_senate: 50,
    female_house: 29,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 2010,
    female_senate: 8,
    total_senate: 21,
    female_house: 8,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 2010,
    female_senate: 13,
    total_senate: 59,
    female_house: 37,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 2010,
    female_senate: 7,
    total_senate: 33,
    female_house: 22,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 2010,
    female_senate: 9,
    total_senate: 35,
    female_house: 18,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 2010,
    female_senate: 27,
    total_senate: 67,
    female_house: 43,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 2010,
    female_senate: 7,
    total_senate: 25,
    female_house: 18,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 2010,
    female_senate: 14,
    total_senate: 40,
    female_house: 36,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 2010,
    female_senate: 10,
    total_senate: 30,
    female_house: 16,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 2010,
    female_senate: 10,
    total_senate: 47,
    female_house: 49,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 2010,
    female_senate: 8,
    total_senate: 36,
    female_house: 52,
    total_house: 151
  },
  {
    state: "Maine",
    year: 2010,
    female_senate: 8,
    total_senate: 35,
    female_house: 46,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 2010,
    female_senate: 7,
    total_senate: 21,
    female_house: 13,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 2010,
    female_senate: 11,
    total_senate: 30,
    female_house: 18,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 2010,
    female_senate: 11,
    total_senate: 30,
    female_house: 56,
    total_house: 150
  },
  {
    state: "Washington",
    year: 2010,
    female_senate: 19,
    total_senate: 49,
    female_house: 29,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 2010,
    female_senate: 13,
    total_senate: 35,
    female_house: 25,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 2010,
    female_senate: 13,
    total_senate: 24,
    female_house: 143,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 2005,
    female_senate: 3,
    total_senate: 35,
    female_house: 12,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 2005,
    female_senate: 7,
    total_senate: 39,
    female_house: 18,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 2005,
    female_senate: 1,
    total_senate: 46,
    female_house: 13,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 2005,
    female_senate: 4,
    total_senate: 52,
    female_house: 18,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 2005,
    female_senate: 6,
    total_senate: 38,
    female_house: 11,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 2005,
    female_senate: 8,
    total_senate: 48,
    female_house: 14,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 2005,
    female_senate: 9,
    total_senate: 50,
    female_house: 25,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 2005,
    female_senate: 6,
    total_senate: 35,
    female_house: 17,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 2005,
    female_senate: 8,
    total_senate: 40,
    female_house: 13,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 2005,
    female_senate: 8,
    total_senate: 33,
    female_house: 16,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 2005,
    female_senate: 7,
    total_senate: 56,
    female_house: 36,
    total_house: 180
  },
  {
    state: "Utah",
    year: 2005,
    female_senate: 4,
    total_senate: 29,
    female_house: 17,
    total_house: 75
  },
  {
    state: "Texas",
    year: 2005,
    female_senate: 4,
    total_senate: 31,
    female_house: 32,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 2005,
    female_senate: 5,
    total_senate: 47,
    female_house: 18,
    total_house: 94
  },
  {
    state: "West Virginia",
    year: 2005,
    female_senate: 3,
    total_senate: 34,
    female_house: 18,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 2005,
    female_senate: 7,
    total_senate: 40,
    female_house: 13,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 2005,
    female_senate: 12,
    total_senate: 50,
    female_house: 14,
    total_house: 100
  },
  {
    state: "New York",
    year: 2005,
    female_senate: 10,
    total_senate: 62,
    female_house: 37,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 2005,
    female_senate: 3,
    total_senate: 35,
    female_house: 14,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 2005,
    female_senate: 5,
    total_senate: 33,
    female_house: 21,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 2005,
    female_senate: 4,
    total_senate: 30,
    female_house: 9,
    total_house: 60
  },
  {
    state: "North Carolina",
    year: 2005,
    female_senate: 7,
    total_senate: 50,
    female_house: 32,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 2005,
    female_senate: 6,
    total_senate: 34,
    female_house: 36,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 2005,
    female_senate: 11,
    total_senate: 38,
    female_house: 19,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 2005,
    female_senate: 5,
    total_senate: 50,
    female_house: 25,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 2005,
    female_senate: 8,
    total_senate: 38,
    female_house: 11,
    total_house: 75
  },
  {
    state: "Florida",
    year: 2005,
    female_senate: 9,
    total_senate: 40,
    female_house: 30,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 2005,
    female_senate: 12,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 2005,
    female_senate: 11,
    total_senate: 42,
    female_house: 24,
    total_house: 70
  },
  {
    state: "California",
    year: 2005,
    female_senate: 12,
    total_senate: 40,
    female_house: 25,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 2005,
    female_senate: 3,
    total_senate: 20,
    female_house: 8,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 2005,
    female_senate: 11,
    total_senate: 40,
    female_house: 39,
    total_house: 160
  },
  {
    state: "Montana",
    year: 2005,
    female_senate: 7,
    total_senate: 50,
    female_house: 30,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 2005,
    female_senate: 7,
    total_senate: 21,
    female_house: 14,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 2005,
    female_senate: 14,
    total_senate: 59,
    female_house: 35,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 2005,
    female_senate: 8,
    total_senate: 33,
    female_house: 26,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 2005,
    female_senate: 4,
    total_senate: 35,
    female_house: 25,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 2005,
    female_senate: 25,
    total_senate: 67,
    female_house: 37,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 2005,
    female_senate: 6,
    total_senate: 25,
    female_house: 17,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 2005,
    female_senate: 13,
    total_senate: 40,
    female_house: 41,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 2005,
    female_senate: 9,
    total_senate: 30,
    female_house: 16,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 2005,
    female_senate: 15,
    total_senate: 47,
    female_house: 52,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 2005,
    female_senate: 9,
    total_senate: 36,
    female_house: 46,
    total_house: 151
  },
  {
    state: "Maine",
    year: 2005,
    female_senate: 11,
    total_senate: 35,
    female_house: 32,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 2005,
    female_senate: 6,
    total_senate: 21,
    female_house: 15,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 2005,
    female_senate: 9,
    total_senate: 30,
    female_house: 20,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 2005,
    female_senate: 10,
    total_senate: 30,
    female_house: 50,
    total_house: 150
  },
  {
    state: "Washington",
    year: 2005,
    female_senate: 20,
    total_senate: 49,
    female_house: 29,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 2005,
    female_senate: 11,
    total_senate: 35,
    female_house: 22,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 2005,
    female_senate: 5,
    total_senate: 24,
    female_house: 124,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 2000,
    female_senate: 3,
    total_senate: 35,
    female_house: 8,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 2000,
    female_senate: 3,
    total_senate: 39,
    female_house: 20,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 2000,
    female_senate: 2,
    total_senate: 46,
    female_house: 16,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 2000,
    female_senate: 6,
    total_senate: 52,
    female_house: 16,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 2000,
    female_senate: 4,
    total_senate: 38,
    female_house: 12,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 2000,
    female_senate: 6,
    total_senate: 48,
    female_house: 9,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 2000,
    female_senate: 7,
    total_senate: 50,
    female_house: 25,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 2000,
    female_senate: 2,
    total_senate: 35,
    female_house: 19,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 2000,
    female_senate: 8,
    total_senate: 40,
    female_house: 15,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 2000,
    female_senate: 6,
    total_senate: 33,
    female_house: 17,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 2000,
    female_senate: 10,
    total_senate: 56,
    female_house: 36,
    total_house: 180
  },
  {
    state: "Utah",
    year: 2000,
    female_senate: 4,
    total_senate: 29,
    female_house: 18,
    total_house: 75
  },
  {
    state: "Texas",
    year: 2000,
    female_senate: 4,
    total_senate: 31,
    female_house: 29,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 2000,
    female_senate: 6,
    total_senate: 49,
    female_house: 20,
    total_house: 98
  },
  {
    state: "West Virginia",
    year: 2000,
    female_senate: 4,
    total_senate: 34,
    female_house: 20,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 2000,
    female_senate: 3,
    total_senate: 40,
    female_house: 16,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 2000,
    female_senate: 13,
    total_senate: 50,
    female_house: 14,
    total_house: 100
  },
  {
    state: "New York",
    year: 2000,
    female_senate: 9,
    total_senate: 61,
    female_house: 36,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 2000,
    female_senate: 5,
    total_senate: 35,
    female_house: 10,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 2000,
    female_senate: 5,
    total_senate: 33,
    female_house: 22,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 2000,
    female_senate: 5,
    total_senate: 30,
    female_house: 12,
    total_house: 64
  },
  {
    state: "North Carolina",
    year: 2000,
    female_senate: 7,
    total_senate: 50,
    female_house: 24,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 2000,
    female_senate: 6,
    total_senate: 34,
    female_house: 38,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 2000,
    female_senate: 5,
    total_senate: 38,
    female_house: 31,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 2000,
    female_senate: 11,
    total_senate: 50,
    female_house: 20,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 2000,
    female_senate: 11,
    total_senate: 50,
    female_house: 26,
    total_house: 100
  },
  {
    state: "Florida",
    year: 2000,
    female_senate: 7,
    total_senate: 40,
    female_house: 32,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 2000,
    female_senate: 12,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 2000,
    female_senate: 10,
    total_senate: 42,
    female_house: 21,
    total_house: 70
  },
  {
    state: "California",
    year: 2000,
    female_senate: 11,
    total_senate: 40,
    female_house: 20,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 2000,
    female_senate: 3,
    total_senate: 20,
    female_house: 8,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 2000,
    female_senate: 11,
    total_senate: 40,
    female_house: 41,
    total_house: 160
  },
  {
    state: "Montana",
    year: 2000,
    female_senate: 8,
    total_senate: 50,
    female_house: 29,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 2000,
    female_senate: 6,
    total_senate: 21,
    female_house: 9,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 2000,
    female_senate: 12,
    total_senate: 59,
    female_house: 32,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 2000,
    female_senate: 11,
    total_senate: 33,
    female_house: 20,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 2000,
    female_senate: 6,
    total_senate: 35,
    female_house: 21,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 2000,
    female_senate: 22,
    total_senate: 67,
    female_house: 35,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 2000,
    female_senate: 5,
    total_senate: 25,
    female_house: 12,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 2000,
    female_senate: 14,
    total_senate: 40,
    female_house: 40,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 2000,
    female_senate: 8,
    total_senate: 30,
    female_house: 19,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 2000,
    female_senate: 9,
    total_senate: 47,
    female_house: 46,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 2000,
    female_senate: 9,
    total_senate: 36,
    female_house: 47,
    total_house: 151
  },
  {
    state: "Maine",
    year: 2000,
    female_senate: 16,
    total_senate: 35,
    female_house: 36,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 2000,
    female_senate: 5,
    total_senate: 21,
    female_house: 17,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 2000,
    female_senate: 7,
    total_senate: 30,
    female_house: 25,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 2000,
    female_senate: 10,
    total_senate: 30,
    female_house: 47,
    total_house: 150
  },
  {
    state: "Washington",
    year: 2000,
    female_senate: 23,
    total_senate: 49,
    female_house: 37,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 2000,
    female_senate: 12,
    total_senate: 35,
    female_house: 22,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 2000,
    female_senate: 8,
    total_senate: 24,
    female_house: 127,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 1995,
    female_senate: 1,
    total_senate: 35,
    female_house: 4,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 1995,
    female_senate: 2,
    total_senate: 39,
    female_house: 12,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 1995,
    female_senate: 3,
    total_senate: 46,
    female_house: 18,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 1995,
    female_senate: 4,
    total_senate: 52,
    female_house: 16,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 1995,
    female_senate: 2,
    total_senate: 38,
    female_house: 9,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 1995,
    female_senate: 7,
    total_senate: 48,
    female_house: 9,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 1995,
    female_senate: 4,
    total_senate: 50,
    female_house: 26,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 1995,
    female_senate: 1,
    total_senate: 35,
    female_house: 16,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 1995,
    female_senate: 4,
    total_senate: 40,
    female_house: 12,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 1995,
    female_senate: 3,
    total_senate: 33,
    female_house: 15,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 1995,
    female_senate: 8,
    total_senate: 56,
    female_house: 35,
    total_house: 180
  },
  {
    state: "Utah",
    year: 1995,
    female_senate: 1,
    total_senate: 29,
    female_house: 14,
    total_house: 75
  },
  {
    state: "Texas",
    year: 1995,
    female_senate: 4,
    total_senate: 31,
    female_house: 29,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 1995,
    female_senate: 9,
    total_senate: 49,
    female_house: 13,
    total_house: 98
  },
  {
    state: "West Virginia",
    year: 1995,
    female_senate: 5,
    total_senate: 34,
    female_house: 15,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 1995,
    female_senate: 1,
    total_senate: 40,
    female_house: 15,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 1995,
    female_senate: 14,
    total_senate: 50,
    female_house: 19,
    total_house: 100
  },
  {
    state: "New York",
    year: 1995,
    female_senate: 9,
    total_senate: 61,
    female_house: 29,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 1995,
    female_senate: 5,
    total_senate: 35,
    female_house: 14,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 1995,
    female_senate: 8,
    total_senate: 33,
    female_house: 24,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 1995,
    female_senate: 1,
    total_senate: 30,
    female_house: 18,
    total_house: 64
  },
  {
    state: "North Carolina",
    year: 1995,
    female_senate: 6,
    total_senate: 50,
    female_house: 22,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 1995,
    female_senate: 3,
    total_senate: 34,
    female_house: 36,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 1995,
    female_senate: 3,
    total_senate: 38,
    female_house: 30,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 1995,
    female_senate: 10,
    total_senate: 50,
    female_house: 17,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 1995,
    female_senate: 10,
    total_senate: 50,
    female_house: 26,
    total_house: 100
  },
  {
    state: "Florida",
    year: 1995,
    female_senate: 6,
    total_senate: 40,
    female_house: 25,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 1995,
    female_senate: 12,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 1995,
    female_senate: 8,
    total_senate: 42,
    female_house: 15,
    total_house: 70
  },
  {
    state: "California",
    year: 1995,
    female_senate: 5,
    total_senate: 40,
    female_house: 20,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 1995,
    female_senate: 4,
    total_senate: 20,
    female_house: 10,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 1995,
    female_senate: 8,
    total_senate: 40,
    female_house: 40,
    total_house: 160
  },
  {
    state: "Montana",
    year: 1995,
    female_senate: 9,
    total_senate: 50,
    female_house: 27,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 1995,
    female_senate: 6,
    total_senate: 21,
    female_house: 7,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 1995,
    female_senate: 10,
    total_senate: 59,
    female_house: 31,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 1995,
    female_senate: 8,
    total_senate: 33,
    female_house: 24,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 1995,
    female_senate: 7,
    total_senate: 35,
    female_house: 22,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 1995,
    female_senate: 18,
    total_senate: 67,
    female_house: 32,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 1995,
    female_senate: 5,
    total_senate: 25,
    female_house: 10,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 1995,
    female_senate: 14,
    total_senate: 40,
    female_house: 32,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 1995,
    female_senate: 7,
    total_senate: 30,
    female_house: 19,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 1995,
    female_senate: 7,
    total_senate: 47,
    female_house: 47,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 1995,
    female_senate: 8,
    total_senate: 36,
    female_house: 42,
    total_house: 151
  },
  {
    state: "Maine",
    year: 1995,
    female_senate: 11,
    total_senate: 35,
    female_house: 37,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 1995,
    female_senate: 5,
    total_senate: 21,
    female_house: 17,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 1995,
    female_senate: 8,
    total_senate: 30,
    female_house: 19,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 1995,
    female_senate: 11,
    total_senate: 30,
    female_house: 43,
    total_house: 150
  },
  {
    state: "Washington",
    year: 1995,
    female_senate: 20,
    total_senate: 49,
    female_house: 38,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 1995,
    female_senate: 10,
    total_senate: 35,
    female_house: 21,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 1995,
    female_senate: 6,
    total_senate: 24,
    female_house: 120,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 1990,
    female_senate: 1,
    total_senate: 35,
    female_house: 7,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 1990,
    female_senate: 0,
    total_senate: 39,
    female_house: 3,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 1990,
    female_senate: 2,
    total_senate: 46,
    female_house: 13,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 1990,
    female_senate: 3,
    total_senate: 52,
    female_house: 7,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 1990,
    female_senate: 2,
    total_senate: 38,
    female_house: 6,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 1990,
    female_senate: 6,
    total_senate: 48,
    female_house: 7,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 1990,
    female_senate: 2,
    total_senate: 50,
    female_house: 15,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 1990,
    female_senate: 2,
    total_senate: 35,
    female_house: 8,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 1990,
    female_senate: 3,
    total_senate: 40,
    female_house: 12,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 1990,
    female_senate: 2,
    total_senate: 33,
    female_house: 11,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 1990,
    female_senate: 2,
    total_senate: 56,
    female_house: 22,
    total_house: 180
  },
  {
    state: "Utah",
    year: 1990,
    female_senate: 1,
    total_senate: 29,
    female_house: 11,
    total_house: 75
  },
  {
    state: "Texas",
    year: 1990,
    female_senate: 3,
    total_senate: 31,
    female_house: 16,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 1990,
    female_senate: 5,
    total_senate: 53,
    female_house: 19,
    total_house: 106
  },
  {
    state: "West Virginia",
    year: 1990,
    female_senate: 7,
    total_senate: 34,
    female_house: 19,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 1990,
    female_senate: 3,
    total_senate: 40,
    female_house: 10,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 1990,
    female_senate: 11,
    total_senate: 50,
    female_house: 10,
    total_house: 100
  },
  {
    state: "New York",
    year: 1990,
    female_senate: 6,
    total_senate: 61,
    female_house: 17,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 1990,
    female_senate: 7,
    total_senate: 35,
    female_house: 13,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 1990,
    female_senate: 3,
    total_senate: 33,
    female_house: 14,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 1990,
    female_senate: 4,
    total_senate: 30,
    female_house: 18,
    total_house: 64
  },
  {
    state: "North Carolina",
    year: 1990,
    female_senate: 4,
    total_senate: 50,
    female_house: 20,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 1990,
    female_senate: 2,
    total_senate: 34,
    female_house: 27,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 1990,
    female_senate: 2,
    total_senate: 38,
    female_house: 20,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 1990,
    female_senate: 6,
    total_senate: 50,
    female_house: 19,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 1990,
    female_senate: 9,
    total_senate: 50,
    female_house: 14,
    total_house: 100
  },
  {
    state: "Florida",
    year: 1990,
    female_senate: 10,
    total_senate: 40,
    female_house: 16,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 1990,
    female_senate: 10,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 1990,
    female_senate: 4,
    total_senate: 42,
    female_house: 11,
    total_house: 70
  },
  {
    state: "California",
    year: 1990,
    female_senate: 5,
    total_senate: 40,
    female_house: 14,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 1990,
    female_senate: 4,
    total_senate: 20,
    female_house: 8,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 1990,
    female_senate: 5,
    total_senate: 40,
    female_house: 29,
    total_house: 160
  },
  {
    state: "Montana",
    year: 1990,
    female_senate: 6,
    total_senate: 50,
    female_house: 21,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 1990,
    female_senate: 4,
    total_senate: 21,
    female_house: 6,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 1990,
    female_senate: 12,
    total_senate: 59,
    female_house: 21,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 1990,
    female_senate: 4,
    total_senate: 33,
    female_house: 30,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 1990,
    female_senate: 9,
    total_senate: 42,
    female_house: 22,
    total_house: 84
  },
  {
    state: "Minnesota",
    year: 1990,
    female_senate: 10,
    total_senate: 67,
    female_house: 27,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 1990,
    female_senate: 7,
    total_senate: 25,
    female_house: 11,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 1990,
    female_senate: 9,
    total_senate: 40,
    female_house: 33,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 1990,
    female_senate: 7,
    total_senate: 30,
    female_house: 11,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 1990,
    female_senate: 8,
    total_senate: 47,
    female_house: 35,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 1990,
    female_senate: 7,
    total_senate: 36,
    female_house: 34,
    total_house: 151
  },
  {
    state: "Maine",
    year: 1990,
    female_senate: 10,
    total_senate: 35,
    female_house: 48,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 1990,
    female_senate: 4,
    total_senate: 21,
    female_house: 10,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 1990,
    female_senate: 5,
    total_senate: 30,
    female_house: 22,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 1990,
    female_senate: 6,
    total_senate: 30,
    female_house: 54,
    total_house: 150
  },
  {
    state: "Washington",
    year: 1990,
    female_senate: 10,
    total_senate: 49,
    female_house: 33,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 1990,
    female_senate: 7,
    total_senate: 35,
    female_house: 22,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 1990,
    female_senate: 6,
    total_senate: 24,
    female_house: 130,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 1985,
    female_senate: 2,
    total_senate: 35,
    female_house: 7,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 1985,
    female_senate: 0,
    total_senate: 39,
    female_house: 5,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 1985,
    female_senate: 2,
    total_senate: 46,
    female_house: 8,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 1985,
    female_senate: 0,
    total_senate: 52,
    female_house: 4,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 1985,
    female_senate: 2,
    total_senate: 38,
    female_house: 7,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 1985,
    female_senate: 3,
    total_senate: 48,
    female_house: 10,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 1985,
    female_senate: 2,
    total_senate: 50,
    female_house: 11,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 1985,
    female_senate: 1,
    total_senate: 35,
    female_house: 9,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 1985,
    female_senate: 0,
    total_senate: 40,
    female_house: 10,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 1985,
    female_senate: 1,
    total_senate: 33,
    female_house: 10,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 1985,
    female_senate: 2,
    total_senate: 56,
    female_house: 21,
    total_house: 180
  },
  {
    state: "Utah",
    year: 1985,
    female_senate: 1,
    total_senate: 29,
    female_house: 6,
    total_house: 75
  },
  {
    state: "Texas",
    year: 1985,
    female_senate: 1,
    total_senate: 31,
    female_house: 15,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 1985,
    female_senate: 3,
    total_senate: 53,
    female_house: 15,
    total_house: 106
  },
  {
    state: "West Virginia",
    year: 1985,
    female_senate: 3,
    total_senate: 34,
    female_house: 20,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 1985,
    female_senate: 3,
    total_senate: 40,
    female_house: 9,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 1985,
    female_senate: 6,
    total_senate: 50,
    female_house: 13,
    total_house: 100
  },
  {
    state: "New York",
    year: 1985,
    female_senate: 5,
    total_senate: 61,
    female_house: 18,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 1985,
    female_senate: 4,
    total_senate: 35,
    female_house: 11,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 1985,
    female_senate: 2,
    total_senate: 33,
    female_house: 10,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 1985,
    female_senate: 2,
    total_senate: 30,
    female_house: 22,
    total_house: 64
  },
  {
    state: "North Carolina",
    year: 1985,
    female_senate: 4,
    total_senate: 50,
    female_house: 16,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 1985,
    female_senate: 2,
    total_senate: 34,
    female_house: 24,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 1985,
    female_senate: 2,
    total_senate: 38,
    female_house: 14,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 1985,
    female_senate: 3,
    total_senate: 50,
    female_house: 19,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 1985,
    female_senate: 8,
    total_senate: 50,
    female_house: 15,
    total_house: 100
  },
  {
    state: "Florida",
    year: 1985,
    female_senate: 9,
    total_senate: 40,
    female_house: 22,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 1985,
    female_senate: 8,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 1985,
    female_senate: 2,
    total_senate: 42,
    female_house: 11,
    total_house: 70
  },
  {
    state: "California",
    year: 1985,
    female_senate: 4,
    total_senate: 40,
    female_house: 11,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 1985,
    female_senate: 4,
    total_senate: 20,
    female_house: 7,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 1985,
    female_senate: 5,
    total_senate: 40,
    female_house: 28,
    total_house: 160
  },
  {
    state: "Montana",
    year: 1985,
    female_senate: 5,
    total_senate: 50,
    female_house: 17,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 1985,
    female_senate: 3,
    total_senate: 21,
    female_house: 7,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 1985,
    female_senate: 10,
    total_senate: 59,
    female_house: 20,
    total_house: 118
  },
  {
    state: "Wisconsin",
    year: 1985,
    female_senate: 3,
    total_senate: 33,
    female_house: 22,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 1985,
    female_senate: 7,
    total_senate: 42,
    female_house: 17,
    total_house: 84
  },
  {
    state: "Minnesota",
    year: 1985,
    female_senate: 9,
    total_senate: 67,
    female_house: 20,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 1985,
    female_senate: 6,
    total_senate: 25,
    female_house: 8,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 1985,
    female_senate: 5,
    total_senate: 40,
    female_house: 25,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 1985,
    female_senate: 6,
    total_senate: 30,
    female_house: 12,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 1985,
    female_senate: 3,
    total_senate: 47,
    female_house: 33,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 1985,
    female_senate: 5,
    total_senate: 36,
    female_house: 36,
    total_house: 151
  },
  {
    state: "Maine",
    year: 1985,
    female_senate: 9,
    total_senate: 35,
    female_house: 35,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 1985,
    female_senate: 3,
    total_senate: 21,
    female_house: 7,
    total_house: 42
  },
  {
    state: "Arizona",
    year: 1985,
    female_senate: 4,
    total_senate: 30,
    female_house: 14,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 1985,
    female_senate: 4,
    total_senate: 30,
    female_house: 43,
    total_house: 150
  },
  {
    state: "Washington",
    year: 1985,
    female_senate: 7,
    total_senate: 49,
    female_house: 28,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 1985,
    female_senate: 5,
    total_senate: 35,
    female_house: 19,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 1985,
    female_senate: 7,
    total_senate: 24,
    female_house: 133,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 1980,
    female_senate: 0,
    total_senate: 35,
    female_house: 6,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 1980,
    female_senate: 0,
    total_senate: 39,
    female_house: 2,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 1980,
    female_senate: 2,
    total_senate: 46,
    female_house: 9,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 1980,
    female_senate: 0,
    total_senate: 52,
    female_house: 2,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 1980,
    female_senate: 2,
    total_senate: 38,
    female_house: 8,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 1980,
    female_senate: 1,
    total_senate: 48,
    female_house: 11,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 1980,
    female_senate: 1,
    total_senate: 50,
    female_house: 11,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 1980,
    female_senate: 1,
    total_senate: 35,
    female_house: 4,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 1980,
    female_senate: 1,
    total_senate: 40,
    female_house: 8,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 1980,
    female_senate: 1,
    total_senate: 33,
    female_house: 5,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 1980,
    female_senate: 2,
    total_senate: 56,
    female_house: 15,
    total_house: 180
  },
  {
    state: "Utah",
    year: 1980,
    female_senate: 2,
    total_senate: 29,
    female_house: 6,
    total_house: 75
  },
  {
    state: "Texas",
    year: 1980,
    female_senate: 1,
    total_senate: 31,
    female_house: 11,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 1980,
    female_senate: 3,
    total_senate: 50,
    female_house: 15,
    total_house: 100
  },
  {
    state: "West Virginia",
    year: 1980,
    female_senate: 2,
    total_senate: 34,
    female_house: 14,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 1980,
    female_senate: 1,
    total_senate: 40,
    female_house: 7,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 1980,
    female_senate: 4,
    total_senate: 50,
    female_house: 8,
    total_house: 100
  },
  {
    state: "New York",
    year: 1980,
    female_senate: 4,
    total_senate: 60,
    female_house: 14,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 1980,
    female_senate: 3,
    total_senate: 35,
    female_house: 8,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 1980,
    female_senate: 1,
    total_senate: 33,
    female_house: 9,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 1980,
    female_senate: 3,
    total_senate: 30,
    female_house: 14,
    total_house: 62
  },
  {
    state: "North Carolina",
    year: 1980,
    female_senate: 3,
    total_senate: 50,
    female_house: 19,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 1980,
    female_senate: 2,
    total_senate: 34,
    female_house: 20,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 1980,
    female_senate: 0,
    total_senate: 38,
    female_house: 16,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 1980,
    female_senate: 2,
    total_senate: 50,
    female_house: 16,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 1980,
    female_senate: 5,
    total_senate: 50,
    female_house: 10,
    total_house: 100
  },
  {
    state: "Florida",
    year: 1980,
    female_senate: 4,
    total_senate: 40,
    female_house: 13,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 1980,
    female_senate: 5,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 1980,
    female_senate: 2,
    total_senate: 42,
    female_house: 5,
    total_house: 70
  },
  {
    state: "California",
    year: 1980,
    female_senate: 2,
    total_senate: 40,
    female_house: 10,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 1980,
    female_senate: 2,
    total_senate: 20,
    female_house: 4,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 1980,
    female_senate: 5,
    total_senate: 40,
    female_house: 14,
    total_house: 160
  },
  {
    state: "Montana",
    year: 1980,
    female_senate: 4,
    total_senate: 50,
    female_house: 13,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 1980,
    female_senate: 2,
    total_senate: 21,
    female_house: 7,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 1980,
    female_senate: 4,
    total_senate: 59,
    female_house: 28,
    total_house: 177
  },
  {
    state: "Wisconsin",
    year: 1980,
    female_senate: 2,
    total_senate: 33,
    female_house: 18,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 1980,
    female_senate: 2,
    total_senate: 35,
    female_house: 8,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 1980,
    female_senate: 5,
    total_senate: 67,
    female_house: 19,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 1980,
    female_senate: 4,
    total_senate: 25,
    female_house: 10,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 1980,
    female_senate: 4,
    total_senate: 40,
    female_house: 18,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 1980,
    female_senate: 1,
    total_senate: 30,
    female_house: 19,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 1980,
    female_senate: 3,
    total_senate: 47,
    female_house: 25,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 1980,
    female_senate: 8,
    total_senate: 36,
    female_house: 36,
    total_house: 151
  },
  {
    state: "Maine",
    year: 1980,
    female_senate: 6,
    total_senate: 33,
    female_house: 36,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 1980,
    female_senate: 2,
    total_senate: 20,
    female_house: 5,
    total_house: 40
  },
  {
    state: "Arizona",
    year: 1980,
    female_senate: 5,
    total_senate: 30,
    female_house: 12,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 1980,
    female_senate: 4,
    total_senate: 30,
    female_house: 35,
    total_house: 150
  },
  {
    state: "Washington",
    year: 1980,
    female_senate: 8,
    total_senate: 49,
    female_house: 27,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 1980,
    female_senate: 4,
    total_senate: 35,
    female_house: 19,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 1980,
    female_senate: 3,
    total_senate: 24,
    female_house: 121,
    total_house: 400
  },
  {
    state: "Alabama",
    year: 1975,
    female_senate: 0,
    total_senate: 35,
    female_house: 1,
    total_house: 105
  },
  {
    state: "Louisiana",
    year: 1975,
    female_senate: 0,
    total_senate: 39,
    female_house: 2,
    total_house: 105
  },
  {
    state: "South Carolina",
    year: 1975,
    female_senate: 0,
    total_senate: 46,
    female_house: 7,
    total_house: 124
  },
  {
    state: "Mississippi",
    year: 1975,
    female_senate: 1,
    total_senate: 52,
    female_house: 5,
    total_house: 122
  },
  {
    state: "Kentucky",
    year: 1975,
    female_senate: 2,
    total_senate: 38,
    female_house: 3,
    total_house: 100
  },
  {
    state: "Oklahoma",
    year: 1975,
    female_senate: 1,
    total_senate: 48,
    female_house: 5,
    total_house: 101
  },
  {
    state: "Pennsylvania",
    year: 1975,
    female_senate: 1,
    total_senate: 50,
    female_house: 8,
    total_house: 203
  },
  {
    state: "Arkansas",
    year: 1975,
    female_senate: 0,
    total_senate: 35,
    female_house: 3,
    total_house: 100
  },
  {
    state: "Virginia",
    year: 1975,
    female_senate: 0,
    total_senate: 40,
    female_house: 6,
    total_house: 100
  },
  {
    state: "Tennessee",
    year: 1975,
    female_senate: 1,
    total_senate: 33,
    female_house: 4,
    total_house: 99
  },
  {
    state: "Georgia",
    year: 1975,
    female_senate: 1,
    total_senate: 56,
    female_house: 9,
    total_house: 180
  },
  {
    state: "Utah",
    year: 1975,
    female_senate: 0,
    total_senate: 29,
    female_house: 8,
    total_house: 75
  },
  {
    state: "Texas",
    year: 1975,
    female_senate: 1,
    total_senate: 31,
    female_house: 7,
    total_house: 150
  },
  {
    state: "North Dakota",
    year: 1975,
    female_senate: 3,
    total_senate: 50,
    female_house: 13,
    total_house: 100
  },
  {
    state: "West Virginia",
    year: 1975,
    female_senate: 1,
    total_senate: 34,
    female_house: 8,
    total_house: 100
  },
  {
    state: "New Jersey",
    year: 1975,
    female_senate: 3,
    total_senate: 40,
    female_house: 6,
    total_house: 80
  },
  {
    state: "Indiana",
    year: 1975,
    female_senate: 3,
    total_senate: 50,
    female_house: 6,
    total_house: 100
  },
  {
    state: "New York",
    year: 1975,
    female_senate: 3,
    total_senate: 60,
    female_house: 6,
    total_house: 150
  },
  {
    state: "South Dakota",
    year: 1975,
    female_senate: 4,
    total_senate: 35,
    female_house: 7,
    total_house: 70
  },
  {
    state: "Ohio",
    year: 1975,
    female_senate: 1,
    total_senate: 33,
    female_house: 7,
    total_house: 99
  },
  {
    state: "Wyoming",
    year: 1975,
    female_senate: 1,
    total_senate: 30,
    female_house: 6,
    total_house: 62
  },
  {
    state: "North Carolina",
    year: 1975,
    female_senate: 2,
    total_senate: 50,
    female_house: 13,
    total_house: 120
  },
  {
    state: "Missouri",
    year: 1975,
    female_senate: 1,
    total_senate: 34,
    female_house: 11,
    total_house: 163
  },
  {
    state: "Michigan",
    year: 1975,
    female_senate: 0,
    total_senate: 38,
    female_house: 9,
    total_house: 110
  },
  {
    state: "Iowa",
    year: 1975,
    female_senate: 4,
    total_senate: 50,
    female_house: 10,
    total_house: 100
  },
  {
    state: "Rhode Island",
    year: 1975,
    female_senate: 2,
    total_senate: 50,
    female_house: 7,
    total_house: 100
  },
  {
    state: "Florida",
    year: 1975,
    female_senate: 1,
    total_senate: 40,
    female_house: 12,
    total_house: 120
  },
  {
    state: "Nebraska",
    year: 1975,
    female_senate: 1,
    total_senate: 49,
    female_house: 0,
    total_house: 0
  },
  {
    state: "New Mexico",
    year: 1975,
    female_senate: 2,
    total_senate: 42,
    female_house: 3,
    total_house: 70
  },
  {
    state: "California",
    year: 1975,
    female_senate: 0,
    total_senate: 40,
    female_house: 3,
    total_house: 80
  },
  {
    state: "Alaska",
    year: 1975,
    female_senate: 2,
    total_senate: 20,
    female_house: 7,
    total_house: 40
  },
  {
    state: "Massachusetts",
    year: 1975,
    female_senate: 2,
    total_senate: 40,
    female_house: 14,
    total_house: 160
  },
  {
    state: "Montana",
    year: 1975,
    female_senate: 4,
    total_senate: 50,
    female_house: 10,
    total_house: 100
  },
  {
    state: "Delaware",
    year: 1975,
    female_senate: 2,
    total_senate: 21,
    female_house: 8,
    total_house: 41
  },
  {
    state: "Illinois",
    year: 1975,
    female_senate: 2,
    total_senate: 59,
    female_house: 12,
    total_house: 177
  },
  {
    state: "Wisconsin",
    year: 1975,
    female_senate: 1,
    total_senate: 33,
    female_house: 9,
    total_house: 99
  },
  {
    state: "Idaho",
    year: 1975,
    female_senate: 1,
    total_senate: 35,
    female_house: 9,
    total_house: 70
  },
  {
    state: "Minnesota",
    year: 1975,
    female_senate: 1,
    total_senate: 67,
    female_house: 7,
    total_house: 134
  },
  {
    state: "Hawaii",
    year: 1975,
    female_senate: 4,
    total_senate: 25,
    female_house: 6,
    total_house: 51
  },
  {
    state: "Kansas",
    year: 1975,
    female_senate: 1,
    total_senate: 40,
    female_house: 8,
    total_house: 125
  },
  {
    state: "Oregon",
    year: 1975,
    female_senate: 2,
    total_senate: 30,
    female_house: 8,
    total_house: 60
  },
  {
    state: "Maryland",
    year: 1975,
    female_senate: 3,
    total_senate: 47,
    female_house: 16,
    total_house: 141
  },
  {
    state: "Connecticut",
    year: 1975,
    female_senate: 4,
    total_senate: 36,
    female_house: 22,
    total_house: 151
  },
  {
    state: "Maine",
    year: 1975,
    female_senate: 1,
    total_senate: 33,
    female_house: 23,
    total_house: 151
  },
  {
    state: "Nevada",
    year: 1975,
    female_senate: 3,
    total_senate: 20,
    female_house: 4,
    total_house: 40
  },
  {
    state: "Arizona",
    year: 1975,
    female_senate: 5,
    total_senate: 30,
    female_house: 13,
    total_house: 60
  },
  {
    state: "Vermont",
    year: 1975,
    female_senate: 1,
    total_senate: 30,
    female_house: 21,
    total_house: 150
  },
  {
    state: "Washington",
    year: 1975,
    female_senate: 4,
    total_senate: 49,
    female_house: 14,
    total_house: 98
  },
  {
    state: "Colorado",
    year: 1975,
    female_senate: 3,
    total_senate: 35,
    female_house: 13,
    total_house: 65
  },
  {
    state: "New Hampshire",
    year: 1975,
    female_senate: 2,
    total_senate: 24,
    female_house: 102,
    total_house: 400
  }
];

let mobileMode;
window.innerWidth < 600 ? (mobileMode = true) : (mobileMode = false);

const tooltip = d3.select("body").append("div").attr("class", "toolTip");

function renderChart(mobileMode) {
  let w, h;
  if (mobileMode) {
    w = 400;
    h = 1200;
  } else {
    w = 1200;
    h = 600;
  }
  let margin;
  if (mobileMode) {
    margin = { top: 50, right: 0, bottom: 0, left: 110 };
  } else {
    margin = { top: 60, right: 50, bottom: 0, left: 45 };
  }

  let width = w - margin.left - margin.right,
    height = h - margin.top - margin.bottom;
  
  function pctWomen(d) {
    return (
      (d.female_house + d.female_senate) / (d.total_house + d.total_senate)
    );
  }
  
  const states = [];
  data
    .sort((a, b) => pctWomen(a) - pctWomen(b))
    .map((d) => {
      if (!states.includes(d.state)) {
        states.push(d.state);
      }
    });

  let x, y;
  if (mobileMode) {
    x = d3.scaleLinear().range([0, width]).domain([1975, 2020]);
    y = d3.scalePoint().domain(states).range([height, 0]);
  } else {
    x = d3.scalePoint().domain(states).range([0, width]);
    y = d3.scaleLinear().range([height, 0]).domain([1965, 2020]);
  }

  const color = d3
    .scaleQuantile()
    .domain(d3.extent(data, (d) => pctWomen(d)))
    .range(["#feebe2", "#fbb4b9", "#f768a1", "#c51b8a", "#7a0177"]);

  const svg = d3
    .select("#chart")
    .html(null)
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", `0 0 ${w} ${h}`)
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("overflow", "hidden");

  const g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const yearLabels = g
    .selectAll(".yearLabel")
    .data([1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015])
    .enter()
    .append("g")
    .attr("class", "yearLabel")
    .attr("transform", (d) => {
      return mobileMode
        ? "translate(" + (x(d) + width / 9 / 2) + "," + -5 + ")"
        : "translate(" + -5 + "," + (y(d) + height / 10 / 1.5) + ")";
    })
    .append("text")
    .style("text-anchor", mobileMode ? "start" : "end")
    .attr("transform", mobileMode ? "rotate(-65)" : "rotate(0)")
    .text((d) => d);

  const stateLabels = g
    .selectAll(".stateLabel")
    .data(states)
    .enter()
    .append("g")
    .attr("class", "stateLabel")
    .attr("transform", (d) => {
      return mobileMode
        ? "translate(" + -5 + "," + (y(d) + height / 50 / 1.5) + ")"
        : "translate(" +
            (x(d) + width / 50 / 2) +
            "," +
            (margin.top - 25) +
            ")";
    })
    .append("text")
    .attr("text-anchor", mobileMode ? "end" : "start")
    .attr("transform", mobileMode ? "rotate(0)" : "rotate(-65)")
    .attr("font-size", 12)
    .text((d) => d);

  const legislatures = g
    .selectAll(".legislatures")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => (mobileMode ? x(d.year) : x(d.state)))
    .attr("y", (d) => (mobileMode ? y(d.state) : y(d.year)))
    .attr("width", mobileMode ? 30 : width / 50 - 5)
    .attr("height", mobileMode ? height / 50 - 2 : 45)
    .style("fill", (d) => color(pctWomen(d)))
    .on("mousemove", (event, d) => {
      const w = window.innerWidth;
      tooltip
        .style("display", "inline-block")
        .html(
          `<strong>${d.state} - ${d.year}</strong><br/>Senate: ${
            d.female_senate
          }/${d.total_senate} (${(
            (d.female_senate / d.total_senate) *
            100
          ).toFixed(2)}%)<br/>House: ${d.female_house}/${d.total_house} (${(
            (d.female_house / d.total_house) *
            100
          ).toFixed(2)}%)<br/>Total Percentage: ${(
            ((d.female_senate + d.female_house) /
              (d.total_senate + d.total_house)) *
            100
          ).toFixed(2)}%`
        );
      tooltip
        .style("left", "auto")
        .style("top", "auto")
        .style("bottom", "auto");
      if (w > 400) {
        tooltip.style("top", event.pageY + 10 + "px");
        event.pageX < w / 2
          ? tooltip.style("left", event.pageX + 10 + "px")
          : tooltip.style("left", event.pageX - 212 + "px");
      } else {
        tooltip.style("bottom", 0).style("left", 0);
      }
    })
    .on("mouseout", () => {
      tooltip.style("display", "none");
    });
}

window.addEventListener("resize", () => {
  const w = window.innerWidth;
  if (w < 600 && !mobileMode) {
    mobileMode = true;
    renderChart(mobileMode);
  }
  if (w >= 600 && mobileMode) {
    mobileMode = false;
    renderChart(mobileMode);
  }
});

renderChart(mobileMode);
