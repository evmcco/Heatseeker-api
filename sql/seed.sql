insert into sneakers
  (sneaker_name, price, image_url)
values
  ('Yeezy Boost 350 V2 Black Non-Reflective', 300, 'https://image.goat.com/attachments/product_template_pictures/images/022/234/245/original/505488_00.png.png'),
  ('Parra x Nike SB Blazer Low', 85, 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/gyk6wx7i7gtjubjkgmfl/sb-blazer-low-parra-release-date.jpg'),
  ('Nike Air Jordan 1 Retro High OG Chicago', 160, 'https://media.endclothing.com/media/catalog/product/0/1/01-06-2015_nike_airjordan1retrohighogchicago_red_white_sh_1.jpg'),
  ('Kyrie 5 x Spongebob Squarepants', 130, 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/upf9h4ezmy0dj17veolw/kyrie-5-spongebob-squarepants-release-date.jpg')

insert into stores
  (store_name, address, address_lat, address_lon)
values
  ('A Ma Maniere', '969 Marietta St NW, Unit 200, Atlanta, GA 30318', 33.779205, -84.409366),
  ('Social Status', '280 Elizabeth St. Suite E. Atlanta, GA. 30307', 33.762526, -84.358137),
  ('Wish Atlanta', '447 Moreland Ave, Atlanta, GA 30307', 33.766789, -84.348697),
  ('Kith New York', '337 Lafayette St, New York, NY 10012', 40.726863, -73.994141),
  ('Flight Club LA', '525 N Fairfax Ave, Los Angeles, CA 90036', 34.081290, -118.361618)

insert into raffles
  (sneaker_id, store_id, start_time, end_time, post_url, description)
values
  (1, 1, '2019-08-05 10:00:00', '2019-08-06 20:00:00', 'https://www.instagram.com/p/ByVkGHgllfg/', 'In-store raffle; winners will be contacted Friday; one entry per person and must have valid ID'),
  (1, 2, '2019-08-07 12:00:00', '2019-08-08 20:00:00', 'https://www.instagram.com/p/BzyhGkelz_6/', 'Virtual Line signups; Go in-store with valid ID, put your name on the list and this is your place in line for the release Saturday. Pickups begin at 11am'),
  (2, 1, '2019-08-06 10:00:00', '2019-08-07 20:00:00', 'https://www.instagram.com/p/BxIY8oBBPS6/', 'In-store raffle; winners will be contacted Saturday, one entry per person and must have valid ID'),
  (2, 3, '2019-08-08 12:00:00', '2019-08-09 21:00:00', 'https://www.instagram.com/p/By-wGk5nKk6/', 'In-store raffle; one entry per person and must have valid ID'),
  (1, 4, '2019-08-05 18:00:00', '2019-08-07 18:00:00', null, 'In-store raffle; one entry per person and must have valid ID'),
  (3, 4, '2019-08-05 18:00:00', '2019-08-08 18:00:00', null, 'In-store raffle; one entry per person and must have valid ID'),
  (4, 5, '2019-08-10 18:00:00', '2019-08-11 18:00:00', null, 'In-store raffle; one entry per person and must have valid ID')