const hotels = [
  {
    "Hotel_name": "Hotel Serenity",
    "top_hotel":"False",
    "Location": "New York, NY",
    "Description": "Hotel Serenity offers a tranquil escape in the heart of New York City, featuring modern amenities and stunning city views.",
    "Photos": ["/hotels/hotel1.1.jpg", "/hotels/hotel1.2.jpg", "/hotels/hotel1.3.jpeg", "/hotels/hotel1.4.jpg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 120,
        "Availability":4,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 180,
        "Availability":2,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      }
    ]
  },
  {
    "Hotel_name": "Oceanview Retreat",
    "top_hotel":"True",
    "Location": "Miami, FL",
    "Description": "Oceanview Retreat offers breathtaking views of Miami's coastline, along with luxurious rooms and exceptional hospitality.",
    "Photos": ["/hotels/hotel2.1.jpeg", "/hotels/hotel2.2.jpeg", "/hotels/hotel2.3.jpeg", "/hotels/hotel2.4.jpeg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 150,
        "Availability":6,
        "Amenities": ["Free Wi-Fi", "Ocean View", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 220,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Ocean View", "Daily housekeeping"]
      },
      {
        "Type": "Suite",
        "Price": 350,
        "Availability":1,
        "Amenities": ["Free Wi-Fi", "Ocean View", "Private Balcony"]
      }
    ]
  },
  {
    "Hotel_name": "Mountain Lodge",
    "top_hotel":"False",
    "Location": "Denver, CO",
    "Description": "Mountain Lodge offers a cozy retreat in the heart of Denver, surrounded by picturesque mountain views and modern comforts.",
    "Photos": ["/hotels/hotel3.1.jpeg", "/hotels/hotel3.2.jpg", "/hotels/hotel3.3.webp", "/hotels/hotel3.4.jpg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 100,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Mountain View", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 170,
        "Availability":5,
        "Amenities": ["Free Wi-Fi", "Mountain View", "Daily housekeeping"]
      }
    ]
  },
  {
    "Hotel_name": "Cityscape Hotel",
    "top_hotel":"True",
    "Location": "Chicago, IL",
    "Description": "Cityscape Hotel offers modern accommodations in downtown Chicago, featuring stunning cityscape views and convenient access to local attractions.",
    "Photos": ["/hotels/hotel4.1.jpeg", "/hotels/hotel4.2.jpeg", "/hotels/hotel4.3.jpeg", "/hotels/hotel4.4.jpeg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 130,
        "Availability":6,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 200,
        "Availability":2,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      }
    ]
  },
  {
    "Hotel_name": "Lakeside Inn",
    "top_hotel":"True",
    "Location": "Orlando, FL",
    "Description": "Lakeside Inn offers serene lakeside views in Orlando, with comfortable accommodations and easy access to local attractions.",
    "Photos": ["/hotels/hotel5.1.jpg", "/hotels/hotel5.2.webp", "/hotels/hotel5.3.jpg", "/hotels/hotel5.4.webp"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 110,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Lake View", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 170,
        "Availability":5,
        "Amenities": ["Free Wi-Fi", "Lake View", "Daily housekeeping"]
      }
    ]
  },
  {
    "Hotel_name": "Urban Stay",
    "top_hotel":"True",
    "Location": "San Francisco, CA",
    "Description": "Urban Stay offers stylish urban accommodations in San Francisco, featuring modern amenities and panoramic city views.",
    "Photos": ["/hotels/hotel6.1.jpg", "/hotels/hotel6.2.jpeg", "/hotels/hotel6.3.jpg", "/hotels/hotel6.4.jpg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 140,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 210,
        "Availability":2,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Suite",
        "Price": 330,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Private Balcony"]
      }
    ]
  },
  {
    "Hotel_name": "Coastal Breeze Hotel",
    "top_hotel":"True",
    "Location": "San Diego, CA",
    "Description": "Coastal Breeze Hotel offers stunning ocean views in San Diego, with luxurious rooms and serene ambiance for a relaxing stay.",
    "Photos": ["/hotels/hotel7.1.jpeg", "/hotels/hotel7.2.jpeg", "/hotels/hotel7.3.jpg", "/hotels/hotel7.4.jpg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 160,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Ocean View", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 240,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Ocean View", "Daily housekeeping"]
      },
      {
        "Type": "Suite",
        "Price": 380,
        "Availability":2,
        "Amenities": ["Free Wi-Fi", "Ocean View", "Private Balcony"]
      }
    ]
  },
  {
    "Hotel_name": "Desert Oasis",
    "top_hotel":"True",
    "Location": "Phoenix, AZ",
    "Description": "Desert Oasis offers a tranquil desert retreat in Phoenix, with comfortable accommodations and breathtaking desert landscape views.",
    "Photos": ["/hotels/hotel8.1.jpeg", "/hotels/hotel8.2.jpg", "/hotels/hotel8.3.jpg", "/hotels/hotel8.4.jpg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 125,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 190,
        "Availability":2,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      }
    ]
  },
  {
    "Hotel_name": "Garden Grove Inn",
    "top_hotel":"True",
    "Location": "Seattle, WA",
    "Description": "Garden Grove Inn offers a peaceful garden retreat in Seattle, with charming garden views and comfortable accommodations.",
    "Photos": ["/hotels/hotel9.1.jpg", "/hotels/hotel9.2.jpg", "/hotels/hotel9.3.jpeg", "/hotels/hotel9.4.jpeg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 135,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Garden View", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 205,
        "Availability":5,
        "Amenities": ["Free Wi-Fi", "Garden View", "Daily housekeeping"]
      }
    ]
  },
  {
    "Hotel_name": "Metropolitan Suites",
    "top_hotel":"True",
    "Location": "Los Angeles, CA",
    "Description": "Metropolitan Suites offers sophisticated urban accommodations in Los Angeles, with luxurious amenities and stunning city views.",
    "Photos": ["/hotels/hotel10.1.jpg", "/hotels/hotel10.2.jpg", "/hotels/hotel10.3.jpeg", "/hotels/hotel10.4.jpg"],
    "Room_types": [
      {
        "Type": "Single Room",
        "Price": 170,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Double Room",
        "Price": 260,
        "Availability":7,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Daily housekeeping"]
      },
      {
        "Type": "Suite",
        "Price": 400,
        "Availability":3,
        "Amenities": ["Free Wi-Fi", "Air conditioning", "Private Balcony"]
      }
    ]
  }
];

export default hotels;
