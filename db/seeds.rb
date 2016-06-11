User.create(uid: "admin", password: "password", email: "admin@diggit.com")

MEDIA = ["link", "text"]
CATEGORIES = ["random", "tech", "gaming", "food"]

60.times do
  Post.create!(
    media_type: MEDIA.sample,
    category: CATEGORIES.sample,
    title: Faker::Hipster.sentence,
    author: Faker::Internet.user_name,
    upvotes: rand(100),
    link: Faker::Internet.url,
    body: Faker::Lorem.paragraph
  )
end