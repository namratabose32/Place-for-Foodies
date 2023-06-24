// Image CDN URL for Restaurant card
export const IMG_URL=  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const swiggy_menu_api_URL="https://corsproxy.io?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
//export const swiggy_menu_api_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3437657&lng=85.3149142&submitAction=ENTER&restaurantId="
// export const swiggy_menu_api_URL=[
  // 20230623142252
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3437657&lng=85.3149142&restaurantId=638757&submitAction=ENTER

// {
//   "statusCode": 0,
//   "data": {
//     "statusMessage": "done successfully",
//     "cards": [
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//             "info": {
//               "id": "638757",
//               "name": "The Grove\t",
//               "city": "Ranchi",
//               "slugs": {
//                 "restaurant": "the-grove-lalpur-lalpur-2",
//                 "city": "ranchi"
//               },
//               "uniqueId": "5a05fdc7-bcd6-421a-b144-4f91a70702a5",
//               "cloudinaryImageId": "pqrwltlqz1mmuy7iwfzj",
//               "locality": "Ganpat Nagar\n",
//               "areaName": "Bahu Bazar",
//               "costForTwo": "50000",
//               "costForTwoMessage": "₹500 for two",
//               "cuisines": [
//                 "North Indian",
//                 "Chinese"
//               ],
//               "avgRating": 4,
//               "feeDetails": {
//                 "restaurantId": "638757",
//                 "fees": [
//                   {
//                     "name": "distance",
//                     "fee": 2400
//                   },
//                   {
//                     "name": "time"
//                   },
//                   {
//                     "name": "special"
//                   }
//                 ],
//                 "totalFee": 2400,
//                 "title": "Delivery Charge",
//                 "amount": "2400"
//               },
//               "parentId": "385521",
//               "avgRatingString": "4.0",
//               "totalRatingsString": "100+ ratings",
//               "sla": {
//                 "restaurantId": "638757",
//                 "deliveryTime": 41,
//                 "minDeliveryTime": 41,
//                 "maxDeliveryTime": 41,
//                 "lastMileTravel": 4.5,
//                 "serviceability": "SERVICEABLE",
//                 "stressFactor": 0.6539419,
//                 "rainMode": "RAIN_MODE_NONE",
//                 "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
//                 "zoneId": 735,
//                 "slaString": "41 MINS",
//                 "lastMileTravelString": "4.5 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//               },
//               "availability": {
//                 "nextCloseTime": "2023-06-23 23:30:00",
//                 "visibility": true,
//                 "opened": true,
//                 "restaurantClosedMeta": {
                  
//                 }
//               },
//               "aggregatedDiscountInfo": {
//                 "header": "Flat ₹125 off",
//                 "shortDescriptionList": [
//                   {
//                     "meta": "Flat ₹125 off on orders above ₹199",
//                     "discountType": "Flat",
//                     "operationType": "RESTAURANT"
//                   },
//                   {
//                     "meta": "50% off | Use code SAVERDEAL",
//                     "discountType": "Percentage",
//                     "operationType": "RESTAURANT"
//                   }
//                 ],
//                 "descriptionList": [
//                   {
//                     "meta": "Flat ₹125 off on orders above ₹199 | Use code SWIGGYWEEKENDS",
//                     "discountType": "Flat",
//                     "operationType": "RESTAURANT"
//                   },
//                   {
//                     "meta": "50% off up to ₹100 | Use code SAVERDEAL",
//                     "discountType": "Percentage",
//                     "operationType": "RESTAURANT"
//                   }
//                 ],
//                 "visible": true
//               },
//               "badges": {
                
//               },
//               "slugString": "the-grove-lalpur-lalpur-2",
//               "isOpen": true,
//               "labels": [
//                 {
//                   "title": "Timings",
//                   "message": "null"
//                 },
//                 {
//                   "title": "Address",
//                   "message": "GANPAT NAGAR,OPPOSITE ICE FACTORY,NEAR BAHU BAZAR,, Ranchi Urban 2, Ranchi Urban 2, Ranchi, Jharkhand - 834001"
//                 },
//                 {
//                   "title": "Cuisines",
//                   "message": "North Indian,Chinese"
//                 }
//               ],
//               "totalRatings": 100,
//               "aggregatedDiscountInfoV2": {
//                 "header": "Flat ₹125 off",
//                 "shortDescriptionList": [
//                   {
//                     "meta": "Flat ₹125 off on orders above ₹199",
//                     "discountType": "Flat",
//                     "operationType": "RESTAURANT"
//                   },
//                   {
//                     "meta": "50% off | Use code SAVERDEAL",
//                     "discountType": "Percentage",
//                     "operationType": "RESTAURANT"
//                   }
//                 ],
//                 "descriptionList": [
//                   {
//                     "meta": "Flat ₹125 off on orders above ₹199 | Use code SWIGGYWEEKENDS",
//                     "discountType": "Flat",
//                     "operationType": "RESTAURANT"
//                   },
//                   {
//                     "meta": "50% off up to ₹100 | Use code SAVERDEAL",
//                     "discountType": "Percentage",
//                     "operationType": "RESTAURANT"
//                   }
//                 ],
//                 "couponDetailsCta": "View coupon details"
//               },
//               "type": "F",
//               "nudgeBanners": [
//                 {
//                   "minValue": 139,
//                   "maxValue": 199,
//                   "priority": 1,
//                   "couponCode": "SWIGGYWEEKENDS",
//                   "discountInfo": {
//                     "discountType": "Flat",
//                     "value": 125
//                   },
//                   "lockedMessage": "Add items worth ₹<amount> to save ₹125 | Code SWIGGYWEEKENDS",
//                   "unlockedMessage": "SWIGGYWEEKENDS Coupon Unlocked! Use it to save ₹125",
//                   "logoCtx": {
                    
//                   }
//                 }
//               ],
//               "headerBanner": {
//                 "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/638757"
//               },
//               "expectationNotifiers": [
//                 {
//                   "icon": {
                    
//                   },
//                   "popup": {
//                     "cta": {
                      
//                     }
//                   },
//                   "type": "DISTANCE_FEE_NON_FOOD_LM",
//                   "halfCardPopup": {
//                     "halfCardPopupHeader": {
                      
//                     }
//                   }
//                 }
//               ],
//               "generalPurposeInfoListV2": [
//                 {
//                   "cta": {
//                     "info": {
//                       "recordings": {
                        
//                       }
//                     },
//                     "linkCta": {
                      
//                     }
//                   }
//                 }
//               ],
//               "ratingSlab": "RATING_SLAB_4",
//               "restaurantCategory": "RESTAURANT_CATEGORY_GOURMET",
//               "orderabilityCommunication": {
//                 "title": {
                  
//                 },
//                 "subTitle": {
                  
//                 },
//                 "message": {
                  
//                 },
//                 "customIcon": {
                  
//                 }
//               },
//               "hasBestsellerItems": true,
//               "cartOrderabilityNudgeBanner": {
//                 "parameters": {
                  
//                 },
//                 "presentation": {
                  
//                 }
//               },
//               "areaPostalCode": "0",
//               "latLong": "23.357798118337655,85.34026667080504"
//             },
//             "analytics": {
              
//             }
//           },
//           "relevance": {
//             "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
//             "sectionId": "POP_UP_CROUTON_MENU"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//             "layout": {
//               "rows": 1,
//               "columns": 5,
//               "horizontalScrollEnabled": true,
//               "itemSpacing": 12,
//               "lineSpacing": 10,
//               "widgetPadding": {
                
//               },
//               "containerStyle": {
//                 "containerPadding": {
//                   "left": 10,
//                   "right": 10,
//                   "bottom": 16
//                 }
//               },
//               "scrollBar": {
                
//               }
//             },
//             "id": "offerCollectionWidget_UX4",
//             "gridElements": {
//               "infoWithStyle": {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
//                 "offers": [
//                   {
//                     "info": {
//                       "header": "FLAT ₹125 OFF",
//                       "offerTag": "FLAT DEAL",
//                       "offerTagColor": "#E46D47",
//                       "offerIds": [
//                         "2f8af850-d86b-4ec1-805a-293b4661e03f"
//                       ],
//                       "expiryTime": "1970-01-01T00:00:00Z",
//                       "couponCode": "USE SWIGGYWEEKENDS",
//                       "description": "ABOVE ₹199",
//                       "offerType": "offers",
//                       "restId": "638757",
//                       "offerLogo": "offers/generic",
//                       "descriptionTextColor": "#7302060C"
//                     },
//                     "cta": {
//                       "type": "OFFER_HALF_CARD"
//                     }
//                   },
//                   {
//                     "info": {
//                       "header": "50% OFF UPTO ₹100",
//                       "offerTag": "DEFAULT",
//                       "offerTagColor": "#E46D47",
//                       "offerIds": [
//                         "1049f661-9874-449b-9750-c213df873a8c"
//                       ],
//                       "expiryTime": "1970-01-01T00:00:00Z",
//                       "couponCode": "USE SAVERDEAL",
//                       "description": "ABOVE ₹149",
//                       "offerType": "offers",
//                       "restId": "638757",
//                       "offerLogo": "offers/generic",
//                       "descriptionTextColor": "#7302060C"
//                     },
//                     "cta": {
//                       "type": "OFFER_HALF_CARD"
//                     }
//                   },
//                   {
//                     "info": {
//                       "header": "FLAT ₹150 OFF",
//                       "offerTag": "FLAT DEAL",
//                       "offerTagColor": "#E46D47",
//                       "offerIds": [
//                         "a5c4e414-13d1-4179-8471-08aed21989c1"
//                       ],
//                       "expiryTime": "1970-01-01T00:00:00Z",
//                       "couponCode": "USE FLATDEAL",
//                       "description": "ABOVE ₹450",
//                       "offerType": "offers",
//                       "restId": "638757",
//                       "offerLogo": "offers/generic",
//                       "descriptionTextColor": "#7302060C"
//                     },
//                     "cta": {
//                       "type": "OFFER_HALF_CARD"
//                     }
//                   },
//                   {
//                     "info": {
//                       "header": "20% OFF UPTO ₹100",
//                       "offerTagColor": "#E46D47",
//                       "logoBottom": "rng/md/ads/production/be912a4c543f00172d9f82c033ee7239",
//                       "offerIds": [
//                         "47574678-35e3-44b7-984b-92f2cfeb9d44"
//                       ],
//                       "expiryTime": "1970-01-01T00:00:00Z",
//                       "couponCode": "USE RUPAY100",
//                       "description": "ABOVE ₹129",
//                       "offerType": "offers",
//                       "restId": "638757",
//                       "offerLogo": "rng/md/ads/production/be912a4c543f00172d9f82c033ee7239",
//                       "descriptionTextColor": "#7302060C"
//                     },
//                     "cta": {
//                       "type": "OFFER_HALF_CARD"
//                     }
//                   },
//                   {
//                     "info": {
//                       "header": "20% OFF UPTO ₹150",
//                       "offerTagColor": "#E46D47",
//                       "logoBottom": "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
//                       "offerIds": [
//                         "007fd412-5fa3-4aa6-87d6-10a234fb10a2"
//                       ],
//                       "expiryTime": "1970-01-01T00:00:00Z",
//                       "couponCode": "USE ICICIFEST",
//                       "description": "ABOVE ₹600",
//                       "offerType": "offers",
//                       "restId": "638757",
//                       "offerLogo": "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
//                       "descriptionTextColor": "#7302060C"
//                     },
//                     "cta": {
//                       "type": "OFFER_HALF_CARD"
//                     }
//                   }
//                 ]
//               }
//             }
//           }
//         }
//       },
//       {
//         "groupedCard": {
//           "cardGroupMap": {
//             "REGULAR": {
//               "cards": [
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
//                       "badges": {
                        
//                       },
//                       "vegOnlyDetails": {
//                         "imageId": "AutoVegOnly_qkjowj",
//                         "title": "Showing only vegetarian options.",
//                         "description": "Tap on the VEG ONLY button to turn off the setting"
//                       },
//                       "topRatedFilter": {
                        
//                       }
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Recommended",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782046",
//                               "name": "Peri Peri French Fries",
//                               "category": "Continental",
//                               "imageId": "bf907b207dfb67c6a2285ca923c2503c",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 15000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782085",
//                               "name": "Double Chicken Burger",
//                               "category": "Continental",
//                               "imageId": "5a4160ea664d1d9022a401d8e6ff9356",
//                               "inStock": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "3.7",
//                                   "ratingCount": "3 ratings",
//                                   "ratingCountV2": "3"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782102",
//                               "name": "Chicken Cutlet",
//                               "category": "Continental",
//                               "imageId": "fa0644f7623f97df0e572d355eb3c3fd",
//                               "inStock": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782163",
//                               "name": "Alfredo Pasta",
//                               "category": "Continental",
//                               "imageId": "4a7ae5caabc124e74977bc807bd3cfb5",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594819",
//                               "name": "Paneer Chilly",
//                               "category": "Chinese Starters",
//                               "imageId": "fd9d85ca070fd123544091e227f12a47",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 24000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594867",
//                               "name": "Tandoori Chicken Half",
//                               "category": "Tandoori Starters",
//                               "imageId": "70de1d5f87e154b4a4e9bcdf77174257",
//                               "inStock": 1,
//                               "price": 28000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782237",
//                               "name": "Mushroom Do Pyaza",
//                               "category": "Indian Main Course",
//                               "imageId": "31988d62c1dbf88cbe4fa58f82a2e7d6",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 21000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594945",
//                               "name": "Chicken Handi",
//                               "category": "Indian Main Course",
//                               "imageId": "ac58e00fd10d3413d73216eb6660af7a",
//                               "inStock": 1,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
//                                 "variantGroups": [
//                                   {
//                                     "groupId": "22431036",
//                                     "name": "Quantity",
//                                     "variations": [
//                                       {
//                                         "name": "4 Pcs",
//                                         "price": 390,
//                                         "default": 1,
//                                         "id": "73260590",
//                                         "inStock": 1,
//                                         "isEnabled": 1
//                                       },
//                                       {
//                                         "name": "8 Pcs",
//                                         "price": 580,
//                                         "id": "73260591",
//                                         "inStock": 1,
//                                         "isEnabled": 1
//                                       }
//                                     ]
//                                   }
//                                 ],
//                                 "pricingModels": [
//                                   {
//                                     "variations": [
//                                       {
//                                         "groupId": "22431036",
//                                         "variationId": "73260590"
//                                       }
//                                     ],
//                                     "price": 39000
//                                   },
//                                   {
//                                     "variations": [
//                                       {
//                                         "groupId": "22431036",
//                                         "variationId": "73260591"
//                                       }
//                                     ],
//                                     "price": 58000
//                                   }
//                                 ]
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "defaultPrice": 39000,
//                               "ribbon": {
//                                 "text": "Bestseller",
//                                 "textColor": "#ffffff",
//                                 "topBackgroundColor": "#d53d4c",
//                                 "bottomBackgroundColor": "#b02331"
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "isBestseller": true,
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594946",
//                               "name": "Chicken Hyderabadi",
//                               "category": "Indian Main Course",
//                               "imageId": "ecc0edc8eadd16cf4fb199fe0c642021",
//                               "inStock": 1,
//                               "price": 39000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594948",
//                               "name": "Chicken Kassa",
//                               "category": "Indian Main Course",
//                               "imageId": "62bfb69981b6ee9fdbb3e9670cb8e34d",
//                               "inStock": 1,
//                               "price": 39000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594955",
//                               "name": "Murg Musallam",
//                               "category": "Indian Main Course",
//                               "imageId": "34a0bae05f26f042abe8c23f9975210b",
//                               "inStock": 1,
//                               "price": 63000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594785",
//                               "name": "Masala Kulcha",
//                               "category": "Indian Breads",
//                               "imageId": "4597da8fddedff2fc74b73b0ef7b5eba",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "showImage": true,
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "4.7",
//                                   "ratingCount": "6 ratings",
//                                   "ratingCountV2": "6"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ],
//                       "type": "CATEGORY_TYPE_RECOMMENDED"
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Continental",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782019",
//                               "name": "Sorted Veg",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 21000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782023",
//                               "name": "Cheese Balls",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782027",
//                               "name": "Maggi Cheese Balls",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782031",
//                               "name": "Corn Cheese Balls",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782035",
//                               "name": "Cheese Corn Nuggets",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 18000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782040",
//                               "name": "Paneer Fingers",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782042",
//                               "name": "French Fries",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782046",
//                               "name": "Peri Peri French Fries",
//                               "category": "Continental",
//                               "imageId": "bf907b207dfb67c6a2285ca923c2503c",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 15000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782051",
//                               "name": "Cheesy French Fries",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 18000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782071",
//                               "name": "Cheese Cigar",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 18000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782075",
//                               "name": "Veg Burger",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782078",
//                               "name": "Chicken Burger",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "price": 15000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782082",
//                               "name": "Chicken Egg Burger",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782085",
//                               "name": "Double Chicken Burger",
//                               "category": "Continental",
//                               "imageId": "5a4160ea664d1d9022a401d8e6ff9356",
//                               "inStock": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "3.7",
//                                   "ratingCount": "3 ratings",
//                                   "ratingCountV2": "3"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782094",
//                               "name": "Cheese Cherry Pineapple",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782098",
//                               "name": "Veg Cutlet",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782102",
//                               "name": "Chicken Cutlet",
//                               "category": "Continental",
//                               "imageId": "fa0644f7623f97df0e572d355eb3c3fd",
//                               "inStock": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782146",
//                               "name": "Jerk Chicken",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "price": 18000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782163",
//                               "name": "Alfredo Pasta",
//                               "category": "Continental",
//                               "imageId": "4a7ae5caabc124e74977bc807bd3cfb5",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782172",
//                               "name": "Tomato & Cream Sauce Chicken Pasta",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "price": 21000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "5.0",
//                                   "ratingCount": "7 ratings",
//                                   "ratingCountV2": "7"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594765",
//                               "name": "Cheese & Cream Sauce Pasta (chicken)",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "price": 21000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "4.4",
//                                   "ratingCount": "5 ratings",
//                                   "ratingCountV2": "5"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594766",
//                               "name": "Cheese & Cream Sauce Pasta (veg)",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 20000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594774",
//                               "name": "Tomato & Cream Sauce Veg Pasta",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 18000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594775",
//                               "name": "Veg Pasta Red Sauce",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594776",
//                               "name": "Veg Pasta White Sauce",
//                               "category": "Continental",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
//                                 "text": "Bestseller",
//                                 "textColor": "#ffffff",
//                                 "topBackgroundColor": "#d53d4c",
//                                 "bottomBackgroundColor": "#b02331"
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "isBestseller": true,
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782054",
//                               "name": "Nachos Corn Chaat",
//                               "category": "Continental",
//                               "isVeg": 1,
//                               "price": 15000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782090",
//                               "name": "Veg Cheese Goomsa",
//                               "category": "Continental",
//                               "isVeg": 1,
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782107",
//                               "name": "Fish Cutlet",
//                               "category": "Continental",
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782111",
//                               "name": "Paneer Shashlik",
//                               "category": "Continental",
//                               "isVeg": 1,
//                               "price": 35000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782138",
//                               "name": "Prawn Sizzler",
//                               "category": "Continental",
//                               "price": 49000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594767",
//                               "name": "Cheese Chilly Toast",
//                               "category": "Continental",
//                               "isVeg": 1,
//                               "price": 19000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594768",
//                               "name": "Cheesy Mexicorn Chaat",
//                               "category": "Continental",
//                               "isVeg": 1,
//                               "price": 21000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Soup",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781907",
//                               "name": "Cream Of Mushroom Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781908",
//                               "name": "Cream Of Chicken Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781910",
//                               "name": "Cream Of Tomato Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781913",
//                               "name": "Veg Clear Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 11000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781918",
//                               "name": "Tomato Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 11000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781927",
//                               "name": "Veg Manchow Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781931",
//                               "name": "Veg Hot & Sour Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781935",
//                               "name": "Chicken Manchow Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781940",
//                               "name": "Chicken Sweet Corn Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781944",
//                               "name": "Chicken Hot & Sour Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781947",
//                               "name": "Tomato Nariyal Shorba",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781952",
//                               "name": "Tomato Dhaniya Shorba",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782118",
//                               "name": "Garlic Soup Veg",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594777",
//                               "name": "Garlic Soup Non Veg",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594778",
//                               "name": "Lemon Corriander Roll",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594779",
//                               "name": "Veg Sweet Corn Soup",
//                               "category": "Soup",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 11000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
//                       "title": "Chinese Starters",
//                       "categories": [
//                         {
//                           "title": "Chinese Starters Veg",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781986",
//                                   "name": "Veg Manchurian",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781990",
//                                   "name": "Paneer Manchurian",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781995",
//                                   "name": "Paneer 65",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781999",
//                                   "name": "Mushroom 65",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782011",
//                                   "name": "Maggi Manchurian",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594811",
//                                   "name": "Assorted Veg Chilly",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594812",
//                                   "name": "Baby Corn Chilly",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 22000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594814",
//                                   "name": "Corn Salt & Pepper",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594815",
//                                   "name": "Crispy Potato Chilly",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594816",
//                                   "name": "Honey Chilly Potato",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594818",
//                                   "name": "Mushroom Chilly",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594819",
//                                   "name": "Paneer Chilly",
//                                   "category": "Chinese Starters",
//                                   "imageId": "fd9d85ca070fd123544091e227f12a47",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594820",
//                                   "name": "Veg Chilly",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594822",
//                                   "name": "Veg Lollipop",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782033",
//                                   "name": "Veg Sizzler",
//                                   "category": "Chinese Starters",
//                                   "isVeg": 1,
//                                   "price": 31000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594813",
//                                   "name": "Chana Chilly",
//                                   "category": "Chinese Starters",
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594817",
//                                   "name": "Momo Manchurian",
//                                   "category": "Chinese Starters",
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594821",
//                                   "name": "Veg Chopsy",
//                                   "category": "Chinese Starters",
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         },
//                         {
//                           "title": "Chinese Starters Non Veg",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782052",
//                                   "name": "Chicken 65",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 29000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782056",
//                                   "name": "Chicken Salt & Pepper",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 28000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782061",
//                                   "name": "Chicken Schezwan",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 29000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782065",
//                                   "name": "Chicken Garlic",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 28500,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782097",
//                                   "name": "Fish 65",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 31000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782101",
//                                   "name": "Prawn Schezwan",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 47000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782105",
//                                   "name": "Chicken Sizzler",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 39000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594823",
//                                   "name": "Chicken Chilly (b) (12pcs)",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594824",
//                                   "name": "Chicken Chilly (bl) (12pcs)",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 28000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "3.8",
//                                       "ratingCount": "4 ratings",
//                                       "ratingCountV2": "4"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594826",
//                                   "name": "Chicken Lollipop (6pcs)",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 30000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594827",
//                                   "name": "Chicken Manchurian",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 29000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594828",
//                                   "name": "Drums Of Heaven (6pcs)",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 31000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594830",
//                                   "name": "Fish Schezwan (8 Pcs)",
//                                   "category": "Chinese Starters",
//                                   "inStock": 1,
//                                   "price": 32000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594829",
//                                   "name": "Fish Chilly (8 Pcs)",
//                                   "category": "Chinese Starters",
//                                   "price": 29000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594831",
//                                   "name": "Prawn Chilly (8 Pcs)",
//                                   "category": "Chinese Starters",
//                                   "price": 45000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "nextAvailableAtMessage": "Next available at 2 pm, tomorrow",
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
//                       "title": "Tandoori Starters",
//                       "categories": [
//                         {
//                           "title": "Tandoori Starters Veg",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782110",
//                                   "name": "Paneer Tikka (6 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782113",
//                                   "name": "Paneer Hariyali Tikka (6 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 25000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782128",
//                                   "name": "Veg Seekh Kebab",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 22000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782129",
//                                   "name": "Paneer Achari Tikka (6 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 25000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782131",
//                                   "name": "Malai Tikka (6 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 27000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782132",
//                                   "name": "Mushroom Tikka",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782134",
//                                   "name": "Paneer Ajwani Tikka (6 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 25000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782136",
//                                   "name": "Hara Bhara Kebab (6 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782140",
//                                   "name": "Soya Afghani Tikka",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 25000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594834",
//                                   "name": "Mushroom Shooter (4 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 29000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594835",
//                                   "name": "Soya Chaap Tikka",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         },
//                         {
//                           "title": "Tandoori Starters Non Veg",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782156",
//                                   "name": "Chicken Seekh Kebab",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 34000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594841",
//                                   "name": "Chicken Abbu Chilli Kebab (8 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 35000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594844",
//                                   "name": "Chicken Achari (8 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 35000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594845",
//                                   "name": "Chicken Afghani Full",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 52000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594846",
//                                   "name": "Chicken Afghani Half",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 28000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594849",
//                                   "name": "Chicken Kasturi Kebab (8 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 35000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594852",
//                                   "name": "Chicken Leg Kebab (2 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 33000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594855",
//                                   "name": "Chicken Malai Tikka (8 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 35000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594862",
//                                   "name": "Chicken Pahari Kebab (8 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 35000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594865",
//                                   "name": "Chicken Tikka (8 Pcs)",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 33000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594866",
//                                   "name": "Tandoori Chicken Full",
//                                   "category": "Tandoori Starters",
//                                   "inStock": 1,
//                                   "price": 52000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594867",
//                                   "name": "Tandoori Chicken Half",
//                                   "category": "Tandoori Starters",
//                                   "imageId": "70de1d5f87e154b4a4e9bcdf77174257",
//                                   "inStock": 1,
//                                   "price": 28000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
//                       "title": "Noodles",
//                       "categories": [
//                         {
//                           "title": "Noodles Veg",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782169",
//                                   "name": "Veg Hakka Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 16000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "3.3",
//                                       "ratingCount": "3 ratings",
//                                       "ratingCountV2": "3"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782173",
//                                   "name": "Mix Veg Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782174",
//                                   "name": "Pan Fried Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782177",
//                                   "name": "Hongkong Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782179",
//                                   "name": "Singapuri Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782181",
//                                   "name": "Mongolian Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782183",
//                                   "name": "Desi Chowmein",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594870",
//                                   "name": "Chilly Garlic Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         },
//                         {
//                           "title": "Noodles Nonveg",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782184",
//                                   "name": "Chicken Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
//                                     "text": "Bestseller",
//                                     "textColor": "#ffffff",
//                                     "topBackgroundColor": "#d53d4c",
//                                     "bottomBackgroundColor": "#b02331"
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "isBestseller": true,
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "4.7",
//                                       "ratingCount": "9 ratings",
//                                       "ratingCountV2": "9"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782187",
//                                   "name": "Chicken Schezwan Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782188",
//                                   "name": "Chicken Pan Fried Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782191",
//                                   "name": "Pan Fried Mix Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782192",
//                                   "name": "Chicken Hongkong Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 22000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782193",
//                                   "name": "Chicken Singapuri Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 27000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782196",
//                                   "name": "Chicken Mongolian Noodles",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782197",
//                                   "name": "Chicken Desi Chowmein",
//                                   "category": "Noodles",
//                                   "inStock": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Maggi",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782200",
//                               "name": "Zaika Maggi",
//                               "category": "Maggi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782201",
//                               "name": "Delhi Tom Uncle Maggi",
//                               "category": "Maggi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782204",
//                               "name": "The Grove Special Maggi",
//                               "category": "Maggi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 18000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
//                       "title": "Fried Rice",
//                       "categories": [
//                         {
//                           "title": "Fried Rice (veg)",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781909",
//                                   "name": "Mexican Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 22000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782205",
//                                   "name": "Veg Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782208",
//                                   "name": "Mix Veg Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782212",
//                                   "name": "Schezwan Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782215",
//                                   "name": "Triple Schezwan Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 22000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782216",
//                                   "name": "Mongolian Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21500,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782219",
//                                   "name": "Hong Kong Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21500,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782220",
//                                   "name": "Singapuri Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21500,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782222",
//                                   "name": "Mushroom Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594925",
//                                   "name": "Chilly Garlic Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         },
//                         {
//                           "title": "Fried Rice (non Veg)",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781911",
//                                   "name": "Chicken Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 22000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
//                                     "text": "Bestseller",
//                                     "textColor": "#ffffff",
//                                     "topBackgroundColor": "#d53d4c",
//                                     "bottomBackgroundColor": "#b02331"
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "isBestseller": true,
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "4.3",
//                                       "ratingCount": "4 ratings",
//                                       "ratingCountV2": "4"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781916",
//                                   "name": "Egg Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781920",
//                                   "name": "Mix Non Veg Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
//                                     "text": "Bestseller",
//                                     "textColor": "#ffffff",
//                                     "topBackgroundColor": "#d53d4c",
//                                     "bottomBackgroundColor": "#b02331"
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "isBestseller": true,
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "2.7",
//                                       "ratingCount": "3 ratings",
//                                       "ratingCountV2": "3"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781924",
//                                   "name": "Mongolian Chicken Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 27000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781929",
//                                   "name": "Hongkong Chicken Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 27000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781934",
//                                   "name": "Schezwan Chicken Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 27000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781939",
//                                   "name": "Schezwan Triple Chicken Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 28000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594931",
//                                   "name": "Singapuri Chicken Fried Rice",
//                                   "category": "Fried Rice",
//                                   "inStock": 1,
//                                   "price": 27000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
//                       "title": "Indian Main Course",
//                       "categories": [
//                         {
//                           "title": "Indian Main Course ( Veg)",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781915",
//                                   "name": "Paneer Tikka Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781919",
//                                   "name": "Paneer Do Pyaza",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781923",
//                                   "name": "Mushroom Paneer",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782227",
//                                   "name": "Yellow Dal",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 12000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "5.0",
//                                       "ratingCount": "3 ratings",
//                                       "ratingCountV2": "3"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782228",
//                                   "name": "Dal Makhani",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 16000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782229",
//                                   "name": "Dal Mughlai",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782231",
//                                   "name": "Tawa Veg",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782233",
//                                   "name": "Nawabi Veg",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782234",
//                                   "name": "The Grove Special 3 Taste",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 35000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782235",
//                                   "name": "Kadai Veg",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782236",
//                                   "name": "Mushroom Matar Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 23000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782237",
//                                   "name": "Mushroom Do Pyaza",
//                                   "category": "Indian Main Course",
//                                   "imageId": "31988d62c1dbf88cbe4fa58f82a2e7d6",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782239",
//                                   "name": "Rajma Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 18000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782240",
//                                   "name": "Aloo Jeera",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 15000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782241",
//                                   "name": "Aloo Do Pyaza",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782242",
//                                   "name": "Veg Handi",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782243",
//                                   "name": "Veg Keema Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782244",
//                                   "name": "Veg Navratna Korma",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 23000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782245",
//                                   "name": "Veg Bagambar Kofta",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782246",
//                                   "name": "Malai Kofta",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782247",
//                                   "name": "Paneer Butter Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 23000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782248",
//                                   "name": "Palak Paneer",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782249",
//                                   "name": "Matar Paneer",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 23000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782250",
//                                   "name": "Corn Palak",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782251",
//                                   "name": "Plain Palak",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 16000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782253",
//                                   "name": "Keema Paneer",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782254",
//                                   "name": "Paneer Bhurji",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 21000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782255",
//                                   "name": "Paneer Pasanda",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782256",
//                                   "name": "Paneer Lababdar",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 24000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594934",
//                                   "name": "Aloo Gobhi Matar (dry)",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 17000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594935",
//                                   "name": "Dal Panchmil",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 16000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594936",
//                                   "name": "Kadhai Paneer",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 26000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594937",
//                                   "name": "Mix Veg",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "4.2",
//                                       "ratingCount": "5 ratings",
//                                       "ratingCountV2": "5"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594938",
//                                   "name": "Paneer Pakora",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 16000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594939",
//                                   "name": "Veg Jhalfrezy",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "isVeg": 1,
//                                   "price": 19000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "VEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         },
//                         {
//                           "title": "Indian Main Course ( Non Veg)",
//                           "itemCards": [
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104781965",
//                                   "name": "Butter Chicken Boneless",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 43000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782000",
//                                   "name": "Omelette",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 11000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782004",
//                                   "name": "Egg Bhurji",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 13000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782008",
//                                   "name": "Egg Curry",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 15000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "104782014",
//                                   "name": "Egg Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 16000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594940",
//                                   "name": "Butter Chicken Bone",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
//                                     "variantGroups": [
//                                       {
//                                         "groupId": "22431031",
//                                         "name": "Quantity",
//                                         "variations": [
//                                           {
//                                             "name": "2 Pcs",
//                                             "price": 260,
//                                             "default": 1,
//                                             "id": "73260576",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           },
//                                           {
//                                             "name": "4 Pcs",
//                                             "price": 410,
//                                             "id": "73260577",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           }
//                                         ]
//                                       }
//                                     ],
//                                     "pricingModels": [
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431031",
//                                             "variationId": "73260576"
//                                           }
//                                         ],
//                                         "price": 26000
//                                       },
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431031",
//                                             "variationId": "73260577"
//                                           }
//                                         ],
//                                         "price": 41000
//                                       }
//                                     ]
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "defaultPrice": 26000,
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594941",
//                                   "name": "Chicken Afghani Boneless",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 41000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594942",
//                                   "name": "Chicken Curry",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
//                                     "variantGroups": [
//                                       {
//                                         "groupId": "22431033",
//                                         "name": "Quantity",
//                                         "variations": [
//                                           {
//                                             "name": "2 Pcs",
//                                             "price": 210,
//                                             "default": 1,
//                                             "id": "73260582",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           },
//                                           {
//                                             "name": "4 Pcs",
//                                             "price": 380,
//                                             "id": "73260583",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           }
//                                         ]
//                                       }
//                                     ],
//                                     "pricingModels": [
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431033",
//                                             "variationId": "73260582"
//                                           }
//                                         ],
//                                         "price": 21000
//                                       },
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431033",
//                                             "variationId": "73260583"
//                                           }
//                                         ],
//                                         "price": 38000
//                                       }
//                                     ]
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "defaultPrice": 21000,
//                                   "ribbon": {
//                                     "text": "Bestseller",
//                                     "textColor": "#ffffff",
//                                     "topBackgroundColor": "#d53d4c",
//                                     "bottomBackgroundColor": "#b02331"
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "isBestseller": true,
//                                   "ratings": {
//                                     "aggregatedRating": {
//                                       "rating": "4.0",
//                                       "ratingCount": "11 ratings",
//                                       "ratingCountV2": "11"
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594943",
//                                   "name": "Chicken Do Pyaza",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
//                                     "variantGroups": [
//                                       {
//                                         "groupId": "22431034",
//                                         "name": "Quantity",
//                                         "variations": [
//                                           {
//                                             "name": "2 Pcs",
//                                             "price": 220,
//                                             "default": 1,
//                                             "id": "73260584",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           },
//                                           {
//                                             "name": "4 Pcs",
//                                             "price": 380,
//                                             "id": "73260585",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           }
//                                         ]
//                                       }
//                                     ],
//                                     "pricingModels": [
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431034",
//                                             "variationId": "73260584"
//                                           }
//                                         ],
//                                         "price": 22000
//                                       },
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431034",
//                                             "variationId": "73260585"
//                                           }
//                                         ],
//                                         "price": 38000
//                                       }
//                                     ]
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "defaultPrice": 22000,
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594945",
//                                   "name": "Chicken Handi",
//                                   "category": "Indian Main Course",
//                                   "imageId": "ac58e00fd10d3413d73216eb6660af7a",
//                                   "inStock": 1,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
//                                     "variantGroups": [
//                                       {
//                                         "groupId": "22431036",
//                                         "name": "Quantity",
//                                         "variations": [
//                                           {
//                                             "name": "4 Pcs",
//                                             "price": 390,
//                                             "default": 1,
//                                             "id": "73260590",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           },
//                                           {
//                                             "name": "8 Pcs",
//                                             "price": 580,
//                                             "id": "73260591",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           }
//                                         ]
//                                       }
//                                     ],
//                                     "pricingModels": [
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431036",
//                                             "variationId": "73260590"
//                                           }
//                                         ],
//                                         "price": 39000
//                                       },
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431036",
//                                             "variationId": "73260591"
//                                           }
//                                         ],
//                                         "price": 58000
//                                       }
//                                     ]
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "defaultPrice": 39000,
//                                   "ribbon": {
//                                     "text": "Bestseller",
//                                     "textColor": "#ffffff",
//                                     "topBackgroundColor": "#d53d4c",
//                                     "bottomBackgroundColor": "#b02331"
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "isBestseller": true,
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594946",
//                                   "name": "Chicken Hyderabadi",
//                                   "category": "Indian Main Course",
//                                   "imageId": "ecc0edc8eadd16cf4fb199fe0c642021",
//                                   "inStock": 1,
//                                   "price": 39000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594948",
//                                   "name": "Chicken Kassa",
//                                   "category": "Indian Main Course",
//                                   "imageId": "62bfb69981b6ee9fdbb3e9670cb8e34d",
//                                   "inStock": 1,
//                                   "price": 39000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594949",
//                                   "name": "Chicken Lababdar",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 41000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594950",
//                                   "name": "Chicken Malawani Tadka",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 43000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594951",
//                                   "name": "Chicken Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
//                                     "variantGroups": [
//                                       {
//                                         "groupId": "22431040",
//                                         "name": "Quantity",
//                                         "variations": [
//                                           {
//                                             "name": "2 Pcs",
//                                             "price": 240,
//                                             "default": 1,
//                                             "id": "73260604",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           },
//                                           {
//                                             "name": "4 Pcs",
//                                             "price": 390,
//                                             "id": "73260605",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           }
//                                         ]
//                                       }
//                                     ],
//                                     "pricingModels": [
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431040",
//                                             "variationId": "73260604"
//                                           }
//                                         ],
//                                         "price": 24000
//                                       },
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431040",
//                                             "variationId": "73260605"
//                                           }
//                                         ],
//                                         "price": 39000
//                                       }
//                                     ]
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "defaultPrice": 24000,
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594953",
//                                   "name": "Kadai Chicken",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
//                                     "variantGroups": [
//                                       {
//                                         "groupId": "22431042",
//                                         "name": "Quantity",
//                                         "variations": [
//                                           {
//                                             "name": "2 Pcs",
//                                             "price": 230,
//                                             "default": 1,
//                                             "id": "73260613",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           },
//                                           {
//                                             "name": "4 Pcs",
//                                             "price": 390,
//                                             "id": "73260615",
//                                             "inStock": 1,
//                                             "isEnabled": 1
//                                           }
//                                         ]
//                                       }
//                                     ],
//                                     "pricingModels": [
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431042",
//                                             "variationId": "73260613"
//                                           }
//                                         ],
//                                         "price": 23000
//                                       },
//                                       {
//                                         "variations": [
//                                           {
//                                             "groupId": "22431042",
//                                             "variationId": "73260615"
//                                           }
//                                         ],
//                                         "price": 39000
//                                       }
//                                     ]
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "defaultPrice": 23000,
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594954",
//                                   "name": "Kasturi Chicken Boneless",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 41000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594955",
//                                   "name": "Murg Musallam",
//                                   "category": "Indian Main Course",
//                                   "imageId": "34a0bae05f26f042abe8c23f9975210b",
//                                   "inStock": 1,
//                                   "price": 63000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594956",
//                                   "name": "Mutton Curry",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 41000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594958",
//                                   "name": "Mutton Masala",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 43000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             },
//                             {
//                               "card": {
//                                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                                 "info": {
//                                   "id": "105594961",
//                                   "name": "Mutton Roganjosh",
//                                   "category": "Indian Main Course",
//                                   "inStock": 1,
//                                   "price": 44000,
//                                   "variants": {
                                    
//                                   },
//                                   "variantsV2": {
                                    
//                                   },
//                                   "itemAttribute": {
//                                     "vegClassifier": "NONVEG"
//                                   },
//                                   "ribbon": {
                                    
//                                   },
//                                   "type": "ITEM",
//                                   "itemBadge": {
                                    
//                                   },
//                                   "badgesV2": {
                                    
//                                   },
//                                   "ratings": {
//                                     "aggregatedRating": {
                                      
//                                     }
//                                   }
//                                 },
//                                 "analytics": {
                                  
//                                 },
//                                 "hideRestaurantDetails": true
//                               }
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Indian Breads",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782070",
//                               "name": "Tandoori Roti",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 2000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "3.7",
//                                   "ratingCount": "6 ratings",
//                                   "ratingCountV2": "6"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782074",
//                               "name": "Butter Tandoori Roti",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 3000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782079",
//                               "name": "Plain Kulcha",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 4000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782087",
//                               "name": "Plain Naan",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 4500,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "5.0",
//                                   "ratingCount": "4 ratings",
//                                   "ratingCountV2": "4"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782092",
//                               "name": "Butter Naan",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5500,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
//                                 "text": "Bestseller",
//                                 "textColor": "#ffffff",
//                                 "topBackgroundColor": "#d53d4c",
//                                 "bottomBackgroundColor": "#b02331"
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "isBestseller": true,
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782095",
//                               "name": "Garlic Naan",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 7000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782117",
//                               "name": "Missi Roti",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594783",
//                               "name": "Gobhi Parantha",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594784",
//                               "name": "Lachha Parantha",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594785",
//                               "name": "Masala Kulcha",
//                               "category": "Indian Breads",
//                               "imageId": "4597da8fddedff2fc74b73b0ef7b5eba",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "4.7",
//                                   "ratingCount": "6 ratings",
//                                   "ratingCountV2": "6"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594786",
//                               "name": "Mirchi Parantha",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594787",
//                               "name": "Paneer Parantha",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6500,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594788",
//                               "name": "Pudina Parantha",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594789",
//                               "name": "Tawa Roti Butter",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 2500,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594790",
//                               "name": "Tawa Roti Plain",
//                               "category": "Indian Breads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 2000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Rice",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781914",
//                               "name": "Peas Pulao",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781925",
//                               "name": "Kashmiri Pulao",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 21000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781938",
//                               "name": "Veg Hyderabadi Biryani",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 22000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "3.3",
//                                   "ratingCount": "4 ratings",
//                                   "ratingCountV2": "4"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104781991",
//                               "name": "Chicken Tikka Biryani (6 Pcs)",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "price": 31000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782224",
//                               "name": "Steam Rice",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 13000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "4.8",
//                                   "ratingCount": "9 ratings",
//                                   "ratingCountV2": "9"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782225",
//                               "name": "Jeera Rice",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782226",
//                               "name": "Veg Pulao",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594791",
//                               "name": "Chicken Hyderabadi Biryani",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "price": 28000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
//                                 "text": "Bestseller",
//                                 "textColor": "#ffffff",
//                                 "topBackgroundColor": "#d53d4c",
//                                 "bottomBackgroundColor": "#b02331"
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "isBestseller": true,
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "4.2",
//                                   "ratingCount": "5 ratings",
//                                   "ratingCountV2": "5"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594792",
//                               "name": "Egg Biryani (2pcs)",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "price": 24000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594793",
//                               "name": "Mutton Biryani (4 Pcs)",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "price": 36000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594794",
//                               "name": "Paneer Somkey Biryani",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 24000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594795",
//                               "name": "Veg Khichdi",
//                               "category": "Rice",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
//                                 "text": "Bestseller",
//                                 "textColor": "#ffffff",
//                                 "topBackgroundColor": "#d53d4c",
//                                 "bottomBackgroundColor": "#b02331"
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "isBestseller": true,
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Salads",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782119",
//                               "name": "Green Salad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 9000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782123",
//                               "name": "Peanut Masala",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782124",
//                               "name": "Russian Salad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 14000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782125",
//                               "name": "Chicken Heaven Salad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "price": 16000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "NONVEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "5.0",
//                                   "ratingCount": "3 ratings",
//                                   "ratingCountV2": "3"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782127",
//                               "name": "Plain Papad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 3000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782130",
//                               "name": "Masala Papad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 7000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782133",
//                               "name": "Fried Papad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 4000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "105594802",
//                               "name": "Katchumber Salad",
//                               "category": "Salads",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 10000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Raita",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782137",
//                               "name": "Veg Raita",
//                               "category": "Raita",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 8000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782141",
//                               "name": "Fruit Raita",
//                               "category": "Raita",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 12000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782145",
//                               "name": "Pineapple Raita",
//                               "category": "Raita",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 11000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782149",
//                               "name": "Onion Raita",
//                               "category": "Raita",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 8000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782153",
//                               "name": "Boondi Raita",
//                               "category": "Raita",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782157",
//                               "name": "Plain Curd",
//                               "category": "Raita",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//                       "title": "Lassi",
//                       "itemCards": [
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782086",
//                               "name": "Salted Lassi",
//                               "category": "Lassi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782091",
//                               "name": "Sweet Lassi",
//                               "category": "Lassi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 7000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
//                                 "text": "Bestseller",
//                                 "textColor": "#ffffff",
//                                 "topBackgroundColor": "#d53d4c",
//                                 "bottomBackgroundColor": "#b02331"
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "isBestseller": true,
//                               "ratings": {
//                                 "aggregatedRating": {
//                                   "rating": "2.7",
//                                   "ratingCount": "3 ratings",
//                                   "ratingCountV2": "3"
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782096",
//                               "name": "Plain Butter Milk",
//                               "category": "Lassi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782100",
//                               "name": "Masala Butter Milk",
//                               "category": "Lassi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 6000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782104",
//                               "name": "Milk",
//                               "category": "Lassi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 5000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         },
//                         {
//                           "card": {
//                             "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                             "info": {
//                               "id": "104782109",
//                               "name": "Hot Chocolate Milk",
//                               "category": "Lassi",
//                               "inStock": 1,
//                               "isVeg": 1,
//                               "price": 17000,
//                               "variants": {
                                
//                               },
//                               "variantsV2": {
                                
//                               },
//                               "itemAttribute": {
//                                 "vegClassifier": "VEG"
//                               },
//                               "ribbon": {
                                
//                               },
//                               "type": "ITEM",
//                               "itemBadge": {
                                
//                               },
//                               "badgesV2": {
                                
//                               },
//                               "ratings": {
//                                 "aggregatedRating": {
                                  
//                                 }
//                               }
//                             },
//                             "analytics": {
                              
//                             },
//                             "hideRestaurantDetails": true
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
//                       "type": "FSSAI",
//                       "imageId": "fssai_final_edss9i",
//                       "text": [
//                         "License No. 21122016001042"
//                       ]
//                     }
//                   }
//                 },
//                 {
//                   "card": {
//                     "card": {
//                       "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
//                       "name": "The Grove\t",
//                       "area": "Bahu Bazar",
//                       "completeAddress": "GANPAT NAGAR,OPPOSITE ICE FACTORY,NEAR BAHU BAZAR,, Ranchi Urban 2, Ranchi Urban 2, Ranchi, Jharkhand - 834001"
//                     }
//                   }
//                 }
//               ]
//             }
//           }
//         }
//       }
//     ],
//     "firstOffsetRequest": true
//   },
//   "tid": "ff76092b-3660-4fa4-a4ea-d9bf0f0b1d70",
//   "sid": "7se47e05-1d33-414e-8cba-d393b22c36f6",
//   "deviceId": "890ef447-3305-d071-ad31-245961358dd8",
//   "csrfToken": "AfuDmsogpGzw-vE3Fp1-3TNHqoVqySkpJ7-lpHM0"
// }
// ]

 // RestaurantList is JSON Data for displaying cards
//export const restaurantList = [
  export const restaurantList=[
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Domino's Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410476",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
      city: "21",
      area: "althan bhatar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ldtibwymvzehvmdwl8la",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
      locality: "Adajan FC",
      parentId: 236673,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "410476",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81094",
      name: "Richie Rich Juices & Shakes",
      uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
      locality: "Parle Point",
      parentId: 771,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "81094",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311443",
      name: "Siddhi Icecream & Thick Shake",
      uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "spd3y5gok3vvwqulgmda",
      cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "siddhi-icecream-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
      locality: "Athwa",
      parentId: 387846,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311443",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "307070",
      name: "Pizza Pie",
      uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "bvr70adr30ejyr5ua79k",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "pizza-pie-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
      locality: "Nanpura",
      parentId: 158854,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "307070",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "76858",
      name: "Feeling Hungry",
      uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      tags: [],
      costForTwo: 2000,
      costForTwoString: "₹20 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "feeling-hungry-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
      locality: "Royal Residency, Adajan Gam",
      parentId: 79237,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "76858",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "617279",
      name: "Malaxmi Fast Food",
      uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
      city: "21",
      area: "Adajan",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "agkm7cflq72tkualhstb",
      cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 44,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 9.100000381469727,
      slugs: {
        restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
        city: "surat",
      },
      cityState: "21",
      address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
      locality: "Palanpur Food Zone",
      parentId: 373635,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "617279",
        deliveryTime: 44,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 9.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "469264",
      name: "Dessert House",
      uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "jegpumsjcmomksbr2sxr",
      cuisines: ["Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "dessert-house-piplod-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
      locality: "Piplod",
      parentId: 71430,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "469264",
        deliveryTime: 27,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "395204",
      name: "McDonald's Gourmet Burger Collection",
      uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
      city: "21",
      area: "Piplod",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 8.199999809265137,
      slugs: {
        restaurant:
          "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
      locality: "Valentine Cinema",
      parentId: 10761,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "395204",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 8.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "193541",
      name: "Behrouz Biryani",
      uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
      city: "21",
      area: "Adajan Patiya",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "craozjakzx7sll2uracb",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "behrouz-biryani-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
      locality: "Nr Navyug College, Rander Road",
      parentId: 1803,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "193541",
        deliveryTime: 49,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "475510",
      name: "Momos House",
      uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "vmold2zualdrrypxcvue",
      cuisines: ["Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "momo’s-house-piplod-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
      locality: "Vesu",
      parentId: 15884,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "475510",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "127596",
      name: "Sabir Chicken",
      uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
      city: "21",
      area: "Chowk Bazar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "kilrdjqt8chduasii5ni",
      cuisines: ["North Indian", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "sabir-chicken-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
      locality: "Chowk Bazar",
      parentId: 173978,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "127596",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "64656",
      name: "Mahesh Pav Bhaji",
      uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
      city: "21",
      area: "Adajan",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
      cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 6.900000095367432,
      slugs: {
        restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
      locality: "Adajan Gam",
      parentId: 6553,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "64656",
        deliveryTime: 36,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 6.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "255204",
      name: "The Dango Cake Shop",
      uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
      city: "21",
      area: "Galaxy Circle",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "mnvfpsoealkflze4e5qi",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 27000,
      costForTwoString: "₹270 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 7.699999809265137,
      slugs: {
        restaurant: "twisted-cake-live-cake-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address: "44 La Victoria, galaxy circle pal Surat",
      locality: "Galaxy Circle",
      parentId: 207513,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "255204",
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 7.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "664656",
      name: "Cheezylicious Cafe",
      uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
      cuisines: [
        "Cafe",
        "Fast Food",
        "Chinese",
        "Snacks",
        "Italian",
        "Mexican",
      ],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "cheezylicious-cafe-piplod-piplod-2",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
      locality: "Dream heritage",
      parentId: 59292,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "664656",
        deliveryTime: 38,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
];