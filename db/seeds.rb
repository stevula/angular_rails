TYPES = ["link", "text"]
CATEGORIES = ["random", "tech", "gaming", "food"]

60.times do
  Post.create(
    type: TYPES.sample,
    category: CATEGORIES.sample,
    title: Faker
    author: Faker::Internet.user_name
  )
end