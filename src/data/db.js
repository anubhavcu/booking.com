const rooms = [
  {
    id: 1,
    city: 'Delhi',
    state: 'Delhi',
    name: 'hotel 1',
    verified: true,
    coupleFriendly: true,
    numReviews: 10,
    rating: 4,
    facilities: [
      'living room',
      'tours and treks',
      'free Parking',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
  {
    id: 2,
    city: 'Delhi',
    state: 'Delhi',
    name: 'hotel 2',
    verified: true,
    coupleFriendly: true,
    numReviews: 10,
    rating: 4.2,
    facilities: [
      'living room',
      'tours and treks',
      'free Parking',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
  {
    id: 3,
    city: 'Mumbai',
    state: 'Maharashtra',
    name: 'hotel 3',
    verified: true,
    coupleFriendly: true,
    numReviews: 23,
    rating: 4.5,
    facilities: [
      'living room',
      'tours and treks',
      'free Parking',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
  {
    id: 4,
    city: 'Mumbai',
    state: 'Maharashtra',
    name: 'hotel 4',
    verified: false,
    coupleFriendly: true,
    numReviews: 5,
    rating: 3,
    facilities: [
      'living room',
      'tours and treks',
      'free Parking',
      'Free Wifi',
      'breakfast',
    ],
  },
  {
    id: 5,
    city: 'Manali',
    state: 'Himanchal Pradesh',
    name: 'hotel 5',
    verified: true,
    coupleFriendly: true,
    numReviews: 16,
    rating: 4.5,
    facilities: [
      'living room',
      'tours and treks',
      'free Parking',
      'Free Wifi',
      'breakfast',
    ],
  },
  {
    id: 6,
    city: 'Manali',
    state: 'Himanchal Pradesh',
    name: 'hotel 6',
    verified: true,
    coupleFriendly: true,
    numReviews: 25,
    rating: 4.8,
    facilities: [
      'living room',
      'tours and treks',
      'free Parking',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
  {
    id: 7,
    city: 'Panaji',
    state: 'Goa',
    name: 'hotel 7',
    verified: true,
    coupleFriendly: true,
    numReviews: 43,
    rating: 3.9,
    facilities: [
      'living room',
      'free Parking',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
  {
    id: 8,
    city: 'Pune',
    state: 'Maharashtra',
    name: 'hotel 8',
    verified: true,
    coupleFriendly: true,
    numReviews: 6,
    rating: 3.5,
    facilities: [
      'living room',
      'free Parking',
      'Free Wifi',
      'breakfast',
      'lunch',
      'dinner',
      'Doctor On Call',
    ],
  },
  {
    id: 9,
    city: 'Pune',
    state: 'Maharashtra',
    name: 'hotel 9',
    verified: false,
    coupleFriendly: false,
    numReviews: 5,
    rating: 3,
    facilities: ['living room', 'Free Wifi', 'breakfast'],
  },
  {
    id: 10,
    city: 'Kolkata',
    state: 'West Bengal',
    name: 'hotel 10',
    verified: true,
    coupleFriendly: true,
    numReviews: 28,
    rating: 4.1,
    facilities: ['living room', 'Free Wifi', 'breakfast', 'lunch', 'dinner'],
  },
  {
    id: 11,
    city: 'Kolkata',
    state: 'West Bengal',
    name: 'hotel 11',
    verified: false,
    coupleFriendly: true,
    numReviews: 4,
    rating: 3,
    facilities: ['living room', 'Free Wifi'],
  },
  {
    id: 12,
    city: 'Agra',
    state: 'Uttar Pradesh',
    name: 'hotel 12',
    verified: true,
    coupleFriendly: false,
    numReviews: 14,
    rating: 3,
    facilities: ['living room', 'tours and treks', 'Free Wifi', 'breakfast'],
  },
  {
    id: 13,
    city: 'Agra',
    state: 'Uttar Pradesh',
    name: 'hotel 13',
    verified: true,
    coupleFriendly: true,
    numReviews: 25,
    rating: 4.2,
    facilities: [
      'living room',
      'tours and treks',
      'Free Wifi',
      'breakfast',
      'lunch',
      'Doctor On Call',
    ],
  },
  {
    id: 14,
    city: 'Agra',
    state: 'Uttar Pradesh',
    name: 'hotel 14',
    verified: true,
    coupleFriendly: true,
    numReviews: 21,
    rating: 3.9,
    facilities: ['living room', 'tours and treks', 'Free Wifi', 'breakfast'],
  },
  {
    id: 15,
    city: 'Vishakhapatnam',
    state: 'Andhra Pradesh',
    name: 'hotel 15',
    verified: true,
    coupleFriendly: true,
    numReviews: 14,
    rating: 4.2,
    facilities: ['living room', 'tours and treks', 'Free Wifi', 'breakfast'],
  },
  {
    id: 16,
    city: 'Nagpur',
    state: 'Maharashtra',
    name: 'hotel 16',
    verified: true,
    coupleFriendly: false,
    numReviews: 4,
    rating: 3,
    facilities: ['living room', 'Free Wifi', 'breakfast'],
  },
  {
    id: 17,
    city: 'Delhi',
    state: 'Delhi',
    name: 'hotel 17',
    verified: true,
    coupleFriendly: true,
    numReviews: 35,
    rating: 4.2,
    facilities: [
      'living room',
      'Free Wifi',
      'breakfast',
      'lunch',
      'dinner',
      'Doctor On Call',
    ],
  },
  {
    id: 18,
    city: 'Mumbai',
    state: 'Maharashtra',
    name: 'hotel 18',
    verified: true,
    coupleFriendly: false,
    numReviews: 12,
    rating: 3.1,
    facilities: ['living room', 'Free Wifi', 'breakfast'],
  },
  {
    id: 19,
    city: 'Manali',
    state: 'Himanchal Pradesh',
    name: 'hotel 19',
    verified: true,
    coupleFriendly: true,
    numReviews: 54,
    rating: 4.2,
    facilities: [
      'living room',
      'tours and treks',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
  {
    id: 20,
    city: 'Chennai',
    state: 'Tamil Nadu',
    name: 'hotel 20',
    verified: true,
    coupleFriendly: false,
    numReviews: 8,
    rating: 3.2,
    facilities: ['living room', 'Free Wifi', 'breakfast'],
  },
  {
    id: 21,
    city: 'Hyderabad',
    state: 'Telangana',
    name: 'hotel 21',
    verified: true,
    coupleFriendly: true,
    numReviews: 32,
    rating: 3.9,
    facilities: ['living room', 'Free Wifi', 'breakfast', 'Doctor On Call'],
  },
  {
    id: 22,
    city: 'Pune',
    state: 'Maharashtra',
    name: 'hotel 22',
    verified: true,
    coupleFriendly: false,
    numReviews: 13,
    rating: 3.2,
    facilities: ['living room', 'Free Wifi', 'breakfast'],
  },
  {
    id: 23,
    city: 'Delhi',
    state: 'Delhi',
    name: 'hotel 23',
    verified: false,
    coupleFriendly: false,
    numReviews: 3,
    rating: 3,
    facilities: ['living room', 'Free Wifi', 'breakfast'],
  },
  {
    id: 24,
    city: 'Pune',
    state: 'Maharashtra',
    name: 'hotel 24',
    verified: true,
    coupleFriendly: false,
    numReviews: 8,
    rating: 3.4,
    facilities: ['living room', 'Free Wifi', 'breakfast', 'Doctor On Call'],
  },
  {
    id: 25,
    city: 'Ahmedabad',
    state: 'Gujrat',
    name: 'hotel 25',
    verified: true,
    coupleFriendly: true,
    numReviews: 104,
    rating: 3.9,
    facilities: ['living room', 'Free Wifi', 'breakfast', 'Doctor On Call'],
  },
  {
    id: 26,
    city: 'Ahmedabad',
    state: 'Gujrat',
    name: 'hotel 26',
    verified: false,
    coupleFriendly: true,
    numReviews: 6,
    rating: 3.2,
    facilities: ['living room', 'free Parking', 'Free Wifi', 'breakfast'],
  },
  {
    id: 27,
    city: 'Manali',
    state: 'Himanchal Pradesh',
    name: 'hotel 27',
    verified: true,
    coupleFriendly: true,
    numReviews: 110,
    rating: 4.1,
    facilities: [
      'living room',
      'tours and treks',
      'Free Wifi',
      'breakfast',
      'Doctor On Call',
    ],
  },
];

export default rooms;
