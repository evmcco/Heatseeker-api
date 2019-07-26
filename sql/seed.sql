insert into sneakers
  (sneaker_name, price, image_url)
values
  ('Yeezy Boost 350 V2 Black Non-Reflective', 300, 'https://images.solecollector.com/images/fl_lossy,q_auto/c_crop,h_617,w_1200,x_0,y_265/xebx2nw1iducqfidh4iv/adidas-yeezy-boost-350-v2-black-fu9006-lateral'),
  ('Parra x Nike SB Blazer Low', 85, 'https://www.kicksonfire.com/wp-content/uploads/2019/07/Parra-x-Nike-SB-Blazer-Low-1-681x387.jpg')

insert into stores
  (store_name, address, address_lat, address_lon)
values
  ('A Ma Maniere', '969 Marietta St NW, Unit 200, Atlanta, GA 30318', 33.779205, -84.409366),
  ('Social Status', '280 Elizabeth St. Suite E. Atlanta, GA. 30307', 33.762526, -84.358137),
  ('Wish', '447 Moreland Ave, Atlanta, GA 30307', 33.766789, -84.348697),
  ('Kith', '337 Lafayette St, New York, NY 10012', 40.726863, -73.994141)


insert into raffles
  (sneaker_id, store_id, start_time, end_time, post_url, description)
values
  (1, 1, '2019-07-30 10:00:00', '2019-07-31 20:00:00', 'https://www.instagram.com/p/ByVkGHgllfg/', 'In-store raffle; winners will be contacted Friday; one entry per person and must have valid ID'),
  (1, 2, '2019-07-30 12:00:00', '2019-08-01 20:00:00', 'https://www.instagram.com/p/BzyhGkelz_6/', 'Virtual Line signups; Go in-store with valid ID, put your name on the list and this is your place in line for the release Saturday. Pickups begin at 11am'),
  (2, 1, '2019-08-04 10:00:00', '2019-08-05 20:00:00', 'https://www.instagram.com/p/BxIY8oBBPS6/', 'In-store raffle; winners will be contacted Saturday, one entry per person and must have valid ID'),
  (2, 3, '2019-08-04 12:00:00', '2019-08-05 21:00:00', 'https://www.instagram.com/p/By-wGk5nKk6/', 'In-store raffle; one entry per person and must have valid ID'),
  (1, 4, '2019-08-02 18:00:00', '2019-08-03 18:00:00', null, 'in-store raffle')