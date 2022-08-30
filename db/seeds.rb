puts "📃 Seeding data..."

user_first = User.create!(username: 'emilydehaan', first_name: 'Emily', last_name: "DeHaan", email_address: 'emily@gmail.com', password: 'abc123')

user_second = User.create!(username: 'bree.r', first_name: 'Bree', last_name: "R", email_address: 'bree@gmail.com', password: 'abc123')

#Belong to user_first
Post.create!(title: 'Red Couture Gown', image: 'https://i.etsystatic.com/18815696/r/il/65d527/2226126760/il_794xN.2226126760_mupy.jpg', link: 'https://www.etsy.com/listing/773005022/wedding-red-dress-ballgown-haute-couture?click_key=77c526d94b310875316f720858a86b32c149d4a7%3A773005022&click_sum=51d2cdcc&rec_type=ss&ref=landingpage_similar_listing_top-1&frs=1', category: 'Dresses', user: user_first)

Post.create!(title: 'Rainbow Springs Private Island House', image: 'https://media.vrbo.com/lodging/26000000/25180000/25175400/25175388/2e5f2060.f10.jpg', link: 'https://www.vrbo.com/480385', category: 'Venue', user: user_first)

Post.create!(title: 'Potion Bottles', image: 'https://m.media-amazon.com/images/I/810l2QTvNPS._AC_SX679_.jpg', link: 'https://www.amazon.com/Pieces-Stopper-Wishing-Bottles-Container/dp/B0925YDSD2/ref=sr_1_4?keywords=potion+bottles+for+witches&qid=1653945216&sr=8-4', category: 'Party Favors', user: user_first)

Post.create!(title: 'Cauley Square', image: 'https://partyspace.com/images/providers/IMG_2104.JPG', link: 'https://partyspace.com/southflorida/venue/Cauley-Square-Historic-Village', category: 'Venue', user: user_first)

Post.create!(title: 'Hanging Lights & Vines', image: 'https://emmalovesweddings.com/wp-content/uploads/2020/02/string-lights-and-greenery-wedding-backdrop-ideas.jpg', link: 'https://emmalovesweddings.com/wedding-lighting-decoration-ideas/', category: 'Decorations', user: user_first)



#Belong to user_second
Post.create!(title: 'Floating Lotus Candles"', image: 'https://m.media-amazon.com/images/I/61IAx6o3yhL._AC_SX679_.jpg', link: 'https://www.amazon.com/Toner-Depot-Floating-Lanterns-Outdoor/dp/B083N9QWYX/ref=asc_df_B083N9QWYX/?tag=&linkCode=df0&hvadid=416672409243&hvpos=&hvnetw=g&hvrand=11598109552457372648&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9012145&hvtargid=pla-884623530624&ref=&adgrpid=94717461300&th=1', category: 'Decorations', user: user_second)


Post.create!(title: 'Loose Updo"', image: 'https://i.etsystatic.com/27488900/r/il/03eef8/2891139372/il_1588xN.2891139372_9k38.jpg', link: 'https://www.etsy.com/listing/967639909/bridal-hair-piece-wedding-hair?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_e-weddings-accessories-hair_accessories-hair_jewelry&utm_custom1=_k_Cj0KCQjw1tGUBhDXARIsAIJx01mWg2xNLjbGqTAjbWIEfAM-eZMxZCqHMppsbIC-V12z3SVmsGYeNYcaAr6LEALw_wcB_k_&utm_content=go_12569403835_122439474151_507439816466_pla-315321639969_c__967639909_520532460&utm_custom2=12569403835&gclid=Cj0KCQjw1tGUBhDXARIsAIJx01mWg2xNLjbGqTAjbWIEfAM-eZMxZCqHMppsbIC-V12z3SVmsGYeNYcaAr6LEALw_wcB', category: 'Hair/Makeup', user: user_second)


Post.create!(title: 'Rainbow Springs Ceremony', image: 'https://i.imgur.com/ZGKzXaO.jpeg', link: 'https://imgur.com/gallery/DdYQFOg', category: 'Venue', user: user_second)

Post.create!(title: 'Gothic Fairy Black Dress', image: 'https://i.etsystatic.com/18815696/r/il/a3a9dd/1713374180/il_1588xN.1713374180_3zrg.jpg', link: 'https://www.etsy.com/listing/663578799/alternative-sexy-black-wedding-dress', category: 'Dresses', user: user_second)





puts "✅ Done seeding"
